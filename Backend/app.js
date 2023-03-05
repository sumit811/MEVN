const cors = require('cors');
const dbFunc = require('./db');

const express = require('express');
const app = express();

const { deleteUser, getOne, getAll, insert, update } = dbFunc;


app.use(cors())
app.use(express.json());

app.patch('/', (req, res) => {
  let upd = update(req.body)
  upd
  .then(response => {
    return getOne(response.insertId)
  })
  .then(response => {
    res.send(response);
  })
  .catch((error) => {
    res.send(error);
  })
});

app.delete('/', (req, res) => {
  res.send('Please enter user id.');
});

app.delete('/:id', (req, res) => {
  let del = deleteUser(req.params.id);
  del
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error)
  })
});

app.post('/', (req, res) => {
  let ins = insert(req.body);
  ins
  .then(response => {
    console.log('insert', response);
    return getOne(response.id.insertId)
  })
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    console.log('post', error)
  })
})

app.get('/:id', (req, res) => {
  let record = getOne(1);
  record
    .then(response => {
      res.send(response);
    }).catch(error => {
      console.error('fetch', error);
    })
});

app.get('/', (req, res) => {
  let record = getAll();
  record
    .then(response => {
      res.send(response);
    }).catch(error => {
      console.error('fetch', error);
    })
});

app.listen(7001, () => {
  console.log('Server is running on port 7001');
})



