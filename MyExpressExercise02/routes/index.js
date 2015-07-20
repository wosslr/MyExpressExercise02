/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', {
		title : 'Express'
	});
};

exports.userlist = function(db) {
	return function(req, res) {
		var collection = db.get('users');
		collection.find({}, {}, function(e, docs) {
			res.render('userlist', {
				"userlist" : docs
			});
		});
	};
};

exports.login = function(req, res) {
	res.render('login', {
		title : 'Smart Gallery'
	});
};

exports.login2 = function(req, res) {
	res.render('login2', {
		title : 'Smart Gallery'
	});
};

exports.artsList = function(req, res) {
	res.render('arts_list', {
		title : 'Smart Gallery'
	});
};