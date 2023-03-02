import { Product } from "./Products/products.slice";

const validateProduct = (product: Product): Promise<Product> => new Promise((resolve, reject) => setTimeout(() =>{
    if (product.name.length === 0) {
        reject("Title is required");
    }
    if (product.price <= 0) {
        reject("Price must be greater than 0");
    }
    resolve(product);
},500))

export default validateProduct;