const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcrypt');
const Employee = require("./models/employee");
const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json())
app.use(cors())

// mongodb://127.0.0.1:27017/employee
// mongodb://localhost:27017
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Database Connected."))
.catch((err) => console.log("Connection error", err))

app.post("/signup", async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const salt = 10;
        const hashPassword = await bcrypt.hash(password, salt)
        const employer = new Employee({name, email, password: hashPassword})
        await employer.save()
        return res.status(201).json(employer)
    } catch (error) {
        return res.status(500).json({error: "Server error", msg: error.message})
    }
})

app.get('/signup', async (req, res) => {
    try {
        const users = await Employee.find()
        if(!users) {
            return res.status(404).json({msg: "Users not found."})
        }
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({error: "Server error", msg: error.message});
    }
})

app.listen(PORT, () => {
    console.log(`Server listen on ${PORT}`);
})