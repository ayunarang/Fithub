
import mongoose from 'mongoose'


const mongoDb=async(MONGO_URI)=>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database working successfully');
       
      } catch (error) {
        console.error('Error connecting to the database:', error.message);
      }
}

export default mongoDb