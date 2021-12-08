import { NestFactory } from '@nestjs/core';
import { PORT } from 'constants/settings';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(`Api started on port: ${PORT}`));
}

start();
