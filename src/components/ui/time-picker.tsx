
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimePickerProps {
  value: string;
  onChange: (time: string) => void;
  use12Hours?: boolean;
  className?: string;
}

export function TimePicker({ 
  value, 
  onChange, 
  use12Hours = false,
  className 
}: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Generate hours based on 12 or 24-hour format
  const hours = use12Hours 
    ? Array.from({ length: 12 }, (_, i) => i + 1) // 1-12 for 12-hour format
    : Array.from({ length: 24 }, (_, i) => i);    // 0-23 for 24-hour format

  // Minutes in 15-minute increments
  const minutes = ["00", "15", "30", "45"];
  
  // Only show hours between 6 AM and 12 PM for clinic hours
  const filteredHours = use12Hours
    ? hours.filter(hour => hour >= 6 && hour <= 12)
    : hours.filter(hour => (hour >= 6 && hour < 12) || hour === 0); // 0 represents 12 in 24-hour format

  const handleSelectTime = (hour: number, minute: string, period?: string) => {
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedTime = period
      ? `${hour}:${minute} ${period}`  // 12-hour format with AM/PM
      : `${formattedHour}:${minute}`;  // 24-hour format
    
    onChange(formattedTime);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal", 
            !value && "text-muted-foreground",
            className
          )}
        >
          <Clock className="mr-2 h-4 w-4" />
          {value || "Select time"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4 bg-white" align="start">
        <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-auto">
          {use12Hours ? (
            <>
              {/* AM Times */}
              <div className="space-y-2">
                {filteredHours.map((hour) => (
                  <React.Fragment key={`am-${hour}`}>
                    {minutes.map((minute) => (
                      <Button
                        key={`${hour}:${minute}-am`}
                        variant="outline"
                        size="sm"
                        className="w-full hover:bg-physicotech-100 hover:text-physicotech-700 border border-gray-200 transition-all duration-200 hover:border-physicotech-300 rounded-full"
                        onClick={() => handleSelectTime(hour, minute, "AM")}
                      >
                        {hour}:{minute} AM
                      </Button>
                    ))}
                  </React.Fragment>
                ))}
              </div>
              
              {/* PM Times */}
              <div className="space-y-2">
                {filteredHours.filter(hour => hour !== 12).map((hour) => (
                  <React.Fragment key={`pm-${hour}`}>
                    {minutes.map((minute) => (
                      <Button
                        key={`${hour}:${minute}-pm`}
                        variant="outline"
                        size="sm"
                        className="w-full hover:bg-physicotech-100 hover:text-physicotech-700 border border-gray-200 transition-all duration-200 hover:border-physicotech-300 rounded-full"
                        onClick={() => handleSelectTime(hour, minute, "PM")}
                      >
                        {hour}:{minute} PM
                      </Button>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {filteredHours.map((hour) => (
                <div key={hour} className="space-y-1">
                  {minutes.map((minute) => (
                    <Button
                      key={`${hour}:${minute}`}
                      variant="outline"
                      size="sm"
                      className="w-full hover:bg-physicotech-100 hover:text-physicotech-700 border border-gray-200 transition-all duration-200 hover:border-physicotech-300 rounded-full"
                      onClick={() => handleSelectTime(hour, minute)}
                    >
                      {hour.toString().padStart(2, '0')}:{minute}
                    </Button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
