import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import mock, { dataWrap } from './mock_data';

const team = mock["team"];

/* Obtengo una instancia de express */
const app = express();

/* Indico a express que use el middleware morgan,
este middleware se encarga de loggear cada request que llega al server */
app.use(morgan());

/* Indico que express usa el middleware bodyParser para procesar el body del request */
app.use(bodyParser());

app.get("/team", (request, response) => response.json(dataWrap(team)));

app.post("/team", (request, response) => {
    const { body } = request;
    team.push(body);

    response.status(201).json(dataWrap({ok: true}));

});

app.get("/team/:id", (request, response) => {
    const { params: { id } } = request;

    if(!team.hasOwnProperty(id)) {
        return response.status(400).json({error: "Ese miembro no existe!!"});
    }

    response.json(dataWrap(team[id]));
});

app.delete("/team/:id", (request, response) => {
    const { params: { id } } = request;

    if(!team.hasOwnProperty(id)) {
        return response.status(400).json({error: "Ese miembro no existe!!"});
    }
    /* Hace un splice de un lugar desde la posición indicada */
    team.splice(id, 1);

    response.json(dataWrap({ok: true}));

});

app.listen(9001, _ => console.log("Server started."));