
import { useAuth } from "../../hooks/useAuth";



const Home = () => {
  const {auth} = useAuth();
  console.log(auth)
  return (
    <div>
      home
    </div>
  );
};

export default Home;
