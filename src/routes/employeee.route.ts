import { Router } from 'express';
import { get, add, deleteEmployee, updateEmployee, getSupervisor, getEmployeeById } from '@controller/employee.controller';

const router = Router();

router.get('/employee', get);
router.get('/employee/supervisor', getSupervisor);
router.get('/employee/:id', getEmployeeById);

router.post('/employee', add);

router.delete('/employee/:id', deleteEmployee);

router.patch('/employee/:id', updateEmployee);

export { router as employeeRoutes };