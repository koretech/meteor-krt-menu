Template.krtMenuMenu.helpers({

	menu: function() {
		if (this.name) return KRT.Menu._menus[this.name];
		return null;
	}

});

Template.krtMenuLinkItem.rendered = function() {
	this.$('.item.tooltip').popup();
};
