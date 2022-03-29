/* eslint-disable prettier/prettier */
//configuration for Db connectivity
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeORMConfiguration: TypeOrmModuleOptions = {
    username: 'root',
    password: 'india',
    database:'TaskManager',
    port: 3306,
    host: 'localhost',
    type: 'mysql',
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    //true: all the properties in the entity classes will be synchronized with database
    synchronize: false,
};