import supertest from "supertest";
import { expect } from "chai";
import { CreateInputMock } from "../mocks/create.input.mock";

export class ControllerTest {
  private app: string;

  constructor(app: string) {
    this.app = app;
  }

  startTest = () => {
    describe("TestController", () => {
      let createInputMock: CreateInputMock;
      let customer;

      before(() => {
        createInputMock = CreateInputMock.create();
      });

      it("should create a new customer", async () => {
        const result = await supertest(this.app)
          .post("/customer.create")
          .send(createInputMock);

        expect(result).to.have.property("status").to.be.equal(200);
        expect(result.body).to.have.property("statuscode").to.be.equal(201);
        expect(result.body);

        customer = result.body.data;
        expect(customer).to.have.property("_id").to.be.not.null;
        expect(customer).to.have.property("keoId");
      });

      it("should finds customers", async () => {
        const result = await supertest(this.app)
          .post("/customer.find")
          .send({});

        expect(result).to.have.property("status").to.be.equal(200);
        expect(result.body).to.have.property("statuscode").to.be.equal(201);
        expect(result.body);

        const responseData = result.body;        
        expect(responseData).to.have.property("count").to.be.not.null;
        expect(responseData).to.have.property("count").to.be.greaterThan(0);
        expect(responseData).to.have.property("totalRecords").to.be.greaterThan(0);
        expect(responseData.data.length).to.be.equal(responseData.count);
      });

      it("should find a customer info", async () => {
        const result = await supertest(this.app)
          .get("/customer.info")
          .query({ id: customer['_id'] });

        expect(result).to.have.property("status").to.be.equal(200);
        expect(result.body).to.have.property("statuscode").to.be.equal(201);
        expect(result.body);

        const responseData = result.body.data;
        expect(responseData).to.have.property("createdAt").to.be.not.null;
      });

      it("shouldn't find a customer", async () => {
        const result = await supertest(this.app)
          .get("/customer.info")
          .query({ id: '2345' });

        expect(result).to.have.property("status").to.be.equal(502);
        expect(result.body).to.have.property("statuscode").to.be.equal(502);
        expect(result.body);
        expect(result.body).to.have.property("message").to.include('not foud');
      });

      it("should update a customer", async () => {
        const result = await supertest(this.app)
          .patch("/customer.update")
          .send({
            _id: customer['_id'],
            name: 'NameUpdated'
          });

        expect(result).to.have.property("status").to.be.equal(200);
        expect(result.body).to.have.property("statuscode").to.be.equal(201);
        expect(result.body);

        customer = result.body.data;
        expect(customer).to.have.property("_id").to.be.not.null;
        expect(customer).to.have.property("name");
      });

      it("should delete a customer", async () => {
        const result = await supertest(this.app)
          .delete("/customer.delete")
          .query({ id: customer['_id'] });
        expect(result).to.have.property("status").to.be.equal(200);
      });

    });
  };
}
