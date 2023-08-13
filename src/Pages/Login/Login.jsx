// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha'
import loginImg1 from '../../assets/others/authentication.png'
import loginImg2 from '../../assets/others/authentication2.png'
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Login = () => {
    // const [isDisable, setIsDisable] = useState(true);
    const [loginError, setLoginError] = useState('')
    // const captchaRef = useRef(null);
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || '/'


    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])
    // if we onblur system implement must onBlur on input field
    // const handleBlur = (e) => {
    //     const user_captcha_value = e.target.value;

    //     console.log(user_captcha_value)
    //     if (validateCaptcha(user_captcha_value) == true) {
    //         setIsDisable(false)

    //     }

    //     else {
    //         setIsDisable(true);
    //     }
    // }

    // const handleValidate = () => {
    //     const user_captcha_value = captchaRef.current.value;
    //     console.log(user_captcha_value)
    //     if (validateCaptcha(user_captcha_value) == true) {
    //         setIsDisable(false)
    //     }

    //     else {
    //         setIsDisable(true)
    //     }
    // }

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Login successfully')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setLoginError(error.message)
            })

    }



    return (
        <div style={{ backgroundImage: `url(${loginImg1})` }} className="hero  ">
            <div style={{ backgroundImage: `url(${loginImg1})` }} className="lg:flex justify-evenly items-center shadow-lg pb-5">
                <div >
                    <img className="w-4/5" src={loginImg2} alt="" />
                </div>
                <div className="card flex-shrink-0 w-96">
                    <h3 className='text-center text-3xl font-semibold'>Login</h3>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-semibold">Forgot password?</a>
                            </label>
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                < LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleBlur} type="text" name="captcha" placeholder="captcha" className="input input-bordered" />
                            <input ref={captchaRef} type="text" name="captcha" placeholder="captcha" className="input input-bordered" />
                            <input onClick={handleValidate} className='btn btn-accent btn-xs mt-5' type="submit" value="Captcha validate" />
                        </div> */}
                        <p className='text-red-500'>{loginError.slice(9)}</p>

                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='pb-10 ms-10'>New to account?<Link to='/signup'>Please Sign Up</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;