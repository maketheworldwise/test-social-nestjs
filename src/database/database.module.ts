import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from '@root/config/env.config';
import { customTypeCast } from '@database/utils/type-caster.util';
import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';

function modules(): any {
  return [
    TypeOrmModule.forRootAsync({
      name: 'default',
      useFactory() {
        return {
          type: 'mysql',
          autoLoadEntities: true,
          poolSize: env.db.connectionLimit,
          host: env.db.host,
          port: env.db.port,
          username: env.db.user,
          password: env.db.pass,
          database: env.db.name,
          synchronize: true,
          logging: 'all',
          logger: 'advanced-console',
          extra: {
            typeCast: customTypeCast,
          },
        };
      },
      async dataSourceFactory(options) {
        if (!options) {
          throw new Error('Invalid options passed');
        }

        const dataSource = new DataSource(options);
        await dataSource.initialize();
        return addTransactionalDataSource({
          name: 'default',
          dataSource: dataSource,
        });
      },
    }),
  ];
}

@Module({
  imports: [...modules()],
  exports: [...modules()],
})
export class DatabaseModule {}
