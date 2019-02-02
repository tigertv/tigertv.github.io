//hljs.initHighlightingOnLoad();

function TableTab (name, content) {
	this.name = name;
	this.content = content;
}

function createTable2(id, tabs) {
	$('#'+id).append('<ul class="nav nav-tabs"></ul><div class="tab-content"></div>');

	tabs.forEach(function(item, index){
		var id_item = id+'-'+index;
		var id_tab = id+'-tab-'+index;
		var content = '<li class="nav-item"><a id="'+id_tab+'" class="nav-link" data-toggle="tab" href="#'+id_item+'" role="tab" aria-controls="'+id_item+'" aria-selected="false">'+item.name+'</a></li>'; 
		$('#'+id+' ul').append(content);

		content = '<div id="'+id_item+'" class="tab-pane fade" role="tabpanel" aria-labelledby="'+id_tab+'" >'+item.content+'</div>'; 
		$('#'+id+' .tab-content').append(content);
	});

	$('#'+id+'>ul>li').first().addClass('active show');
	$('#'+id+'>div>div').first().addClass('active show');
	//$('#'+id).tabs();
}

function createTable(id, tabs) {
	$('#'+id).append('<ul></ul>');

	tabs.forEach(function(item, index){
		var content = '<li><a href="#'+id+'-'+index+'">'+item.name+'</a></li>'; 
		$('#'+id+' ul').first().append(content);
		content = '<div id="'+id+'-'+index+'">'+item.content+'</div>'; 
		$('#'+id).append(content);
	});

	$('#'+id).tabs();
}

(function() {
})();

var tabs = [];

function handler(lang) {
	console.log("handler-"+lang);

	var tab;
	switch(lang){
	case "en":	
		tab = new TableTab('English', getTabContent("en"));
		break;
	case "ru":
		tab = new TableTab('Russian', getTabContent("ru"));
		break;
	case "de":
		tab = new TableTab('German', getTabContent("de"));
		break;
	case "es":
		tab = new TableTab('Spanish', getTabContent("es"));
		break;
	}

	tabs.push(tab);

	//createTable2('bootstrap-tabs', tabs);
}

function getTabContent(language) {
	lang(language);
	var content = "<div class=\"resume\">" + 
		"<div>"+
		_("resume_greeting")+
		"</div>"+
		"<div>"+
		_("resume_experience")+
		"</div>"+

		"<div>"+
		_("resume_qualities")+
		"</div>"+

		"<div>"+
		_("resume_contacts_title")+
		_("resume_contacts")+
		"</div>"+
	"</div>";
	return content;
}

var languages = 0;

function appendTranslation(lang) {
	var elem = document.createElement("script");
	elem.src = 'js/i18n/'+lang+'.js';
	elem.type = 'text/javascript';
	//elem.lang = lang;
	document.head.appendChild(elem);
	//elem.onreadystatechange = handler;
	elem.onload = function() {
		handler(lang);
		languages++;
		if (languages === 4) {
			createTable('jqueryui-tabs', tabs);
		}
	};
}

$(document).ready(function() {

	appendTranslation("en");
	appendTranslation("ru");
	appendTranslation("de");
	appendTranslation("es");
	
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
});
