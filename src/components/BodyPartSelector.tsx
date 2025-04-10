
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// Define the body parts that can be selected
export type BodyPart = 
  | "head" | "neck" | "leftShoulder" | "rightShoulder" 
  | "leftArm" | "rightArm" | "chest" | "back" 
  | "leftHand" | "rightHand" | "abdomen" | "lowerBack" 
  | "leftLeg" | "rightLeg" | "leftFoot" | "rightFoot"
  | "leftKnee" | "rightKnee" | "leftAnkle" | "rightAnkle";

type BodyPartSelectorProps = {
  onSelect: (part: BodyPart) => void;
  selectedParts: BodyPart[];
};

export const BodyPartSelector: React.FC<BodyPartSelectorProps> = ({
  onSelect,
  selectedParts,
}) => {
  const isSelected = (part: BodyPart) => selectedParts.includes(part);

  // Helper function to handle part selection
  const handlePartSelection = (part: BodyPart) => {
    onSelect(part);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto h-[600px] select-none">
      {/* Human body diagram */}
      <div className="absolute inset-0">
        {/* Human silhouette */}
        <svg
          viewBox="0 0 200 400"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <circle
                  cx="100"
                  cy="40"
                  r="25"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("head") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("head")}
                />
              </TooltipTrigger>
              <TooltipContent>Head</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Neck */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <rect
                  x="90"
                  y="65"
                  width="20"
                  height="15"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("neck") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("neck")}
                />
              </TooltipTrigger>
              <TooltipContent>Neck</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Shoulders */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <rect
                  x="60"
                  y="80"
                  width="30"
                  height="15"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("leftShoulder") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("leftShoulder")}
                />
              </TooltipTrigger>
              <TooltipContent>Left Shoulder</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <rect
                  x="110"
                  y="80"
                  width="30"
                  height="15"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("rightShoulder") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("rightShoulder")}
                />
              </TooltipTrigger>
              <TooltipContent>Right Shoulder</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Chest/Torso */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <rect
                  x="80"
                  y="95"
                  width="40"
                  height="50"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("chest") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("chest")}
                />
              </TooltipTrigger>
              <TooltipContent>Chest</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Back - behind torso, not visible in front view */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <rect
                  x="80"
                  y="95"
                  width="40"
                  height="50"
                  className={cn(
                    "fill-transparent stroke-gray-400 cursor-pointer hover:stroke-gray-500 transition-colors",
                    isSelected("back") && "stroke-physicotech-600 stroke-[3px]"
                  )}
                  onClick={() => handlePartSelection("back")}
                  style={{ strokeDasharray: "2,2" }}
                />
              </TooltipTrigger>
              <TooltipContent>Back</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Abdomen/Lower torso */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <rect
                  x="80"
                  y="145"
                  width="40"
                  height="40"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("abdomen") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("abdomen")}
                />
              </TooltipTrigger>
              <TooltipContent>Abdomen</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Lower Back */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <rect
                  x="80"
                  y="145"
                  width="40"
                  height="40"
                  className={cn(
                    "fill-transparent stroke-gray-400 cursor-pointer hover:stroke-gray-500 transition-colors",
                    isSelected("lowerBack") && "stroke-physicotech-600 stroke-[3px]"
                  )}
                  onClick={() => handlePartSelection("lowerBack")}
                  style={{ strokeDasharray: "2,2" }}
                />
              </TooltipTrigger>
              <TooltipContent>Lower Back</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Left Arm */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <rect
                  x="50"
                  y="95"
                  width="15"
                  height="60"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("leftArm") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("leftArm")}
                />
              </TooltipTrigger>
              <TooltipContent>Left Arm</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Right Arm */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <rect
                  x="135"
                  y="95"
                  width="15"
                  height="60"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("rightArm") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("rightArm")}
                />
              </TooltipTrigger>
              <TooltipContent>Right Arm</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Left Hand */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <circle
                  cx="45"
                  cy="165"
                  r="10"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("leftHand") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("leftHand")}
                />
              </TooltipTrigger>
              <TooltipContent>Left Hand</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Right Hand */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <circle
                  cx="155"
                  cy="165"
                  r="10"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("rightHand") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("rightHand")}
                />
              </TooltipTrigger>
              <TooltipContent>Right Hand</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Left Leg */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <rect
                  x="75"
                  y="185"
                  width="20"
                  height="110"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("leftLeg") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("leftLeg")}
                />
              </TooltipTrigger>
              <TooltipContent>Left Leg</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Right Leg */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <rect
                  x="105"
                  y="185"
                  width="20"
                  height="110"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("rightLeg") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("rightLeg")}
                />
              </TooltipTrigger>
              <TooltipContent>Right Leg</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Left Knee */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <circle
                  cx="85"
                  cy="230"
                  r="10"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("leftKnee") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("leftKnee")}
                />
              </TooltipTrigger>
              <TooltipContent>Left Knee</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Right Knee */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <circle
                  cx="115"
                  cy="230"
                  r="10"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("rightKnee") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("rightKnee")}
                />
              </TooltipTrigger>
              <TooltipContent>Right Knee</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Left Ankle */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <circle
                  cx="85"
                  cy="295"
                  r="7"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("leftAnkle") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("leftAnkle")}
                />
              </TooltipTrigger>
              <TooltipContent>Left Ankle</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Right Ankle */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <circle
                  cx="115"
                  cy="295"
                  r="7"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("rightAnkle") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("rightAnkle")}
                />
              </TooltipTrigger>
              <TooltipContent>Right Ankle</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Left Foot */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <ellipse
                  cx="85"
                  cy="320"
                  rx="15"
                  ry="8"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("leftFoot") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("leftFoot")}
                />
              </TooltipTrigger>
              <TooltipContent>Left Foot</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Right Foot */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <ellipse
                  cx="115"
                  cy="320"
                  rx="15"
                  ry="8"
                  className={cn(
                    "fill-gray-200 stroke-gray-400 cursor-pointer hover:fill-gray-300 transition-colors",
                    isSelected("rightFoot") && "fill-physicotech-500 stroke-physicotech-600"
                  )}
                  onClick={() => handlePartSelection("rightFoot")}
                />
              </TooltipTrigger>
              <TooltipContent>Right Foot</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </svg>
      </div>
    </div>
  );
};

export default BodyPartSelector;
