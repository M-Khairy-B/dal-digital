import { Layout, Row, Col, Typography, Space, Button } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;
const { Footer } = Layout;


const CustomFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Footer style={{
            backgroundColor: '#001529', padding: '40px 0', color: 'white', overflowX: 'hidden',
        }}>
            <Row justify="center" gutter={[16, 16]}>
                <Col xs={24} sm={8} md={6} style={{ textAlign: 'center' }}>
                    <div className='flex items-center justify-center flex-col'>
                        <img
                            src="https://www.dal-digital.com/wp-content/uploads/2022/10/Logo-e1667135514660.png"
                            alt="Logo"
                            style={{ width: '120px', marginBottom: '16px' }}
                        />
                        <div>
                            <Title level={4} style={{ color: 'white' }}>Your Company</Title>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Delivering excellence every day.</Text>


                        </div>
                    </div>
                </Col>

                <Col xs={24} sm={8} md={6} style={{ textAlign: 'center' }}>
                    <Title level={5} style={{ color: 'white' }}>Quick Links</Title>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Button type="link" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Home</Button>
                        <Button type="link" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>About</Button>
                        <Button type="link" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Solutions</Button>
                        <Button type="link" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Contact</Button>
                    </Space>
                </Col>

                <Col xs={24} sm={8} md={6} style={{ textAlign: 'center' }}>
                    <Title level={5} style={{ color: 'white' }}>Follow Us</Title>
                    <Space size="large" style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button icon={<FacebookOutlined />} shape="circle" size="large" style={{ backgroundColor: '#3b5998', color: 'white' }} />
                        <Button icon={<TwitterOutlined />} shape="circle" size="large" style={{ backgroundColor: '#1DA1F2', color: 'white' }} />
                        <Button icon={<InstagramOutlined />} shape="circle" size="large" style={{ backgroundColor: '#C13584', color: 'white' }} />
                        <Button icon={<LinkedinOutlined />} shape="circle" size="large" style={{ backgroundColor: '#0077b5', color: 'white' }} />
                    </Space>
                </Col>
            </Row>

            <Row justify="center" style={{ marginTop: '20px' }}>
                <Col>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center' }}>
                        &copy; {currentYear} Your Company. All rights reserved.
                    </Text>
                </Col>
            </Row>
        </Footer>
    );
};

export default CustomFooter;
