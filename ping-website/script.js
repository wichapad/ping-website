const form=document.getElementById("form");
const email=document.getElementById("email");

form.addEventListener("submit",function(e){
    e.preventDefault();
    if(email.value=== ""){
        showerror(email,"Please provide a valid email address");
    }
    else{
        showsuccess(email);
    }
})

function showerror(input,message){
    const formControl=input.parentElement;
    formControl.className="form-control error";
    const small=formControl.querySelector("small");
    small.innerText=message;
}

function showsuccess(input){
    const formControl=input.parentElement;
    formControl.className="form-control success";
}