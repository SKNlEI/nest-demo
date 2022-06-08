import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserIpModule } from './user-ip/user-ip.module';

@Module({
  imports: [UserIpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
