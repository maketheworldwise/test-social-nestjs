import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from '@root/config/env.config';
import { customTypeCast } from '@database/utils/type-caster.util';

function modules(): any {
  return [
    TypeOrmModule.forRoot({
      type: 'mysql',
      autoLoadEntities: true,
      poolSize: env.db.connectionLimit,
      host: env.db.host,
      port: env.db.port,
      username: env.db.user,
      password: env.db.pass,
      database: env.db.name,
      synchronize: false,
      logging: 'all',
      logger: 'advanced-console',
      extra: {
        typeCast: customTypeCast,
      },
    }),
  ];
}

@Module({
  imports: [...modules()],
  exports: [...modules()],
})
export class DatabaseModule {}
