(function(){
var pc=document.getElementById('particles');
for(var i=0;i<35;i++){var p=document.createElement('div');p.className='particle';p.style.left=Math.random()*100+'%';p.style.top=(100+Math.random()*10)+'%';p.style.animationDuration=(10+Math.random()*14)+'s';p.style.animationDelay=(Math.random()*12)+'s';var s=1+Math.random()*1.5;p.style.width=s+'px';p.style.height=s+'px';pc.appendChild(p)}

function ac(){document.querySelectorAll('.count-up').forEach(function(el){var target=parseInt(el.dataset.target);var dur=1800;var start=performance.now();function tick(now){var t=Math.min((now-start)/dur,1);var ease=1-Math.pow(1-t,3);el.textContent=Math.round(target*ease);if(t<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)})}
var counted=false;
var cObs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting&&!counted){counted=true;ac()}})},{threshold:.3});
document.querySelectorAll('.counter-bar').forEach(function(el){cObs.observe(el)});

var sObs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible')}})},{threshold:.2});
document.querySelectorAll('.col-text,.col-visual,.s-text,.s-visual').forEach(function(el){sObs.observe(el)});

var fObs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){var nodes=e.target.querySelectorAll('.flow-node');nodes.forEach(function(n,i){setTimeout(function(){n.classList.add('visible')},i*200)});fObs.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.flow-chart').forEach(function(el){fObs.observe(el)});

var flowStep=0;var flowMax=6;
var fc=document.getElementById('flowChart');
var sc=document.getElementById('stepCounter');
var flowCta=document.getElementById('flowCta');
function advanceFlow(){flowStep++;if(flowStep>flowMax)return;
var a=document.getElementById('arc'+flowStep);if(a)a.classList.add('revealed');
if(sc){if(flowStep<flowMax){sc.textContent='Step '+flowStep+' / '+flowMax+' \u2014 tap for next'}else{sc.textContent='Architecture revealed \u2713';if(flowCta)flowCta.style.display='none'}}}
if(fc)fc.addEventListener('click',advanceFlow);
if(flowCta)flowCta.addEventListener('click',advanceFlow)

var painObs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){var items=e.target.querySelectorAll('.pain-item');items.forEach(function(item,i){setTimeout(function(){item.classList.add('visible')},i*200)});painObs.unobserve(e.target)}})},{threshold:.3});
document.querySelectorAll('.pain-list').forEach(function(el){painObs.observe(el)});

var pillObs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){var pills=e.target.querySelectorAll('.agent-pill');pills.forEach(function(p,i){setTimeout(function(){p.classList.add('visible')},i*150)});pillObs.unobserve(e.target)}})},{threshold:.3});
document.querySelectorAll('.agent-pills').forEach(function(el){pillObs.observe(el)});

var chatBox=document.getElementById('chatAnim');
var chatInput=document.getElementById('chatInputText');
var chatCursor=document.getElementById('chatCursor');
if(chatBox){
var convos=[
{q:"Analyze NVDA for me",a:'<div class="ns-badge">Nexus Score: 87/100 <div class="ns-bar"><div class="ns-bar-fill" style="width:87%"></div></div></div><br><strong>Direction:</strong> BUY &nbsp;|&nbsp; <strong>Conviction:</strong> HIGH &nbsp;|&nbsp; <strong>Horizon:</strong> 6\u201312 Mo<br><br><strong>5-Factor Breakdown:</strong><br><span class="factor-pill fp-pos">Macro 82</span> <span class="factor-pill fp-pos">Fundamental 91</span> <span class="factor-pill fp-pos">Technical 85</span> <span class="factor-pill fp-neu">Event 78</span> <span class="factor-pill fp-pos">Quant 89</span><br><br><strong>Key Metrics:</strong><br>\u2022 TTM Revenue: $130.5B (+122% YoY)<br>\u2022 TTM FCF: $60.9B (46.7% margin)<br>\u2022 Gross Margin: 78.4%<br>\u2022 Fwd P/E: 38x<br><br><strong>Thesis:</strong> NVIDIA dominates AI accelerator infrastructure with 80%+ datacenter GPU market share. Revenue growth is structural, driven by hyperscaler capex and enterprise AI adoption. Margin expansion continues as software attach rates increase via CUDA ecosystem lock-in.<br><br><strong>DCF Fair Value: $152.80</strong> (+18.4% upside)<br><br><div class="dcf-dl-btn" id="dcfBtn1"><span class="dl-icon">\u2B07</span> Download Excel for DCF Modification <div class="dl-progress"><div class="dl-progress-bar"></div></div><span class="dl-check">\u2713 NVDA_DCF_Model.xlsx</span></div>'},
{q:"What are the main risk factors?",a:'<strong>Risk Assessment \u2014 NVDA</strong><br><br><span class="factor-pill fp-neg">Elevated Valuation</span> <span class="factor-pill fp-neg">Export Controls</span> <span class="factor-pill fp-neg">Customer Concentration</span> <span class="factor-pill fp-pos">Strong Moat</span> <span class="factor-pill fp-pos">FCF Generation</span><br><br><strong>Bear Case:</strong><br>\u2022 Fwd P/E of 38x prices in 3+ years of exceptional growth<br>\u2022 US export controls limit China TAM by ~$5B annually<br>\u2022 Top 4 customers = 40% of datacenter revenue<br>\u2022 AMD MI300X gaining traction in inference workloads<br><br><strong>Bull Case:</strong><br>\u2022 CUDA moat makes switching costs prohibitive<br>\u2022 Sovereign AI creating new demand verticals<br>\u2022 Networking (Spectrum-X) adds $10B+ TAM<br>\u2022 Automotive + robotics optionality not priced in<br><br><strong>Net Assessment:</strong> Risks are real but manageable. Growth trajectory supports premium multiple. Recommend position sizing at 3\u20135% of portfolio.'},
{q:"Compare to AMD and INTC",a:'<strong>Semiconductor Competitive Matrix</strong><br><br><table style="width:100%;font-size:10px;border-collapse:collapse;color:#94a3b8"><tr style="border-bottom:1px solid rgba(99,102,241,.15)"><td style="padding:3px 4px;color:#64748b">Ticker</td><td style="padding:3px 4px;text-align:center"><strong style="color:#4ade80">NVDA</strong></td><td style="padding:3px 4px;text-align:center"><strong style="color:#fbbf24">AMD</strong></td><td style="padding:3px 4px;text-align:center"><strong style="color:#f87171">INTC</strong></td></tr><tr style="border-bottom:1px solid rgba(99,102,241,.08)"><td style="padding:3px 4px;color:#64748b">Nexus Score</td><td style="padding:3px 4px;text-align:center;color:#4ade80">87</td><td style="padding:3px 4px;text-align:center;color:#fbbf24">71</td><td style="padding:3px 4px;text-align:center;color:#f87171">42</td></tr><tr style="border-bottom:1px solid rgba(99,102,241,.08)"><td style="padding:3px 4px;color:#64748b">Direction</td><td style="padding:3px 4px;text-align:center;color:#4ade80">BUY</td><td style="padding:3px 4px;text-align:center;color:#fbbf24">HOLD</td><td style="padding:3px 4px;text-align:center;color:#f87171">SELL</td></tr><tr style="border-bottom:1px solid rgba(99,102,241,.08)"><td style="padding:3px 4px;color:#64748b">DCF Upside</td><td style="padding:3px 4px;text-align:center">+18.4%</td><td style="padding:3px 4px;text-align:center">+6.2%</td><td style="padding:3px 4px;text-align:center;color:#f87171">-12.1%</td></tr><tr><td style="padding:3px 4px;color:#64748b">FCF Margin</td><td style="padding:3px 4px;text-align:center">46.7%</td><td style="padding:3px 4px;text-align:center">14.2%</td><td style="padding:3px 4px;text-align:center;color:#f87171">-3.8%</td></tr></table><br>NVDA maintains structural dominance. AMD is a credible #2 but lacks CUDA ecosystem depth. Intel\u2019s foundry pivot carries high execution risk with negative FCF.'}
];
var avU='<div class="chat-avatar chat-av-u">You</div>';
var avA='<div class="chat-avatar chat-av-a"><svg viewBox="0 0 24 24" width="16" height="16" fill="none"><path d="M12 2L21 7v10l-9 5-9-5V7l9-5z" stroke="#6366f1" stroke-width="1.5"/><circle cx="12" cy="12" r="3" fill="#6366f1" opacity=".7"/></svg></div>';
function typeText(el,text,cb){var i=0;chatCursor.style.display='inline-block';function t(){if(i<=text.length){el.textContent=text.substring(0,i);i++;setTimeout(t,30)}else{chatCursor.style.display='none';if(cb)cb()}}t()}
function scrollChat(){setTimeout(function(){chatBox.scrollTop=chatBox.scrollHeight},50)}
function addMsg(cls,avatar,html){var d=document.createElement('div');d.className='chat-msg '+cls;d.innerHTML=avatar+'<div class="chat-bubble '+(cls==='chat-user'?'chat-bub-u':'chat-bub-a')+'">'+(cls==='chat-ai'?'<div class="chat-ai-label">Nexus AI</div>':'')+html+'</div>';d.style.animation='chatFadeIn .4s ease forwards';chatBox.appendChild(d);scrollChat();return d}
function addDots(){var d=document.createElement('div');d.className='chat-msg chat-ai';d.innerHTML=avA+'<div class="chat-typing"><span></span><span></span><span></span></div>';d.style.animation='chatFadeIn .3s ease forwards';chatBox.appendChild(d);scrollChat();return d}
function animDcfBtn(){var btn=document.getElementById('dcfBtn1');if(!btn)return;setTimeout(function(){btn.classList.add('downloading');setTimeout(function(){btn.classList.remove('downloading');btn.classList.add('done')},2200)},800)}
var ci=0;
function runConvo(){if(!chatBox)return;var c=convos[ci%convos.length];ci++;
typeText(chatInput,c.q,function(){chatInput.textContent='';addMsg('chat-user',avU,c.q);
var dots=addDots();setTimeout(function(){if(chatBox.contains(dots))chatBox.removeChild(dots);var msg=addMsg('chat-ai',avA,c.a);
if(ci===1)animDcfBtn();
setTimeout(function(){if(ci<convos.length){runConvo()}else{setTimeout(function(){chatBox.innerHTML='';ci=0;chatInput.textContent='Ask about any S&P 500 ticker...';setTimeout(runConvo,1500)},4000)}},2500)},1500)})}
chatInput.textContent='Ask about any S&P 500 ticker...';
setTimeout(runConvo,2000);
}
})();