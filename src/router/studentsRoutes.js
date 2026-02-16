import { Router } from 'express';
import {
	getStudents,
	getStudentById,
  createStudent,
  deleteStudent,
  updateStudent
} from '../controllers/studentsController.js';

import { createStudentSchema } from '../validations/studentsValidation.js';
import { celebrate } from 'celebrate';
import { studentIdParamSchema } from '../validations/studentsValidation.js';
import { updateStudentSchema } from '../validations/studentsValidation.js';

const router = Router();

router.get('/students', getStudents);
router.get('/students/:studentId', celebrate(studentIdParamSchema), getStudentById);
router.post('/students', celebrate(createStudentSchema) , createStudent);
router.delete('/students/:studentId', celebrate(studentIdParamSchema), deleteStudent);
router.patch('/students/:studentId', celebrate(updateStudentSchema), updateStudent);

export default router;
