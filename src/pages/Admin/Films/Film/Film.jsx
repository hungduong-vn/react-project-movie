import React, { useState } from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button } from 'antd';
import './index.scss'
// import FilmTable from '../../../modules/film-table/film-table';
import { useNavigate } from 'react-router-dom';
import FilmTable from '../../../../modules/film-table/film-table';

const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);



export default function Film() {
    const navigate = useNavigate();
    const [text, searchText] = useState();

    const onSearch = (value) => {
        searchText(value);
        
    };

    return (
        <div>
            <h2 className='text-info'>Film management</h2>
            <Button onClick={() => navigate('/admin/film/addFilm')}><b>Add film</b></Button>
            <Search className='my-2'
                placeholder="Tìm tên phim"
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
                <FilmTable text={text}/>
            </div>
        </div>
    )
}
