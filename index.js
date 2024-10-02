'use strict';

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Directories
const pagesDir = path.join(__dirname, 'pages');
const outputDir = path.join(__dirname, 'output');
const templateFilePath = path.join(__dirname, 'templates', 'layout.html');

// ANSI escape codes for bold purple
const purpleBold = '\x1b[1;35m';  // Bold and purple
const reset = '\x1b[0m';          // Reset to default

// Read the HTML template (Use cache or synchronous I/O for small projects like this)
const template = fs.readFileSync(templateFilePath, 'utf8');

// Function to convert Markdown to HTML and save as a file
function generateHTML(mdFile) {
    const fileName = path.basename(mdFile, '.md');
    const filePath = path.join(pagesDir, mdFile);
    const markdownContent = fs.readFileSync(filePath, 'utf8');
    const htmlContent = marked.parse(markdownContent);

    // Insert the content and title into the HTML template
    const finalHTML = template
        .replace('{{content}}', htmlContent)
        .replace('{{title}}', fileName.charAt(0).toUpperCase() + fileName.slice(1));

    // Save the final HTML to the output directory
    const outputFilePath = path.join(outputDir, `${fileName}.html`);
    fs.writeFileSync(outputFilePath, finalHTML);

    // Display message in bold purple
    console.log(`${purpleBold}Generated HTML for ${mdFile} -> ${outputFilePath}${reset}`);
}

// Ensure output directory exists (lazy directory creation for efficiency)
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Get all Markdown files from the /pages directory
fs.readdirSync(pagesDir).forEach(file => {
    if (file.endsWith('.md')) {
        generateHTML(file);
    }
});

console.log(`${purpleBold}All Markdown files have been converted to HTML.${reset}`);
