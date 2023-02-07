const express = require('express')
const app = express()
const port = 3000
const UserRoute = require( './Route/UserRoute');


app.use(UserRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})