'use client' // khi nào mà dùng sự kiện hay gì đó thì dùng nó để nó render 1 phần những giao diện thôi
import { useRouter } from 'next/navigation'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { useState, useEffect } from 'react';
import "@/styles/Register.css";
import logo from "/public/images/logo.png";
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import Link from 'next/link'

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => setWindowWidth(window.innerWidth);

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return windowWidth;
};
const Register = () => {
    const router = useRouter()
      const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRegister, setShowPasswordRegister] = useState(false);
   
    const [showrePassword, setShowrePassword] = useState(false);
   
    const windowWidth = useWindowWidth();
    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        if (signUpButton && signInButton && container) {
            signUpButton.addEventListener('click', () => {
                container.classList.add("right-panel-active");
            });

            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });
        }

        // Cleanup function to remove event listeners
        return () => {
            if (signUpButton && signInButton) {
                signUpButton.removeEventListener('click', () => {
                    container?.classList.add("right-panel-active");
                });

                signInButton.removeEventListener('click', () => {
                    container?.classList.remove("right-panel-active");
                });
            }
        };
    }, []);
        const handleForgotPass= () => {
  
    router.push("/ForgotPassword")
  }

    const t = useTranslations('LoginPage');
   const a = useTranslations('RegisterPage');
    return (
        <div className='body-register'>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form >

                        <h1>{a('create-account')}</h1>
                        <input type="text" placeholder={a('user-name')} />
                        <input type="email" placeholder="Email" />
                        <div className="password-container">
                        <input type={showPasswordRegister? "text" : "password"} placeholder={a('password')} />
                         <span onClick={() => setShowPasswordRegister(prev => !prev)} className="password-toggle">
                                {showPasswordRegister ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </span>

                        </div>
                        <div className="password-container">
                        <input type={showrePassword ? "text" : "password"} placeholder={a('repassword')} />
                         <span onClick={() => setShowrePassword(prev => !prev)} className="password-toggle">
                                {showrePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </span>

                        </div>
                       
                        <span className='name-or'>{a('or')}</span>
                        <div className="social-container">
                            <a href="#" className="social"><FacebookOutlinedIcon sx={{ color: blue[500] }} /></a>
                            <a href="#" className="social"><GitHubIcon /></a>
                            <a href="#" className="social"><GoogleIcon sx={{ color: red[500] }} /></a>
                        </div>
                        <button type='button'>{a('title-register')}</button>
                        <div className="is-register" >
                            {a('yes-account')} <span ><Link className='is-register-link' href="/Login">{a('title-login')}</Link> </span>
                            {a('now')}

                        </div>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <div>
                            <Image src={logo} alt="logo"  style={{ width: '100%', height: 'auto' }}/>
                        </div>
                        
                        <h1>{t('title-login')}</h1>
                        <input type="email" placeholder="Email" />
                        <div className="password-container">
                            <input type={showPassword ? "text" : "password"} placeholder={t('password')} />
                            <span onClick={() => setShowPassword(prev => !prev)} className="password-toggle">
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </span>
                        </div>
                        <div className='forgot-password'onClick={()=>handleForgotPass()}>{t('text-forgot-pass')}</div>
                        <span className='name-or'>{t('or')}</span>
                        <div className="social-container">
                            <a href="#" className="social"><FacebookOutlinedIcon sx={{ color: blue[500] }} /></a>
                            <a href="#" className="social"><GitHubIcon /></a>
                            <a href="#" className="social"><GoogleIcon sx={{ color: red[500] }} /></a>
                        </div>
                        <button type='button'>{t('title-login')}</button>
                        <div className="is-register" >
                            {t('no-account')} <span ><Link className='is-register-link' href="/Register">{t('title-register')}</Link> </span> {t('now')}
                        </div>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>{a('text-main-description')}</h1>
                            <p>{a('description')}</p>
                            <button className="ghost" id="signIn">{a('title-login')}</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>{t('text-main-description')}</h1>
                            <p>{t('description')}</p>
                            <button className="ghost" id="signUp">{t('title-register')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
