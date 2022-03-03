(function(app) { 
	'use strict'; 
	
    var Scrolling = function() {};
    

	Scrolling.prototype.init = function() {
        var _self = this;
    };

	
    
    app.Scrolling = Scrolling;

    app.ready(function () {
        console.log('Scrolling Init')
        Scrolling.prototype.init()
    })

    app.onLoad(function(){

    })


})(window.app);