import {useState} from "react";
import {marked} from "marked";
import './App.css'
const initialMarkdown = `
# Header (H1 size)

## Sub Header (H2 size)

[This is a link](https://www.example.com)

\`Inline code\`

\`\`\`
Code block
\`\`\`

- List item

> Blockquote

![Image](https://via.placeholder.com/150)

**Bolded text**
`;
marked.setOptions({
  breaks: true,
});
function App() {
const [text, setText] = useState(initialMarkdown);
const handleChange=(event)=>{
  setText(event.target.value)
}
const createMarkup = (text)=>{
  return {__html: marked(text)};
}
  return (
    <>
    <h1>MarkDown PreViewer</h1>
    <textarea name="text" id="editor" value={text} onChange={handleChange}></textarea>
    <div id="preview"
     dangerouslySetInnerHTML={createMarkup(text)}></div>
      </>
  )
}

export default App
