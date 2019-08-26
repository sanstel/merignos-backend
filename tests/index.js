import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';

import app from '../src';

chai.use(chaiHTTP);

describe('Application', () => {
  it('should return json', (done) => {
    chai
      .request(app)
      .get('/api/v1')
      .end((err, res) => {
        expect(typeof res.body).to.equal('object');
        expect(res.statusCode).to.equal(200);
        expect(res.body.status).to.equal('success');
        done();
      });
  });
});
