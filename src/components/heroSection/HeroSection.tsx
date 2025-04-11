import { FC } from 'react';

export const HeroSection: FC = () => {
    return (
        <section className="relative w-full h-[800px] bg-[url('https://i.ibb.co/kkD3v9d/ai-generated-horses-picture.jpg')] bg-cover bg-center ">
            <div className="absolute inset-0 bg-black opacity-40 dark:bg-black dark:opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white dark:text-gray-800 tracking-tight leading-tight">
                    Welcome to HorseWorld
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 dark:text-gray-800 mb-8 max-w-2xl mx-auto">
                    Explore the Elegance of Horses
                </p>
            </div>
        </section>
    );
};
