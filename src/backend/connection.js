const mongoose = require('mongoose')

const connectDB = async (uri) => {
  console.log(`Connecting to database: ${uri}...`)
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  console.log('...database has been connected')
}

module.exports = connectDB
