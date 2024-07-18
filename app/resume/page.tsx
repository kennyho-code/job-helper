"use client";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

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
    </div>
  );
}

function Uploader() {
  const supabase = createClient();

  const [data, setData] = useState<{
    image: string | null;
  }>({ image: null });
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();
  console.log(data);
  return (
    <div>
      <div
        className="w-[400px] h-[400px] bg-slate-400 rounded-lg p-4 flex justify-center items-center"
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
          // 250mb
          const limit = file.size / 1024 / 1024 > 250;

          if (limit) {
            toast({
              title: "File Not Accepted",
              description:
                "Your file is too big! Please upload a file smaller than 250mb",
            });
            return;
          }

          setFile(file);
          console.log(file);
          const reader = new FileReader();
          console.log(reader);
          reader.onload = (e) => {
            setData((prev) => ({
              ...prev,
              image: e.target?.result as string,
            }));
            console.log("data: ", data);
          };
          reader.readAsDataURL(file);
        }}
      ></div>
      <button
        onClick={async () => {
          const supabaseAuth = await supabase.auth.getUser();
          const userId = supabaseAuth.data.user?.id;
          const users = await supabase
            .from("resumes")
            .upsert({ userId, resumeContent: data });
          console.log(users);
        }}
      >
        upload
      </button>
    </div>
  );
}

export default ResumePage;
