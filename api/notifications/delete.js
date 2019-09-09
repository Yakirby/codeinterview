const Notification = require('../../models/notifications/Notification');
module.exports = async function(req, res, next) {
	if(!req.query.accountId) return res.send({err: 'missing accountId'})
	if(!req.query.color) return res.send({err: 'missing color'})
	const id = Number(req.query.accountId)
	const clr = String(req.query.color)
	let ans = await Notification.deleteOne({accountId:id, color:clr})
	if (!ans.deletedCount) return res.send({message:'Nothing deleted'})
	else return res.send({message:'Succesfully deleted'})
};