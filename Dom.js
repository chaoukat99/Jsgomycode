// DOM parts 
 


// selection

// read and write elements content and attributes


// DOM traversing 


//  style


// classList 






// createElement


// Events 




// DOM (document object model )





// selection 




// select element by id 





// by id 
// let myBalise= document.getElementById("para");




// // by class
// let myPar=document.getElementsByClassName("cls")



// by tagname 



// let mytagname= document.getElementsByTagName("p")


// console.log(mytagname[0])






// querySelector


// let element = document.querySelector(".cls")









// query Selector 




// let title =  document.querySelector("h1");




// READ and UPDAte content 


//console.log(title.textContent)

// title.innerHTML="<mark>SALAMO ALYKOM</mark>"



// console.log(title[1])




// read and update Attributes 


// let inp= document.querySelector("input")
// reading attributes 



// console.log(inp.type);

// element.attribute="newValue"



// inp.type="password";









// let image= document.querySelector("img");

// image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8Ne4j_5gRNNikzu_KZRIyzSihAQ74KAbiQ&s"  



// let btn = document.querySelectorAll("button")[2];


// console.log(btn.disabled);


// btn.disabled=false

// style css with Javascript 





let heading3 = document.querySelector("h3");



// 1st method 



// heading3.style.color="white";
// heading3.style.backgroundColor="red";
// heading3.style.borderRadius="20px";
// heading3.style.padding="10px"






// 2nd method 



// heading3.style.cssText="color:white;background-color:red;border-radius:10px;padding:10px";




// console.log(heading3);



// classList 


// conntains  check if className exist 
// add    
// remove 
// toggle 



// let mydiv = document.querySelector("div");


// to add  a new class into the tag you should use the add classlist method 



// mydiv.classList.add("test");
// mydiv.classList.remove("test");




// let btn = document.querySelector("button");




// btn.onclick=()=>{

// // mydiv.classList.remove("current");

// document.body.classList.toggle("dark")

// }

// console.log(mydiv.classList.contains("banner10"));
















// Dom travesring 







// Element = balise html = tag 


// previous sibling
// next sibling 
// parent 
// children 



let myDiv = document.querySelector(".cls");

// parentElement
// children 
// previousElementSibling
// nextElementSibling

// previousELementSibling 

// console.log(myDiv.parentElement);


// console.log(myDiv.children);




// console.log(myDiv.previousElementSibling);


// console.log(myDiv.nextElementSibling.nextElementSibling);



// let paragraph= document.querySelector(".para");
// console.log(paragraph.previousElementSibling.children[0].children[2]);



let btn = document.querySelector("button");

let input = document.querySelector("input")




// append. remove 

// function 

// named function 
function Add(a,b){
    return a+b;
}



// ANonymous function 

// function(){

// }

// Arrow function 
// ()=>{
//     // ligc 
// }

// remove 

// btn.onclick=()=>{
//  // traitement

// input.remove();
// }



//$



// email function 


// function SendEmail(subject , to , body){
//     console.log("Bonhjour Mr "+to+" you asked about "+subject+"This is my response "+body);
// }







// SendEmail("New registration","client@gmail.com","thank for trusting us you can join us in twitter ")














// SendEmail("New Purchase ","clientX@gmail.com","thank you for trust we will deliver the order next week ");





// const myFunction = function (a,b){
//     console.log(a+b);
    
// }



// function sayHello(funct){
//     console.log("Hello from sayHello function ");
//     funct(1,2); // myFunction(1,2)
// }



// sayHello(myFunction);








// f(x,y)=x+y


// f(1,2)=1+2=3



// G(f(x,y))="hello " , f(x,y)


// G(f(1,2))="hello " , 3






// createElement 







// <article>
//   <h2></h2>
// <img src="" alt="">
// <a href="">Buy Now </a>
// </article>




let div = document.createElement("div");

let span = document.createElement("span");

span.innerHTML="Hello this is span "
{/* <span>Hello this is span</span> */}

div.append(span);
console.log(div);

let article = document.createElement("article") ;

let title = document.createElement("h2");
let image = document.createElement("img");


let link = document.createElement("a");


title.innerHTML="M3a Glovo Mkynsh neass";



image.src="https://play-lh.googleusercontent.com/AKpdrQLU9S8lenPHC1nExW44ia1yElPyo831vuAq4VbPgVfAqy8n49vTR-rY2Jhreb52HcOsYiZfxn_2NY4JTA"


image.alt="Glovo ad"




link.innerHTML="Buy Now "


link.href="https://apps.apple.com/us/app/glovo-food-delivery-takeaway/id951812684"

console.log(link);



// article.append(div)

article.append(title);

article.append(image);
article.append(link);



console.log(article);


// Append 


//parent.append(Children)


let myAdContainer= document.querySelector(".ad");



// setTimeout(()=>{
//     myAdContainer.append(article)
// },6000)


 btn = document.querySelector("button");


//  btn.classList.add("cls")


//  btn.className="hehe"
btn.onclick=()=>{
    // article.remove()
myAdContainer.append(article);
    article.classList.toggle("hide")
}
