const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nangko:nangko_db%232021@boilerplate.llazh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true
}).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~안녕하세요~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})