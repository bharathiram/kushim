const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

/* app.get('/', (req, res) => {
  res.send("!")
}); */

app.use(express.static(__dirname + '/' + '../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => console.log('Server running on port 3000'));
let output = {
  table: [],
};
// application -------------------------------------------------------------
app.get('/', (req, res) => {
  console.log(__dirname);
  // load the single view file (angular will handle the page changes on the front-end)
  res.sendFile(path.join(__dirname, '/', '../public', 'index.html'));
});

// routes ======================================================================
// api ---------------------------------------------------------------------
// get all todos
app.get('/api/tasks', (req, res) => {
  fs.readFile('testfile.json', 'UTF-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.type('json').send(data);
    }
  });
});

// create todo and send back all todos after creation
app.post('/api/tasks', (req, res) => {
  fs.readFile('testfile.json', 'UTF-8', (err, data) => {
    if (err) {
      console.log("Error: " + err);
    } else {
      let output = {};
      let json = null;
      let write = false;
      output = JSON.parse(data);
      if (output && Object.keys(output).length === 0) {
        output = {
          table: [],
        };
      }
      if (!output.table.includes(req.body.content)) {
        output.table.push(req.body.content); //add some data
        write = true;
      }
      json = JSON.stringify(output); //convert it back to json  

      if (write) {
        fs.writeFile('testfile.json', json, 'UTF-8', (err) => err ? console.log(err) : null);
      }  
      res.type('json').send(json);
    }
  });
});

app.put('/api/tasks', function (req, res) {
  fs.readFile('testfile.json', 'UTF-8', (err, data) => {
    if (err) {
      console.log("Error: " + err);
    } else {
      let json = {};
      if (Object.keys(req.body.content).length !== 0) {
        json = req.body.content;
      }
      json = JSON.stringify(json);
      fs.writeFile('testfile.json', json, 'UTF-8', (err) => err ? console.log(err) : null);
      res.type('json').send(json);
    }
  });
});

app.delete('/api/tasks/:id', function (req, res) {
  fs.readFile('testfile.json', 'UTF-8', (err, data) => {
    if (err) {
      console.log("Error: " + err);
    } else {
      let output = {};
      let json = null;
      let write = false;
      const id = req.params.id;
      output = JSON.parse(data);
      if (output && Object.keys(output).length === 0) {
        output = {
          table: [],
        };
      }
      if (output.table.length !== 0
        && id < output.table.length
        && id >= 0
      ) {
        output.table.splice(id, 1);
        //output.table.push(req.body.content); //add some data
        write = true;
      }
      json = JSON.stringify(output); //convert it back to json  

      if (write) {
        fs.writeFile('testfile.json', json, 'UTF-8', (err) => err ? console.log(err) : null);
      }  
      res.type('json').send(json);
    }
  });
});