const mongoose = require('mongoose');
const Paciente = require('./models/paciente');
const LogActividad = require('./models/log_actividad');
const Habitacion = require('./models/habitacion');
const LogHabitacion = require('./models/log_habitacion');
// Pasar CSV a Json
const papa = require('papaparse');
const fs = require('fs');

async function newHabitacionLogHabitacion(id, body) {
    const habitacionId  = id;
    const newLogHabitacion = new LogHabitacion(body);
    const habitacion = await Habitacion.findById(habitacionId);
    newLogHabitacion.habitacionx = habitacion;
    await newLogHabitacion.save();
    habitacion.log_habitaciones.push(newLogHabitacion);
    await habitacion.save();
    //res.status(201).json(newLogHabitacion);
    return 'OK'
}
async function newLogActividad(idHabitacion,idPaciente, body)  {
    const  pacienteId  = idPaciente;
    const  habitacionId  = idHabitacion;
    const newLogActividad = new LogActividad(body);
    const paciente = await Paciente.findById(pacienteId);
    newLogActividad.pacientex = paciente;
    const habitacion = await Habitacion.findById(habitacionId);
    newLogActividad.habitacionx = habitacion;
    await newLogActividad.save();
    paciente.log_actividades.push(newLogActividad);
    habitacion.log_actividades.push(newLogActividad);
    await paciente.save();
    await habitacion.save();
    return 'OK'
}


async function main(path,numberFile) {
    mongoose.set('strictQuery',false);
    mongoose.set('strictPopulate',false);
    mongoose.Promise = global.Promise;
    await  mongoose.connect('mongodb://127.0.0.1:27017/backend_mongodb');

    const csv = fs.readFileSync(path,'utf-8');
    const data = papa.parse(csv,{
        header: true,
        skipEmptyLines: true
    })
    //console.log(data.data);
    let res='inicializando';
    switch (numberFile){
        case 1:
            res=await Paciente.insertMany(data.data);
            break;
        case 2:
            res=await Habitacion.insertMany(data.data);
            break;
        case 3:
            data.data.forEach(function (x){
                const body = {
                    '_id': x['_id'],
                    'statusx': x['statusx']
                }
                const response =  newHabitacionLogHabitacion(x['habitacionx'],body);
            })
            break;
        case 4:
            data.data.forEach(function (x){
                const body = {
                    'timestampx': x['timestampx'],
                    'actividad': x['actividad']
                }
                const response =  newLogActividad(x['habitacionx'],x['pacientex'],body);
            })
            break;
        default:
            res = 'no se cargo nada';
    }

    console.log(res);
}
//main("C:\\Users\\marvi\\Documents\\USAC\\VACACIONES DICIEMBRE 2022\\BASES 2\\LABORATORIO\\-BD2-Grupo_6\\Práctica 2\\Archivos de entrada\\Pacientes.csv",1);
//main("C:\\Users\\marvi\\Documents\\USAC\\VACACIONES DICIEMBRE 2022\\BASES 2\\LABORATORIO\\-BD2-Grupo_6\\Práctica 2\\Archivos de entrada\\Habitaciones.csv",2);
//main("C:\\Users\\marvi\\Documents\\USAC\\VACACIONES DICIEMBRE 2022\\BASES 2\\LABORATORIO\\-BD2-Grupo_6\\Práctica 2\\Archivos de entrada\\LogHabitacion.csv",3);
//main("C:\\Users\\marvi\\Documents\\USAC\\VACACIONES DICIEMBRE 2022\\BASES 2\\LABORATORIO\\-BD2-Grupo_6\\Práctica 2\\Archivos de entrada\\LogActividades1.csv",4);
//DE ACA PARA ABAJO NO ME CARGO!!
//main("C:\\Users\\marvi\\Documents\\USAC\\VACACIONES DICIEMBRE 2022\\BASES 2\\LABORATORIO\\-BD2-Grupo_6\\Práctica 2\\Archivos de entrada\\LogActividades1_1.csv",4);
//main("C:\\Users\\marvi\\Documents\\USAC\\VACACIONES DICIEMBRE 2022\\BASES 2\\LABORATORIO\\-BD2-Grupo_6\\Práctica 2\\Archivos de entrada\\LogActividades1_2.csv",4);
//main("C:\\Users\\marvi\\Documents\\USAC\\VACACIONES DICIEMBRE 2022\\BASES 2\\LABORATORIO\\-BD2-Grupo_6\\Práctica 2\\Archivos de entrada\\LogActividades2.csv",4);
//main("C:\\Users\\marvi\\Documents\\USAC\\VACACIONES DICIEMBRE 2022\\BASES 2\\LABORATORIO\\-BD2-Grupo_6\\Práctica 2\\Archivos de entrada\\LogActividades2_1.csv",4);