import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const SpeechToText = ({ heading }) => {
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })
    const stopListening = () => SpeechRecognition.stopListening


    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

    if (!browserSupportsSpeechRecognition) {
        return null
    }
    const word = transcript.split(' ').filter((element) => { return element.length !== 0 }).length

    return (

        <div className='container my-8'>
            <div>
                <h1 className='text-3xl my-3 capitalize  tracking-widest'>{heading}</h1>
                <textarea id='message' rows='9' value={transcript} className='block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Write your thoughts here...' autoFocus></textarea>
                <div className='my-3'>
                    <p>{transcript}</p>
                    <button className='btn_primary' onClick={startListening}>Start</button>
                    <button className='btn_primary' onClick={stopListening}>Stop</button>
                </div>
            </div>
            <div>
                <p className='capitalize px-3 text-base tracking-widest'>{word} Words And {transcript === '' ? '0' : transcript.trim().length} Character</p>
                <p className='capitalize px-3 text-base tracking-widest'>{transcript === '' ? '0' : (0.008 * word).toFixed(3)} Minutes to read</p>
                <p className='capitalize px-3 text-base tracking-widest'>{transcript === '' ? '0' : transcript.split('\n').length} Number of line</p>
            </div>
        </div>
    )
}

export default SpeechToText
