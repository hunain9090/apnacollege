type ProfilePageAgeProps ={
    params: Promise<{name: string,age: string}>;
}
async function ProfilePageAge({params}: ProfilePageAgeProps){

      const users = [
        {
            id: 1,
            name: "hunain",
            email: "hunain@gmail.com",
            age: "21",
            bio: "Mern stack developer",
        },
        {
            id: 1,
            name: "hunain",
            email: "hunain@gmail.com",
            age: "25",
            bio: "Mern stack developer",
        },
        {
            id: 1,
            name: "hunain",
            email: "hunain@gmail.com",
            age: "30",
            bio: "Mern stack developer",
        },
    ]


    const pageParams=  await params

    const username= pageParams.name
    const userage = pageParams.age

    const user = users.find(user => user.name.toLocaleLowerCase() === username.toLocaleLowerCase() && 
    user.age.toString() == userage)

    return (
     <div>
        <h2>{user?.name}'s Profile Page</h2>
        <p>Email: {user?.email}</p>
        <p>Age: {user?.age}</p>
        <p>Bio: {user?.bio}</p>
     </div>
)
}

export default ProfilePageAge;