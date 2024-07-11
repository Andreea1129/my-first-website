// import express from "express";
// import serverless from "serverless-http";
// import http from 'http';


//import backend from 'serverv2ewqeqwe.tsx'

// const app = express();


//   const [city,setCity] = useState("");
//   const [region,setRegion] = useState("");
//   const [country,setCountry] = useState("");
//   const [lat,setLat] = useState("");
//   const [lon,setLon] = useState("");
// Middleware pentru a permite cererile CORS de la o origine specifică


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://gray-welcome-swallow.app.genez.io');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   next();
// });


// class getLocation {1
//     constructor(setCity,setRegion,setCountry,setLat,setLon){

//     }
// }
// app.getLocation(() => {
//     const handleLocation =  () => {
//         fetch("http://localhost:8080/api/location")
//         .then((response) => response.json())
//         .then((data) => {
//             setCity(data.city);
//             setRegion(data.region);
//             setCountry(data.country);
//             setLat(data.lat);
//             setLon(data.lon);
//             console.log(data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//       };
// });


// app.get('/api/location', (req, res) => {
//   const url = 'http://ip-api.com/json/';
//   // Folosim modulul HTTP pentru a face o cerere GET la URL-ul specificat
//   http.get(url, (apiRes) => {
//     let data = '';

//     // Adunăm datele primite de la serviciul ip-api.com
//     apiRes.on('data', (chunk) => {
//       data += chunk;
//     });

//     // La finalul răspunsului, trimitem datele ca răspuns JSON către client
//     apiRes.on('end', () => {
//       try {
//         const locationData = JSON.parse(data);
//         res.json(locationData);
//       } catch (error) {
//         res.status(500).json({ error: 'A apărut o eroare în procesarea datelor' });
//       }
//     });
//   }).on('error', (err) => {
//     res.status(500).json({ error: 'A apărut o eroare în cererea către serviciul de locație' });
//   });
// });

// if (process.env.NODE_ENV === "dev") {
//   app.listen(8080, () => {
//     console.log("Server is running on port 8080. Check the app on http://localhost:8080/api/location");
//   });
// }

// export const handler = serverless(app);


import express from 'express';
import serverless from 'serverless-http';
import http from 'http';

const app = express();

// Middleware pentru CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://gray-welcome-swallow.app.genez.io');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// Endpoint pentru /api/location
app.get('/api/location', (req, res) => {
  const url = 'http://ip-api.com/json/';

  // Cerere GET către ip-api.com
  http.get(url, (apiRes) => {
    let data = '';

    // Colectăm datele primite
    apiRes.on('data', (chunk) => {
      data += chunk;
    });

    // La finalizarea răspunsului, trimitem datele către client ca JSON
    apiRes.on('end', () => {
      try {
        const locationData = JSON.parse(data);
        res.json(locationData);
      } catch (error) {
        res.status(500).json({ error: 'A apărut o eroare în procesarea datelor' });
      }
    });
  }).on('error', (err) => {
    res.status(500).json({ error: 'A apărut o eroare în cererea către serviciul de locație' });
  });
});

// Exportăm aplicația express ca o funcție serverless
export const handler = serverless(app);
