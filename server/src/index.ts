import express = require('express')

const app = express()

const port = process.env.PORT

app.get('/', (_, res) => {
  res.send('helloworld')
})

app.get('/list', (_, res) => {
  res.send([{ name: '1' }, { name: '2' }, { name: '3' }])
})

app.listen(port, () => {
  console.log(`server started at port: ${port}`)
})
