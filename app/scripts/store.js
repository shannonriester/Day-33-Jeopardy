import CategoriesCollection from './collections/CategoriesCollection';

const store = {
  session: {
    username: '',
    password: '',
  },
  categories: CategoriesCollection,
  settings:{}
}

export default store;
