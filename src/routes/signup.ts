import express from 'express';

const signupRouter = express.Router();

signupRouter.post('/api/auth/signup', (req, res) => {
  if (!req.body.email) return res.sendStatus(422).send(422);

  return res.status(200).sendStatus(200);

  // res.status(422).send({});
});

export default signupRouter;
