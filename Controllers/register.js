const admin = require('../Config/FireBaseConfig');

async function registerUserWithEmailAndPassword(email, password) {
    try {
      const userRecord = await admin.auth().createUser({
        email: email,
        password: password
      });
      console.log(`Successfully created new user with ${email}`);
      return { success: true};
    } catch (error) {
      console.error('Error creating new user:', error);
      return { success: false, error: error };
    }
  }
  
module.exports = { registerUserWithEmailAndPassword };