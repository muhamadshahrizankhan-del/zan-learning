const s=document.getElementById('search');
s.addEventListener('keyup',()=>{
const q=s.value.toLowerCase();
document.querySelectorAll('.card').forEach(c=>{
c.style.display=c.innerText.toLowerCase().includes(q)?'block':'none';
});
});