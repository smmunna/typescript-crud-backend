import express, { Request, Response } from 'express'
import 'dotenv/config'
import cors from 'cors'
import { userRoutes } from './app/modules/user/user.route'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/users', userRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app;