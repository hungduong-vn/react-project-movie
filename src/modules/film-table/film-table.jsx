import React, { useState, useEffect } from 'react'
import { notification, Space, Table, Tag } from 'antd';
import { Button } from 'antd';
import './index.scss'
import { useNavigate } from 'react-router-dom';
import { deleteFilm, fetchFilmListApi } from '../../services/Admin/filmList';

export default function FilmTable({ text }) {
    const [filmList, setFilmList] = useState([]);
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);
    const [textSearch, setTextSearch] = useState("");
    const navigate = useNavigate();

    const DEFAULT_COLUMNS = [
        {
            title: 'Film code',
            dataIndex: 'maPhim',
            key: 'maPhim',
        },
        {
            title: 'Image',
            dataIndex: 'hinhAnh',
            key: 'hinhAnh',
        },
        {
            title: 'Name',
            dataIndex: 'tenPhim',
            key: 'tenPhim',
        },
        {
            title: 'Description',
            key: 'moTa',
            dataIndex: 'moTa',
        },
        {
            title: 'Action',
            key: 'hanhDong',
            dataIndex: 'hanhDong',
        },
    ];

    const handleDelete = async (maPhim) => {
        await deleteFilm(maPhim);
        fetchFilmList();
        notification.success({
            description: "Successfully!"
        })
    }

    useEffect(() => {
        fetchFilmList();
    }, [])

    useEffect(() => {
         let dataRd = [];
        if(!text){
            dataRd = filmList;
        }else{
            dataRd = filmList.filter((ele) => {
                return (
                    ele.tenPhim
                        .toLowerCase()
                        .trim()
                        .indexOf(text?.toLowerCase().trim()) !== -1)
            }); 
        }

        setData(dataRd.map((ele, idx) => {
            return {
                key: idx,
                maPhim: ele.maPhim,
                hinhAnh: <img src={ele.hinhAnh} className="w-25"></img>,
                tenPhim: ele.tenPhim,
                moTa: <span className="label_title">{ele.moTa}</span>,
                hanhDong: <div>

                    <i className="fa-solid fa-trash-can text-danger" onClick={() => {
                        handleDelete(ele.maPhim);
                    }}></i>
                    <i className="fa-solid fa-file-pen text-info mx-2" onClick={() => {
                        navigate(`/admin/film/${ele.maPhim}/update`);
                    }}></i>
                    <i className="fa-solid fa-calendar-days text-success" onClick={() => {
                        navigate(`/admin/film/showtime/${ele.maPhim}`);
                    }}></i>
                </div>,
            }
        }))
        setColumns(DEFAULT_COLUMNS);

    }, [text, filmList])
    const fetchFilmList = async () => {
        const result = await fetchFilmListApi();

        setFilmList(result.data.content);
        console.log(result.data.content);
    }
    return (
        <div>
            <Table columns={columns} dataSource={data} />;
        </div>
    )
}
