// import express from 'express'; -- add "type": "module" in package.json file.
const express = require('express');

// create an application
const app = express();
app.use(express.json()); // VERY IMPORTANT!! Add this to the top of your file.

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

app.use((req, res, next) => {
    console.log('inside middleware!');
    next(); // moves us to the next request handler
})

// path("users", views.get_users)
app.get('/api/users/', (request, response) => {
    console.log(request);
    // response.send('Hello!');
    response.json(users);
});

// handle a POST request
app.post('/api/users/:id', (request, response) => {
    console.log(request.body); // Requesting the incoming data. Requires json middleware to parse 'request.body' data.

    // terminates the request/response cycle
    // like calling return render(request, "index.html")
    response.json({
        posted: true
    });
});

// try out PUT and DELETE requests!

// handle PUT requests
// path("pokemon/<int:id>", views.show_pokemon")
app.put('/api/users/:userId', (req, res) => {
    const id = req.params.userId;
    users[id] = req.body;
    res.json({
        status: "ok"
    });
});

// handle DELETE requests
app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    console.log(req.body);
    res.json({
        status: "ok"
    });
});

// receive requests
app.listen(8000, () => console.log('listening on port 8000'));