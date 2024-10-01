import api from './src/createHafasAPIClient.js'
import html from './src/intro.js'
import docs from './src/docs.js'
import express from 'express'

const expApp = express()

expApp.use((req, res, next) => {
    if (req.headers.host === 'oebb.macistry.com') {
        return res.redirect(301, `https://v6.oebb.transport.rest${req.originalUrl}`)
    }
})

// Mount the API under the /api path
expApp.use('/api', api)
expApp.get('/', (req, res) => {
    res.send(html);
});
expApp.get('/docs', (req, res) => {
    res.send(docs);
});

expApp.listen(3000, (err) => {
    console.log('Listening on http://localhost:3000')
    if (err) console.error(err)
})