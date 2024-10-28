const connect = require('../connect/connect');

const getAllTelefones = (callback) => {
    connect.query('SELECT * FROM telefone', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

const getTelefonesById = (id, callback) => {
    connect.query('SELECT * FROM telefone WHERE telefone_id = ?', [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, results[0]);  
    });
};

const createTelefones = (data, callback) => {
    connect.query('INSERT INTO telefone SET ?', data, (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, ...data });  
    });
};

const updateTelefones = (id, data, callback) => {
    connect.query('UPDATE telefone SET ? WHERE telefone_id = ?', [data, id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Telefone atualizado com sucesso' });
    });
};

const deleteTelefones = (id, callback) => {
    connect.query('DELETE FROM telefone WHERE telefone_id = ?', [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Telefone deletado com sucesso' });
    });
};

module.exports = {
    getAllTelefones,
    getTelefonesById,
    createTelefones,
    updateTelefones,
    deleteTelefones
};