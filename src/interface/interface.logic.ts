import { Injectable, Logger } from '@nestjs/common'
import { InterfaceService } from './interface.service';
import { InterfaceInterface } from './interface.interface'

@Injectable()
export class InterfaceLogic {
  constructor(
    private readonly interfaceService: InterfaceService
  ) {}

  async getInterfaceForDiagramLogic(): Promise<any> {
    const sw4503 = await Promise.all([
      this.interfaceService.getInterfaceByName('sw4503', 'GigabitEthernet3-36'),
      this.interfaceService.getInterfaceByName('sw4503', 'GigabitEthernet3-41'),
      this.interfaceService.getInterfaceByName('sw4503', 'GigabitEthernet3-43'),
      this.interfaceService.getInterfaceByName('sw4503', 'GigabitEthernet3-45'),
      this.interfaceService.getInterfaceByName('sw4503', 'GigabitEthernet3-47'),
      this.interfaceService.getInterfaceByName('sw4503', 'GigabitEthernet2-1'),
      this.interfaceService.getInterfaceByName('sw4503', 'GigabitEthernet2-2'),
      this.interfaceService.getInterfaceByName('sw4503', 'GigabitEthernet2-3'),
      this.interfaceService.getInterfaceByName('sw4503', 'GigabitEthernet2-4'),
      this.interfaceService.getInterfaceByName('sw4503', 'GigabitEthernet2-6')
    ])
    const sw3850 = await Promise.all([
      this.interfaceService.getInterfaceByName('sw3850', 'GigabitEthernet0-0-1'),
      this.interfaceService.getInterfaceByName('sw3850', 'GigabitEthernet0-0-2'),
      this.interfaceService.getInterfaceByName('sw3850', 'GigabitEthernet0-0-3'),
      this.interfaceService.getInterfaceByName('sw3850', 'GigabitEthernet0-0-4'),
      this.interfaceService.getInterfaceByName('sw3850', 'GigabitEthernet1-0-1'),
      this.interfaceService.getInterfaceByName('sw3850', 'GigabitEthernet0-0-2')
    ])
    const r101c = await Promise.all([
      this.interfaceService.getInterfaceByName('r101c', 'GigabitEthernet0-1'),
      this.interfaceService.getInterfaceByName('r101c', 'GigabitEthernet0-49')
    ])
    const r124 = await Promise.all([
      this.interfaceService.getInterfaceByName('r124', 'GigabitEthernet0-3'),
      this.interfaceService.getInterfaceByName('r124', 'GigabitEthernet0-49'),
      this.interfaceService.getInterfaceByName('r124', 'GigabitEthernet0-51')
    ])
    const r415 = await Promise.all([
      this.interfaceService.getInterfaceByName('r415', 'GigabitEthernet0-49'),
      this.interfaceService.getInterfaceByName('r415', 'GigabitEthernet0-50'),
      this.interfaceService.getInterfaceByName('r415', 'GigabitEthernet0-51'),
      this.interfaceService.getInterfaceByName('r415', 'GigabitEthernet0-52')

    ])
    const r330a = await Promise.all([
      this.interfaceService.getInterfaceByName('r330a', 'GigabitEthernet0-49'),
      this.interfaceService.getInterfaceByName('r330a', 'GigabitEthernet0-51')
    ])
    const rshop = await Promise.all([
      this.interfaceService.getInterfaceByName('rshop', 'GigabitEthernet0-49'),
      this.interfaceService.getInterfaceByName('rshop', 'GigabitEthernet0-51')
    ])

    return { sw4503, sw3850, r101c, r124, r415, r330a, rshop }
  }

  async setInterface(deviceName: string, status: number): Promise<void> {
    
  }
}
