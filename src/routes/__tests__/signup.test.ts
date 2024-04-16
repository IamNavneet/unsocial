import request from 'supertest';
import app from '../../app';

beforeAll(() => {
  // start the database connection
});

beforeEach(() => {
  // clean up the database
});

// it('should return 405: method not allowed for non-post requests for signup route', () => {});

it('should return 422:Unprocessable Entity if the email is not valid', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      something: 'something'
    })
    .expect(422);
});

it('should return 200:Success if the email is provided in the request', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      email: 'something'
    })
    .expect(200);
});

afterAll(() => {
  // close the database connection
});
