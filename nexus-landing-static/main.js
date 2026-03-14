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
{q:"Show me the DCF model",a:'<strong>DCF Analysis \u2014 NVDA</strong><br><br>I\u2019ve prepared a full 5-year DCF model for NVIDIA. You can modify any assumption and the fair value updates instantly.<br><br><div class="dcf-dl-btn-green" id="dcfBtn1"><span class="dl-icon">\u2B07</span> Download Excel for DCF Modification <div class="dl-progress"><div class="dl-progress-bar"></div></div><span class="dl-check">\u2713 Opening spreadsheet...</span></div>'}
];
var avU='<div class="chat-avatar chat-av-u">You</div>';
var avA='<div class="chat-avatar chat-av-a"><svg viewBox="0 0 24 24" width="16" height="16" fill="none"><path d="M12 2L21 7v10l-9 5-9-5V7l9-5z" stroke="#6366f1" stroke-width="1.5"/><circle cx="12" cy="12" r="3" fill="#6366f1" opacity=".7"/></svg></div>';
function typeText(el,text,cb){var i=0;chatCursor.style.display='inline-block';function t(){if(i<=text.length){el.textContent=text.substring(0,i);i++;setTimeout(t,30)}else{chatCursor.style.display='none';if(cb)cb()}}t()}
function scrollChat(){setTimeout(function(){chatBox.scrollTop=chatBox.scrollHeight},50)}
function addMsg(cls,avatar,html){var d=document.createElement('div');d.className='chat-msg '+cls;d.innerHTML=avatar+'<div class="chat-bubble '+(cls==='chat-user'?'chat-bub-u':'chat-bub-a')+'">'+(cls==='chat-ai'?'<div class="chat-ai-label">Nexus AI</div>':'')+html+'</div>';d.style.animation='chatFadeIn .4s ease forwards';chatBox.appendChild(d);scrollChat();return d}
function addDots(){var d=document.createElement('div');d.className='chat-msg chat-ai';d.innerHTML=avA+'<div class="chat-typing"><span></span><span></span><span></span></div>';d.style.animation='chatFadeIn .3s ease forwards';chatBox.appendChild(d);scrollChat();return d}
function animDcfDownloadAndEdit(){
var btn=document.getElementById('dcfBtn1');
var overlay=document.getElementById('dcfOverlay');
if(!btn)return;
setTimeout(function(){
btn.classList.add('downloading');
setTimeout(function(){
btn.classList.remove('downloading');btn.classList.add('done');
setTimeout(function(){
if(overlay)overlay.classList.add('active');
setTimeout(function(){
var edits=[
{id:'xlRg1',val:'62.0%',cell:'C4',rev1:'$209.8B',rev2:'$268.5B',fcf1:'$88.1B',fcf2:'$112.8B',tv:'$3,425.1B',ev:'$3,956.8B',result:'$161.60',upside:'+25.2%'},
{id:'xlFcf',val:'45.0%',cell:'C8',rev1:'$209.8B',rev2:'$268.5B',fcf1:'$94.4B',fcf2:'$120.8B',tv:'$3,670.5B',ev:'$4,202.2B',result:'$171.60',upside:'+33.0%'},
{id:'xlWacc',val:'9.5%',cell:'C7',rev1:'$209.8B',rev2:'$268.5B',fcf1:'$94.4B',fcf2:'$120.8B',tv:'$4,120.8B',ev:'$4,652.5B',result:'$190.00',upside:'+47.2%'},
{id:'xlTg',val:'4.0%',cell:'C6',rev1:'$209.8B',rev2:'$268.5B',fcf1:'$94.4B',fcf2:'$120.8B',tv:'$4,585.2B',ev:'$5,116.9B',result:'$208.90',upside:'+61.9%'}
];
var ei=0;
function editNext(){
if(ei>=edits.length){
setTimeout(function(){if(overlay)overlay.classList.remove('active')},3000);
return}
var e=edits[ei];ei++;
var cell=document.getElementById(e.id);
var fb=document.getElementById('fbCell');
var fv=document.getElementById('fbVal');
if(!cell){editNext();return}
cell.classList.add('editing');
if(fb)fb.textContent=e.cell;
if(fv)fv.textContent=cell.textContent;
setTimeout(function(){
cell.textContent=e.val;cell.classList.remove('editing');cell.classList.add('flash');
if(fv)fv.textContent=e.val;
var r1=document.getElementById('xlRev1');var r2=document.getElementById('xlRev2');
var f1=document.getElementById('xlFcf1');var f2=document.getElementById('xlFcf2');
var tv=document.getElementById('xlTv');var ev=document.getElementById('xlEv');
var res=document.getElementById('xlResult');var ups=document.getElementById('xlUpside');
if(r1)r1.textContent=e.rev1;if(r2)r2.textContent=e.rev2;
if(f1){f1.textContent=e.fcf1;f1.classList.add('flash')}
if(f2){f2.textContent=e.fcf2;f2.classList.add('flash')}
if(tv){tv.textContent=e.tv;tv.classList.add('flash')}
if(ev)ev.textContent=e.ev;
if(res){res.textContent=e.result;res.classList.add('flash')}
if(ups)ups.textContent=e.upside;
setTimeout(function(){
cell.classList.remove('flash');
if(f1)f1.classList.remove('flash');if(f2)f2.classList.remove('flash');
if(tv)tv.classList.remove('flash');if(res)res.classList.remove('flash');
setTimeout(editNext,600);
},800);
},700);
}
editNext();
},600);
},500);
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