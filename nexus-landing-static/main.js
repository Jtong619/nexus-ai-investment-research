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
if(fc){fc.addEventListener('click',function(){
flowStep++;if(flowStep>flowMax)return;
var a=document.getElementById('arc'+flowStep);if(a)a.classList.add('revealed');
if(sc){if(flowStep<flowMax)sc.textContent='Step '+flowStep+' / '+flowMax+' \u2014 tap for next';else{sc.textContent='Architecture revealed \u2713';var cta=document.getElementById('flowCta');if(cta){cta.style.transition='opacity .8s ease';cta.style.opacity='0'}}}
})}

var painObs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){var items=e.target.querySelectorAll('.pain-item');items.forEach(function(item,i){setTimeout(function(){item.classList.add('visible')},i*200)});painObs.unobserve(e.target)}})},{threshold:.3});
document.querySelectorAll('.pain-list').forEach(function(el){painObs.observe(el)});

var pillObs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){var pills=e.target.querySelectorAll('.agent-pill');pills.forEach(function(p,i){setTimeout(function(){p.classList.add('visible')},i*150)});pillObs.unobserve(e.target)}})},{threshold:.3});
document.querySelectorAll('.agent-pills').forEach(function(el){pillObs.observe(el)});
})();