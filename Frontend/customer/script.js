const cleaner_hexagon=document.querySelector('.first-hex');
const cleaner_txt=document.querySelector('.cleaner-text');
const cook_hexagon=document.querySelector('.second-hex');
const cook_txt=document.querySelector('.cook-text');
const plumber_hexagon=document.querySelector('.third-hex');
const plumber_txt=document.querySelector('.plumber-text');
const electrician_hexagon=document.querySelector('.forth-hex');
const electrician_txt=document.querySelector('.electrician-text');
const carpenter_hexagon=document.querySelector('.fifth-hex');
const carpenter_txt=document.querySelector('.carpenter-text');

cleaner_txt.addEventListener('mouseover',()=>{
  cleaner_txt.style.color='#00abf0';
  cleaner_txt.style.transform='scale(1.1)';
  cleaner_hexagon.style.transform='scale(1.1)';
  cleaner_hexagon.style.boxShadow='0 0 50px #00abf0';
  cook_hexagon.style.filter='blur(10px)';
  cook_txt.style.filter='blur(10px)';
  plumber_hexagon.style.filter='blur(10px)';
  plumber_txt.style.filter='blur(10px)';
  electrician_hexagon.style.filter='blur(10px)';
  electrician_hexagon.style.filter='blur(10px)';
  carpenter_hexagon.style.filter='blur(10px)';
  carpenter_txt.style.filter='blur(10px)';
})
cleaner_txt.addEventListener('mouseout',()=>{
  cleaner_txt.style.color='white';
  cleaner_txt.style.transform='scale(1)';
  cleaner_hexagon.style.transform='scale(1)';
  cleaner_hexagon.style.boxShadow='none';
  cook_hexagon.style.filter='blur(0px)';
  cook_txt.style.filter='blur(0px)';
  plumber_hexagon.style.filter='blur(0px)';
  plumber_txt.style.filter='blur(0px)';
  electrician_hexagon.style.filter='blur(0px)';
  electrician_hexagon.style.filter='blur(0px)';
  carpenter_hexagon.style.filter='blur(0px)';
  carpenter_txt.style.filter='blur(0px)';
})
cook_txt.addEventListener('mouseover',()=>{
  cook_txt.style.color='#00abf0';
  cook_txt.style.transform='scale(1.1)';
  cook_hexagon.style.transform='scale(1.1)';
  cook_hexagon.style.boxShadow='0 0 50px #00abf0';
  cleaner_hexagon.style.filter='blur(10px)';
  cleaner_txt.style.filter='blur(10px)';
  plumber_hexagon.style.filter='blur(10px)';
  plumber_txt.style.filter='blur(10px)';
  electrician_hexagon.style.filter='blur(10px)';
  electrician_hexagon.style.filter='blur(10px)';
  carpenter_hexagon.style.filter='blur(10px)';
  carpenter_txt.style.filter='blur(10px)';
})
cook_txt.addEventListener('mouseout',()=>{
  cook_txt.style.color='white';
  cook_txt.style.transform='scale(1)';
  cook_hexagon.style.transform='scale(1)';
  cook_hexagon.style.boxShadow='none';
  cleaner_hexagon.style.filter='blur(0px)';
  cleaner_txt.style.filter='blur(0px)';
  plumber_hexagon.style.filter='blur(0px)';
  plumber_txt.style.filter='blur(0px)';
  electrician_hexagon.style.filter='blur(0px)';
  electrician_hexagon.style.filter='blur(0px)';
  carpenter_hexagon.style.filter='blur(0px)';
  carpenter_txt.style.filter='blur(0px)';
})
plumber_txt.addEventListener('mouseover',()=>{
  plumber_txt.style.color='#00abf0';
  plumber_txt.style.transform='scale(1.1)';
  plumber_hexagon.style.transform='scale(1.1)';
  plumber_hexagon.style.boxShadow='0 0 50px #00abf0';
  cleaner_hexagon.style.filter='blur(10px)';
  cleaner_txt.style.filter='blur(10px)';
  cook_hexagon.style.filter='blur(10px)';
  cook_txt.style.filter='blur(10px)';
  electrician_hexagon.style.filter='blur(10px)';
  electrician_hexagon.style.filter='blur(10px)';
  carpenter_hexagon.style.filter='blur(10px)';
  carpenter_txt.style.filter='blur(10px)';
})
plumber_txt.addEventListener('mouseout',()=>{
  plumber_txt.style.color='white';
  plumber_txt.style.transform='scale(1)';
  plumber_hexagon.style.transform='scale(1)';
  plumber_hexagon.style.boxShadow='none';
  cleaner_hexagon.style.filter='blur(0px)';
  cleaner_txt.style.filter='blur(0px)';
  cook_hexagon.style.filter='blur(0px)';
  cook_txt.style.filter='blur(0px)';
  electrician_hexagon.style.filter='blur(0px)';
  electrician_hexagon.style.filter='blur(0px)';
  carpenter_hexagon.style.filter='blur(0px)';
  carpenter_txt.style.filter='blur(0px)';
})
electrician_txt.addEventListener('mouseover',()=>{
  electrician_txt.style.color='#00abf0';
  electrician_txt.style.transform='scale(1.1)';
  electrician_hexagon.style.transform='scale(1.1)';
  electrician_hexagon.style.boxShadow='0 0 50px #00abf0';
  cleaner_hexagon.style.filter='blur(10px)';
  cleaner_txt.style.filter='blur(10px)';
  cook_hexagon.style.filter='blur(10px)';
  cook_txt.style.filter='blur(10px)';
  plumber_hexagon.style.filter='blur(10px)';
  plumber_hexagon.style.filter='blur(10px)';
  carpenter_hexagon.style.filter='blur(10px)';
  carpenter_txt.style.filter='blur(10px)';
})
electrician_txt.addEventListener('mouseout',()=>{
  electrician_txt.style.color='white';
  electrician_txt.style.transform='scale(1)';
  electrician_hexagon.style.transform='scale(1)';
  electrician_hexagon.style.boxShadow='none';
  cleaner_hexagon.style.filter='blur(0px)';
  cleaner_txt.style.filter='blur(0px)';
  plumber_hexagon.style.filter='blur(0px)';
  plumber_txt.style.filter='blur(0px)';
  cook_hexagon.style.filter='blur(0px)';
  cook_txt.style.filter='blur(0px)';
  carpenter_hexagon.style.filter='blur(0px)';
  carpenter_txt.style.filter='blur(0px)';
})
carpenter_txt.addEventListener('mouseover',()=>{
  carpenter_txt.style.color='#00abf0';
  carpenter_txt.style.transform='scale(1.1)';
  carpenter_hexagon.style.transform='scale(1.1)';
  carpenter_hexagon.style.boxShadow='0 0 50px #00abf0';
  cleaner_hexagon.style.filter='blur(10px)';
  cleaner_txt.style.filter='blur(10px)';
  cook_hexagon.style.filter='blur(10px)';
  cook_txt.style.filter='blur(10px)';
  plumber_hexagon.style.filter='blur(10px)';
  plumber_hexagon.style.filter='blur(10px)';
  electrician_hexagon.style.filter='blur(10px)';
  electrician_txt.style.filter='blur(10px)';
})
carpenter_txt.addEventListener('mouseout',()=>{
  carpenter_txt.style.color='white';
  carpenter_txt.style.transform='scale(1)';
  carpenter_hexagon.style.transform='scale(1)';
  carpenter_hexagon.style.boxShadow='none';
  cleaner_hexagon.style.filter='blur(0px)';
  cleaner_txt.style.filter='blur(0px)';
  plumber_hexagon.style.filter='blur(0px)';
  plumber_txt.style.filter='blur(0px)';
  cook_hexagon.style.filter='blur(0px)';
  cook_txt.style.filter='blur(0px)';
  electrician_hexagon.style.filter='blur(0px)';
  electrician_txt.style.filter='blur(0px)';
})