# Tasked

## Table of Contents

- [User Goals](#user-goals)
- [Features](#features)
    - [Existing Features](#existing-features)
    - [Future Features](#future-features)
- [User Experience](#user-experience)
    - [User Stories](#user-stories)
    - [Design](#design)
        - [Colour Scheme](#colour-scheme)
        - [Typeography](#typeography)
        - [Imagery](#imagery)
        - [Wireframes](#wireframes)
- [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks, Libraries & Programs](#frameworks-libraries--programs)
- [Testing](#testing)
- [Agile Development Process](#agile-development-process)
- [Deployment](#deployment)
- [Credits](#credits)
    - [Code](#code)
    - [media](#media)
    - [Acknowledgements](#acknowledgements)


## User Goals

## Features

### Existing Features

### Future Features

## User Experience

### User Stories

| User Story | Priority |
|---|---|
| As a user, I can sign up for an account so that I can access the app's content & features. | must-have  |
| As a user, I can log in so that I can access the app’s content and features.  | must-have  |
| As an authenticated user, I can log out so that I can protect my account. | must-have  |
| As an authenticated user, I can create a task so that I can manage & keep track of my responsibilities. | must-have |
| As an authenticated user and task owner, I can edit my tasks so that I can keep them up to date or make changes to them if needed. | must-have |
| As an authenticated user, I can retrieve my tasks so that I can access them to keep them up to date and/or make changes to them. | must-have  |
| As an authenticated user and task owner, I can delete my tasks so that I can remove them from my to-do list if they are no longer needed. | should-have  |
| As an authenticated user, I can retrieve tasks that are assigned to me so that I can work on tasks that require action from me. | should-have  |
| As an authenticated user, I can change the status of tasks that are owned by me or assigned to me so that I can mark them as completed when no further action is needed. | should-have  |
| As a user, I can see an informative error page when faced with a 404 error so that I can understand if the page I'm looking for exists. | should-have  |
| As an authenticated user, I can assign categories to tasks so that they can be organised based on their criteria. | could-have  |
| As an authenticated user, I can assign a priority level to a task so that I can focus on the most urgent tasks first. | could-have  |
| As an authenticated user, I can edit tasks that are assigned to me so that I can keep them up to date and/or make necessary changes to them. | could-have  |
| As an authenticated user, I can comment on tasks so that I can provide updates or additional information in relation to the task. | could-have  |
| As an authenticated user & comment owner, I can edit my comments so that I can update them or correct potential errors. | could-have  |
| As an authenticated user, I can retrieve all comments associated with a task so that I can follow the discussion and view the latest updates in relation to the task. | could-have  |
| As an authenticated user, I can delete my own comments so that I can remove them if they're no longer relevant. | could-have  |
| As a user, I can access a navbar so that I can easily navigate through the app. | could-have  |
| As an authenticated user, I can access user profiles so that I can learn more about the user. | could-have  |
| As an authenticated user, I can edit my own profile so that I can keep it up to date. | could-have  |
| As an authenticated user, I can scroll indefinitely through tasks so that I don't need to manually navigate to the next page when I reach the bottom of the page. | could-have  |
| As an authenticated user, I can search for tasks so that I can easily retrieve the tasks that I want to view or work on. | could-have |
| As a user, I want messages to be displayed when I successfully perform an action so that I can be assured that the action has been completed successfully. | could-have |
|  As a site admin, I can create task categories so that I can manage and update the categories that are available to users effectively.   |  wont-have    |
|  As a site admin, I can add task priority levels so that I can manage and update the priority levels that are available to users effectively.   |  wont-have    |
|  As an authenticated user, I can access a dashboard that shows statistics regarding my tasks so that I can track my progress.   |  wont-have    |

### Design

#### Colour Scheme

The colour palette was generated from the Tasked logo using [coolors](https://coolors.co/).

![Tasked colour palette](documentation/readme/tasked-colour-palette.png)

- `#000000` has been used to add a gentle shadow to the primary buttons.
- `#1E252A` has been used as the main text colour.
- `#1E4185` has been used to provide a contrast when links are hovered over.
- `#376153` has been used as a contrast when the primary buttons are hovered over.
- `#67D09F` has been used as the background colour for the navbar and for the primary buttons, to match the Tasked branding.
- `#AC524B` has been used as a secondary colour on the navbar and for the labels on the tasks, to match the Tasked branding.
- `#D7DDE9` has been used as the background colour to provide contrast to the containers.
- `#FFFFFF` has been used as the background colour for the containers across the app, and as the text colour on the task labels to provide contrast.

#### Typeography

- `Fredoka` with a fallback font of `italic` has been used for the main headings, to match the font in the Tasked logo.

- `Raleway` with a fallback font of `italic` has been used for the remaining elements. 

Both of the fonts above were obtained from the Google Fonts library.

#### Imagery

- Logo & Favicon

![Tasked logo](src/assets/tasked-logo.png)

- 404 page image

![404 page image](src/assets/404.png)

- No results found image

![No results found](src/assets/no-results.png)

- Home page 

![Home page graphic](src/assets/home-page-graphic.png)

- Default profile picture 

![Default profile picture](documentation/readme/default-profile-pic.jpg)

#### Wireframes

<details>
<summary>Desktop</summary>

|  Page | Screenshot  | Notes  |  
|---|---|---|
| Home Page - Logged Out  | ![Home page for logged out users on desktop](documentation/readme/wireframes/home-logged-out-desktop.png)  |   | 
| All Tasks  | ![All Tasks on desktop](documentation/readme/wireframes/all-tasks-desktop.png)  |   | 
| My Assigned Tasks  | ![My Assigned Tasks on mobile](documentation/readme/wireframes/my-assigned-tasks-desktop.png)  |   | 
| My Tasks  | ![My Tasks on mobile](documentation/readme/wireframes/my-tasks-desktop.png)  |   | 
| Task  | ![Task on desktop](documentation/readme/wireframes/task-desktop.png)  |   | 
| Profile  | ![Profile on desktop](documentation/readme/wireframes/profile-desktop.png)  |   | 

</details>

<details>
<summary>Mobile</summary>

|  Page | Screenshot  | Notes  |  
|---|---|---|
| Home  | ![Home page on mobile](documentation/readme/wireframes/home-logged-out-mobile.png)  |   | 
| Tasks (All Tasks, My Created Tasks, My Assigned Tasks)  | ![Tasks (All Tasks, My Created Tasks, My Assigned Tasks) on mobile](documentation/readme/wireframes/tasks-mobile.png)  |   | 
| Profile  | ![Profile on mobile](documentation/readme/wireframes/profile-mobile.png)  |   | 

</details>

## Technologies Used

### Languages

- JavaScript
- HTML
- CSS

### Frameworks, Libraries & Programs

- [React 17.0.2](https://react.dev/): to build an interactive user interface.
- [axios](https://www.npmjs.com/package/axios): to send HTTP requests to the [drf-tasked](https://github.com/akirby23/drf-tasked/tree/main) API.
- [jwt-decode](https://jwt.io/): to decode JSON tokens.
- [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) & [React Bootstrap 4](https://react-bootstrap-v4.netlify.app/): for styling the app.
- [react-router-dom](https://reactrouter.com/en/main): for routing.
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component): to implement infinite scrolling, removing the need for the user to navigate to the next page to see more tasks/comments.
- [react-hot-toast](https://react-hot-toast.com/): to provide feedback to users when they take actions within the app in the form of success messages.
- [GitHub](https://github.com/): to store the code in its repository and to manage the KanBan board.
- [GitPod](https://gitpod.io/): to write the code.
- [Git](https://git-scm.com/): to commit & push the code to GitHub for version control.
- [Heroku](https://dashboard.heroku.com/): to deploy the app.
- [ChromeDevTools](https://developer.chrome.com/docs/devtools) for debugging and manual testing.
- [Balsamiq](https://balsamiq.com/): to create the wireframes.
- [Google Fonts](https://fonts.google.com/): to import the "Fredoka" & "Raleway" fonts.
- [FontAwesome](https://fontawesome.com/): to import the icons used throughout the app.
- [coolors](https://coolors.co/): to generate the colour palette.

## Testing

All testing details are documented within the [TESTING.md](TESTING.md) file.

## Agile Development Process

The Tasked app was developed using an Agile approach.

- User stories were prioritised using the MoSCoW method:

| Priority Level | Description  |
|---|---|
| `must-have ` | Essential features  |
| `should-have` | Important but not absolutely essential features  |
| `could-have ` | Nice to have but not essential features  |
| `won't-have`  | Non essential features, may be implemented in the future |

- GitHub Issues was used to document & to prioritise each of the user stories.

![GitHub Issues must have user stories](documentation/readme/github-issues-must-have.PNG)
![GitHub Issues should have user stories](documentation/readme/github-issues-should-have.PNG)
![GitHub Issues could have user stories](documentation/readme/github-issues-could-have.PNG)
![GitHub Issues won't have user stories](documentation/readme/github-issues-wont-have.PNG)

- The user stories were refined & actioned in 4 different iterations: 

| Iteration | Screenshot |
|---|---|
| Iteration 1: Navigation, Authentication & Tasks  | ![GitHub milestone - Iteration 1](documentation/readme/github-milestone-iteration-1.PNG)  |
| Iteration 2: Task Comments & Profiles  | ![GitHub milestone - Iteration 2](documentation/readme/github-milestone-iteration-2.PNG)  | 
| Iteration 3: Task Features  | ![GitHub milestone - Iteration 3](documentation/readme/github-milestone-iteration-3.PNG)  | 
| Iteration 4: App features & statistics  | ![GitHub milestone - Iteration 4](documentation/readme/github-milestone-iteration-4.PNG)  | 

A [GitHub project](https://github.com/users/akirby23/projects/7/views/1) was used to manage & track the progress of the app's development:

![GitHub project](documentation/readme/github-project.PNG)

## Deployment

Tasked has been deployed to Heroku. Click [here](https://tasked-pp5-f085ebbd00be.herokuapp.com/) to view the live link. 

The steps below can be followed to deploy the application:

### Fork or clone the Tasked repository

#### Forking the repository

1. Navigate to [Tasked GitHub repository](https://github.com/akirby23/tasked).
2. At the top right-hand corner of the page, click on "Fork".
3. Rename or change the description if you wish.
4. Click "Create Fork".
5. A copy of the original repository should now appear on your GitHub account.

#### Cloning the repository

1. Navigate to [Tasked GitHub repository](https://github.com/akirby23/tasked).
2. Navigate to the "<> Code" button and click on it.
3. Choose your preferred cloning option (HTTPS, SSH or GitHub CLI).
4. Open Git Bash or Terminal.
5. Change the current working directory to the location where you want the cloned directory.
6. In your terminal, enter the following command to clone The Crochet Corner repository:
     ``git clone https://github.com/akirby23/tasked.git``
7. Press enter to create a local clone in your preferred IDE.

### Update your axios base URL 

1. In your repository, navigate to ``src/api/axiosDefaults.js``. 
2. Replace the current axios.defaults.baseURL with your own deployed API URL.
    1. This can be found by navigating to your Heroku dashboard, clicking on your deployed API's app name, clicking on "Open App" at the top of the page and copying the app's url.

### Create the app
1. Create a Heroku account on [heroku.com](https://heroku.com/)
2. From the top right hand corner of the dashboard, click "New", then click "Create new app".
3. Give the app a unique name and select the relevant region.
4. Click "Create app".

### Deploy to Heroku

- Navigate to the "Deploy" tab. 
- Link the GitHub repository in the Deployment Method sectionn. 
- Deploy manually or enable automatic deploys if you would prefer. 
- If any errors occur during deployment, the build logs can be used to troubleshoot them.

The app will now be live.

## Credits

### Code

Documentation consulted during development:
- [React](https://react.dev/)
- [React Bootstrap 4](https://react-bootstrap-v4.netlify.app/)
- [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [react-hot-toast](https://react-hot-toast.com/docs)
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component)

Code Institute's Moments walkthrough project was also referred to regularly during development.

Resources used for assistance with debugging:
- [Stack Overflow](https://try.stackoverflow.co/explore-teams?utm_source=adwords&utm_medium=ppc&utm_campaign=kb_teams_search_brand_emea-dach&_bt=657236278309&_bk=stack+overflow&_bm=p&_bn=g&gad_source=1&gclid=CjwKCAjw_e2wBhAEEiwAyFFFo-iORr_1hZM8mwBWfoGVDgXYp6Z2IgMTsIjqatHR06Suvee3pDACvBoCm4IQAvD_BwE)
- [Slack](https://slack.com/)

### Media

- The logo was generated using [freelogodesign.org](https://logo-maker.freelogodesign.org/).

- The rest of the images were obtained from [vecteezy](https://www.vecteezy.com/).
    - Credit to [tubagus-zainal-riffandi](https://www.vecteezy.com/vector-art/3319132-cartoon-of-cute-robot-holding-sign) for the 404 image.
    - Credit to [msystudio2022](https://www.vecteezy.com/vector-art/11232764-magnifying-glass-vector-isolated) for the no results image.
    - Credit to [charco_design](https://www.vecteezy.com/vector-art/10396903-woman-working-at-office-and-managing-tasks) for the image displayed on the home page.
    - Credit to [mostkingto](https://www.vecteezy.com/vector-art/20765399-default-profile-account-unknown-icon-black-silhouette) for the default profile picture.

### Acknowledgements

[Back to the top](#tasked)