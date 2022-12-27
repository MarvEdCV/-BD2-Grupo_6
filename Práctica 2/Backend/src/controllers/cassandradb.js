const client  = require("../database/cassandra")


module.exports = {
    init: async(req, res, next) => {
        res.status(200).json({success:'Cassandra API'});
    },

    consulta1: async(req, res, next) => {
        try {
            //a
            const queryA = "SELECT COUNT(*) FROM prueba1.paciente WHERE edad < 18  ALLOW FILTERING;"
            const resultA = await client.execute(queryA, { prepare: true });
            const dataA = resultA.first().count.low
            //b
            const queryB = "SELECT COUNT(*) FROM prueba1.paciente WHERE edad >= 18 AND edad <= 64  ALLOW FILTERING;"
            const resultB = await client.execute(queryB, { prepare: true });
            const dataB = resultB.first().count.low
            //c
            const queryC = "SELECT COUNT(*) FROM prueba1.paciente WHERE edad > 64 ALLOW FILTERING;"
            const resultC = await client.execute(queryC, { prepare: true });
            const dataC = resultC.first().count.low

            let data = [
                {
                    "Pediátrico":dataA,
                    "Mediana":dataB,
                    "Geriátrico":dataC
                }
            ]
            res.status(200).json({
                group:6,
                query:1,
                data: data,
                total:dataA + dataB + dataC
            });
        } catch (error) {
            res.status(501).json({message:error.message});
        }
    },


    consulta2: async(req, res, next) =>{
        try {
            const query = `SELECT * FROM logactividad2  ALLOW FILTERING;`
            const result = await client.execute(query, "",{ prepare: true, fetchSize: 1000000});
            
            const almacen = storeData2(result)
            const Top = sortMy10(almacen, "DESC", -1)

            res.status(200).json({
                group:6,
                query:2,
                data: Top
            });
        } catch (error) {
            res.status(501).json({message:error.message});
        }
    },


    consulta3: async(req, res, next) =>{
        try {

            const query = `SELECT COUNT(*) FROM prueba1.paciente WHERE genero = 'Femenino' ALLOW FILTERING;`
            const result = await client.execute(query, { prepare: true });
            const dats = parseInt(result.first().count, 10)
            const queryM = `SELECT COUNT(*) FROM prueba1.paciente WHERE genero = 'Masculino' ALLOW FILTERING;`
            const resultM = await client.execute(queryM, { prepare: true });
            const datsM = parseInt(resultM.first().count, 10)
            const queryO = `SELECT COUNT(*) FROM prueba1.paciente WHERE genero = 'Otro' ALLOW FILTERING;`
            const resultO = await client.execute(queryO, { prepare: true });
            const datsO = parseInt(resultO.first().count, 10)


            let data = [
                {
                    "Femenino": dats,
                    "Masculino": datsM,
                    "Otro":datsO
                }
            ]

            res.status(200).json({
                group:6,
                query:3,
                data: data,
                total:dats + datsM + datsO
            });
        } catch (error) {
            res.status(501).json({message:error.message});
        }
    },


    consulta4: async(req, res, next) =>{
        try {

            const query = `SELECT edad FROM paciente ALLOW FILTERING;`
            const result = await client.execute(query, "",{ prepare: true, fetchSize: 1000000});

            const almacen = storeData(result)
            const Top5 = sortMy(almacen, "DESC", 5)

            res.status(200).json({
                group:6,
                query:4,
                data: Top5
            });
        } catch (error) {
            res.status(501).json({message:error.message});
        }
    },


    consulta5: async(req, res, next) =>{
        try {

            const query = `SELECT edad FROM paciente ALLOW FILTERING;`
            const result = await client.execute(query, "",{ prepare: true, fetchSize: 1000000});

            const almacen = storeData(result)
            const Top5 = sortMy(almacen, "ASC", 5)

            res.status(200).json({
                group:6,
                query:5,
                data: Top5
            });

        } catch (error) {
            res.status(501).json({message:error.message});
        }
    },


    consulta6: async(req, res, next) =>{
        try {

            const query = `SELECT idhabitacion, habitacion FROM logactividad2  ALLOW FILTERING;`
            const result = await client.execute(query, "",{ prepare: true, fetchSize: 1000000});

            const almacen = storeData6(result)
            const Top5 = sortMy(almacen, "DESC", 5)

            res.status(200).json({
                group:6,
                query:6,
                data: Top5
            });

        } catch (error) {
            res.status(501).json({message:error.message});
        }
    },


    consulta7: async(req, res, next) =>{
        try {

            const query = `SELECT idhabitacion, habitacion FROM logactividad2  ALLOW FILTERING;`
            const result = await client.execute(query, "",{ prepare: true, fetchSize: 1000000});

            const almacen = storeData6(result)
            const Top5 = sortMy(almacen, "ASC", 5)

            res.status(200).json({
                group:6,
                query:7,
                data: Top5
            });

        } catch (error) {
            res.status(501).json({message:error.message});
        }
    },


    consulta8: async(req, res, next) =>{
        try {

            const query = `SELECT * FROM "logHabitacion"  ALLOW FILTERING;`
            const result = await client.execute(query, "",{ prepare: true, fetchSize: 1000000});

            const almacen = storeData8(result)
            const Top5 = sortMy(almacen, "DESC", 5)

            res.status(200).json({
                group:6,
                query:8,
                data: Top5
            });
        } catch (error) {
            res.status(501).json({message:error.message});
        }
    },


    consulta9: async(req, res, next) =>{
        try {

            const query = `SELECT * FROM "logHabitacion"  ALLOW FILTERING;`
            const result = await client.execute(query, "",{ prepare: true, fetchSize: 1000000});

            const almacen = storeData8(result)
            const Top5 = sortMy(almacen, "ASC", 5)

            res.status(200).json({
                group:6,
                query:9,
                data: Top5
            });
        } catch (error) {
            res.status(501).json({message:error.message});
        }
    },


    consulta10: async(req, res, next) =>{
        try {

            const query = `SELECT * FROM logactividad2  ALLOW FILTERING;`
            const result = await client.execute(query, "",{ prepare: true, fetchSize: 1000000});
            
            const almacen = storeData10(result)
            const Top = sortMy10(almacen, "DESC", -1)

            res.status(200).json({
                group:6,
                query:10,
                data: Top
            });
        } catch (error) {
            res.status(501).json({message:error.message});
        }
    },
}

function storeData(result){
    let almacen = []
    result.rows.forEach(element => {
        if (almacen.length == 0) {
            almacen.push({
                edad:element.edad,
                repetido: 1
            });
        }else{
            let posicion = buscarIndice(almacen, element.edad)
            if (posicion != -1) {
                almacen[posicion].repetido += 1
            }else{
                almacen.push({
                    edad:element.edad,
                    repetido: 1
                })
            }
        }
        
    });
    return almacen
}

function buscarIndice(array, flag) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.edad == flag) {
            return index
        }
    }
    return -1
}

function buscarIndice6(array, flag) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.habitacion == flag) {
            return index
        }
    }
    return -1
}

function buscarIndice8(array, flag) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.idHabitacion == flag) {
            return index
        }
    }
    return -1
}

function buscarIndice10(array, flag) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.Fecha === flag) {
            return index
        }
    }
    return -1
}

function condicionParaOrdenar(personaA, personaB) {
    return personaB.repetido - personaA.repetido;
}

function condicionParaOrdenar10(personaA, personaB) {
    return personaB.pacientes - personaA.pacientes;
}

function sortMy(array, type, TOP) {
    const ordenado = array.sort(condicionParaOrdenar)
    if (type == "ASC") {
        return ordenado.slice(ordenado.length - TOP, ordenado.length)
    }else{
        return ordenado.slice(0,TOP)
    }
}

function sortMy10(array, type, TOP) {
    const ordenado = array.sort(condicionParaOrdenar10)
    if (type == "ASC") {
        return ordenado.slice(ordenado.length - TOP, ordenado.length)
    }else{
        if (TOP == -1) {
            return ordenado.slice(0,ordenado.length)
        }else{
            return ordenado.slice(0,5)
        }
    }
}

function storeData2(result){
    let almacen = []
    result.rows.forEach(element => {
        if (almacen.length == 0) {
            almacen.push({
                habitacion:element.habitacion,
                pacientes: 1
            });
        }else{
            let posicion = buscarIndice6(almacen, element.habitacion)
            if (posicion != -1) {
                almacen[posicion].pacientes += 1
            }else{
                almacen.push({
                    habitacion:element.habitacion,
                    pacientes: 1
                })
            }
        }
    });
    return almacen
}

function storeData6(result){
    let almacen = []
    result.rows.forEach(element => {
        if (almacen.length == 0) {
            almacen.push({
                habitacion:element.habitacion,
                repetido: 1
            });
        }else{
            let posicion = buscarIndice6(almacen, element.habitacion)
            if (posicion != -1) {
                almacen[posicion].repetido += 1
            }else{
                almacen.push({
                    habitacion:element.habitacion,
                    repetido: 1
                })
            }
        }
    });
    return almacen
}

function storeData8(result){
    let almacen = []
    result.rows.forEach(element => {
        if (almacen.length == 0) {
            if (element.statusx == "Inicia limpieza.") {
                almacen.push({
                    idHabitacion:element.idHabitacion,
                    status:element.statusx,
                    repetido: 1
                });
            }
        }else{
            if (element.statusx == "Inicia limpieza.") {
                let posicion = buscarIndice8(almacen, element.idHabitacion)
                if (posicion != -1) {
                    almacen[posicion].repetido += 1
                }else{
                    almacen.push({
                        idHabitacion:element.idHabitacion,
                        status:element.statusx,
                        repetido: 1
                    });
                }
            }
        }
    });
    return almacen
}

function storeData10(result){
    let almacen = []
    result.rows.forEach(element => {
        if (almacen.length == 0) {
            almacen.push({
                Fecha:element.timestamp,
                pacientes: 1
            });
        }else{
            let posicion = buscarIndice10(almacen, element.timestamp)
            if (posicion != -1) {
                almacen[posicion].pacientes += 1
            }else{
                almacen.push({
                    Fecha:element.timestamp,
                    pacientes: 1
                })
            }
        }
    });
    return almacen
}