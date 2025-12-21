/* 
 * Copyright (c) 2025 Your Name
 * This file is part of Minimalistic Portfolio.
 * Licensed under the MIT License. 
 */

// src/app/main/page.tsx
'use client';
import Image from 'next/image';

const fontStyle = {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16" style={fontStyle}>
            <div className="max-w-4xl mx-auto">
                <section className="flex flex-col md:flex-row items-center gap-12">
                    <div
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg flex-shrink-0"
                    >
                        <Image
                            src="/images/placeholder_400x400.webp"
                            alt="Profile Picture"
                            width={400}
                            height={400}
                            className="object-cover w-full h-full pointer-events-none select-none"
                        />
                    </div>

                    <div>
                        <h1
                            className="text-4xl md:text-5xl font-extralight tracking-tight mb-4 text-center md:text-left"
                            style={{ fontWeight: 200, lineHeight: 1.1 }}
                        >
                            About Me
                        </h1>

                        <p className="text-[rgba(100,100,100,0.8)] mb-4 font-light">
                            I’m deeply focused on problem solving, with a strong foundation in Data Structures and Algorithms that shapes the way I approach challenges.
                            I bring this structured thinking into building full-stack applications with the MERN stack, creating projects that are both efficient and scalable.
                            Beyond web development, I also explore AI-driven tools, including models for blending algorithmic logic with real-world applications.
                        </p>
                        <p style={{ ...fontStyle, fontWeight: 300, fontSize: '1rem', color: 'rgba(100,100,100,0.8)' }}>
                            I served as a lead to the the Finance and Logistics team in NSS under the UEAC (2024-25).
                            Outside tech, I write introspective stories.
                            Whether coding or writing, I focus on clarity, purpose, and impact.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}