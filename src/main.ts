import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { renderFile } from 'ejs'
import {join} from "path";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.engine('html', renderFile)
    .set('view engine', 'html')
    .setBaseViewsDir(join(__dirname, '../resources'))
    .useStaticAssets(join(__dirname, '../resources'), {
      index: false,
      redirect: false
  });

  await app.listen(process.env.PORT || 3000)
}
bootstrap();
