$(document).ready(function(){
	var calendarListClicked=false;
	var id=($.mobile.activePage.attr('id'));
	if(id=="homePage"){
		setTimeout(function(){
        $('#splashScreen').fadeIn(100);
    }, 10);
    setTimeout(function(){
        $('#splashScreen').fadeOut(300);
    }, 1000);

	}
	$('#calendarButton').css({'display':'none'});
	$(document).on("click","ul a", function(){
    $(this).children("div:last").toggle(300);
	});

	$('.patientsList h2').click(function(){
		/*if($(this).hasClass('ui-collapsible-heading-collapsed')){
			
			var $newButton = $("<a href='myPatients' data-role='button' data-inline='true' id='selectButton'>");
			$(this).parent().append($newButton);
		}
		else{
			$(this).parent().find('a').remove();
		}*/
		var currentColor=$(this).css('backgroundColor');
		var top=$(this).css('top')
		if(currentColor==="rgb(84, 129, 118)"){	
			$(this).removeClass('unSelectPatient').addClass('selectPatient');
			$(this).find('a').removeClass('unSelectPatient').addClass('selectPatient');
		}
		else if(currentColor==="rgb(34, 87, 74)"){
			$(this).removeClass('selectPatient').addClass('unSelectPatient');
			$(this).find('a').removeClass('selectPatient').addClass('unSelectPatient');
		}
		
	});

	$('#calendarList').click(function(){
		if(calendarListClicked==false){
			$(this).css({'height':'auto','backgroundColor':'#333'});
			var width=$('.fa-calendar').width();
			$(this).find('i').css({'margin-top':'-100%','margin-left':'-100%','left':width,'position':'relative'});
			$(this).find('p').css({'margin-top':'1%','margin-left':'-100%','left':width,'display':'none'});
			$('#todoTable').css({'display':'table'});
			$('#calendarButton').css({'display':'block'});
			calendarListClicked=true;
		}
		else if(calendarListClicked==true){
			$(this).css({'height':'6em','backgroundColor':''});
			var width=$('.fa-calendar').width();
			$(this).find('i').css({'margin-top':'-50%','left':'50%','position':'relative'});
			$(this).find('p').css({'left':'50%','margin-top':'1%','display':'block'});
			$('#todoTable').css({'display':'none'});
			$('#calendarButton').css({'display':'none'});
			calendarListClicked=false;
		}
		
		
	});

	$('.navArrow').click(function(){
		
	});

	$('#nextArrow').click(function(){
		var size=$('#selectedList li');
		// alert("size is" +size.length);
		$('#selectedList li').each(function(index){
			if($(this).is(':visible')){
				if((index+1)<size.length){
					$(this).css({'display':'none'});
					$(this).next().css({'display':'initial'});
					return false;
				}
				
			}
		});
		
	});

	$('#prevArrow').click(function(){
		var size=$('#selectedList li');
		// alert("size is" +size.length);
		$('#selectedList li').each(function(index){
			if($(this).is(':visible')){
				if(index>0){
					$(this).css({'display':'none'});
					$(this).prev().css({'display':'initial'});
					return false;
				}
				
			}
		});
		
	});



	
	$(document).on('swipeleft', '.main-page', function(event){    
    if(event.handled !== true) // This will prevent event triggering more then once
    {    
        var nextpage = $.mobile.activePage.next('[data-role="page"]');
        // swipe using id of next page if exists
        if (nextpage.length > 0) {
            $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
        }
        event.handled = true;
    }
    return false;         
});

$(document).on('swiperight', '.ui-page', function(event){     
    if(event.handled !== true) // This will prevent event triggering more then once
    {      
        var prevpage = $(this).prev('[data-role="page"]');
        if (prevpage.length > 0) {
            $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
        }
        event.handled = true;
    }
    return false;            
});

});