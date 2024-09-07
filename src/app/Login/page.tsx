'use client' // khi nào mà dùng sự kiện hay gì đó thì dùng nó để nó render 1 phần những giao diện thôi
import { useRouter } from 'next/navigation'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { useEffect } from 'react';
import "@/styles/Login.css";

const Login = () => {
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
                        <div className="social-container">
                            <a href="https://www.facebook.com/FreeWebsiteCode/" className="social"><i className=""></i><FacebookOutlinedIcon sx={{ color: blue[500] }}/></a>
                            <a href="https://twitter.com/freewebsitecode" className="social"><i className="fab fa-twitter"></i><GitHubIcon /></a>
                            <a href="https://www.linkedin.com/in/freewebsitecode/" className="social"><i className="fab fa-linkedin-in"></i><GoogleIcon sx={{ color: red[500] }}/></a>
                        </div>
                        <span>hoặc sử dụng email để đăng ký</span>
                        <input type="text" placeholder="Họ và tên" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Mật khẩu" />
                        <button>Đăng ký</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Đăng nhập</h1>
                        <div className="social-container">
                         <a href="https://www.facebook.com/FreeWebsiteCode/" className="social"><i className=""></i><FacebookOutlinedIcon sx={{ color: blue[500] }}/></a>
                                                       <a href="https://twitter.com/freewebsitecode" className="social"><i className="fab fa-twitter"></i><GitHubIcon /></a>
                            <a href="https://www.linkedin.com/in/freewebsitecode/" className="social"><i className="fab fa-linkedin-in"></i><GoogleIcon sx={{ color: red[500] }}/></a>
                        </div>
                        <span>hoặc sử dụng tài khoản của bạn</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Mật khẩu" />
                        <a href="#">Bạn quên mật khẩu?</a>
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
                            <h1>Xin chào,Bạn!</h1>
                            <p>Nhập thông tin cá nhân của bạn và bắt đầu cuộc hành trình với chúng tôi</p>
                            <button className="ghost" id="signUp">Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
