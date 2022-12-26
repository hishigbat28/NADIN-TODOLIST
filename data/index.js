const pool = require('./connect')

async function GetStudents() {
  const [students] = await pool.execute('SELECT * FROM name')
  return students
}
async function PostStudents({ name }) {
  console.log('A1', name)
  const data = await pool.query(`insert into name(firstname) value('${name}')`)
  return data
}
async function PutStudents({ name, id }) {
  console.log('A0', name, id)
  const baz = await pool.query(
    `update name set firstname='${name}'where id=${id}`,
  )
  return baz
}

async function DeleteStudents(id) {
  console.log('Aa1', id)
  const del = await pool.query(`delete from name where id=${id}`)
  return del
}

module.exports = {
  GetStudents: GetStudents,
  PostStudents: PostStudents,
  PutStudents: PutStudents,
  DeleteStudents: DeleteStudents,
}
