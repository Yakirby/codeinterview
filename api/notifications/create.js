const Notification = require('../../models/notifications/Notification');
console.log("OK3")
module.exports = async function(req, res, next) {
	const {accountId, name, color} = req.body;
	console.log("OK4")
	const notifications = new Notification({accountId, name, color});
	console.log("OK5")
	await notifications.save(function(err, resultA){
		console.log(err)
		if(err) return res.send({error: "AccountID already exists"});
		else return res.send({message: 'success'});
	});
	
};