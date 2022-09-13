const existingUsers = require('./db.json')

module.exports = {
    //accept request and send response
    register: (req, res) => {
        //destructure the body from request (username, pass, email). Check if user and email exist. Hash password. Send back 
        let {username, email, password} = req.body
        let newUser = {
            id: userId,
            username,
            email,
            password
        }
        existingUsers.push(newUser)
        res.status(200).send(existingUsers)
        userId++
    },
    login: (req, res) => {
        console.log('Logging In User')
        console.log(req.body)
        const { username, password } = req.body
        
        for (let i = 0; i < existingUsers.length; i++) {
          if (existingUsers[i].username === username && existingUsers[i].password === password) {
            res.status(200).send(existingUsers[i])
          }
        }
        res.status(400).send("User not found.")
      },
}