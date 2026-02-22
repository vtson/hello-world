// ============================================================
// convert.js - Excel to JSON Converter
// ============================================================
// This script reads an Excel (.xlsx) file and converts the first
// worksheet into a JSON file. The JSON is saved to the `public/`
// directory so that Vite can serve it as a static asset.
//
// Usage: npm run convert
// ============================================================

import XLSX from 'xlsx';
import fs from 'fs';

// Input: the Excel file to read (must be in the project root)
const INPUT_FILE = 'data.xlsx';

// Output: JSON will be written to the public folder so Vite serves it
const OUTPUT_FILE = './public/data.json';

try {
    console.log('Reading Excel file...');

    // Read the entire Excel workbook from disk
    const workbook = XLSX.readFile(INPUT_FILE);

    // Get the name of the first sheet (index 0)
    const sheetName = workbook.SheetNames[0];

    // Get a reference to the first worksheet object
    const worksheet = workbook.Sheets[sheetName];

    // Convert the worksheet into an array of JSON objects.
    // Each row becomes an object where keys are the column headers.
    const data = XLSX.utils.sheet_to_json(worksheet);

    // Write the JSON data to the public directory.
    // Using `null, 2` for pretty-printing with 2-space indentation.
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2));

    console.log(`✅ Success! Converted ${data.length} rows to JSON.`);
    console.log(`   Output file: ${OUTPUT_FILE}`);
} catch (error) {
    console.error('❌ Error converting file:', error.message);
}