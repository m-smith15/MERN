const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peopledb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("DB connection esatblished"))
    .catch(err=>console.log("there was an error", err))