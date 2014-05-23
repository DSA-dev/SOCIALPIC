(function($){
	var DROP_BOX_APP_KEY = "",
		FACEBOOK_APP_KEY = "",
		INSTAGRAM_APP_KEY = "";

	$.widget("dsa.addcontrols", {
		options : {
			holder : null
		},

		dropbox : function(holder){
			var hld = holder || this.options.holder;

			if(!hld) return;
			this._loadDbAPI(document, 'script', 'dropboxjs', DROP_BOX_APP_KEY);
			this._loadDbControls(hld);
		},

		facebook : function(holder){
			var hld = holder || this.options.holder;

			if(!hld) return;
			this._loadFbAPI(document, 'script', 'facebook-jssdk');
			this._loadFbControls(hld);
		},

		instagram : function(holder){},

		_disable : function(elm){},
		_enable : function(elm){},	

		_loadDbAPI : function(doc, tag, id){
			var js;

			if(doc.getElementById(id)) return;
			$("<" + tag + ">").attr({
				'id' : id,
				'src' : 'https://www.dropbox.com/static/api/2/dropins.js',
				'data-app-key' : appKey
			}).insertBefore($(tag)[0]);
		},

		_loadDbControls : function(holder){
			var options = {
					success : function(){},
					cancel : function(){},
					linkType : 'direct',
					multiselect : false,
					extensions : ['.pdf', '.doc', '.docx', '.img']
				},
				btn = Dropbox.createChooseBtton(options);

			$(holder).append(btn);
		},

		_loadFbAPI : function(doc, tag, id) {
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