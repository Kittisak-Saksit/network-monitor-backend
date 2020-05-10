import { Module } from '@nestjs/common'
import { InterfaceController } from './interface.controller'
import { InterfaceService } from './interface.service'
import { InterfaceLogic } from './interface.logic'

@Module({
  controllers: [InterfaceController],
  providers: [InterfaceService, InterfaceLogic]
})

export class InterfaceModule {}
