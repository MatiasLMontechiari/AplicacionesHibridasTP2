import express from 'express'
import morgan from 'morgan'
import routerTestimoniosAp from './routers/testimoniosAPIRouter.js'
import routerTestimonios from './routers/testimoniosRouter.js'
import config from './config/config.js'
const app = express()

//set port
const port = parseInt(config.env.PORT)

// log only 4xx and 5xx responses to console
app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
  }))

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

//middleware functions
app.use(express.urlencoded({ extended: true })) 
app.use(express.json())
app.use(express.static('assets'))

//Routers
app.use('/api/', routerTestimoniosAp)
app.use('/', routerTestimonios)

//Server
app.listen(port, function () {
    console.log("Server On PORT: ", port);
})