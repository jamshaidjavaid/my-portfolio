import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function DigitalDynamics() {
  const tasks = [
    {
      text: "Built web apps using cutting-edge technologies (Next.js, React, Node.js) and databases (MongoDB, PostgreSQL).",
      keywords: ["Next.js, React, Node.js", "MongoDB, PostgreSQL", "databases"],
    },
    {
      text: "Integrated payment options (Stripe, Paypal, Square), and implemented KYC verification for financial applications.",
      keywords: ["Stripe, Paypal, Square", "implemented KYC"],
    },
    {
      text: "Leveraged cloud services (AWS and Azure) and utilized monolithic, and serverless (AWS Lambda) architectures.",
      keywords: ["cloud services", "AWS", "Azure", "serverless"],
    },
    {
      text: "Contributed to the development of various UI components and APIs for new features improving experience.",
      keywords: ["UI components", "APIs"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer{" "}
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            August 2023 - April 2024
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("Digital Dynamics", "_blank")}
          >
            digitaldynamics
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
