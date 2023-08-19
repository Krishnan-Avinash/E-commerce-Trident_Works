const showp=document.querySelector(".check-pass");
const pass=document.querySelector('#passwd');
showp.addEventListener('click',()=>{
    if(pass.type==="password"){
        pass.type="text";
    }
    else{
        pass.type="password";
    }
});