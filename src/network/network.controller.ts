import { Controller, Post } from '@nestjs/common'
import { NetworkLogic } from './network.logic'

@Controller('network')
export class NetworkController {
  constructor(
    private readonly networkLogic: NetworkLogic
  ) {}
}
