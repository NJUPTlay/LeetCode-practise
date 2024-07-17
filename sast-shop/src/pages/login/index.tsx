import './index.scss'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate=useNavigate()
    return (
        <div className='login'>
            <div style={{textAlign: 'center'}}>登录页</div>
            <button onClick={()=>{navigate('/')}} className='login-botton'>登录跳转</button>
        </div>
    )
}