import mongoose from "mongoose"

const dbCon = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'CHATWITHJWT',
        }
        mongoose.set('strictQuery', true);
        const connected = await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        if (connected) {
            console.log('Database connected')
        }
        else {
            console.log('Not connected')
        }
    } catch (error) {
        console.log(error)
    }
}

export default dbCon