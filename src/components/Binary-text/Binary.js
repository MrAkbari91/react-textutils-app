import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import DocumentMeta from 'react-document-meta';

function Binary({ heading, showAlert }) {
    const meta = {
        title: 'TextConvert || Decode your binary code',
        description: 'encode text in to binary text and Decode your binary text here ',
        canonical: window.location.href,
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'textcase, TextConvert, textchange, text to binary, binary to text, decode binary text, Dhruv Akbari'
            }
        }
    };

    const Binary = () => {
        let newText = '';
        for (var i = 0; i < Text.length; i++) {
            newText += Text[i].charCodeAt(0).toString(2) + ' ';
        }
        setText(newText)
        if (Text === '') {
            showAlert('Please enter text')
        } else {
            showAlert('converted in Binary ')
        }
    }

    const binaryToText = () => {
        var text = Text.toString().trim().split(' ');
        text = text.map(elem => parseInt(elem, 2));
        text = text.map(elem => String.fromCharCode(elem));
        let newText = text.join('').toUpperCase();
        setText(newText)
        if (Text === '') {
            showAlert('Please enter text')
        } else {
            showAlert('converted in Binary')
        }
    }

    const copyText = () => {
        copy(Text);
        if (Text === '') {
            showAlert('Please enter text')
        } else {
            showAlert('Copied to clipboard')
        }
    }
    const ClearText = () => {
        setText('')
        if (Text === '') {
            showAlert('already Empty')
        } else {
            showAlert('Cleared text')
        }
    }

    const handelOnChange = (event) => {
        setText(event.target.value)
    }
    const [Text, setText] = useState('')

    const word = Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length


    return (
        <>
            <DocumentMeta {...meta} />

            <div className='container my-8'>
                <div>
                    <h1 className='text-3xl my-3 capitalize  tracking-widest'>{heading}</h1>
                    <textarea id='message' rows='9' value={Text} onChange={handelOnChange} className='block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Write your thoughts here...'></textarea>
                    <div className='my-3'>
                        <button className='btn_primary' disabled={Text.length === 0} onClick={Binary}>Binary </button>
                        <button className='btn_primary' disabled={Text.length === 0} onClick={binaryToText}>Binary to text</button>
                        <button className='btn_primary' disabled={Text.length === 0} onClick={copyText}>Copy Text</button>
                        <button className='btn_primary' disabled={Text.length === 0} onClick={ClearText}>Clear text</button>
                    </div>
                </div>
                <div>
                    <p className='capitalize px-3 text-base tracking-widest'>{word} Words And {Text === '' ? '0' : Text.trim().length} Character</p>
                    <p className='capitalize px-3 text-base tracking-widest'>{Text === '' ? '0' : (0.008 * word).toFixed(3)} Minutes to read</p>
                    <p className='capitalize px-3 text-base tracking-widest'>{Text === '' ? '0' : Text.split('\n').length} Number of line</p>
                </div>
            </div>

        </>
    )
}

export default Binary;