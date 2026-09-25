(function(){
 function linkCard(card,id,label){
  const url='03-mint-detail.html?item='+encodeURIComponent(id);
  card.dataset.detailUrl=url;
  let link=card.querySelector('a');
  if(!link){link=document.createElement('a');link.className='card-go';link.textContent='查看详情 ↗';card.appendChild(link)}
  link.href=url;link.setAttribute('aria-label',label+'：查看详情');
  card.addEventListener('click',function(event){if(event.target.closest('a'))return;location.href=url});
 }
 document.querySelectorAll('.paper').forEach(function(card,i){linkCard(card,i===0?'about-intro':'about-method',card.querySelector('h3').textContent)});
 document.querySelectorAll('.bio > div').forEach(function(card,i){linkCard(card,['bio-work','bio-study','bio-life'][i],card.querySelector('b').textContent)});
 document.querySelectorAll('.project').forEach(function(card,i){linkCard(card,['project-market','project-toys','project-plants'][i],card.querySelector('h3').textContent)});
 document.querySelectorAll('.entry').forEach(function(card,i){linkCard(card,['note-reminders','note-paper','note-nearby','note-design'][i],card.querySelector('h3').textContent)});
 document.querySelectorAll('.hobby').forEach(function(card,i){linkCard(card,['hobby-plants','hobby-menu','hobby-sewing','hobby-walks'][i],card.querySelector('h3').textContent)});
})();
