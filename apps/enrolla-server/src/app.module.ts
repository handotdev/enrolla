import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthzModule } from './authz/authz.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), AuthzModule],
  providers: [PrismaService],
  controllers: [AppController],
})
export class AppModule {}