import { Controller, Get, Req } from '@nestjs/common';
import { UserIpService } from './user-ip.service';
import { Request } from 'express';

@Controller('user-ip')
export class UserIpController {
  constructor(readonly userIpService: UserIpService) {}

  @Get()
  async getUserIpInfo(@Req() req: Request) {
    return this.userIpService.getIpAddress(req);
  }
}
