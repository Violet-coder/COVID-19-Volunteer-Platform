# team20 - COVID-19 Volunteer Platform

## Team Member
zhan8118 - Ziyue Zhang  
zhan3009 - Yifan Zhang  
panganqi - Anqi Pang  

## Purpose 
In order to fight against COVID-19 pandemic, we are devoted to providing a platform for connecting passionate people to contribute together. This web application, COVID-19 Volunteer Platform, is for volunteers who are looking for social volunteering opportunities to help people affected by COVID-19 and organizations that are looking for responsible volunteers. Our web application helps to transfer information between volunteers and organizations. People who want to serve the society as volunteers during this difficult time could browse our website to learn about current volunteering opportunities. Organizations that are hunting for volunteers could post their recruitment information. Our website supports to display information from responsible organizations and prospective volunteers in order to unite people more efficiently in this difficult time.

## How to Use
### Deployed APP Link
Heroku App: https://frozen-journey-02316.herokuapp.com
MongoDB Cluster: mongodb+srv://violet:mymongo@cluster0.pdoea.mongodb.net/test
### Note About Session
Please note that the session duration is 15 minutes. You will redirected to the login page after the seesion expires.

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
After a volunteer user login, he will be directed to his userpage. He can see the opportunities recommended by the platfform based on the profile of him. If he wants to see all the opportunities, he can click on the SEE ALL button below the recommended opportunities and see all the opportunities on the platform. 

#### Apply For New Jobs:
A user can see the details of a post after clicking on the post and there are two buttons which are ORGANIZATION PROFILE and APPLY NOW in the bottom of the detail page. If he click on the ORGANIZATION PROFILE button, he can see all the information of the organization. For a logged in volunteer user, he can apply a new job by clicking on the APPLY NOW button. If a user applys for a new job, he will be directed to his My Application Page which diplays all the applications he has and the new job will be added in the list. If that job has beed applied by that user, the apply button will be grey and show applied status which can not be clicked by that user.

#### Personal Applications
A volunteer user can see the applications they already do when they click on the My Application button on the Navbar and they will be directed to My Application Page which diplays all the applications he has. A application will have three status, accepted(he has been hired by the organization), rejected(he has been rejected by the organization) and pending(application is being processed).

#### Manage Profile:
If Volunteer users click on the My Profile button, they will see their profile page which is fixed and can also be viewed by organization which volunteer users have applied and administrator. If they want to update the profile, they could click on the Update Profile button on the Navbar, then they can edit everyting in their profile except their name and email. 

#### Search By keyword
A volunteer user can see a search bar in their userpage. They can enter the keyword of the job to search for related jobs in our platform. After the user has entered the key word and click on the GO button, the search result page will display the related results.The functionality of the search bar is just implemented by search for the post contains the string which the user has entered. The search functionality will be more complex and complete after back end is established.


### For Organizations:
#### Manage Profile:
Organization users can edit their introduction and website of the profile in the *Profile* page, which can be viewed by all volunteers and administrator.
#### Post New Jobs:
In the *Post a New Job* page, user can submit a new job information form to the administrator. The job will be posted after administrator's review. The administrator will ensure the reliability of the job before approving it, especially during the pandemic. 
#### Manage Posts:
Users can always edit and delete their own posts in the *Profile* page. To edit a post, click *DETAIL* to see the details of your post, and click *EDIT* below the post information to edit those details. Edited posts will be reviewed by administrator again and will be invisible to volunteers before approval. The status of your posts will be shown as *Approved* or *Under review*.
#### Fit Degree:
The fit degree of applicants is calculated based on the job location, related area, and requirements that both applicants and organizations provide and is only for reference. It will be shown as A/B/C with each applicant's information.  
A: The applicant is highly compatible with your position  
B: The fit between the applicant and your position is average  
C: The applicant does not fit your position well
#### Hire Volunteers:
Volunteers who applied to user's jobs are shown in the *All Applicants* page and under every post's detail page respectively as well. In the *Profile* page, users can also click *APPLICANTS* button  to toggle them on/off. Users can check applicants' detailed profiles and accept or reject each applicant. Decisions are permanent. When an applicant is either *Rejected* or *Accepted*, which can be seen with each applicant's information, it can't be changed afterwards in the app.
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
If you click the Delete button at the last column. A confirming window will  pop up and the selected user will be deleted if you choose “Yes”. Once the volunteer is deleted, the volunteer's account and all the applications that he/she has made will be removed.The post he/she has applied will remove the volunteer's data. 
 

#### Organizations Management:
Please click the Home button at the navigation bar to go back to the Administration page. Click the second button “ORGANIZATIONS”. There is a list of organizations. 

##### View/Edit Organization Profile: 
Similar to volunteer management, the admin can also edit the organization profile information except the email and organization name.

##### Delete Organization User: 
You can delete an organization user by clicking the Delete button. It will delete the organization's account, its published posts, and all the applications that belongs to the posts.

#### Posts Management:
Go back to the Administration Entry page and click the third entry “POSTS”. You will enter the post management page which displays a list of posts. For each post, there are three buttons “Approved/Approve”, View and Delete.

##### Approve Post: 
The “Approved/Approve” button shows the post status. When its color is blue, it displays “Approved”; when it’s red, the post status is under review. You can click the red “Approve” button to make the post become approved to be accessible to the public.

##### View/Delete Post: 
The View button redirects to the post detail page where admin can review the post detail to decide whether to approve it. Otherwise admin can delete unapproved posts. Deleting a post will remove all the post information and the applications that belongs to the post.


## Overview of the routes 
The following is the routes in the server.js. For each route, there is a description of it method and the URL used for the deployed app. You could use the provided URL to test the routes, since we have included the params needed for the dynammic routes.

Notes: For the route testing, we use the <strong>Postman Interceptor</strong> to capture the cookies, in case some routes need authentication. 

### Authentication Resources Routes
#### A POST route for registration
POST: "/users/register" <br />
URL: https://frozen-journey-02316.herokuapp.com/users/register
What they are used: to register a new user as volunteer or organization <br/>
What data they expect to be sent: a Volunteer or Organization Request including registration information.<br/>
Please send the request as follows.

To register a volunteer:<br>
```json
{
    "firstName":"Anqi",
    "lastName": "Pang",
    "email":"anqitest@user.com",
    "password":"12345",
    "type":"volunteer"
}
```
To register an organization:<br>
```json
{
    "name":"test organization",
    "email":"anqitest2@user.com",
    "password":"12345",
    "type":"organization"
}
```

What they would return: a docment saved in database <br/>
```json
{
    "type": "volunteer",
    "_id": "5f3869ad6f93f10017f7b4a4",
    "firstName": "Anqi",
    "lastName": "Pang",
    "email": "anqipang@user.com",
    "password": "$2a$10$iY5FlNPiJMnzN57qPiBMju1mI2k3KGvUn0xjlaLJx42NZ008u8Lam",
    "__v": 0
}
```

#### A POST route for login
POST: "/users/login" <br />
URL: https://frozen-journey-02316.herokuapp.com/users/login <br>
What they are used: to register a new user as volunteer or organization <br/>
What data they expect to be sent: a Volunteer or Organization Request including email and password.<br/>
Please send the request as follows.
```json
{
    "email":"user@user.com",
    "password":"user"
}
```

What they would return: if login successfully, it returns a json with current user id and type; otherwise it will return a message. <br/>
Login success:
{
    "currentUser": "user@user.com",
    "currentUserId": "5f38420164f1290017d32285",
    "type": "volunteer"
}
<br>
Login failure: {
    "message": "Email or password is not correct."
}



#### A GET route for logout
GET: "/users/logout" <br />
URL: https://frozen-journey-02316.herokuapp.com/users/logout <br>
What they are used: to logout the current user <br/>
What data they expect to be sent: a get request<br/>
What they would return: if logout fails, it will returns a response with status 500, otherwise it returns a empty response.

#### A GET route to check session
GET: "/users/check-session" <br />
URL: https://frozen-journey-02316.herokuapp.com/users/check-session <br>
What they are used: to register a new user as volunteer or organization <br/>
What data they expect to be sent: a get request<br/>
What they would return: send a json response including the current user email, id and type.
```json
{
    "currentUser": null,
    "currentUserId": null,
    "type": null
}
```


### Volunteer resource routes
#### a GET for getting vol profile from a particulat volunteer
Get: '/volunteer/profile/:id'<br/>
Url: https://frozen-journey-02316.herokuapp.com/volunteer/profile/5f38420164f1290017d32285 <br/>
What they are used: to get volunteer profile from a particulat volunteer <br/>
What data they expect to be sent: nothing <br/>
What they would return: a Volunteer Object <br/>
``` json
{
    "type": "volunteer",
    "_id": "5f38420164f1290017d32285",
    "firstName": "Ziyue",
    "lastName": "Zhang",
    "email": "user@user.com",
    "password": "$2a$10$etqAkLL06ufWQdKzQ3XBkOQxaRF4wGJkqAKRJXV/fi9K6zba6FZjS",
    "__v": 0,
    "availability": {
        "option1": true,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false,
        "_id": "5f38424564f1290017d32287"
    },
    "desc": "I am a student.",
    "links": "user@user.com",
    "location": "",
    "skills": {
        "analytics": false,
        "biology": false,
        "biotech": false,
        "community": true,
        "content": false,
        "data": false,
        "finance": false,
        "helpdesk": false,
        "manufacturing": false,
        "marketing": false,
        "mechanics": false,
        "IT": true,
        "anything": false,
        "_id": "5f38424564f1290017d32286"
    }
}
```

#### a POST for updating profile info to a particular volunteer
Post: "/volunteer/update/:id" <br/>
Url: https://frozen-journey-02316.herokuapp.com/volunteer/update/5f38420164f1290017d32285 <br/>
What they are used: to update profile for a particulat volunteer <br/>
What data they expect to be sent: <br/>
``` json
{
    "location": "Toronto",
    "links": "user@user.com",
    "desc": "I am a student.",
    "skills": {
        "analytics": false,
        "biology": false,
        "biotech": false,
        "community": true,
        "content": false,
        "data": false,
        "finance": false,
        "helpdesk": false,
        "manufacturing": false,
        "marketing": false,
        "mechanics": false,
        "IT": true,
        "anything": false
    },
    "availability": {
        "option1": true,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false   
    }
}
```
What they would return:a Volunteer Object whoese info has already updated <br/>
``` json
{
    "type": "volunteer",
    "_id": "5f38420164f1290017d32285",
    "firstName": "Ziyue",
    "lastName": "Zhang",
    "email": "user@user.com",
    "password": "$2a$10$etqAkLL06ufWQdKzQ3XBkOQxaRF4wGJkqAKRJXV/fi9K6zba6FZjS",
    "__v": 0,
    "availability": {
        "option1": true,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false,
        "_id": "5f38650b6f93f10017f7b489"
    },
    "desc": "I am a student.",
    "links": "user@user.com",
    "location": "Toronto",
    "skills": {
        "analytics": false,
        "biology": false,
        "biotech": false,
        "community": true,
        "content": false,
        "data": false,
        "finance": false,
        "helpdesk": false,
        "manufacturing": false,
        "marketing": false,
        "mechanics": false,
        "IT": true,
        "anything": false,
        "_id": "5f38650b6f93f10017f7b488"
    }
}
``` 

#### a POST request for adding an application to a particular volunteer
Post: "/volunteer/application/:id" <br/>
Url: https://frozen-journey-02316.herokuapp.com/volunteer/application/5f38420164f1290017d32285<br/>
What they are used: to add application in the application table and push that application objectid to the applications[] array of the post<br/>
What data they expect to be sent:<br/>
``` json
{
    "applicant_id": "5f38420164f1290017d32285",
    "applicant_name": "Ziyue Zhang",
    "applicant_status": "pending", 
    "post_id": "5f38431e64f1290017d322a7",
    "post_name":"Clothing Centre Volunteer",
    "applicant_rank":"D"          
}
```
What they would return: it will return the post which we have add appliation to<br/>
``` json
{
    "requirements": [
        "driver's license"
    ],
    "status": "Approved",
    "applications": [
        "5f3844d564f1290017d322ca"
    ],
    "_id": "5f38431e64f1290017d322a7",
    "name": "Clothing Centre Volunteer",
    "description": "Help sort clothing, and stock items on the shelves. Make new friends and have lots of fun!",
    "title": "content",
    "location": "Toronto",
    "date": "2020-08-15T21:40:23.891Z",
    "org_id": "5f3842a464f1290017d322a6",
    "org_name": "Team20",
    "__v": 2
}
```

#### a GET request for getting application list of a particular volunteer
Get: "/volunteer/applicatoinlist/:id" <br/>
Url: https://frozen-journey-02316.herokuapp.com/volunteer/applicatoinlist/5f38420164f1290017d32285 <br/>
What they are used: to get the application list of a particular volunteer <br/>
What data they expect to be sent: nothing <br/>
What they would return: An array with applications inside<br/>
``` json
[
    {
        "applicant_status": "accepted",
        "_id": "5f3844d564f1290017d322ca",
        "applicant_id": "5f38420164f1290017d32285",
        "applicant_name": "Ziyue Zhang",
        "post_id": "5f38431e64f1290017d322a7",
        "post_name": "Clothing Centre Volunteer",
        "applicant_rank": "D",
        "__v": 0
    }
]
```
 
#### a GET request for getting a particular application of a particular volunteer
Get: "/volunteer/getapplication/:id/:post_id"<br/>
Url: https://frozen-journey-02316.herokuapp.com/volunteer/getapplication/5f38420164f1290017d32285/5f38431e64f1290017d322a7<br/>
What they are used: to find whether this user has applied  a particular post<br/>
What data they expect to be sent: nothing<br/>
What they would return: if a user has applied it will return with an array with an Application object inside else it will be an empty array<br/>
``` json
[
    {
        "applicant_status": "accepted",
        "_id": "5f3844d564f1290017d322ca",
        "applicant_id": "5f38420164f1290017d32285",
        "applicant_name": "Ziyue Zhang",
        "post_id": "5f38431e64f1290017d322a7",
        "post_name": "Clothing Centre Volunteer",
        "applicant_rank": "D",
        "__v": 0
    }
]
```

### Post resource routes
#### a Get request to get all the posts
Get: "/posts"<br/>
Url: https://frozen-journey-02316.herokuapp.com/posts <br/>
What they are used: to get all the posts in the databse<br/>
What data they expect to be sent: nothing<br/>
What they would return: an array with all the posts in the database<br/>
``` json
[
    {
        "requirements": [
            "driver's license"
        ],
        "status": "Approved",
        "applications": [
            "5f3844d564f1290017d322ca"
        ],
        "_id": "5f38431e64f1290017d322a7",
        "name": "Clothing Centre Volunteer",
        "description": "Help sort clothing, and stock items on the shelves. Make new friends and have lots of fun!",
        "title": "content",
        "location": "Toronto",
        "date": "2020-08-15T21:40:23.891Z",
        "org_id": "5f3842a464f1290017d322a6",
        "org_name": "Team20",
        "__v": 2
    },
    {
        "requirements": [
            "teaching experiance"
        ],
        "status": "Approved",
        "applications": [],
        "_id": "5f3843ac64f1290017d322a8",
        "name": "Project Mentor for Students",
        "description": "Underemployment is a growing concern for students across the globe. Entry-level jobs often require 3-5 years of experience for entry-level positions and the gap between the skills students have and what employers require continues to grow. You can help this problem by working with students on short-term projects and challenges that are embedded directly into their classrooms. They get to learn from supporting you on the problem or project from your organization is facing and apply their theoretical knowledge to a practical real-world example.",
        "title": "community",
        "location": "remote",
        "date": "2020-08-15T20:25:05.903Z",
        "org_id": "5f3842a464f1290017d322a6",
        "org_name": "Team20",
        "__v": 0
    },
    {
        "requirements": [
            "health degree"
        ],
        "status": "Approved",
        "applications": [],
        "_id": "5f38550b6f93f10017f7b463",
        "name": "Food and Essential items Packaging and Delivery",
        "description": "We are looking for volunteers to help package and deliver food and essential items to vulnerable people all over GTA. Please contact us if you are interested in helping out.",
        "title": "manufacturing",
        "location": "Toronto",
        "date": "2020-08-15T21:40:18.702Z",
        "org_id": "5f3853ca6f93f10017f7b45c",
        "org_name": "HumanWellBeingFirst",
        "__v": 0
    },
    {
        "requirements": [
            "self-motivated"
        ],
        "status": "Approved",
        "applications": [],
        "_id": "5f3856bd6f93f10017f7b466",
        "name": "Letter writer / Drawer",
        "description": "All you need to do is send in s short letter or even a drawing!",
        "title": "community",
        "location": "Ottawa",
        "date": "2020-08-15T21:42:35.776Z",
        "org_id": "5f38557f6f93f10017f7b464",
        "org_name": "Letters and Smiles",
        "__v": 0
    },
    {
        "requirements": [
            "teaching experiance"
        ],
        "status": "Under review",
        "applications": [],
        "_id": "5f3857356f93f10017f7b467",
        "name": "Peer Supporter",
        "description": "Expected applicants: University students who have a warm heart to help me.",
        "title": "content",
        "location": "Toronto",
        "date": "2020-08-15T00:00:00.000Z",
        "org_id": "5f3842a464f1290017d322a6",
        "org_name": "Team20",
        "__v": 0
    }
]
```

#### a Get request to get a particular post 
Get: "/post/:id"<br/>
Url: https://frozen-journey-02316.herokuapp.com/post/5f38431e64f1290017d322a7<br/>
What they are used: to get the information of one particular post<br/>
What data they expect to be sent: nothing<br/>
What they would return: an Post object <br/>
``` json
{
    "requirements": [
        "driver's license"
    ],
    "status": "Approved",
    "applications": [
        "5f3844d564f1290017d322ca"
    ],
    "_id": "5f38431e64f1290017d322a7",
    "name": "Clothing Centre Volunteer",
    "description": "Help sort clothing, and stock items on the shelves. Make new friends and have lots of fun!",
    "title": "content",
    "location": "Toronto",
    "date": "2020-08-15T21:40:23.891Z",
    "org_id": "5f3842a464f1290017d322a6",
    "org_name": "Team20",
    "__v": 2
}
```

#### a Post request to get the posts as search result
Post: "/search"<br/>
Url: https://frozen-journey-02316.herokuapp.com/search<br/>
What they are used: to get the post whose name and content contains the keyword <br/>
What data they expect to be sent:<br/>
``` json
{
    "keyword": "Clothing"
}
```
What they would return: an array with all the posts which contains the keyword inside <br/>
``` json
[
    {
        "requirements": [
            "driver's license"
        ],
        "status": "Approved",
        "applications": [
            "5f3844d564f1290017d322ca"
        ],
        "_id": "5f38431e64f1290017d322a7",
        "name": "Clothing Centre Volunteer",
        "description": "Help sort clothing, and stock items on the shelves. Make new friends and have lots of fun!",
        "title": "content",
        "location": "Toronto",
        "date": "2020-08-15T21:40:23.891Z",
        "org_id": "5f3842a464f1290017d322a6",
        "org_name": "Team20",
        "__v": 2
    }
]
```

### Organization resource routes
#### a Get request to get the profile of a particular organization
Get: "/organization/get_profile/:id" <br/>
Url: https://frozen-journey-02316.herokuapp.com/organization/get_profile/5f3842a464f1290017d322a6<br/>
What they are used: to get the profile information of a particular oragnization <br/>
What data they expect to be sent: nothing <br/>
What they would return: an organization object<br/>
``` json
{
    "type": "organization",
    "posts": [
        "5f38431e64f1290017d322a7",
        "5f3843ac64f1290017d322a8",
        "5f3857356f93f10017f7b467"
    ],
    "_id": "5f3842a464f1290017d322a6",
    "name": "Team20",
    "email": "user2@user.com",
    "password": "$2a$10$/6.blH32NOoHQdqQSWyZfebVvI9y2MfWVub4VE92FkwmIrSYBWhmq",
    "__v": 5,
    "info": "A technology platform on a mission to end graduate underemployment. The platform connects students in higher education with mentors at companies and nonprofits to work on real-world projects that give students experience and prepare them for the next steps of their careers.",
    "website": "team20@team20.com"
}
```

#### a Get request to get all the applicants for the particular organization
Get: "/organization/get_applicants/:id"<br/>
Url: https://frozen-journey-02316.herokuapp.com/organization/get_applicants/5f3842a464f1290017d322a6<br/>
What they are used: to get all the applicants for the particular organization
What data they expect to be sent: nothing <br/>
What they would return: an array with all the applicants inside<br/>
``` json
[
    {
        "applicant_status": "accepted",
        "_id": "5f3844d564f1290017d322ca",
        "applicant_id": "5f38420164f1290017d32285",
        "applicant_name": "Ziyue Zhang",
        "post_id": "5f38431e64f1290017d322a7",
        "post_name": "Clothing Centre Volunteer",
        "applicant_rank": "D",
        "__v": 0
    }
]
```

#### a Get request to get a profile of a particular applicant
Get: "/organization/get_vol_profile/:vol_id" <br/>
Url: https://frozen-journey-02316.herokuapp.com/organization/get_vol_profile/5f38420164f1290017d32285<br/>
What they are used: to get a profile of a particular applicant
What data they expect to be sent: nothing <br/>
What they would return: a Volunteer object <br/>
``` json
{
    "type": "volunteer",
    "_id": "5f38420164f1290017d32285",
    "firstName": "Ziyue",
    "lastName": "Zhang",
    "email": "user@user.com",
    "password": "$2a$10$etqAkLL06ufWQdKzQ3XBkOQxaRF4wGJkqAKRJXV/fi9K6zba6FZjS",
    "__v": 0,
    "availability": {
        "option1": true,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false,
        "_id": "5f38650b6f93f10017f7b489"
    },
    "desc": "I am a student.",
    "links": "user@user.com",
    "location": "",
    "skills": {
        "analytics": false,
        "biology": false,
        "biotech": false,
        "community": true,
        "content": false,
        "data": false,
        "finance": false,
        "helpdesk": false,
        "manufacturing": false,
        "marketing": false,
        "mechanics": false,
        "IT": true,
        "anything": false,
        "_id": "5f38650b6f93f10017f7b488"
    }
}
```
#### a Get request to get all the posts produced by it
Get: "/organization/get_posts/:id"<br/>
Url: https://frozen-journey-02316.herokuapp.com/organization/get_posts/5f3842a464f1290017d322a6<br/>
What they are used: to get all the posts produced by it<br/>
What data they expect to be sent: nothing <br/>
What they would return: an array with posts produced by this org <br/>
``` json
[
    {
        "requirements": [
            "driver's license"
        ],
        "status": "Approved",
        "applications": [
            "5f3844d564f1290017d322ca"
        ],
        "_id": "5f38431e64f1290017d322a7",
        "name": "Clothing Centre Volunteer",
        "description": "Help sort clothing, and stock items on the shelves. Make new friends and have lots of fun!",
        "title": "content",
        "location": "Toronto",
        "date": "2020-08-15T21:40:23.891Z",
        "org_id": "5f3842a464f1290017d322a6",
        "org_name": "Team20",
        "__v": 2
    },
    {
        "requirements": [
            "teaching experiance"
        ],
        "status": "Approved",
        "applications": [],
        "_id": "5f3843ac64f1290017d322a8",
        "name": "Project Mentor for Students",
        "description": "Underemployment is a growing concern for students across the globe. Entry-level jobs often require 3-5 years of experience for entry-level positions and the gap between the skills students have and what employers require continues to grow. You can help this problem by working with students on short-term projects and challenges that are embedded directly into their classrooms. They get to learn from supporting you on the problem or project from your organization is facing and apply their theoretical knowledge to a practical real-world example.",
        "title": "community",
        "location": "remote",
        "date": "2020-08-15T20:25:05.903Z",
        "org_id": "5f3842a464f1290017d322a6",
        "org_name": "Team20",
        "__v": 0
    },
    {
        "requirements": [
            "teaching experiance"
        ],
        "status": "Under Review",
        "applications": [],
        "_id": "5f3857356f93f10017f7b467",
        "name": "Peer Supporter",
        "description": "Expected applicants: University students who have a warm heart to help me.",
        "title": "content",
        "location": "Toronto",
        "date": "2020-08-15T23:43:59.091Z",
        "org_id": "5f3842a464f1290017d322a6",
        "org_name": "Team20",
        "__v": 0
    }
]
```

#### a Get request to get a application in the application table
Get: "/organization/get_applications/:app_id"<br/>
Url: https://frozen-journey-02316.herokuapp.com/organization/get_applications/5f3844d564f1290017d322ca<br/>
What they are used: to get a application in the application table<br/>
What data they expect to be sent: nothing <br/>
What they would return: an application object 
``` json
{
    "applicant_status": "accepted",
    "_id": "5f3844d564f1290017d322ca",
    "applicant_id": "5f38420164f1290017d32285",
    "applicant_name": "Ziyue Zhang",
    "post_id": "5f38431e64f1290017d322a7",
    "post_name": "Clothing Centre Volunteer",
    "applicant_rank": "D",
    "__v": 0
}
```











































### Admin Resources Routes
Please note that all the admin resource routes need authentication for access.
#### A POST route to approve a under review post
POST: "/admin/post/approve/:id" <br />
URL: https://frozen-journey-02316.herokuapp.com//admin/post/approve/5f3857356f93f10017f7b467
What they are used: to approve a post that's under review.<br/>
What data they expect to be sent: a post request with post status.<br/>
```json
{"status":"Approved"}
```

What they would return: an updated post object with status "Approved"<br/>
```json
{
    "requirements": [
        "teaching experiance"
    ],
    "status": "Approved",
    "applications": [],
    "_id": "5f3857356f93f10017f7b467",
    "name": "Peer Supporter",
    "description": "Expected applicants: University students who have a warm heart to help me.",
    "title": "content",
    "location": "Toronto",
    "date": "2020-08-15T23:43:59.091Z",
    "org_id": "5f3842a464f1290017d322a6",
    "org_name": "Team20",
    "__v": 0
}
```
#### A POST route to delete a post
POST: "admin/post/delete/:post_id" <br />
URL: https://frozen-journey-02316.herokuapp.com/admin/post/delete/5f3875546f93f10017f7b4c2
What they are used: to delete a post.<br/>
What data they expect to be sent: a post request with empty body.<br/>
What they would return: an updated organization object that the deleted the post belongs to.<br/>
```json
{
    "_id":{"$oid":"5f38557f6f93f10017f7b464"},
    "type":"organization",
    "posts":[{"$oid":"5f3856bd6f93f10017f7b466"}],
    "name":"Letters and Smiles",
    "email":"user28@user.com",
    "password":"$2a$10$.Fzf.wU3B6x/GkPfxA/ew.perIbEuknH6m1lAdb1mtcPJ9lg/Bb7y",
    "__v":3,
    "info":"Advocating for Mental Health fro seniors!",
    "website":"lettersandsmiles.wixsite.com/mysite"
}
```

#### A GET route to get a particular organization profile with user id
GET: "/admin/organization/:id" <br />
URL: https://frozen-journey-02316.herokuapp.com/admin/organization/5f38747c6f93f10017f7b4c0 <br>
What they are used: to get an organization user.<br/>
What data they expect to be sent: a get request.<br/>
What they would return: an organization object from the database.<br/>
```json
{
    "type": "organization",
    "posts": [
        "5f3875546f93f10017f7b4c2"
    ],
    "_id": "5f38747c6f93f10017f7b4c0",
    "name": "testOrg",
    "email": "testorg@org.com",
    "password": "$2a$10$7nXbkAtVvb7lvhhh2TI5XOPKM2vsR/RIrgrrG5eKGO2o6P/c/lZLC",
    "__v": 3
}
```

#### A GET route to get all the organization uesrs 
GET: "/admin/allorganizations" <br />
URL: https://frozen-journey-02316.herokuapp.com/admin/allorganizations <br>
What they are used: to get all the organization users.<br/>
What data they expect to be sent: a get request.<br/>
What they would return: an array including all the organization objects from the database.<br/>
```json
[
    {
        "type": "organization",
        "posts": [
            "5f3856bd6f93f10017f7b466"
        ],
        "_id": "5f38557f6f93f10017f7b464",
        "name": "Letters and Smiles",
        "email": "user28@user.com",
        "password": "$2a$10$.Fzf.wU3B6x/GkPfxA/ew.perIbEuknH6m1lAdb1mtcPJ9lg/Bb7y",
        "__v": 3,
        "info": "Advocating for Mental Health fro seniors!",
        "website": "lettersandsmiles.wixsite.com/mysite"
    },
    {
        "type": "organization",
        "posts": [
            "5f3875546f93f10017f7b4c2"
        ],
        "_id": "5f38747c6f93f10017f7b4c0",
        "name": "testOrg",
        "email": "testorg@org.com",
        "password": "$2a$10$7nXbkAtVvb7lvhhh2TI5XOPKM2vsR/RIrgrrG5eKGO2o6P/c/lZLC",
        "__v": 3
    }
]
```
#### A POST route for admin to update a particular organization profile
POST: "/admin/organization/update/:id" <br />
URL: https://frozen-journey-02316.herokuapp.com/admin/organization/update/5f38747c6f93f10017f7b4c0 <br>
What they are used: Admin can update the website and introduction of a particular organization profile.<br/>
What data they expect to be sent: a post request with modified information made by admin.<br/>
Please the POST request as follows.
```json
{
    "website": "links",
    "info":"test info"
}
```
What they would return: an updated organization object.<br/>
The Response:
```json
{
    "type": "organization",
    "posts": [
        "5f3875546f93f10017f7b4c2"
    ],
    "_id": "5f38747c6f93f10017f7b4c0",
    "name": "testOrg",
    "email": "testorg@org.com",
    "password": "$2a$10$7nXbkAtVvb7lvhhh2TI5XOPKM2vsR/RIrgrrG5eKGO2o6P/c/lZLC",
    "__v": 3,
    "website": "links",
    "info": "test info"
}
```

#### A POST route for admin to delete a particular organization
POST: "/admin/organization/delete/:orgId" <br />
URL: https://frozen-journey-02316.herokuapp.com/admin/organization/delete/5f387d4e6f93f10017f7b4e6 <br>
What they are used: Admin can delete a particular organization user with its id. It will update three tables in the databse: Organization, Post and Application. It will remove the organization acount itself, the posts it has released and applications it has received.<br/>
What data they expect to be sent: a post request with empty body.<br/>
What they would return: an delted organization object from the database.<br/>
```json
{
    "type": "organization",
    "posts": [],
    "_id": "5f387cc66f93f10017f7b4db",
    "name": "orgToDel",
    "email": "orgdel@org.com",
    "password": "$2a$10$EOgFhSGeGshuxC1dntAyaO0cpqj51qROWa0LXDaXJ/qSe7MBnzHIq",
    "__v": 0
}
```
#### A GET route to get all the volunteer uesrs 
GET: "/admin/allvolunteers" <br />
URL: https://frozen-journey-02316.herokuapp.com/admin/allvolunteers <br>
What they are used: to get all the volunteers users.<br/>
What data they expect to be sent: a get request.<br/>
What they would return: an array including all the volunteers objects from the database.<br/>
```json
[
    {
        "type": "volunteer",
        "_id": "5f38420164f1290017d32285",
        "firstName": "Ziyue",
        "lastName": "Zhang",
        "email": "user@user.com",
        "password": "$2a$10$etqAkLL06ufWQdKzQ3XBkOQxaRF4wGJkqAKRJXV/fi9K6zba6FZjS",
        "__v": 0,
        "availability": {
            "option1": true,
            "option2": false,
            "option3": false,
            "option4": false,
            "option5": false,
            "_id": "5f38650b6f93f10017f7b489"
        },
        "desc": "I am a student.",
        "links": "user@user.com",
        "location": "",
        "skills": {
            "analytics": false,
            "biology": false,
            "biotech": false,
            "community": true,
            "content": false,
            "data": false,
            "finance": false,
            "helpdesk": false,
            "manufacturing": false,
            "marketing": false,
            "mechanics": false,
            "IT": true,
            "anything": false,
            "_id": "5f38650b6f93f10017f7b488"
        }
    }
]
```

#### A GET route to get a particular volunteer profile with user id
GET: "/admin/volunteer/:id" <br />
URL: https://frozen-journey-02316.herokuapp.com/admin/volunteer/5f38420164f1290017d32285 <br>
What they are used: to get an volunteer user.<br/>
What data they expect to be sent: a get request.<br/>
What they would return: an volunteer object from the database.<br/>
```json
{
    "type": "volunteer",
    "_id": "5f38420164f1290017d32285",
    "firstName": "Ziyue",
    "lastName": "Zhang",
    "email": "user@user.com",
    "password": "$2a$10$etqAkLL06ufWQdKzQ3XBkOQxaRF4wGJkqAKRJXV/fi9K6zba6FZjS",
    "__v": 0,
    "availability": {
        "option1": true,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false,
        "_id": "5f38650b6f93f10017f7b489"
    },
    "desc": "I am a student.",
    "links": "user@user.com",
    "location": "",
    "skills": {
        "analytics": false,
        "biology": false,
        "biotech": false,
        "community": true,
        "content": false,
        "data": false,
        "finance": false,
        "helpdesk": false,
        "manufacturing": false,
        "marketing": false,
        "mechanics": false,
        "IT": true,
        "anything": false,
        "_id": "5f38650b6f93f10017f7b488"
    }
}
```

#### A POST route for admin to update a particular volunteer profile
POST: "/admin/volunteer/update/:id" <br />
URL: https://frozen-journey-02316.herokuapp.com/admin/volunteer/update/5f38420164f1290017d32285 <br>
What they are used: Admin can update the information of a particular volunteer profile.<br/>
What data they expect to be sent: a post request with modified information made by admin. The request body is same as the route "/volunteer/update/:id".<br/>
```json
{
    "location": "Toronto",
    "links": "user@user.com",
    "desc": "I am a student.",
    "skills": {
        "analytics": false,
        "biology": false,
        "biotech": false,
        "community": true,
        "content": false,
        "data": false,
        "finance": false,
        "helpdesk": false,
        "manufacturing": false,
        "marketing": false,
        "mechanics": false,
        "IT": true,
        "anything": false
    },
    "availability": {
        "option1": true,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false   
    }
}
```

What they would return: an updated volunteer object. Same as the route "/volunteer/update/:id"<br/>


#### A POST route for admin to delete a particular volunteer
POST: "/admin/volunteer/delete/:orgId" <br />
URL: https://frozen-journey-02316.herokuapp.com/admin/volunteer/delete/5f38847b6f93f10017f7b510 <br>
What they are used: Admin can delete a particular volunteer user with its id. It will update three tables in the databse: Volunteer, Post and Application. It will remove the volunteer acount itself,the applications it has applied and the posts that received the user's application.<br/>
What data they expect to be sent: a post request with empty body.<br/>
What they would return: an deleted volunteer object from the database.<br/>
```json
{
    "type": "volunteer",
    "_id": "5f38830f6f93f10017f7b50c",
    "firstName": "volToDel",
    "lastName": "user",
    "email": "voldel@user.com",
    "password": "$2a$10$irlU46Bhg/qzlCaoERRkMe86U7T49lVpsDIIbSHr3gAnh732W3.9a",
    "__v": 0
}
```

