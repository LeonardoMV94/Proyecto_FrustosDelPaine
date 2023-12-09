import dotenv from 'dotenv'

dotenv.config()

const config = { 
    env:         process.env.NODE_ENV || 'development',
    isProd:      process.env.NODE_ENV === 'production',
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret:   process.env.JWT_SECRET,
    port:        +process.env.PORT!
}

export default config;