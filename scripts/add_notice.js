// scripts/add_notice.js
const fs = require("fs");
const path = require("path");

const notice = `/* 
 * Copyright (c) 2025 Karthikeyan Reddy T
 * This file is part of Minimalistic Portfolio.
 * Licensed under the MIT License. 
 */\n\n`;

const targetDirs = ["src", "public"];
const rootDir = path.resolve(__dirname, "..");

// Only add notice to these file types
const allowedExtensions = [".js", ".ts", ".tsx", ".html", ".css"];

function fixNotice(content) {
    // If an old notice with "Your Name" exists → replace it
    if (content.startsWith("/*") && content.includes("Your Name")) {
        return content.replace(/\/\*[\s\S]*?Minimalistic Portfolio[\s\S]*?\*\/\n\n/, notice);
    }
    // If already correct, skip
    if (content.startsWith("/*") && content.includes("Karthikeyan Reddy T")) {
        return null;
    }
    // Otherwise, prepend new notice
    return notice + content;
}

function addNoticeToFile(filePath) {
    if (!fs.existsSync(filePath) || fs.lstatSync(filePath).isDirectory()) return;

    const ext = path.extname(filePath).toLowerCase();
    if (!allowedExtensions.includes(ext)) return; // skip images/binaries

    let content = fs.readFileSync(filePath, "utf8");
    const updated = fixNotice(content);

    if (updated && updated !== content) {
        fs.writeFileSync(filePath, updated, "utf8");
        console.log(`✔ Updated notice in ${filePath}`);
    }
}

function walkDir(dir) {
    fs.readdirSync(dir).forEach((file) => {
        const filePath = path.join(dir, file);
        if (fs.lstatSync(filePath).isDirectory()) {
            walkDir(filePath);
        } else {
            addNoticeToFile(filePath);
        }
    });
}

targetDirs.forEach((dir) => {
    const fullPath = path.join(rootDir, dir);
    if (fs.existsSync(fullPath)) {
        walkDir(fullPath);
    }
});
