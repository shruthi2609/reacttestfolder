import axios from "axios"
import fetchUser from "./apiComponent"
jest.mock("axios")
test("mock json api",()=>{
    const users={
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
      axios.get.mockResolvedValueOnce(users)
      const result=fetchUser()
      expect(axios.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/albums/2/users");
      expect(result).toEqual(users)
})