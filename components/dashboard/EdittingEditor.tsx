"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useEffect } from "react";

const container = [
  ["bold", "italic", "underline"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ align: [] }],
];

// interface IProps {
//   content: string;
//   setContent: React.Dispatch<React.SetStateAction<string>>;
// }

const EdittingEditor = ({ initialContent, onContentChange }) => {
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  const modules = { toolbar: { container } };

  const handleQuillChange = (content: string) => {
    setContent(content);
    onContentChange(content); // Pass the updated content to the parent component
  };

  // useEffect(() => {
  //   if (quillRef.current) {
  //     quillRef.current.getEditor().on("text-change", () => {
  //       const quillText = quillRef.current.getEditor().getText();
  //       // textareaRef.current.value = quillText;
  //       setContent(quillText); // Optionally update the state with the content
  //     });
  //   }
  // }, []);

  return (
    <div className="mt-3">
      <textarea
        name="jobDescription"
        id="jobDescription"
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        className="mb-10 outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10"
      />
      <ReactQuill
        theme="snow"
        modules={modules}
        placeholder="Write somethings..."
        value={content}
        onChange={handleQuillChange}
        // @ts-ignore
        // ref={quillRef}
      />
    </div>
  );
};

export default EdittingEditor;
