const showp=document.querySelector(".check-pass");
const pass=document.querySelector("#password1");
const pass2=document.querySelector("#passwd");
showp.addEventListener('click',()=>{
    if(pass.type==="password" && pass2.type==="password"){
        pass.type="text";
        pass2.type="text";
    }
    else{
        pass.type="password";
        pass2.type="password";
    }
});

function containsUpperCase(str){
    return (str?.match(/[A-Z]/));
}

const submission=document.querySelector(".submit-btn");
submission.addEventListener('click',()=>{
    const len=pass.length;
    let up=0;
    let lo=0;
    let no=0;
    let sym=0;
    if(pass.value===pass2.value){
        for(let i=0;i<len;i++){
            if(containsUpperCase(pass.charAt(i))){
                up=up+1;
            }
            else if(pass.charAt(i).toLocaleLowerCase()===pass.charAt(i)){
                lo=lo+1;
            }
            else if(pass.charAt(i)==='number' && isFinite(pass.charAt(i))){
                no=no+1;
            }
            else{
                sym=sym+1;
            }
        }
        if(len<=8){
            alert("Password too small");
        }
        else if(up===0){
            alert("Include atleast one UpperCase letter in your Password");
        }
        else if(lo===0){
            alert("Include atleast one LowerCase letter in your Password");
        }
        else if(no===0){
            alert("Include atleast one Digit in your Password");
        }
        else if(sym===0){
            alert("Include atleast one Special Character in your Password");
        }
        else{
            alert("Correct pass");
        }        
    }
    else{
        alert("Wrong Password entered");
    }
});