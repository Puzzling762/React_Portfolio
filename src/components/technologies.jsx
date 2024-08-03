import React from 'react';
import CustomBox from './CustomBox';
import tailwind from '../assets/tailwind.svg';
import jupyter from '../assets/jupyter.svg';
import numpy from '../assets/numpy.svg';
import pandas from '../assets/pandas.svg';
import powerbi from '../assets/powerbi.svg';

const Technologies = () => {
    return (
        <div id="Technologies" className="lg:p-12 sm:p-12 p-4">
            <CustomBox height="250px">
                <div>
                    <div className="flex justify-center p-4">
                        <div>
                            <span className="text-blue-500 font-semibold sm:text-4xl lg:text-4xl text-2xl">SOFTWARE EXPERIENCE</span>
                        </div>
                    </div>
                    <div className="flex flex-nowrap justify-center items-center lg:gap-10 sm:gap-4 gap-2 p-4 overflow-x-auto">
                        <div className="hover:scale-110 transition-transform">
                            <img className="sm:w-20 w-16" src="https://techstack-generator.vercel.app/js-icon.svg" alt="JavaScript Logo" />
                        </div>
                        <div className="hover:scale-110 transition-transform">
                            <img className="sm:w-20 w-16" src="https://techstack-generator.vercel.app/react-icon.svg" alt="React Logo" />
                        </div>
                        <div className="hover:scale-110 transition-transform">
                            <img className="sm:w-20 w-16" src="https://techstack-generator.vercel.app/redux-icon.svg" alt="Redux Logo" />
                        </div>
                        <div className="hover:scale-110 transition-transform">
                            <img className="sm:w-20 w-16" src={tailwind} alt="Tailwind CSS Logo" />
                        </div>
                        <div className="hover:scale-110 transition-transform">
                            <img className="sm:w-20 w-16" src="https://techstack-generator.vercel.app/cpp-icon.svg" alt="C++ Logo" />
                        </div>
                        <div className="hover:scale-110 transition-transform">
                            <img className="sm:w-20 w-16" src="https://techstack-generator.vercel.app/python-icon.svg" alt="Python Logo" />
                        </div>
                        <div className="hover:scale-110 transition-transform">
                            <img className="sm:w-20 w-16" src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="MySQL Logo" />
                        </div>
                        <div className="hover:scale-110 transition-transform">
                            <img className="sm:w-20 w-16" src={jupyter} alt="Jupyter Logo" />
                        </div>
                        <div className="hover:scale-110 transition-transform">
                            <img className="sm:w-20 w-16" src={numpy} alt="NumPy Logo" />
                        </div>
                        <div className="hover:scale-110 transition-transform">
                            <img className="sm:w-20 w-16" src={pandas} alt="Pandas Logo" />
                        </div>
                        <div className="hover:scale-110 transition-transform">
                            <img className="sm:w-20 w-16" src={powerbi} alt="Power BI Logo" />
                        </div>
                    </div>
                </div>
            </CustomBox>
        </div>
    );
}

export default Technologies;
