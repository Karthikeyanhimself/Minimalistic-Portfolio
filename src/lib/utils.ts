/* 
 * Copyright (c) 2025 Your Name
 * This file is part of Minimalistic Portfolio.
 * Licensed under the MIT License. 
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
