import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TransformInterceptor } from './transformers/app.interceptor'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { InterfaceModule } from './interface/interface.module'

@Module({
  imports: [
    InterfaceModule
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
