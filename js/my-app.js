// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true,
    swipePanel: 'right'
});

// Export selectors engine
var $$ = Dom7;

$$('.open-right-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('right');
    });
 
$$('.panel-close').on('click', function (e) {
    myApp.closePanel();
});

$$('.adm_panel').on('click', function () {
    myApp.alert('Данный пункт только для администрации!');
});

$$('.menu_items_zakaz').on('click', function () {
    window.location='zakaz.html';
});



// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});