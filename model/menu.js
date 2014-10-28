KRT.Menu._menus = {};

/**
 * The Menu class
 * @param params
 * @returns {Menu}
 * @constructor
 */
Menu = function(params) {
	if (this instanceof Menu) {
		this.params = params;
	} else {
		return new Menu(params);
	}

	this._name = this.params.name || _.uniqueId('menu_');
	this._items = [];

	// Register with namespace
	KRT.Menu._menus[this._name] = this;
};

/**
 * Adds a MenuItem to this menu
 * @param item
 */
Menu.prototype.addItem = function(item) {
	this._items.push(item);
};

Menu.prototype.items = function() {
	return this._items;
};

Menu.prototype.name = function() {
	return this.name;
};

Menu.prototype.classes = function() {
	return this.params.classes;
};

// Namespace defines
KRT.Menu.Menu = Menu;
