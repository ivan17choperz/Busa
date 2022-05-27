const express = require('express');
const app = express();
const {dbConnect} = require('./models/mysql/conection');
const morgan = require('morgan');
const routes = require('./routers');

// settings
app.listen(process.env.PORT || 3000,()=>{
    console.log(`funcionando en el puerto 3000`);
});
// files satitics (imgs,css,javascripts)
app.use(express.static(__dirname+'/public'));
//views
app.set('view engine','ejs');
app.set('views',__dirname+'/views/')
// midelwares 
app.use(express.json())
app.use(express.urlencoded({extended:false}));
console.log(`${__dirname}/public/products`)
//routes
app.use('/',routes);
//use morgan
app.use(morgan('dev'))
