// DOM Elements
const mainPage =  document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const inputButtonTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page');
const warringLoginPage = document.querySelector('.login-model');
const secondLoginPageBtn = document.querySelector('.login-form-btn');
const buttonPost = document.querySelector('.button-post');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const clossModel = document.querySelector('.modal-header i');
const headerModelBtn = document.querySelector('.model-post-btn');
const footerModelPlus = document.querySelector('.modal-icons span');
const modelinput = document.querySelector('.modal-input');
const mainModelUserDown = document.querySelector('.user i');
const mainModelSidebar = document.querySelector('.user');

const sidebarFollower = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar')
const sidebarHeaderX = document.querySelector('.sidebar-header i');

/********************************************************/

// main page

const goToMainPage = () =>{
   mainPage.style.display = 'none';
   loginPage.style.display = 'grid';
} 


middleContent.addEventListener('click', e =>
{
    if(e.target.classList[1] === 'main-btn'){
        goToMainPage();
    }
})
inputButtonTop.addEventListener('click', e =>
{
    const userInfoTop = document.querySelector('.user-info')
    const passwordTop = document.querySelector('.password')
    console.log(userInfoTop.value)
    console.log(passwordTop.value)
    if(userInfoTop.value !== "" && passwordTop.value !== "")
    {
        mainPage.style.display = "none";
        newsFeedPage.style.display = "block";
    }
    else{
        goToMainPage();
        warringLoginPage.style.display = 'block';
    }
});
warringLoginPage.addEventListener('click',e =>
{
    if(e.target.classList[2] === 'closs-warring-model'){
        warringLoginPage.style.display = 'none';
    }
});
secondLoginPageBtn.addEventListener('click',e =>
{
    const secondUserName = document.querySelector('.username');
    const secondPassword = document.querySelector('.second-log-pwd');
    console.log(secondUserName.value);
    console.log(secondPassword.value);
    if(secondUserName.value !== "" && secondPassword.value !== ""){
        loginPage.style.display = "none";
        newsFeedPage.style.display = "block";
    }
    else{
        warringLoginPage.style.display = "block";
    }
});

// New feed page
// post modal
buttonPost.addEventListener('click', () =>
{
    modal.style.display = "block";
    modalWrapper.classList.add('modal-wrapper-display');
    
});
const changeOpacity = x =>
{
    headerModelBtn.style.opacity = x;
    footerModelPlus.style.opacity = x;
};
clossModel.addEventListener('click',() =>
{
    modal.style.display = "none";
    modalWrapper.classList.remove('modal-wrapper-display');
    if(modelinput.value !== ""){
        modelinput.value = "";
        changeOpacity(0.5)
    }
});

modelinput.addEventListener('keypress',(e) =>{
    if(e.target.value !== ""){
        changeOpacity(1);
    }
});
modelinput.addEventListener('blur',(e) =>{
    if(e.target.value === ""){
        changeOpacity(0.5);
    }
});
// end of post modal
// sidebar follower
mainModelUserDown.addEventListener('click',()=>
{
    sidebarFollower.classList.add('sidebar-wrapper-visibile');
});
sidebarHeaderX.addEventListener('click',() =>
{
    sidebarFollower.classList.remove('sidebar-wrapper-visibile');
});
mainModelSidebar.addEventListener('click',(e)=>{
    sidebarFollower.classList.add('sidebar-wrapper-visibile');
})

// end of sidebar follower
// end of new feed page