import axios from 'axios';


export default async function getUserData(userId){
    try{
        const userRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const userData = userRes.data;

        const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        const userPost = postRes.data;

        const result = {
            user: userData,
            posts: userPost
        }

        return result;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}
