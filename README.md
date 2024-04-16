# Tasked

Experience peak productivity levels with Tasked, a task management solution aimed at users who want to effectively manage their personal tasks. 

![Tasked Am I Responsive](documentation/readme/am-i-responsive.PNG)

Tasked leverages the power of the frontend framework [React](https://react.dev/) to create an interactive user interface that seamlessly integrates the [DRF Tasked API](https://github.com/akirby23/drf-tasked).

[Live Link](https://tasked-pp5-f085ebbd00be.herokuapp.com/)

## Table of Contents

- [User Goals](#user-goals)
- [Features](#features)
    - [Existing Features](#existing-features)
    - [Future Features](#future-features)
    - [Components](#components)
    - [Hooks](#hooks)
    - [Contexts](#contexts)
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

Tasked aims to enable users to:

- Create an account and log in to access the app's features
- Create, read, update & delete tasks
- Categorise tasks
- Prioritise tasks
- Assign tasks to other users
- Complete/Reopen tasks
- Create, update and delete comments on tasks
- Access user profiles

## Features

### Existing Features

#### Home Page

The home page for logged out users features a welcoming message and brief description of the app:
<br>
![Home page, logged out, desktop](documentation/readme/features/home-logged-out-desktop.png)
<br>
![Home page, logged out, mobile](documentation/readme/features/home-logged-out-mobile.PNG)
<br>
The home page for logged in users displays a dashboard which contains the following:
    - A table containing the total number of tasks in progress & total number of tasks completed by the tasked community.
    - A list of the user's high priority tasks, if they have any in progress.
<br>
![Home page, logged in, desktop](documentation/readme/features/home-logged-in-desktop.PNG)
<br>
![Home page, logged in, mobile](documentation/readme/features/home-logged-in-mobile.PNG)

#### Navbar

The app features a responsive navbar on each page. 
The Tasked logo is displayed to the left of the navbar. The user will be redirected to the home page once the logo is clicked.
<br> 
![Logo](documentation/readme/features/logo.PNG)
<br>
Below are the navigation links that are available while logged out:
<br>
![Navbar logged out](documentation/readme/features/navbar-logged-out.PNG)
<br>
Below are the navigation links that are available while logged in:
![Navbar logged in](documentation/readme/features/navbar-logged-in.PNG)

#### Create a task

Users can create a new task by clicking the "New Task" link in the navbar.
![Create new task desktop](documentation/readme/features/create-new-task-desktop.PNG)
![Create new task mobile](documentation/readme/features/create-new-task-mobile.PNG)

#### Task Page

The task page features all of the task's details as well as the task's associated comments.
<br>
![Task](documentation/readme/features/task.PNG)
<br>
Task owners & assignees can change the status of the task on button click: 
<br>
![Mark as completed button](documentation/readme/features/mark-as-completed-button.PNG)
<br>
![Reopen button](documentation/readme/features/reopen-tasks.PNG)

#### Edit a task

Task owners and task assignees can edit tasks if they need to update them:
<br>
![Task drop down](documentation/readme/features/task-comment-dropdown.PNG)
<br>
![Edit task](documentation/readme/features/edit-task.PNG)

#### Comment on tasks

Users can add comments to tasks to keep them up to date or to offer encouragement to other members of the community:
<br>
![Comments](documentation/readme/features/comments.PNG)

#### Edit comments

Users can edit their own comments if they need to update them:
<br>
![Comment drop down](documentation/readme/features/task-comment-dropdown.PNG)
<br>
![Edit comment](documentation/readme/features/edit-comment-form.PNG)

#### Defensive programming 

Task owners and task assignees can delete tasks, and comment owners can delete their own comments. 

To prevent any hasty actions from being taken, the app features defensive programming. 

Users are prompted to confirm if they want to delete the task/comment and are given the chance to cancel the request. 

![Delete task modal](documentation/readme/features/delete-task-modal.PNG) 
<br>
![Delete comment modal](documentation/readme/features/delete-comment-modal.PNG)

#### Tasks Pages

There are 3 different task list pages available:

- All Tasks. All tasks that are currently in progress are displayed here. 

![All Tasks desktop](documentation/readme/features/all-tasks-desktop.PNG) ![All Tasks Mobile](documentation/readme/features/all-tasks-mobile.PNG)

- My Tasks. All tasks created by the authenticated user are displayed here. 

![My Tasks desktop](documentation/readme/features/my-tasks-desktop.PNG)  ![My Tasks mobile](documentation/readme/features/my-tasks-mobile.PNG)

- My Assigned Tasks. All tasks assigned to the authenticated user are displayed here. 

![My Assigned Tasks desktop](documentation/readme/features/my-assigned-tasks-desktop.PNG) ![My Assigned Tasks mobile](documentation/readme/features/my-assigned-tasks-mobile.PNG)

#### Search functionality

User can search for tasks by title or by category from each of the 3 tasks pages. 
<br>
![Search bar](documentation/readme/features/search-bar.PNG)
<br>
If no results are found, the message below will display to the user:
<br>
![No results found](documentation/readme/features/no-results-found.PNG)

#### Profile Page 

User profiles are created upon sign up 
<br>
![Profile desktop](documentation/readme/features/profile-desktop.PNG)
<br>
![Profile mobile](documentation/readme/features/profile-mobile.PNG)

Users can edit their own profiles to personalise them.

![Profile dropdown menu](documentation/readme/features/profile-dropdown-menu.PNG)
<br>
![Change username](documentation/readme/features/change-username.PNG)
<br>
![Change password](documentation/readme/features/change-password.PNG)
<br>
![Edit profile](documentation/readme/features/edit-profile.PNG)


#### Informative Messages

Success messages are displayed to users when actions are completed successfully.
<br>
![Log in success message](documentation/readme/features/log-in-success-message.PNG)
<br>
![Logged out success message](documentation/readme/features/logged-out-success-message.PNG)
<br>
![Your changes have been saved message](documentation/readme/features/changes-saved-success-message.PNG)
<br>
![Task created success message](documentation/readme/features/task-created-success-message.PNG)
<br>
![Task deleted success message](documentation/readme/features/task-deleted-success-message.PNG)
<br>
![Comment deleted success message](documentation/readme/features/comment-deleted-success-message.PNG)
<br>
An error message is displayed if the user attempts to access restricted pages:
<br>
![Please log in to view this page message](documentation/readme/features/please-log-in-message.PNG)

### Future Features

- Due date assignment to allow users to manage their tasks more effeciently.
- Ability to add multiple assignees to one task.
- Goals: A feature that would allow users to group tasks together and complete them as part of an overall goal. 
- Allow site admins to create new categories on the frontend. Currently, this can only be actioned by superusers on the backend.
- Search functionality in form dropdowns: as the application scales, it will likely become cumbersome to scroll through long dropdown menus to select a category or assignee. With this in mind we would like to implement search functionality in create & edit task dropdown fields.
- Dashboard component to display on the home page & on the task list pages. It will include the existing total globalTaskData table and list of high priority tasks as well as the following:
    - statistics on categories and priority levels
    - leaderboard displaying the profiles with the most completed tasks count
- Dashboard on the task list pages that will display the total number of tasks in progress/completed on the All Tasks list, My Tasks list & My Assigned Tasks list. 

### Components

- **Asset:** a multi-purpose component that is used throughout the app to display a spinner when data is loading, a message and/or an image, depending on the props that are passed to it.

- **DropDownMenu:** this component displays a three dot dropdown menu on comments, tasks and profiles. It enables task owners/assignees and comment owners to edit and delete their tasks and comments with ease, and allows profile owners to edit their profiles.

- **ModalPopUp:** used primarily for defensive programming. This component has been reused on comments and tasks to prompt the user to confirm whether or not they want to delete their comment or task. 

- **NavBar:** displays a nav bar on every page of the application, allowing users to seamlessly navigate between pages to access all of the application's features.

- **NotFound:** displays a 404 error message to the user if they navigate to an invalid URL. The asset component is reused here to display the 404 image & message.

- **ProfilePicture:** displays the user's profile picture throughout the application.

### Hooks

- **useRedirect:** used to redirect users to the log in page if they attempt to access pages that require user authentication, and also to redirect users to the home page if they attempt to access log in/sign up pages while logged in. 

- **useClickOutsideToggle:** use to collapse the expanded navbar menu when the user clicks outside of the navbar for better UI.

### Contexts

- **CurrentUserContext:** used to set the current user's authentication state. This is used throughout the application to redirect users if they attempt to access pages that require the user to be logged in. 

- **ProfileDataContext:** used to set the profile data. This context will be reused more in future development when the dashboard is developed further.

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

|  Page | Screenshot  | Deviation from wireframes  |  
|---|---|---|
| Home Page - Logged Out  | ![Home page for logged out users on desktop](documentation/readme/wireframes/home-logged-out-desktop.png)  |   | 
| All Tasks  | ![All Tasks on desktop](documentation/readme/wireframes/all-tasks-desktop.png)  | Dashboard has not been implemented yet, this is planned for future development  | 
| My Assigned Tasks  | ![My Assigned Tasks on mobile](documentation/readme/wireframes/my-assigned-tasks-desktop.png)  | Dashboard has not been implemented yet, this is planned for future development  | 
| My Tasks  | ![My Tasks on mobile](documentation/readme/wireframes/my-tasks-desktop.png)  | Dashboard has not been implemented yet, this is planned for future development  | 
| Task  | ![Task on desktop](documentation/readme/wireframes/task-desktop.png)  | Due date assignment is planned for future development. <br> Categories, priority levels & status were styles like labels to appear more visually appealing. <br> Status change button was added to improve the UI  | 
| Profile  | ![Profile on desktop](documentation/readme/wireframes/profile-desktop.png)  | Tabs were added that filter the user's assigned tasks by "In Progress" & "Completed", allowing the user to reopen closed tasks if they need to  | 

</details>

<details>
<summary>Mobile</summary>

|  Page | Screenshot  | Deviation from wireframes |  
|---|---|---|
| Home  | ![Home page on mobile](documentation/readme/wireframes/home-logged-out-mobile.png)  |   | 
| Tasks (All Tasks, My Created Tasks, My Assigned Tasks)  | ![Tasks (All Tasks, My Created Tasks, My Assigned Tasks) on mobile](documentation/readme/wireframes/tasks-mobile.png)  | Dashboard has not been implemented yet, this is planned for future development  | 
| Profile  | ![Profile on mobile](documentation/readme/wireframes/profile-mobile.png)  | Tabs were added that filter the user's assigned tasks by "In Progress" & "Completed", allowing the user to reopen closed tasks if they need to  | 

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
- [AmIResponsive](https://ui.dev/amiresponsive): to test for responsiveness.
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
    1. This can be found by navigating to your Heroku dashboard, clicking on your deployed API's app name, clicking on "Open App" at the top of the page and copying the app's url. If you have not deployed your API yet, the steps to do so can be found [here](https://github.com/akirby23/drf-tasked?tab=readme-ov-file#deployment).
    
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

- I would like to thank my Code Insitute mentor, Mo Shami, for his support & guidance throughout the development of this project. 
- I would also like to thank Thomas & John from the tutor support team at Code Institute for helping me to troubleshoot an issue that I was having with implementing comment editing functionality.
- Special thanks to [Josip](https://github.com/josipcodes) for the daily standups. I couldn't have asked for a better accountability buddy!

[Back to the top](#tasked)