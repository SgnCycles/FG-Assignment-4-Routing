# FG - Frameworks - Assignment 4 - React Routing Website #

## Introduction ##
For this school assignment I have built a multipage React website using routing to test my knowledge and understanding of a project design, state, props, components and routing. 
The topic of the website is to explore the world's continents and countries, providing geographic and general information about each country with data fecthed from an API.

## Live Demo ##
Check out my [website](https://fg-assignment-4-routing.vercel.app/).

## Tech Stack ##
- HTML5
- CSS
- Vanilla Javascript
- React
- npm
- [react-globe.gl](https://www.npmjs.com/package/react-globe.gl)

## Used APIs##
- [REST Countries](https://restcountries.com/)
- [Leaflet](https://leafletjs.com/)

## Project Structure ##
- **Project root**:
  - main.jsx (main application entry point)
  - App.jsx (the root component of the application)
  - package.json (project metadata and dependencies)
  - .gitignore (files excluded from the git)
  - index.css (global css file)

- **data**:
  - continents.js (data file with continents and their coordinates)
    
- **public**:
  - favicon image
      
- **assets**
  - logos (logo file)

- **hooks**
  - useFetch.js (custom React hook that fetches data from the API)
    
- **components**:
  - CountryCard (component for each country card (including css file))
  - Footer (component for the footer section (including css file))
  - Globe (component for the Globe section (including css file))
  - Hamburger (component for the mobile hamburger menu (including css file))
  - Header (component for header’s section (including css file))
  - Logo (component for website’s log section (including css file))
  - LayoutContinent (component for the layout of the Continent pages (including css file))
  - LayoutCountry (component for the layout of the Country pages (including css file))
  - LayoutHome (component for the layout of the Homepage (including css file))
  - Map (component to display the country on the map (including css file))
  - Navigation (component for navigation menu (including css file))

- **pages**
  - Home (Homepage)
  - Continent (displays the continent, it's location on the globe and the belonging countries)
  - Country (displays detailed information about the selected country)
