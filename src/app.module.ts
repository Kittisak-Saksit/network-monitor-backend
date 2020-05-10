import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TransformInterceptor } from './transformers/app.interceptor'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { InterfaceModule } from './interface/interface.module'
import { DeviceModule } from './device/device.module'
import { TrafficModule } from './traffic/traffic.module'
import { SpeedModule } from './speed/speed.module'

@Module({
  imports: [
    InterfaceModule,
    DeviceModule,
    TrafficModule,
    SpeedModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor
    }
  ]
})
export class AppModule {}
