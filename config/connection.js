const { connect, connection } = require('mongoose')

connect('mongodb://localhost/Social_Network',{
    useNewUrlParser: true,
    useUnifiedTopology: true,   
})

model.exports=connection;