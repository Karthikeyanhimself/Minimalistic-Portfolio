/* 
 * Copyright (c) 2025 Karthikeyan Reddy T
 * This file is part of Minimalistic Portfolio.
 * Licensed under the MIT License. 
 */

import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
