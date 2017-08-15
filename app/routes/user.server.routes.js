var user = require('../../app/controllers/user.server.controller');
var passport = require('passport');

module.exports = function(app) {
	app.route('/signup')
		.get(user.renderSignup)
		.post(user.signup);

	app.route('/login')
		.get(user.renderSignin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/login',
			failureFlash: true
		}));

	app.route('/password')
		.post(user.requiresLogin, user.changePassword);

	app.route('/passwordStrength')
		.post(user.checkPasswordStrength);

	app.get('/signout', user.signout);
};
