import { Controller, Get } from '@nestjs/common'
import { SpeedService } from './speed.service'
import { SpeedInterface } from './speed.interface'

@Controller('speed')
export class SpeedController {
  constructor(
    private readonly speedService: SpeedService
  ) {}

  @Get()
  async getSpeedData(): Promise<SpeedInterface[]> {
    return this.speedService.getSpeedData()
  }
}
