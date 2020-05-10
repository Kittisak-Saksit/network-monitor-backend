import { Controller, Get, Param, Query, Logger } from '@nestjs/common'
import { InterfaceService } from './interface.service'
import { InterfaceInterface } from './interface.interface'
import { InterfaceLogic } from './interface.logic'

@Controller('interface')
export class InterfaceController {
  constructor(
    private readonly interfaceService: InterfaceService,
    private readonly interfaceLogic: InterfaceLogic
  ) {}

  @Get('inbound')
  async getInterfaceInboundTopRank() {
    return this.interfaceService.getInterfaceInboundTopRank(10)
  }

  @Get('outbound')
  async getInterfaceoutboundTopRank() {
    return this.interfaceService.getInterfaceOutboundTopRank(10)
  }

  @Get('diagram')
  async getInterfaceForDiagram(): Promise<any> {
    return this.interfaceLogic.getInterfaceForDiagramLogic()
  }

  @Get(':deviceName')
  async getInterfaceEachDevice(@Param('deviceName') deviceName: string): Promise<InterfaceInterface[]> {
    return this.interfaceService.getAllInterface(deviceName)
  }
}
