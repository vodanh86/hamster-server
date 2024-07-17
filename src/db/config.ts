import { DataSourceOptions } from 'typeorm';
import { Global } from '../entity/global.entity.js';
import { Item } from '../entity/item.entity.js';
import { Purchase } from '../entity/purchase.entity.js';
import { User } from '../entity/user.entity.js';

const config: DataSourceOptions = {
  /*
   Note: Casting "as any" to avoid TypeORM type errors when building a generic template.
   Please import types specific to your database dialect, i. e. PostgresConnectionOptions
  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: process.env.DATABASE_DIALECT as any,
  url: process.env.DATABASE_URL,
  entities: [Global, Item, Purchase, User],
  synchronize: true,
  migrations: [],
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'all',
  subscribers: [],
};

export default config;
