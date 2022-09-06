import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { USER_INFO_KEY } from "../../../constants/common";
import { signInApi } from "../../../services/user";
import { setUserAction } from "../../../store/actions/user.action";
import "./SignIn.scss";

const SignIn = () => {
  const [showError, setShowError] = useState("d-none");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const {taiKhoan, matKhau} = values;
    const signInData = {taiKhoan, matKhau}
    console.log("Sign In Values: ", signInData);
    try {
      console.log("Signing In...");
      const result = await signInApi(signInData);
      console.log("Sign In result: ", result.data.content);
      dispatch(setUserAction(result.data.content));
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(result.data.content));
      setShowError("d-none");
      message.success(`Welcome Back ${taiKhoan}`);
      navigate("/");
    } catch (error) {
      console.log(error);
      // notification.warning({ message: "Username or Password is incorrect!" });
      // message.error({content:"Username or Password is incorrect!", style: {marginTop: "28vh"}})
      setShowError("d-block");
    }
  };
  return (
    <div className="row justify-center py-5">
      <div className="col-4">
        <h1 className="signIn__header">SIGN IN</h1>
        <div className="card p-3">
          <Form
            name="basic"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <p className={showError + " text-danger signIn__error"}>
              (*) Username or Password is incorrect!
            </p>
            <Form.Item
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>{" "}
              Or <NavLink to="/sign-up">register now!</NavLink>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
