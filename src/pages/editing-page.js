import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NoteEditor = () => {
  const [content, setContent] = useState("");
  const quillRef = useRef(null); // Custom ref

  const handleEditorChange = (value) => {
    console.log("Editor changed Value: " + value);
    setContent(value);
  };

  const handleNewLine = () => {
    setContent("<h1><i>ongfon</i></h1><p><h3>koefeoangoiaegnoa</h3></p>");
    console.log(content);
  };

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
    }
  }, []);

  const applyFormat = (format) => {
    const editor = quillRef.current.getEditor();
    const range = editor.getSelection(); // Get the current selection

    if (range) {
      editor.format(format, true); // Apply the selected format
    }
  };

  return (
    <div>
      <div className="custom-toolbar">
        <button onClick={() => applyFormat("bold")}>Bold</button>
        <button onClick={() => applyFormat("italic")}>Italic</button>
        <button onClick={() => applyFormat("underline")}>Underline</button>
        <button onClick={() => applyFormat("header", 1)}>Header 1</button>
        <button onClick={() => applyFormat("header", 2)}>Header 2</button>
        <button onClick={() => applyFormat("list", "ordered")}>
          Ordered List
        </button>
        <button onClick={() => applyFormat("list", "bullet")}>
          Bullet List
        </button>
        <button onClick={() => applyFormat("blockquote")}>Blockquote</button>
      </div>
      <ReactQuill
        ref={quillRef} // Attach the ref here
        value={content}
        onChange={handleEditorChange}
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ align: [] }],
            ["link", "image"],
          ],
        }}
        theme="snow"
      />
      <button onClick={handleNewLine}>click</button>
    </div>
  );
};

export default NoteEditor;
