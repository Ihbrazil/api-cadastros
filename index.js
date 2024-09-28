import express from 'express';
import cors from "cors";

import { cadastraLead } from './servico/cadastroServico.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post("/usuarios", async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;

        await cadastraLead(nome, email, telefone);
        res.status(204).end();
    
    
});

app.listen(9000, async () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});