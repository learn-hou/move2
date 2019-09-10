$(function () {
  $(document).ready(function () {
    //$('.show-content-btn').triggerHandler("click");
    var showflag = $(".article .process:first-child");
    var showArea=showflag.find('.show-area-main');
    showArea.slideDown();
    showflag.find('header').show();
    showflag.find('.processFirst').hide();
    //$(".processFirst").hide();
    // showflag.find('.processFirst').remove();
    // var str = '  <header>\n' +
    //   '      <div class="goback"></div>\n' +
    //   '      <h3>移动维优单元</h3>\n' +
    //   '      <div class="dataTime">2019-09</div>\n' +
    //   '      </header>';
    // showflag.find('.show-area-main').before(str);
  });
  /*左侧进度条主要内容的显示隐藏——通过标题按钮控制*/
  $('body').on('click','.show-content-btn', function () {
    $(".thirdSection p:first-child").addClass('main-left-select-active');
    var  MoveTop= $(this).closest('.process');
    $(".article .process:nth-of-type(1)").before(MoveTop);
    // var  firstChange=$(".article .process:first-child");
    // firstChange.after($(".article .process:last-child"));
    /*推下去的元素伸缩*/
    var secondChange=$(".article .process:nth-of-type(2)");
    var showChange=secondChange.find('.show-area-main');
    secondChange.find('.processFirst').show();
    secondChange.find('header').hide();
    showChange.slideUp();
    /*位于第一个显示展开*/
    var showflag = $(".article .process:first-child");
    var showArea=showflag.find('.show-area-main');
    showArea.slideDown();
    showflag.find('header').show();
    showflag.find('.processFirst').hide();
    // var firstChange = $(".article .process:first-child");
    // var  FirstHtml=$(this).closest('.processLogo').prev().html();
    // var showArea=firstChange.find('.show-area-main');
    // showArea.slideDown();
    // firstChange.find('.processFirst').remove();
    // var str = '  <header>\n' +
    //   '      <div class="goback"></div>\n' +
    //   '      <h3>'+FirstHtml+'</h3>\n' +
    //   '      <div class="dataTime">2019-09</div>\n' +
    //   '      </header>';
    // firstChange.find('.show-area-main').before(str);

  });

  // /*点击伸缩顶部*/
  // $("body").on("click", '.goback', function () {
  //   var showArea = $(this).closest('header').next();
  //   showArea.slideUp();
  //   $(this).closest('header').remove();
  //    var str='<div class="processFirst">\n' +
  //      '        <img class="Img" src="images/goverment.png">\n' +
  //      '        <div class="processText">政府响应单元</div>\n' +
  //      '        <div class="processLogo"><i class="show-area-title-hide show-content-btn"></i></div>\n' +
  //      '      </div>';
  //   showArea.before(str);
  // })
  // /*左边顶部四个按钮切换*/
  $('body').on('click','.left-select-btn',function () {
    if($(this).hasClass('main-left-select-active')) {	//如果含有点击中的类，则return
      return;
    } else {
      $('.left-select-btn').removeClass('main-left-select-active');	//所有按钮移除该类名
      $(this).addClass('main-left-select-active');					//给当前点击元素添加该类名
      // if($(this).index()=='0'){
      //   basicInfo(conTent1);
      // }else if($(this).index()=='1'){
      //   coopMeth(info1);
      // }else if($(this).index()=='2'){
      //   sourceData();
      // }
    }
  });

});
