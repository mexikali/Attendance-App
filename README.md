<h1>Attendance Management System</h1>

<p>This project is an Attendance Management System that utilizes RFID technology to track student attendance. It consists of a desktop application built with Electron.js, which communicates with an Express.js RESTful API and stores data in a PostgreSQL database.</p>

<h2>System Architecture</h2>
<p>Below is the system architecture diagram:</p>
<p><img src="https://github.com/mexikali/Attendance-App/blob/main/plan.jpg" alt="System Architecture" style="text-align: center;"></p>

<h2>Technologies Used</h2>
<ul>
  <li><strong>Frontend:</strong> Electron.js (Desktop App)</li>
  <li><strong>Backend:</strong> Express.js (RESTful API)</li>
  <li><strong>Database:</strong> PostgreSQL</li>
  <li><strong>Hardware:</strong> RFID Readers</li>
</ul>

<h2>User Roles and Operations</h2>

<h3>Headmaster</h3>
<ul>
  <li>Manage lectures (Create, Read, Update, Delete)</li>
  <li>Manage teachers (Create, Read, Update, Delete)</li>
  <li>View dashboard</li>
  <li>View all students' information</li>
</ul>

<h3>Teacher</h3>
<ul>
  <li>Manage students (Create, Read, Update, Delete)</li>
  <li>Mark attendance</li>
  <li>View student information (only for assigned class)</li>
</ul>




