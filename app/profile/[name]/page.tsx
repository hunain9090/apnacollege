type ProfilePageProps = {
    params : Promise<{name: string}>;
}
async function ProfilePage({params}: ProfilePageProps){
    const users = [
        {
            id: 1,
            name: "hunain",
            email: "hunain@gmail.com",
            bio: "Mern stack developer",
        },
         {
            id: 2,
            name: "ali",
            email: "ali@gmail.com",
            bio: "full stack developer",
        },
         {
            id: 3,
            name: "neha",
            email: "hunnehaain@gmail.com",
            bio: "UI/UX stack developer",
        }
    ]

    const pageParams=  await params
    const username=   pageParams.name

    const user = users.find(user => user.name.toLocaleLowerCase() === username.toLocaleLowerCase())
    console.log(user);

    if(!user){
        return (
            <div>
                <h1>User not found</h1>
                <p>the user with the name {username} does not exist</p>
            </div>
        )
    }
    
return (
     <div>
        <h2>{user?.name}'s Profile Page</h2>
        <p>Email: {user?.email}</p>
        <p>Bio: {user?.bio}</p>
     </div>
)

}

export default ProfilePage;