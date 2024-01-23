const express = require('express')
const cors = require('cors')
const TodoRoutes = require('./routes/crud')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(express.json())

app.use('/mytodo/api/v1/', TodoRoutes)

const port = 3000;

app.use((err, req, res, next) => {

    res.status(404).json({
        message: "Something went wrong!"
    })
})

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
}) 