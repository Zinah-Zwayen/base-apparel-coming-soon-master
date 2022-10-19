const submitBtn = document.querySelector("button");
const input = document.querySelector("input");
const error = document.getElementsByClassName(".error");
const form = document.querySelector("form")


submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // checking if email is valid 
    if(input.value.match(re)){
        form.classList.remove("error");

    }else{
        form.classList.add("error");
    }
});


