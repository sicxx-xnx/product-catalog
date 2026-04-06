import { describe, it, expect } from 'vitest';
__resetCartForTests
import { __resetCartForTests, useCart } from '../hooks/usecart';
import type { MyProduct } from '../types/producttype';
import { act, renderHook } from '@testing-library/react';
const products:MyProduct[] = [
    {
        name:"test",
        id:1,
        description:"this is a test",
        numberInCart:0,
        price:25,
        favorite:false,
        image:"none",
        catagory:'',
    },
    {
        name:"test2",
        id:2,
        description:"this is a test",
        numberInCart:0,
        price:24, 
        favorite:false,
        image:"none",
        catagory:"",
    }
]
beforeEach(()=>{
    __resetCartForTests()
})

describe('addToCart successfully adds product to cart', () => {
  it('adds the product to the cart', () => {
    const { result } = renderHook(() => useCart())

    act(() => {
      result.current.addToCart(products[0])
    })

    expect(result.current.cart).toContainEqual({
      ...products[0],
      numberInCart: 1
    })
  })
})

describe('addtocart update items in cart', () => {
  it('adds update items in cart', () => {
    const { result } = renderHook(() => useCart())

    act(() => {
      result.current.addToCart(products[0])
      result.current.addToCart(products[0])
    })

    expect(result.current.cart).toContainEqual({
      ...products[0],
      numberInCart: 2
    })
  })
})

describe('incrementalRemoveFromCart removes one item per click', () => {
  it('remove 1 incremental item in cart', () => {
    const { result } = renderHook(() => useCart())

    act(() => {
      result.current.addToCart(products[0])
      result.current.addToCart(products[0])
      result.current.addToCart(products[0])
      result.current.removeIncrementFromCart(products[0])
    })

    expect(result.current.cart).toContainEqual({
      ...products[0],
      numberInCart: 2
    })
  })
})

describe('makes cart empty with 1 item', ()=>{
    it('emptys cart',()=>{
        const {result}= renderHook(()=> useCart())

        act(()=>{
            result.current.addToCart(products[0])
            result.current.removeIncrementFromCart(products[0])

        })

        expect(result.current.cart).toEqual([])

    })

})

describe('removes the 2nd item when its quantity is decremented to zero',()=>{
    it("",()=>{
        const {result} = renderHook(()=>useCart())

        act(()=>{
            result.current.addToCart(products[0])
            result.current.addToCart(products[1])
            result.current.removeIncrementFromCart(products[0])
        })
      expect(result.current.cart).toEqual([{
      ...products[1],
      numberInCart: 1
    }])
    })
})

