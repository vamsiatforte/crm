// TextEditor.js
import styles from './TextEditor.module.css'
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
      <p className={`${styles.title}`}>Call history</p>
      <div className={styles.pColor}>
        <Editor
          apiKey="l42d054lu6hw84jq8nw1m8jc6flcn2svzz4r2qscoasx1nt1"
          onInit={(evt, editor) => editorRef.current = editor}
          init={{
            height: 400,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic underline | copy pastetext",
            paste_as_text: true,
            body_class: styles.editorBody,
          }}
         
        />
      </div>
      <div className='d-flex justify-content-end gap-2 m-3'>
        <button className='btn btn-primary'>cancel</button>
        <button className='btn btn-primary'>save</button>
        <button className='btn btn-primary' onClick={handleClear}>clear</button>
      </div>
    </div>
  );
};

export default TextEditor;