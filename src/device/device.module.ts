import { Module } from '@nestjs/common'
import { DeviceController } from './device.controller'
import { DeviceLogic } from './device.logic'
import { DeviceService } from './device.service'

@Module({
  controllers: [DeviceController],
  providers: [DeviceLogic, DeviceService]
})

export class DeviceModule {}
