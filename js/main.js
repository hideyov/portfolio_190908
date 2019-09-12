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
//if(luminousTrigger !== null) {
//	new LuminousGallery(luminousTrigger);
//}

var luminousTrigger = document.querySelectorAll('.luminous');
for (var i = 0; i < luminousTrigger.length; i++) {
	var elem = luminousTrigger[i];
	new Luminous(elem);
}