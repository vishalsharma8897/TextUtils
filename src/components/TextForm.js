import React, {useState} from 'react'
import {useRef} from 'react';
// usestate is a hook in react used in functional components;

export default function TextForm(props) {

    const [Text, setText] = useState("");

    const textAreaRef = useRef(null);
    const [copyText, setCopy] = useState("Copy");
    // Text is a var and setText is used to update the text value;
    // "Enter the value here is initial text in Text"
    // we can only update the value of text var using setText only;
    // Text = "ahafa"  // not allowed;
    // setText("ajjfafajfj"); allowed;

    // function here;

    function upperCaseHandle(event) {
        let currentText = Text;
        let newText = currentText.toUpperCase();
        setText(newText);

    }
    function lowerCaseHandle(event) {
        let currentText = Text;
        let newText = currentText.toLowerCase();
        setText(newText);

    }
    function handleOnChange(event) {
        let newText = event.target.value;
        setText(newText);
    }

    const clearText = () => {
        setText("");
    }

    function copyToClipBoard() {
        textAreaRef.current.select();

        navigator.clipboard.writeText(textAreaRef.current.value).then(() => {
            setCopy("Copied");
        }).catch((err) => {
            setCopy("Error")
        });
        // navigator.clipboard is inbuilt object in browser ;
        setTimeout(() => {
            textAreaRef.current.blur();
            setCopy("Copy");
        }, 1000);

    }
    function handlePrint() {
        const newWindow = window.open("", "Print Window");
        newWindow.document.write(`  <html>
           <head>
           <title>Print Text</title>
           <body>
            ${
            textAreaRef.current.value
        }
            </body>
            </head>
            </html>
           `)
        newWindow.print();
        newWindow.close();
    }

    // / functions to counts words and spaces ;************************************
    function countSpacesForWords(mystr) {
        let count = 0;

        for (let i = 0; i < mystr.length; i++) {
            if (mystr[i] === " " && (i + 1) < mystr.length && mystr[i + 1] !== " ") {
                count += 1;
            }
        }
        return count;
    }


    function countSpaces(mystr) {
        let count = 0;

        for (let i = 0; i < mystr.length; i++) {
            if (mystr[i] === " ") {
                count += 1;
            }
        }
        return count;
    }

    function countWords(mystr) {
        let spaces = countSpacesForWords(mystr);

        if (mystr.length === 0) 
            return 0;
         else if (spaces > 0) 
            return spaces + 1;
         else 
            return 1;
        


    }

    function countCharWithoutSpaces(mystr) {
        return mystr.length - countSpaces(mystr);
    }
    function countCharWithSpaces(mystr) {
        return mystr.length;
    }
    return (
        <>
            <div className="container my-3">

                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="d-inline-block">
                        {
                        props.heading
                    }</h1>
                    <div className="printcopy ms-auto">
                        <button type="button"
                            onClick={copyToClipBoard}
                            className="btn btn-outline-primary ">
                            <i className="bi bi-clipboard"></i>
                            {copyText} </button>
                        <button type="button"
                            onClick={handlePrint}
                            className="btn btn-outline-primary mx-2">
                            <i className="bi bi-clipboard"></i>
                            Print</button>
                    </div>
                </div>


                <div className="mb-3">
                    <textarea className="form-control border border-3"
                        ref={textAreaRef}
                        id="myBox"
                        rows="10"
                        value={Text}
                        onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary "
                    onClick={upperCaseHandle}>Change to UpperCase</button>
                <button className="btn btn-primary mx-3"
                    onClick={lowerCaseHandle}>Change to lowerCase</button>
                <br/>
                <button className="btn btn-success my-1"
                    onClick={clearText}>
                    Clear Text
                </button>
            </div>

            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{
                    `${
                        countWords(Text)
                    } Words`
                }</p>
                <p>{
                    `${
                        countCharWithSpaces(Text)
                    } Chars with spaces`
                }</p>
                <p>{
                    `${
                        countCharWithoutSpaces(Text)
                    } chars without spaces`
                }</p>

                {/* I could use text.split.length to find the number of words and normally use text.length to find the number of chars but to be very precise i have made my own logic to find the no. of words here  */}


                <h6>{
                    `An Average Person would take ${
                        countWords(Text) * 0.008
                    } mins to read`
                }</h6>

                <h3>Preview</h3>
                <p>{Text}</p>

            </div>
        </>
    )
}
