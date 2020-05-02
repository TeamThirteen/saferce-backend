'use strict';

const User = use('App/Models/User');

class UserController {
  async create({ request, response }) {
    const data = request.only(['name', 'email', 'password', 'provider']);

    const userExists = await User.findBy('email', data.email);

    if (userExists) {
      return response.json({ error: 'User with this email already exists!' });
    }

    const user = await User.create(data);

    return user;
  }

  async delete({ params }) {
    const { id } = params;

    const user = await User.find(id);

    user.active = false;

    await user.save();

    return user;
  }
}

module.exports = UserController;
