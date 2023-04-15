import React, {useState} from 'react'
// usestate is a hook in react used in functional components;

export default function TextForm(props) {

    const [Text, setText] = useState("Enter the value here");
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

    function countSpacesForWords(mystr)
    {   let count=0;

        for(let i=0;i<mystr.length;i++)
        {   
            if(mystr[i]==" " && (i+1)<mystr.length && mystr[i+1]!==" ")
            {
                count+=1;
            }
        }
        return count;
    }


    function countSpaces(mystr)
    {   let count=0;

        for(let i=0;i<mystr.length;i++)
        {   
            if(mystr[i]==" ")
            {
                count+=1;
            }
        }
        return count;
    }

    function countWords(mystr)
    {  
        let spaces=countSpacesForWords(mystr);

        if(mystr.length==0)
        return 0;
        else if(spaces>0)
        return spaces+1;
        else
        return 1;
    }
    
    function countCharWithoutSpaces(mystr)
    {
       return mystr.length - countSpaces(mystr);
    }
    function countCharWithSpaces(mystr)
    {
       return mystr.length;
    }
    return (
        <>
            <div className="container my-3">
                <h1>{
                    props.heading
                }</h1>
                <div className="mb-3">
                    <textarea className="form-control border border-3" id="myBox" rows="10"
                        value={Text}
                        onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary "
                    onClick={upperCaseHandle}>Change to UpperCase</button>
                <button className="btn btn-primary mx-3"
                    onClick={lowerCaseHandle}>Change to lowerCase</button>
            </div>

            <div className="container my-3">
                <h1>Your Text Summary</h1>
                 <p>{`${countWords(Text)} Words`}</p>
                 <p>{`${countCharWithSpaces(Text)} Chars with spaces`}</p>
                 <p>{`${countCharWithoutSpaces(Text)} chars without spaces`}</p>
                 
            </div>
        </>
    )
}
