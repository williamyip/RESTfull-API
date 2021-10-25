const express = require('express');
const app = express()
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
)


app.get('/tshirt', (req,res) =>{
    res.status(200).send({
        tshirt: 'tshirt',
        size:'large'
    })

});

app.get('/tshirt/:id', (req,res) =>{

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!'})
    }

    res.send ({
        tshirt: `tshirt with your ${logo} and ID of ${id}`,
        });
    

});