---
title: ag-grid woes
author: Ian
date: 05/05/2020
icon: bi-table
image: ag-grid.png
---

I’m working on a nice project at the moment which involves using a new plugin for my team &raquo; ag-grid. It’s a `data-grid` package that promises to add a lot of functionality to our product, with a lot less effort than it would take to try and reinvent the wheel.

Our first PoC was to see how simple it was to add to an existing react instance and then hook it up to data coming from a rest api call. All fairly painless – so far so good.

Then the fun starts, with more functionality requests, a very talented colleague and myself proceeded to divide and conquer. Ticking off task after task, sometimes with little fuss and sometimes with far too much.

We are both in agreement of these things:-

- documentation isn’t the best.
- some simple examples that wet your appetite nicely;
  - but when you’re looking for clear ‘how-to’ type examples they are not easy to find or comprehend
- trying to do too much for too many
  - it’s trying to support all the major front end JS frameworks, resulting in some wooly code and frequent head scratching.

All that aside – we have managed to hook up selectable columns and filtering for over 6500+ records. As well as incorporating
Export to Excel functionality too – all within 4 days.

It appears to be performant on Internet Explorer, which is still the weapon of choice for browsing by the key stakeholders, but very performant on the likes of Chrome, Firefox and Safari.
