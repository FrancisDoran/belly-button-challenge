# D3 Data Visualization: OTU Sample Analysis

This project is a web-based visualization tool that allows users to explore and analyze OTU (Operational Taxonomic Unit) sample data. Using D3.js and Plotly.js, the tool fetches, processes, and visualizes the sample data, providing insights into OTU sample counts and their relationships.

## Features:

1. **Dropdown Selection**: Users can select different sample IDs from a dropdown menu, dynamically populated with available sample data.

2. **Bar Chart**: A horizontal bar chart displaying the top 10 OTUs for the selected sample. The bars are ranked with the highest values at the top.

3. **Bubble Chart**: A bubble chart that visualizes the sample counts of each OTU. The size and color of the bubbles are indicative of the OTU counts.

4. **Metadata Panel**: Displays demographic information for the selected sample.

## Implementation Details:

- **Data Fetching**: Data is fetched from a JSON hosted at a given URL using D3's `d3.json()` method.
  
- **Data Processing**: The fetched data is filtered and processed based on the user's selection from the dropdown.

- **Visualization**: The processed data is visualized using Plotly.js, providing interactive charts that users can hover over to get more details.
