(function($){
	$.widget("dsa.addcontrols", {
		options : {
			holder : null
		},

		dropbox : function(holder){},

		facebook : function(holder){
			_loadFbAPI(document, 'script', 'facebook-jssdk');
			_loadFbControls(holder);
		},

		instagram : function(holder){},

		_disable : function(elm){},
		_enable : function(elm){},	

		_loadDbAPI : function(){},
		_loadDbControls : function(){},

		_loadFbAPI : function(doc, tag, id){
			var js;

			if(doc.getElementById(id)) return;
			$("<" + tag + ">").attr({
				'id' : id,
				'src' : '//connect.facebook.net/en_US/sdk.js'
			}).insertBefore($(tag)[0]);

		},

		_loadFbControls : function(holder){
			
		},

		_loadIgAPI : function(){},
		_loadIgControls : function(){}
	});
}(jQuery));