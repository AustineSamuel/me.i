onload=()=>{
  /*const intro=['a FullStack WebDevloper','Web Designer','FrontEnd Developer','Backend Developer'];



let width=0;
function animateNow(){
const elWidth= getQr(".animateV").style.width
if(elWidth>0){
 width--
}
else{
width++;
}
console.log(width);
requestAnimationFrame(animateNow);
}//end function
*/

let open=true;
$("#nav #openMenu,aside #close").click(function(){
  if(open){
    if(window.innerWidth>660)return

  $("aside").css("width","100%");
  $("#nav #openMenu").attr("class","fa fa-times");
    $("aside #menuC").css("height","100%")


  open=false;
  }
  else{
    $("aside #menuC").css("height","0%")
    setTimeout(()=>{
      $("aside").css("width","0");
      $("#nav #openMenu").attr("class","fa fa-reorder");
        open=true;
    },1000);
  }
});


function about(){
  $("#body").animate({scrollTop:getQr("#box section").offsetTop-150},300);
  $("aside").css("width","0");
  $("#nav #openMenu").attr("class","fa fa-reorder");
    open=true;
}
function skillsA(){
  $("#body").animate({scrollTop:getQr("#skillsH").offsetTop-150},300);
  $("aside").css("width","0");
  $("#nav #openMenu").attr("class","fa fa-reorder");
    open=true;
}
function service(){
  $("#body").animate({scrollTop:getQr("#service").offsetTop-40},300);
  $("aside").css("width","0");
  $("#nav #openMenu").attr("class","fa fa-reorder");
    open=true;
}

function works(){
  $("#body").animate({scrollTop:getQr("#works").offsetTop-40},300);
  $("aside").css("width","0");
  $("#nav #openMenu").attr("class","fa fa-reorder");
    open=true;
}


function contact(){
  $("#body").animate({scrollTop:getQr("footer").offsetTop-40},300);
  $("aside").css("width","0");
  $("#nav #openMenu").attr("class","fa fa-reorder");
    open=true;
}

$("#learnMore,#explainArrow,#menuC #showABout,#pcNav #aboutMeBtn").click(function() {
  about();
})
$("#menuC #serviceBtn,#pcNav #serviceBtn").click(function(){
service();
});
$("#menuC #worksBtn,#pcNav #worksBtn").click(function(){
  works();
});
$("#menuC #contactBtn,#pcNav #contactBtn").click(function(){
contact();
});
$("#menuC #mySkillsBtn,#pcNav #mySkillsBtn").click(function(){
  skillsA();
})
const info={
  "welcome":"Welcome to My Website",
  "service":"These are my Services",
  "about":"That's My Story",
  "works":"Some of my Works",
  "whyMe":"Why Hire Me ?",
  "skills":"Check Out My skills",
  "contact":"Contact Me to start work"
}

  let abouts=getQr("#aboutMe");
  let services=getQr("#service");
  let whyMeH=getQr("#headingWhyMe");
  let worksH=getQr("#works");
let skills=getQr("#skillsH");
let contactMe=getQr("#start")
function  setTopText(text){
  //jqeury to make things simpler
  $("#bbyInfo").html(text).parent().css("animation-name","text");
  setTimeout(()=>{
    $("#bbyInfo").parent().css("animation-name","none");
    $("#bbyInfo").html(text+".")
  },2000);
}
setTopText(info.welcome);

$("img,#image").click(function(){
seeImage("../images/me3.jpg");
});

let scroll=getQr("#body").scrollTop;
if(scroll<abouts.offsetTop){
  getQr("#nav").style.boxShadow="";
  setTopText(info.welcome);
  $("#navCtn,aside #menuC").css("background","")
    $("#navCtn *,aside #menuC *").css("color","").css("border","")
  }
  else{
    $("#navCtn").css("background","white")
    $("#navCtn *, aside #menuC *").css("color","var(--black)");
    $("aside #menuC").css("background","white").children("button").css("border","1px solid rgb(230,230,230)")
    getQr("#nav").style.boxShadow="0px 3px 15px 0px rgb(185, 185, 152)";
  }

action("#body","scroll",(e)=>{
  scroll=e.target.scrollTop;
  const animate=false;

  if(scroll<abouts.offsetTop){
    getQr("#nav").style.boxShadow="";
    setTopText(info.welcome);
    $("#navCtn,aside #menuC").css("background","")
      $("#navCtn *,aside #menuC *").css("color","").css("border","")
    }
    else{
      $("#navCtn").css("background","white")
      $("#navCtn *, aside #menuC *").css("color","var(--black)");
      $("aside #menuC").css("background","white").children("button").css("border","1px solid rgb(230,230,230)")
      getQr("#nav").style.boxShadow="0px 3px 15px 0px rgb(185, 185, 152)";
    }

    if(scroll>abouts.offsetTop && scroll < abouts.offsetTop+50){
      setTopText(info.about);
    }

    
    if(scroll>services.offsetTop && scroll < services.offsetTop+50){
      setTopText(info.service);
    }
 
    if(scroll>whyMeH.offsetTop && scroll<whyMeH.offsetTop+50){
      setTopText(info.whyMe);
    }

    if(scroll>worksH.offsetTop && scroll<worksH.offsetTop+50){
      setTopText(info.works);
    }

    if(scroll>skills.offsetTop && scroll < skills.offsetTop+50){
      setTopText(info.skills);
    }

    if(scroll >(contactMe.offsetTop-500)){
      setTopText(info.contact);
  $("#form .inputCtn input").focus();
    }

  });


  function takeInputMobile(){
    takeInput("Enter your Email or phone number",(e)=>{
      $("#form .inputCtn input").val(e);
      setTimeout(() => {
        takeInput("Write Message",(e)=>{
          $("#form .inputCtn textarea").val(e);
          //send here
        });
      }, 0);
      });
    }
//slider
function submitForm(){
  
  if(!/[0-9|@|.]/.test($("#form .inputCtn input").val())){
    alert("please enter a valid phone number pr email address");
    return
  }
  $.post({
    url:"../data.php",
    data:{"message":$("#form .inputCtn textarea").val(),"name":$("#form .inputCtn input").val()},
    success:function(e){
      
      $("#form .inputCtn textarea").val("");
      $("#form .inputCtn input").val("");
    },
    error:function(){
      alert("error");
    }
  })
}
$("#form .inputCtn #submit").click(submitForm);
const heading=$("#slideHeading");
const imgView=$("#worksCtn img");
const text=$("#worksCtn #worksInfo #text span");
const tagsCtn=$("#worksCtn #worksInfo #tags")
const next=$("#worksCtn #worksInfo #nextButton,#nextButton2");

const app=[

{"name":"Online Music Streaming App",
"images":["music1.jpg","music2.jpg","music3.jpg","music4.png"],
"information":`
Website application that enable artist to upload delete and update there songs online
and interact with there fans via comments and streaming rates
`,
"link":"https://austinesamuelcodes.000webhostapp.com/play/player.html",
"technologies":["JavaScript","Jquery","Php","Sql","Html","Css","Json","Ajax","angularjs"]
},
{"name":"Online Banking web application",
"images":["bank1.jpg","bank2.png","bank3.jpg","bank4.jpg"],
"information":`
Website application work with bank company build in year 2021
thats enable its users to login check there account details and make many other transactions securely withing the app

`,
"link":"https://austinesamuelcodes.000webhostapp.com/p3/",
"technologies":["JavaScript","Jquery","Php","Sql","Html","Css","w3-css","Json","Ajax","angularjs"]
},
{"name":"Facebook Clone",
"images":["fb1.jpg","fb2.jpg","fb3.jpg"],
"information":`
I code facebook clone from scratch just for practices a years ago with functional User Expereince`,
"link":"https://austinesamuelcodes.000webhostapp.com/play/player.html",
"technologies":["JavaScript","Jquery","Php","Html","Css","Json","Ajax","etc"]
},

  {"name":"Real Time ChatApp",
  "images":["chat6.jpg","chat3.jpg","chat4.jpg"],
"information":`Realtime chat app that can exchange extimate of 50 messages per second and store user chats securely in MySQL database . it work just like other social media apps`,
"link":"none",
"technologies":["Sql","JavaScript","Jquery","Php","Html","Css","Json","Sockets"]
},
{"name":"Online  Code-Editor ",
"images":["Editor1.jpg","Editor2.jpg","Editor3.jpg","Editor4.Jpg","Editor5.jpg"],
"information":`
This is programming related app.. 
its a web app that enable user to write program  and execute online

<i class="fa fa-star" style="color:black"></i>HTML CSS JavaScript IDE <i style="color:black" class="fa fa-star"></i>
`,
"technologies":["JavaScript","Jquery","Php","Html","Css"],
"link":"https://austinesamuelcodes.000webhostapp.com/codes/code-editor/"
},
{"name":"Canvas Games",
  "images":["game.jpg","ball.jpg"],
"information":`
simple and fun games build in Canvas 
 `,
"link":"https://austinesamuelcodes.000webhostapp.com/canvasFuns/",
"technologies":["JavaScript","HTML5 Canvas"]
}
]
//changing
next.click(function(){
  if(workIndex>=app.length)return
  clearInterval(imageChanges);
workIndex+=1
showWork();
})
//end changing

let workIndex=0;
let imageChanges=null;
$("#worksCtn #text #check").click(function(){
  if(app[workIndex].link=="none"){
   alert("private link : sorry server not permit you to visit the site")
  }
 else{
   href(app[workIndex].link,"_blank");
 }
 })
function showWork(){
  if(workIndex>=app.length){
    workIndex=0;
  }
  const work=app[workIndex];
  heading.html(work.name);
  imgView.attr("src","../images/"+work.images[0]);
  text.html(work.information);
  tagsCtn.html("");
  work.technologies.forEach((e)=>{
    tagsCtn.append(`<button>${e}</button>`);
});
let imgIndex=0;

function viewImage(){
  if(imgIndex>=work.images.length){
    imgIndex=0;
  }
  imgView.css("opacity","0.2").css("width","100px");
  setTimeout(() => {
    imgView.css("opacity","9").css("width","");
    imgView.attr("src","../images/"+work.images[imgIndex]);
  },800);

  }
imageChanges=setInterval(()=>{
  imgIndex++
viewImage();
},5000)
//changing
$("#worksCtn #slide #next").click(function(){
  imgIndex++;
  viewImage()
})
$("#worksCtn #slide #prev").click(function(){
  imgIndex--;
  viewImage();
})//end changing
}
showWork();
const move=(e)=>{
  const el=e.target;
  getQr("#form .inputCtn").style.background=`linear-gradient(${(e.clientY/e.clientX)*innerWidth/7}deg,rgba(63, 23, 116, 0.596),rgba(255, 255, 255, 0.432))`;

}
const moveM=(e)=>{
  const el=e.target;
  getQr("#form .inputCtn").style.background=`linear-gradient(${(e.touches[0].clientY/e.touches[0].clientX)*innerWidth/7}deg,rgba(63, 23, 116, 0.596),rgba(255, 255, 255, 0.432))`;

}
    getQr("#form .inputCtn").addEventListener("mousemove",move)
    action("#form .inputCtn","touchstart",moveM);
    action("#form .inputCtn","touchmove",moveM)
}//end onload