import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate('/')
                const user = {
                    name: loggedUser.displayName,
                    email: loggedUser.email
                }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        toast.success('user create successfully')
                        navigate('/')
                    })
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='mx-10 mb-10'>
            <button onClick={handleGoogleLogin} className=' text-3xl btn mb-2 btn-outline w-full'><FaGoogle></FaGoogle></button><br />
            <button className='text-3xl btn btn-outline w-full'><FaFacebook></FaFacebook></button>

        </div>
    );
};

export default SocialLogin;