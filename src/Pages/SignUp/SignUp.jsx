import { useForm } from 'react-hook-form';
import loginImg1 from '../../assets/others/authentication.png'
import loginImg2 from '../../assets/others/authentication2.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';



const SignUp = () => {
    const { createUser, userProfile, } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate();
    const [error, setError] = useState('')


    const handleSignUp = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                user.displayName = data.name
                console.log(user)
                handleUpdateProfile(data.name)
                saveUser(data.name, data.email)


            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })

    }

    const handleUpdateProfile = (name) => {
        const profile = {
            displayName: name
        }
        userProfile(profile)
            .then(() => { })
            .catch(err => console.err(err))

    }

    // const handleGoogleLogin = () => {
    //     googleLogin()
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user)
    //         })
    //         .catch(error => console.error(error))
    // }

    const saveUser = (name, email) => {
        const user = {
            name: name,
            email: email
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
    }

    return (
        <div style={{ backgroundImage: `url(${loginImg1})` }} className="hero min-h-screen p-16">
            <div style={{ backgroundImage: `url(${loginImg1})` }} className="lg:flex justify-evenly items-center shadow-lg">
                <div >
                    <img className="w-4/5" src={loginImg2} alt="" />
                </div>
                <div className="card flex-shrink-0 w-96">
                    <h3 className='text-center text-3xl font-semibold'>Sign Up</h3>
                    <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input {...register("name", { required: "Name is required" })}

                                type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        {errors.name && <p className='text-red-500' role="alert">{errors.name.message}</p>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input {...register('email', { required: "Email is required" })}
                                type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        {errors?.name && <p className='text-red-500 '>{errors?.email.message}</p>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input {...register('password',
                                {
                                    required: 'Password is required',
                                    pattern: {
                                        value: /(?=.{8,})(?=.*[A-Z])(?=.*[a-z])/,
                                        message: 'password should be 8 character uppercase & lowercase'
                                    }
                                })} type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-semibold">Forgot password?</a>
                            </label>
                        </div>
                        {errors?.password && <p className='text-red-500 '>{errors?.password.message}</p>}
                        <p className='text-red-500'>{error.slice(9)}</p>

                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='pb-5 ms-10'>Already have an account?<Link to='/login'>Please Login</Link></p>
                    {/* <div className='mx-10 mb-10'>
                        <button onClick={handleGoogleLogin} className=' text-3xl btn mb-2 btn-outline w-full'><FaGoogle></FaGoogle></button><br />
                        <button className='text-3xl btn btn-outline w-full'><FaFacebook></FaFacebook></button>

                    </div> */}
                    <SocialLogin></SocialLogin>
                </div>

            </div>
        </div>
    );
};

export default SignUp;