const mongoose = require ('mongoose');


mongoose.connect('mongodb://localhost/test_recorre', {
      useNewUrlParser: true,
     useCreateIndex: true,
     useFindAndModify: false
})

.then(db => console.log('DB is connected'))
.catch(err => console.error(err));