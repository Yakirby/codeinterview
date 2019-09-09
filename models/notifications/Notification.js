const mongoose = require('mongoose');
console.log("OK1")
const Notification = new mongoose.Schema({
	accountId: {type: Number, required: true, unique:true},
	name: {type: String},
	color: {type: String},
	
}, {timestamps: true});
console.log("OK2")
module.exports = mongoose.model('Notification', Notification);
