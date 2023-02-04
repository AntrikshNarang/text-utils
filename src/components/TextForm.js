import React, {useState} from 'react'
let resetText = "Hey There";

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
        resetText = text;
    }
    const handleLowClick = ()=>{
        setText(text.toLowerCase());
    }
    const handleClearClick = ()=>{
        setText("");
    }
    const handleResetClick = ()=>{
        setText(resetText);
    }
    const handleCapitalizeText = ()=>{
        let newText = text.split(" ");
        for (let i = 0; i<newText.length;i++){
            newText[i] = newText[i].slice(0,1).toUpperCase() + newText[i].slice(1,newText[i].length);
        }
        //Joins all Array elements to form a string with a " " in between
        setText(newText.join(" "));

        // let finalText = "";
        // for(let i=0;i<newText.length;i++){
        //     finalText = finalText + newText[i] + " ";
        // }
        // setText(finalText);
    }

    const handleCopy = () => {
        // let text = document.getElementById("mybox");
        // text.select(); Select Function can select text from a value (a,b) between a and b, without arguments it selects all the text from a textbox
        // navigator.clipboard.writeText(text.value);
        if(document.getElementById('mybox').value!==""){
            navigator.clipboard.writeText(text);
            props.showAlert('Text Copied to Clipboard','success');
        }
        else{
            props.showAlert('Empty Textbox','warning');
        }
    }

    const handlePaste = () => {
        navigator.clipboard.readText().then((clipText)=>{
                setText(clipText);
                props.showAlert('Text Pasted Successfully','success');
                return;
            })
            props.showAlert('Read Permission Not Available','warning');
        
    }

    const handleExtraSpaces = () =>{
        //Using Regex
        let newText = text.split(/[ ]+/); 
        setText(newText.join(" "));
    }

    const wordCount = () =>{
        let count=0;
        text.split(" ").forEach(element => {
            if(element===""){
                count++;
            }
        });
        return text.split(" ").length - count;
    }
    let noOfWords = wordCount();
    
    return (
        <>
        <div className='Container my-2' style={{color:props.mode==='light'?'black':'white'}}>
            <div className="mb-3">
                {/* Single Curly Brace '{}' means we are going to use JS, Double Curly Brace '{{ }}; means we are going to use an Object inside JS' */}
                <label htmlFor="mybox" className="form-label" style={{fontSize:2 + 'rem',fontWeight:600}}>{props.heading}</label>
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'lightgray':'white',color:props.mode==='light'?'black':'gray'}} placeholder="Enter Text Here" onChange={handleOnChange} id="mybox" rows="3"></textarea>
                <button disabled={text.length===0} type='button' className='btn btn-primary my-2 mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} type='button' className='btn btn-primary my-2 mx-1' onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} type='button' className='btn btn-primary my-2 mx-1' onClick={handleCapitalizeText}>Cap Text</button>
                <button disabled={text.length===0} type='button' className='btn btn-primary my-2 mx-1' onClick={handleExtraSpaces}>Remove Extra Space</button>
                <button disabled={text.length===0} type='button' className='btn btn-primary my-2 mx-1' onClick={handleClearClick}>Clear</button>
                <button type='button' className='btn btn-primary my-2 mx-1' onClick={handleResetClick}>Reset</button>
                <button type='button' className='btn btn-primary my-2 mx-1' onClick={handleCopy}>Copy</button>
                <button type='button' className='btn btn-primary my-2 mx-1' onClick={handlePaste}>Paste</button>
            </div>
        </div>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter(t=>t.length!==0).length} Words</p>
            <p>{noOfWords} Words and {text.length} Characters</p>
            <p>{text.split(" ").filter((element)=>{return element!==""}).length*0.008} minutes to Read</p>
            {/* .filter returns the element if the condition is met/true */}
            <h3>Preview</h3>
            <p>{text.length===0?'Nothing to Preview':text}</p>
        </div>
        </>
    )
}
