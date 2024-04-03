import express from 'express';
const port = 3000;

const app = express();

app.get('*', (req, res) => {
  res.send({});
});

app.listen(port, () => {
  console.log('app is up and running on port: ', port);
});
