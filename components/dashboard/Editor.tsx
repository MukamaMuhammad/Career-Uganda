"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useEffect } from "react";

const container = [
  ["bold", "italic", "underline"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ align: [] }],
];

const Editor = () => {
  const quillRef = useRef(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];

  useEffect(() => {
    if (quillRef.current && textareaRef.current) {
      // @ts-ignore
      quillRef.current.getEditor().on("text-change", () => {
        // @ts-ignore
        const quillText = quillRef.current.getEditor().root.innerHTML;
        textareaRef.current.value = quillText;
        // setContent(quillText); // Optionally update the state with the content
      });
    }
  }, []);

  return (
    <div className="mt-3">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="Write somethings..."
        // @ts-ignore
        ref={quillRef}
      />
      <textarea
        name="jobDescription"
        id="jobDescription"
        className="hidden outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10"
        ref={textareaRef}
      />
    </div>
  );
};

export default Editor;
