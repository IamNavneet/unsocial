import express from 'express';
import { signupRouter } from './routes';
import { json } from 'body-parser';

const app = express();

app.use(json());

app.use(signupRouter);

// app.get('*', (req, res) => {
//   res.status(200).send({
//     success: true,
//     message: 'route is running properly!!!!!!!!'
//   });
// });

export default app;
