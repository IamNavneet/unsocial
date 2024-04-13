import express from 'express';
const signupRouter = express.Router();

signupRouter.post('/api/auth/signup', (req, res) => {
  console.log(req.body);
  res.status(422).send({});
});

export default signupRouter;
