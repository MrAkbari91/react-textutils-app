import React from 'react';
import { FaCircleInfo } from 'react-icons/fa6';

function Alert(props) {
    return (

        props.alert && <div id='alert-3' className={`fixed right-6 my-5 w-fit m-auto flex p-4 mb-4 ${props.alert.type === 'danger' ? 'bg-red-200 rounded-lg dark:bg-red-300' : 'bg-green-200 rounded-lg dark:bg-green-300'}`} role='alert'>
            < FaCircleInfo className={`flex-shrink-0 w-5 h-5 ${props.alert.type === 'danger' ? 'text-red-700 dark:text-red-800' : 'text-green-700 dark:text-green-800'}`} />
            <span className='sr-only'>Info</span>
            <div className={`ml-3 text-sm font-medium ${props.alert.type === 'danger' ? 'text-red-700 dark:text-red-800' : 'text-green-700 dark:text-green-800'}`}>
                {props.alert.message}
            </div>
        </div>
    );
}

export default Alert;