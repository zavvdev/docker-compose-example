import { Module } from '@nestjs/common';
import { MovieModule } from './entities/movie/movie.module';
import { UserModule } from './entities/user/user.module';

@Module({
  controllers: [],
  providers: [],
  imports: [UserModule, MovieModule],
})
export class AppModule {}
