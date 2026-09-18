type User ={
    id:number,
    name: string,
    username: string
}
 async function About(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users") 
    const users = await response.json();
    return (
        <>
        <h2>This is about Page</h2>
        <ul>
            {
                users.map((user: User) =>(
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
      
        </>
    )
}

export default About;