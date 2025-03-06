import { ICreateProduct, IDelete, IList, IProduct, TnewProduct, TupdatedProduct } from "./interfaces"

class ProductList implements IList{
    private productList: IProduct[] = []
    id = 1

    
    createProduct(data:ICreateProduct): IProduct {
        
        const createdAt = new Date()
        const updatedAt = new Date()
        const id = this.id
        const product = {name:data.name,price:data.price,createdAt,updatedAt,id}
        this.productList.push(product)
        this.id = id + 1
       console.log(product)
        return product
        
    }

    getProducts(): IProduct[] {
        
        return this.productList
    }

    getOneProduct(id: number): IProduct | undefined {
        const res = this.productList.find((item) => item.id === id)
        
        return res
    }

    updateProduct(id: number, data: TupdatedProduct): TnewProduct{
        const product = this.productList.find((item) => item.id === id)
        const createdAt = new Date()
        const updatedAt = new Date()
        const name = data.name
        const price = data.price
        const index = id-1
        const newProduct = {name,price,id,createdAt,updatedAt}
        this.productList.splice(index,1,newProduct)
        return newProduct
        
    }
    
    deleteProduct(id: number): IDelete {
        const index = id - 1
        this.productList.splice(index,1)
        
        const res  = {message: "Product successfully deleted."}
        return res
    }
}


export const productList= new ProductList()

