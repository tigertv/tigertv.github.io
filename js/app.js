class Application {
	constructor() {

	}

	_loadScript(path) {
		$.ajax({
			url: path,
			dataType: "script",
			cache: true
		}).done(function() {
			console.log( "Load was performed." );
		});
	}

	_loadScripts() {
		let lang = 'ru';
		let path = 'js/i18n/'+lang+'.js';

		//this.loadScript(path);
		//this._loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
		//this._loadScript('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js');

		let scripts = [
			//'js/i18n/i18n.js'
			'js/i18n/lang/ru.js'
			,'js/i18n/lang/en.js'
			,'js/i18n/lang/de.js'
			,'js/i18n/lang/es.js'
		];

		/*
		for(const script of scripts) {
			this._loadScript(script);
		}
		//*/

		//*
		this._loadScript('js/i18n/i18n.js');
		this._loadScript('js/i18n/lang/ru.js');
		this._loadScript('js/i18n/lang/en.js');
		this._loadScript('js/i18n/lang/de.js');
		this._loadScript('js/i18n/lang/es.js');
		//*/
	}

	_createTable(id) {
		let elem = $('<div id="'+id+'"></div>');
		$('body').append(elem);

		let langs = {
			'en': 'English',
			'ru': 'Russian',
			'de': 'German',
			'es': 'Spanish'
		};

		let tabs = new Tabs(id);

		for(const lang in langs) {
			i18n.lang(lang);
			let content = "<div class=\"resume\">" + 
				"<p>"+
				_("resume_greeting")+
				"</p>"+

				"<p>"+
				_("resume_experience")+
				"</p>"+

				"<p>"+
				_("resume_qualities")+
				"</p>"+

				"<p>"+
				_("resume_contacts_title")+
				_("resume_contacts")+
				"</p>"+

			"</div>";

			tabs.addTab(langs[lang], content);
		}

		tabs.render();
	}

	init() {
		//this._loadScripts();
	}

	run() {
		this._createTable('mytabs');
	}
}

class Tabs{
	constructor(id) {
		this.container_id = id;
		this.id = id;
		this.index = 0;
		$('#'+this.container_id).append('<ul></ul>');
	}

	addTab(title, content) {
		this.index++;
		let li = '<li><a href="#'+this.container_id+'-'+this.index+'">'+title+'</a></li>'; 
		$('#'+this.id+' ul').append(li);
		$('#'+this.id).append('<div id="'+this.id+'-'+this.index+'">'+content+'</div>');
	}

	render() {
		$('#'+this.container_id).tabs();
	}

}

///////////////////////////////////////////////////////

let app = new Application();
app.init();

$(document).ready(function() {
	app.run();
});
