const fs = require("fs")
const path = require("path")

// Create directory if it doesn't exist
const outputDir = path.join(__dirname, "../utils")
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Read all README files
const readmeDir = path.join(__dirname, "../data/projects/readme")
const files = fs.readdirSync(readmeDir)

// Generate content object
const markdownContent = {}
files.forEach((file) => {
  const filePath = path.join(readmeDir, file)
  const content = fs.readFileSync(filePath, "utf8")
  markdownContent[`data/projects/readme/${file}`] = content
})

// Write to utils/markdown-content.ts
const output = `// Auto-generated content - do not edit manually
export const markdownContent: Record<string, string> = ${JSON.stringify(markdownContent, null, 2)};
`

fs.writeFileSync(path.join(__dirname, "../utils/markdown-content.ts"), output)

console.log("✅ Markdown content generated successfully!")

