
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
   });
   $('.priorityRedText').on('click', function(){
    $('.priorityBox').toggleClass('priorityBoxActive');
   });
   $('.priorityYellowText').on('click', function(){
    $('.priorityBox').toggleClass('priorityBoxActive');
   });
   $('.planWeek').on('click',function(){
    $('.planWeekChoose').toggleClass('planWeekChooseActive');
   });
   $('.planWeekChooseTxt').on('click',function(){
    $('.planWeekChoose').toggleClass('planWeekChooseActive');
   });
   $('.planMonth').on('click',function(){
    $('.planMonthChooseScroll').toggleClass('planMonthChooseScrollActive');
   });
   $('.planMoonthChooseTxt').on('click',function(){
    $('.planMonthChooseScroll').toggleClass('planMonthChooseScrollActive');
   });
});