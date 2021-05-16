const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require('jsonwebtoken');

// const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
// const session = require('express-session')

const bcrypt = require('bcrypt');
const saltRounds = 10;


const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}))

// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(
//     session({
//         key: "userId",
//         secret: "subscribe",
//         resave: false,
//         saveUninitialized: false,
//         cookie: {
//             expires: 60 * 60 * 24,
//         },
//     })
// );

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1225",
    database: "loginform"
})

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err)
        } else {
            db.query("SELECT * FROM infologin WHERE username = ?", [username], (err, result) => {
                if (err) {
                    res.send(err)
                }
                if (result.length === 0) {
                    db.query(
                        "insert into infologin (username, password) value (?, ?) ", [username, hash],
                        (err, result) => {
                            if (err) {
                                res.send(err)
                            }
                            if (result) {
                                res.send({ message: "Resister success", username: username })
                            }
                        }
                    )
                }
                if (result.length > 0) {
                    res.send({ message: "User name is exist" })
                }
            })
        }

    })
});


app.post("/login", (req, res) => {
    const { username, password } = req.body;

    db.query(
        "SELECT * FROM infologin WHERE username = ?", [username],
        (err, result) => {
            // console.log(result)
            if (err) {
                res.send(err);
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        //console.log(response)
                        let token = jwt.sign({
                            username,

                        }, "tuOiHOngThoNGAY", { expiresIn: "2h" })

                        res.send({
                            status: true,
                            username: username,
                            token: token
                        });
                    } else {
                        res.send({ message: "Username or password is not correct" })
                    }
                })

            } else {
                res.send({ err: err, message: "User doesn't exist" })
            }
        }
    )
}
)

app.get("/todolist", (req, res) => {
    const { username } = req.query
    // console.log(req.query)
    db.query(
        "SELECT * FROM todolist WHERE username = ?", [username],
        (err, result) => {
            if (err) {
                res.send(err)
            }
            if (result.length > 0) {
                res.send(result)
                // console.log(result)
            }
        }
    )
})

app.post("/todolist", (req, res) => {
    const { id, username, todolist, complete } = req.body
    db.query(
        "INSERT INTO todolist (id, username, todolist, complete) VALUE (?, ?, ?, ?) ", [id, username, todolist, complete],
        (err, result) => {
            if (err) {
                res.send(err)
            }
            if (result) {
                res.send(result)
            }
        }
    )

}
)


app.listen(3001, () => {
    console.log("runing server")
})