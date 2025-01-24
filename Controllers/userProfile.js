const admin = require('../Config/FireBaseConfig');

const createUserProfile = async (userData) => {
    try {
        const db = admin.firestore();
        const userProfileRef = await db.collection('userProfile').add(userData);
        console.log('User profile created:', userData);
        return { success: true};
    } catch (error) {
        console.error('Error creating user profile:', error);
        return { success: false, error: 'An error occurred while creating user profile' };
    }
};

module.exports = { createUserProfile };