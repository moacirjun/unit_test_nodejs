test = require('tape');
index = require('./index');

test('Aplicar desconto', t => {
    t.assert(index.aplicarDesconto(10,5) === 5, 'Desconto aplicado com sucesso!');
    t.end();
});

test('Aplicar desconto grande', t => {
    t.assert(index.aplicarDesconto(10,20) === 0, 'Desconto grande aplicado com sucesso!');
    t.end();1
});