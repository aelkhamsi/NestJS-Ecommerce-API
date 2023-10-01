import { TypeOrmModuleOptions } from '@nestjs/typeorm';

console.log('MYSQL_ROOT_PASSWORD:', process.env.MYSQL_ROOT_PASSWORD);
console.log('MYSQL_DATABASE:', process.env.MYSQL_DATABASE);

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: 'changeme',
  database: 'api_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Set to false in production
};

export default typeOrmConfig;
