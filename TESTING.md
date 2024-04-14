# Testing | Tasked

[Return to README.md](README.md)

## Table of Contents
- [User Stories](#user-stories)
- [Manual Testing](#manual-testing)
- [Validator Testing](#validator-testing)
- [Bugs](#bugs)

## User Stories

| User Story |  Status |
|---|---|
| As a user, I can sign up for an account so that I can access the app's content & features. |   |
| As a user, I can log in so that I can access the app’s content and features.  |   |
| As an authenticated user, I can log out so that I can protect my account. |   |
| As an authenticated user, I can create a task so that I can manage & keep track of my responsibilities. |   |
| As an authenticated user and task owner, I can edit my tasks so that I can keep them up to date or make changes to them if needed. |   |
| As an authenticated user, I can retrieve my tasks so that I can access them to keep them up to date and/or make changes to them. |   |
| As an authenticated user and task owner, I can delete my tasks so that I can remove them from my to-do list if they are no longer needed. |   |
| As an authenticated user, I can retrieve tasks that are assigned to me so that I can work on tasks that require action from me. |   |
| As an authenticated user, I can change the status of tasks that are owned by me or assigned to me so that I can mark them as completed when no further action is needed. |   |
| As a user, I can see an informative error page when faced with a 404 error so that I can understand if the page I'm looking for exists. |   |
| As an authenticated user, I can assign categories to tasks so that they can be organised based on their criteria. |   |
| As an authenticated user, I can assign a priority level to a task so that I can focus on the most urgent tasks first. |   |
| As an authenticated user, I can edit tasks that are assigned to me so that I can keep them up to date and/or make necessary changes to them. |   |
| As an authenticated user, I can comment on tasks so that I can provide updates or additional information in relation to the task. |   |
| As an authenticated user & comment owner, I can edit my comments so that I can update them or correct potential errors. |   |
| As an authenticated user, I can retrieve all comments associated with a task so that I can follow the discussion and view the latest updates in relation to the task. |   |
| As an authenticated user, I can delete my own comments so that I can remove them if they're no longer relevant. |   |
| As a user, I can access a navbar so that I can easily navigate through the app. |   |
| As an authenticated user, I can access user profiles so that I can learn more about the user. |   |
| As an authenticated user, I can edit my own profile so that I can keep it up to date. |   |
| As an authenticated user, I can scroll indefinitely through tasks so that I don't need to manually navigate to the next page when I reach the bottom of the page. |   |
| As an authenticated user, I can search for tasks so that I can easily retrieve the tasks that I want to view or work on. |  |
| As a user, I want messages to be displayed when I successfully perform an action so that I can be assured that the action has been completed successfully. |  |

## Manual Testing

<details>
<summary>Nav bar</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Logo | The Tasked logo is displayed on the left hand side of the nav bar. <br> Once clicked, the user is redirected to the home page.   | No  |   |   |
| Log In nav link  | Displayed to logged out users only. <br> The log in nav link is displayed on the right hand side of the nav bar. <br> Once clicked, the user is redirected to a log in page.  | No  |   |   |
| Sign In nav link  | Displayed to logged out users only. <br> The sign in button is displayed on the right hand side of the nav bar. <br> Once clicked, the user is redirected to a sign in page.  | No  |   |   |
| New Task nav link   | Displayed to logged in users only. <br> Once clicked, the user is redirected to a page that will allow them to create a task.   | Yes  |   |   |
| All Tasks nav link | Displayed to logged in users only. <br> Once clicked, the user is redirected to a page that displays a list of all tasks.   | Yes |   |   |
| My Tasks nav link | Displayed to logged in users only. <br> Once clicked, the user is redirected to a page that displays all tasks that they have created.  | Yes  |   |   |
| My Assigned Tasks nav link  | Displayed to logged in users only. Once clicked, the user is redirected to a page that will display all tasks that have been assigned to them.   |  Yes |   |   |
| Log Out nav link  | Displayed to logged in users only. <br> Once clicked, a modal will appear that will prompt them to confirm whether or not they want to log out. | Yes  |   |   |
| My Profile nav link  |   | Yes  |   |   |
| Username & profile picture  |   | Yes  |   |   |
|   |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |



</details>

<details>
<summary>Log In page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Log In page access  | Page is accessible to logged out users only  | No  |   |   |
|   |   |   |   |   |
| Username input  |   |   |   |   |
| Password input  |   |   |   |   |
| Sign up link  |   |   |   |   |

</details>

<details>
<summary>Sign Up page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Sign Up page access   | Page is accessible to logged out users only  | No  |   |   |
| Username Input  |   |   |   |   |
| Password input  |   |   |   |   |
| Confirm password input |   |   |   |   |

</details>

<details>
<summary>Log Out modal</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

</details>

<details>
<summary>Home page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Jumbotron  | Displayed to logged out users only. <br> Once the user initially reaches the web page or redirects to the home page, a jumbotron should display containing a welcome message, brief description of the app & log in/sign up buttons.   |  No |   |   |
| Log In Button  | Displayed to logged out users only. <br> Once clicked, the user is redirected to a page that will allow them to log in.  | No  |   |   |
| Sign Up button | Displayed to logged out users only. <br> Once clicked, the user is redirected to a page that will allow them to sign up.  | No  |   |   |
| All Tasks table  | Displayed to logged in users only. <br> Once the user logs in or redirects to the home page, a table will be displayed containing statistics on the total amount of tasks that are in progress & the total amount of tasks that have been completed.  | Yes  |   |   |
| High Priority tasks   | Displayed to logged in users only. <br> Once the user logs in or redirects to the home page, their high priority tasks that are in progress will appear in the form of a list. If the user has no high priority tasks in progress, a message will appear to advise them of this.   | Yes |   |   |
|   |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |

</details>

<details>
<summary>All Tasks page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

</details>

<details>
<summary>My Tasks page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

</details>

<details>
<summary>My Assigned Tasks page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

</details>

<details>
<summary>My Assigned Tasks page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

</details>

<details>
<summary>My Profile page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

</details>

<details>
<summary>Task page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

</details>

<details>
<summary>Create Task page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

</details>

<details>
<summary>Edit Task page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

</details>

<details>
<summary>Delete Task modal</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

</details>

<details>
<summary>Edit Comment form</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

</details>

<details>
<summary>Delete Comment modal</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

</details>

<details>
<summary>404 page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

</details>


## Validator Testing

## Bugs

[Back to the top](#testing--tasked)
<br>
[Return to README.md](README.md)