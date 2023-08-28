import { useState } from 'react';
import QRCode from 'qrcode.react';
import DocumentMeta from 'react-document-meta';

const QRcode = ({ heading }) => {
    const meta = {
        title: 'TextConvert || Text to QRcode',
        description: 'User can make QRcode of their text. URL and any type of text convert in QRcode and also user can download the QRcode',
        canonical: window.location.href,
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'textcase, TextConvert, text to QRcode, convert qrcode , download Qrcode, url to QRcode, Dhruv Akbari',
                robots: 'index, follow',
            }
        }
    };
    const [Text, setText] = useState('')
    const handelOnChange = (event) => {
        setText(event.target.value)
    }
    const downloadQRCode = () => {
        // Generate download with use canvas and stream
        const canvas = document.getElementById('qr-gen');
        const pngUrl = canvas
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream');
        let downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = `textcase_QRcode.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    return (
        <>
            <DocumentMeta {...meta} />

            <div>
                <h1 className='text-3xl my-3 capitalize tracking-widest'>{heading}</h1>
                <textarea id='message' rows='9' onChange={handelOnChange} className='block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Write your thoughts here...'></textarea>
            </div>
            <div className='flex flex-col justify-center align-middle items-center my-4'>
                <QRCode
                    id='qr-gen'
                    value={Text}
                    size={290}
                    level={'H'}
                    includeMargin={true}
                />

                <div className='flex align-middle items-center my-4'>
                    <p className='px-3 text-base tracking-widest'>
                        Click for
                    </p>
                    <button onClick={downloadQRCode} className='btn_primary text-base tracking-widest'>
                        Download QR Code
                    </button>
                </div>
            </div>
        </>
    );
}

export default QRcode;