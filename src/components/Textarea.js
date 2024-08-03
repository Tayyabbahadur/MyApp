import React, { useState } from 'react'



export default function Textarea(props) {
    const [Text, setText] = useState("");
    const convertupclick = () => {
        let newtext = Text.toUpperCase()
        setText(newtext)
    }
    const convertloclick = () => {
        let newtext = Text.toLowerCase()
        setText(newtext)
    }
    const convertOnchange = (event) => {
        setText(event.target.value)
    }
    const cleartext = () => {
        setText("")
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(Text)
          
      }
    
    return (
        <>
            <div>
                <h1>{props.hadding}</h1>
                <div className="mb-3" >
                    <label className="form-label"></label>
                    <textarea className="form-control" value={Text} onChange={convertOnchange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={convertupclick}>Convert to Uppercase </button>

                <button className="btn btn-primary mx-1" onClick={convertloclick}>Convert to Lowercase </button>
                <button className="btn btn-primary mx-1" onClick={cleartext}>Clear Text </button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>

            </div>
            <div>
                <br />
                <h2>
                    Your Text Summary
                </h2>
                <p>{Text.split(" ").length} words and {Text.length} characters</p>
                <p>{0.009 * Text.split(" ").length} minutes reading time</p>
                <h3>Preview</h3>
                <p>{Text}</p>
            </div>
        </>
    )
}
