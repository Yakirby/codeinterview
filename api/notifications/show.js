const Notification = require('../../models/notifications/Notification');
module.exports = async function(req, res, next) {
	if(!req.query.accountId) return res.send({err: 'missing accountId'})
		const id = Number(req.query.accountId);
		const getAccount = await Notification.find({accountId:id})
		return res.send(getAccount);
	
	  ;
};
