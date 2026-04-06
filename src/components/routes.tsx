import { RouterProvider,createBrowserRouter } from "react-router"
import { Home } from "./pages/home";
import { useEffect, useState } from "react";
import {apiFetch} from '../lib/apirequest'
import { productfactory } from "../lib/productfactory";
import type { MyProduct } from "../types/producttype";
import { Cart } from "./pages/checkout";
import { ProductPage } from "./pages/productpage";

// updateing the file to get a new commit


export function Routes(){
const [products,setProducts] = useState<MyProduct[]>([]) 

useEffect(()=>
{
  async function runApiCall (){
    try {
      const apiresult = await apiFetch("https://dummyjson.com/products")   
      console.log(apiresult)
      const newProduct =  apiresult.products.map((product:any) => {
        return productfactory(product) 
      });
      console.log(newProduct)
      setProducts(()=> newProduct)
}   catch (error) {
      console.log(error)
    }
  }
  runApiCall()
},
[])


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home products={products} />,
  },
  {
    path: "Products",
    element: <ProductPage product={products}/>,
  },
  {
    path: "products/:cata",
    element:<ProductPage product={products}/>
  },
  {
    path:"cart",
    element:<Cart/>
  }
]);

return (
    <RouterProvider router={router}/>
)
}