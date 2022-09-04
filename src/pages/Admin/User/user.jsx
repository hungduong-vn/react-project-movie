import React, { useEffect, useState } from 'react'
import { Input } from 'antd';

import { Button } from 'antd';
// import UserTable from '../../modules/user-table/user-table';
import { fetchSearchUserApi } from '../../../services/Admin/userList';
import UserTable from '../../../modules/user-table/user-table';


const { Search } = Input;

export default function User() {
  const [searchUser, setSearchUser] = useState();
  const [key, setKey] = useState();
  const onSearch = (value) => {
    if (value == "") {
      setSearchUser();
    } else {
      fetchSearchUser(value);
    }
  };

  const fetchSearchUser = async (tuKhoa) => {
    const result = await fetchSearchUserApi(tuKhoa);

    setSearchUser(result.data.content);
    console.log(result.data.content);
  }

  return (
    <div>
      <h2 className='text-info'>User management</h2>
      <Search className='my-2'
        placeholder="Tìm tài khoản"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        onPressEnter={(e) => {
          onSearch(e.target.defaultValue)
        }}
      />
      <div>
        <UserTable searchUser={searchUser}></UserTable>
      </div>
    </div>
  )
}
