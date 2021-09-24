require('dotenv').config()

module.exports = {
  development: {
    database: 'eatup_development',
    dialect: 'postgres'
  },
  test: {
    database: 'eatup_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
