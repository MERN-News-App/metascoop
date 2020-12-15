import express from 'express';
import bodyParser from 'body-parser';

// import usersRoutes from './routes/users.js'

const app = express()
const port = 5000


app.use(bodyParser.json())

// app.use('/users', usersRoutes)

app.get('/', (req, res) => res.send('Hello from homepage'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})