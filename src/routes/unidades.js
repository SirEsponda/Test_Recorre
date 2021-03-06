const express = require  ('express');
const router = express.Router();

const Unidad = require('../models/Unidades');

router.get('/unidades/add', (req, res)=>{
    res.render('Unidades/new-unidad');
});

router.post('/Unidades/new-unidad', async (req,res) =>{
const { NoUnidad , Placas , NoCircula, Verificacion, ValorFactura, Serie, Marca, SubMarca,
 Modelo, NoMotor, Poliza, Seguro, Vigencia, Beneficiario, Prestamo, Credito, Mensualidad,
 Plazo, Contrato, FormaPag, OBD, Date } = req.body;
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
});
router.get('/unidades', async (req, res)=>{
    await Unidad.find()
    .then(documentos => {
        const datos = {
            camioneta: documentos.map(documentos => {
                return {
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
                    OBD: documentos.OBD,
                    Date: documentos.Date
                }
            })
        }
    console.log(datos);
    res.render('Unidades/all-unidades', { camioneta: datos.camioneta })
    })
});

module.exports = router;