const express = require  ('express');
const router = express.Router();

// Controller
const {
    renderFiltroForm,
    createNewFiltro,
    renderFiltro,
    renderFiltForm,
    updateFiltro,
    deleteFiltro,
    } = require("../Controllers/filtros");

// New Filtro
router.get("/filtro/add", renderFiltroForm,);

router.post("/Filtros/new-filtro", createNewFiltro);

// Mostrar Filtro
router.get("/filtro",   renderFiltro);
    

// Delete Filtro
router.delete("/filtro/delete/:id", deleteFiltro);

//Editar Filtro
router.get("/filtro/edit/:id", renderFiltForm);
router.put("/Filtros/edit-filtros/:id",updateFiltro);


//Buscar Onboarding



 module.exports = router;