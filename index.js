const dotenv = require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const axios = require("axios")
const httpClient = axios.create()


app.get("/users/:username" , (req,res) => {
    const options = {
        method: "get",
        url: `https://api.github.com/users/${req.params.username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`

    }
    httpClient(options).then((apiInfo) => {
        var currentUser = apiInfo.data
        var avatar = currentUser.avatar_url
        var repo = currentUser.public_repos
        res.send(`<img src = "${avatar}"> 
        <p> public repos : ${repo} </p>
        
        `)
    })
})





app.listen(PORT , (err)=>{
    console.log (err || `server running on ${3000}`)
})