
const express = require("express")
const app = express()
const port = process.env.port || 80

app.get("/", (req, res) => {
  res.send("hi there")
})

app.listen(port, () => console.log(`listening on port ${port}`))
