# QuestionIt

QuestionIt! is a simple question-and-answer app built as a take home project for seekho.ai. It uses [Open Trivia DB API](https://opentdb.com/) to fetch multiple choice questions from which the user can select a correct option. The score/result is shown at the end.

## QuestionIt brand guide

**Colors**:
- Primary: #8073b1
- Secondary: #f766a1
- Error: #f57030

**Background colors (Light mode)**
- default: #F3F3F4
- paper: #FFFFFF

**Fonts**:
- App: 'Akshar', sans-serif

## App Directory Structure
- /src/API => Contains API endpoint call for fetching questions
- /src/Components/Custom => Contains custom MUI components
- /src/Components/Modal => Contains modals & modal router
- /src/Context => Contains app context used by Context API
- /src/Theme => Contains app theming 

 ## Screens & Routing
- / => Quiz page => App.js

## Technologies, Packages & External Resources Used

- Language: JS
- Framework: React
- Fonts: Google Fonts
- Icons: Material Icons
- Component library: MUI
- State management: Context API

## Screenshots
![Home](https://i.ibb.co/s2gsVWc/home.png)
![alt text](https://i.ibb.co/F8JPJSD/menu.png)
![alt text](https://i.ibb.co/WKWRS39/selected.png)
![alt text](https://i.ibb.co/wNx4Q6j/result.png)
![alt text](https://i.ibb.co/bgpGcyr/about.png)
![alt text](https://i.ibb.co/JtzMP31/dark.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.