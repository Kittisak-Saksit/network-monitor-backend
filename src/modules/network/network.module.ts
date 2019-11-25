import { Module, HttpModule } from '@nestjs/common'
import { NetworkController } from './network.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000
    })
  ],
  providers: [

  ],
  controllers: [
    NetworkController
  ]
})
export class NetworkModule {}
