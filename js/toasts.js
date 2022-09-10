/*
author : @Farman Saleh
date   : September 10/2022
github : github.com/farmansaleh
Note   : Call this function when you dispaly notification or toasts for message.
		 As a parameter you have to pass Toasts title, Message/Description, Color
		 eg. openToastMessage('Facebook','Your post uploaded successfully','success')
**/

function openToastMessage(messageTitle,messageContent,messageType){
    $.toast({
	    heading: messageTitle,//'Screen Name/Title', // Optional heading to be shown on the toast
	    text: messageContent,//Message or Description, what you want to show
	    icon: messageType,//'info', // Type of toast icon(color)
	    showHideTransition: 'fade', // fade, slide or plain
	    allowToastClose: true, // Boolean value true or false
	    hideAfter: 10000, // after completed this time toasts will be hide
	    stack: 10, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
	    position: 'top-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
	    
	    textAlign: 'left',  // Text alignment i.e. left, right or center
	    loader: true,  // Whether to show loader or not. True by default
	    loaderBg: '#6777ef',  // Background color of the toast loader
	    beforeShow: function () {}, // will be triggered before the toast is shown
	    afterShown: function () {}, // will be triggered after the toast has been shown
	    beforeHide: function () {}, // will be triggered before the toast gets hidden
	    afterHidden: function () {}  // will be triggered after the toast has been hidden
	});
    
    
}