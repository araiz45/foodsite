console.log("Script is Running....");
document.querySelector('.hideNav').style.display = ('none');
function hideNavbar(){
    if(document.querySelector('.hideNav').style.display === ('none')){
        document.querySelector('.hideNav').style.display = ('block');
        console.log('step 1');
        document.querySelector('.container').style.opacity = ('0.5');
    }
    else{
        document.querySelector('.hideNav').style.display = ('none');
        document.querySelector('.container').style.opacity = ('1');
        console.log('step 2')

    }
}

let started = document.querySelector('.starter');
let breakfast = document.querySelector('.breakFast');
let lunch = document.querySelector('.Lunch');
let dinner = document.querySelector('.Dinner');
let starterBtn = document.querySelector('#starter-btn');
let breakfastBtn = document.querySelector('#breakfast-btn');
let lunchBtn = document.querySelector('#lunch-btn');
let dinnerBtn = document.querySelector('#dinner-btn');
let menuBtn = document.querySelector('.menu-btn');



started.style.display = 'block';
breakfast.style.display = 'none';
lunch.style.display = 'none';
dinner.style.display = 'none';
starterBtn.style.color = '#850000';
breakfastBtn.style.color = 'rgb(112 112 112)';
lunchBtn.style.color = 'rgb(112 112 112)';
dinnerBtn.style.color = 'rgb(112 112 112)';
starterBtn.style.borderBottom = '2px solid #850000';
breakfastBtn.style.borderBottom = '2px solid rgb(112 112 112)';
lunchBtn.style.borderBottom = '2px solid rgb(112 112 112)';
dinnerBtn.style.borderBottom = '2px solid rgb(112 112 112)';

document.querySelector('#starter-btn').addEventListener("click", function(){
    started.style.display = 'block';
    breakfast.style.display = 'none';
    lunch.style.display = 'none';
    dinner.style.display = 'none';
    starterBtn.style.color = '#850000';
    breakfastBtn.style.color = 'rgb(112 112 112)';
    lunchBtn.style.color = 'rgb(112 112 112)';
    dinnerBtn.style.color = 'rgb(112 112 112)';
    starterBtn.style.borderBottom = '2px solid #850000';
    breakfastBtn.style.borderBottom = '2px solid rgb(112 112 112)';
    lunchBtn.style.borderBottom = '2px solid rgb(112 112 112)';
    dinnerBtn.style.borderBottom = '2px solid rgb(112 112 112)';
    
})
document.querySelector('#breakfast-btn').addEventListener("click", function(){
    started.style.display = 'none';
    breakfast.style.display = 'block';
    lunch.style.display = 'none';
    dinner.style.display = 'none';
    breakfastBtn.style.color = '#850000';
    starterBtn.style.color = 'rgb(112 112 112)';
    lunchBtn.style.color = 'rgb(112 112 112)';
    dinnerBtn.style.color = 'rgb(112 112 112)';
    breakfastBtn.style.borderBottom = '2px solid #850000';
    starterBtn.style.borderBottom = '2px solid rgb(112 112 112)';
    lunchBtn.style.borderBottom = '2px solid rgb(112 112 112)';
    dinnerBtn.style.borderBottom = '2px solid rgb(112 112 112)';
    
})
document.querySelector('#lunch-btn').addEventListener("click", function(){
    started.style.display = 'none';
    breakfast.style.display = 'none';
    lunch.style.display = 'block';
    dinner.style.display = 'none';
    lunchBtn.style.color = '#850000';
    breakfastBtn.style.color = 'rgb(112 112 112)';
    starterBtn.style.color = 'rgb(112 112 112)';
    dinnerBtn.style.color = 'rgb(112 112 112)';
    lunchBtn.style.borderBottom = '2px solid #850000';
    breakfastBtn.style.borderBottom = '2px solid rgb(112 112 112)';
    starterBtn.style.borderBottom = '2px solid rgb(112 112 112)';
    dinnerBtn.style.borderBottom = '2px solid rgb(112 112 112)';
    
})
document.querySelector('#dinner-btn').addEventListener("click", function(){
    started.style.display = 'none';
    breakfast.style.display = 'none';
    lunch.style.display = 'none';
    dinner.style.display = 'block';
    dinnerBtn.style.color = '#850000';
    lunchBtn.style.color= 'rgb(112 112 112)';
    breakfastBtn.style.color = 'rgb(112 112 112)';
    starterBtn.style.color = 'rgb(112 112 112)';
    dinnerBtn.style.borderBottom = '2px solid #850000';
    lunchBtn.style.borderBottom = '2px solid rgb(112 112 112)';
    breakfastBtn.style.borderBottom = '2px solid rgb(112 112 112)';
    starterBtn.style.borderBottom = '2px solid rgb(112 112 112)';
})



if (started.style.display === 'block') {
    starterBtn.style.color = '#850000';
}
else{
    hOver = () =>{
        menuBtn.style.color = 'red';
    }
    
    hOver2 = () =>{
        menuBtn.style.color = 'grey';
    }
}