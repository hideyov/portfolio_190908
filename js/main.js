/* ナビゲーションバーのからスムーズにスクロールしながら対象位置に移動 */

// li.dropdown要素配下のa要素は対象から外しておく
$(".navbar a").not(".dropdown a").click(function () {
	var destination = $(this).attr("href");
	var target = $(destination == "#" || destination == "" ? 'html' : destination);
	
//	console.log(target);

	$("html, body").animate({
		scrollTop: $(destination).offset().top,
	}, 400);

	// ハンバーガーメニューが開いている場合は閉じる
	$(".navbar-toggle:visible").click();
	
	// targetに入っているジャンプ先オブジェクトのidを取得
	var scrollTargetId = target.attr("id");
//	console.log(scrollTargetId);
	
	// ハッシュをURLに追記
	// アニメーションより先に変な動きを入れないため、0.4秒遅らせる
	// 参考 https://qiita.com/napoan/items/22919a03ad286ca50f2c
	
	setTimeout(function() {
		location.hash = scrollTargetId;
//		return false;
	},400);

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
	$('.sns-logos').on('mouseover', function() {
		$('.sns-logo-mono').css('opacity', 1);	
	});
	$('.sns-logos').on('mouseout', function() {
		$('.sns-logo_mono').css('opacity', 0.8);	
	});
});

/* 767px 以下でのDrawer Menu */

$(function () {
	$('.fa-window-close').addClass('close-menu');
	$('#navDrawrBtn .menu').addClass('close-menu');
	
	$('#navDrawrBtn').on('click', function () {
		drawerFunc();
	});

	function drawerFunc() {
		if ($('#nav-bar ul').hasClass('open-menu')) {
			$('#nav-bar ul').removeClass('open-menu');
			$('.fa-window-close').addClass('close-menu');
			$('#navDrawrBtn .menu').addClass('close-menu');
			//			$mainNav.animate({right: -1*$mainNavWidth}, $speed, 'swing');
		} else {
			$('#nav-bar ul').addClass('open-menu');
			$('.fa-window-close').removeClass('close-menu');
			$('#navDrawrBtn .menu').removeClass('close-menu');
		}
	}
});


// 画面幅が768px未満の時には、内容を選択（click）したらメニューを非表示にする

$(function () {
	var window_width = window.innerWidth;
	$('.nav-link').on('click', function () {
		if (window_width <= 768) {
			$('#nav-bar ul').removeClass('open-menu');
			$('.fa-window-close').addClass('close-menu');
			$('#navDrawrBtn .menu').addClass('close-menu');
		}
	});
});
