/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================
const fileName = "NewFile"
function processFile(fileName, fileData) {

  try {
      // 🔍 Input Validation
      if (!fileName) {
          throw new ReferenceError("File name is missing.");
      }
      if (typeof fileData !== "string") {
          throw new TypeError("File data must be a string.");
      }
      if (fileData.trim() === "") {
          throw new Error("File data cannot be empty.");
      }

      // ✅ Simulated File Processing
      console.log(`Processing file: ${fileName}`);
      console.log(`File content: ${fileData}`);
  } catch (err) {
      // ⚠️ Handle Known Errors
      console.error(`${err.name}: ${err.message}`);
  } finally {
      // 📦 Always Release Resources
      console.log("Closing file handle...");
  }
}

// ============================================
// 🧪 Test Cases
// ============================================

processFile("fileName", "Debug-Report.pdf"); // ❌ ReferenceError: File name is missing //added a const fileName variable to allow the code to run without errors if steps are followed
processFile("myFile.txt", "fourty-two"); // ❌ TypeError: File data must be a string //added a string check now the file runs without errors, if steps are followed
processFile("myFile.txt", "project-task.js"); // ❌ Error: File data cannot be empty //added a check for empty string, file runs without errors, if steps are followed
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully // and close the file handle alway runs eveb if the try block fails
