const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const airports = require('./airports.json')
const YAML = require('yamljs')
const docs = YAML.load('./airports-config.yaml')
const swaggerDocs = require('swagger-jsdoc')({
    swaggerDefinition: docs,
    apis: ['./server.js']
})


app.get('/airports', (req, res) => {
    res.send(airports)
})

/**
* @swagger
* post:
*   summary: Create a new airport
*   description: Add to the list of airports using this route
*   requestBody:
*     content:
*       'application/json':
*         schema:
*           properties:
*             icao:
*               type: string
*               iata:
*                 type: string
*               name:
*                type: string
*               city:
*                 type: string
*               state:
*                type: string
*               country:
*                 type: string
*               elevation:
*                type: integer
*               lat:
*                 type: number
*                 format: double
*              lon:
*                 type: number
*                 format: double
*              tz:
*                 type: string
*             required:
*              - icao
*               - name
*               - city
*   responses:
*     201:
*       description: Resource created successfully
*       content:
*         'application/json': {}
*     415:
*       description: Unsupported Media Type
*       content:
*         'application/json': {}
*     400:
*       description: Bad request
*       content:
*         'application/json': {}
*     409:
*       description: Conflict - an airport with that icao already exists
*       content:
*         'application/json': {}
*/


app.post('/airports', (req,res) => {

})


/**
* @swagger
*   /airports:
*     get:
*       summary: Returns a list of all the airports
*       responses:
*         200:
*           description: an array of JSON objects that represent each airport
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*                   properties:
*                     icao:
*                       type: string
*                     iata:
*                       type: string
*                     name:
*                       type: string
*                     city:
*                       type: string
*                     state:
*                       type: string
*                     country:
*                       type: string
*                     elevation:
*                       type: integer
*                     lat:
*                       type: number
*                       format: double
*                     lon:
*                       type: number
*                       format: double
*                     tz:
*                       type: string
*   /airports/{icao}:
*       parameters:
*         - in: path
*           name: icao
*           required: true
*           schema:
*               type: integer
*               minimum: 1
*           description: Specific airport
 */



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { explorer: true }))

app.listen(3000, () => console.log("Airport API ready. Documents at http://localhost:3000/api-docs"))