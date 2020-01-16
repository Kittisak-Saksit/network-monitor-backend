import { Injectable } from '@nestjs/common'
import { NetworkService } from './network.service'

@Injectable()
export class NetworkLogic {
  constructor(
    private readonly networkService: NetworkService
  ) {}
}
