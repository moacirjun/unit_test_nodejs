test = require('tape');
app = require('../app');
supertest = require('supertest');

test('GET /aplicar-desconto/10/5', assert => {
    supertest(app)
        .get('/aplicar-desconto/10/5')
        .expect('Content-Type', /json/)
        .expect(200)
        .end( (err, res) => {
            assert.error(err, 'Sem erros');
            assert.assert(res.body.valorDescontado === 5, "Desconto Correto");
            assert.end();
        });
});

require('./index.test');