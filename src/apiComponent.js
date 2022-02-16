import axios from "axios"

const fetchUser =  () =>{
    const BASE_URL="https://jsonplaceholder.typicode.com/albums/2"
    return  axios.get("https://jsonplaceholder.typicode.com/albums/2/users");
   };
   export default fetchUser;