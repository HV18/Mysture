//MAIN IMPORTS
const express = require('express');
const admin = require('./Config/FireBaseConfig');
const router = express.Router();
const path = require("path");

//ModuleImports
const { registerUserWithEmailAndPassword } = require("./Controllers/register");
const { createUserProfile } = require('./Controllers/userProfile');
// const {loginUser} = require('./Controllers/auth');


//routes

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/Frontend/pages/home.html"));
});

router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname + "/Frontend/pages/home.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/Frontend/pages/about.html"));
});

router.get("/packages", (req, res) => {
  res.sendFile(path.join(__dirname + "/Frontend/pages/package.html"));
});

router.get("/book", async (req, res) => {
  res.sendFile(path.join(__dirname + "/Frontend/pages/book.html"));
});

router.get("/login", async (req, res) => {
  res.sendFile(path.join(__dirname + "/Frontend/pages/login.html"));
});

router.get("/register", async (req, res) => {
  res.sendFile(path.join(__dirname + "/Frontend/pages/register.html"));
});

router.post('/login', async (req, res) => {
  const existingUser = req.body;
  console.log(`Checkpoint: Received login Data from POST request /login/${existingUser}`);
  res.status(200).send({ message: 'User logged in successfully'});
});

router.post("/register", async (req, res) => {
  const newUser = req.body;
  console.log(`Checkpoint: Received Form Data from POST request /register/${newUser.username}`);
  try {

    const registerResult = await registerUserWithEmailAndPassword(newUser.email, newUser.password);

    if (registerResult.success) {
      const user_name = newUser.username;
      const email_address = newUser.email;
      const phone = newUser.phone;
      const occupation = newUser.occupation;
      const profileResult = await createUserProfile({ user_name, email_address, phone, occupation });

      if (profileResult.success) {
        res.status(200).send({ successMessage: 'User registered and profile created successfully' });
      } else {
        res.status(500).send({ error: profileResult.error });
      }
    }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send({ error: 'An error occurred while registering user' });
  }
});


router.get("/dashboard",async (req,res) =>{
  res.send({message:"WELCOME TO DASHBOARD"});
});

module.exports = router;
