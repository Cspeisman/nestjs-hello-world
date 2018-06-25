import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { renderFile } from 'ejs';

import {join} from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.engine('html', renderFile)
    .set('view engine', 'html')
    .setBaseViewsDir(join(__dirname, '../client/build'))
    .useStaticAssets(join(__dirname, '../client/build'), {
      index: false,
      redirect: false,
  });

  app.use((req, res, next) => {
    if (req.url !== '/') {
      res.sendFile(join(__dirname, '../client/build/index.html'));
    } else {
      next();
    }
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
