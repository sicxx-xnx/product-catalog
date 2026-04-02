import { render } from "@testing-library/react"
import { Home } from "../components/pages/home"
import type { MyProduct } from "../types/producttype"

describe("favorites should never be larger than 3",()=>{
    it(()=>{
   const products:MyProduct[] = [{}]
        render(<Home/>)
    })

})