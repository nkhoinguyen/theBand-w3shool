// khai bao bien
const dropdown = document.querySelector('.dropdown')

const persons = document.querySelectorAll('.person')

const blogger = document.querySelectorAll('.name-blogger');
const contentBlog = document.querySelectorAll('.blogger-content');

const menuBar = document.querySelector('.menu-bar')
const navLink = document.querySelector('.nav-link')




// them su kien click
menuBar.addEventListener('click',()=>{
    navLink.classList.toggle('active');
})

dropdown.addEventListener('click',function dropDown() {
    dropdown.classList.toggle('open');
})

contentBlog.forEach((ele,index)=>{
    blogger[index].addEventListener('click',()=>{

        document.querySelector('.name-blogger.active').classList.remove('active')
        blogger[index].classList.add('active')

        document.querySelector('.blogger-content.active').classList.remove('active')
        ele.classList.add('active');

    })

})

persons.forEach(element => {
    element.addEventListener('click',function personDesc() {
        element.classList.toggle('show');
        var content = this.lastElementChild;
        console.log(content)
        if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          } 
    })
});



