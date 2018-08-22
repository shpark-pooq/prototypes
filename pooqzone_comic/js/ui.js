$(document).ready(function() {

// totop
	$(".go-top").hide();
		$(function () {
		                 
			$(window).scroll(function () {
				if ($(this).scrollTop() > 120) {
					$('.go-top').fadeIn();
				} else {
					$('.go-top').fadeOut();
				}
			});
			$('.go-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 450);  // 탑 이동 스크롤 속도
				return false;
			});
		});
	
// vod info 
	$("#vod-info").click(function(){
		$('#vod-pop').fadeIn(150);
	});
	
// header arrow 
	$(".header-over-1depth").hover(function(){
		$('.header-nav ul.nav li a.arrow').toggleClass('on');
	});
	
// popup close
	$(".swiper-button-close, #day-close, .popup-button-close").click(function(){
		$('.popup-back').fadeOut(150);
	});
	
// tooltip close
	$(".tt-close").click(function(){
		$('.tooltip, .tooltip-pooq').fadeOut(150);
	});
	
// tooltip like
	var testEle = $(".tooltip-like");
	testEle.delay(3000).fadeOut(400);

// 약관 전체보기
	$("#more-img01").click(function(){
		$('#more-con01').slideToggle('fast');
		$('#more-img01 img').toggleClass('rota');
		$('#more-con02, #more-con03, #more-con04').slideUp('fast');
		$('#more-img02 img, #more-img03 img, #more-img04 img').removeClass('rota');
	});
	$("#more-img02").click(function(){
		$('#more-con02').slideToggle('fast');
		$('#more-img02 img').toggleClass('rota');
		$('#more-con01, #more-con03, #more-con04').slideUp('fast');
		$('#more-img01 img, #more-img03 img, #more-img04 img').removeClass('rota');
	});
	$("#more-img03").click(function(){
		$('#more-con03').slideToggle('fast');
		$('#more-img03 img').toggleClass('rota');
		$('#more-con01, #more-con02, #more-con04').slideUp('fast');
		$('#more-img01 img, #more-img02 img, #more-img04 img').removeClass('rota');
	});
	$("#more-img04").click(function(){
		$('#more-con04').slideToggle('fast');
		$('#more-img04 img').toggleClass('rota');
		$('#more-con01, #more-con02, #more-con03').slideUp('fast');
		$('#more-img01 img, #more-img02 img, #more-img03 img').removeClass('rota');
	});
	
// 성별선택
	$(".gender-man").click(function(){
		$(this).toggleClass('on');
		$('.gender-woman').removeClass('on');
	});
	$(".gender-woman").click(function(){
		$(this).toggleClass('on');
		$('.gender-man').removeClass('on');
	});
	
// 영화 이용권 구매
	$(".movie-coupon-open a").click(function(){
		$(this).toggleClass('on');
		$('.movie-coupon-open').toggleClass('on', 'ma-none');
		$('.movie-ticket').slideToggle('fast');
	});
	$(".movie-ticket .ti-arrow").click(function(){
		$(this).toggleClass('on');
		$(this).next().slideToggle('fast');
	});

// 푹존 인트로 슬라이드
	$(".side-btn").click(function(){
		$('.intro02').addClass('pz-intro02-slide');
	});
	$(".side-b").click(function(){
		$('.intro02').removeClass('pz-intro02-slide');
		$('.intro02').addClass('pz-intro01-slide');
	});

// 홈쇼핑 상품 더보기
	$(".lp-btn a").click(function(){
		$('.lp-img').css('height','100%');
	});
	
// input password line
	$('.join .input-style03').focus(function(){
		$('.join .password-line').css('opacity','1');
	}).blur(function(){
		if( !$('.join .input-style03').val() ){
			$('.join .password-line').css('opacity','0');
		}
	});
	$('.join, .input-style04, .body').focus(function(){
		$('.join .password-line').css('opacity','0');
	});

});



