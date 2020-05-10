import { Injectable } from '@nestjs/common'
import { db } from 'src/database/firebase.config'
import * as moment from 'moment'
import { SpeedInterface } from './speed.interface'

@Injectable()
export class SpeedService {
  async getSpeedData(): Promise<SpeedInterface[]> {
    const data = []
    const results = await db.collectionGroup('speed').orderBy('timestamp', 'desc').limit(8).get()
    results.forEach(result => {
      const { timestamp, ...other } = result.data()
      const time = moment.unix(timestamp._seconds).add(7, 'hours').format('HH:mm  DD-MM-YYYY')
      data.push({ deviceName: result.ref.parent.parent.id, timestamp: time, ...other })
    })

    return data
  }
}
