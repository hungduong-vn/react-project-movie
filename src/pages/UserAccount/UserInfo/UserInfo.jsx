import { Button, Col, Form, Input, message, Row } from "antd";
import React from "react";
import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserInfoApi,
  signInApi,
  UpdateUserInfoApi,
} from "../../../services/user";
import { MOVIE_GROUP_ID, USER_INFO_KEY } from "../../../constants/common";
import { setUserAction, updateUserInfoAction } from "../../../store/actions/user.action";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  pattern: { mismatch: "${label} is not valid" },
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */
export default function UserInfo({ userProfile }) {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const {
    matKhau,
    hoTen,
    soDT,
    email,
    taiKhoan,
    maLoaiNguoiDung,
    accessToken,
  } = userProfile;
  const initialValues = {
    user: {
      matKhau,
      hoTen,
      soDT,
      email,
      taiKhoan,
    },
  };
  const onFinish = async (values) => {
    // console.log(values);
    const submitUpdateUserInfo = {
      ...values.user,
      maLoaiNguoiDung,
      maNhom: MOVIE_GROUP_ID,
    };
    console.log({ submitUpdateUserInfo });
    const result = await UpdateUserInfoApi(submitUpdateUserInfo);
    console.log("Update User result: ", result.data.content);
    const signInResult = await signInApi({ taiKhoan, matKhau });
    localStorage.setItem(
      USER_INFO_KEY,
      JSON.stringify(signInResult.data.content)
    );
    dispatch(setUserAction(signInResult.data.content));
    setIsEdit(false);
    message.success("Successfully Updated!");
  };

  return (
    <>
      <div className="d-flex justify-end mb-4">
        {isEdit ? (
          <button
            className="btn btn-outline-danger"
            onClick={() => setIsEdit(false)}
          >
            X Cancel
          </button>
        ) : (
          <button
            className="btn btn-outline-dark d-flex align-items-center"
            onClick={() => setIsEdit(true)}
          >
            <EditOutlined />
            <span className="pl-2"> Edit</span>
          </button>
        )}
      </div>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        labelWrap
        colon={false}
        labelAlign="left"
        initialValues={initialValues}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name={["user", "taiKhoan"]}
              label="Username"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input disabled={!isEdit} />
            </Form.Item>
            <Form.Item
              name={["user", "matKhau"]}
              label="Password"
              rules={[
                { required: true },
                {
                  pattern:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "Password must have at least 8 characters, 1 letter, 1 number and 1 special character",
                },
              ]}
              validateTrigger="onBlur"
            >
              <Input.Password type="password" disabled={!isEdit} />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                },
                { required: true },
              ]}
              validateTrigger="onBlur"
            >
              <Input disabled={!isEdit} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={["user", "soDT"]}
              label="Phone Number"
              rules={[
                {
                  pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]{9,11}$/g,
                },
                { required: true },
              ]}
            >
              <Input disabled={!isEdit} />
            </Form.Item>
            <Form.Item
              name={["user", "hoTen"]}
              label="Full Name"
              rules={[{ required: true }]}
            >
              <Input disabled={!isEdit} />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
              {isEdit && (
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {/* <button className="btn btn-outline-dark" onClick={handleGetUser}>
        Get User
      </button> */}
    </>
  );
}
