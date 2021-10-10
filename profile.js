// add eventLister on btns 
/*const btns = document.querySelectorAll(".btn");
const btnsDiv = document.querySelector(".btns");
const contents = document.querySelectorAll(".content");
btnsDiv.addEventListener("click",(e)=>{
   const mark = e.target.dataset.mark
   //console.log(mark);
   if(mark){
       btns.forEach((btn)=>{
          btn.classList.remove("active");
          e.target.classList.add("active");
       });
       contents.forEach(function(content){
          content.classList.remove("active1");
          const element = document.getElementById(mark);
          element.classList.add("active1");
       });
   }
});*/
AOS.init();
let IconOne = document.getElementById("users");
let IconTwo = document.getElementById("comments");
let IconThree = document.getElementById("bell");

let FriendRequest = document.querySelector(".friends");
let Messages = document.querySelector(".Message");
let Notifications = document.querySelector(".Notifi");

IconOne.addEventListener("click", ()=>{
    FriendRequest.classList.toggle("ShowContent");
    Messages.classList.remove("ShowContent");
    Notifications.classList.remove("ShowContent");
});

IconTwo.addEventListener("click", ()=>{
    Messages.classList.toggle("ShowContent");
    FriendRequest.classList.remove("ShowContent");
    Notifications.classList.remove("ShowContent");
});

IconThree.addEventListener("click", ()=>{
    Notifications.classList.toggle("ShowContent");
    Messages.classList.remove("ShowContent");
    FriendRequest.classList.remove("ShowContent");
});
$(document).ready(function(){
   $("#selectt").on("click",function(){
      $(".seifs").toggle();
   });
   $(".CommentIcon1 i").on("dblclick",function(){
       $("#pictuerComment").toggle();
   });
   $(".LoveIcon1 i").on("click",function(){
      $(this).css("color","red");
      $(".LoveIcon1 p").text("501 like")
   });
   $(".LoveIcon1 i").on("dblclick",function(){
      $(this).css("color","#888");
      $(".LoveIcon1 p").text("500 like")
   });
   $(".LoveIcon2 i").on("click",function(){
      $(this).css("color","red");
      $(".LoveIcon2 p").text("501 like")
   });
   $(".LoveIcon2 i").on("dblclick",function(){
      $(this).css("color","#888");
      $(".LoveIcon2 p").text("500 like")
   });
   $(".CommentIcon2 i").on("dblclick",function(){
      $("#postComment").toggle();
  });
  $(".LoveIcon3 i").on("click",function(){
   $(this).css("color","red");
   $(".LoveIcon3 p").text("501 like")
  });
  $(".LoveIcon3 i").on("dblclick",function(){
     $(this).css("color","#888");
     $(".LoveIcon3 p").text("500 like")
   });
  $(".CommentIcon3 i").on("dblclick",function(){
   $("#postComment2").toggle();
  });
  $(".LoveIcon4 i").on("click",function(){
   $(this).css("color","red");
   $(".LoveIcon4 p").text("501 like")
  });
  $(".LoveIcon4 i").on("dblclick",function(){
     $(this).css("color","#888");
     $(".LoveIcon4 p").text("500 like")
   });
  $(".CommentIcon4 i").on("dblclick",function(){
   $("#VedioComment").toggle();
  });
});
