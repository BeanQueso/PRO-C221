const express = require("express");
const app = express();
const server = require("http").Server(app);
var nodemailer = require("nodemailer");

app.use(express.json())

const transporter = nodemailer.createTransport({
    port:465,
    host:"smtp.gmail.com",
    auth:{
        user:'eshaant10@gmail.com',
        pass:'anhuqxtvdndkwahm',
    },
    secure:true
})

server.listen(process.env.PORT || 3030);