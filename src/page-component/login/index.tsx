import { useState } from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('');

    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const onButtonClick = () => {
        setUsernameError(false)
        setUsernameErrorMessage('')
        setPasswordError(false)
        setPasswordErrorMessage('')

        console.log('username: ', username)
        console.log('password: ', password)
        
        if ('' === (username? username.trim() : '') ) {
            setUsernameError(true)
            setUsernameErrorMessage('Please enter your username')
            return
        }
        
        if ('' === password) {
          setPasswordError(true)
          setPasswordErrorMessage('Please enter a password')
          return
        }
      
        navigate('/main-map')
      }

    return (
        <div className="h-screen flex-col flex justify-center items-center mt-[-60px]">
            <img src={"/silvanus_icon.jpg"}/>
            <div>
                <div className='font-bold text-4xl mb-4 mt-[-60px]'>Login</div>
            </div>
            <div className='pb-4'>
                <div>
                    <input
                        value={username}
                        placeholder="Enter your username here"
                        onChange={(ev) => setUsername(ev.target.value)}
                        className={'ml-10 py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 mb-2'}
                    />
                </div>
                {usernameError && (
                    <label className="ml-10 text-red-500 text-sm ml-auto">{usernameErrorMessage}</label>
                )}
                <div className="relative flex">
                    <input
                        value={password}
                        type=  {passwordVisible? "text" : "password"}
                        placeholder="Enter your password here"
                        onChange={(ev) => setPassword(ev.target.value)}
                        className={'ml-10 py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64'}
                    />

                    <button
                        type="button"
                        className="px-3 text-gray-600 ml-auto"
                        onClick={togglePasswordVisibility}
                    >
                        {passwordVisible ? <VisibilityOff /> : <Visibility />}
                    </button>

                </div>
                {passwordError && (
                    <label className="ml-10 text-red-500 text-sm ml-auto">{passwordErrorMessage}</label>
                )}
            </div>
            <div>
                <input
                    className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-xl cursor-pointer'}
                    type="button"
                    onClick={onButtonClick}
                    value={'Sign in'}
                />
            </div>
        </div>
    )
}

export default Login