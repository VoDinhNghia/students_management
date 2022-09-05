const User = require('../src/models/User');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/server');
const { cryptoPass } = require('../src/until/Crypto');
const { statusUser } = require('../src/until/Constant');
chai.should();

chai.use(chaiHttp);
describe('Users', () => {
    beforeEach((done) => {
        User.deleteMany({}, (err) => {
            done();
        });
    });
    describe('/GET user', () => {
        it('it should GET all the user', (done) => {
            chai
                .request(app)
                .get('/api/user')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a('array');
                    res.body.data.length.should.be.eql(0);
                    done();
                });
        });
    });
    describe('/POST user', () => {
        it('it should new POST a user', (done) => {
            const user = new User({
                email: 'admin.students@gmail.com',
                passWord: cryptoPass('123Code#'),
                status: statusUser.ACTIVE,
                statusLogin: false,
                role: 'ADMIN',
            });
            chai
                .request(app)
                .post('/api/user/createUser')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a('object');
                    res.body.status.should.be.eql('success');
                    done();
                });
        });
    });
    describe('/GET/:id user', () => {
        it('it should GET a user by the id', (done) => {
            const user = new User({
                email: 'admin.students@gmail.com',
                passWord: cryptoPass('123Code#'),
                status: statusUser.ACTIVE,
                statusLogin: false,
                role: 'ADMIN',
            });
            user.save((err, user) => {
                chai
                    .request(app)
                    .get('/api/user/' + user.id)
                    .send(user)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.data.should.be.a('object');
                        res.body.status.should.be.eql('success');
                        done();
                    });
            });
        });
    });
    describe('/PUT/:id user', () => {
        it('it should UPDATE a user given the id', (done) => {
            const body = {
                email: 'admin.students@gmail.com',
                passWord: cryptoPass('123Code#'),
                status: statusUser.ACTIVE,
                statusLogin: false,
                role: 'ADMIN',
            }
            let user = new User(body);
            user.save((err, user) => {
                console.log(user.id);
                chai
                    .request(app)
                    .put('/api/user/' + user.id)
                    .send(body)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.data.should.be.a('object');
                        res.body.status.should.be.eql('success');
                        done();
                    });
            });
        });
    });
    describe('/DELETE/:id user', () => {
        it('it should DELETE a user given the id', (done) => {
            const user = new User({
                email: 'admin.students@gmail.com',
                passWord: cryptoPass('123Code#'),
                status: statusUser.ACTIVE,
                statusLogin: false,
                role: 'ADMIN',
            });
            user.save((err, user) => {
                chai
                    .request(app)
                    .delete('/api/user/' + user.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.data.should.be.a('object');
                        res.body.status.should.be.eql('success');
                        done();
                    });
            });
        });
    });
});