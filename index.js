const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send("Maybe what you are is what's trapping you inside whatever it is that you're trapped inside.!")
})
app.listen(3000, () => console.log('Server running on port 3000'))
