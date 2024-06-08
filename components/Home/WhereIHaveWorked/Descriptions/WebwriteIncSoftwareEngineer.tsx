import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function WebwriteIncSoftwareEngineer() {
  const tasks = [
    {
      text: "Developed and maintained highly performant web application user interfaces improving customer satisfaction.",
      keywords: ["highly", "performant", "web application"],
    },
    {
      text: "Implemented secure and scalable Node.js back-ends consisting of efficient databases ensuring faster API responses.",
      keywords: [
        "secure and scalable",
        "Node.js",
        "back-ends",
        "databases",
        "API",
      ],
    },
    {
      text: "Enforced HIPAA compliance (medical apps) and robust authentications (OAuth, JWT, MFA) for improved security.",
      keywords: ["HIPAA compliance", "authentications", "improved security"],
    },
    {
      text: "Optimized AWS cloud infrastructure (VPC, CloudFormation, EC2, S3, and IAM) for efficient resource utilization.",
      keywords: ["AWS cloud infrastructure", "efficient resource utilization"],
    },
    {
      text: "Collaborated with CI/CD team for streamlined deployments and controlled fault-tolerant releases.",
      keywords: ["CI/CD team", "deployments", "fault-tolerant"],
    },
    {
      text: "Conducted domain-specific training and mentored junior team members for skill development.",
      keywords: ["training", "mentored junior team members"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer (Full Stack)
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            May 2023 - Present
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://webwrite.co/", "_blank")}
          >
            webwrite.co
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
