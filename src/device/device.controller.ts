import { Controller, Get, Param } from '@nestjs/common'
import { DeviceInterface } from './device.interface';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController {
  constructor(
    private readonly deviceService: DeviceService
  ) {}

  @Get(':deviceName')
  async getDeviceData(@Param('deviceName') deviceName: string): Promise<DeviceInterface> {
    return this.deviceService.getDeviceData(deviceName)
  }
}
