#!/usr/bin/env node

/**
 * Texture Optimization Script
 * Reduce texture file sizes using compression
 * 
 * Usage: node optimize-textures.js
 * 
 * Requirements:
 *   npm install sharp
 */

const fs = require('fs');
const path = require('path');

try {
    const sharp = require('sharp');
    
    const texturesDir = path.join(__dirname, 'sci-fi_computer', 'textures');
    
    if (!fs.existsSync(texturesDir)) {
        console.error('Textures directory not found:', texturesDir);
        process.exit(1);
    }
    
    const files = fs.readdirSync(texturesDir).filter(f => f.endsWith('.png'));
    console.log(`Found ${files.length} PNG textures. Starting optimization...\n`);
    
    let processed = 0;
    
    files.forEach(file => {
        const inputPath = path.join(texturesDir, file);
        const outputPath = inputPath.replace('.png', '-optimized.png');
        
        sharp(inputPath)
            .resize(2048, 2048, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .png({ quality: 80, progressive: true })
            .toFile(outputPath)
            .then(info => {
                const originalSize = fs.statSync(inputPath).size;
                const newSize = info.size;
                const reduction = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
                
                console.log(`✓ ${file}`);
                console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB → Optimized: ${(newSize / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
                
                processed++;
                if (processed === files.length) {
                    console.log('\n✓ All textures optimized successfully!');
                    console.log('Next step: Replace original PNG files with optimized versions (add -optimized suffix first)');
                }
            })
            .catch(err => {
                console.error(`✗ Error processing ${file}:`, err.message);
            });
    });
    
} catch (err) {
    console.error('Error: sharp module not found.');
    console.error('Install it with: npm install sharp');
    console.error('\nAlternatively, optimize textures manually using:');
    console.error('- Online tools: https://tinypng.com or https://compressor.io');
    console.error('- ImageMagick: convert input.png -quality 85 output.png');
    console.error('- WebP: cwebp input.png -q 85 -o output.webp');
    process.exit(1);
}
