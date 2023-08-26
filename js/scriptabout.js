
let imgArray2=["yousry.jpg","mohab.png","MahmoudAlsameen.png"]
const img_personss = document.getElementById("img_personss");
const name_personss = document.getElementById("name_personss");
const email_personss = document.getElementById("email_personss");

handleCourseData(name_personss,img_personss ,email_personss);
//  })
function handleCourseData(namePerson , imgSrc , emailPerson) { 
   namePerson.innerHTML = localStorage.getItem("fName")
  let mysource=localStorage.getItem('profilePic')
  let imageArray22=mysource.split("\\");
  let imageArray33=imageArray22[imageArray22.length-1]

    imgArray2.forEach((element,index)=>{
    if(element==imageArray33){
     
      imgSrc.src = `./images/${element}`
    }
  })
  emailPerson.innerHTML=localStorage.getItem("email")
}




