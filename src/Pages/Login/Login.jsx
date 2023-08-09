import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha'
import loginImg1 from '../../assets/others/authentication.png'
import loginImg2 from '../../assets/others/authentication2.png'
import { useEffect, useState } from 'react';

const Login = () => {
    const [isDiable, setIsDisable] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleBlur = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value) == true) {

            setIsDisable(false)
            alert('match')
        }

        else {
            setIsDisable(true);
        }
    }

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

    }
    return (
        <div style={{ backgroundImage: `url(${loginImg1})` }} className="hero min-h-screen ">
            <div className="lg:flex justify-evenly items-center">
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
                        <div className="form-control">
                            <label className="label">
                                < LoadCanvasTemplateNoReload />
                            </label>
                            <input onBlur={handleBlur} type="text" name="captcha" placeholder="captcha" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-semibold">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={isDiable} className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;