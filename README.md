# Table of Content

-   [Description](#description)
-   [Setup](#setup)
-   [Project Preview](#project-preview)

## Description

This small project is part of an interview exercise where I was tasked to developed a minimum viable product (MVP) of the Vizzly dashboard builder.

✅ **The requirements for the builder are as follows**

-   The user should be able to create at least one of the following components from the data set we provide in the “resources” section;
    -   Line chart
    -   Bar chart
    -   Pie chart
-   When building each component, the user must be able to;
    -   Select at least one field as the dimension.
    -   Select at least one field as the measure.
    -   Be able to choose between two aggregate functions.
-   The user should be able to add components to the dashboard.
-   The dashboard must have at least 4 cells.
-   One hidden “easter egg” feature which results in something cool happening.
-   A way of bundling the dashboard component, which can be installed into other projects if published to NPM.

🎯 **Stretch goals**

-   Components on the dashboard should be editable once they’ve been added
-   Support multiple component types; e.g Line and a bar chart.
-   Allow the user to add more rows to the dashboard
-   Allow the user to split and merge cells on the dashboard
-   Allow the user to customise the theme of the dashboard. For example;
    -   Setting brand colours
    -   Changing the font family
-   Making a shareable link to the dashboard - without persisting it 🤔
-   Drag-n-drop components around the dashboard
-   Support time dimensions in the components.

<a id="setup"></a>

## Setup

1. Download [Node.js](https://nodejs.org/en/download/);
2. Download the project by using `git clone https://github.com/Danielvermel/viz-dashboard.git` in your terminal;
3. In your terminal run `npm i` to install all dependencies;
4. And finally run `npm run dev`;

<a id="project-preview"></a>

## Project Preview

### Dashboard (without Charts)

![dashboardNoCharts](https://user-images.githubusercontent.com/32749108/209864346-ecefd7bf-2a79-43c0-ad62-c538e9a9742e.png)

### Dashboard (with Charts)

![dashbaordCharts](https://user-images.githubusercontent.com/32749108/209864417-e7cfc5e4-4b33-4dc6-bb08-f55a4dd7e76a.png)
