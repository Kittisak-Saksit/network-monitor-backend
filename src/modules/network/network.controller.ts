import { Controller, Get } from '@nestjs/common'

@Controller('network')
export class NetworkController {
  @Get()
  async test(): Promise<string> {
    return 'hello'
  }
}
