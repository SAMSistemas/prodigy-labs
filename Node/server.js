import express from 'express';

import mock from './mock_data';

const app = express();

app.get("*", (request, response) => {
    const { path } = request;
    const pathName = path.split("/")[1];
    response.json(mock[pathName]);
});


app.listen(9001, () => {
    console.log("Sever started.");
});