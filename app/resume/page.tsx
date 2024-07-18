"use client";
import { useState } from "react";

function ResumePage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">Upload Resume</h1>
      Resume Page
      <div>
        <p>Upload your resume.</p>
        <p>Accepted Formats: pdf, docx</p>
        <Uploader />
      </div>
      <button>upload</button>
    </div>
  );
}

function Uploader() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  console.log(dragActive);
  return (
    <div
      className="w-[400px] h-[400px] bg-slate-400"
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
        console.log("over");
      }}
      onDragEnter={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
        console.log("over");
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        const file = e.dataTransfer.files && e.dataTransfer.files[0];
        console.log(file);
      }}
    >
      uploader
    </div>
  );
}

export default ResumePage;
