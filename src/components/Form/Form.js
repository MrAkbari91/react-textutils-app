import React, { useState } from 'react';
import copy from "copy-to-clipboard";


export default function From({ heading }) {
    const Uppercase = () => {
        const newText = Text.toUpperCase();
        setText(newText)
    }
    const lowercase = () => {
        const newText = Text.toLowerCase();
        setText(newText)
    }
    const trim = () => {
        const newText = Text.replace(/\s+/g, ' ');;
        setText(newText)
    }
    const TitleCase = () => {
        const newText = Text.replace(/\b\w/g, function (l) { return l.toUpperCase() })
        setText(newText)
    }

    const Binary = () => {
        let newText = '';
        for (var i = 0; i < Text.length; i++) {
            newText += Text[i].charCodeAt(0).toString(2) + " ";
        }
        setText(newText)
    }
    const binaryToText = () => {
        var text = Text.toString().trim().split(' ');
        text = text.map(elem => parseInt(elem, 2));
        text = text.map(elem => String.fromCharCode(elem));
        let newText = text.join("").toUpperCase();
        setText(newText)
    }

    const copyText = () => {
        copy(Text);
        // setText(newText)
    }
    const ClearText = () => {
        setText("")
    }

    const inverse = () => {
        var s = '';
        var i = 0;
        while (i < Text.length) {
            var n = Text.charAt(i);
            if (n == n.toUpperCase()) {
                // *Call* toLowerCase
                n = n.toLowerCase();
            } else {
                // *Call* toUpperCase
                n = n.toUpperCase();
            }
            i += 1;
            s += n;
        }
        setText(s)
    }

    const handelOnChange = (event) => {
        setText(event.target.value)
    }
    const [Text, setText] = useState("")


    return (
        <>
            <div className="container my-8">
                <div>
                    <h1 className='text-3xl my-3'>{heading}</h1>
                    <form>
                        <textarea id="message" rows="9" value={Text} onChange={handelOnChange} placeholder='Enter the text'></textarea>
                        <div className="btn_primary" onClick={Uppercase}>Uppercase</div>
                        <div className="btn_primary" onClick={lowercase}>lowercase</div>
                        <div className="btn_primary" onClick={TitleCase}>Title case</div>
                        <div className="btn_primary" onClick={trim}>Trim text</div>
                        <div className="btn_primary" onClick={inverse}>Inverse </div>
                        <div className="btn_primary" onClick={Binary}>Binary </div>
                        <div className="btn_primary" onClick={binaryToText}>Binary to text</div>
                        <div className="btn_primary" onClick={copyText}>Copy Text</div>
                        <div className="btn_primary" onClick={ClearText}>Clear text</div>
                    </form>
                </div>
                <div>
                    <p>{Text.split(" ").length} Words And {Text.length} Character</p>
                    <p>{0.008 * Text.split(" ").length} Minutes to read</p>
                </div>
            </div>

        </>
    )
}