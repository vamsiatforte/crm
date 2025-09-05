// TextEditor.js
import styles from './TextEditor.module.css';
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from 'react';

const TextEditor = () => {
  const editorRef = useRef(null);

  const handleClear = () => {
    if (editorRef.current) {
      editorRef.current.setContent('');
    }
  };

  return (
    <div className={`px-2 ${styles.editorContainer}`}>
      <p className={styles.title}>Call history</p>
      <div className={styles.pColor}>
        <Editor
          tinymceScriptSrc="https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.8.2/tinymce.min.js"
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            height: 400,
            menubar: false,
            plugins: ["lists", "link", "paste", "help", "wordcount", "checklist", "textcolor"],
            toolbar: "bold italic underline | backcolor | checklist numlist bullist |copy paste",
            paste_as_text: true,
            body_class: styles.editorBody,
          }}
        />
      </div>
      <div className="d-flex justify-content-end gap-2 m-3">
        <button className="btn btn-primary">cancel</button>
        <button className="btn btn-primary">save</button>
        <button className="btn btn-primary" onClick={handleClear}>clear</button>
      </div>
    </div>
  );
};

export default TextEditor;
