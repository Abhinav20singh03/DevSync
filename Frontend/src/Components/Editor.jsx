import React, { useEffect, useRef, useState } from 'react';
import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag.js";
import "codemirror/addon/edit/closebrackets.js";
import "./Editor.css";
import ACTIONS from '../actions';

const Editor = ({ socketRef, roomId, onCodeChange }) => {

    const [result,setResult] = useState("");
    
    const editorRef = useRef(null); 
    const textareaRef = useRef(null); 

    useEffect(() => {
        // Ensure textarea exists before initializing CodeMirror
        if (textareaRef.current && !editorRef.current) { 
            editorRef.current = Codemirror.fromTextArea(textareaRef.current, {
                mode: { name: "javascript", json: true },
                theme: "dracula",
                autoCloseTags: true,
                autoCloseBrackets: true,
                lineNumbers: true
            });

            // Attach change event only after CodeMirror is initialized
            editorRef.current.on("change", (instance, change) => {
                const { origin } = change;
                const code = instance.getValue();
                onCodeChange(code);
                if (origin !== 'setValue') {
                    console.log(code);
                    socketRef.current.emit(ACTIONS.CODE_CHANGE, {
                        roomId,
                        code
                    });
                }
            });
        }


    
    }, []);
    const runCode = () => {
        const code = editorRef.current.getValue();
       // Store original console.log
    const originalConsoleLog = console.log;
    let output = "";

    // Override console.log to capture logs
    console.log = (...args) => {
        output += args.join(" ") + "\n"; // Append logs to output string
    };

    try {
        new Function(code)(); // Execute user code
        setResult(output);
    } catch (error) {
       setResult(error.message);
    }

    // Restore original console.log
    console.log = originalConsoleLog;
        }
    


    useEffect(()=>{
        if(socketRef.current){
            socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
                if (editorRef.current && code !== null) {
                    editorRef.current.setValue(code); 
                }
            });
        }

        return () => {
            socketRef.current.off(ACTIONS.CODE_CHANGE)
        };

    },[socketRef.current])

    return (
        <div className='component-container'>
            <textarea ref={textareaRef} className='realTimeCodeEditor'></textarea>
            <div className='output'> 
            Output
            <button className='run-button' onClick={runCode}>Run Code</button>
            
            <div className='output-window'>
            
            {
                result
            }
            </div>
            </div>
        </div>
    );
};

export default Editor;
