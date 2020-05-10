import { Module } from '@nestjs/common'
import { TrafficController } from './traffic.controller'
import { TrafficLogic } from './traffic.logic'
import { TrafficService } from './traffic.service'

@Module({
  controllers: [TrafficController],
  providers: [TrafficLogic, TrafficService]
})

export class TrafficModule {}