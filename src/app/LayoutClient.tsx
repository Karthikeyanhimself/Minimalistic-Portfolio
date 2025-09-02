/* 
 * Copyright (c) 2025 Your Name
 * This file is part of Minimalistic Portfolio.
 * Licensed under the MIT License. 
 */

'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from "@/components/ui/toaster";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const hideHeaderFooter = pathname === '/';

    if (!mounted) return null; // avoids hydration mismatch

    return (
        <div className="relative flex min-h-dvh flex-col bg-background">
            {!hideHeaderFooter && <Header />}
            <main className="flex-1">{children}</main>
            {!hideHeaderFooter && <Footer />}
            <Toaster />
        </div>
    );
}
