import express from 'express';
import bodyParser from 'body-parser';
import fs from "fs";
import { filterImageFromURL, deleteLocalFiles } from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Init the Express application

  var path = require('path');
  const fs = require('fs');

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  
  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", async (req: any, res: any) => {
    res.send("try GET /filteredimage?image_url={{}}")
  });

  app.get("/filteredimage",
    async (req: any, res: any) => {
      let { image_Url } = req.query;
      // check Filename is valid
      if (!image_Url) {
        return res.status(422).send({ message: 'Valid Image file url is required' });
      }

      if (image_Url) {
        new Promise(async resolve => {

          // respnse return from filter Image URL
          let fileName =  await filterImageFromURL(image_Url);

          
          let __fileName = fileName.substring(fileName.lastIndexOf('/')+1)        
          var options = { root: path.join(__dirname,"util", "tmp") };          
       
          res.sendFile(__fileName, options, function (err: any) {
            if (err) {
              res.send(err);
            }
            else {
             res.on('finish', async () => deleteLocalFiles([__fileName]));
            }
          });
        });

      }




    });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
