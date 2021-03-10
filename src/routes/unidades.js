const express = require  ('express');
const router = express.Router();

// Controller
const {
    renderUnidadForm,
    createNewUni,
    renderUnidad,
    renderUnidadtForm,
    updateUnidad,
    deleteUnidad,
    } = require("../Controllers/unidades");


// New Capacitacion
router.get("/unidades/add", renderUnidadForm);

router.post("/Unidades/new-unidad", createNewUni);

// Mostrar todos los empleados
router.get("/unidades",   renderUnidad);
    

// Delete Empleado
router.delete("/unidades/delete/:id", deleteUnidad);

//Editar un Empleado
router.get("/unidades/edit/:id", renderUnidadtForm);
router.put("/Unidades/edit-unidad/:id",updateUnidad);


//Buscar una Unidad



 module.exports = router;