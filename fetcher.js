const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

const downloader = (url, path) => {

  request(url, (error, response, body) => {
    if (error) {
      throw error;
    }
    
    fs.writeFile(path, body, (error) => {
      if (error) {
        console.error(error);
        return;
      }
      const stats = fs.statSync(path);
      console.log(body.length);
    });

  });

};
downloader(url, path);
