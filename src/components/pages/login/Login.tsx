import { FC, useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ProConfigProvider, ProFormCheckbox, ProFormText, LoginForm } from '@ant-design/pro-components';
import { Tabs, theme, ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import { useLoginMutation } from '../../../store/RTKQuery/auth/authApi';
import { CookieEnum, setCookie } from '../../../utilities/cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type LoginType = 'account';

export const Login: FC = () => {
    const { token } = theme.useToken();
    const [loginType] = useState<LoginType>('account');
    const [loginUser, { data, isSuccess }] = useLoginMutation();
    const navigate = useNavigate();
    useEffect(() => {
        if (isSuccess) {
            setCookie(CookieEnum.token, data?.data?.token);
            toast.success('Login successful!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate('/horses');

        }
    }, [isSuccess, data, navigate]);

    return (
        <div className="h-screen flex items-center justify-center bg-white">
            <ConfigProvider locale={enUS}>
                <ProConfigProvider hashed={false}>
                    <div style={{ backgroundColor: token.colorBgContainer }}>
                        <LoginForm
                            logo="https://www.dal-digital.com/wp-content/uploads/2022/10/Logo-e1667135514660.png"
                            title="dal-digital"
                            subTitle="The world's largest code hosting platform"
                            onFinish={async (values) => {
                                await loginUser(values);
                                return true;
                            }}
                            submitter={{
                                searchConfig: {
                                    submitText: 'Login'
                                }
                            }}
                        >
                            <Tabs centered activeKey={loginType} onChange={() => { }}>
                                <Tabs.TabPane key={'account'} tab={'Account Login'} />
                            </Tabs>

                            <ProFormText
                                name="email"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <UserOutlined className={'prefixIcon'} />,
                                }}
                                placeholder={'Username: admin or user'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your username!',
                                    },
                                ]}
                            />
                            <ProFormText.Password
                                name="password"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined className={'prefixIcon'} />,
                                    strengthText:
                                        'Password should contain numbers, letters, and special characters, at least 8 characters long.',
                                    statusRender: (value?: string) => {
                                        const getStatus = () => {
                                            if (value && value.length > 12) {
                                                return 'ok';
                                            }
                                            if (value && value.length > 6) {
                                                return 'pass';
                                            }
                                            return 'poor';
                                        };
                                        const status = getStatus();
                                        if (status === 'pass') {
                                            return (
                                                <div style={{ color: token.colorWarning }}>
                                                    Strength: Medium
                                                </div>
                                            );
                                        }
                                        if (status === 'ok') {
                                            return (
                                                <div style={{ color: token.colorSuccess }}>
                                                    Strength: Strong
                                                </div>
                                            );
                                        }
                                        return (
                                            <div style={{ color: token.colorError }}>Strength: Weak</div>
                                        );
                                    },
                                }}
                                placeholder={'Password: *********'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your password!',
                                    },
                                ]}
                            />
                            <div style={{ marginBlockEnd: 24 }}>
                                <ProFormCheckbox noStyle name="autoLogin">
                                    Remember me
                                </ProFormCheckbox>
                                <a style={{ float: 'right' }}>Forgot password?</a>
                            </div>
                        </LoginForm>
                    </div>
                </ProConfigProvider>
            </ConfigProvider>
        </div>
    );
};

