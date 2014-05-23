(function($){
	$.widget("dsa.addcontrols", {
		options : {
			holder : null
		},

		dropbox : function(holder){},

		facebook : function(holder){
			var hld = holder || this.options.holder;

			if(!hld) return;
			this._loadFbAPI(document, 'script', 'facebook-jssdk');
			this._loadFbControls(hld);
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
			$(holder).append("<fb:login-button scope='public_profile,email' onlogin='checkLoginState();'></fb:login-button>");
		},

		_loadIgAPI : function(){},
		_loadIgControls : function(){}
	});

	function checkLoginState(){
		alert('FB ----- you are in :D');
	}
}(jQuery));