import { describe, it } from "vitest";
import type { MyProduct } from "../types/producttype";
import { render,} from "@testing-library/react";
import { screen } from "@testing-library/react";
import { Home } from "../components/pages/home";
import { MemoryRouter } from "react-router";

import userEvent from "@testing-library/user-event";
import { __resetCartForTests } from "../hooks/usecart";

   
   
   const testProducts: MyProduct[] = [
      { id: 0, name: "test1", description: "test1", price: 0, numberInCart: 0, favorite: true, image:'x',catagory:""},
      { id: 1, name: "test2", description: "test2", price: 0, numberInCart: 0, favorite: true, image:'x',catagory:""},
      { id: 2, name: "test3", description: "test3", price: 0, numberInCart: 0, favorite: false, image:'x',catagory:""},
      { id: 3, name: "test4", description: "test4", price: 0, numberInCart: 0, favorite: false, image:'x',catagory:""},
      { id: 4, name: "test5", description: "test5", price: 0, numberInCart: 0, favorite: false, image:'x',catagory:""},
      { id: 5, name: "test6", description: "test6", price: 0, numberInCart: 0, favorite: false, image:'x',catagory:""}
    ];

 beforeEach(()=>{
     __resetCartForTests()
 })   

describe("Header component tests", () => {
  it("cart total updates to 1 after adding one item", async () => {
    const user = userEvent.setup()
    render(<MemoryRouter>
      <Home products={testProducts} />
    </MemoryRouter>)
    
    const button = screen.getByRole("button",{name:'test1'})
    await user.click(button)
    const cart = screen.getByTestId('cart-total');
    
    expect(cart.textContent).toMatch("1");
  });

});

describe("Header component tests", ()=> {
    it("cart total updates to 3 after adding three of the same item", async () => {
    const user = userEvent.setup()
    render(<MemoryRouter>
      <Home products={testProducts} />
    </MemoryRouter>)
    
    const button = screen.getByRole("button",{name:'test1'})
    await user.click(button)
     await user.click(button)
      await user.click(button)
    const cart = screen.getByTestId('cart-total');
    
    expect(cart.textContent).toMatch("3");
  });
})