
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const TableLoading = () => {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-[15%]" />
          <Skeleton className="h-12 w-[25%]" />
          <Skeleton className="h-12 w-[30%]" />
          <Skeleton className="h-12 w-[20%]" />
        </div>
      ))}
    </div>
  );
};
