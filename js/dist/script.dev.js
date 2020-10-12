"use strict";

$(document).ready(function () {
  var root = document.querySelector(':root');
  var rootStyles = getComputedStyle(root);
  var primaryColor = rootStyles.getPropertyValue('--primaryColor');
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  /* ТЕМНАЯ ТЕМА */

  /* root.style.setProperty('--primaryColor', '#022B3A');
   root.style.setProperty('--colBg', '#1D5864');
   root.style.setProperty('--colTxtColor', '#EF8A17');
   root.style.setProperty('--colHoverBg', '#022B3A');
   root.style.setProperty('--chooseBg', '#C8C8C8'); /* при добавление фон исчезает и по нажатию не исчезает(через раз) BOX
   root.style.setProperty('--bgcLight', '#1D5864');
   root.style.setProperty('--orange', '#C67E2C');
   */

  $('.menuMenu').on('click', function () {
    //$('.menuName').toggleClass('.menuNameActive');
    $('.menu').toggleClass('menuActive');
    $('.menuSecond').toggleClass('menuSecondActive');
    $('.menuTitle').toggleClass('menuTitleActive');
    $('.menuName').toggleClass('menuNameActive');
    $('.menuCol').toggleClass('menuFirstCol');
  });
  $('.contentPriority').on('click', function () {
    $('.priorityBox').toggleClass('priorityBoxActive');
  });
  $('.priorityYellow').on('click', function () {
    $('.priorityBox').toggleClass('priorityBoxActive');
  });
  $('.priorityRed').on('click', function () {
    $('.priorityBox').toggleClass('priorityBoxActive');
  });
  $('.priorityRedText').on('click', function () {
    $('.priorityBox').toggleClass('priorityBoxActive');
  });
  $('.priorityYellowText').on('click', function () {
    $('.priorityBox').toggleClass('priorityBoxActive');
  });
  $('.planWeek').on('click', function () {
    $('.planWeekChoose').toggleClass('planWeekChooseActive');
  });
  $('.planWeekChooseTxt').on('click', function () {
    $('.planWeekChoose').toggleClass('planWeekChooseActive');
  });
  $('.planMonth').on('click', function () {
    $('.planMonthChooseScroll').toggleClass('planMonthChooseScrollActive');
  });
  $('.planMoonthChooseTxt').on('click', function () {
    $('.planMonthChooseScroll').toggleClass('planMonthChooseScrollActive');
  });
  $('.contentInput').on('mouseEnter', function () {
    $('.contentRemind').css('color', '#EF8A17');
  });
  $('.contentInput').on('mouseLeave', function () {
    $('.contentRemind').css('color', 'rgba(0, 0, 0, 0.73);');
  });
  $('.settingDark').on('click', function () {});
  $('.settingDark').on('click', function () {
    alert('темная тема активна');
  });

  if (screenWidth <= 578) {
    var YA = document.getElementsByClassName('loginBtn');
    MobLogHref = "trash.html";
    document.getElementsByClassName('loginBtn').innerHTML = MobLogHref;
    alert('asd');
  }
});