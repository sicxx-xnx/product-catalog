import type { MyProduct } from "../types/producttype"
import { filterFavorites } from "../lib/favorites"

describe("favorites should never be larger than 3", () => {
  it("limits favorites to 3", () => {
    const testProducts: MyProduct[] = [
      { id: 0, name: "test1", description: "test1", price: 0, numberInCart: 0, favorite: true, image:'x'},
      { id: 1, name: "test2", description: "test2", price: 0, numberInCart: 0, favorite: false, image:'x'},
      { id: 2, name: "test3", description: "test3", price: 0, numberInCart: 0, favorite: true, image:'x'},
      { id: 3, name: "test4", description: "test4", price: 0, numberInCart: 0, favorite: true, image:'x'},
      { id: 4, name: "test5", description: "test5", price: 0, numberInCart: 0, favorite: false, image:'x'},
      { id: 5, name: "test6", description: "test6", price: 0, numberInCart: 0, favorite: true, image:'x'}
    ];

    expect(filterFavorites(testProducts).length).toBeLessThanOrEqual(3);
  });
});