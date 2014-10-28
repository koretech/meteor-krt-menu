var client = 'client', server = 'server', both = ['client', 'server'];

Package.describe({
	name: 'krt:menu',
	summary: 'Koretech Menu Package',
	version: '0.1.0',
	git: 'https://github.com/koretech/meteor-krt-menu.git'
});

Package.onUse(function(api){

	api.use([
		'krt-core@0.1.0',
		'templating',
		'session',
		'underscore',
		'iron:router@1.0.0-pre4'
	], both);

	api.imply([
		'iron:router@1.0.0-pre4',
		'krt-core'
	]);

	api.addFiles([
		'namespaces.js'
	], both);

	api.addFiles([
		'components/menu.html',
		'components/menu.js',
		'model/menuitem.js',
		'model/menu.js'
	], client);

});
