# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `This source code is generated from Create React App with Typescript Template. So it's missing a lot of stuffs for a long run project`
1. Unit Test are not fully implemented
2. Missing BFF (backend for fronend) setup to combine data for UI.
3. Missing theme setup with styled component library (also it should support sass file)
4. State Mangement is not completely designed. It's using very simple of React Context but it should have Redux or complete set of React Context Stores for future extensions.
5. Because of time constraint, Admin Page is reusing components inside Order Detail page which is not in a good practice. Admin Page should contain different UI design or an edit mode of Order Detail page. If Admin Page is a edit mod of Order Detail page, there are some components should be placed as shared components. For now, user can edit only name on product table.
6. I'm using PrimeReact for get quick setup for table / button but it could be re-implemented without using external library.
7. The folder structure also not in finalized phase but the idea is breaking the applitcation into subfolders like
/pages /shared /shared/helpers /shared/components /stores/ ...