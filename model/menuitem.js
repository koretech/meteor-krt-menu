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
	if (!(this instanceof MenuItem)) return new MenuItem(params);

	this._type = params.type || 'static';
	this._text = params.text || '';
	this._tooltip = params.tooltip || '';
	this._icon = params.icon || '';
	this._classes = params.classes || '';
	this._link = params.link || '';
	this._menu = params.menu || null;
	this._visible = params.visible || true;
	this._align = params.align || 'left';
	this._hideArrowIcon = params.hideArrowIcon || false;

	this.dep = new Tracker.Dependency;
};

/**
 * Returns the item's type
 * @returns {string}
 */
MenuItem.prototype.type = function() {
	switch (this._type) {
		case 'dropdown': return 'krtMenuDropdownItem'; break;
		case 'link': return 'krtMenuLinkItem'; break;
		default: return 'krtMenuStaticItem'; break;
	}
};

/**
 * Return the item's text or blank if not set
 * @reactive
 * @returns {string}
 */
MenuItem.prototype.text = function() {
	if (Tracker.active) this.dep.depend();

	if (typeof this._text === 'function')	{
		return this._text();
	}
	return this._text;
};

MenuItem.prototype.tooltip = function() {
	if (Tracker.active) this.dep.depend();

	if (typeof this._tooltip === 'function')	{
		return this._tooltip();
	}
	return this._tooltip;
};

/**
 * Returns the item's icon as a string of CSS class names
 * @reactive
 * @returns {string}
 */
MenuItem.prototype.icon = function() {
	if (Tracker.active) this.dep.depend();

	if (typeof this._icon === 'function') {
		return this._icon();
	}
	return this._icon;
};

/**
 * Returns the item's extra classes.
 * If the item is a link will return 'active' appended if the current route matches the link
 * @reactive
 * @returns {string}
 */
MenuItem.prototype.classes = function() {
	if (Tracker.active) this.dep.depend();

	var classes;
	if (typeof this._classes === 'function') {
		classes = this._classes();
	} else {
		classes = this._classes;
	}
	if (this._type === 'link' &&
		Router.current() &&
		Router.current().route &&
		this._link === Router.current().route.getName()) {
		return classes + ' active';
	}
	return classes;
};

/**
 * Returns the item's link
 * @reactive
 * @returns {string}
 */
MenuItem.prototype.link = function() {
	if (Tracker.active) this.dep.depend();

	if (typeof this._link === 'function') {
		return this._link();
	}
	return this._link;
};

/**
 * Returns a sub menu associated with this item
 * @returns {KRT.Menu}
 */
MenuItem.prototype.menu = function() {
	return this._menu;
};

MenuItem.prototype.isVisible = function() {
	if (Tracker.active) this.dep.depend();

	if (typeof this._visible === 'function') {
		return this._visible(Meteor.user());
	}
	return this._visible;
};

MenuItem.prototype.align = function() {
	return this._align;
};

MenuItem.prototype.hideArrowIcon = function() {
	return this._hideArrowIcon;
};

// Namespace defines
KRT.Menu.MenuItem = MenuItem;
KRT.Menu.StaticItem = StaticItem;
KRT.Menu.LinkItem = LinkItem;
KRT.Menu.DropdownItem = DropdownItem;

KRT.Menu.whenLoggedIn = function(user) { return !!user; };
