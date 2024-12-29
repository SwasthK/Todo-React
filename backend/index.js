const express = require('express')
const cors = require('cors')
const TodoRoutes = require('./routes/crud')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(express.json())

app.use('/mytodo/api/v1/', TodoRoutes)

app.listen(port, () => {
    console.log(`server is listening on ${process.env.PORT || 3000}`);
}) 