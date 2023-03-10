import express from 'express'
import {router} from './routes'
const app = express()

app.use(express.json())
app.use(router)

app.listen(3030, () => {
  console.log('Server listening port 3030')
})
