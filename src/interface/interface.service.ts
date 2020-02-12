import { Injectable } from '@nestjs/common'
import { CollectionReference } from '@google-cloud/firestore'
import { db } from '../database/firebase.config'

@Injectable()
export class InterfaceService {
  private readonly networkRef: CollectionReference

  constructor() {
    this.networkRef = db.collection('network')
  }

  async getAllInterface(deviceName: string): Promise<any[]> {
    const interfaceValue = []
    const allInterfaces = await this.networkRef.doc(deviceName).collection('interface').get()
    allInterfaces.forEach(eachInterface => {
      interfaceValue.push({ interface: eachInterface.id, ...eachInterface.data() })
    })

    return interfaceValue
  }
}
