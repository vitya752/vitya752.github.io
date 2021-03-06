$(function() {

	$("header .request a, .button_wrap .button, .window_button a").click(function(){
		$("html, body").animate(
		{
			scrollTop: $("footer").offset().top
		},"slow");
		return false;
	});

	$('.banners .rombs').hover(function(){
		$(this).parent().find('.number, .text').css('opacity', '1');
		$(this).find('.shadow').css('box-shadow', '0px 0px 50px 15px rgba(79,82,87,1), inset 0px 0px 50px 15px rgba(79,82,87,.7)');
	}, function(){
		$(this).parent().find('.number, .text').css('opacity', '0');
		$(this).find('.shadow').css('box-shadow', '0px 0px 50px 10px rgba(79,82,87,.7), inset 0px 0px 50px 10px rgba(79,82,87,.4)');
	});

	// Главный слайдер, с ромбиками
	$('.stages_section .slider').slick({
		dots: true,
		slideToShow: 1,
		slideToScroll: 1,
		lazyLoad: 'ondemand',
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		cssEase: 'linear',
		speed: 1000,
		fade: true,
		adaptiveHeight: true,
		customPaging: function(slider, i) {
			var tittle = $(slider.$slides[i]).data('number');
			/*
			Возвращаем обертку индекса, обертки ромбов и тени
			<div class="wrap_dot">
				<div class="number">1</div>
				<div class="rombs">
					<div class="romb">
					</div>
					<div class="in_romb">
					</div>
					<div class="shadow">
					</div>
				</div>
			</div>
			*/
			return '<div class="wrap_dot"><div class="number">' + tittle + '</div><div class="rombs"><div class="romb"></div><div class="in_romb"></div><div class="shadow"></div></div></div>';
		},
	});
	// Главный слайдер, с ромбиками

	// Пользовательская настройка цвета текста под определенный слайд и смена контента
	var colorHeader= $('.stages_section .slick-active').data('color-header');
	var colorDots= $('.stages_section .slick-active').data('color-dots');
	var colorContent= $('.stages_section .slick-active').data('color-content');
	var slideContent= $('.stages_section .slick-active').data('content');

	$('.stages_section .section_header').css('color', colorHeader);
	$('.stages_section .wrap_dot .number').css('color', colorDots);
	$('.stages_section .section_header p').css('color', colorContent);
	$('.stages_section .section_header p').html(slideContent);

	$('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){

		var colorHeader= $('.stages_section .slick-active').data('color-header');
		var colorDots= $('.stages_section .slick-active').data('color-dots');
		var colorContent= $('.stages_section .slick-active').data('color-content');
		var slideContent= $('.stages_section .slick-active').data('content');

		$('.stages_section .section_header').css('color', colorHeader);
		$('.stages_section .wrap_dot .number').css('color', colorDots);
		$('.stages_section .section_header p').css('color', colorContent);
		$('.stages_section .section_header p').html(slideContent);

	});
	// Пользовательская настройка цвета текста под определенный слайд и смена контента

	// Переключатель по категориям
	$('.categories_content_tabs').css('display', 'none'); // Скрываем все блоки, что находятся под категориями
	$('.categories_content_tabs').first().css('display', 'block'); // Открываем блок первый блок с обьектами
	$('.categories_tabs > ul > li').first().addClass('active'); // Первой категории присваиваем активный класс

	$('.categories_tabs > ul > li').click(function(){ // При клике на категорию

		if($(this).hasClass('active')) return false; // Проверяем, активна ли уже наша категория

		var category = $(this).data('category'); // Берем название категории из атрибута data-category
		
		$('.categories_tabs > ul > li').removeClass('active'); // Удаляем всем активный класс
		$(this).addClass('active'); // Призваиваем активный класс категории, на которую нажали

		$('.categories_content_tabs').css('display', 'none'); // Скрываем все блоки, что находятся под категориями
		$('.' + category).css('display','block'); // Открываем блок с соответствующей категорией 

	});
	// Переключатель по категориям

	// Переключатель по проектам

	$('.objects_tabs li').first().addClass('active'); // Первому обьекту присваиваем активный класс
	$('.object_content').css('display', 'none'); // Скрываем все блоки контента обьекта
	$('.object_content').first().css('display', 'block'); // Открываем первый блок контента обьекта

	$(".objects_tabs li").click(function(){ // При клике

		if($(this).hasClass('active')) return false; // Проверяем, активна ли уже наш оъект

		var category = $('.categories_tabs > ul > li.active').data('category'); // Берем название активной категории для селектора

		$('.' + category + " .objects_tabs li").removeClass("active").eq($(this).index()).addClass("active"); // Удаляем всем обьектам активный класс, 
		//и присваиваем активный класс обьекту, на который нажали
		$('.' + category + " .object_content").hide().eq($(this).index()).fadeIn();  //Прячем весь контент и открываем нужный
		var idSlider = $('.' + category + " .object_content").eq($(this).index()).find('.slider_project').attr('id'); // Берем id слайдера, который нужно обновить
		$("#" + idSlider).slick('refresh'); // Обновляем слайдер из-за display : none;

	}).eq(0).addClass("active");


	$('.categories_tabs > ul > li > .toggle_list li').first().addClass('active'); // Первому обьекту присваиваем активный класс
	$(".categories_tabs > ul > li > .toggle_list li").click(function(){

		var category = $('.categories_tabs > ul > li.active').data('category'); // Берем название активной категории для селектора

		$('.categories_tabs > ul > li.active > .toggle_list li').removeClass("active").eq($(this).index()).addClass("active");
		$('.' + category + " .object_content").hide().eq($(this).index()).fadeIn();  //Прячем весь контент и открываем нужный
		var idSlider = $('.' + category + " .object_content").eq($(this).index()).find('.slider_project').attr('id'); // Берем id слайдера, который нужно обновить
		$("#" + idSlider).slick('refresh'); // Обновляем слайдер из-за display : none;

	}).eq(0).addClass("active");

	// Переключатель по проектам

	$('.slider_project').each(function(index){ // перебор по всем блокам с классом slider_project
		$(this).attr('id', 'slider_project-' + index); // Каждому слайдера присваиваем индивидуальный id
		$('#slider_project-' + index).slick({ // Инициализация по id
			dots: true,
			speed: 500,
			infinite: true,
			slidesToShow: 1,
			cssEase: 'linear',
			lazyLoad: 'ondemand',
			adaptiveHeight: true,
			autoplaySpeed: 4000,
			lazyLoad: 'progressive',
			prevArrow: '<button type="button" class="prev"><img src="img/icons/prev.png" alt="Предыдущий" /></button>',
			nextArrow: '<button type="button" class="next"><img src="img/icons/next.png" alt="Следующий" /></button>',
		});
		
	});

	$('.team_section .tabs_content').slick({
		dots: true,
		fade: true,
		cssEase: 'linear',
		appendDots: '.tabs',
		lazyLoad: 'ondemand',
		dotsClass: 'tabs_list',
		prevArrow: '<button type="button" class="prev"><img src="img/icons/prev_gray.png" alt="Предыдущий" /></button>',
		nextArrow: '<button type="button" class="next"><img src="img/icons/next_gray.png" alt="Следующий" /></button>',
	});

	$('.team_section .tabs_content .slide').each(function(i){ // Перебираем все слайды

		var slide = $(this); // Текущий слайд
		var name = slide.find('h3').data('name'); // Имя указанное в слайде
		var role = slide.find('span').data('role'); // Должность указанное в слайде
		var avatar = slide.find('.img_wrap img').attr('src'); // Изображение из слайда
		$('.team_section .tabs_list li').eq($(this).index()).html('<div class="img_wrap"><img src="' + avatar + '" alt="' + name + '"></div><div class="name_role"><h4>' + name + '</h4><span>' + role + '</span></div>');

		// В .team_section .tabs_list li с индексом текущего слайда добавляем разметку, всё, как в верстке

	});

	// $('input[name=phone], input[name=phone_quest]').mask('+9 (999) 999-99-99', {placeholder: "+_ (___) ___-___-__ "});	
	$('.phone, .phone_number a').mask('+9 (999) 999-99-99');

	$('footer .projects .popup').magnificPopup({
		type: 'image',
		gallery: { enabled: true }
	});

});
