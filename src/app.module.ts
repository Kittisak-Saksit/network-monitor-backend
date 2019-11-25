import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { NetworkModule } from './modules/network/network.module'

@Module({
  imports: [
    NetworkModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
