import logo from './logo.svg';
import './App.css';
import  {useEffect, useState} from 'react';
//import Editor from './Editor'
//import Previewer from './Preview';
import style from './box.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFreeCodeCamp} from 'react-icons/fa';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'https://cdn.skypack.dev/remark-gfm@3?dts'

const App = () => {
  const [text, setText] = useState(`# Welcome to my Markdown Previewer!\n
  -------
  ## This is a sub heading...\n
  ------
  ### And here's some other cool stuff:\n
  ------
  Here comes some code, \`<div></div>\`, between 2 backticks.
  \`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make a text **bold**... whoa!

Or _italic_.\

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course, there are lists
  - Some are bulleted.
    - With differend indentation levels.
      - That look like this.
1. And there are number list too.
2. Use just one's if you want
1. And last but not least, let's not forget embedded images

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  `
)

return (
  <div className='App'>
  <div className='container-md' className={style.editor}>
    <div className={style.topEditor}><FaFreeCodeCamp title='yeahhhhhh'/> Editor</div>
    <textarea value={text} className={style.bottomEditor} onChange={e => {setText(e.target.value)}}></textarea>
       </div>

       <div className='d-flex flex-column container-lg bg-primary' className={style.previewer} >
        <div className="row-md p-3 text-center " className={style.topPreviewer}><FaFreeCodeCamp title='yeahhhhhh' /> Previewer</div>
        <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} className="row-md bg-danger overflowy-scroll" className={style.bottomPreviewer}>
            </ReactMarkdown>
        </div>
  </div>
)
}



export default App;
