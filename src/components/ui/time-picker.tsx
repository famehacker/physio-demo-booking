
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

  // Reset value when component mounts or updates
  useEffect(() => {
    if (!value && filteredHours.length > 0 && minutes.length > 0) {
      const defaultHour = filteredHours[0];
      const defaultMinute = minutes[0];
      const defaultPeriod = use12Hours ? "AM" : undefined;
      
      // Don't auto-select a time on initial render
      // Only do this if you want a default time
      // handleSelectTime(defaultHour, defaultMinute, defaultPeriod);
    }
  }, []);

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
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-4 overflow-auto max-h-[300px]">
          <div className="flex flex-col">
            {use12Hours ? (
              <div className="grid grid-cols-4 gap-2">
                {filteredHours.map((hour) => (
                  <div key={hour} className="space-y-1">
                    {minutes.map((minute) => (
                      <React.Fragment key={`${hour}:${minute}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() => handleSelectTime(hour, minute, "AM")}
                        >
                          {hour}:{minute} AM
                        </Button>
                        {hour !== 12 && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() => handleSelectTime(hour, minute, "PM")}
                          >
                            {hour}:{minute} PM
                          </Button>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-2">
                {filteredHours.map((hour) => (
                  <div key={hour} className="space-y-1">
                    {minutes.map((minute) => (
                      <Button
                        key={`${hour}:${minute}`}
                        variant="outline"
                        size="sm"
                        className="w-full"
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
        </div>
      </PopoverContent>
    </Popover>
  );
}
