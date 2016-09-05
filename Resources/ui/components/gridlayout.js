exports.GridLayout = function(_args) {

	var elemPad = (_args.padding == 0) ? 0 : _args.padding + (_args.padding / 2);
	//to balance the width of each element
	var eviewWidth = (parseFloat(Math.floor(100 / _args.col)) / 100) * Ti.Platform.displayCaps.platformWidth - elemPad;
	//the element width

	//grid container
	var vview = Ti.UI.createView({
		bottom: 0,
		height : _args.space + '%',
		width : '100%',
		layout : "vertical"
	});
	var ctr = 0;
	//counter
	for (var x = 0; x < _args.row; x++) {
		//horizontal container
		var hview = Ti.UI.createView({
			height : Math.floor(100 / _args.row) + '%',
			width : '100%',
			layout : "horizontal"
		});
		for (var y = 0; y < _args.col; y++) {
			//create element container
			var eview = Ti.UI.createView({
				backgroundColor : _args.bgcolor[x][y],
				height : '100%',
				width : eviewWidth,
				top : _args.padding,
				left : _args.padding
			});
			hview.add(eview);
			//eview.add(obj[ctr]);
			//require("ui/util/alignment").setAlign(obj[ctr]);
			//set alignment of the object inside the element
			ctr++;
		}
		vview.add(hview);
	}
	return vview;
}