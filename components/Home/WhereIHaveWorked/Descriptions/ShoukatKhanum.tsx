import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function ShoukatKhanum() {
  const tasks = [
    {
      text: "Managed weekly and monthly marketing plans on multiple platforms for a consistent online presence.",
      keywords: ["marketing plans", "online presence"],
    },
    {
      text: "Designed visuals for events, enhancing the hospital's digital engagement.",
      keywords: ["digital engagement"],
    },
    {
      text: "Crafted targeted content for impactful social media posts and posters.",
      keywords: ["social media posts"],
    },
    {
      text: "Contributed to the success of Polo-In-Pink, actively managing event logistics and charity collections for Women Breast Cancer Awareness.",
      keywords: ["PoloInPink", "Women Breast Cancer Awareness"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Volunteer - Social Media Marketer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            December 2019 - April 2020
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() =>
              window.open("https://shaukatkhanum.org.pk/", "_blank")
            }
          >
            shaukatkhanum.org.pk
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
