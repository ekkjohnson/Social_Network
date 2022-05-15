const { connect, connection } = require('mongoose')

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/Social_Network'

connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,   
})

module.exports=connection;