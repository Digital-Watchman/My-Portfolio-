[deploy_to_github (1).py](https://github.com/user-attachments/files/28241582/deploy_to_github.1.py)[Uploading deploy_to_g#!/usr/bin/env python3
"""
Auto-deploy Sovan's portfolio to GitHub Pages
Run: python3 deploy_to_github.py
"""

import subprocess, sys, os, shutil, time

# ─── colours for terminal ───
G = "\033[92m"; B = "\033[94m"; Y = "\033[93m"; R = "\033[91m"; X = "\033[0m"; W = "\033[1m"

def run(cmd, cwd=None, capture=False):
    r = subprocess.run(cmd, shell=True, cwd=cwd,
                       capture_output=capture, text=True)
    return r

def ok(msg):  print(f"{G}✔{X}  {msg}")
def info(msg):print(f"{B}→{X}  {msg}")
def warn(msg):print(f"{Y}!{X}  {msg}")
def err(msg): print(f"{R}✘{X}  {msg}")
def header(msg): print(f"\n{W}{msg}{X}\n" + "─"*50)

# ════════════════════════════════════════════════
header("🚀  GitHub Pages Auto-Deployer")
print("This script will publish your portfolio live.\n")

# ─── Step 1: check git ───
header("Step 1 — Checking git")
r = run("git --version", capture=True)
if r.returncode != 0:
    err("Git not found. Install from https://git-scm.com/downloads then re-run.")
    sys.exit(1)
ok(f"Git found: {r.stdout.strip()}")

# ─── Step 2: get github username ───
header("Step 2 — Your GitHub username")
print("(This becomes part of your live URL)")
username = input(f"{B}Enter your GitHub username:{X} ").strip()
if not username:
    err("Username cannot be empty."); sys.exit(1)

repo_name = "portfolio"
live_url  = f"https://{username}.github.io/{repo_name}/"
info(f"Your site will be live at: {G}{live_url}{X}")

# ─── Step 3: GitHub token ───
header("Step 3 — GitHub Personal Access Token")
print("You need a token so this script can create the repo for you.")
print(f"\n{W}How to get one (30 seconds):{X}")
print(f"  1. Go to: {B}https://github.com/settings/tokens/new{X}")
print(f"  2. Note: type any name e.g.  portfolio-deploy")
print(f"  3. Expiration: 7 days (fine for one-time use)")
print(f"  4. Scopes: tick  {W}repo{X}  (top checkbox)")
print(f"  5. Click 'Generate token' → copy the token")
print(f"\n{Y}Paste it below (it won't show as you type — that's normal):{X}")

import getpass
token = getpass.getpass(f"{B}Paste token:{X} ").strip()
if not token:
    err("Token cannot be empty."); sys.exit(1)

# ─── Step 4: find the HTML file ───
header("Step 4 — Finding your portfolio file")

# look next to this script first, then common locations
search_paths = [
    os.path.join(os.path.dirname(os.path.abspath(__file__)), "sovan_linkedin_profile.html"),
    os.path.expanduser("~/Downloads/sovan_linkedin_profile.html"),
    os.path.expanduser("~/Desktop/sovan_linkedin_profile.html"),
]
html_src = None
for p in search_paths:
    if os.path.exists(p):
        html_src = p
        break

if not html_src:
    warn("Couldn't find sovan_linkedin_profile.html automatically.")
    html_src = input(f"{B}Drag & drop the HTML file here (or type full path):{X} ").strip().strip("'\"")
    if not os.path.exists(html_src):
        err(f"File not found: {html_src}"); sys.exit(1)

ok(f"Found portfolio file: {html_src}")

# ─── Step 5: create repo via API ───
header("Step 5 — Creating GitHub repo")

import urllib.request, json, urllib.error

api_url  = "https://api.github.com/user/repos"
payload  = json.dumps({"name": repo_name, "private": False,
                        "description": "My professional portfolio",
                        "auto_init": False}).encode()
req = urllib.request.Request(api_url, data=payload, method="POST")
req.add_header("Authorization", f"token {token}")
req.add_header("Content-Type", "application/json")
req.add_header("User-Agent", "portfolio-deployer")

try:
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read())
        ok(f"Repo created: {data['html_url']}")
except urllib.error.HTTPError as e:
    body = e.read().decode()
    if "already exists" in body or e.code == 422:
        warn(f"Repo '{repo_name}' already exists — will use it.")
    else:
        err(f"API error {e.code}: {body}"); sys.exit(1)

# ─── Step 6: build local git repo ───
header("Step 6 — Building local repo")

work_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_deploy_tmp")
if os.path.exists(work_dir):
    shutil.rmtree(work_dir)
os.makedirs(work_dir)

shutil.copy(html_src, os.path.join(work_dir, "index.html"))
ok("Copied portfolio as index.html")

remote = f"https://{username}:{token}@github.com/{username}/{repo_name}.git"

cmds = [
    "git init",
    f'git config user.email "{username}@users.noreply.github.com"',
    f'git config user.name "{username}"',
    "git add .",
    'git commit -m "Deploy portfolio"',
    "git branch -M main",
    f"git remote add origin {remote}",
    "git push -u origin main --force",
]

for cmd in cmds:
    display = cmd if "token" not in cmd else cmd.split("@")[1]
    info(f"Running: {display}")
    r = run(cmd, cwd=work_dir)
    if r.returncode != 0:
        err(f"Command failed: {cmd}"); sys.exit(1)

ok("Code pushed to GitHub!")

# ─── Step 7: enable GitHub Pages ───
header("Step 7 — Enabling GitHub Pages")

pages_url = f"https://api.github.com/repos/{username}/{repo_name}/pages"
pages_payload = json.dumps({"source": {"branch": "main", "path": "/"}}).encode()
req2 = urllib.request.Request(pages_url, data=pages_payload, method="POST")
req2.add_header("Authorization", f"token {token}")
req2.add_header("Content-Type", "application/json")
req2.add_header("User-Agent", "portfolio-deployer")
req2.add_header("Accept", "application/vnd.github.v3+json")

try:
    with urllib.request.urlopen(req2) as resp:
        ok("GitHub Pages enabled!")
except urllib.error.HTTPError as e:
    body = e.read().decode()
    if "already enabled" in body or e.code == 409:
        ok("GitHub Pages already enabled.")
    else:
        warn(f"Pages API returned {e.code} — you may need to enable manually.")
        warn("Go to: repo Settings → Pages → Source: main branch → Save")

# ─── Done ───
header("🎉  All done!")
print(f"{W}Your portfolio will be live at:{X}")
print(f"\n  {G}{W}{live_url}{X}\n")
print(f"{Y}Note: GitHub Pages takes 1–3 minutes to go live.{X}")
print(f"Open that URL in your browser after a minute.\n")
print(f"{W}Next step:{X} Copy that URL and add it to your LinkedIn profile")
print(f"under:  Profile → Featured section → Add a link\n")

# cleanup token from memory
token = None
ithub (1).py…]()
