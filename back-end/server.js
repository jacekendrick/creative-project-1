const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/home-base', {
  useNewUrlParser: true
});

// Create a scheme for items in the museum: a title and a path to an image.
const signupsSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   email: String,
   hometown: String,
   date: String
});

const familySchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  relationship: String,
  age: String
});


// Create a model for signups
const Signups = mongoose.model('signups', signupsSchema);

// Create a model for family members
const FamilyMembers = mongoose.model('familymembers', familySchema);

app.get('/api/signup', async (req, res) => {
    try {
      let signups = await Signups.find();
      res.send(signups);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
});

app.post('/api/signup', async (req, res) => {
    const signup = new Signups({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      hometown: req.body.hometown,
      date: req.body.date
    });
    try {
      await signup.save();
      res.send(signup);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });


  //FamilyMember requests
  app.get('/api/familymembers', async (req, res) => {
    try {
      let familymembers = await FamilyMembers.find();
      res.send(familymembers);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
});

  app.post('/api/familymembers', async (req, res) => {
    const familymember = new FamilyMembers({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      relationship: req.body.relationship,
      age: req.body.age,
    });
    try {
      await familymember.save();
      res.send(familymember);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.delete('/api/familymembers/:id', async (req, res) => {
    try {
      await FamilyMembers.deleteOne({
        _id: req.params.id
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })

  app.put('/api/familymembers/:id', async (req, res) => {
    try {
      let memberToChange = await FamilyMembers.findOne({
        _id: req.params.id
      })
      memberToChange.age = req.body.age;
      memberToChange.save();
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })

app.listen(3000, () => console.log('Server listening on port 3000!'));