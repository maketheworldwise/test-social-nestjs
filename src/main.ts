import { initializeTransactionalContext } from 'typeorm-transactional';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalException } from '@root/exception/global.exception';

async function bootstrap() {
  initializeTransactionalContext();

  const app = await NestFactory.create(AppModule);

  // class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: false,
      },
      whitelist: true,
      // forbidNonWhitelisted: true,
      validationError: {
        target: false,
        value: false,
      },
      exceptionFactory: (errors) => {
        throw GlobalException.create(errors);
      },
    }),
  );

  await app.listen(8080);
}
bootstrap();
