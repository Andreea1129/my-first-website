import express, { response } from "express";
// import serverless from "serverless-http";
// import http from 'http';
import axios from 'axios';

//const appserver = express();
// appserver.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://gray-welcome-swallow.app.genez.io');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   next();
// });
/**
 * This class represents a hello world server that can be deployed on genezio infrastructure
 * using "genezio deploy" command or tested locally using "genezio local".
 */


// const app = express();
class backendMethod{

  constructor (){
var apiUrl = 'http://ip-api.com/json/';
  async function locationIP() {
    try {
       const response = await axios.get(apiUrl);
       // Handle the response
    } catch (error) {
       // Handle the error
    }
    return response;
  /**
  * Method that returns a "Hello world" message.
  */}
 

  /**
   * Method that returns a personalized "Hello world" message.
   */


// Make a GET request

}
}

export { backendMethod }
