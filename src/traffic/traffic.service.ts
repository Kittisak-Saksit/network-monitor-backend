import { Injectable } from '@nestjs/common'
import { CollectionReference } from '@google-cloud/firestore'
import { db } from 'src/database/firebase.config'
import * as moment from 'moment'
import { TrafficInterface } from './traffic.interface'

@Injectable()
export class TrafficService {
  private readonly networkRef: CollectionReference

  constructor() {
    this.networkRef = db.collection('network')
  }

  async getTrafficData(deviceName: string, startAt: number, endAt: number): Promise<TrafficInterface[]> {
    const data = []
    const start = new Date(moment.unix(startAt).subtract(7, 'hour').toString())
    const end = new Date(moment.unix(endAt).subtract(7, 'hour').toString())
    const results = await this.networkRef.doc(deviceName).collection('traffic')
      .where('timestamp', '>=', start)
      .where('timestamp', '<=', end)
      .orderBy('timestamp', 'desc')
      .get()
    if (results.empty) {
      return
    }
    results.forEach(result => {
      const { timestamp, ...other } = result.data()
      const time = moment.unix(timestamp._seconds).add(7, 'hour').format('HH:mm  DD-MM-YYYY')
      data.push({ id: result.id, timestamp: time, ...other })
    })

    return data
  }
}
