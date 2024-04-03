import request from 'supertest';
import app from '../app';

it('should return 200', () => {
    request(app)
    .get("/")
    .expect(200)
})
