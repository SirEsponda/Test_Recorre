const express = require  ('express');
const router = express.Router();

const Emple_Cap = require('../models/Capacitacion');



router.get('/capacitacion/add', (req, res)=>{
    res.render('Capacitacion/capacitacion-new');
});

router.post('/Capacitacion/capacitacion-new', async (req,res) =>{
    const { NoEmpleado , Calificacion , VideoBienvenida , Video5Bases , VideoEcosistema, Onboarding , 
    FechaCapacitacionCliente , FechaCapacitacionSupervisor , FechaTerminoCapacitacion, Date   } = req.body;
    const errors = [];

    if (!NoEmpleado)
{
    errors.push({text: 'Inserte el No. de Empleado'});
}
if (errors.length > 0)
{
    res.render('Capacitacion/capacitacion-new', {
        errors,NoEmpleado
    });
}else {
    const NewCapacitacion = new Emple_Cap ({ NoEmpleado , Calificacion , VideoBienvenida , Video5Bases , VideoEcosistema, Onboarding , 
        FechaCapacitacionCliente , FechaCapacitacionSupervisor , FechaTerminoCapacitacion, Date });
    await NewCapacitacion.save();
    res.redirect('/capacitacion');
}
});
router.get('/capacitacion', async (req, res)=>{
    await Emple_Cap.find()
    .then(documentos => {
        const datos = {
            empleado: documentos.map(documentos => {
                return {
                    NoEmpleado: documentos.NoEmpleado , 
                    Calificacion: documentos.Calificacion , 
                    VideoBienvenida: documentos.VideoBienvenida , 
                    Video5Bases: documentos.Video5Bases , 
                    VideoEcosistema: documentos.VideoEcosistema, 
                    Onboarding: documentos.Onboarding , 
                    FechaCapacitacionCliente: documentos.FechaCapacitacionCliente , 
                    FechaCapacitacionSupervisor: documentos.FechaCapacitacionSupervisor , 
                    FechaTerminoCapacitacion: documentos.FechaTerminoCapacitacion,
                    Date: documentos.Date
                }
            })
        }
    console.log(datos);
    res.render('Capacitacion/all-capacitacion', { empleado: datos.empleado })
    })
});



 module.exports = router;