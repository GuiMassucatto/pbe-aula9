const telefone = require('../dados/telefoneModel');

exports.listarTelefones = (req, res) => {
    telefone.getAllTelefones((err, results) => {
        if (err) return res.status(500).send({ message: 'Erro ao listar telefones.' });
        res.status(200).send(results);
    });
};

exports.criarTelefone = (req, res) => {
    const novoTelefone = {
        cliente_id: req.body.cliente_id,
        numero: req.body.numero,
        tipo: req.body.tipo,
    };

    telefone.createTelefones(novoTelefone, (err, telefone) => {
        if (err) return res.status(500).send({ message: 'Erro ao salvar telefone.' });
        res.status(201).send(telefone);
    });
};

exports.buscarTelefones = (req, res) => {
    const { id } = req.params;

    telefone.getTelefonesById(id, (err, telefone) => {
        if (err) return res.status(500).json({ error: 'Erro ao buscar telefone' });
        if (!telefone) return res.status(404).json({ error: 'Telefone não encontrado' });

        res.status(200).json(telefone);
    });
};

exports.atualizarTelefones = (req, res) => {
    const { id } = req.params;
    const telefoneAtualizado = req.body;

    telefone.updateTelefones(id, telefoneAtualizado, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Telefone atualizado com sucesso' });
    });
};

exports.deletarTelefones = (req, res) => {
    const { id } = req.params;

    telefone.deleteTelefones(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        
        res.json({ message: 'Telefone deletado com sucesso' });
    });
};
