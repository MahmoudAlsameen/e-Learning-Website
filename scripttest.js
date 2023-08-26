
  
//   let toggleBtn = document.getElementById('toggle-btn');
//   let body = document.body;
//   let darkMode = localStorage.getItem('dark-mode');
  
//   const enableDarkMode = () => {
//     toggleBtn.classList.replace('fa-sun', 'fa-moon');
//     body.classList.add('dark');
//     localStorage.setItem('dark-mode', 'enabled');
//   };
  
//   const disableDarkMode = () => {
//     toggleBtn.classList.replace('fa-moon', 'fa-sun');
//     body.classList.remove('dark');
//     localStorage.setItem('dark-mode', 'disabled');
//   };
  
//   if (darkMode === 'enabled') {
//     enableDarkMode();
//   }
  
//   toggleBtn.onclick = (e) => {
//     darkMode = localStorage.getItem('dark-mode');
//     if (darkMode === 'disabled') {
//       enableDarkMode();
//     } else {
//       disableDarkMode();
//     }
//   };
  
//   let container = document.querySelector('.header .flex .container');
  
//   document.querySelector('#cart-btn').onclick = () => {
//     container.classList.toggle('active');
//     search.classList.remove('active');
//   };
  
//   let profile = document.querySelector('.header .flex .profile');
  
//   document.querySelector('#user-btn').onclick = () => {
//     profile.classList.toggle('active');
//     search.classList.remove('active');
//   };
  
//   let search = document.querySelector('.header .flex .search-form');
  
//   document.querySelector('#search-btn').onclick = () => {
//     search.classList.toggle('active');
//     profile.classList.remove('active');
//   };
  
//   let sideBar = document.querySelector('.side-bar');
  
//   document.querySelector('#menu-btn').onclick = () => {
//     sideBar.classList.toggle('active');
//     body.classList.toggle('active');
//   };
  
//   document.querySelector('#close-btn').onclick = () => {
//     sideBar.classList.remove('active');
//     body.classList.remove('active');
//   };
  
//   window.onscroll = () => {
//     profile.classList.remove('active');
//     search.classList.remove('active');
  
//     if (window.innerWidth < 1200) {
//       sideBar.classList.remove('active');
//       body.classList.remove('active');
//     }
//   };
  
  ////////////////////////////////////////////////////////////////////////////////////////////
  /* 
  Add regestration info to local storage and json file if possible
  */
  const testDev = document.getElementById("testdiv");
// testDev.innerHTML +='ff';
  const fName = document.getElementById('fName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const rPassword = document.getElementById('rPassword');
  const profilePic = document.getElementById('profilePic');
  const logemail = document.getElementById('logemail');
  const logpass = document.getElementById('logpass');
  const logsubmit = document.getElementById('logsubmit');
  const regsbmit = document.getElementById('regsubmit');
  const cartContainer = document.getElementById('cartContainer');
  const searchForm = document.getElementById('id-seach-form');
  const searchFormInput = document.getElementById('id-search-form-input');
  const cartItem = document.getElementById('cartItem');
  let cart = [];
  let addCartBtns = [];
  let playlistpageBtns=[]
  
  // document.getElementById('storeBtn').onclick=store()
  
  function store() {
    if (
      fName.value.length == 0 ||
      password.value.length == 0 ||
      validate() == false ||
      password.value != rPassword.value
    ) {
      alert('Please fill in email and password');
      regsbmit.onsubmit = function (event) {
        event.preventDefault();
      };
    } else {
      localStorage.setItem('email', email.value);
      localStorage.setItem('pw', password.value);
      regsbmit.onsubmit = function (event) {
        return true;
      };
    }
  }
  function loginn() {
    if (
      logemail.value === localStorage.getItem('email') &&
      logpass.value === localStorage.getItem('pw')
    ) {
      alert('true');
    } else {
      alert('false');
      logsubmit.onsubmit = function (event) {
        event.preventDefault();
      };
    }
  }
  
  function check() {
    var storedName = localStorage.getItem('fName');
    var storedPw = localStorage.getItem('password');
  
    var userName = document.getElementById('email');
    var userPw = document.getElementById('password');
  
    if (userName.value == storedName && userPw.value == storedPw) {
      alert('You are logged in.');
    } else {
      alert('enter invalid email and password ');
    }
  }
  
  function validate() {
    // var user = fName.value;
    // var user2 = document.getElementById("name");
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email.value);
  }
  
  // function matchpass() {
  //    // var firstpassword = document.getElementById("pass_wd").value;
  //    // var secondpassword = document.getElementById("ss").value;
  
  //    if (password == rPassword) {
  //        return true;
  //    }
  // }
  
  // function validateMatchpassStore(){
  //    if(validate() && matchpass())
  //    {
  //    store()
  // }
  // else{
  //    regsbmit.onsubmit=function (event){
  //       event.preventDefault()
  //    }
  //    alert('check your email and password')
  // }
  // }
  
  ////////////////////////////////////////////////////////////////////////////////////////////
  /*
  Get data from courses.json
  */
  
  // const courses=function loadCourses(){fetch('./courses.json')
  //   .then(function (resp) {
  //     return resp.json();
  //   })
  //   .then(function (data) {
  //    //  console.log(data);
  //     const courses=data;
  //     return courses
  //   });
  //   return courses
  // }
  // console.log(courses)
  let coursesArray = [];
  const courses = async function loadCourses() {
    return await fetch('./courses.json')
      .then((resp) => resp.json())
      .then((data) => data)
      .catch((error) => {
        console.error('Error fetching courses:', error);
        return null;
      });
  };
  
  //  connst form select
  const cn = document.querySelectorAll('.cn');
  const showResult = document.getElementById('show-result');
  // Use 'then' to save the resolved value (the array) to a variable
  courses().then((data) => {
    const coursesArray = data; // Save the array to the variable 'coursesArray'
    // console.log(coursesArray); // This will log the array of courses
  
    // searchFormInput.addEventListener('keyup', () => {
    //   let searchFound = [];
  
    //   let searchResult = coursesArray.filter((course) =>
    //     course.PlaylistName.toUpperCase().includes(
    //       searchFormInput.value.toUpperCase()
    //     )
    //   );
    //   searchFound.push(...searchResult);
    //   //  searchFound.forEach((item)=>
    //   //  console.log(item)
    //   //  );
  
    //   showResult.innerHTML = searchFound
    //     .map((item) => {
    //       return `<p style="background-color:white;font-size:10pt; padding: .5rem; margin: 1rem;border-radius: .5rem; cursor:pointer; line-height:2; ">
    //      <a id="lj" href="${item.link}">${item.PlaylistName}</a></p>`;
    //     })
    //     .join('');
    // });
    // searchFormInput.addEventListener('blur', () => {
    //   setTimeout(() => {
    //     showResult.innerHTML = '';
    //   }, 100);
    // });
  
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
      <a id="playlistpage${coursesArray[index].PlaylistID}" style="display: block;" href="playlist.html" class="inline-btn">view playlist</a>
      <a id="addCartID${coursesArray[index].PlaylistID}" style="display: block;" class="inline-btn">Add To Cart</a>
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
    let flag = false;
    playlistpageBtns.forEach((item, index) => {
      document.getElementById(item).addEventListener('click', (e) => {
        e.preventDefault()
        console.log(e.target)
        // const playlistwindow=window.open('playlist.html')
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'This is a new paragraph added from the first page!';
        const testwindow=window.open('test.html');
        // window.addEventListener("DOMContentLoaded",()=>{
            
        // })
        // const playlistpageID=testwindow.document.getElementById('testdiv')
        // console.log("item="+ item)
        // console.log("index= "+index)
        // console.log(playlistpageID);
        // if(){

        // }
        // console.log(window.location.search);
        testDev.innerHTML +="a7a";
        playlistpageID.addEventListener('DOMContentLoaded',playlistpageID.appendChild(newParagraph))
        
        
    });
});
addElemt(testDev);
  
  
    addCartBtns.forEach((item, index) => {
      document.getElementById(item).addEventListener('click', () => {
        cart.push(coursesArray[index]);
        cart = cart.filter((element, index, self) => {
          return (
            index === self.findIndex((e) => e.PlaylistID === element.PlaylistID)
          );
        });
        const cartList = cart.map((item) => `<li>${item.PlaylistName}</li>`).join("");
      cartItem.innerHTML = `<ul>${cartList}</ul>`;
        
        
        
        
        // `<p>${cart[index].PlaylistName}</p>`;
        console.log(cartList);
      });
    });
  });
  
  //  setTimeout(()=>console.log(coursesArray),100)
  // console.log(cn)
  
  ////////////////////////////////////////////////////////////////////////
  /* Search feature */
  
//   searchFormInput.addEventListener('keydown', () => {
//     searchFormInput.value;
//   });
  
  // var cart =[];
  // function addtocart(a){
  //     cart.push({...categories[a]})
  //     displaycart()
  // }
  // function delElement(a){
  //     cart.splice(a,1)
  //     displaycart()
  // }
  // function displaycart(a){
  
  //     let j =0,total=0
  //     if(cart.length==0){
  //         document.getElementById('cartItem').innerHTML="Your Cart Is Empty"
  //         document.getElementById("total").innerHTML="$ "+0+".00"
  //     }else{
  //         document.getElementById('cartItem').innerHTML=cart.map((items)=>
  //         {
  //             var {image,title,price} = items
  //             total=total+price
  //             document.getElementById("total").innerHTML="$ "+total+".00"
  //             return(
  //                 `<div class='cart-item'>
  //                 <div class='row-img'>
  //                 <img class='rowimg' src=${image}>
  //                 </div>
  //                 <p style='font-size:12px;'>${title}</p>
  //                 <h2 style='font-size:15px;'>${price}.00</h2> ` +
  //                 "<i class='fa fa-trash' onclick='delElement("+(j++)+")'></i></div>"
  //             )
  //         }).join('')document.getElementById("count").innerHTML=cart.length
  //
  //     }
  // }
  

  function addElemt(item){
    item.innerHTML += 'dd';
  }
