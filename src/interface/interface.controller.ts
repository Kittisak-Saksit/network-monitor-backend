import { Controller, Get, Param } from '@nestjs/common'
import { InterfaceService } from './interface.service'

@Controller('interface')
export class InterfaceController {
  constructor(
    private readonly interfaceService: InterfaceService
  ) {}

  @Get(':deviceName')
  async getInterfaceEachDevice(@Param('deviceName') deviceName: string): Promise<any[]> {
    return this.interfaceService.getAllInterface(deviceName)
  }
}
