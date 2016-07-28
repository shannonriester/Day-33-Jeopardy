import CategoriesCollection from './collections/CategoriesCollection';

const store = {
  session: {
    username: '',
    password: '',
  },
  categories: new CategoriesCollection(),
}

export default store;
