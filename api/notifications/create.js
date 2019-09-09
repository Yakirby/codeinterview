const Notification = require('../../models/notifications/Notification');
module.exports = async function(req, res, next) {
	const {accountId, name, color} = req.body;
	const notifications = new Notification({accountId, name, color});
	await notifications.save(function(err, resultA){
		if(err) return res.send({error: "AccountID already exists"});
		else return res.send({message: 'success'});
	});
	
};