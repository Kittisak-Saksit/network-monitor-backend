import { Injectable } from '@nestjs/common'
import { db } from 'src/database/firebase.config'
import { CollectionReference } from '@google-cloud/firestore'
import * as moment from 'moment'

@Injectable()
export class NetworkService {
  private readonly networkRef: CollectionReference

  constructor() {
    this.networkRef = db.collection('network')
  }

  async setDeviceData(deviceName: string, payload: any): Promise<void> {
    await this.networkRef.doc(deviceName).set(payload, { merge: true })
  }

  async setDeviceInterface(deviceName: string, interfaceName: string, payload: any): Promise<void> {
    await this.networkRef.doc(deviceName).collection('interface').doc(interfaceName).set(payload, { merge: true })
  }

  async setDeviceTraffic(deviceName: string, inbound: number, outbound: number): Promise<void> {
    const timestamp = new Date(moment.utc().toString())
    await this.networkRef.doc(deviceName).collection('traffic').add({ inbound, outbound, timestamp })
  }

  async setDeviceSpeed(deviceName: string, speed: number): Promise<void> {
    const timestamp = new Date(moment.utc().toString())
    await this.networkRef.doc(deviceName).collection('speed').add({ speed, timestamp })
  }
}
