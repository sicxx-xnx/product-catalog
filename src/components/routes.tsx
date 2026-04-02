import { RouterProvider,createBrowserRouter } from "react-router"
import { Home } from "./pages/home";
import { useEffect, useState } from "react";
import {apiFetch} from '../lib/apirequest'
import { productfactory } from "../lib/productfactory";
import type { MyProduct } from "../types/producttype";



export function Routes(){
const [products,setProducts] = useState<MyProduct[]>([]) 

useEffect(()=>
{
  async function runApiCall (){
    try {
      const apiresult = await apiFetch("https://fake-store-api.mock.beeceptor.com/api/products")
   
      const newProduct =  apiresult.map((product:any) => {
        return productfactory(product)
        
      });
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
//   {
//     path: "Products",
//     element: <ProductPage/>,
//   },
//   {
//     path:"cart",
//     element:<Cart/>
//   }
]);

return (
    <RouterProvider router={router}/>
)
}