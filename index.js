const App = require('express');

const app = new App();

const port = 3000
const msg = 'Hello Kapis'

app.get('/', (req, res) => {
    res.send(msg)
})

app.listen(port, () => {
    console.log('to on papai')
})