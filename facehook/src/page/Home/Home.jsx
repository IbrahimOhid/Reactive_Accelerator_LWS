import useAuth from "../../hooks/useAuth"



const Home = () => {
    const {auth} = useAuth();
    console.log(auth)
    return (
        <div>
            <p>HOme</p>
        </div>
    )
}

export default Home