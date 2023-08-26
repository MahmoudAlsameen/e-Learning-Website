
let sideBar = document.querySelector(".side-bar");
let toggleBtn = document.getElementById("toggle-btn");
let body = document.body;



  if (
   window.onload == localStorage.getItem("email")  &&
   window.onload == localStorage.getItem("pw") 
  ) {
console.log("nnn")
    sideBar.classList.add("active");
    body.classList.add("active");

    document.querySelector("#menu-btn").style.visibility='hidden';
    document.querySelector("#im").style.visibility='hidden';
    document.querySelector("#in").style.visibility='hidden';
    document.querySelector("#is").style.visibility='hidden';
    document.querySelector("#iv").style.visibility='hidden';
  } else {
    sideBar.classList.remove("active");
    body.classList.remove("active");
 
   
    console.log("No")
  }




let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  toggleBtn.classList.replace("fa-sun", "fa-moon");
  body.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  toggleBtn.classList.replace("fa-moon", "fa-sun");
  body.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

toggleBtn.onclick = (e) => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};

let container = document.querySelector(".header .flex .container");

document.querySelector("#cart-btn").onclick = () => {
  container.classList.toggle("active");
  search.classList.remove("active");
};

let profile = document.querySelector(".header .flex .profile");

document.querySelector("#user-btn").onclick = () => {
  profile.classList.toggle("active");
  search.classList.remove("active");
};

let search = document.querySelector(".header .flex .search-form");

document.querySelector("#search-btn").onclick = () => {
  search.classList.toggle("active");
  profile.classList.remove("active");
};



document.querySelector("#menu-btn").onclick = () => {
  sideBar.classList.toggle("active");
  body.classList.toggle("active");
};

document.querySelector("#close-btn").onclick = () => {
  sideBar.classList.remove("active");
  body.classList.remove("active");
};

window.onscroll = () => {
  profile.classList.remove("active");
  search.classList.remove("active");

  if (window.innerWidth < 1200) {
    sideBar.classList.remove("active");
    body.classList.remove("active");
  }
};

////////////////////////////////////////////////////////////////////////////////////////////
/* 
Add regestration info to local storage and json file if possible
*/


const countCoursesCart = document.getElementById("count");
const fName = document.querySelector(".fName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rPassword = document.getElementById("rPassword");
const profilePic = document.getElementById("profilePic");
const logemail = document.getElementById("logemail");
const logpass = document.getElementById("logpass");
const logsubmit = document.getElementById("logsubmit");
const regsbmit = document.getElementById("regsubmit");
const cartContainer = document.getElementById("cartContainer");
const searchForm = document.getElementById("id-seach-form");
const searchFormInput = document.getElementById("id-search-form-input");
const cartItem = document.getElementById("cartItem");
const playlistpageID = document.getElementById("testdiv");
const cartTotalID = document.getElementById("cartTotalID");
const img_person = document.getElementById("img_person");
const name_person = document.getElementById("name_person");
const email_person = document.getElementById("email_person");
const im = document.getElementById("im");
const inn = document.getElementById("in");
const is = document.getElementById("is");

var imgData;

let cart = [];
let addCartBtns = [];
let cartList = [];
let cartTotal = 0;
let playlistpageBtns = [];
let imgArray=["yousry.jpg","mohab.png","MahmoudAlsameen.png"]

console.log("first cartTotal= " + cartTotal);






let coursesArray = [];

const xhr = new XMLHttpRequest();
xhr.open("GET", "courses.json", false);
xhr.send();
if (xhr.status === 200) {
  coursesArray = JSON.parse(xhr.responseText);
  console.log("my courses array= " + coursesArray);
} else {
  console.error("Error:", xhr.status, xhr.statusText);
}

const categories = [
  ...new Set(
    coursesArray.map((item) => {
      return item;
    })
  ),
];

//  connst form select
const cn = document.querySelectorAll(".cn");
const showResult = document.getElementById("show-result");

searchFormInput.addEventListener("keyup", () => {
  let searchFound = [];

  let searchResult = coursesArray.filter((course) =>
    course.PlaylistName.toUpperCase().includes(
      searchFormInput.value.toUpperCase()
    )
  );
  searchFound.push(...searchResult);
  searchFound.forEach((item) => console.log(item));

  showResult.innerHTML = searchFound
    .map((item) => {
      return `<p style="background-color:white;font-size:10pt; padding: .5rem; margin: 1rem;border-radius: .5rem; cursor:pointer; line-height:2; ">
     <a id="lj" href="${item.link}">${item.PlaylistName}</a></p>`;
    })
    .join("");
});
searchFormInput.addEventListener("blur", () => {
  setTimeout(() => {
    showResult.innerHTML = "";
  }, 100);
});

cn.forEach((element, index) => {
  element.innerHTML = `<div class="tutor">
  <img src=${coursesArray[index].instructorPic} alt="">
  <div class="info">
     <h3>${coursesArray[index].instructor}</h3>
     <span>${coursesArray[index].date}</span>
  </div>
  </div>
  <div class="thumb">
  <img src=${coursesArray[index].Videos.first.thumb_src} alt="">
  <span>10 videos</span>
  </div>
  <h3 class="title" >${coursesArray[index].PlaylistName}</h3>
  <a id="playlistpage${coursesArray[index].PlaylistID}" style="display: block;" class="inline-btn">view playlist</a>
  ${(coursesArray[index].price>0)? `<a id="addCartID${coursesArray[index].PlaylistID}" style="display: inline-block;" onclick="addtocart(${index})" class="inline-btn">Add To Cart</a>`:""}<br>
  <label style="border:solid 3px #8e44ad;background-color: #99f0bf ;width:55px;font-size:20px;border-radius:10px;text-align:center;">${coursesArray[index].price}$</label>

  </div>`;

  addCartBtns.push(`addCartID${coursesArray[index].PlaylistID}`);
  playlistpageBtns.push(`playlistpage${coursesArray[index].PlaylistID}`);

  // // const cartElements=document.getElementsByClassName(coursesArray[index].addCartClass)
  //   element.addEventListener('click',()=>{
  // const indvidualCourse=document.createElement('div')
  // indvidualCourse.innerHTML=`<p>${coursesArray[index].PlaylistName}</p>`
  // cartItem.appendChild(indvidualCourse)
  // // cartElements.forEach((element)=>{

  //   })
  // })
});

playlistpageBtns.forEach((item, index) => {
  document.getElementById(item).addEventListener("click", (e) => {
    e.preventDefault();
    viewPlay(`playlist${index+1}.html`,coursesArray[index].price) 
  });
});

function addtocart(a) {
  if(localStorage.getItem("email")&&localStorage.getItem("loggedin")){
  console.log(coursesArray[a]);
  cart.push(coursesArray[a]);
  cart = cart.filter((element, index, self) => {
    return index === self.findIndex((e) => e.PlaylistID === element.PlaylistID);
  });

  cartItem.innerHTML = `<ul>${cartList}</ul>`;

  displaycart();
}else{
  window.open("login.html");
}
}

function delElement(anything) {
  cart.splice(anything, 1);
  displaycart();
}

function displaycart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your Cart Is Empty";
    document.getElementById("cartTotalID").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        total = total + items.price;
        document.getElementById("cartTotalID").innerHTML = "$ " + total + ".00";
        return (
          `<li  style="font-size:1.5rem;list-style: none;text-align:left;">${items.PlaylistName}
      <span style="text-align:right;margin-right:.5rem;">${items.price}</span>
     ` +
          " <i class='fa fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></li>"
        );
      })
      .join("");
  }
}


// redirect to login or register
function viewPlay(playlistlink,coursePrice){
  if(coursePrice=="free"||localStorage.getItem("loggedin")){
    window.open(playlistlink);}
    
  else{
    window.open("login.html");
  }
}

function redirectLogin(playlistlink){
  if(localStorage.getItem("email")&&localStorage.getItem("loggedin")){
    window.open(playlistlink);
  }else{
    window.open("login.html");
  }
}
// const inputString = "c/destkp/MahmoudAlsameen.png";


 // Output: MahmoudAlsameen.png

 
 
//  window.onload(()=> {
 
   handleCourseData(name_person,img_person ,email_person);
   handleCourseData(inn,im ,is);
//  })
function handleCourseData(namePerson , imgSrc , emailPerson) { 
  if(localStorage.getItem("loggedin")!="false"){
   namePerson.innerHTML = localStorage.getItem("fName")
  let mysource=localStorage.getItem('profilePic')
  let imageArray22=mysource.split("\\");
  let imageArray33=imageArray22[imageArray22.length-1]
  // console.log("img arr" , imageArray33);
  //console.log("img source" , imgSrc);
  // console.log("name person" , namePerson);
  // console.log("name person" , namePerson);
    // console.log(imageArray33)
    imgArray.forEach((element,index)=>{
    if(element==imageArray33){
      // console.log(
      //   "src", 
      //   imgSrc
      // )
      imgSrc.src = `./images/${element}`
    }
  })
  emailPerson.innerHTML=localStorage.getItem("email")
}
else{
  return
}
}




//  })


// function to clear loggedin

function clearLoggedin(){
  localStorage.setItem("loggedin",false)
}

// function for logout button

function logoutBtnFunction(){

clearLoggedin()
window.open('login.html')

}