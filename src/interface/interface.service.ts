import { Injectable } from '@nestjs/common'
import { CollectionReference } from '@google-cloud/firestore'
import { db } from '../database/firebase.config'
import { InterfaceInterface } from './interface.interface'

@Injectable()
export class InterfaceService {
  private readonly networkRef: CollectionReference

  constructor() {
    this.networkRef = db.collection('network')
  }

  async getAllInterface(deviceName: string): Promise<InterfaceInterface[]> {
    const interfaceValue = []
    const allInterfaces = await this.networkRef.doc(deviceName).collection('interface').get()
    allInterfaces.forEach(eachInterface => {
      const name = eachInterface.id.replace(/-/g, '/')
      interfaceValue.push({ interface: name, ...eachInterface.data() })
    })

    return interfaceValue
  }

  async getInterfaceByName(deviceName: string, interfaceName: string): Promise<any> {
    const result = await this.networkRef.doc(deviceName).collection('interface').doc(interfaceName).get()
    const name = result.id.replace(/-/g, '/')

    return { interfaceName: name, ...result.data() }
  }

  async getInterfaceInboundTopRank(rank: number) {
    const data = []
    const results = await db.collectionGroup('interface').orderBy('inbound', 'desc').limit(rank).get()
    results.forEach(result => {
      const name = result.id.replace(/-/g, '/')
      data.push({ interface: name, ...result.data() })
    })

    return data
  }

  async getInterfaceOutboundTopRank(rank: number) {
    const data = []
    const results = await db.collectionGroup('interface').orderBy('outbound', 'desc').limit(rank).get()
    results.forEach(result => {
      const name = result.id.replace(/-/g, '/')
      data.push({ interface: name, ...result.data() })
    })

    return data
  }
}
