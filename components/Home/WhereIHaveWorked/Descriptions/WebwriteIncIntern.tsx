import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function WebwriteIncIntern() {
  const tasks = [
    {
      text: "Developed an immersive e-commerce experience using Next.js, and implemented Node.js Restful APIs",
      keywords: ["Next.js", "Node.js Restful APIs"],
    },
    {
      text: "Wrote documentation for various medical systems and wrote unit tests ensuring stable builds.",
      keywords: [""],
    },
    {
      text: "Participated in team meetings and code reviews, contributing ideas and suggestions to improve project architecture and code quality",
      keywords: ["team meetings", "code reviews", "ideas", "suggestions"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Intern, MERN Stack Developer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            March 2023 – May 2023
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https:///www.webwrite.co", "_blank")}
          >
            webwrite.co
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
