import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {registerController, 
    loginController, authController, AppointmentController,
    DeleteAppointmentController,
    AllUserAppointment
} from '../controllers/userCtrl.js';

const router = express.Router();

//Routes
router.post('/register', registerController);
router.post('/login', loginController);
//Auth || POST
router.post('/getUserData', authMiddleware, authController)

//Book Appointments
router.post('/book-appointment', AppointmentController)

//all apointment of user
router.get('/user-appointment/:id', AllUserAppointment)

//Delete
router.delete('/user-DLTappointment/:id', DeleteAppointmentController);


export default router;