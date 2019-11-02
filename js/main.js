/* ナビゲーションバーのからスムーズにスクロールしながら対象位置に移動 */

// li.dropdown要素配下のa要素は対象から外しておく
$(".navbar a").not(".dropdown a").click(function () {
	var destination = $(this).attr("href");

	$("html, body").animate({
		scrollTop: $(destination).offset().top,
	}, 400);

	// ハンバーガーメニューが開いている場合は閉じる
	$(".navbar-toggle:visible").click();

	// 本来のクリックイベントは処理しない
	return false;
});

/* フォームのsubmitを無効にする */

$(document).ready(function() {
  $("#submit_button").submit(function() {
      return false;
  });
});

/* jquery.vgrid.js の呼び出し */
$(function () {
	$('.grid-items ul').vgrid({
		useLoadImageEvent:true,
		fadeIn: {
			time: 450,
			delay: 60
		}
	});
});

/* luminous */

//var luminousTrigger = document.querySelectorAll('.luminous');
//for (var i = 0; i < luminousTrigger.length; i++) {
//	var elem = luminousTrigger[i];
//	new Luminous(elem);
//}

/* accordion menu */

$(function() {
	var flg = 0;
	$('.navAccordion > dd').hide();
	$('.navAccordion > dt').on('click keyaction.enter', function() {
		if(flg) {
			return false;
		}
		flg = 1;
		$(this).toggleClass('open');
		$(this).next().slideToggle(function() {
			flg = 0;
		});
		return false;
	});
	// フォーカス時にenterキーを押すとactiveイベントが発火するようにする
	// これにより、Tabキーでの移動とenterキーで操作が可能となる
	$('navAccordion > dt').on('keydown', function(event) {
		var keyCode = event.keyCode || e.which;
		if (keyCode === 13) {
			$(this).trigger('keyaction.enter');
		}
	});
});

/* 現在位置を表すナビゲーションの li aの色を変える */

$(function() {
	$('.nav-link').on('click', function() {
		$('.nav-link').removeClass('ahora');
		$(this).addClass('ahora');
	});
	$('#logo').on('click', function() {
		$('.nav-link').removeClass('ahora');
	})
});

/* hover時、SNSとGithubロゴのopacity調整 */
$(function() {
	$('.sns_logos').on('mouseover', function() {
		$('.sns_logo_mono').css('opacity', 1);	
	});
	$('.sns_logos').on('mouseout', function() {
		$('.sns_logo_mono').css('opacity', 0.8);	
	});
});

/* 767px 以下でのDrawer Menu */
//$(function() {
//	$('#navDrawrBtn').on('click', function() {
//		$('#nav-bar ul').css('top', '60px');	
//	});
//});

$(function () {
//	var $mainNav = $('.nav-menu');
//	var $navBtn = $('navDrawrBtn button');
//	var $speed = 300;
//	var $mainNavWidth = 120;
	$('.fa-window-close').addClass('close-menu');
	$('#navDrawrBtn .menu').addClass('close-menu');
	
	$('#navDrawrBtn').on('click', function () {
		drawerFunc();
	});

	function drawerFunc() {
		if ($('#nav-bar ul').hasClass('menuOpen')) {
//			$('#navDrawrBtn').text('Menu');
			$('#nav-bar ul').removeClass('menuOpen');
			$('.fa-window-close').addClass('close-menu');
			$('#navDrawrBtn .menu').addClass('close-menu');
			//			$mainNav.animate({right: -1*$mainNavWidth}, $speed, 'swing');
		} else {
			$('#nav-bar ul').addClass('menuOpen');
			$('.fa-window-close').removeClass('close-menu');
			$('#navDrawrBtn .menu').removeClass('close-menu');
//			$('#navDrawrBtn').text('close');
		}
	}
});