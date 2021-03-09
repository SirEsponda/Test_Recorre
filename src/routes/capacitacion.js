const express = require  ('express');
const router = express.Router();

// Controller
const {
    renderCapacitacionForm,
    createNewCap,
    renderCapacitacion,
    renderCapacitaciontForm,
    updateCapacitacion,
    deleteCapacitacion,
    } = require("../Controllers/capacitacion");


// New Capacitacion
router.get("/capacitacion/add", renderCapacitacionForm);

router.post("/Capacitacion/capacitacion-new", createNewCap);

// Mostrar todos los empleados
router.get("/capacitacion",   renderCapacitacion);
    

// Delete Empleado
router.delete("/capacitacion/delete/:id", deleteCapacitacion);

//Editar un Empleado
router.get("/capacitacion/edit/:id", renderCapacitaciontForm);
router.put("/Capacitacion/edit-capacitacion/:id",updateCapacitacion);


//Buscar una Capacitacion



 module.exports = router;