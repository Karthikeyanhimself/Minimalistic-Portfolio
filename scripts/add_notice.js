// scripts/add_notice.js
const fs = require("fs");
const path = require("path");

const notice = `/* 
 * Copyright (c) 2025 Your Name
 * This file is part of Minimalistic Portfolio.
 * Licensed under the MIT License. 
 */\n\n`;

const targetDirs = ["src", "public"];
const rootDir = path.resolve(__dirname, "..");

function addNoticeToFile(filePath) {
    if (!fs.existsSync(filePath) || fs.lstatSync(filePath).isDirectory()) {
        return;
    }

    let content = fs.readFileSync(filePath, "utf8");

    // Skip if notice already exists
    if (content.startsWith("/*") && content.includes("Minimalistic Portfolio")) {
        return;
    }

    fs.writeFileSync(filePath, notice + content, "utf8");
    console.log(`✔ Added notice to ${filePath}`);
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