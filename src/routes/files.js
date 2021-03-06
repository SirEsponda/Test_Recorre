const express = require  ('express');
const router = express.Router();
const multer = require('multer');
const mimeTypes = require('mime-types');

const Docu = require('../models/Documentos');

const storage = multer.diskStorage({
    destination:'Uploads/DocumentosTrabajador',
    filename: function (req,file,cb)
    {
        cb('',file.originalname + "." + mimeTypes.extension(file.mimetype));
    }
})
const upload = multer ({
  storage: storage
}) 

router.get('/files/add', (req, res)=>{
    res.render('Files/new-files');
    });

router.post('/Files/new-files', upload.any('avatar'), async (req,res) =>{
 const { NoEmpleado, Date } = req.body;
 const errors = [];
   if (!NoEmpleado)
    {
        errors.push({text: 'Por favor Inserta el No. de Empleado'});
    }
    if (errors.length > 0)
    {
    res.render('Files/new-files', {
        errors,NoEmpleado
    });
} else {
    const NewDocu = new Docu ({ NoEmpleado , Date });
    await NewDocu.save();
    res.redirect('/files');
}
});

router.get('/files', async (req, res)=>{
    await Docu.find()
    .then(documentos => {
        const datos = {
            documento: documentos.map(documentos => {
                return {
                    NoEmpleado: documentos.NoEmpleado,
                    Date: documentos.Date
                }
            })
        }
    console.log(datos);
    res.render('Files/all-files', { documento: datos.documento })
    })
});






module.exports = router;