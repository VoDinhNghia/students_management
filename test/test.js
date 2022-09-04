const User = require("../src/models/User");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/server");
chai.should();

chai.use(chaiHttp);

describe("Users", () => {
    beforeEach((done) => {
        User.deleteMany({}, (err) => {
            done();
        });
    });
    describe("/GET User", () => {
        it("it should GET all the user", (done) => {
            chai
                .request(app)
                .get("/api/user")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a("array");
                    res.body.data.length.should.be.eql(0);
                    done();
                });
        });
    });
    describe("/POST user", () => {
        it("it should new POST a user", (done) => {
            const user = new User({
                email: 'test@gmail.com',
                passWord: '...',
                role: 'ADMIN',
            });
            chai
                .request(app)
                .post("/api/user")
                .send(User)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a("object");
                    res.body.status.should.be.eql("success");
                    done();
                });
        });
    });
    describe("/GET/:id user", () => {
        it("it should GET a user by the id", (done) => {
            const user = new User({
                email: 'test@gmail.com',
                passWord: '...',
                role: 'ADMIN',
            });
            user.save((err, user) => {
                chai
                    .request(app)
                    .get("/api/user/" + user.id)
                    .send(User)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.data.should.be.a("object");
                        res.body.status.should.be.eql("success");
                        done();
                    });
            });
        });
    });
    describe("/PUT/:id User", () => {
        it("it should UPDATE a User given the id", (done) => {
            const body = {
                email: 'test@gmail.com',
                passWord: '...',
                role: 'ADMIN',
            }
            let user = new User(body);
            user.save((err, user) => {
                console.log(user.id);
                chai
                    .request(app)
                    .put("/api/Users/" + user.id)
                    .send(body)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.data.should.be.a("object");
                        res.body.status.should.be.eql("success");
                        done();
                    });
            });
        });
    });
    describe("/DELETE/:id user", () => {
        it("it should DELETE a user given the id", (done) => {
            const user = new User({
                email: 'test@gmail.com',
                passWord: '...',
                role: 'ADMIN',
            });
            user.save((err, user) => {
                chai
                    .request(app)
                    .delete("/api/Users/" + user.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.data.should.be.a("object");
                        res.body.status.should.be.eql("success");
                        done();
                    });
            });
        });
    });
});