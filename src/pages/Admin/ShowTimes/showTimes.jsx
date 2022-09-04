import React from 'react'
import { Col, Input, notification, Row, Tabs } from 'antd';
import { Menu} from 'antd';
import { useState } from 'react';
// import { fetchShowTimeApi } from '../../services/showtime';
import { useEffect } from 'react';
import moment from 'moment';
import { fetchShowTimeApi } from '../../../services/Admin/showtime';
const { TabPane } = Tabs;

const { Search } = Input;
export default function ShowTimes() {
    const [current, setCurrent] = useState('1');
    const [rapChieu, setRapChieu] = useState();
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState([]);
    const onClick = (e) => {
        rapChieu?.heThongRapChieu.map((ele) => {
            if (ele.maHeThongRap == e.key) {
                setSelected(ele.cumRapChieu);
            }
        })

    };

    useEffect(() => {
        if (items) {
            const data = [];
            rapChieu?.heThongRapChieu.forEach((ele) => {
                data.push({
                    key: ele.maHeThongRap,
                    icon: '',
                    children: '',
                    label: ele.tenHeThongRap,
                    them: '',
                });
            });
            setItems(data);
        }
    }, [rapChieu])

    const onSearch = async (value) => {
        try{
            const result = await fetchShowTimeApi(value);

            setRapChieu(result.data.content);
        }catch(error){
            notification.success({
                message: error.response.data.content,
              })
        }
        
    }
    return (
        <div>
            <Search className='my-2'
                placeholder="Film code"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
            <Row>
                <Col span={6}>
                    <Menu
                        onClick={onClick}
                        style={{
                            width: 256,
                        }}
                        selectedKeys={[current]}
                        mode="vertical"
                        items={items}
                    />
                </Col>
                <Col span={16}>
                    {
                        selected?.map((ele) => {
                            return (
                                <div key={ele.maCumRap} className="bg-light p-3 mb-2">
                                    <Row>
                                        <Col span={3}>
                                            <img className='w-75' src={ele.hinhAnh} alt="" />
                                        </Col>
                                        <Col span={21}>
                                            <h4>{ele.tenCumRap}</h4>
                                            <span className='text-muted'>{ele.diaChi}</span>
                                        </Col>
                                        <Col>
                                            <Tabs defaultActiveKey={1}>

                                                {
                                                    ele.lichChieuPhim.map((item, i) => {
                                                        return (
                                                            <TabPane tab={moment(item.ngayChieuGioChieu).format('MMMM Do YYYY, h:mm:ss')} key={i}>
                                                                <p>Giá vé: {item.giaVe.toLocaleString('vn-VN')} VND</p>
                                                                <p>Nơi chiếu: {item.tenRap}</p>
                                                            </TabPane>
                                                        )
                                                    })
                                                }
                                            </Tabs>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
        </div>

    );
}
