const datosCtrl = {};

// Models
const Filtro = require("../models/Filtros");

datosCtrl.renderFiltroForm = (req, res) => {
    res.render("Filtros/new-filtro");
  };

datosCtrl.createNewFiltro = async (req, res) => {
    const { NoEmpleado , PruebaManejo , Antidoping, BBuroLaboral, RBuroLaboral, Blacktrust, EstudioSocioEcnomico,
        Date } = req.body;
        const errors = [];
        if (!NoEmpleado) 
        {
            errors.push({text: 'Por favor Inserta el No. de Empleado'});
        }
            
        if (errors.length > 0)
        {
        res.render('Filtros/new-filtro', {
        errors, NoUnidad
        });
        }   else {
            const NewFiltro = new Filtro ({NoEmpleado , PruebaManejo , Antidoping, BBuroLaboral, RBuroLaboral, Blacktrust, EstudioSocioEcnomico,
                Date  });
            await NewFiltro.save();
            res.redirect('/filtro');
            }
  };

datosCtrl.renderFiltro= async (req, res) => {
    await Filtro.find()
    .then(documentos => {
        const datos = {
            fil: documentos.map(documentos => {
                return {
                    _id: documentos._id,
                    NoEmpleado: documentos.NoEmpleado, 
                    PruebaManejo: documentos.PruebaManejo, 
                    Antidoping: documentos.Antidoping,
                    BBuroLaboral: documentos.BBuroLaboral,
                    RBuroLaboral: documentos.RBuroLaboral,
                    Blacktrust: documentos.Blacktrust,
                    EstudioSocioEcnomico: documentos.EstudioSocioEcnomico,
                    Date: documentos.Date
                }
            })
        }
    console.log(datos);
    res.render('Filtros/all-filtros', { fil: datos.fil })
    })
};

datosCtrl.renderFiltForm = async (req, res) => {
    const emplo = await Filtro.findById(req.params.id).lean();
    console.log(emplo);
    res.render("Filtros/edit-filtros", { emplo });
};

datosCtrl.updateFiltro= async (req, res) => {
    const {PruebaManejo , Antidoping, BBuroLaboral, RBuroLaboral, Blacktrust, EstudioSocioEcnomico,
        Date   }= req.body;
        console.log(req.body);
        

    await Filtro.findByIdAndUpdate(req.params.id, {PruebaManejo , Antidoping, BBuroLaboral, RBuroLaboral, Blacktrust, EstudioSocioEcnomico,
        Date  }); 
        console.log(req.body);
        res.redirect("/filtro");
};

datosCtrl.deleteFiltro = async (req, res) => {
    await Filtro.findByIdAndDelete(req.params.id);
    res.redirect("/filtro");
};


module.exports = datosCtrl;