const datosCtrl = {};

// Models
const Unidad = require("../models/Unidades");

datosCtrl.renderUnidadForm = (req, res) => {
    res.render("Unidades/new-unidades");
  };

datosCtrl.createNewUni = async (req, res) => {
    const { NoUnidad , Placas , NoCircula, Verificacion, ValorFactura, Serie, Marca, SubMarca,
        Modelo, NoMotor, Poliza, Seguro, Vigencia, Beneficiario, Prestamo, Credito, Mensualidad,
        Plazo, Contrato, FormaPag, OBD2, Date } = req.body;
        const errors = [];
       if (!NoUnidad) 
       {
           errors.push({text: 'Por favor Inserta el No. de Unidad'});
       }
           
       if (errors.length > 0)
       {
       res.render('Unidades/new-unidad', {
       errors,NoUnidad
       });
       }   else {
           const NewUnidad = new Unidad ({ NoUnidad, Placas, NoCircula, Verificacion, ValorFactura, Serie, Marca, SubMarca,
           Modelo, NoMotor, Poliza, Seguro, Vigencia, Beneficiario, Prestamo, Credito, Mensualidad,
           Plazo, Contrato, FormaPag, OBD, Date });
           await NewUnidad.save();
           res.redirect('/unidades');
           }
 };

 datosCtrl.renderUnidad = async (req, res) => {
    await Unidad.find()
    .then(documentos => {
        const datos = {
            camioneta: documentos.map(documentos => {
                return {
                    _id: documentos._id,
                    NoUnidad: documentos.NoUnidad, 
                    Placas: documentos.Placas,
                    NoCircula: documentos.NoCircula, 
                    Verificacion: documentos.Verificacion, 
                    ValorFactura: documentos.ValorFactura, 
                    Serie: documentos.Serie, 
                    Marca: documentos.Marca, 
                    SubMarca: documentos.SubMarca,
                    Modelo: documentos.Modelo, 
                    NoMotor: documentos.NoMotor, 
                    Poliza: documentos.Poliza, 
                    Seguro: documentos.Seguro, 
                    Vigencia: documentos.Vigencia, 
                    Beneficiario: documentos.Beneficiario, 
                    Prestamo: documentos.Prestamo, 
                    Credito: documentos.Credito, 
                    Mensualidad: documentos.Mensualidad,
                    Plazo: documentos.Plazo, 
                    Contrato: documentos.Contrato, 
                    FormaPag: documentos.FormaPag,
                    OBD2: documentos.OBD2,
                    Date: documentos.Date
                }
            })
        }
    console.log(datos);
    res.render('Unidades/all-unidades', { camioneta: datos.camioneta })
    })
};

datosCtrl.renderUnidadtForm = async (req, res) => {
    const emplo = await Unidad.findById(req.params.id).lean();
    console.log(emplo);
    res.render("Unidades/edit-unidad", { emplo });
};

datosCtrl.updateUnidad = async (req, res) => {
    const { NoUnidad , Placas , NoCircula, Verificacion, ValorFactura, Serie, Marca, SubMarca,
        Modelo, NoMotor, Poliza, Seguro, Vigencia, Beneficiario, Prestamo, Credito, Mensualidad,
        Plazo, Contrato, FormaPag, OBD2, Date  }= req.body;
        console.log(req.body);
        

    await Unidad.findByIdAndUpdate(req.params.id, { NoUnidad , Placas , NoCircula, Verificacion, ValorFactura, Serie, Marca, SubMarca,
        Modelo, NoMotor, Poliza, Seguro, Vigencia, Beneficiario, Prestamo, Credito, Mensualidad,
        Plazo, Contrato, FormaPag, OBD2, Date }); 
        console.log(req.body);
        res.redirect("/unidades");
};

datosCtrl.deleteUnidad = async (req, res) => {
    await Unidad.findByIdAndDelete(req.params.id);
    res.redirect("/unidades");
};