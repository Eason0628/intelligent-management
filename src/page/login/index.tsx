// @ts-ignore
import './index.scss'
import logo from "../../assets/logo.png" // webpack 默认只处理js资源，不处理图片资源，通过相对路径引入图片资源不好使
import bg from "../../assets/bg.jpg"
import lgbg from "../../assets/lgbg.jpg"
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import http from "../../utils/http/http";

// import { login } from "../../api/users";
// import { setToken } from "../../store/login/authSlice";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
function Login() {
    const [form] = Form.useForm()

    return (
        <div className="login" style={{ backgroundImage: `url(${bg})` }}>
            <div className="lgbg" style={{ backgroundImage: `url(${lgbg})` }}>
                <div className="part">
                    <div className="title">
                        <div className="logo">
                            <img src={logo} width={100} />
                        </div>
                        <h1>朋远智慧园区管理平台</h1>
                    </div>

                    <Form
                        form={form}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: '用户名不能为空' },
                                { pattern: /^\w{4,8}$/, message: "用户名必须是4-8位数字字母组合" },
                            ]}
                        >
                            <Input placeholder="请输入您的用户名" prefix={<UserOutlined />} />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '密码不能为空' }]}
                        >
                            <Input.Password placeholder="请输入您的密码" prefix={<LockOutlined />} />
                        </Form.Item>

                        <Form.Item >
                            <Button
                                type="primary"
                                style={{ width: "100%" }}
                            // onClick={handleLogin}
                            // loading={loading}
                            >
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default Login
