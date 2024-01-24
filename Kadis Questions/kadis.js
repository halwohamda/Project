const startbtn = document.querySelector('.start-btn');
const information = document.querySelector('.information');
const exitbtn= document.querySelector('.exit-btn');
const main= document.querySelector('.main');
const continuebtn= document.querySelector('.continue-btn');
const kadisBox= document.querySelector('.kadis-box')



startbtn.onclick = ()=>{
    
    information.classList.add('active');
    main.classList.add('active');
   
}

exitbtn.onclick = ()=>{
    information.classList.remove('active');
    main.classList.remove('active');
}

continuebtn.onclick = ()=>{
    information.classList.remove('active');
    main.classList.remove('active');
    kadissection.classList.add('active');
   kadisBox.classList.add('active');

}