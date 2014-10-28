Template.ktMenuMenu.created = function(){
	// If just name is passed lookup the menu
	if (this.data.name) this.data.menu = KT.Menu._menus[this.data.name];
};
