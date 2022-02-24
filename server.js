const app = require('./app');
const connect =require('./src/config/db')

app.listen(4000, async function () {
    connect()
    console.log("Listening to port 4000");
})