import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";

import Dropdown from "./Dropdown";

function CsvTable({ csvData }) {
  // Parse CSV data
  const rows = csvData.trim().split("\n");
  const headers = rows[0].split(",").map((header) => header.trim());
  const data = rows.slice(1).map((row) => {
    const regex = /(".*?"|[^",\s]+)(?=\s*,|\s*$)/g;
    let values = [];
    let match;
    while ((match = regex.exec(row)) !== null) {
      values.push(match[1].replace(/^"|"$/g, "")); // Remove quotes
    }
    return headers.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});
  });

  // State to hold selected tags
  const [selectedTags, setSelectedTags] = useState(data.map(() => []));
  // Function to handle tag selection
  const handleTagSelect = (index, tag) => {
    const updatedSelectedTags = [...selectedTags];
    if (updatedSelectedTags[index].includes(tag)) {
      return;
    }
    updatedSelectedTags[index] = [...updatedSelectedTags[index], tag];
    setSelectedTags(updatedSelectedTags);
  };

  const deleteSelectedTags = (index, tag) => {
    const updatedSelectedTags = [...selectedTags];
    updatedSelectedTags[index] = updatedSelectedTags[index].filter(
      (item) => item !== tag
    );
    setSelectedTags(updatedSelectedTags);
  };

  return (
    <div className="flex flex-col gap-6 md:gap-12 w-full">
      <h2 className="text-base-bold sm:text-heading2-semibold text-text sm:text-dark font-nunito sm:font-figtree max-md:pt-6 md:pl-20 md:pr-[73px] px-6">
        Uploads
      </h2>
      <div className="px-4 bg-[#F5F5F5] overflow-auto custom-scrollbar rounded-lg mb-16 md:ml-20 md:mr-[73px] mx-6">
        <table className="w-full custom-scrollbar">
          <thead>
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="text-left p-4 text-small-semibold font-figtree text-bulma"
                >
                  {header === "id"
                    ? "Si No."
                    : header
                        .slice(0)
                        .split(" ")
                        .map(
                          (str) => str.slice(0)[0].toUpperCase() + str.slice(1)
                        )
                        .join(" ")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b-[16px] border-[#F5F5F5]">
                {headers.map((header) => (
                  <td
                    key={`${index}-${header}`}
                    className={`p-4 bg-light sm:text-small-regular text-subtle-regular font-figtree  ${
                      header === "links" ? "text-[#5B93FF] underline" : "text-bulma"
                    }`}
                  >
                    {header === "links" ? (
                      <Link target="_blank" href={`https://${row[header]}`}>
                        {row[header]}
                      </Link>
                    ) : header === "select tags" ? (
                      <Dropdown
                        onSelectValue={(value) => handleTagSelect(index, value)}
                        options={row[header].split(", ")}
                      />
                    ) : header === "selected tags" ? (
                      <>
                        {selectedTags[index].length > 0 && (
                          <div className="flex gap-2 flex-wrap">
                            {selectedTags[index].map((tag) => (
                              <div className="flex items-center gap-1 py-1 px-2 bg-primary rounded-[4px]">
                                <p className="font-figtree text-tiny-semibold text-light">
                                  {tag}
                                </p>

                                <Image
                                  src="/assets/close-light.svg"
                                  alt="close"
                                  width={16}
                                  height={16}
                                  className="cursor-pointer"
                                  onClick={() => deleteSelectedTags(index, tag)}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      row[header]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CsvTable;
