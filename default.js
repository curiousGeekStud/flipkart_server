import { products } from './constants/data.js'
import Product from './model/product-schema.js'

//To insert data into mongoDB from the local file
async function DefaultData(){
    try{
        await Product.deleteMany({});
        await Product.insertMany(products);

        console.log("Data Imported Successfully");
    } catch(error){
        console.log('Error while inserting default data', error.message)
    }
}

export default DefaultData;