const express = require('express');
const bodyParser = require('body-parser');
// const db = require('../data');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

// need to connect to firebase

app.get('/users', (req, res) => {
  db.getAll((err, users) => { // need to set to firebase as db
    if (err) {
      console.log('Server side error in query to get all users', err);
      res.status(500).send(err);
    } else { 
      res.json(users);
    }
  });
});

app.get('/users/:user/location', (req, res) => {
  db.getLocation((err, user) => {
    if (err) {
      console.log('Server side error in query to get user location', err);
      res.status(500).send(err);
    } else {
      res.json(user.location);
    }
  });
});

app.get('/users/:user/safety', (req, res) => {
  db.getSafety((err, user) => {
    if (err) { 
      console.log('Server side error in query to get user safety', err);
      res.status(500).send(err);
    } else { 
      res.json(user.safety);
    }
  });
});


app.get('/evacuation', (req, res) => {
  db.getAllSafeLocations((err, results) => {
    if (err) {
      console.log('Server side error in query to get all evacuation locations', err);
      res.status(500).send(err);
    } else  {
      res.json(results);
    }
  });
});

app.get('/users/:user/:responder', (req, res) => {
  db.getResponderStatus((err, user) => {
    if (err) {
      console.log('Server side error in query to get responder status', err);
      res.status(500).send(err);
    } else {
      res.json(user.responder);
    }
  });
});

app.put('/users/:user/:safety', (req, res) => {
  const userSafety = req.params.safety;
  db.toggleSafety(userSafety, (err, results) => {
    if (err) {
      console.log('Server side error in updating user saftey', err)
      res.status(500).send(err);
    } else {
      console.log('Server successfully updated safety status')
      res.status(200);
    }
  });
});

app.post('/users', (req, res) => {
  const name = req.body;
  db.addUser(name, (err, user) => {
    if (err) {
      console.log('Server side error in query to add to users collection', err);
      res.status(500).send(err);
    } else {
      res.status(201);
    }
  });
});


// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

