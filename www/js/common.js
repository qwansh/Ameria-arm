
 
$(function() {
	
	
	$('a[href^="#"]').click(function () { 
     elementClick = $(this).attr("href");

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 90;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
		
		 
	});

	
	
    
	

 

  function goToByToggle(id) {
        // Remove "link" from the ID
        id = id.replace("Link", "");
        // Scroll
             $("#" + id).toggle( "slow" );
    }


    $( "#historic .year" ).click(function() {
        // Call the scroll function
        goToByToggle($(this).attr("id"));
    });
  


       $("img.lazy").lazyload({ effect : "fadeIn" });
	   
	   
	  
			  

});





