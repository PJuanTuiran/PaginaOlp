



//carga variables de entorno desde un archivo.env almacenando unformacion de configuracion confidencial
require('dotenv').config();



//importa una exportación nombrada de un módulo y la desestructura en una variable. 
const { pool } = require('./config/database');


//importancion de modulo a una variable
const app = require('./app');



const port = process.env.PORT || 4000;





// Prueba la conexión a la base de datos
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1);
  } else {
    console.log('Conexión a la base de datos exitosa:', res.rows);
    app.listen(port, () => {
      console.log(`Servidor ejecutándose en http://localhost:${port}`);
    });
  }
});
