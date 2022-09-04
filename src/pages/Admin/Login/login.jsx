import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { USER_INFO_KEY } from '../../constants/common';
import { LoginApi } from '../../services/login';
import { setUserInfoAction } from '../../store/actions/user.action';
import './index.scss'

export default function Login() {
    const [state, setState] = useState({
        taiKhoan: "",
        matKhau: "",
    });

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleChange = (event) => {
        const {name, value} = event.target;
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const result = await LoginApi(state);
        localStorage.setItem(USER_INFO_KEY, JSON.stringify(result.data.content));
        dispatch(setUserInfoAction(result.data.content));

        navigate("/admin/user");
        console.log(result);
    }
    return (
        <form className="screen-1 w-50 mx-auto " onSubmit={handleSubmit}>
            <div className="email mt-3">
                <label htmlFor="email" className='text-info'>User</label>
                <div className="sec-2">
                    <ion-icon name="mail-outline" />
                    <input onChange={handleChange} className='w-100' type="text" name="taiKhoan" placeholder="nguyenvanA" />
                </div>
            </div>
            <div className="password">
                <label htmlFor="password" className='text-info'>Password</label>
                <div className="sec-2">
                    <ion-icon name="lock-closed-outline" />
                    <input onChange={handleChange} className="pas w-100 " type="password" name="matKhau" placeholder="············" />
                    <ion-icon className="show-hide" name="eye-outline" />
                </div>
            </div>
            <button type='submit' className="login">Login </button>
        </form>

    )
}
