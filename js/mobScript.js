$(document).ready(function(){ 
    $('.mobContentPriority').on('click', function(){
        $('.mobPriorityBox').toggleClass('mobPriorityBoxActive ');
    });
    $('.mobPriorityRed').on('click', function(){
        $('.mobPriorityBox').toggleClass('mobPriorityBoxActive ');
    });
    $('.mobPriorityYellow').on('click', function(){
        $('.mobPriorityBox').toggleClass('mobPriorityBoxActive ');
    });

    /* Burger MENU*/

    var x = document.getElementById("contain");

    x.addEventListener("click", myFunction);

    function myFunction() { 
     x.classList.toggle("change");
    }
    $('#contain').on('click', function(){
        $('.mobMenuHref').toggleClass('mobMenuHrefActive');
    });

    /*WEEK */
    $('.mobPlanWeek').on('click', function(){
        $('.mobPlanWeekChoose').toggleClass('mobPlanWeekChooseActive');
    });
    $('.mobPlanWeekChooseTxt').on('click', function(){
        $('.mobPlanWeekChoose').toggleClass('mobPlanWeekChooseActive');
    });
    
    /*MONTH*/ 
    $('.mobPlanMonth').on('click', function(){
        $('.mobMonthChooseScroll').toggleClass('mobMonthChooseScrollActive');
    });
    $('.mobMoonthChooseTxt').on('click', function(){
        $('.mobMonthChooseScroll').toggleClass('mobMonthChooseScrollActive');
    });
 });