const fs = require('fs');
const path = require('path');

// This script creates simple placeholder images using SVG
// You can run it with: node scripts/create-logo-placeholders.js

const publicImagesDir = path.join(__dirname, '..', 'public', 'images');

// Ensure directory exists
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Square logo placeholder SVG (1:1 - 1000x1000px)
const squareLogoSVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg">
  <rect width="1000" height="1000" fill="#f3f4f6"/>
  <rect x="50" y="50" width="900" height="900" fill="none" stroke="#9ca3af" stroke-width="4"/>
  <text x="500" y="400" font-family="Arial, sans-serif" font-size="120" font-weight="bold" fill="#6b7280" text-anchor="middle">LOGO</text>
  <text x="500" y="550" font-family="Arial, sans-serif" font-size="60" fill="#6b7280" text-anchor="middle">1:1 Ratio</text>
  <text x="500" y="650" font-family="Arial, sans-serif" font-size="40" fill="#6b7280" text-anchor="middle">500×500 to 2000×2000px</text>
</svg>`;

// Rectangular logo placeholder SVG (2:1 - 1000x500px)
const rectangularLogoSVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1000" height="500" xmlns="http://www.w3.org/2000/svg">
  <rect width="1000" height="500" fill="#f3f4f6"/>
  <rect x="50" y="50" width="900" height="400" fill="none" stroke="#9ca3af" stroke-width="4"/>
  <text x="500" y="200" font-family="Arial, sans-serif" font-size="100" font-weight="bold" fill="#6b7280" text-anchor="middle">LOGO</text>
  <text x="500" y="300" font-family="Arial, sans-serif" font-size="50" fill="#6b7280" text-anchor="middle">2:1 Ratio</text>
  <text x="500" y="380" font-family="Arial, sans-serif" font-size="30" fill="#6b7280" text-anchor="middle">1000×500 to 2000×1000px</text>
</svg>`;

// Write SVG files
fs.writeFileSync(path.join(publicImagesDir, 'logo-square-example.svg'), squareLogoSVG);
fs.writeFileSync(path.join(publicImagesDir, 'logo-rectangular-example.svg'), rectangularLogoSVG);

console.log('✅ Created logo placeholder SVGs:');
console.log('   - public/images/logo-square-example.svg');
console.log('   - public/images/logo-rectangular-example.svg');
console.log('\n💡 Note: You can convert these SVGs to PNG using an online converter or image editor.');


