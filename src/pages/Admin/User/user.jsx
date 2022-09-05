import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { fetchSearchUserApi } from '../../../services/Admin/userList';
import UserTable from '../../../modules/user-table/user-table';


const { Search } = Input;

export default function User() {
  const [searchUser, setSearchUser] = useState();

  const navigate = useNavigate();

  const onSearch = (value) => {
    // if (value == "") {
    //   setSearchUser();
    // } else {
    //   fetchSearchUser(value);
    // }
    setSearchUser(value)
  };

  const fetchSearchUser = async (tuKhoa) => {
    const result = await fetchSearchUserApi(tuKhoa);

    setSearchUser(result.data.content);
    console.log(result.data.content);
  }

  return (
    
    <div>
      <h2 className='text-info'>User management</h2>
      <Button onClick={() => navigate('/admin/user/register')}><b>Add User</b></Button>
      <Search className='my-2'
        placeholder="Tìm theo tên"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        onPressEnter={(e) => {
          onSearch(e.target.defaultValue)
        }}
        onChange={(e) => {
          onSearch(e.target.value)
        }}
      />
      <div>
        <UserTable searchUser={searchUser}></UserTable>
      </div>
    </div>
  )
}
