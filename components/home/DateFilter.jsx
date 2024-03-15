import React from "react";
import useCustomRouter from "@hooks/useCustomRouter";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DateFilter = () => {
  const { pushQuery, query } = useCustomRouter();

  return (
    <Select
      value={query.date || ""}
      onValueChange={(value) => pushQuery({ date: value })}
    >
      <SelectTrigger className="w-auto">
        <SelectValue placeholder="Date" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Any">Any</SelectItem>
          <SelectItem value="24hrs">Last 24 hrs</SelectItem>
          <SelectItem value="3days">Last 3 days</SelectItem>
          <SelectItem value="7days">Last 7 days</SelectItem>
          <SelectItem value="30days">Last 30 days</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default DateFilter;
