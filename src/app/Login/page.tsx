'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from "/public/images/logo.png";
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import  "@/styles/Login.css";
import Image from 'next/image';






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

const Login = () => {
    const router = useRouter()
    const windowWidth = useWindowWidth();
   
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRegister, setShowPasswordRegister] = useState(false);
   
    const [showrePassword, setShowrePassword] = useState(false);

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

    return (
        <div className='body-login'>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form >

                        <h1>Tạo tài khoản</h1>
                        <input type="text" placeholder="Họ và tên" />
                        <input type="email" placeholder="Email" />
                        <div className="password-container">
                        <input type={showPasswordRegister? "text" : "password"} placeholder="Mật khẩu" />
                         <span onClick={() => setShowPasswordRegister(prev => !prev)} className="password-toggle">
                                {showPasswordRegister ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </span>

                        </div>
                        <div className="password-container">
                        <input type={showrePassword ? "text" : "password"} placeholder="Nhập lại mật khẩu" />
                         <span onClick={() => setShowrePassword(prev => !prev)} className="password-toggle">
                                {showrePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </span>

                        </div>
                       
                        <span className='name-or'>Hoặc</span>
                        <div className="social-container">
                            <a href="#" className="social"><FacebookOutlinedIcon sx={{ color: blue[500] }} /></a>
                            <a href="#" className="social"><GitHubIcon /></a>
                            <a href="#" className="social"><GoogleIcon sx={{ color: red[500] }} /></a>
                        </div>
                        <button type='button'>Đăng ký </button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <div>
                            <Image src={logo} alt="logo"  style={{ width: '100%', height: 'auto' }}/>
                        </div>
                        
                        <h1>Đăng nhập</h1>
                        <input type="email" placeholder="Email" />
                        <div className="password-container">
                            <input type={showPassword ? "text" : "password"} placeholder="Mật khẩu" />
                            <span onClick={() => setShowPassword(prev => !prev)} className="password-toggle">
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </span>
                        </div>
                        <div className='forgot-password'onClick={()=>handleForgotPass()}>Bạn quên mật khẩu?</div>
                        <span className='name-or'>Hoặc</span>
                        <div className="social-container">
                            <a href="#" className="social"><FacebookOutlinedIcon sx={{ color: blue[500] }} /></a>
                            <a href="#" className="social"><GitHubIcon /></a>
                            <a href="#" className="social"><GoogleIcon sx={{ color: red[500] }} /></a>
                        </div>
                        <button type='button'>Đăng nhập</button>
                        <div className="is-register" >
                            Bạn chưa có tài khoản? <span ><a className='is-register-link' href="/Register">Đăng ký</a> </span> ngay!
                        </div>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Chào mừng trở lại!</h1>
                            <p>Để duy trì kết nối với chúng tôi vui lòng đăng nhập bằng thông tin cá nhân của bạn</p>
                            <button className="ghost" id="signIn">Đăng nhập</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Chào mừng đến với của hàng </h1>
                            <p>Khám phá những món đồ nội thất sang trọng, hiện đại, và tinh tế, giúp biến không gian sống của bạn thành tổ ấm hoàn hảo.</p>
                            <button className="ghost" id="signUp">Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
