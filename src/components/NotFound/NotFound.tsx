import { Link } from 'react-router-dom';
import { NotFoundIcon } from '../ui/icons/NotFoundIcon';
import { FC } from 'react';

const NotFound: FC = () => {
    return (
        <div className="flex justify-center items-center gap-[10px] h-screen bg-white dark:bg-[#121212] transition-colors duration-300">
            <NotFoundIcon />

            <div className="flex justify-center items-center flex-col md:gap-[10px] gap-0 text-center p-[40px] md:p-0">
                <h1 className="md:text-[148px] text-[100px] text-[#0C281E] dark:text-white md:font-[600] font-[400]">
                    404
                </h1>
                <h2 className="md:text-[27px] lg:text-[40px] text-[32px] text-[#0C281E] dark:text-white font-[400]">
                    Page Not Found
                </h2>
                <p className="md:text-[20px] lg:text-[25px] text-[16px] text-[#0C281E] dark:text-gray-300 font-[500] w-8/12 mb-[12px]">
                    We’re sorry. The page you requested could not be found. Please go back to the home page.
                </p>
                <Link to="/">
                    <button className="text-[#D7D7D7] w-[130px] md:w-[184px] bg-[#0C281E] dark:bg-white dark:text-black h-[40px] md:h-[55px] text-[18px] md:text-[24px] font-[400] md:font-[600] leading-[100%] rounded-[12px] transition-all duration-300">
                        GO HOME
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
