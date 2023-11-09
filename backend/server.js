const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/author', require('./routes/authorsRoutes'))
app.use('/api/role', require('./routes/rolesRoutes'))
app.use('/api/user', require('./routes/usersRoutes'))
app.use('/api/tag', require('./routes/tagsRoutes'))
app.use('/api/book', require('./routes/booksRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server started at port ${port}`) )