const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");

const bar = $('#bar');

function showNavbar(){
    $('.navbar').style.right = "0";
}
function closeNavbar(){
    $('.navbar').style.right = "-300px";
}

tabs.forEach((tab,index) =>{
    tab.onclick =function(){
        console.log(this);
        $('.tab-item.active').classList.remove('active');
        this.classList.add('active')
    }
})

/* function tabActive(){
    $('.tab-item.active').classList.remove('active');
    this.classList.add('active')
} */