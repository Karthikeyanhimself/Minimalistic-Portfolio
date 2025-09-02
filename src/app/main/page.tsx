/* 
 * Copyright (c) 2025 Your Name
 * This file is part of Minimalistic Portfolio.
 * Licensed under the MIT License. 
 */

// src/app/main/page.tsx
'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Code, Star } from 'lucide-react';
import { useState } from 'react';

const fontStyle = {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
};

export default function AboutPage() {
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

    const cards = [
        {
            title: 'Experience',
            icon: <Briefcase className="h-4 w-4 text-muted-foreground" />,
            front: (
                <>
                    <div style={{ ...fontStyle, fontWeight: 200, fontSize: '1.25rem' }}>Fresher</div>
                    <p style={{ ...fontStyle, fontWeight: 300, fontSize: '0.875rem', color: 'rgba(100,100,100,0.7)' }}>
                        eager to contribute
                    </p>
                </>
            ),
            back: (
                <p style={{ ...fontStyle, fontWeight: 300, fontSize: '0.875rem', color: 'rgba(100,100,100,0.7)' }}>
                    Strong foundation in programming and problem-solving, with a passion for building practical solutions.
                </p>
            ),
        },
        {
            title: 'Projects Completed',
            icon: <Code className="h-4 w-4 text-muted-foreground" />,
            front: (
                <>
                    <div style={{ ...fontStyle, fontWeight: 200, fontSize: '1.25rem' }}>8+</div>
                    <p style={{ ...fontStyle, fontWeight: 300, fontSize: '0.875rem', color: 'rgba(100,100,100,0.7)' }}>
                        academic & personal projects
                    </p>
                </>
            ),
            back: (
                <p style={{ ...fontStyle, fontWeight: 300, fontSize: '0.875rem', color: 'rgba(100,100,100,0.7)' }}>
                    Built small-scale applications showcasing skills in web development and data handling.
                </p>
            ),
        },
        {
            title: 'Core Skill',
            icon: <Star className="h-4 w-4 text-muted-foreground" />,
            front: (
                <>
                    <div style={{ ...fontStyle, fontWeight: 200, fontSize: '1.25rem' }}>DSA and MERN</div>
                    <p style={{ ...fontStyle, fontWeight: 300, fontSize: '0.875rem', color: 'rgba(100,100,100,0.7)' }}>
                        C++, Java, MongoDB, React, Node.js
                    </p>
                </>
            ),
            back: (
                <p style={{ ...fontStyle, fontWeight: 300, fontSize: '0.875rem', color: 'rgba(100,100,100,0.7)' }}>
                    Focused on learning DSA and full-stack concepts to build scalable applications.
                </p>
            ),
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16" style={fontStyle}>
            <div className="max-w-4xl mx-auto">
                <section className="flex flex-col md:flex-row items-center gap-12 mb-16">
                    <div
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg flex-shrink-0"
                    >
                        <Image
                            src="/images/profile.jpg"
                            alt="Profile Picture"
                            width={400}
                            height={400}
                            className="object-cover w-full h-full pointer-events-none select-none"
                        />
                    </div>
                    <div>
                        <h1
                            className="text-4xl md:text-5xl font-extralight tracking-tight mb-4 text-center md:text-left"
                            style={{ ...fontStyle, fontWeight: 200, fontSize: '2.5rem', lineHeight: 1.1 }}
                        >
                            About Me
                        </h1>
                        <p style={{ ...fontStyle, fontWeight: 300, fontSize: '1rem', color: 'rgba(100,100,100,0.8)', marginBottom: '1rem' }}>
                            I’m deeply focused on problem solving, with a strong foundation in Data Structures and Algorithms that shapes the way I
                            approach challenges. I bring this structured thinking into building full-stack applications with the MERN stack,
                            creating projects that are both efficient and scalable. Beyond web development, I also explore AI-driven tools,
                            including models for creative content generation, blending algorithmic logic with real-world applications.
                        </p>
                        <p style={{ ...fontStyle, fontWeight: 300, fontSize: '1rem', color: 'rgba(100,100,100,0.8)' }}>
                            I served as a lead to the the Finance and Logistics team in NSS under the UEAC (2024-25). Outside tech, I write
                            introspective stories. Whether coding or writing, I focus on clarity, purpose, and impact.
                        </p>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map(({ title, icon, front, back }, i) => (
                        <Card
                            key={title}
                            className="relative w-full h-40 cursor-pointer perspective"
                            onMouseEnter={() => setFlippedIndex(i)}
                            onMouseLeave={() => setFlippedIndex(null)}
                        >
                            <div
                                className={`relative w-full h-full duration-500 transform-style preserve-3d ${flippedIndex === i ? 'rotate-y-180' : ''
                                    }`}
                            >
                                {/* Front Side */}
                                <div className="absolute w-full h-full backface-hidden flex flex-col p-4">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle style={{ ...fontStyle, fontWeight: 300, fontSize: '0.875rem' }}>{title}</CardTitle>
                                        {icon}
                                    </CardHeader>
                                    <CardContent className="flex-grow">{front}</CardContent>
                                </div>

                                {/* Back Side */}
                                <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col p-4 bg-white">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle style={{ ...fontStyle, fontWeight: 300, fontSize: '0.875rem' }}>{title}</CardTitle>
                                        {icon}
                                    </CardHeader>
                                    <CardContent className="flex-grow">{back}</CardContent>
                                </div>
                            </div>
                        </Card>
                    ))}
                </section>
            </div>

            <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
        </div>
    );
}
