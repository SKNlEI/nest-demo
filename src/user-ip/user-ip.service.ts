import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserIpService {
  async getIpAddress(req: Request) {
    const { localAddress, localPort, remotePort, remoteAddress, remoteFamily } =
      req.socket;
    return {
      success: true,
      data: {
        localAddress,
        localPort,
        remotePort,
        remoteAddress,
        remoteFamily,
      },
    };
  }
}
