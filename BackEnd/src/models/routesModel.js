const { pool } = require('../config/database');

exports.getAll = async () => {
  const query = `SELECT * FROM modules`;
  const { rows } = await pool.query(query);
  return rows;
}

exports.save = async (username, email, hashedPassword) => {
  const query = `INSERT INTO modules (username, email, password)
                 VALUES ($1, $2, $3)
                 RETURNING id, username, email`;
  const values = [username, email, hashedPassword];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

exports.update = async (id, data) => {
  const query = `UPDATE modules
                 SET username = $1, email = $2, password = $3
                 WHERE id = $4
                 RETURNING id, username, email`;
  const values = [data.username, data.email, data.password, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

exports.delete_ = async (id) => {
  const query = `DELETE FROM modules WHERE id = $1`;
  await pool.query(query, [id]);
};

exports.findByEmail = async (email) => {
  const query = `SELECT * FROM modules WHERE email = $1`;
  const { rows } = await pool.query(query, [email]);
  return rows[0];
};
exports.findByUsername = async (username) => {
  const query = `SELECT * FROM modules WHERE username = $1`;
  const { rows } = await pool.query(query, [username]);
  return rows[0];
};

exports.findById = async (id) => {
  const query = `SELECT * FROM modules WHERE id = $1`;
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};
