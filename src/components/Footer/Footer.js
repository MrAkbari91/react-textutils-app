import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer(props) {
    let year = new Date().getFullYear();
    return (
        <footer className='p-4 bg-gray-100 sm:p-6 dark:bg-gray-900 relative absolute w-full bottom-0'>
            <hr className='my-6 border-gray-300 sm:mx-auto dark:border-gray-500 lg:my-8' />

            <div className='md:flex md:justify-between'>
                <div className='mb-6 md:mb-0'>
                    <Link to='/' className='flex items-center'>
                        <span className='self-center text-3xl whitespace-nowrap dark:text-white logo'>{props.logo}</span>
                    </Link>
                </div>
                <div>
                    <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Follow us</h2>
                    <ul className='text-gray-600 dark:text-gray-400'>
                        <li className='mb-4'>
                            <a href='https://github.com/Mrakbari91' className='hover:underline '>Github</a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/mr._akbari._/' className='hover:underline'>Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className='my-6 border-gray-300 sm:mx-auto dark:border-gray-500 lg:my-8' />
            <div className='sm:flex sm:items-center sm:justify-between'>
                <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>© {year} <Link to='https://dhruvakbari.netlify.app' className=''>Dhruv Akbari</Link>. All Rights Reserved.
                </span>
                <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
                    <a href='https://www.facebook.com/dhruvakbari91' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                        <FaFacebook />
                        <span className='sr-only'>Facebook page</span>
                    </a>
                    <a href='https://www.instagram.com/mr._akbari._/' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                        <FaInstagram />
                        <span className='sr-only'>Instagram page</span>
                    </a>
                    <a href='https://twitter.com/mr_akbari_91' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                       <FaTwitter />
                        <span className='sr-only'>Twitter page</span>
                    </a>
                    <a href='https://github.com/Mrakbari91' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                        <FaGithub />
                        <span className='sr-only'>GitHub account</span>
                    </a>
                </div>
            </div>
        </footer>



    );
}

export default Footer;

