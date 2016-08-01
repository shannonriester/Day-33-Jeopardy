import CategoriesCollection from './collections/CategoriesCollection';
import Score from './models/Score';
import session from './models/Session';

const store = {
  categories: new CategoriesCollection(),
  score: new Score(),
  settings: {
    appKey: 'kid_rkjTLZY_',
    appSecret: 'fc95de31cf7a4045aa0233e5db0a19b0',
    basicAuth: btoa('kid_rkjTLZY_:fc95de31cf7a4045aa0233e5db0a19b0')
  }
}

export default store;
