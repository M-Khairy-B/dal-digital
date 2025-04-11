import { FC, useState, useEffect, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination, Spin, Input, Empty } from 'antd';
import { useHorsesDataQuery } from "../../store/RTKQuery/horsesApi/horsesApi";
import HorseCard from "../Cards/horseCard/HorseCard";

const HorseList: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(() => parseInt(searchParams.get('page') || '1', 10));
    const [searchQuery, setSearchQuery] = useState(() => searchParams.get('query') || '');
    const [breedFilter, setBreedFilter] = useState(() => searchParams.get('breed') || '');

    const { data, isLoading, isError } = useHorsesDataQuery({ params: currentPage });

    useEffect(() => {
        const params = new URLSearchParams();
        if (currentPage !== 1) params.set('page', currentPage.toString());
        if (searchQuery) params.set('query', searchQuery);
        if (breedFilter) params.set('breed', breedFilter);
        setSearchParams(params);
    }, [currentPage, searchQuery, breedFilter, setSearchParams]);

    const handlePageChange = (page: number) => setCurrentPage(page);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: ChangeEvent<HTMLInputElement>) => {
            setter(e.target.value);
            setCurrentPage(1);
        };

    const filteredHorses = data?.data?.data?.filter((horse) =>
        horse.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        horse.breed.toLowerCase().includes(breedFilter.toLowerCase())
    );

    return (
        <>
            {isLoading ? (
                <div className="flex justify-center items-center h-[100px]">
                    <Spin size="large" />
                </div>
            ) : isError ? (
                <div>Error loading data...</div>
            ) : (
                <section className="py-16 bg-gray-100 dark:bg-gray-800">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6 drop-shadow-lg">
                            Our Horses
                        </h2>

                        <div className="flex flex-col items-center mb-8 sm:flex-row justify-center gap-4">
                            <Input
                                placeholder="Search Horses by Name"
                                value={searchQuery}
                                onChange={handleInputChange(setSearchQuery)}
                                className="w-full sm:w-1/2 bg-white dark:bg-gray-700 dark:text-white"
                            />
                            <Input
                                placeholder="Filter by Breed"
                                value={breedFilter}
                                onChange={handleInputChange(setBreedFilter)}
                                className="w-full sm:w-1/2 bg-white dark:bg-gray-700 dark:text-white"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {filteredHorses && filteredHorses.length > 0 ? (
                                filteredHorses.map((horse) => (
                                    <HorseCard key={horse.id} horse={horse} />
                                ))
                            ) : (
                                <div className="col-span-3 flex justify-center items-center h-[300px]">
                                    <Empty description="No horses found matching your search." />
                                </div>
                            )}
                        </div>

                        <div className="mt-8 flex justify-center">
                            <Pagination
                                current={currentPage}
                                total={data?.data?.meta?.total || 0}
                                pageSize={10}
                                onChange={handlePageChange}
                            />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default HorseList;
