'use client' // khi nào mà dùng sự kiện hay gì đó thì dùng nó để nó render 1 phần những giao diện thôi
import { useRouter } from 'next/navigation'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { useState, useEffect } from 'react';
import "@/styles/Register.css";
import Link from 'next/link';
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

    return (
        <div>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Tạo tài khoản</h1>
                        <input type="text" placeholder="Họ và tên" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Mật khẩu" />
                         <input type="repassword" placeholder="Nhập lại mật khẩu" />
                        <span className='name-or'>Hoặc</span>
                         <div className="social-container">
                            <a href="#" className="social"><i className=""></i><FacebookOutlinedIcon sx={{ color: blue[500] }}/></a>
                            <a href="#" className="social"><i className="fab fa-twitter"></i><GitHubIcon /></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i><GoogleIcon sx={{ color: red[500] }}/></a>
                        </div>
                        <button>Đăng ký</button>
                        <div className="is-register" style={{ display: windowWidth < 768 ? 'block' : 'none' }}>
                            Đã có tài khoản? <span ><a className='is-register-link' href="/Login">Đăng nhập</a> </span>
                            ngay!

                        </div>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Đăng nhập</h1>
                        
                       
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Mật khẩu" />
                        <div className='forgot-password'>Bạn quên mật khẩu?</div>
                         <span className='name-or'>Hoặc</span>
                         <div className="social-container">
                        <a href="#" className="social"><i className=""></i><FacebookOutlinedIcon sx={{ color: blue[500] }}/></a>
                            <a href="#" className="social"><i className="fab fa-twitter"></i><GitHubIcon /></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i><GoogleIcon sx={{ color: red[500] }}/></a>
                        </div>
                        <button>Đăng nhập</button>

                        
                        
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

export default Register;
