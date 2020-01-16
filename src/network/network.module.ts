import { Module } from '@nestjs/common'
import { NetworkController } from './network.controller'
import { NetworkLogic } from './network.logic'
import { NetworkService } from './network.service'
import { CronjobGetData } from './cronjob-get-data'

@Module({
  controllers: [NetworkController],
  providers: [NetworkLogic, NetworkService, CronjobGetData]
})
export class NetworkModule {}
