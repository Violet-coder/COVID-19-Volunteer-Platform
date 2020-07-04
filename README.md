# team20 - COVID-19 Volunteer Platform

## Team Member
zhan8118 - Ziyue Zhang  
zhan3009 - Yifan Zhang  
panganqi - Anqi Pang  

## Purpose 
In order to fight against COVID-19 pandemic, we are devoted to providing a platform for connecting passionate people to contribute together. This web application, COVID-19 Volunteer Platform, is for volunteers who are looking for social volunteering opportunities to help people affected by COVID-19 and organizations that are looking for responsible volunteers. Our web application helps to transfer information between volunteers and organizations. People who want to serve the society as volunteers during this difficult time could browse our website to learn about current volunteering opportunities. Organizations that are hunting for volunteers could post their recruitment information. Our website supports to display information from responsible organizations and prospective volunteers in order to unite people more efficiently in this difficult time.

## How to Use
### Download&Install
Please download the ZIP and unzip it.
Open the folder "team20-master" in terminal and run **npm install**.
Run the app using the command **npm start**.
### Login:
#### Volunteer: 
email: user@user.com  
password: user  

#### Organization:
email: user2@user.com  
password: user2  

#### Administrator: 
email: admin@admin.com  
password: admin  

### For Volunteers:
#### Recommended Opportunities:
After a volunteer user login, he will be directed to his userpage. He can see the opportunities recommended by the platfform based on the profile of him. If he wants to see all the opportunities, he can click on the SEE ALL button below the recommended opportunities and see all the opportunities on the platform. So far, the recommend functionality is just implemented by hard coding and it will be implemented in the later after back end is established.

#### Apply For New Jobs:
A user can see the details of a post after clicking on the post and there are two buttons which are ORGANIZATION PROFILE and APPLY NOW in the bottom of the detail page. If he click on the ORGANIZATION PROFILE button, he can see all the information of the organization. For a logged in volunteer user, he can apply a new job by clicking on the APPLY NOW button. If a user applys for a new job, he will be directed to his My Application Page which diplays all the applications he has and the new job will be added in the list. If that job has beed applied by that user, the apply button will be grey and show applied status which can not be clicked by that user.

#### Personal Applications
A volunteer user can see the applications they already do when they click on the My Application button on the Navbar and they will be directed to My Application Page which diplays all the applications he has. A application will have three status, accepted(he has been hired by the organization), rejected(he has been rejected by the organization) and pending(application is being processed).

#### Manage Profile:
If Volunteer users click on the My Profile button, they will see their profile page which is fixed and can also be viewed by organization which volunteer users have applied and administrator. If they want to update the profile, they could click on the Update Profile button on the Navbar, then they can edit everyting in their profile except their name and email. 

#### Search By keyword
A volunteer user can see a search bar in their userpage. They can enter the keyword of the job to search for related jobs in our platform. After the user has entered the key word and click on the GO button, the search result page will display the related results.The functionality of the search bar is just implemented by search for the post contains the string which the user has entered. The search functionality will be more complex and complete after back end is established.
Notes: Since the key word is obtained from user and this variable will be passed from userpage to the result page, we can not refresh the result page. An error will occur if you refresh that page because of that property. That issue will be handled nicely after back end is established.

### For Organizations:
#### Manage Profile:
Organization users can edit their introduction and website of the profile in the *Profile* page, which can be viewed by all volunteers and administrator.
#### Post New Jobs:
In the *Post a New Job* page, user can submit a new job information form to the administrator. The job will be posted after administrator's review. The administrator will ensure the reliability of the job before approving it, especially during the pandemic. 
#### Manage Posts:
Users can always edit and delete their own posts in the *Profile* page. Edited posts will be reviewed by administrator again  and will be invisible to volunteers before posted.
#### Fit Degree:
The fit degree of applicants is calculated based on the job location, related area, and requirements that both applicants and organizations provide and is only for reference. It will be shown as A/B/C with each applicant's information.  
A: The applicant is highly compatible with your position  
B: The fit between the applicant and your position is average  
C: The applicant does not fit your position well
#### Hire Volunteers:
Volunteers who applied to your jobs are shown in the *All Applicants* page and under every post respectively as well. Organizations can check their detailed profiles and accept or reject each applicant.
### For Administrator:
#### Login Credentials: 
Email: admin@admin.com	
Password: admin

After login as admin, the user will be redirected to the Administration Entry page and there are buttons: Organizations, Volunteers and Posts. You can enter the corresponding management page by clicking each button. 

At the navigation bar, there is a Home button which can redirect you back to this Administration Entry Page. The Log Out button will log you out and direct to website home page.  

#### Volunteers Management: 
Click the VOLUNTEERS button at the administration page and you will enter the volunteers management page. There is a list of volunteer users shown below. 

##### Manage Volunteer Profile:
Clicking the View/Edit button at each row allows the admin user to view or modify a volunteer’s profile. Please note that admin can only modify part of the volunteer’s profile information, including location, links, and description. After editing, please click the Update Profile button at the bottom of the page, a success message will pop up and the user profile is updated.

##### Delete Volunteer User:
If you click the Delete button at the last column. A confirming window will  pop up and the selected user will be deleted if you choose “Yes”.
Organizations Management:
Please click the Home button at the navigation bar to go back to the Administration page. Click the second button “ORGANIZATIONS”. There is a list of organizations. 

#### Organizations Management:
Please click the Home button at the navigation bar to go back to the Administration page. Click the second button “ORGANIZATIONS”. There is a list of organizations. 

##### View/Edit Organization Profile: 
Similar to volunteer management, the admin can also edit the organization profile information except email.

##### Delete Organization User: 
You can delete an organization user by clicking the Delete button.

#### Posts Management:
Go back to the Administration Entry page and click the third entry “POSTS”. You will enter the post management page which displays a list of posts. For each post, there are three buttons “Approved/Approve”, View and Delete.

##### Approve Post: 
The “Approved/Approve” button shows the post status. When its color is blue, it displays “Approved”; when it’s red, the post status is under review. You can click the red “Approve” button to make the post become approved to be accessible to the public.

##### Create New Post: 
There is a button at the right top of the navigation bar which redirects you to the publishing post page. After filling in the post form and submit, the new post will appear at the post list.

##### View/Delete Post: 
The View button redirects to the post detail page where admin can review the post detail to decide whether to approve it. Otherwise admin can delete unapproved posts.



