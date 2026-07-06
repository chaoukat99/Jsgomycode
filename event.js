// events 


// console.log("hello");


//  element.oneventname = ()=>{   traitement }


// Element.onclick=()=>sayHello();

// click dbclick


let btn = document.querySelector("button");


// btn.onclick=()=>{
//    console.log("hello world");
//    console.log("this only event test");
   
   
// }


// btn.ondblclick=()=>{
//     alert("double clicked");
// }





// mouse 


// btn.onmousemove=()=>{
//     console.log("mouse moved");
    
// }

// document

// function add(a,b,x){

// }
// window 

// window.onmmouve=(ev)=>{
//     console.log(ev)
// }



// btn.onmouseenter=()=>{
//     console.log("hello")
// }

// btn.onmouseleave=()=>{
//     console.log("mouse left")
//  }


let inp = document.querySelector("input");



// focus blur input

// inp.onfocus=()=>{
//     console.log('rak wesst input');
    
// }

// inp.onblur=()=>{
//     console.log('rak kharej input');
    
// }

// let div = document.querySelector("div");
// let max=100;
// div.innerHTML=max;
// inp.oninput=()=>{
//      max--
//     div.innerHTML=max;
// }




// window.onscroll=()=>{
//     console.log(window.scrollY);
    
//     document.querySelector(".line").style.width=window.scrollY+"px"

// }


// 


window.onkeydown=(ev)=>{
    if(ev.key=="m" || ev.key=="M" ){
        let audio=new Audio();
        audio.src="./audios/MI.mp3";
        audio.play();
    }
}