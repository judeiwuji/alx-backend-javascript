import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();
const appController = new AppController();
const studentController = new StudentsController();

router.get('/', appController.getHomepage);
router.get('/students', studentController.getAllStudents);
router.get('/students/:major', studentController.getAllStudentsByMajor);
export default router;
