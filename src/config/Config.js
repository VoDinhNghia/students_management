const mongoose = require("mongoose");

exports.cors = {
    origin: "*"
};

exports.environment = "local"; //local, product

exports.port = process.env.PORT || 3000;

exports.url = `http://localhost:3000`

//configure mongoose
exports.connectDB = {
    mongoDB: mongoose.connect(
        process.env.MONGODB_URI || "mongodb://localhost/students_management", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Connected to MongoDB");
            }
        }
    )
}

exports.ConfigKeySecret = {
    accessTokenSecret: 'access-token-secret-check-student-version-1@',
    accessTokenLife: '24h',
    refreshTokenLife: '3650d',
    refreshTokenSecret: 'token-refresh-secret-check-student-version-1@',
}