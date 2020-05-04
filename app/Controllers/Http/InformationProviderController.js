'use strict';

const Env = use('Env');

const InformationProvider = use('App/Models/InformationProvider');
const SafeItem = use('App/Models/SafeItem');
const Category = use('App/Models/Category');
const Type = use('App/Models/Type');
const Axios = use('Axios');

class InformationProviderController {
  async store({ auth, request, response }) {
    const { user } = auth;
    const allData = request.all();
    const { category_id, type_id, address, number, district, city, state, cep, title } = allData;

    if (!cep) {
      return response.status(400).json({ error: 'CEP is required' });
    }

    if (!title) {
      return response.status(400).json({ error: 'Title is required' });
    }

    const category = await Category.find(category_id);

    if (!category) {
      return response.status(400).json({ error: 'Category does not exist!' });
    }

    const type = await Type.find(type_id);

    if (!type) {
      return response.status(400).json({ error: 'Type does not exist!' });
    }

    const completeAddress = `${address} ${number} ${district} ${city} ${state} ${cep}`;

    //  Regex to remove special characters
    const definitiveAddress = completeAddress.replace(/[^\w\s]/gi, '');

    try {
      const googleAdress = await Axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address={${definitiveAddress}}&key=${Env.get('GOOGLE_KEY')}`
      );

      const { lat: latitude, lng: longitude } = googleAdress.data.results[0].geometry.location;

      const informationProvider = await InformationProvider.create({
        ...allData,
        user_id: user.id,
        latitude,
        longitude,
      });

      const profile = await informationProvider.user().fetch();
      profile.provider = true;

      await profile.save();

      return {
        ...allData,
        geometry: {
          latitude,
          longitude,
        },
      };
    } catch (error) {
      return response.status(500).json({ error: 'Something goes wrong. Try again!' });
    }
  }

  async index({ response }) {
    const providersWithSerializer = await InformationProvider.query().with('safe_items').fetch();
    const providersJSON = providersWithSerializer.toJSON();

    const itemsCount = await SafeItem.getCount();

    const providers = providersJSON.map((provider) => {
      const numberOfItems = provider.safe_items.length;
      const rating = (numberOfItems * 100) / itemsCount / 20;
      return {
        ...provider,
        rating,
      };
    });

    return providers;
  }

  async show({ params }) {
    const { id } = params;

    const providersWithSerializer = await InformationProvider.find(id);
    await providersWithSerializer.load('safe_items');

    const provider = providersWithSerializer.toJSON();

    if (!provider) {
      return response.status(400).json({ error: 'Provider not found' });
    }

    const itemsCount = await SafeItem.getCount();

    const numberOfItems = provider.safe_items.length;

    const rating = (numberOfItems * 100) / itemsCount / 20;

    return {
      ...provider,
      rating,
    };
  }
}

module.exports = InformationProviderController;
