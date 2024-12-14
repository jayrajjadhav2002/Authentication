require("dotenv").config();
const express = require ("express");
const cors = require ("cors");
const passport = require("passport");
const passportSetup = require('./passport')
const authRoute = require('./routes/auth')
const cookieSession = require("cookie-session");
const app = express();

app.use(
    cookieSession({
        name:"session",
        keys:["Jaydev"],
        maxAge:24*60*60*100,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin:"http:localhost/3000",
        method:"GET,POST,PUT,DELETE",
        credentials:"true"
    })
);

app.use("/auth",authRoute)

const port = process.env.PORT||8080;
app.listen(port, () => {console.log(`listening on port ${port}`)})