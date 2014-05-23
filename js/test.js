(function($){
	$.widget("dsa.progressbar", {
		options: {
			value : 0
		},

		_create: function(){
			this.element.addClass('progressbar');
			this._update();
		},

		_update: function(){
			var progress = this.options.value + "%";
			this.element.text(progress);
		},

		_setOption: function(){

		},

		_constrain: function(value){
			if(value > 100){
				value = 100;
			}else if(value < 0){
				value = 0;
			}
			return value;
		},

		destroy: function(){},

		value: function(value){
			if(value === undefined){
				return this.options.value;
			}else {
				this.options.value = value;
				this._update();
			}
		}
	});
}(jQuery));