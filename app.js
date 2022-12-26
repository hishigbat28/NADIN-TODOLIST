const { constants } = require('buffer')
const express = require('express')
const fs = require('fs/promises')
const path = require('path')
const { send } = require('process')
const {
  GetStudents,
  PostStudents,
  PutStudents,
  DeleteStudents,
} = require('./data')
const mySql = require('mysql2')
const app = express()

app.use(express.json())
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/students', async (req, res) => {
  const students = await GetStudents()
  res.send(students)
})

app.post('/students', async (req, res) => {
  const data = await PostStudents(req.body)
  res.send(data)
})

app.put('/students', async (req, res) => {
  console.log('A14', req.body)

  const bazz = await PutStudents(req.body)
  res.send(bazz)
})
app.delete('/students/:id', async (req, res) => {
  console.log('a99', req.params.id)

  const dell = await DeleteStudents(req.params.id)

  res.send(dell)
})
app.listen(3000, async () => {
  console.log('server listen 3000port')
})
