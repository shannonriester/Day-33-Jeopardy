import CategoriesCollection from './collections/CategoriesCollection';

const store = {
  session: {
    username: '',
    password: '',
  },
  categories: new CategoriesCollection(),
  // score: new Score(),
  settings: {
    baseUrl: 'https://baas.kinvey.com',
    appKey: 'kid_rkjTLZY_',
    appSecret: 'fc95de31cf7a4045aa0233e5db0a19b0',
    basicAuth: btoa('kid_rkjTLZY_:fc95de31cf7a4045aa0233e5db0a19b0')
  }
}

export default store;
