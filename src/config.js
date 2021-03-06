module.exports ={
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.PORT || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://dunder_mifflin:paper@localhost/pc-game-finder',
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 
    'http://localhost:3000/api'
};