import React, { useState } from 'react'
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  TimePicker,
  notification,
} from 'antd';
import moment from 'moment';
import { createTimeApi, fetchCinemaGroupListApi, fetchCinemaListApi } from '../../../services/Admin/filmList';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function AddShowTime() {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const params = useParams();
  const [cinemaList, setCinemaList] = useState();
  const [maRap, setMaRap] = useState();
  const [rapList, setRapList] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetchCinemaList();
  }, [])

  useEffect(() => {
    if (maRap) {
      fetchCinemaGroupList(maRap);
    }
  }, [maRap])

  const fetchCinemaList = async () => {
    const result = await fetchCinemaListApi();

    setCinemaList(result.data.content);
  }

  const fetchCinemaGroupList = async (maRap) => {
    const result = await fetchCinemaGroupListApi(maRap);

    setRapList(result.data.content);
  }

  const handleSubmit = async (values) => {
    values.ngayChieuGioChieu = `${values.ngayChieu.format('DD/MM/YYYY')} ${values.gioChieu.format('hh:mm:ss')}`;
    delete values.ngayChieu;
    delete values.gioChieu;
    values.maPhim = params.filmId;
    try {
      await createTimeApi(values);
      notification.success({
        message: "Successfully!",
      });
      navigate("/admin/film");
    } catch (error) {
      notification.success({
        message: error.response.data.content,
      })
      console.log(error.response.data.content);
    }
  }

  const handleChange = (e) => {
    setMaRap(e);
  }

  return (
    <div>
      <h2>Tạo lịch chiếu</h2>

      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={handleSubmit}
      >
        <Form.Item label="Hệ thống rạp" name="heThongRap" rules={[
          {
            required: true,
            message: "Please enter input",
          }
        ]}>
          <Select onChange={handleChange}>
            {
              cinemaList?.map((ele) => {
                return <Select.Option key={ele.maHeThongRap} value={ele.maHeThongRap}>{ele.tenHeThongRap}</Select.Option>
              })
            }
          </Select>
        </Form.Item>
        <Form.Item label="Cụm rạp" name="maRap" rules={[
          {
            required: true,
            message: `Please enter input`,
          },
        ]}>
          <Select>
            {
              rapList?.map((ele) => {
                return <Select.Option key={ele.maCumRap} value={ele.maCumRap}>{ele.tenCumRap}</Select.Option>
              })
            }
          </Select>
        </Form.Item>

        <Form.Item label="Ngày chiếu" name="ngayChieu" rules={[
          {
            required: true,
            message: `Please provide release date`,
          },
        ]}>
          <DatePicker />
        </Form.Item>
        <Form.Item label="Giờ chiếu" name="gioChieu" rules={[
          {
            required: true,
            message: `Please provide release time`,
          },
        ]}>
          <TimePicker />
        </Form.Item>
        <Form.Item label="Giá vé" name="giaVe" rules={[
          {
            required: true,
            message: `Please enter price`,
          },
        ]}>
          <InputNumber min={60000} max={200000} />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' type='primary'>Save</Button>
        </Form.Item>

      </Form>
    </div>
  );
}
