/**
 * @swagger
 *   components:
 *     schemas:
 *       Airport:
 *         type: object
 *         properties:
 *           icao:
 *             type: string
 *           iata:
 *             type: string
 *           name:
 *             type: string
 *           city:
 *             type: string
 *           state:
 *             type: string
 *           country:
 *             type: string
 *           elevation:
 *             type: integer
 *           lat:
 *             type: float
 *           lon:
 *             type: float
 *           tz:
 *             type: string
 *         example:
 *           icao: "00AK"
 *           iata: ""
 *           name: "Lowell Field"
 *           city: "Anchor Point"
 *           state: "Alaska"
 *           country: "US"
 *           elevation: 450
 *           lat: 59.94919968
 *           lon: -151.695999146
 *           tz: "America/Anchorage"
 */

// @swagger
// post:
// summary: Create a new airport
// description: Add to the list of airports using this route
// requestBody:
//   content:
//     'application/json':
//       schema:
//         properties:
//           icao:
//             type: string
//           iata:
//             type: string
//           name:
//             type: string
//           city:
//             type: string
//           state:
//             type: string
//           country:
//             type: string
//           elevation:
//             type: integer
//           lat:
//             type: number
//             format: double
//           lon:
//             type: number
//             format: double
//           tz:
//             type: string
//         required:
//           - icao
//           - name
//           - city
// responses:
//   201:
//     description: Resource created successfully
//     content:
//       'application/json': {}
//   415:
//     description: Unsupported Media Type
//     content:
//       'application/json': {}
//   400:
//     description: Bad request
//     content:
//       'application/json': {}
//   409:
//     description: Conflict - an airport with that icao already exists
//     content:
//       'application/json': {}
// /airports/{icao}:
// parameters:
//   - in: path
//     name: icao
//     required: true
//     schema:
//       type: integer
//       minimum: 1
//     description: Specific airport
// get:
//   responses:
//         200:
//           description: a JSON object that represents an airport
//           content:
//             application/json:
//               schema:
//                 properties:
//                   icao:
//                     type: string
//                   iata:
//                     type: string
//                   name:
//                     type: string
//                   city:
//                     type: string
//                   state:
//                     type: string
//                   country:
//                     type: string
//                   elevation:
//                     type: integer
//                   lat:
//                     type: number
//                     format: double
//                   lon:
//                     type: number
//                     format: double
//                   tz:
//                     type: string

module.exports = class Airport {
    icao = ""
    iata = ""
    name = ""
    city = ""
    state = ""
    country = ""
    elevation = 0
    lat = 0.0
    lon = -0.0
    tz = ""

    constructor (data) {
        Object.assign(this, data)
    }
}