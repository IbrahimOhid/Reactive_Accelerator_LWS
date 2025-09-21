export const fetchComment = async (postId)=>{
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    return data.json()
}