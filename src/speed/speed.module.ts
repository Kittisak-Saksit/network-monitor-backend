import { Module } from '@nestjs/common'
import { SpeedController } from './speed.controller'
import { SpeedLogic } from './speed.logic'
import { SpeedService } from './speed.service'

@Module({
  controllers: [SpeedController],
  providers: [SpeedLogic, SpeedService]
})

export class SpeedModule {}
