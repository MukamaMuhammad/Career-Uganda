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

interface IProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const Editor: React.FC<IProps> = ({ content, setContent }) => {
  const quillRef = useRef<typeof ReactQuill>(null);
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
        value={content}
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
