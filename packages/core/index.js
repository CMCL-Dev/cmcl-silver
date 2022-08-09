function backend(){
	const nw = require("nw.gui");
	nw.Window.open("index.html", {
		id: "main-window"
	},function(Window){
		console.info("Window opened successfully");
	});
}
function frontend(){
	
}
module.exports = {
	frontend,
	backend
}
