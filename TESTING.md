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
| As a user, I can sign up for an account so that I can access the app's content & features. | Pass  |
| As a user, I can log in so that I can access the app’s content and features.  | Pass  |
| As an authenticated user, I can log out so that I can protect my account. | Pass  |
| As an authenticated user, I can create a task so that I can manage & keep track of my responsibilities. | Pass  |
| As an authenticated user and task owner, I can edit my tasks so that I can keep them up to date or make changes to them if needed. | Pass  |
| As an authenticated user, I can retrieve my tasks so that I can access them to keep them up to date and/or make changes to them. | Pass  |
| As an authenticated user and task owner, I can delete my tasks so that I can remove them from my to-do list if they are no longer needed. | Pass  |
| As an authenticated user, I can retrieve tasks that are assigned to me so that I can work on tasks that require action from me. |  Pass |
| As an authenticated user, I can change the status of tasks that are owned by me or assigned to me so that I can mark them as completed when no further action is needed. | Pass  |
| As a user, I can see an informative error page when faced with a 404 error so that I can understand if the page I'm looking for exists. | Pass  |
| As an authenticated user, I can assign categories to tasks so that they can be organised based on their criteria. | Pass  |
| As an authenticated user, I can assign a priority level to a task so that I can focus on the most urgent tasks first. | Pass  |
| As an authenticated user, I can edit tasks that are assigned to me so that I can keep them up to date and/or make necessary changes to them. | Pass  |
| As an authenticated user, I can comment on tasks so that I can provide updates or additional information in relation to the task. | Pass  |
| As an authenticated user & comment owner, I can edit my comments so that I can update them or correct potential errors. | Pass  |
| As an authenticated user, I can retrieve all comments associated with a task so that I can follow the discussion and view the latest updates in relation to the task. | Pass  |
| As an authenticated user, I can delete my own comments so that I can remove them if they're no longer relevant. | Pass  |
| As a user, I can access a navbar so that I can easily navigate through the app. | Pass  |
| As an authenticated user, I can access user profiles so that I can learn more about the user. | Pass  |
| As an authenticated user, I can edit my own profile so that I can keep it up to date. | Pass  |
| As an authenticated user, I can scroll indefinitely through tasks so that I don't need to manually navigate to the next page when I reach the bottom of the page. | Pass  |
| As an authenticated user, I can search for tasks so that I can easily retrieve the tasks that I want to view or work on. | Pass |
| As a user, I want messages to be displayed when I successfully perform an action so that I can be assured that the action has been completed successfully. | Pass |

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
| Nav drop down | Displayed to logged in users only. <br> The drop down link should display the logged in user's profile picture & username. Once clicked, the My Profile & Log Out navlinks will be displayed.  | Yes  |   |   |
| My Profile nav link  | Displayed to logged in users only. <br> Once clicked, the user is redirected to their profile.  | Yes  |   |   |
| Log Out nav link  | Displayed to logged in users only. <br> Once clicked, a modal will appear that will prompt them to confirm whether or not they want to log out. | Yes  |   |   |
| Nav bar display  | Nav bar should be displayed on all pages  | No  |   |   |



</details>

<details>
<summary>Log In page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Form heading  | Should read "Log In"  | No  | Pass  |   |
| Username input  | Username can be added to the text field   | No  | Pass  |   |
| Password input  | Password can be added to the text field  | No  | Pass  |   |
| Log In button | If the user provides valid credentials, they should be logged in and redirected to the home page. <br> A success message should display at the top of the page that reads "Logged in as `username`" <hr> If the credentials are invalid/do not meet the username/password requirements, the user is prompted to correct any errors before proceeding.  |  No | Pass  |   |
| Sign up link  | A link should display below the log in button that reads "Don't have an account? Sign Up". <br> Once clicked, the user should be redirected to the sign up page.   | No  | Pass  |   |

</details>

<details>
<summary>Sign Up page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Form heading  | Should read "Sign Up"  | No  | Pass  |    |
| Username Input  | Username can be added to the text field  | No  | Pass  |   |
| Password input  | Password can be added to the text field  | No  | Pass  |   |
| Confirm password input | Password can be added to the text field  | No  | Pass  |   |
| Sign Up Now button | If the user provides valid credentials, a user & associated profile is created once the button is clicked. <br> User should be redirected to the log in page. <br> A success message should display at the top of the page that reads "Sign up successful! Please log in to continue." <hr> If the credentials are invalid/do not meet the username/password requirements, the user is prompted to correct any errors before proceeding. | No  | Pass |   |
| Log In link  | A link should display below the sign up button that reads "Already have an account? Log In". <br> Once clicked, the user should be redirected to the log in page.  | No  | Pass  |   |

</details>

<details>
<summary>Log Out modal</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Modal header  | Should read "Log Out"  | Yes  | Pass  |   |
| Modal message  | Should read "Are you sure you want to log out?"  | Yes  | Pass  |   |
| Confirm log out button  | Once clicked, the user is logged out and redirected to the home page. <br> A success message is displayed at the top of the page that reads "Successfully logged out." | Yes  | Pass  |   |
| Cancel button  | Once clicked, the modal is hidden and the user is not redirected to a different page.  | Yes  | Pass |   |
</details>

<details>
<summary>Profile page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Profile picture  | The profile owner's profile picture is displayed on the profile.  | Yes  |   |   |
| Username  | The profile owner's username is displayed on the profile.  | Yes  |   |   |
| Bio  | The profile owner's bio is displayed on the profile. <br> If the profile owner has not added a bio yet, the bio should read "`username` has not provided a bio yet."  | Yes  |   |   |
| Tasks created  | The total number of tasks created by the profile owner should be displayed.  | Yes  |   |   |
| Tasks assigned  | The total number of tasks assigned to the profile owner that are in progress should be displayed.  | Yes  |   |   |
| Tasks completed  | The total number of tasks assigned to the profile owner that have been completed should be displayed.  |  Yes |   |   |
| Assigned tasks heading | Heading should read "`username`'s assigned tasks"  | Yes |   |   |
| In Progress tab  | A list of the profile owner's tasks that are in progress should display on this tab. <br> If the profile owner does not have any assigned tasks in progress, "`username` has no ongoing tasks assigned." should display on the tab.  | Yes  |   |   |
| Completed tab  | A list of the profile owner's tasks that have been completed should display on this tab. <br> If the profile owner has not completed any assigned tasks, "`username` has not completed any assigned tasks yet." should display on the tab.  | Yes  |   |   |
| Edit Profile dropdown  | Displayed to profile owners only. <br> Once clicked, a dropdown menu should appear containing Edit Profile, Change Username & Change Password links. <br> Once the Edit Profile link is clicked, the user is redirected to the edit profile page. <br> Once the Change Username link is clicked, the user is redirected to the change username page. <br> Once the Change Password link is clicked, the user is redirected to the change password page.    | Yes  |   |   |


</details>

<details>
<summary>Edit Profile page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| New Profile Picture input  | User's current profile picture is displayed. <br> Once the "Choose file" button is clicked, the user can upload a new profile picture from their device. <br> Once a new profile picture is uploaded, it should display within the form.  | Yes  |   |   |
| Bio Input  | User's current bio is displayed in the text field, if they have one. <br> User can add a bio to the text field or edit the existing bio.  | Yes  |   |   |
| Save Changes button | Once clicked, the changes to the profile are saved and the user is redirected to the profile page. <br> A success message should display at the top of the page that reads "Changes saved successfully." <hr> If the user provides invalid data, they are prompted to correct this before changes are saved. | Yes  |   |   |
| Cancel button  | Once clicked, the user is redirected back to the profile page.  |  Yes |   |   |


</details>

<details>
<summary>Edit Username page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Username input  | User can add a new username to the text field  | Yes | Pass  |   |
| Save Changes button | Once clicked, the user's username is changed. <br> A success message will display at the top of the page that reads "Username changed successfully." <br> The user is redirected to the profile page. <hr> If they input an invalid username or one that has already been taken, they will be prompted to correct this before changes can be saved. | Yes  | Pass  |   |
| Cancel button  | Once clicked, the user is redirected back to the profile page.  | Yes  | Pass  |   |

</details>

<details>
<summary>Edit Password page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Password input  | User can enter a new password in the text field  | Yes  | Pass  |   |
| Confirm password input  | User can enter their new password again in the text field  | Yes  | Pass  |   |   |
| Save Changes button  | Once clicked, the password will be changed & the user will be redirect to the profile page. <br> A success message will display at the top of the page that reads "Password changed successfully." <hr> If the user inputs an invalid password, they will be prompted to correct this before changes can be saved. | Yes  | Pass  |   |
| Cancel button  | Once clicked, the user is redirected back to the profile page.  |  Yes | Pass  |   |

</details>

<details>
<summary>Home page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Jumbotron  | Displayed to logged out users only. <br> Once the user initially reaches the web page or redirects to the home page, a jumbotron should display containing a welcome message, brief description of the app & log in/sign up buttons.   |  No | Pass  |   |
| Log In Button  | Displayed to logged out users only. <br> Once clicked, the user is redirected to a page that will allow them to log in.  | No  | Pass  |   |
| Sign Up button | Displayed to logged out users only. <br> Once clicked, the user is redirected to a page that will allow them to sign up.  | No  | Pass  |   |
| All Tasks table  | Displayed to logged in users only. <br> Once the user logs in or redirects to the home page, a table will be displayed containing statistics on the total amount of tasks that are in progress & the total amount of tasks that have been completed.  | Yes  | Pass  |   |
| High Priority tasks   | Displayed to logged in users only. <br> Once the user logs in or redirects to the home page, their high priority tasks that are in progress will appear in the form of a list. If the user has no high priority tasks in progress, a message will appear to advise them of this.   | Yes | Pass  |   |



</details>

<details>
<summary>All Tasks page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Search bar  | Displayed at the top of the page. <br> Placeholder text reads "Search tasks by title or by category". <br> If the user searches for a keyword that matches a category or task title, the associated tasks should display on the page. <br> If there are no tasks associated with the keyword search, a "No results found. Adjust the search keyword or create a task." message should display.  | Yes | Pass  |   |
| Tasks list  | List of tasks displayed. <br> The list of tasks should contain all tasks that are currently in progress. <br> If there are no tasks currently in progress, a "No results found. Adjust the search keyword or create a task." message should display.  | Yes | Pass  |   |


</details>

<details>
<summary>My Tasks page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Search bar  | Displayed at the top of the page. <br> Placeholder text reads "Search tasks by title or by category". <br> If the user searches for a keyword that matches a category or task title, the associated tasks should display on the page. <br> If there are no tasks associated with the keyword search, a "No results found. Adjust the search keyword or create a task." message should display.  | Yes | Pass  |   |
| Tasks list  | List of tasks displayed. <br> The list of tasks should contain all tasks created by the logged in user that are currently in progress. <br> If there are no created tasks currently in progress, a "No results found. Adjust the search keyword or create a task." message should display.  |  Yes | Pass  |   |
</details>

<details>
<summary>My Assigned Tasks page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Search bar  | Displayed at the top of the page. <br> Placeholder text reads "Search tasks by title or by category". <br> If the user searches for a keyword that matches a category or task title, the associated tasks should display on the page. <br> If there are no tasks associated with the keyword search, a "No results found. Time for coffee! Adjust the keyword search if you are looking for something specific." message should display.  | Yes | Pass  |   |
| Tasks list  | List of tasks displayed. <br> The list of tasks should contain all tasks assigned to the logged in user that are currently in progress. <br> If there are assigned tasks currently in progress, a "No results found. Time for coffee! Adjust the keyword search if you are looking for something specific." message should display.  |  Yes | Pass  |   |

</details>

<details>
<summary>Task</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Task title  | The task title is displayed. <br> The task title is hyperlinked. <br> Once clicked, the user is redirected to the associated task page.  | Yes  | Pass  |   |
| Task category  | The task category is displayed.  | Yes  | Pass  |   |
| Task priority level  | The task priority level is displayed.  |  Yes | Pass  |   |
| Task status  | The task status is displayed. <br> By default, the task status is set to "In Progress".  | Yes  | Pass  |   |
| Task details  | The task details are displayed.   | Yes  | Pass  |   |
| Task assignee  | The task assignee is displayed. <br> The task assignee's username is hyperlinked. <br> Once clicked, the user is redirected to the task assignee's profile.  | Yes  | Pass  |   |
| Change task status button  | Displayed to task owners & task assignees only. <br> While the task is in progress, the button reads "Mark as Completed". <br> Once clicked, the button text changes to "Reopen" and the task status is set to "Completed". | Yes  | Pass  |   |
| Created on date  | The created on date is displayed.  |  Yes | Pass  |   |
| Task owner  | The task owner is displayed next to the created on date. <br> Task owner's username is hyperlinked. <br> Once clicked, the user is redirected to the task owner's profile. |  Yes | Pass  |   |
| Edit task dropdown  | Displayed to task owners and task assignees only. <br> Once clicked, a dropdown menu should appear containing an edit icon and a delete icon. <br> Once the edit icon is clicked, the user is redirected to the edit task page. <br> Once the delete icon is clicked, the Delete Task modal should display.  | Yes  | Pass  |   |
| Total comment count | The total number of comments should display at the bottom of the task. <br> The total number of comments is hyperlinked. <br> Once clicked, the user is redirected to the associated task page.  | Yes  | Pass  |   |
| Last updated on date  | The last updated on date is displayed.  |  Yes | Pass  |   |


</details>

<details>
<summary>Task Page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Task  | All of the task details from the task component are displayed at the top of the page.  | Yes  |  Pass  |   |
| Create comment form  | The create comment form is displayed below the task  | Yes  | Pass  |   |
| Comments list  | The comment list is displayed below the create comment form. <br> If there are no comments yet, "No comments yet. Be the first to leave a comment!" is displayed below the comment form".  | Yes  | Pass  |   |

</details>

<details>
<summary>Create Task page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Form heading  | Should read "Create Task" | Yes  |   |   |
| Title input  | User can add a title to the text field  |  Yes |   |   |
| Task Detail input  | User can add task details to the text field  | Yes  |   |   |
| Category input  | User can select a category from the dropdown menu  | Yes  |   |   |
| Priority level input  | User can select a priority level from the dropdown menu  | Yes  |   |   |
| Assignee input  | User can select an assignee from the dropdown menu  | Yes  |   |   |
| Disclaimer  | A disclaimer that reads "Please note that your task will be visible to other members of the Tasked community." is displayed above the form buttons  | Yes  |   |   |
| Create Task button  | Once clicked, the task is created & the user is redirected to the new task's page. <br> A success message that reads "Task created successfully." is displayed at the top of the screen. <hr> If the user provides invalid data in the form, they are prompted to correct this before proceeding.  | Yes |   |   |
| Cancel button | Once clicked, the user is redirected to the previous page  | Yes  |   |   |


</details>

<details>
<summary>Edit Task page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Form heading  | Should read "Edit Task" | Yes  |   |   |
| Title input  | Prepopulated with the current title. <br> User can edit the current task title.  |  Yes |   |   |
| Task Detail input  | Prepopulated with the current task details. <br> User can edit the current task details. | Yes  |   |   |
| Category input  | Prepopulated with the current task category. <br> User can select a different category.  | Yes  |   |   |
| Priority level input  | Prepopulated with the current task priority level. <br> User can select a different priority level.   | Yes  |   |   |
| Assignee input  | Prepopulated with the current task assignee. <br> User can select a different assignee.   | Yes  |   |   |
| Save changes button  | Once clicked, the changes are saved & the user is redirected to the task's page. <br> A success message that reads "Your changes have been saved." is displayed at the top of the screen. <hr> If the user provides invalid data in the form, they are prompted to correct this before proceeding.  | Yes |   |   |
| Cancel button | Once clicked, the user is redirected to the previous page  | Yes  |   |   |
</details>

<details>
<summary>Delete Task modal</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Modal header  | Should read "Delete Task"  | Yes  |   |   |
| Modal message  | Should read "Are you sure you want to delete this task? This action cannot be undone.  | Yes  |   |   |
| Confirm task delete button  | Once clicked, modal should be hidden, the task should be deleted & user should be redirected to the previous page. <br> A success message should appear at the top of the page that reads "Task deleted successfully." | Yes |   |   |
| Cancel button  | Once clicked, the modal should be hidden, task should not be deleted.  |  Yes |   |   |

</details>

<details>
<summary>Comment</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Profile Picture  | The user's profile picture is displayed to the left of the comment.  | Yes  |   |   |
| Username  | The comment owner's username is displayed at the top of the comment.  | Yes  |   |   |
| Created on date  | The created on date is displayed next to the comment owner's username.  | Yes  |   |   |
| Updated on date  | The updated on date is displayed at the bottom of the comment.  | Yes  |   |   |
| Comment detail  | The comment owner's comment is displayed below their username & created on date.  | Yes  |   |   |
| Edit Comment Dropdown  | Displayed to comment owners only. <br> Once clicked, a dropdown menu should appear containing an edit icon and a delete icon. <br> Once the edit icon is clicked, a form should display on the comment that will allow the user to edit it. <br> Once the delete icon is clicked, the Delete Comment modal should display. |  Yes |   |   |

</details>

<details>
<summary>Edit Comment form</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Comment detail input  | Prepopulated with the current comment. <br> User should be able to edit the current comment in the text field.  | Yes  |   |   |
| Save Changes button  | Once clicked, the changes should be saved. <br> Form will be hidden and new changes will be visible on the comment. <br> A success message will display at the top of the page that reads "Your changes have been saved.". <br> Updated on date is updated to "now". <hr> If the user inputs invalid data, they are prompted to correct this before changes can be saved.   |  Yes |   |   |
| Cancel button  | Once clicked, the form will no longer be displayed and no changes will be made to the comment.  | Yes  |   |   |


</details>

<details>
<summary>Delete Comment modal</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| Modal header  | Should read "Delete Comment"  | Yes  |   |   |
| Modal message  | Should read "Are you sure you want to delete this comment? This action cannot be undone."  | Yes  |   |   |
| Confirm task delete button  | Once clicked, the comment should be deleted & should no longer appear on the task page. <br> The modal should be hidden & the user should stay on the same page. <br> A success message should appear at the top of the page that reads "Your comment has been deleted."  |  Yes |   |   |
| Cancel button  | Once clicked, the modal should be hidden, comment should not be deleted.  | Yes  |   |   |


</details>

<details>
<summary>404 page</summary>

| Feature  | Expected Behaviour  | User Authentication Required? |  Status  |  Notes  |   
|---|---|---|---|---|
| 404 page  | If the user attempts to access an invalid URL, they are directed to the NotFound page. An 404 image should be displayed along with a message that reads "Sorry, the page you're looking for could not be found."  | No  | Pass  |   |

</details>


## Validator Testing

## Bugs

[Back to the top](#testing--tasked)
<br>
[Return to README.md](README.md)