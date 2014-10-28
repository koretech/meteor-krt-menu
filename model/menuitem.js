StaticItem = function(params) {
	return new MenuItem(_.extend({}, params, {type:'static'}));
};
LinkItem = function(params) {
	return new MenuItem(_.extend({}, params, {type:'link'}));
};
DropdownItem = function(params) {
	return new MenuItem(_.extend({}, params, {type:'dropdown'}));
};

/**
 * The MenuItem class
 * @param params
 * @returns {MenuItem}
 * @constructor
 */
MenuItem = function(params) {
	if (this instanceof MenuItem) {
		this.params = params;
	} else {
		return new MenuItem(params);
	}

};

/**
 * Returns the item's type
 * @returns {string}
 */
MenuItem.prototype.type = function() {
	switch (this.params.type) {
		case 'dropdown': return 'ktMenuDropdownItem'; break;
		case 'link': return 'ktMenuLinkItem'; break;
		default: return 'ktMenuStaticItem'; break;
	}
};

/**
 * Return the item's text or blank if not set
 * @returns {string}
 */
MenuItem.prototype.text = function() {
	if (typeof this.params.text === 'function')	{
		return this.params.text();
	}
	return this.params.text;
};

/**
 * Returns the item's icon as a string of CSS class names
 * @returns {string}
 */
MenuItem.prototype.icon = function() {
	if (typeof this.params.icon === 'function') {
		return this.params.icon();
	}
	return this.params.icon;
};

/**
 * Returns the item's extra classes.
 * If the item is a link will return 'active' appended if the current route matches the link
 * @returns {string}
 */
MenuItem.prototype.classes = function() {
	var classes;
	if (typeof this.params.classes === 'function') {
		classes = this.params.classes();
	} else {
		classes = this.params.classes;
	}
	if (this.params.type === 'link' &&
		Router.current() &&
		this.params.link === Router.current().route.getName()) {
		return classes + ' active';
	}
	return classes;
};

/**
 * Returns the item's link
 * @returns {string}
 */
MenuItem.prototype.link = function() {
	return this.params.link;
};

MenuItem.prototype.childMenu = function() {
	return this.params.childMenu;
};

// Namespace defines
KT.Menu.MenuItem = MenuItem;
KT.Menu.StaticItem = StaticItem;
KT.Menu.LinkItem = LinkItem;
KT.Menu.DropdownItem = DropdownItem;
