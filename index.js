const express = require(`express`);
const cors = require(`cors`);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.get(`/`, (req, res) => res.json(new Date().toISOString()));

app.listen(port, () => console.log(`server is up and running at port: '${port}'`));
