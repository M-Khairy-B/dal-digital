import React from "react";
import { Link } from "react-router-dom";
import { Horse } from "../../types/horseList";

interface HorseCardProps {
    horse: Horse;
}

const HorseCard: React.FC<HorseCardProps> = ({ horse }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <Link to={`/horses/${horse.id}`}>
                <img
                    className="w-full h-64 object-cover"
                    src={horse.image}
                    alt={horse.name}
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://i.ibb.co/WNg9PXkG/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpg";
                    }}
                />
            </Link>
            <div className="p-6 text-left">
                <Link to={`/horses/${horse.id}`}>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 hover:underline">
                        {horse.name}
                    </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-300 mb-1"><span className="font-semibold">Father Name:</span> {horse.father_name}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-1"><span className="font-semibold">Mother Name:</span> {horse.mother_name}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-1"><span className="font-semibold">Breed:</span> {horse.breed}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-1"><span className="font-semibold">Date of Birth:</span> {horse.date_of_birth}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-1"><span className="font-semibold">Gender:</span> {horse.gender?.name_ar}</p>

                <div className="border-t mt-4 pt-4">
                    <div className="flex items-center gap-3">
                        <img
                            src={horse.user?.image || "http://frosiatech_itcalax.jeyad360.com/organization/public/assets/dashboard/users/default.jpg"}
                            alt={horse.user?.first_name || "Unknown"}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-sm font-medium text-gray-800 dark:text-white">
                                {horse.user?.first_name ? `${horse.user.first_name} ${horse.user.last_name}` : "Unknown"}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{horse.user?.email || "No email available"}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <a
                        href={horse.paternity_certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                    >
                        View Certificate
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HorseCard;
