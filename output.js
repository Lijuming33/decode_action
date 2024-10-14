//Mon Oct 14 2024 04:48:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _0x20078f = {
  "fonts": function () {
    function _0x53d0f6() {
      var _0x3b6853 = window.innerWidth;
      if (_0x3b6853 > 961) {
        fontSize = 14;
      } else {
        fontSize = _0x3b6853 / 7.5;
      }
      document.getElementsByTagName("html")[0].style["font-size"] = fontSize + "px";
    }
    _0x53d0f6();
    window.addEventListener("resize", function () {
      _0x53d0f6();
    }, false);
  },
  "modal": function () {
    $("#menu-open").on("click", function (_0x3d06ba) {
      $("#slide-out").animate({
        "left": "0%"
      }, 300);
      $(".sidenav-overlay").css("display", "block");
      $(".sidenav-overlay").animate({
        "opacity": "1"
      }, 100);
      $("body").css("overflow", "hidden");
      $(document).one("click", function () {
        $(".sidenav-overlay").css("display", "none");
        $(".sidenav-overlay").animate({
          "opacity": "0"
        }, 100);
        $("body").css("overflow", "");
        $("#slide-out").animate({
          "left": "-80%"
        }, 100);
      });
      _0x3d06ba.stopPropagation();
    });
    $("#slide-out").on("click", function (_0x1f2ece) {
      _0x1f2ece.stopPropagation();
    });
    $("#user-open").on("click", function (_0x4edae6) {
      $("#slide-userInfo-out").animate({
        "left": "0%"
      }, 300);
      $(".sidenav-overlay").css("display", "block");
      $(".sidenav-overlay").animate({
        "opacity": "1"
      }, 100);
      $("body").css("overflow", "hidden");
      $(document).one("click", function () {
        $(".sidenav-overlay").css("display", "none");
        $(".sidenav-overlay").animate({
          "opacity": "0"
        }, 100);
        $("body").css("overflow", "");
        $("#slide-userInfo-out").animate({
          "left": "-80%"
        }, 100);
      });
      _0x4edae6.stopPropagation();
    });
    $("#slide-userInfo-out").on("click", function (_0x1baba2) {
      _0x1baba2.stopPropagation();
    });
    $("#left_close").click(function () {
      $("#slide-out").animate({
        "left": "-80%"
      }, 100);
      $(".sidenav-overlay").css("display", "none");
      $(".sidenav-overlay").animate({
        "opacity": "0"
      }, 100);
      $("body").css("overflow", "");
    });
    $("#login_btn,#login_btn").click(function () {
      $("#login").show();
      $("#vips").hide();
    });
    $(".icon-guanbi").click(function () {
      $("#login,#vips").hide();
    });
    $("#user").click(function () {
      $("#user_list").slideToggle(300);
    });
  },
  "swiper": function () {
    $.getScript(maccms.path + "/MDassets/js/swiper.min.js", function () {});
  },
  "tags": function () {
    var _0x249958 = {};
    var _0x3984d2 = $(".tag");
    var _0x3d06f1 = _0x3984d2.find("a");
    _0x3d06f1.each(function () {
      var _0x4897b7 = $(this).html();
      _0x249958[_0x4897b7] = _0x4897b7;
    });
    _0x3984d2.empty();
    for (var _0x59a94a in _0x249958) {
      _0x3984d2.append("<a class='col s4 cate-label-item cate-item-li' href='/index.php/vod/search/tag/" + _0x59a94a + ".html' >" + _0x59a94a + "</a>");
    }
    var _0x249958 = {};
    var _0x3984d2 = $(".tags");
    var _0x3d06f1 = _0x3984d2.find("a");
    _0x3d06f1.each(function () {
      var _0x59a94a = $(this).html();
      _0x249958[_0x59a94a] = _0x59a94a;
    });
    _0x3984d2.empty();
    for (var _0x59a94a in _0x249958) {
      _0x3984d2.append("<a href='/index.php/vod/search/tag/" + _0x59a94a + ".html'><li class='labelListNode'>" + _0x59a94a + "</li></a>");
    }
    var _0x249958 = {};
    var _0x3984d2 = $(".tagone");
    var _0x3d06f1 = _0x3984d2.find("a");
    _0x3d06f1.each(function () {
      var _0x59a94a = $(this).html();
      _0x249958[_0x59a94a] = _0x59a94a;
    });
    _0x3984d2.empty();
    for (var _0x59a94a in _0x249958) {
      _0x3984d2.append("<a class='category-item' href='/index.php/vod/search/tag/" + _0x59a94a + ".html' target='_blank'>" + _0x59a94a + "</a>");
    }
    var _0x249958 = {};
    var _0x3984d2 = $(".tagtwo");
    var _0x3d06f1 = _0x3984d2.find("a");
    _0x3d06f1.each(function () {
      var _0x59a94a = $(this).html();
      _0x249958[_0x59a94a] = _0x59a94a;
    });
    _0x3984d2.empty();
    for (var _0x59a94a in _0x249958) {
      _0x3984d2.append("<a class='category-item' href='/index.php/vod/search/tag/" + _0x59a94a + ".html' target='_blank'><span>" + _0x59a94a + "</span></a>");
    }
  },
  "notice": function () {
    $.fn.extend({
      "slideUper": function (_0x5d2ea0) {
        var _0x40f91e = this;
        _0x5d2ea0 = $.extend({
          "li_h": "30",
          "time": 2000,
          "movetime": 1000
        }, _0x5d2ea0);
        function _0x2d9701() {
          $("div:first", _0x40f91e).animate({
            "margin-top": -_0x5d2ea0.li_h
          }, _0x5d2ea0.movetime, function () {
            $(this).css("margin-top", 0).appendTo(".line");
          });
        }
        var _0x45c329 = setInterval(_0x2d9701, _0x5d2ea0.time);
        $(_0x40f91e).children("div").hover(function () {
          clearInterval(_0x45c329);
        }, function () {
          _0x45c329 = setInterval(_0x2d9701, _0x5d2ea0.time);
        });
      }
    });
    $(function () {
      $(".line").slideUper();
    });
  },
  "show": function () {
    $("#sort").click(function () {
      if ($("#sort").hasClass("tran")) {
        $("#sort").removeClass("tran");
        $("#sorttwo").slideUp(500);
      } else {
        $("#sort").addClass("tran");
        $("#sorttwo").slideDown(500);
        $("#tag").removeClass("tran");
        $("#tags").slideUp(500);
        $("#order").removeClass("tran");
        $("#ordertwo").slideUp(500);
      }
    });
    $("#tag").click(function () {
      if ($("#tag").hasClass("tran")) {
        $("#tag").removeClass("tran");
        $("#tags").slideUp(500);
      } else {
        $("#tag").addClass("tran");
        $("#tags").slideDown(500);
        $("#sort").removeClass("tran");
        $("#sorttwo").slideUp(500);
        $("#order").removeClass("tran");
        $("#ordertwo").slideUp(500);
      }
    });
    $("#order").click(function () {
      if ($("#order").hasClass("tran")) {
        $("#order").removeClass("tran");
        $("#ordertwo").slideUp(500);
      } else {
        $("#order").addClass("tran");
        $("#ordertwo").slideDown(500);
        $("#sort").removeClass("tran");
        $("#sorttwo").slideUp(500);
        $("#tag").removeClass("tran");
        $("#tags").slideUp(500);
      }
    });
  },
  "slide": function () {
    $(".comment-title-span").click(function () {
      var _0x383748 = $(this).index();
      $(this).addClass("active").siblings().removeClass("active");
      $(".content-comment").eq(_0x383748).hide().siblings().show();
    });
    $("#info").click(function () {
      if ($(".showInfo").hasClass("on")) {
        $(".showInfo").removeClass("on");
        $(".video-description-desc").slideToggle("500");
        $("#info").html("<span>展开</span>");
      } else {
        $(".video-description-desc").slideToggle("500");
        $(".showInfo").addClass("on");
        $("#info").html("<span>收拢</span>");
      }
    });
    $("#opens").click(function () {
      if ($(".star-info-desc").hasClass("isOpen")) {
        $(".star-info-desc").removeClass("isOpen");
        $("#opens").html("<span>展开</span>");
      } else {
        $(".star-info-desc").addClass("isOpen");
        $("#opens").html("<span>收拢</span>");
      }
    });
  },
  "gotop": function () {
    $("#gototop").hide();
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        $("#gototop").fadeIn(300);
      } else {
        $("#gototop").fadeOut(200);
      }
    });
    $("#gototop").click(function () {
      $("body,html").animate({
        "scrollTop": 0
      }, 300);
      return false;
    });
  },
  "popup": function () {
    var _0x33fd7b = sessionStorage.getItem("popup");
    if (_0x33fd7b == null) {
      $("#popup").show();
      $("#popup-close").click(function () {
        $("#popup").remove();
        sessionStorage.setItem("popup", "1");
      });
    }
  }
};
$(function () {
  _0x20078f.fonts();
  _0x20078f.modal();
  _0x20078f.swiper();
  _0x20078f.tags();
  _0x20078f.notice();
  _0x20078f.show();
  _0x20078f.slide();
  _0x20078f.gotop();
  _0x20078f.popup();
});