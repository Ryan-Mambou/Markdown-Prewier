import React from "react";
import {FaFreeCodeCamp} from 'react-icons/fa';
import  {useEffect, useState} from 'react';
import Previewer from './Preview';
import style from './box.module.css';
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
/** 
const Editor = () => {
    const [text, setText] = useState("# Welcome to my Markdown Previewer!\# This is a sub heading...\And here's some other cool stuff:\d")
    return ( 
        <div className={style.editor}>
    <div className={style.topEditor}><FaFreeCodeCamp title='yeahhhhhh'/> Editor</div>
    <textarea value={text} className={style.bottomEditor} onChange={e => {setText(e.eventPhase.value)}}>{text}</textarea>
       </div>
    );
    */


//export default Editor;