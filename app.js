// var elm = document.getElementById("imgTag")
// var links = ["02.jpg","03.png","4.jpg","5.jpg","6.jpg"]
// var count = 0
// function fun(value){
//     if(count>5){
//         count = 0
//     }
//     elm.setAttribute("src", links[count]);
//     if(value === '+'){
//         count++;
//         return;
//     }
//     count --; 
//     if(value === '--'){
//         count--;
//         return;
//     }
//     count++;
// }
// setInterval(fun, 2000);

// var elm = document.getElementById("imgTag");
// var links = ["02.jpg", "03.png", "4.jpg", "5.jpg", "6.jpg"];
// var count = 0;

// function fun(value) {
//     if (count > 4) {
//         count = 0; 
//     } else if (count < 0) {
//         count = links.length - 1; 
//     }

    
//     elm.setAttribute("src", links[count]);

    
//     if (value === '+') {
//         count++;
//         return;
//     } 
//     if (value === '--') {
//         count--;
//         return;
//     }
// }


// setInterval(function () {
//     count++;
//     fun();
// automatically
// }, 2000);

var elm = document.getElementById("imgTag");
var links = ["02.jpg", "03.png", "4.jpg", "5.jpg", "6.jpg"];
var count = 0;

function fun(value) {
    if (count > 4) {
        count = 0;  
    } else if (count < 0) {
        count = links.length - 1; 
    }

    elm.setAttribute("src", links[count]);

    
    if (value === '+') {
        count++;
    } 
    if (value === '--') {
        count--; 
    }
}


setInterval(function () {
    fun('+'); 
}, 2000);