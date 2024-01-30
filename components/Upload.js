import Image from "next/image";

import { useState } from "react";

import Loader from "./Loader";
import CsvTable from "./CsvTable";

const Upload = () => {
  const [csvData, setCsvData] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [uploadStatus, setUploadStatus] = useState({
    isUploading: false,
    isUploaded: false,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    setSelectedFile(file.name);
    setUploadStatus({ ...uploadStatus, isUploaded: false });

    const reader = new FileReader();
    reader.onload = (e) => {
      setCsvData(e.target.result);
    };
    reader.readAsText(file);
  };
console.log(csvData);
  return (
    <section className="flex-1 max-[450px]:w-fit w-full flex flex-col">
      <p className="md:hidden pl-8 text-base-bold text-text font-nunito max-md:mt-7">
        Upload CSV
      </p>
      <div className="sm:px-12 px-8 md:py-[100px] py-6 flex flex-col items-center sm:gap-5 gap-4">
        <div className="flex flex-col items-center justify-center gap-4 border border-dashed border-[#EBEBEB] rounded-lg max-w-[596px] min-h-80 h-full w-full">
          <label
            htmlFor="fileInput"
            className="flex flex-col gap-4 items-center cursor-pointer"
          >
            <Image src="/assets/excel.svg" alt="excel" width={28} height={28} />
            {!selectedFile && (
              <p className="sm:text-base-regular text-small-regular text-trunks font-figtree">
                Drop your excel sheet here or{" "}
                <span className="text-primary">browse</span>
              </p>
            )}
          </label>

          {selectedFile && (
            <p className="sm:text-base-regular text-small-regular text-trunks font-figtree">
              {selectedFile}
            </p>
          )}
          {selectedFile && (
            <p
              className="text-[#da5252] text-base-semibold"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedFile("");
                const fileInput = document.getElementById("fileInput");
                if (fileInput) {
                  fileInput.value = "";
                }
              }}
            >
              Remove
            </p>
          )}
          <input
            type="file"
            id="fileInput"
            accept=".csv"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <button
          type="button"
          className={`min-h-10 p-2 bg-primary rounded-lg flex justify-center gap-2 max-w-[596px] w-full ${uploadStatus.isUploaded === true && "bg-opacity-40 pointer-events-none"}`}
          onClick={() => {
            if (selectedFile) {
              setUploadStatus({ ...uploadStatus, isUploading: true });
              const fileInput = document.getElementById("fileInput");
                if (fileInput) {
                  fileInput.value = "";
                }
              setTimeout(() => {
                setUploadStatus({
                  ...uploadStatus,
                  isUploading: false,
                  isUploaded: true,
                });
                setSelectedFile("");
              }, 1000);
            }
          }}
        >
          {selectedFile && uploadStatus.isUploading ? (
            <Loader />
          ) : (
            <>
              <Image
                src="/assets/upload.svg"
                alt="upload"
                width={24}
                height={24}
              />

              <p className="font-figtree text-small-semibold text-light">
                Upload
              </p>
            </>
          )}
        </button>
      </div>
      {uploadStatus.isUploaded && <CsvTable csvData={csvData} />}
    </section>
  );
};

export default Upload;
