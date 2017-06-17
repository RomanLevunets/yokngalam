	$(document).ready(function(){
		$('#contact-form').validate({

	         rules:{

		            subject:{
		                required: true,
		                maxlength: 16,
		            },

		            email_contact:{
		                required: true,
		                email: true,
		            },

		            company:{
		                required: true,
		            },

		            your_text:{
		            	required: true,
		            },
	       		},

	         messages:{

	            subject:{
	                required: "Это поле обязательно для заполнения",
	            },

	            company:{
	                required: "Это поле обязательно для заполнения",
	            },

	            email_contact:{
	                required: "Это поле обязательно для заполнения",
	            },

	            your_text:{
	                required: "Это поле обязательно для заполнения",
	                minlength: "Минимум 10 символов"
	            },

	       },
	    });
	    $('.small-nav').click(function(){
	    	$('.header-nav ul').slideToggle('slow');
	    });
});
 