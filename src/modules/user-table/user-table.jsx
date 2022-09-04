import React, { useEffect, useState } from 'react'
import { notification, Space, Table, Tag } from 'antd';
import { Button } from 'antd';
// import { deleteUserApi, fetchUserListApi } from '../../services/userList';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUserApi, fetchUserListApi } from '../../services/Admin/userList';

const columns = [
    {
        title: 'Username',
        dataIndex: 'taiKhoan',
        key: 'taiKhoan',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Name',
        dataIndex: 'hoTen',
        key: 'hoTen',
    },
    {
        title: 'Type',
        dataIndex: 'loaiNguoiDung',
        key: 'loaiNguoiDung',
    },
    {
        title: 'Phone number',
        key: 'sdt',
        dataIndex: 'sdt',
    },
    {
        title: 'Email',
        key: 'email',
        dataIndex: 'email',
    },
    {
        title: 'Password',
        key: 'matKhau',
        dataIndex: 'matKhau',
    },
    {
        title: 'Action',
        key: 'hanhDong',
        dataIndex: 'hanhDong',
    },
]

export default function UserTable(props) {
    const [userList, setUserList] = useState([]);
    const [data, setData] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        fetchUserList();

    }, []);

    useEffect(() => {
        let data = userList;
        if(props.searchUser){
            data = props.searchUser;
        }else{
            data = userList;
        }
        setData(data?.map((ele, idx) => {
            return {
                key: idx,
                taiKhoan: ele.taiKhoan,
                hoTen: ele.hoTen,
                loaiNguoiDung: ele.maLoaiNguoiDung,
                sdt: ele.soDT,
                email: ele.email,
                matKhau: ele.matKhau,
                hanhDong: <div className='d-flex'>
                    <button className="fa-solid fa-trash-can text-danger" onClick={() => {
                        handleDelete(ele.taiKhoan);
                    }}></button>
                    <button className="fa-solid fa-file-pen text-info mx-2" onClick={() => {
                        navigate('/admin/user/editUser');
                        dispatch({
                            type: "USER_SELECTED",
                            payload: ele,
                        })
                    }}></button>
                </div>
            }
        }))
    }, [userList, props.searchUser])

    const handleDelete = async (TaiKhoan) => {
        try{
            await deleteUserApi(TaiKhoan);

            fetchUserList();
        }catch(error){
            notification.success({
                message: error.response.data.content,
              })
        }
        
    }

    const fetchUserList = async () => {
        const result = await fetchUserListApi();

        setUserList(result.data.content);
    }
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
