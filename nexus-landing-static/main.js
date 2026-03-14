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
{q:"Analyze NVDA for me",a:'<div class="fp-chart"><div class="fp-chart-title">NVDA Factor Profile</div><div class="fp-chart-body"><div class="fp-arrow"><span>High</span><div class="fp-arrow-line"></div><span>Low</span></div><div class="fp-chart-axis"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>Q5</span></div><div class="fp-chart-cols"><div class="fp-col"><div class="fp-col-bar"><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q active"></div></div><div class="fp-col-label">Value</div></div><div class="fp-col"><div class="fp-col-bar"><div class="fp-q active"></div><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q"></div></div><div class="fp-col-label">Growth</div></div><div class="fp-col"><div class="fp-col-bar"><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q active"></div><div class="fp-q"></div></div><div class="fp-col-label">Yield</div></div><div class="fp-col"><div class="fp-col-bar"><div class="fp-q"></div><div class="fp-q active"></div><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q"></div></div><div class="fp-col-label">Revision</div></div><div class="fp-col"><div class="fp-col-bar"><div class="fp-q active"></div><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q"></div></div><div class="fp-col-label">Momentum</div></div><div class="fp-col"><div class="fp-col-bar"><div class="fp-q active"></div><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q"></div></div><div class="fp-col-label">Quality</div></div><div class="fp-col"><div class="fp-col-bar"><div class="fp-q active"></div><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q"></div></div><div class="fp-col-label">GARP</div></div><div class="fp-col"><div class="fp-col-bar"><div class="fp-q active"></div><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q"></div><div class="fp-q"></div></div><div class="fp-col-label">LowRisk</div></div></div></div></div><br><div class="ns-badge">Nexus Score: 87/100 <div class="ns-bar"><div class="ns-bar-fill" style="width:87%"></div></div></div><br><strong>Direction:</strong> BUY &nbsp;|&nbsp; <strong>Conviction:</strong> HIGH &nbsp;|&nbsp; <strong>Horizon:</strong> 6\u201312 Mo<br><br><strong>Key Metrics:</strong><br>\u2022 TTM Revenue: $130.5B (+122% YoY)<br>\u2022 TTM FCF: $60.9B (46.7% margin)<br>\u2022 Gross Margin: 78.4%<br>\u2022 Fwd P/E: 38x<br><br><strong>Thesis:</strong> NVIDIA dominates AI accelerator infrastructure with 80%+ datacenter GPU market share. Revenue growth is structural, driven by hyperscaler capex and enterprise AI adoption. Margin expansion continues as CUDA ecosystem lock-in deepens.'},
{q:"Show me the DCF model",a:'<strong>DCF Analysis \u2014 NVDA</strong><br><br><div class="dcf-dl-btn-green" id="dcfBtn1"><span class="dl-icon">\u2B07</span> Download Excel for DCF Modification <div class="dl-progress"><div class="dl-progress-bar"></div></div><span class="dl-check">\u2713 Downloaded</span></div><div class="dcf-sheet" id="dcfSheet" style="display:none"><div class="dcf-sheet-bar"><span>\u2630 NVDA_DCF_Model.xlsx</span></div><table><tr><th>Assumption</th><th>Value</th></tr><tr><td>Revenue Growth (Y1)</td><td class="dcf-editable" id="dcfRg">55.0%</td></tr><tr><td>Revenue Growth (Y2\u20135)</td><td class="dcf-editable" id="dcfRg2">28.0%</td></tr><tr><td>Terminal Growth</td><td class="dcf-editable" id="dcfTg">3.5%</td></tr><tr><td>WACC</td><td class="dcf-editable" id="dcfWacc">10.2%</td></tr><tr><td>FCF Margin (Stable)</td><td class="dcf-editable" id="dcfFcf">42.0%</td></tr><tr style="border-top:2px solid rgba(34,197,94,.2)"><td style="color:#4ade80;font-weight:700">DCF Fair Value</td><td class="dcf-result" id="dcfResult">$152.80</td></tr><tr><td style="color:#64748b">Upside from Current</td><td style="color:#4ade80;font-weight:700" id="dcfUpside">+18.4%</td></tr></table></div>'}
];
var avU='<div class="chat-avatar chat-av-u">You</div>';
var avA='<div class="chat-avatar chat-av-a"><svg viewBox="0 0 24 24" width="16" height="16" fill="none"><path d="M12 2L21 7v10l-9 5-9-5V7l9-5z" stroke="#6366f1" stroke-width="1.5"/><circle cx="12" cy="12" r="3" fill="#6366f1" opacity=".7"/></svg></div>';
function typeText(el,text,cb){var i=0;chatCursor.style.display='inline-block';function t(){if(i<=text.length){el.textContent=text.substring(0,i);i++;setTimeout(t,30)}else{chatCursor.style.display='none';if(cb)cb()}}t()}
function scrollChat(){setTimeout(function(){chatBox.scrollTop=chatBox.scrollHeight},50)}
function addMsg(cls,avatar,html){var d=document.createElement('div');d.className='chat-msg '+cls;d.innerHTML=avatar+'<div class="chat-bubble '+(cls==='chat-user'?'chat-bub-u':'chat-bub-a')+'">'+(cls==='chat-ai'?'<div class="chat-ai-label">Nexus AI</div>':'')+html+'</div>';d.style.animation='chatFadeIn .4s ease forwards';chatBox.appendChild(d);scrollChat();return d}
function addDots(){var d=document.createElement('div');d.className='chat-msg chat-ai';d.innerHTML=avA+'<div class="chat-typing"><span></span><span></span><span></span></div>';d.style.animation='chatFadeIn .3s ease forwards';chatBox.appendChild(d);scrollChat();return d}
function animDcfDownloadAndEdit(){
var btn=document.getElementById('dcfBtn1');
var sheet=document.getElementById('dcfSheet');
if(!btn)return;
setTimeout(function(){
btn.classList.add('downloading');
setTimeout(function(){
btn.classList.remove('downloading');btn.classList.add('done');
setTimeout(function(){
if(sheet){sheet.style.display='block';sheet.style.animation='chatFadeIn .4s ease forwards'}
scrollChat();
setTimeout(function(){
var edits=[
{id:'dcfRg',val:'62.0%',result:'$168.50',upside:'+30.6%'},
{id:'dcfFcf',val:'45.0%',result:'$178.20',upside:'+38.1%'},
{id:'dcfWacc',val:'9.5%',result:'$195.40',upside:'+51.4%'},
{id:'dcfTg',val:'4.0%',result:'$204.60',upside:'+58.5%'}
];
var ei=0;
function editNext(){
if(ei>=edits.length){scrollChat();return}
var e=edits[ei];ei++;
var cell=document.getElementById(e.id);
var res=document.getElementById('dcfResult');
var ups=document.getElementById('dcfUpside');
if(!cell){editNext();return}
cell.innerHTML='<span class="dcf-cursor"></span>';
setTimeout(function(){
cell.textContent=e.val;
cell.classList.add('dcf-highlight');
if(res){res.textContent=e.result;res.style.animation='dcfFlash .6s ease'}
if(ups)ups.textContent=e.upside;
scrollChat();
setTimeout(function(){cell.classList.remove('dcf-highlight');setTimeout(editNext,700)},800);
},600);
}
editNext();
},800);
},600);
},2000);
},800);
}
var ci=0;
function runConvo(){if(!chatBox)return;var c=convos[ci%convos.length];ci++;
typeText(chatInput,c.q,function(){chatInput.textContent='';addMsg('chat-user',avU,c.q);
var dots=addDots();setTimeout(function(){if(chatBox.contains(dots))chatBox.removeChild(dots);addMsg('chat-ai',avA,c.a);
if(ci===2)animDcfDownloadAndEdit();
setTimeout(function(){if(ci<convos.length){runConvo()}else{setTimeout(function(){chatBox.innerHTML='';ci=0;chatInput.textContent='Ask about any S&P 500 ticker...';setTimeout(runConvo,2000)},8000)}},ci===2?12000:3000)},1500)})}
chatInput.textContent='Ask about any S&P 500 ticker...';
setTimeout(runConvo,2000);
}
})();