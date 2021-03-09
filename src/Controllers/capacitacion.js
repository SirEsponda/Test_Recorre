const datosCtrl = {};

// Models
const Capacitacion = require("../models/Capacitacion");

datosCtrl.renderCapacitacionForm = (req, res) => {
    res.render("Capacitacion/capacitacion-new");
  };

datosCtrl.createNewCap = async (req, res) => {
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
        const NewCapacitacion = new Capacitacion ({ NoEmpleado , Calificacion , VideoBienvenida , Video5Bases , VideoEcosistema, Onboarding , 
            FechaCapacitacionCliente , FechaCapacitacionSupervisor , FechaTerminoCapacitacion, Date });
        await NewCapacitacion.save();
        res.redirect('/capacitacion');
    }
};

datosCtrl.renderCapacitacion = async (req, res) => {
    await Capacitacion.find()
    .then(documentos => {
        const datos = {
            empleado: documentos.map(documentos => {
                return {
                    _id: documentos._id,
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
};

datosCtrl.renderCapacitaciontForm = async (req, res) => {
    const emplo = await Capacitacion.findById(req.params.id).lean();
    console.log(emplo);
    res.render("Capacitacion/edit-capacitacion", { emplo });
};

datosCtrl.updateCapacitacion = async (req, res) => {
    const { Calificacion , VideoBienvenida , Video5Bases , VideoEcosistema, Onboarding , 
        FechaCapacitacionCliente , FechaCapacitacionSupervisor , FechaTerminoCapacitacion, Date  }= req.body;
        console.log(req.body);
        

    await Capacitacion.findByIdAndUpdate(req.params.id, { Calificacion , VideoBienvenida , Video5Bases , VideoEcosistema, Onboarding , 
        FechaCapacitacionCliente , FechaCapacitacionSupervisor , FechaTerminoCapacitacion, Date }); 
        console.log(req.body);
        res.redirect("/capacitacion");
};

datosCtrl.deleteCapacitacion = async (req, res) => {
    await Capacitacion.findByIdAndDelete(req.params.id);
    res.redirect("/capacitacion");
};

module.exports = datosCtrl;