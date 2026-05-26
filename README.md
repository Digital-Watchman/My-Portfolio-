# My-Portfolio-[sovan_portfolio_selfcontained.html](https://github.com/user-attachments/files/28241573/sovan_portfolio_selfcontained.html)
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sovan Kumar Mallick · Cybersecurity & GRC</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

:root {
  --navy:#0d1f3c; --navy-mid:#1a3460; --blue:#1a6fc4; --blue-light:#e8f2fd;
  --accent:#00c49a; --accent-soft:#e0faf4; --gold:#d4a843; --gold-soft:#fdf4e0;
  --text:#1a1a2e; --text-muted:#5a6478; --text-light:#8896aa;
  --bg:#f0f2f7; --card:#ffffff; --border:rgba(0,0,0,0.07);
}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'DM Sans','Segoe UI',system-ui,sans-serif;background:var(--bg);color:var(--text);font-size:14px;line-height:1.6;min-height:100vh}
.page{max-width:760px;margin:0 auto;padding:24px 16px 60px}
.card{background:var(--card);border-radius:16px;border:1px solid var(--border);margin-bottom:12px;overflow:hidden;box-shadow:0 2px 12px rgba(13,31,60,.06);transition:box-shadow .2s}
.card:hover{box-shadow:0 4px 24px rgba(13,31,60,.10)}

.cover{height:140px;position:relative;background:var(--navy);overflow:hidden}
.cover canvas{position:absolute;inset:0}

.profile-top{padding:0 24px;position:relative}
.avatar-row{display:flex;align-items:flex-end;justify-content:space-between;margin-top:-44px;margin-bottom:14px}
.avatar{width:96px;height:96px;border-radius:50%;background:linear-gradient(135deg,var(--navy-mid),var(--blue));border:4px solid #fff;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',Georgia,serif;font-size:30px;font-weight:700;color:#fff;letter-spacing:1px;flex-shrink:0;position:relative}
.open-badge{position:absolute;bottom:4px;right:-6px;background:var(--accent);color:#fff;font-size:9px;font-weight:600;padding:3px 7px;border-radius:10px;border:2px solid #fff;white-space:nowrap}
.action-btns{display:flex;gap:8px;padding-bottom:4px}
.btn{border-radius:20px;padding:8px 20px;font-size:13px;font-weight:500;cursor:pointer;font-family:inherit;border:none;transition:all .15s}
.btn-primary{background:var(--navy);color:#fff}
.btn-secondary{background:transparent;color:var(--blue);border:1.5px solid var(--blue)}
.name{font-family:'Playfair Display',Georgia,serif;font-size:26px;font-weight:700;color:var(--navy);line-height:1.2;margin-bottom:5px}
.headline{font-size:13.5px;color:var(--text-muted);line-height:1.6;margin-bottom:10px}
.headline strong{color:var(--text);font-weight:500}
.meta-row{display:flex;flex-wrap:wrap;gap:6px 20px;margin-bottom:16px}
.meta-item{display:flex;align-items:center;gap:5px;font-size:12.5px;color:var(--text-light)}
.meta-icon{font-size:15px;display:inline-block;width:16px;text-align:center}

.open-to{margin:0 24px 20px;background:var(--accent-soft);border:1px solid rgba(0,196,154,.25);border-radius:12px;padding:14px 18px;display:flex;align-items:flex-start;gap:12px}
.open-to-title{font-size:12px;font-weight:600;color:#0a5c48;margin-bottom:3px;letter-spacing:.5px;text-transform:uppercase}
.open-to-roles{font-size:13px;color:#0d7a61;line-height:1.5}

.stats-bar{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--border);text-align:center}
.stat{padding:14px 0;border-right:1px solid var(--border)}
.stat:last-child{border-right:none}
.stat-n{font-family:'Playfair Display',Georgia,serif;font-size:22px;font-weight:700;color:var(--navy)}
.stat-l{font-size:11px;color:var(--text-light);margin-top:2px}

.sec-head{display:flex;align-items:center;justify-content:space-between;padding:18px 24px 14px;border-bottom:1px solid var(--border)}
.sec-title{font-family:'Playfair Display',Georgia,serif;font-size:17px;font-weight:600;color:var(--navy);display:flex;align-items:center;gap:8px}
.sec-body{padding:18px 24px 22px}

.about-text{font-size:13.5px;color:#3a3a4a;line-height:1.8}
.about-quote{margin-top:16px;padding:14px 18px 14px 36px;background:var(--navy);border-radius:10px;font-size:13px;color:rgba(255,255,255,.85);line-height:1.7;font-style:italic;position:relative}
.about-quote::before{content:'"';position:absolute;top:-2px;left:14px;font-size:48px;color:var(--accent);font-family:'Playfair Display',serif;line-height:1;opacity:.5}

.exp-item{display:flex;gap:16px;padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid var(--border)}
.exp-item:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}
.exp-logo{width:46px;height:46px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;border:1px solid var(--border)}
.exp-logo.cyber{background:#e8f2fd}.exp-logo.edu{background:var(--gold-soft)}
.exp-title{font-size:14px;font-weight:600;color:var(--navy);margin-bottom:2px}
.exp-org{font-size:13px;color:var(--blue);margin-bottom:2px}
.exp-meta{font-size:12px;color:var(--text-light);margin-bottom:8px}
.exp-desc{font-size:12.5px;color:#4a4a5a;line-height:1.7}
.exp-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.exp-tag{background:var(--blue-light);color:var(--navy-mid);font-size:11.5px;padding:3px 11px;border-radius:12px;border:.5px solid rgba(26,111,196,.2);font-weight:500}

.edu-item{display:flex;gap:16px;margin-bottom:16px;align-items:flex-start}
.edu-item:last-child{margin-bottom:0}
.edu-logo{width:46px;height:46px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;border:1px solid var(--border)}
.edu-logo.theo{background:var(--gold-soft)}.edu-logo.cyber{background:var(--blue-light)}.edu-logo.labs{background:var(--accent-soft)}
.edu-name{font-size:14px;font-weight:600;color:var(--navy);margin-bottom:2px}
.edu-degree{font-size:13px;color:var(--text-muted);margin-bottom:2px}
.edu-year{font-size:12px;color:var(--text-light)}

.cert-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.cert-card{background:#f8fbff;border:1px solid rgba(26,111,196,.15);border-radius:12px;padding:14px 16px;display:flex;flex-direction:column;gap:4px}
.cert-name{font-size:14px;font-weight:600;color:var(--navy)}
.cert-issuer{font-size:12px;color:var(--text-light)}
.cert-badge{display:inline-flex;align-items:center;gap:4px;font-size:11.5px;font-weight:600;padding:3px 8px;border-radius:6px;width:fit-content;margin-top:4px}
.cert-badge.progress{background:#fff8e8;color:#a06000}
.cert-badge.ongoing{background:#e8f3ff;color:#0a4a99}

.skills-wrap{display:flex;flex-wrap:wrap;gap:8px}
.skill-pill{font-size:12.5px;padding:5px 15px;border-radius:20px;font-weight:500;border:1px solid rgba(26,111,196,.2);color:var(--navy-mid);background:var(--blue-light);transition:all .15s;cursor:default}
.skill-pill:hover{background:var(--blue);color:#fff;border-color:var(--blue)}
.skill-pill.core{background:var(--navy);color:#fff;border-color:var(--navy)}

.vol-item{display:flex;gap:16px;margin-bottom:18px}
.vol-item:last-child{margin-bottom:0}
.vol-icon{width:46px;height:46px;border-radius:10px;background:var(--accent-soft);border:1px solid rgba(0,196,154,.2);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
.vol-title{font-size:14px;font-weight:600;color:var(--navy);margin-bottom:2px}
.vol-org{font-size:13px;color:var(--text-muted);margin-bottom:5px}
.vol-desc{font-size:12.5px;color:#4a4a5a;line-height:1.7}

.page-footer{text-align:center;margin-top:32px;font-size:12px;color:var(--text-light)}

@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
.card{animation:fadeUp .4s ease both}
.card:nth-child(1){animation-delay:.05s}.card:nth-child(2){animation-delay:.10s}
.card:nth-child(3){animation-delay:.15s}.card:nth-child(4){animation-delay:.20s}
.card:nth-child(5){animation-delay:.25s}.card:nth-child(6){animation-delay:.30s}
.card:nth-child(7){animation-delay:.35s}.card:nth-child(8){animation-delay:.40s}

@media(max-width:520px){
  .cert-grid{grid-template-columns:1fr}
  .name{font-size:22px}
  .sec-body{padding:14px 16px 18px}
  .sec-head{padding:16px 16px 12px}
  .profile-top{padding:0 16px}
  .open-to{margin:0 16px 16px}
}
</style>
</head>
<body>
<div class="page">

  <div class="card">
    <div class="cover"><canvas id="cv"></canvas></div>
    <div class="profile-top">
      <div class="avatar-row">
        <div class="avatar">SKM<div class="open-badge">#OpenToWork</div></div>
        <div class="action-btns">
          <button class="btn btn-primary">Connect</button>
          <button class="btn btn-secondary">Message</button>
        </div>
      </div>
      <div class="name">Sovan Kumar Mallick</div>
      <div class="headline"><strong>Cybersecurity &amp; GRC Learner</strong> &nbsp;·&nbsp; <strong>AI Governance Advocate</strong> &nbsp;·&nbsp; Educator turned Cyber Defender<br>Bridging Ethics, Governance &amp; Digital Security</div>
      <div class="meta-row">
        <div class="meta-item"><span class="meta-icon">📍</span> Udaipur, Rajasthan, India</div>
        <div class="meta-item"><span class="meta-icon">👥</span> 500+ connections</div>
        <div class="meta-item"><span class="meta-icon">🎓</span> ISC2 CC · GRCP Candidate</div>
      </div>
    </div>
    <div class="open-to">
      <span style="font-size:20px;flex-shrink:0;margin-top:1px">💼</span>
      <div>
        <div class="open-to-title">Open to Opportunities</div>
        <div class="open-to-roles">Cybersecurity Analyst &nbsp;·&nbsp; GRC Consultant &nbsp;·&nbsp; AI Ethics Researcher &nbsp;·&nbsp; Security Awareness Trainer</div>
      </div>
    </div>
    <div class="stats-bar">
      <div class="stat"><div class="stat-n">10+</div><div class="stat-l">Years educating</div></div>
      <div class="stat"><div class="stat-n">4</div><div class="stat-l">Domains mastered</div></div>
      <div class="stat"><div class="stat-n">3</div><div class="stat-l">Certs in progress</div></div>
    </div>
  </div>

  <div class="card">
    <div class="sec-head"><div class="sec-title">About</div></div>
    <div class="sec-body">
      <div class="about-text">I am a Bible seminary educator with over 10 years of experience in teaching, mentoring, and community leadership — now channelling that same discipline and purpose into the field of cybersecurity, governance, risk &amp; compliance (GRC), and AI ethics.<br><br>My transition into technology is not a departure from my calling — it is an extension of it. I believe the digital world urgently needs principled defenders: people who understand not just how systems work, but why they must be protected, governed ethically, and aligned with human values.<br><br>I am currently building hands-on skills through TryHackMe labs, home lab SIEM environments (Splunk, Wazuh, Microsoft Sentinel), and structured certifications including the ISC2 CC, GRCP, and eJPT. I bring to this field a strong foundation in critical thinking, ethical reasoning, structured communication, and community responsibility.</div>
      <div class="about-quote">Technology without ethics is dangerous. Governance without principles is hollow. I am here to help build systems that are both secure and trustworthy.</div>
    </div>
  </div>

  <div class="card">
    <div class="sec-head"><div class="sec-title">Experience</div></div>
    <div class="sec-body">
      <div class="exp-item">
        <div class="exp-logo cyber">🔐</div>
        <div>
          <div class="exp-title">Independent Cybersecurity Learner &amp; Researcher</div>
          <div class="exp-org">Self-Directed · Home Lab Environment</div>
          <div class="exp-meta">2023 – Present · Udaipur, Rajasthan</div>
          <div class="exp-desc">Building practical cybersecurity skills through structured self-study, hands-on lab work, and certification pathways. Operating a personal home lab with Splunk, Wazuh, IBM QRadar, and Microsoft Sentinel for SIEM practice. Actively completing TryHackMe rooms across Blue Team and Offensive Security tracks. Studying NIST CSF, ISO 27001, and GRC frameworks to bridge compliance with technical security.</div>
          <div class="exp-tags"><span class="exp-tag">TryHackMe</span><span class="exp-tag">Splunk</span><span class="exp-tag">Wazuh</span><span class="exp-tag">NIST CSF</span><span class="exp-tag">Wireshark</span><span class="exp-tag">Linux</span></div>
        </div>
      </div>
      <div class="exp-item">
        <div class="exp-logo edu">📖</div>
        <div>
          <div class="exp-title">Senior Bible Seminary Educator &amp; Mentor</div>
          <div class="exp-org">Seminary / Institution · Placeholder</div>
          <div class="exp-meta">2014 – 2024 · 10 Years · Bhubaneswar, Odisha</div>
          <div class="exp-desc">Led academic instruction in theology, ethics, and moral philosophy for undergraduate and postgraduate students. Designed and delivered curriculum across subjects including biblical ethics, governance in faith communities, and principled leadership. Mentored 200+ students across academic and personal development journeys.</div>
          <div class="exp-tags"><span class="exp-tag">Curriculum Design</span><span class="exp-tag">Ethics &amp; Philosophy</span><span class="exp-tag">Mentoring</span><span class="exp-tag">Community Leadership</span><span class="exp-tag">Public Speaking</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="sec-head"><div class="sec-title">Education</div></div>
    <div class="sec-body">
      <div class="edu-item"><div class="edu-logo theo">🎓</div><div><div class="edu-name">Seminary / University · Placeholder</div><div class="edu-degree">Bachelor of Theology / Divinity · Ethics &amp; Moral Philosophy</div><div class="edu-year">Graduated · [Year]</div></div></div>
      <div class="edu-item"><div class="edu-logo cyber">🛡️</div><div><div class="edu-name">Google Cybersecurity Professional Certificate</div><div class="edu-degree">Cybersecurity Foundations · Ongoing</div><div class="edu-year">2024 – Present · Coursera / Google</div></div></div>
      <div class="edu-item"><div class="edu-logo labs">🌐</div><div><div class="edu-name">TryHackMe Learning Paths</div><div class="edu-degree">Blue Team Fundamentals · Pre-Security · SOC Level 1</div><div class="edu-year">2023 – Present · Self-paced</div></div></div>
    </div>
  </div>

  <div class="card">
    <div class="sec-head"><div class="sec-title">Licences &amp; Certifications</div></div>
    <div class="sec-body">
      <div class="cert-grid">
        <div class="cert-card"><div class="cert-name">ISC2 CC</div><div class="cert-issuer">ISC2 · Certified in Cybersecurity</div><div class="cert-badge progress">⏳ In Progress</div></div>
        <div class="cert-card"><div class="cert-name">GRCP</div><div class="cert-issuer">OCEG · GRC Professional</div><div class="cert-badge progress">📤 Applied</div></div>
        <div class="cert-card"><div class="cert-name">eJPT</div><div class="cert-issuer">eLearnSecurity · Jr. Penetration Tester</div><div class="cert-badge progress">⏳ In Progress</div></div>
        <div class="cert-card"><div class="cert-name">Google Cybersecurity</div><div class="cert-issuer">Google · Coursera</div><div class="cert-badge ongoing">🔄 Ongoing</div></div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="sec-head"><div class="sec-title">Skills</div></div>
    <div class="sec-body">
      <div class="skills-wrap">
        <span class="skill-pill core">Cybersecurity</span><span class="skill-pill core">GRC</span><span class="skill-pill core">AI Governance</span><span class="skill-pill core">Cyber Ethics</span>
        <span class="skill-pill">NIST CSF</span><span class="skill-pill">ISO 27001</span><span class="skill-pill">SIEM Operations</span><span class="skill-pill">Splunk</span><span class="skill-pill">Wazuh</span>
        <span class="skill-pill">Microsoft Sentinel</span><span class="skill-pill">IBM QRadar</span><span class="skill-pill">Wireshark</span><span class="skill-pill">Linux</span><span class="skill-pill">Python (Learning)</span>
        <span class="skill-pill">Risk Management</span><span class="skill-pill">Threat Modeling</span><span class="skill-pill">MITRE ATT&amp;CK</span><span class="skill-pill">Curriculum Design</span>
        <span class="skill-pill">Public Speaking</span><span class="skill-pill">Community Leadership</span><span class="skill-pill">Ethical Reasoning</span><span class="skill-pill">Mentoring</span>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="sec-head"><div class="sec-title">Volunteering &amp; Community</div></div>
    <div class="sec-body">
      <div class="vol-item"><div class="vol-icon">👨‍🏫</div><div><div class="vol-title">Youth Educator &amp; Mentor</div><div class="vol-org">Community Faith &amp; Education Programs · Odisha &amp; Rajasthan</div><div class="vol-desc">Provided structured mentoring and academic guidance to youth from underserved communities. Focused on character development, critical thinking, and ethical decision-making. Conducted workshops on responsible digital behaviour and internet safety for young people.</div></div></div>
      <div class="vol-item"><div class="vol-icon">🔐</div><div><div class="vol-title">Cyber Hygiene &amp; Awareness Advocate</div><div class="vol-org">Grassroots Community Outreach · Ongoing</div><div class="vol-desc">Conducting informal awareness sessions on cyber hygiene, online safety, phishing awareness, and privacy best practices for non-technical community members.</div></div></div>
      <div class="vol-item"><div class="vol-icon">⚖️</div><div><div class="vol-title">Ethical Awareness Facilitator</div><div class="vol-org">Local Community Programs · 2015 – Present</div><div class="vol-desc">Led discussions and workshops on ethical use of technology, AI implications for society, and the moral responsibilities of digital citizens.</div></div></div>
    </div>
  </div>

  <div class="page-footer">Sovan Kumar Mallick · Cybersecurity & GRC · Built with purpose &amp; principle</div>

</div>
<script>
(function(){
  var c=document.getElementById('cv');
  if(!c)return;
  var ctx=c.getContext('2d'),W,H,nodes,raf;
  function resize(){W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;init()}
  function init(){nodes=[];var n=Math.floor(W/55);for(var i=0;i<n;i++)nodes.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*2+1})}
  function draw(){
    ctx.clearRect(0,0,W,H);
    for(var i=0;i<nodes.length;i++){for(var j=i+1;j<nodes.length;j++){var dx=nodes[i].x-nodes[j].x,dy=nodes[i].y-nodes[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<110){ctx.beginPath();ctx.moveTo(nodes[i].x,nodes[i].y);ctx.lineTo(nodes[j].x,nodes[j].y);ctx.strokeStyle='rgba(0,196,154,'+(0.15*(1-d/110))+')';ctx.lineWidth=.8;ctx.stroke()}}}
    nodes.forEach(function(n){ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle='rgba(0,196,154,0.4)';ctx.fill();n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1});
    raf=requestAnimationFrame(draw)
  }
  window.addEventListener('resize',function(){cancelAnimationFrame(raf);resize();draw()});
  resize();draw();
})();
</script>
</body>
</html>
