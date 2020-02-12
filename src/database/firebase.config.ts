import * as admin from 'firebase-admin'
const serviceAccount = require('../database/serviceAccount.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fitm-monitordev-1c7a0.firebaseio.com'
})
export const db = admin.firestore()
