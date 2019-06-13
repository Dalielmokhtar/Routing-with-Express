const express = require("express")
const app = express()


app.use(date = (req, res, next) => {
    let requestAt = new Date().getHours();
    console.log(requestAt)
    if ((requestAt <8) ||  (requestAt>17))
        res.send('Our office is closed')
    
        next()
    
})

app.use(express.static('public'))

app.listen(3000, (err) => {
    if (err) console.log("server is not running")
    else console.log("server is running on port 3000")
})