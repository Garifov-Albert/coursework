$(document).ready(function(){ 
    const root = document.querySelector(':root');
    const rootStyles = getComputedStyle(root);
    const primaryColor = rootStyles.getPropertyValue('--primaryColor');
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    /* ТЕМНАЯ ТЕМА */
    root.style.setProperty('--primaryColor', '#022B3A');
    root.style.setProperty('--colBg', '#1D5864');
    root.style.setProperty('--colTxtColor', '#EF8A17');
    root.style.setProperty('--colHoverBg', '#022B3A');
    root.style.setProperty('--chooseBg', '#C8C8C8'); /* при добавление фон исчезает и по нажатию не исчезает(через раз) BOX*/
    root.style.setProperty('--bgcLight', '#1D5864');
    root.style.setProperty('--orange', '#C67E2C');
    
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
   $('.contentInput').on('mouseEnter',function(){
        $('.contentRemind').css('color', '#EF8A17')
    });
    $('.contentInput').on('mouseLeave',function(){
        $('.contentRemind').css('color', 'rgba(0, 0, 0, 0.73);')
   });
   $('.settingDark').on('click', function(){   
   });
   $('.settingDark').on('click', function(){
    alert('темная тема активна');
    });
    
    /* Переключение ссылок для мобилки*/
    if (screenWidth <= 578) {
        $('.loginBtn').attr('href', 'mob/mobContent.html');
        $('.logrRegistrBtn').attr('href','mob/mobRegistration.html');
    } 
    /*Раздел */
    $('.sectionAdd').on('click', function(){
        $('.contentPrimaryBg').css('width', "40%").css('transition', '1.1s');
        $('.contentLightBg').css('width', "33%").css('transition', '1.1s');
        $('.sectionGrid').css('width', "30%").css('transition', '1.1s');
        $('.sectionCol').css('width', "90%").css('transition', '1.1s');
        $('.sectionAdd').css('margin-left','25%').css('transition', '1.1s');
        $('.contentAddSection').css('display', 'block');
    });
    $('.contentAddSave').on('click', function() {
        $('.contentAddSection').css('display', 'none');
        $('.contentPrimaryBg').css('width', "1298px").css('transition', '1.1s');
        $('.contentLightBg').css('width', "1178px").css('transition', '1.1s');
        $('.sectionGrid').css('width', "1100px").css('transition', '1.1s');
        $('.sectionCol').css('width', "1000px").css('transition', '1.1s');
        $('.sectionAdd').css('margin-left','1080px').css('transition', '1.1s');
    });
    $('.sectionComment').on('click', function(){
        $('.contentPrimaryBg').css('width', "40%").css('transition', '1.1s');
        $('.contentLightBg').css('width', "33%").css('transition', '1.1s');
        $('.sectionGrid').css('width', "30%").css('transition', '1.1s');
        $('.sectionCol').css('width', "90%").css('transition', '1.1s');
        $('.sectionAdd').css('margin-left','25%').css('transition', '1.1s');
        $('.contentShowComment').css('display', 'block');
    });
    $('.commentHide').on('click', function(){
        $('.contentShowComment').css('display', 'none');
        $('.contentPrimaryBg').css('width', "1298px").css('transition', '1.1s');
        $('.contentLightBg').css('width', "1178px").css('transition', '1.1s');
        $('.sectionGrid').css('width', "1100px").css('transition', '1.1s');
        $('.sectionCol').css('width', "1000px").css('transition', '1.1s');
        $('.sectionAdd').css('margin-left','1080px').css('transition', '1.1s');
    });
});  
