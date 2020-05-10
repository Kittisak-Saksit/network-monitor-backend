import { Injectable } from '@nestjs/common'
import { CollectionReference } from '@google-cloud/firestore'
import { db } from 'src/database/firebase.config'
import { DeviceInterface } from './device.interface'

@Injectable()
export class DeviceService {
  private readonly networkRef: CollectionReference

  constructor() {
    this.networkRef = db.collection('network')
  }

  async getDeviceData(deviceName: string): Promise<DeviceInterface> {
    const deviceData = await this.networkRef.doc(deviceName).get()

    return deviceData.data() as DeviceInterface
  }
}
