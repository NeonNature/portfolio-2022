# Portfolio 2022


## Description
There are two main purposes for this repo

 - Experiment Three.JS without using any HTML and 3D models
 - Building a portfolio website

Why no 3D models? Because I am very inexperienced in Blender and such, so I wanted to use something in my arsenal - object manipulation. Thus, this project is built around the theme of "**Hexagon Manipulation**" which changes the positions and rotations depending on certain conditions.

However, this is far from perfect. This has several glaring weaknesses -

 - Mobile and other low-end devices will have some problems trying to load the hexagons, so they have been disabled for such devices.
 - This is not accessible at all. This is because everything from texts to buttons are actually geometries which are all done in the canvas. You will not be able to hear voiceovers, nor able to tab in/out of buttons.

## Instructions


1. Install NPM packages
   ```sh
   npm install
   ```
2. Run by
   ```sh
   npm run start
   ```


## Technologies

Developed using
 - GatsbyJS - React Framework
 - Sass/Scss
 - Leva - for debugging
 - ThreeJS

Hosted on
- Gatsby Cloud
