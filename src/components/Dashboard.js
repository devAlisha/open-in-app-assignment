// src/components/Dashboard.js
import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../slices/authSlice';
import { logout } from '../actions/authActions';
import { RxAvatar, RxBell, RxDashboard, RxMagnifyingGlass } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import Chart from './Chart';
import Chart2 from './Chart2';
import Modal from './Modal';
import { IoLogoWhatsapp } from 'react-icons/io5';
const Dashboard = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    const row1 = [
        {
            title: 'Total Revenue',
            value: '$2,129,430',
            percentage: '+2.5%',
            icon: 'TotalRevenueIcon.svg',
            bgColor: 'bg-custom-green-1'
        }, {
            title: 'Total Transactions',
            value: '1520',
            percentage: '+1.7%',
            icon: 'TotalTransactionsIcon.svg',
            bgColor: 'bg-custom-yellow-1'
        }, {
            title: 'Total Likes',
            value: '9721',
            percentage: '+1.4%',
            icon: 'TotalLikesIcon.svg',
            bgColor: 'bg-custom-pink-1'
        }, {
            title: 'Total Users',
            value: '9721',
            percentage: '+4.2%',
            icon: 'TotalUsersIcon.svg',
            bgColor: 'bg-custom-purple-1'
        },
    ];

    const products = [
        {
            title: 'Basic Tees',
            value: '55%',
            color: 'bg-custom-green-1'
        }, {
            title: 'Custom Short Pants',
            value: '31%',
            color: 'bg-custom-yellow-1'
        }, {
            title: 'Super Hoodies',
            value: '15%',
            color: 'bg-custom-pink-1'
        }
    ]

    const profileData = JSON.parse(localStorage.getItem('profileData'));
    const hasprofileData = Array.isArray(profileData) && profileData.length > 0;


    return (
        <div>



            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full sm:p-7">
                    <div className="h-full p-10 overflow-y-auto bg-custom-blue rounded-2xl text-white">
                        <Link to="/">
                            <img src="\Board..svg" className='mb-10' alt="Board Icon" />
                        </Link>

                        <ul className="space-y-2 font-medium">
                            <li>
                                <a href="#" className="flex items-center py-2 rounded-lg group">
                                    <RxDashboard className="w-5 h-5 mr-1" />
                                    <span className="ml-3">Dashboard</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </aside>

            <div className="p-7 sm:ml-80">
                <div className="rounded-lg">

                    <div className='my-4 flex justify-between'>
                        <h1 className="text-2xl font-bold text-gray-800 text-start">Dashboard</h1>
                        <div className='flex gap-5 items-center'>
                            <div class="relative mx-auto text-gray-600">
                                <input class="border border-gray-200 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                    type="search" name="search" placeholder="Search" />
                                <button type="submit" class="absolute right-0 top-0 mt-3 mr-3">
                                    <RxMagnifyingGlass />
                                </button>
                            </div>
                            <div className='cursor-pointer'>
                                <RxBell />
                            </div>
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <RxAvatar className='w-8 h-8' />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-start cursor-pointer" role="menuitem">
                                                Welcome, {user.displayName}
                                            </div>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <div onClick={handleLogout} className="block w-full text-start cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Sign Out
                                            </div>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4 mb-8">


                        {row1.map((item) => (
                            <div className={`flex items-center justify-start p-8 pb-4 rounded-2xl shadow-xl shadow-shadow-color border-2 border-b-0`}>
                                <p className="text-2xl flex flex-col gap-y-2 w-full">
                                    <div className={` ${item.bgColor} p-2 rounded-full w-8`}>
                                        <img src={`\\${item.icon}`} alt="Board Icon" />
                                    </div>
                                    <div className='text-start text-md'>
                                        {item.title}
                                    </div>
                                    <div className='flex justify-between items-baseline'>
                                        <span className='text-3xl font-bold'>
                                            {item.value}
                                        </span>
                                        <span className='text-sm text-green-500'>{item.percentage}</span>
                                    </div>
                                </p>
                            </div>
                        ))
                        }
                    </div>

                    <div className="border-2 rounded-2xl mb-8">
                        <Chart />
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="border-2 rounded-2xl mb-8 p-8 pb-2">

                            <div className='flex justify-between items-center mb-4'>
                                <div className='text-xl font-bold'>Top Products</div>
                                <div className='text-sm text-gray-500'>May - June 2021</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-8 items-center">
                                <div >
                                    <Chart2 />
                                </div>
                                <div className='flex flex-col gap-y-4'>

                                    {
                                        products.map((item) => (
                                            <div className='mb-4'>
                                                <div className='flex gap-4 items-baseline mb-2'>
                                                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                                                    <div className='font-bold'>
                                                        <div>
                                                            {item.title}
                                                        </div>
                                                        <div className='text-gray-500 text-start font-normal text-sm'>
                                                            {item.value}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`border-2 rounded-2xl mb-8 flex w-full ${hasprofileData ? '' : 'items-center justify-center'} p-8`}>
                            {hasprofileData ? (
                                <div className=' w-full'>
                                    {profileData.map((profile, index) => (
                                        <div key={index}>
                                            <div className='text-3xl font-bold text-start'>
                                                {profile.name}
                                            </div>

                                            <div className=' w-full '>
                                                <div className='flex justify-start mt-16 gap-20'>

                                                    <div className='mb-4 flex'>
                                                        <IoLogoWhatsapp className='mr-5 w-5 h-5 text-custom-green-1' />
                                                        <div className='text-sm text-gray-500 text-start text-lg font-normal'>
                                                            {profile.phone}
                                                        </div>
                                                    </div>
                                                    <div className='mb-4 flex'>
                                                        <img src='\envelope.svg' alt="envelope Icon" className='mr-5' />

                                                        <div className='text-sm text-gray-500 text-start text-lg font-normal'>
                                                            {profile.email}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex justify-start mt-8 gap-20'>

                                                    {
                                                        profile.youtube && <div className='mb-4 flex'>
                                                            <img src='\Software.svg' alt="software Icon" className='mr-5' />
                                                            <div className='text-sm text-gray-500 text-start text-lg font-normal'>
                                                                {profile.youtube}
                                                            </div>
                                                        </div>
                                                    }
                                                    {
                                                        profile.instagram && <div className='mb-4 flex'>
                                                            <img src='\chat.svg' alt="chat Icon" className='mr-5' />

                                                            <div className='text-sm text-gray-500 text-start text-lg font-normal'>
                                                                {profile.instagram}
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            ) : (
                                <Modal />
                            )}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
