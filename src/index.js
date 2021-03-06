const express = require('express');
const path = require ('path');
const exphbs = require ('express-handlebars'); 
const methodOverride = require ('method-override');
const session = require ('express-session');



    

    //Initilizations
    const app= express();
    require('./database');

    //Settings
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'Layouts'), 
    partialsDir: path.join(app.get('views'), 'Partials'),
    extname:'.hbs' 
    }));

    app.set('view engine', '.hbs');


    //Middlewares
    app.use(express.urlencoded({extended: true}));
    app.use(methodOverride('_method'));
    app.use(express.json());
    app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
    }));

    //Global Variables



    //Routes
    app.use(require('./routes/index'));
    app.use(require('./routes/users'));
    app.use(require('./routes/datos'));
    app.use(require('./routes/capacitacion'));
    app.use(require('./routes/unidades'));
    app.use(require('./routes/files'));
    
    





    //Static Files
    app.use(express.static(path.join(__dirname, 'public')));



    //Server is listening
    app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
    });








 