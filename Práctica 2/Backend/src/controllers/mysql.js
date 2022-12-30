const conn = require("../database/mysql");

module.exports = {

    consulta1: async (req, res, next) => {
        conn.query('CALL consulta_1()',function (err,rows){
            res.status(200).json(rows[0]);
        });
    },

    consulta2: async (req, res, next) => {
        conn.query('CALL consulta_2()',function (err,rows){
            res.status(200).json(rows[0]);
        });
    },
    consulta3: async (req, res, next) => {
        conn.query('CALL consulta_3()',function (err,rows){
            res.status(200).json(rows[0]);
        });
    },
    consulta4: async (req, res, next) => {
        conn.query('CALL consulta_4()',function (err,rows){
            res.status(200).json(rows[0]);
        });
    },
    consulta5: async (req, res, next) => {
        conn.query('CALL consulta_5()',function (err,rows){
            res.status(200).json(rows[0]);
        });
    },
    consulta6: async (req, res, next) => {
        conn.query('CALL consulta_6()',function (err,rows){
            res.status(200).json(rows[0]);
        });
    },
    consulta7: async (req, res, next) => {
        conn.query('CALL consulta_7()',function (err,rows){
            res.status(200).json(rows[0]);
        });
    },
    consulta8: async (req, res, next) => {
        conn.query('CALL consulta_8()',function (err,rows){
            res.status(200).json(rows[0]);
        });
    },
    consulta9: async (req, res, next) => {
        conn.query('CALL consulta_9()',function (err,rows){
            res.status(200).json(rows[0]);
        });
    }


}
