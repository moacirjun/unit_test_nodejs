const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const index = require("./index");
const port = 3000;

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Funfa!" });
});

router.get('/aplicar-desconto/:preco/:desconto', (req, res) => {
    let preco = parseInt(req.params.preco);
    let desconto = parseInt(req.params.desconto);

    res.json({ valorDescontato: index.aplicarDesconto(preco, desconto) });
});

app.use('/', router);

if (require.main === module) {
    app.listen(port)
    console.log(`API rodando na porta ${port}`);
}