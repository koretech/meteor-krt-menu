var client = 'client', server = 'server', both = ['client', 'server'];

Package.describe({
	name: 'krt:menu',
	summary: 'Koretech Menu Package',
	version: '0.1.1',
	git: 'https://github.com/koretech/meteor-krt-menu.git'
});

Package.onUse(function(api){

	api.versionsFrom('METEOR@1.0');

	api.use([
		'krt:core@0.1.0',
		'templating',
		'session',
		'underscore',
		'tracker',
		'iron:router@1.0.3'
	], both);

	api.imply([
		'iron:router',
		'krt:core'
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
