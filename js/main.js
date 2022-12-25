// Task no: 1
const cards = document.querySelectorAll('.side-bar .crayons-card');
cards[0].firstChild.nextSibling.innerText = "Maulik Vadodariya";
cards[0].firstChild.nextSibling.nextSibling.innerText = "I m a full stack developer and passionate about coding and programming.";

// Task no: 2
const appleCategoriesElements = document.querySelectorAll('.as-imagegrid-item-title');

var items = [];

appleCategoriesElements.forEach((item) => {  
    items.push(item.firstChild.textContent); 
    // console.log(items);
})

// Task no: 3
const faqs = document.getElementsByClassName("accordion-homepage");
for (const item of faqs) {
   var newFaq = item;
}

const section = document.createElement("section");
section.classList.add("parent");
 
const h3 = document.createElement("h3");
const text = document.createTextNode("new faq");
h3.appendChild(text);

section.appendChild(h3);
newFaq.appendChild(section);

// Task no: 4
const contactSection = document.querySelector(".contactUs--inner");
contactSection.firstChild.childNodes[1].childNodes[1].innerText = "8585 858 585";

// Task no: 5
const cardElements = document.querySelectorAll(".diwali-deals-product-sale-pro");
cardElements[0].childNodes[3].innerText = "Check Out";

// Task no: 6
const searchElement = document.querySelector('.searchinput___19uW0');

searchElement.addEventListener("mouseover" , function(e) { 
    e.target.style.backgroundColor = "red";
})
searchElement.addEventListener("mouseout" , function(e) { 
    e.target.style.backgroundColor = "#eceff1";
})

// Task no: 7


// Task no: 8
const langLinkSection = document.querySelectorAll('#SIvCob a'); 

langLinkSection.forEach((v,k) => {
    if(k % 2 == 0) {
        v.remove();
    }
})

// Task no: 9
const h1 = document.querySelector('.section_header h1');

h1.childNodes[0].classList.remove("text-color-hero-gradient");

h1.style.color = "green";
h1.style.fontFamily = "Times New Roman";


// Task no: 10  
const btn = document.querySelector(".landing-top .login-btn-text");

btn.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = "red";
})

// Task no: 11
const logoElement = document.querySelector('.icon-logo');
logoElement.style.backgroundImage = "url('https://account.ineuron.ai/static/images/ineuron-logo.png')";


// Task no: 12
const repoBtnElement = document.querySelector('#new_repository button');
repoBtnElement.style.backgroundColor = "blue";


// Task no: 13


// Task no: 14
const titleElement = document.querySelector('.HotDealsAll__Heading__2fIbe');
titleElement.style.fontSize = "80px";

// Task no: 15
const itemTittleElements = document.querySelectorAll('.ps-title');
 
itemTittleElements.forEach(((title) => {
    if(title.innerText === "G15 Gaming Laptop"){
        title.style.textAlign = "right";
    }
}))

// Task no: 16
const headingElement = document.querySelectorAll('.section-title_title__VEDfK');
headingElement[0].innerText = 'Start With Scratch'; 


// Task no: 17


// Task no: 18
const footerElement = document.querySelector('.p-f03-footer-container');
footerElement.style.background = 'linear-gradient(to bottom right,#a79d21 0,#8b8d30 50%,#cdb453 100%)';

// Task no: 19
const logoElement = document.querySelector('.logo');
const logoLinkText = logoElement.src;
logoElement.remove();

const linkElement = document.querySelector('.navbar-brand');
linkElement.setAttribute('href' , logoLinkText);   
linkElement.style.textDecoration = 'underline';
linkElement.style.color = 'blue';
linkElement.innerText = logoLinkText;   

// Task no: 20
const descriptionElement = document.querySelectorAll('.discover-intro');
descriptionElement.forEach(element => {
    element.style.color = 'red';
});

 