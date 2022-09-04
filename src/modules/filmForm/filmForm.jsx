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
  Image,
  notification,
} from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import moment from "moment";
import { addFilmUpLoadApi, fetchFilmDetailApi, updateFilmApi } from '../../services/Admin/filmList';

export default function FilmForm() {
  const [componentSize, setComponentSize] = useState('default');
  const [image, setImage] = useState();
  const [file, setFile] = useState();
  const [filmDetail, setFilmDetail] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const onFormLayoutChange = (event) => {
    setComponentSize(event.target.value);
  };

  useEffect(() => {
    if (params.filmId) {
      fetchFilmDetail(params.filmId);
    }
  }, [params.filmId]);

  const fetchFilmDetail = async (params) => {
    const result = await fetchFilmDetailApi(params);
    console.log(result);
    setFilmDetail(result.data.content);
  }

  const handleSave = async (values) => {
    values.ngayKhoiChieu = values.ngayKhoiChieu.format('DD/MM/YYYY');
    values.maNhom = 'GP02';

    const formData = new FormData();


    // const { tenPhim,
    //   mota,
    //   ngayKhoiChieu,
    //   sapChieu, dangChieu,
    //   hot, trailer,
    //   danhGia } = values;

    // formData.append("tenPhim", tenPhim);
    // formData.append("trailer", trailer);
    // formData.append("mota", mota);
    // formData.append("ngayKhoiChieu", ngayKhoiChieu);
    // formData.append("sapChieu", sapChieu);
    // formData.append("dangChieu", dangChieu);
    // formData.append("hot", hot);
    // formData.append("danhGia", danhGia);

    for (const key in values) {
      formData.append(key, values[key]);
    }

    file && formData.append("File", file, file.name);

    console.log(formData);
    if (!params.filmId) {
      const result = await addFilmUpLoadApi(formData);
      notification.success({
        description: "Successfully!"
      })

      navigate("/admin/film");
    }else{
      formData.append('maPhim', params.filmId);
      const result = await updateFilmApi(formData);
      notification.success({
        description: "Successfully!"
      })

      navigate("/admin/film");
    }
  }

  useEffect(() => {
    if (filmDetail) {
      form.setFieldsValue({
        ...filmDetail,
        ngayKhoiChieu: moment(filmDetail.ngayKhoiChieu),
      });
      setImage(filmDetail.hinhAnh)
    }
  }, [filmDetail]);

  const handleChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImage(e.target.result);
      setFile(file);
    }
  }

  return (
    <Form
      form={form}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="vertical"
      initialValues={{
        tenPhim: "",
        moTa: "",
        ngayKhoiChieu: "",
        sapChieu: true,
        dangChieu: true,
        hot: true,
        trailer: "",
        danhGia: '',
      }}
      size={componentSize}
      onFinish={handleSave}
    >
      <Form.Item label="Form Size" >
        <Radio.Group defaultValue={componentSize} onChange={onFormLayoutChange}>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Name" name='tenPhim' rules={[
        {
          required: true,
          message: `Please enter name`,
        },
        {
          whitespace: true,
          message: `Please enter name`,
        },
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Trailer" name='trailer' rules={[
        {
          required: true,
          message: `Please enter trailer`,
        },
        {
          whitespace: true,
          message: `Please enter trailer`,
        },
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Desciption" name='moTa' rules={[
        {
          required: true,
          message: `Please enter desciption`,
        },
        {
          whitespace: true,
          message: `Please enter desciption`,
        },
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Release date" name='ngayKhoiChieu' rules={[
        {
          required: true,
          message: `Please provide release date`,
        },
      ]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Now showing" valuePropName="checked" name='dangChieu'>
        <Switch />
      </Form.Item>
      <Form.Item label="Coming soon" valuePropName="checked" name='sapChieu'>
        <Switch />
      </Form.Item>
      <Form.Item label="Hot" valuePropName="checked" name='hot'>
        <Switch />
      </Form.Item>
      <Form.Item label="Evaluate" name='danhGia' rules={[
        {
          required: true,
          message: `Please choose evaluate`,
        },
      ]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label="Image" rules={[
        {
          required: true,
          message: `Please choose image`,
        },
      ]}>
        <Input type="file" onChange={handleChange} />
      </Form.Item>
      <Image src={image}/>
      <Form.Item>
        <Button htmlType='submit' type='primary'>Save</Button>
      </Form.Item>
    </Form>
  );
}
