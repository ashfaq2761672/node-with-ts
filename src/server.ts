import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send('The sedulous hyena ate the antelope!');
});

let server = app.listen(PORT || 8080, function () {
    server.setTimeout(300000);
    console.log("App now running on port", server.address())
});