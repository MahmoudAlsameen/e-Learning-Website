
let imgArray3=["yousry.jpg","mohab.png","MahmoudAlsameen.png"]
const img_personsss = document.getElementById("img_personsss");
const name_personsss = document.getElementById("name_personsss");
const email_personsss = document.getElementById("email_personsss");


handleCourseData(name_personsss,img_personsss ,email_personsss);
//  })
function handleCourseData(namePerson , imgSrc , emailPerson) { 
   namePerson.innerHTML = localStorage.getItem("fName")
  let mysource=localStorage.getItem('profilePic')
  let imageArray22=mysource.split("\\");
  let imageArray33=imageArray22[imageArray22.length-1]

    imgArray3.forEach((element,index)=>{
    if(element==imageArray33){
     
      imgSrc.src = `./images/${element}`
    }
  })
  emailPerson.innerHTML=localStorage.getItem("email")
}




  


