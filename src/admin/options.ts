import { AdminJSOptions } from 'adminjs';
import { Global } from '../entity/global.entity.js';
import { Item } from '../entity/item.entity.js';
import { Purchase } from '../entity/purchase.entity.js';
import { User } from '../entity/user.entity.js';
import componentLoader from './component-loader.js';

const usersNavigation = {
  name: 'Users',
  icon: 'User',
}

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [{
    resource: Global,
    options: {
      navigation: usersNavigation,
    },
  }, {
    resource: Item,
    options: {
      navigation: usersNavigation,
    },
  }, {
    resource: Purchase,
    options: {
      navigation: usersNavigation,
    },
  }, {
    resource: User,
    options: {
      navigation: usersNavigation,
    },
  }],
  databases: [],
};

export default options;
