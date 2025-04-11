import { FC } from 'react';
import { Card, Descriptions, Avatar, Image, Tag, Spin, Empty } from 'antd';
import { useParams } from "react-router-dom";
import { useHorseDetailsQuery } from '../../store/RTKQuery/horsesApi/horsesApi';

const HorseDetails: FC = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useHorseDetailsQuery(Number(id));
    const horse = data?.horse;

    return isLoading ? (
        <div className="flex justify-center items-center h-[200px]">
            <Spin size="large" />
        </div>
    ) : isError || !horse ? (
        <div className="text-center text-red-500">Error loading data or no data available.</div>
    ) : (
        <div className="container mx-auto p-4 grid gap-4">
            <Card
                title={horse.name}
                extra={<Tag color="blue">{horse.gender?.name_ar || 'Not specified'}</Tag>}
                cover={<Image height={300} src={horse.image} alt="Horse Image" />}
            >
                <Descriptions column={1} bordered>
                    <Descriptions.Item label="Horse Number">{horse.horse_number}</Descriptions.Item>
                    <Descriptions.Item label="Date of Birth">{horse.date_of_birth}</Descriptions.Item>
                    <Descriptions.Item label="Breed">{horse.breed}</Descriptions.Item>
                    <Descriptions.Item label="Father's Name">{horse.father_name}</Descriptions.Item>
                    <Descriptions.Item label="Mother's Name">{horse.mother_name}</Descriptions.Item>
                </Descriptions>
            </Card>

            <Card title="Owner">
                <div className="flex items-center gap-4">
                    <Avatar
                        size={64}
                        src={horse.user?.image || "http://frosiatech_itcalax.jeyad360.com/organization/public/assets/dashboard/users/default.jpg"}
                    />
                    <div>
                        <div>{horse.user?.first_name ? `${horse.user.first_name} ${horse.user.last_name}` : 'Unknown'}</div>
                        <div className="text-sm text-gray-500">{horse.user?.email || "No email"}</div>
                        <div className="text-sm text-gray-500">{horse.user?.phone || "No phone"}</div>
                    </div>
                </div>
            </Card>

            <Card title="Services">
                {horse.services?.length ? (
                    horse.services.map(service => (
                        <Descriptions key={service.id} column={1} size="small" bordered>
                            <Descriptions.Item label="Price">💵 {service.price} EGP</Descriptions.Item>
                            <Descriptions.Item label="Status">
                                <Tag color={service.payment?.status === 'completed' ? 'green' : 'red'}>
                                    {service.payment?.status || 'N/A'}
                                </Tag>
                            </Descriptions.Item>
                            <Descriptions.Item label="Payment Method">{service.payment?.payment_method || 'N/A'}</Descriptions.Item>
                        </Descriptions>
                    ))
                ) : (
                    <Empty description="No services found." />
                )}
            </Card>

            <Card title="Packages">
                {horse.packages?.length ? (
                    horse.packages.map(pkg => (
                        <Descriptions key={pkg.id} column={1} size="small" bordered>
                            <Descriptions.Item label="Category">{pkg.service_category?.name_ar || 'Unknown'}</Descriptions.Item>
                            <Descriptions.Item label="Period">{pkg.period}</Descriptions.Item>
                            <Descriptions.Item label="Price">💵 {pkg.price} EGP</Descriptions.Item>
                            <Descriptions.Item label="Payment Method">{pkg.payment?.payment_method || 'N/A'}</Descriptions.Item>
                        </Descriptions>
                    ))
                ) : (
                    <Empty description="No packages available." />
                )}
            </Card>

            <Card title="Residence Place">
                {horse.place ? (
                    <Descriptions column={1} bordered>
                        <Descriptions.Item label="Number">{horse.place.number}</Descriptions.Item>
                        <Descriptions.Item label="Category">{horse.place.category?.name || 'Not specified'}</Descriptions.Item>
                    </Descriptions>
                ) : (
                    <Empty description="No residence information." />
                )}
            </Card>
        </div>
    );
};

export default HorseDetails;
