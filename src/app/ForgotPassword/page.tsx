'use client';

import logo from "/public/images/logo.png";
import style from "@/styles/ForgotPassword.module.css";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ForgotPassword = () => {
     const router = useRouter()
        const handleReturn= () => {
  
    router.push("/Login")
  }
    return (
        <div className={style["parent-container"]}>
            <div className={style["container-forgot-pass"]}>
               
                
                <div className={style["form-container-forgot-pass sign-in-container"]}>
                    
                    <form className={style['form-container-forgot-pass']}>
                          <div>
                            <Image src={logo} alt="logo" style={{ width: '100%', height: 'auto' }} />
                        </div>
                       
                        <h1>Quên mật khẩu</h1>
                        <input className={style['input-forgot-pass']} type="email" placeholder="Vui lòng nhập Email" />
                        <button className={style['button-forgot-pass']} type='button'>Gửi</button>
                        <a className={style["return-login"]} onClick={()=>handleReturn()}>Quay lại</a>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
