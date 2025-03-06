export interface IProduct {
  id: number
  name: string
  price: number
  createdAt: Date
  updatedAt: Date
}
export type IDelete = {
  message:string
}

export interface ICreateProduct{
  name:string
  price:number
}

export type TupdatedProduct = Pick<IProduct,'name' |'price' >
export type TnewProduct = Partial<IProduct>


export interface IList{
    createProduct(data:ICreateProduct): IProduct
    getProducts(): IProduct[]
    getOneProduct(id:number): IProduct | undefined
    updateProduct(id:number,data:TnewProduct): TnewProduct
    deleteProduct(id:number): IDelete
}