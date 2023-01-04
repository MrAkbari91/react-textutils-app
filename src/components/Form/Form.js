import React, { useState } from 'react';
import copy from "copy-to-clipboard";


export default function From({ heading, showAlert }) {
    const Uppercase = () => {
        const newText = Text.toUpperCase();
        setText(newText)
        if (Text === "") {
            showAlert("Please enter text")
        } else {
            showAlert("converted in Uppercase")
        }
    }
    const lowercase = () => {
        const newText = Text.toLowerCase();
        setText(newText)
        if (Text === "") {
            showAlert("Please enter text")
        } else {
            showAlert("converted in Lowercase")
        }
    }
    const trim = () => {
        const newText = Text.replace(/\s+/g, ' ');;
        setText(newText)
        if (Text === "") {
            showAlert("Please enter text")
        } else {
            showAlert("remove extra space")
        }
    }
    // const TitleCase = () => {
    //     const newText = Text.replace(/\b\w/g, function (l) { return l.toUpperCase() })
    //     setText(newText)
    // }

    const copyText = () => {
        copy(Text);
        if (Text === "") {
            showAlert("Please enter text")
        } else {
            showAlert("Copied to clipboard")
        }
        // setText(newText)
    }
    const trimExtraSpace = () => {
        const newText = Text.split(/[ ]+/).join(" ");
        setText(newText)
        if (Text === "") {
            showAlert("Please enter text")
        } else {
            showAlert("Extra space removed")
        }
        // setText(newText)
    }

    const ClearText = () => {
        setText("")
        if (Text === "") {
            showAlert("already Empty")
        } else {
            showAlert("Cleared text")
        }
    }

    const inverse = () => {
        var newText = '';
        var i = 0;
        while (i < Text.length) {
            var n = Text.charAt(i);
            if (n === n.toUpperCase()) {
                n = n.toLowerCase();
            } else {
                n = n.toUpperCase();
            }
            i += 1;
            newText += n;
        }
        setText(newText)
        if (Text === "") {
            showAlert("Please enter text", "dander")
        } else {
            showAlert("Reversed text")
        }
    }
    const TitleCase = () => {
        let newText = Text.split(' ')
            .map((word, index) => {
                return word.charAt(0)
                    .toUpperCase() + word.slice(1)
                        .toLowerCase();
            })
            .join(' ');
        setText(newText);
        if (Text === "") {
            showAlert("Please enter text", "dander")
        } else {
            showAlert("Converted in Title Case")
        }
    };

    const handelOnChange = (event) => {
        setText(event.target.value)
    }
    const [Text, setText] = useState("")

    const word = Text.split(" ").filter((element) => { return element.length !== 0 }).length


    return (
        <>
            <div className="container my-8 ">
                <div>
                    <h1 className='text-3xl my-3 capitalize'>{heading}</h1>
                    <form>
                        <textarea id="message" rows="9" value={Text} onChange={handelOnChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        <div className="my-3">
                            <button className="btn_primary" disabled={Text.length === 0} onClick={Uppercase}>Uppercase</button>
                            <button className="btn_primary" disabled={Text.length === 0} onClick={lowercase}>lowercase</button>
                            <button className="btn_primary" disabled={Text.length === 0} onClick={TitleCase}>Title case</button>
                            <button className="btn_primary" disabled={Text.length === 0} onClick={trim}>Trim text</button>
                            <button className="btn_primary" disabled={Text.length === 0} onClick={trimExtraSpace}>remove extra space</button>
                            <button className="btn_primary" disabled={Text.length === 0} onClick={inverse}>Inverse </button>
                            <button className="btn_primary" disabled={Text.length === 0} onClick={copyText}>Copy Text</button>
                            <button className="btn_primary" disabled={Text.length === 0} onClick={ClearText}>Clear text</button>
                        </div>
                    </form>
                </div>
                <div>
                    <p className='capitalize px-3'>{word} Words And {Text === "" ? "0" : Text.trim().length} Character</p>
                    <p className='capitalize px-3'>{Text === "" ? "0" : (0.008 * word).toFixed(3)} Minutes to read</p>
                    <p className='capitalize px-3'>{Text === "" ? "0" : Text.split("\n").length} Number of line</p>
                </div>
            </div>

        </>
    )
}