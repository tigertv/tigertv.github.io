
var i18n = (function () {
	var currentLang = 'en';
	var dictionary = [];

	return {
		lang : function(lang){
			currentLang = lang;	
		},

		translate : function(msid) {
			var translation = dictionary[currentLang][msid];

			if(!translation) {
				translation = dictionary["en"][msid];
			}

			if(!translation) {
				translation = "";
			}

			return translation;
		},

		add : function(obj) {
			let key = Object.keys(obj)[0];
			dictionary[key] = obj[key];
		},
	
	};
})();

function _(msid) {
	return i18n.translate(msid);	
}

function lang(lang) {
	i18n.lang(lang);	
}


