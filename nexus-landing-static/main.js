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
{q:"What's your take on NVDA right now?",a:'NVDA scores <strong>87/100</strong> \u2014 <strong>BUY</strong> at HIGH confidence.<br><br>\u2022 Datacenter revenue +409% YoY<br>\u2022 Gross margins 78.4%<br>\u2022 DCF fair value: <strong>$152.80</strong> (+18.4%)<br><br>Risk/reward favorable for 6\u201312 months.'},
{q:"Compare NVDA vs AMD",a:'AMD scores <strong>71/100</strong> vs NVDA 87:<br><br>\u2022 Factor Pos: NVDA 85 vs AMD 62<br>\u2022 Fin Momentum: NVDA 92 vs AMD 74<br>\u2022 Valuation: NVDA 68 vs AMD 72<br><br>NVDA\u2019s training GPU dominance = structural edge.'},
{q:"What about AAPL's outlook?",a:'AAPL scores <strong>74/100</strong> \u2014 <strong>HOLD</strong> at MODERATE confidence.<br><br>\u2022 Services revenue growing 14% YoY<br>\u2022 iPhone cycle showing fatigue<br>\u2022 DCF fair value: <strong>$198.40</strong> (+4.2%)<br><br>Limited upside at current levels.'},
{q:"Is MSFT overvalued here?",a:'MSFT scores <strong>82/100</strong> \u2014 <strong>BUY</strong> at HIGH confidence.<br><br>\u2022 Azure growth +29% QoQ<br>\u2022 AI integration driving margins<br>\u2022 DCF fair value: <strong>$445.20</strong> (+12.6%)<br><br>Premium justified by AI monetization path.'}
];
var avU='<div class="chat-avatar chat-av-u">You</div>';
var avA='<div class="chat-avatar chat-av-a"><svg viewBox="0 0 24 24" width="16" height="16" fill="none"><path d="M12 2L21 7v10l-9 5-9-5V7l9-5z" stroke="#6366f1" stroke-width="1.5"/><circle cx="12" cy="12" r="3" fill="#6366f1" opacity=".7"/></svg></div>';
function typeText(el,text,cb){var i=0;chatCursor.style.display='inline-block';function t(){if(i<=text.length){el.textContent=text.substring(0,i);i++;setTimeout(t,35)}else{chatCursor.style.display='none';if(cb)cb()}}t()}
function addMsg(cls,avatar,html){var d=document.createElement('div');d.className='chat-msg '+cls;d.innerHTML=avatar+'<div class="chat-bubble '+(cls==='chat-user'?'chat-bub-u':'chat-bub-a')+'">'+(cls==='chat-ai'?'<div class="chat-ai-label">Nexus AI</div>':'')+html+'</div>';d.style.animation='chatFadeIn .4s ease forwards';chatBox.appendChild(d);chatBox.scrollTop=chatBox.scrollHeight;return d}
function addDots(){var d=document.createElement('div');d.className='chat-msg chat-ai';d.innerHTML=avA+'<div class="chat-typing"><span></span><span></span><span></span></div>';d.style.animation='chatFadeIn .3s ease forwards';chatBox.appendChild(d);chatBox.scrollTop=chatBox.scrollHeight;return d}
var ci=0;
function runConvo(){if(!chatBox)return;var c=convos[ci%convos.length];ci++;
typeText(chatInput,c.q,function(){chatInput.textContent='';addMsg('chat-user',avU,c.q);
var dots=addDots();setTimeout(function(){chatBox.removeChild(dots);addMsg('chat-ai',avA,c.a);
setTimeout(function(){if(ci<convos.length){runConvo()}else{setTimeout(function(){chatBox.innerHTML='';ci=0;chatInput.textContent='Ask about any S&P 500 ticker...';setTimeout(runConvo,1500)},3000)}},1200)},1200)})}
chatInput.textContent='Ask about any S&P 500 ticker...';
setTimeout(runConvo,2000);
}
})();