import { Module, Post } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'blog',
      entities: [Post],
      synchronize: true,
    }),
  ],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {}
