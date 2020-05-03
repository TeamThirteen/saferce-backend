'use strict';

const User = use('App/Models/User');

class SessionController {
  async create({ request, auth }) {
    const { email, password: passwordUser } = request.all();

    const { token } = await auth.attempt(email, passwordUser);

    const userData = await User.findBy('email', email);
    const userFile = await userData.file().fetch();

    const user = {
      image: userFile !== null ? userFile.url : null,
      userData,
    };

    return { token, user };
  }
}

module.exports = SessionController;
