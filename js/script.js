
$(document).ready(function(){ 
   $('.menuMenu').on('click', function(){
       //$('.menuName').toggleClass('.menuNameActive');
       $('.menu').toggleClass('menuActive');
       $('.menuSecond').toggleClass('menuSecondActive');
       $('.menuTitle').toggleClass('menuTitleActive');
       $('.menuName').toggleClass('menuNameActive');
       $('.menuCol').toggleClass('menuFirstCol');
   });
   $('.contentPriority').on('click', function(){
       $('.priorityBox').toggleClass('priorityBoxActive');
   });
   $('.priorityYellow').on('click', function(){
    $('.priorityBox').toggleClass('priorityBoxActive');
   });
   $('.priorityRed').on('click', function(){
    $('.priorityBox').toggleClass('priorityBoxActive');
   })
});