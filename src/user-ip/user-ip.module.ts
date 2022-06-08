import { Module } from '@nestjs/common';
import { UserIpController } from './user-ip.controller';
import { UserIpService } from './user-ip.service';

@Module({
  controllers: [UserIpController],
  providers: [UserIpService],
})
export class UserIpModule {}
