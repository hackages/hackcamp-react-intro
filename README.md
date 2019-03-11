# HackCamp React - Introduction

### Getting started

First off, you will need to clone the project:
```bash
git clone (the url of this repository)
cd (in the directory you just cloned)
yarn (or npm install)
yarn start (or npm run start)

# Happy hacking ;)
```


### Challenges

#### 1.
The header is rendered directly in the app.js,
try to extract it and create a Header component then use this component instead of the header
Check the TODO 1 in the code

#### 2.
The selectTab function is the one called when a user clicks on a filter
For now it doesn't work, you need to change the selected property of the right filter in the array
Check the TODO 2 in the code

#### 3.
Pass the selectTab function to the FilterList component
Check the TODO 3 in the code

#### 4.
When the user clicks on the top left icon, the sidebar should be shown.
Check the TODO 4 in the code

#### 5.
When the user types something in the search bar (located in the sidebar), you need to update the state
and call the filterMovie function
Check the TODO 5 in the code