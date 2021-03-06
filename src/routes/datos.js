const express = require  ('express');
const router = express.Router();

const Emple = require('../models/Employee');

// Controller
const {
    renderEditForm,
    updateEmployee,
    deleteEmployee,
    renderEmployeeForm,
    createNewEmployee,
    renderEmployee
    } = require("../Controllers/datos");



// New Employee
router.get("/datos/add", renderEmployeeForm);

router.post("/Empleados/new-employee", createNewEmployee);

// Mostrar todos los empleados
router.get("/datos", renderEmployee);
    

// Delete Empleado
router.delete("/datos/delete/:id", deleteEmployee);

//Editar un Empleado
router.get("/datos/edit/:id", renderEditForm);
router.put("/Empleados/edit-employee/:id",updateEmployee);


//Buscar un Empleado



 module.exports = router;