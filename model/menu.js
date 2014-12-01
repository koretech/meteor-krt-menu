KRT.Menu._menus = {};

/**
 * The Menu class
 * @param params
 * @returns {Menu}
 * @constructor
 */
Menu = function(params) {
	if (!(this instanceof Menu)) return new Menu(params);

	this._name = params.name || _.uniqueId('menu_');
	this._classes = params.classes || '';
	this._items = [];
	this._rightItems = [];

	// Register with namespace
	KRT.Menu._menus[this._name] = this;

	this.dep = new Tracker.Dependency;
};

/**
 * Adds a MenuItem to this menu
 * @param item
 */
Menu.prototype.addItem = function(item) {
	if (item.align() == 'right') {
		this._rightItems.push(item);
	} else {
		this._items.push(item);
	}
	this.dep.changed();
};

Menu.prototype.items = function() {
	if (Tracker.active) this.dep.depend();
	return this._items;
};

Menu.prototype.rightItems = function() {
	if (Tracker.active) this.dep.depend();
	return this._rightItems;
};

Menu.prototype.name = function() {
	return this._name;
};

Menu.prototype.classes = function() {
	if (Tracker.active) this.dep.depend();
	if (typeof this._classes === 'function')	{
		return this._classes();
	}
	return this._classes;
};

// Namespace defines
KRT.Menu.Menu = Menu;
