# CALENDAR APPLICATION FOR COMMUNICATION TRACKING
Submitted By:
•	Name: MOHAMMAD HASINA
•	Email: hasinamd12@gmail.com

# Project Overview
Project Title: Calendar Application for Communication Tracking
Objective: The objective is to develop a React-based Calendar Application that helps my company maintain strong relationships with other organizations by efficiently tracking communication. This app will enable logging past interactions, planning future follow-ups, and managing engagement frequency based on predefined schedules. I will focus on ensuring the tool is user-friendly, clear, and handles data efficiently.usability, clarity, and efficient data handling.

# GitHub Repository Details
Repository Link: https://github.com/MOHAMMADHASINA/calender
Repository Structure:
•	/src: Contains all source code files, organized into components, services, and utilities.
•	/public: Static assets used in the application.
Highlights:
•	Modular and reusable components.
•	Separation of concerns adhered to in design.
•	Inline comments for better code understanding.

# Deployment Details
Live Application URL: https://calender-application-orpin.vercel.app/
Platform Used: Vercel
Deployment Process:
1.	Repository Integration: Linked the GitHub repository with Vercel.
2.	Build Configuration:
o	Framework Preset: React.
o	Build Command: npm run build.
o	Output Directory: build.
3.	Deployment: Triggered the deployment through Vercel's interface, resulting in the live application URL.

  
# Application Functionality
Key Features Implemented:
1.	Company Management:
o	Admins can add, edit, and delete company records with attributes like name, location, LinkedIn profile, emails, phone numbers, and comments.
o	Configurable communication periodicity for each company.
2.	Communication Method Management:
o	Admins can define communication methods, set their sequence, and mark them as mandatory or optional.
o	Predefined methods include LinkedIn Post, LinkedIn Message, Email, Phone Call, and Other.
3.	Dashboard with Notifications:
o	Grid-like view of companies with color-coded highlights for overdue (red) and due (yellow) communications.
o	Last five communications and next scheduled communication displayed.
o	Hover tooltips for communication notes and an interactive action modal for logging new communications.
4.	Calendar View:
o	Users can view past communications and manage upcoming scheduled tasks.
5.	Notification System:
o	Dedicated grids for overdue and today’s communications with a badge displaying counts.
6.	Interactive Features:
o	Multi-select for performing communication actions on multiple companies simultaneously.
o	Resetting communication highlights upon action submission.
Known Limitations:
1.	Reporting and Analytics Module:
o	Advanced analytics features like frequency reports, engagement effectiveness, and trend tracking are currently not implemented.
2.	Mobile Optimization:
o	While responsive design is applied, the mobile interface could be further improved for better user experience on smaller screens.
3.	User Roles and Authentication:
o	Basic admin and user access is implemented, but role-based permissions are not fully refined.
4.	Error Handling:
o	Limited error messages for invalid inputs in forms (e.g., empty fields or invalid URLs).


 # Modules and Features
A. Admin Module
This module allows administrators to configure the application and manage foundational data effectively.
1. Company Management
Admins can perform the following actions:
•	Add, Edit, and Delete Companies.
Each company entry includes:
o	Name
o	Location
o	LinkedIn Profile
o	Emails
o	Phone Numbers
o	Comments
o	Communication Periodicity (e.g., every 2 weeks)
2. Communication Method Management
Admins can define and configure communication methods:
•	Attributes:
o	Name (e.g., "LinkedIn Post")
o	Description (e.g., "Visit to company premises")
o	Sequence (order of communication)
o	Mandatory Flag (indicates whether the method is mandatory)
•	Default Communication Methods (Sequence):
1.	LinkedIn Post
2.	LinkedIn Message
3.	Email
4.	Phone Call
5.	Other
B. User Module
This module enables users to manage, view, and perform communication tasks.
1. Dashboard
The dashboard displays a grid-like view:
•	Columns:
o	Company Name
o	Last Five Communications (type and date)
o	Next Scheduled Communication (type and date)
Color-Coded Highlights:
•	Red: Overdue communication.
•	Yellow: Communication due today.
Interactive Features:
•	Hover effect to display notes/comments for completed communications.
2. Communication Action
Users can:
•	Select single/multiple companies.
•	Log a new communication via the "Communication Performed" button:
o	Select communication type.
o	Input communication date.
o	Add notes.
•	Reset highlights for selected companies upon submission.
3. Notifications
•	Overdue Communications Grid: Displays overdue tasks.
•	Today’s Communications Grid: Displays tasks due today.
•	Notification Badge: Shows count of overdue/due communications.
4. Calendar View
•	View past communications.
•	Manage upcoming communications.
C. Reporting and Analytics Module (Optional)
Provides actionable insights and performance metrics:
1. Communication Frequency Report
•	Visual representation (e.g., bar chart) of communication methods used over a timeframe.
•	Filters: Company, date range, method.
2. Engagement Effectiveness Dashboard
•	Track effectiveness of methods (e.g., email response rate).
•	Metrics: Percentage of successful responses.
3. Overdue Communication Trends
•	Visualize overdue communication trends over time.
4. Downloadable Reports
•	Export reports in PDF or CSV format.
5. Real-Time Activity Log
•	Live feed of all communication activities.
•	Real time activity log.


# Working 
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
