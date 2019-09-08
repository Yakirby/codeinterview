const Account = require('../../models/account/Account');

module.exports = async function(req, res, next) {
	const {email, name, age} = req.body;
	const account = new Account({email, name, age});
	await account.save(function(err, resultA){
		if(err) return res.send({error: "email already exists"});
		else return res.send({message: 'success'});
	});
	
};