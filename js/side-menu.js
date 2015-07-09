$(document).ready(function() {

	
	$('.side-menu-tab').on('click', function(e){
		menuExpand();
	});
	
	$('.side-menu-tab').on('mouseenter mouseleave', function(e){
		menuPeek();
	});
	
});

function menuPeek(){
	
	var sideMenuTab   = $('.side-menu-tab');
	var sideMenu      = $('.side-menu-expand');
	var sideMenuWidth = $('.side-menu-expand').width();
	
	sideMenu.toggleClass('peek');
	
	console.log("I ran to iraq");
	
	if ( sideMenu.hasClass('open') ) {
			return;
		}
		else {	
			if ( sideMenu.hasClass('peek') ) {
				sideMenu.animate({
					right: -sideMenuWidth + 20
				})
				
				sideMenuTab.animate({
					right: + 20
				})
				
			}
			else {
				sideMenu.animate({
					right: -sideMenuWidth
				})
				sideMenuTab.animate({
					right: "0px"
				})
			}
		}
};

function menuExpand() {
	
	// create menu variables
	var sideMenuTab   = $('.side-menu-tab');
	var sideMenu      = $('.side-menu-expand');
	var sideMenuWidth = $('.side-menu-expand').width();
	
	// toggle the open class
	sideMenu.toggleClass('open');
	
	if ( sideMenu.hasClass('peek') ){
		
		// slide menu and the tab out
		if (sideMenu.hasClass('open')) {
			
			sideMenuTab.animate({ right: sideMenuWidth });
			sideMenu.animate({ right: '0px' });
			
		}
		else {
		
			sideMenu.animate({ right: -sideMenuWidth });
			sideMenuTab.animate({ right: '0px' });
			
		}
	}
};