const express = require('express')
const app = express()
app.use(express.json())

const path = require('path')
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

const cors = require('cors')
const corsOptions ={
  origin:'*', 
  optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
