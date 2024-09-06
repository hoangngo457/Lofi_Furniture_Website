'use client' // khi nào mà dùng sự kiện hay gì đó thì dùng nó để nó render 1 phần những giao diện thôi
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button';
const Login= ()=>{
    const router = useRouter()
    return (<div>
        Login  here
         <button type="button" onClick={() => router.push('/')}>

      Trang chủ
    </button>
    <Button  variant="contained" onClick={() => router.push('/Register')}>Hello world</Button>
    </div>
    )


}
export default Login;