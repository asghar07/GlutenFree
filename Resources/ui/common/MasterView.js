//Master View Component Constructor
function MasterView() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor : '#FFFFFF'
	});

	var grid = require("ui/components/gridlayout").GridLayout({
		row : 2,
		col : 2,
		padding : 0,
		space : 60,
		bgcolor: [['#336699', '#cc0066'], ['#99cc33', '#333333']],
	});
	self.add(grid);

	return self;
};

module.exports = MasterView;
