let btn = document.getElementsByClassName("btn");
let i;

for (i = 0; i < btn.length; i++) {
btn[i].addEventListener("click", function() {
    let p = this.nextElementSibling;
    if (p.classList.contains("ptaganimation")) {
    p.classList.remove("ptaganimation");
    } else {
        p.classList.add("ptaganimation");
    }
});
}

const li = document.querySelectorAll('li')
for (let i = 0; i < li.length; i++){
    li[i].addEventListener('click', function()   {
        if (li[i].classList.contains("over-line")){
            li[i].classList.remove("over-line")
            const a = this.nextElementSibling;
            a.classList.remove("show")
        }
        else {
            li[i].classList.add("over-line")
            const a = this.nextElementSibling;
            a.classList.add("show")
        }
        
    })
}
const del = document.querySelectorAll('.del')
const rtn = document.querySelectorAll('.delb')
for (let i = 0; i < del.length; i++){
    
    $(del[i]).on('click ', function () {
        del[i].classList.remove("show");
        this.previousElementSibling.classList.add("hide");
        this.nextElementSibling.classList.add("show");
    })
    $(rtn[i]).on('click', function () {
        this.previousElementSibling.previousElementSibling.classList.remove("over-line")
        this.previousElementSibling.previousElementSibling.classList.remove("hide")
        this.previousElementSibling.previousElementSibling.classList.add("show")

        this.classList.remove("show")
    })
}

