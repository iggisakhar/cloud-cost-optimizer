// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Cloud Cost Optimizer</title>
// </head>
// <body>
// <h1>Cloud Cost Optimizer</h1>
// <textarea id="jsonInput" rows="10" cols="50" placeholder="Paste your cloud usage JSON here..."></textarea>
// <br />
// <button onclick="analyzeCosts()">Analyze</button>
// <pre id="output"></pre>
//
// <script>
//   function analyzeCosts() {
//   const input = document.getElementById('jsonInput').value;
//   const output = document.getElementById('output');
//
//   try {
//   const data = JSON.parse(input);
//   let totalCost = 0;
//   let suggestions = [];
//
//   data.resources.forEach((res) => {
//   totalCost += res.cost;
//
//   if (res.usage < 30) {
//   suggestions.push(`Consider reducing or removing: ${res.name} (Usage: ${res.usage}%)`);
// }
// });
//
//   output.textContent = `Total Estimated Cost: $${totalCost}\n\nSuggestions:\n${suggestions.join('\n')}`;
//
// } catch (err) {
//   output.textContent = 'Invalid JSON input. Please check your data.';
// }
// }
// </script>
// </body>
// </html>
