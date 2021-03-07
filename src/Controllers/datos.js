const datosCtrl = {};

// Models
const Emple = require("../models/Employee");

datosCtrl.renderEmployeeForm = (req, res) => {
    res.render("Empleados/new-employee");
  };

datosCtrl.createNewEmployee = async (req, res) => {
    const { NoEmpleado , Activo, Nombre, PrimerApellido, SegundoApellido, Email, FechaEntrevista,
        Direccion, Colonia, Municipio, CP, Estado, Pais, FechaNacimiento, EstadoNacimiento, Nacionalidad,
        Genero, EstadoCivil, NivelEstudios, CelularP, IMEI, CEDIS, Puesto, IMSS, CURP, RFC, Constancias,
        Retencion_Info, Comprobante_Estudios, Date  } = req.body;
        const errors = [];
        if (!NoEmpleado)
        {
            errors.push({text: 'Por favor Inserta el No. de Empleado'});
        }
        if (!Nombre, !PrimerApellido, !SegundoApellido)
        {
            errors.push({text: 'Por favor Inserta el Nombre Completo del Empleado'});
        }
        if (errors.length > 0)
        {
            res.render('Empleados/new-employee', {
                errors,NoEmpleado,Nombre,PrimerApellido,SegundoApellido
            });
        } else {
            const NewEmployee = new Emple ({ NoEmpleado , Activo, Nombre, 
            PrimerApellido, SegundoApellido, Email, FechaEntrevista,
            Direccion, Colonia, Municipio, CP, Estado, Pais, FechaNacimiento, EstadoNacimiento, Nacionalidad,
            Genero, EstadoCivil, NivelEstudios, CelularP, IMEI, CEDIS, Puesto, IMSS, CURP, RFC, Constancias,
            Retencion_Info, Comprobante_Estudios, Date });
            await NewEmployee.save();
            res.redirect('/datos');
        }
        }; 
        
datosCtrl.renderEmployee = async (req, res) => {
    await Emple.find()
    .then(documentos => {
        const datos = {
            empleado: documentos.map(documentos => {
                return {
                    _id: documentos._id,
                    NoEmpleado: documentos.NoEmpleado,
                    Activo: documentos.Activo,
                    Nombre: documentos.Nombre,
                    PrimerApellido: documentos.PrimerApellido,
                    SegundoApellido: documentos.SegundoApellido,
                    Email: documentos.Email,
                    FechaEntrevista: documentos.FechaEntrevista,
                    Direccion: documentos.Direccion,
                    Colonia: documentos.Colonia,
                    Municipio: documentos.Municipio,
                    CP: documentos.CP,
                    Estado: documentos.Estado,
                    Pais: documentos.Pais,
                    FechaNacimiento: documentos.FechaNacimiento, 
                    EstadoNacimiento: documentos.EstadoNacimiento, 
                    Nacionalidad: documentos.Nacionalidad,
                    Genero: documentos.Genero, 
                    EstadoCivil: documentos.EstadoCivil, 
                    NivelEstudios: documentos.NivelEstudios, 
                    CelularP: documentos.CelularP, 
                    IMEI: documentos.IMEI, 
                    CEDIS: documentos.CEDIS, 
                    Puesto: documentos.Puesto, 
                    IMSS: documentos.IMSS, 
                    CURP: documentos.CURP, 
                    RFC: documentos.RFC, 
                    Constancias: documentos.Constancias,
                    Retencion_Info: documentos.Retencion_Info, 
                    Comprobante_Estudios: documentos.Comprobante_Estudios,
                    Date: documentos.Date
                }
            })
        }
    console.log(datos);
    res.render('Empleados/all_employees', { empleado: datos.empleado })
    })
};

datosCtrl.renderEditForm = async (req, res) => {
    const emplo = await Emple.findById(req.params.id).lean();
    console.log(emplo);
    res.render("Empleados/edit-employee", { emplo });
};

datosCtrl.updateEmployee = async (req, res) => {
    const { Activo, Nombre, PrimerApellido, SegundoApellido, Email, FechaEntrevista,
        Direccion, Colonia, Municipio, CP, Estado, Pais, FechaNacimiento, EstadoNacimiento, Nacionalidad,
        Genero, EstadoCivil, NivelEstudios, CelularP, IMEI, CEDIS, Puesto, IMSS, CURP, RFC, Constancias,
        Retencion_Info, Comprobante_Estudios, Date  }= req.body;
        console.log(req.body);
        

    await Emple.findByIdAndUpdate(req.params.id, { Activo, Nombre, PrimerApellido, SegundoApellido, Email, FechaEntrevista,
        Direccion, Colonia, Municipio, CP, Estado, Pais, FechaNacimiento, EstadoNacimiento, Nacionalidad,
        Genero, EstadoCivil, NivelEstudios, CelularP, IMEI, CEDIS, Puesto, IMSS, CURP, RFC, Constancias,
        Retencion_Info, Comprobante_Estudios, Date}); 
        console.log(req.body);
        res.redirect("/datos");
};

datosCtrl.deleteEmployee = async (req, res) => {
    await Emple.findByIdAndDelete(req.params.id);
    res.redirect("/datos");
};

module.exports = datosCtrl;


