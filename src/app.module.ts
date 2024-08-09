import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.128.2',
      port: 5432,
      username: 'circle',
      password: 'circle',
      database: 'circle',
      entities: [Category],
      synchronize: true,
    }),
    UsersModule,
    CategoriesModule,
  ],

})
export class AppModule {}
