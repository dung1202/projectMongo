const express = require('express')
const app = express()
const PORT = 8797
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const middleware = require('./helper/authenMiddleware')

const StudentRouter = require('./studentController')
const classRouter = require('./classController')
const userRouter = require('./userController')
const authRouter = require('./authController')
const SchoolRouter = require('./schoolController')
const FileRouter = require('./fileController')
//Thiết lập một kết nối mongoose mặc định
var mongoDB = 'mongodb://localhost:27017/projectMongo';
mongoose.connect(mongoDB, function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});
//Ép Mongoose sử dụng thư viện promise toàn cục
mongoose.Promise = global.Promise;
//Lấy kết nối mặc định
var db = mongoose.connection;
//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)mi


app.use('/', authRouter)
app.use('/student', middleware.authenticateJWT, StudentRouter)
app.use('/school', middleware.authenticateJWT, SchoolRouter)
app.use('/class', middleware.authenticateJWT, classRouter)
app.use('/user', middleware.authenticateJWT, userRouter)
app.use('/file',FileRouter)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => { console.log("Server started on http://localhost:" + PORT) })
module.exports = app;
