import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import Header from "../layout/Header";


const PrivateRoutes = () => {
    const {auth} = useAuth();
  return (
    <div>
      {auth?.user ? (
        <div>
            <Header/>
          <Outlet />
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </div>
  );
}

export default PrivateRoutes