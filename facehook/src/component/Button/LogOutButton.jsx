import { CgLogOut } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LogOutButton = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const handleLogout = () => {
        navigate("/login")
        setAuth({})
    }
    return (
        <div>
            <div onClick={handleLogout} className="text-slate-500 cursor-pointer hover:bg-red-50 hover:text-red-600">
                <CgLogOut className="h-5 w-5" />
            </div>
        </div>
    )
}

export default LogOutButton