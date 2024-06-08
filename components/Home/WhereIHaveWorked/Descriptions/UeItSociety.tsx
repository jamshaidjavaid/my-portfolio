import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function UeItSociety() {
  const tasks = [
    {
      text: "Planned and organized Online Learning Sessions about different tech-stacks and technologies during COVID-19.",
      keywords: ["Online Learning Sessions", "tech-stacks ", "technologies"],
    },
    {
      text: "Conducted research, implemented media strategies, and managed campaigns to boost brand visibility and engagement. ",
      keywords: ["media strategies", "boost brand visibility"],
    },
    {
      text: "Wrote, proofread, and edited media content while delivering public relations and communications plans.",
      keywords: ["public relations"],
    },
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Media and Marketing Lead
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">
          April 2020 - June 2022
        </span>{" "}
        <span
          className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
          // set text size on style attribute
          style={{ fontSize: "0.6rem" }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/company/ue-it-society",
              "_blank"
            )
          }
        >
          ueitsociety
        </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
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
  );
}
