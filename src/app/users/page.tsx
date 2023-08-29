//taken from youtube tutorial 2
// a test to be implimented

const express = require('express');
const app = express();

app.get('/api/users', (req:any,res:any)=> {
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'bob' },
    ];
    res.json(users);
});

app.listen(3000, () => {
    console.log('server is listening on port 3000');
})