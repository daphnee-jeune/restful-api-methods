const express = require('express')
const mongoose = require('mongoose')
const {MONGO_URI} = require('./config')

//Routes
const postsRoutes = require('./routes/api/posts')

const app = express()

//BodyParser middleware
app.use(express.json())


//Connect to mongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err))

//User routes
app.use('/api/posts', postsRoutes)

//BodyParser Middleware
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Hello from node")
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server runs at port ${PORT}`))