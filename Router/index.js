const express = require("express");
const router = express.Router();
const st=require('../Controller/student.js')
const td=require('../Controller/teacher.js')
const cs=require('../Controller/course.js')

const user = require("../Controller/user");
const email = require("../Controller/email");


router.get("/getstudentdata",st.getstudentdata)
 /**
 * @swagger
 * /insertstudentdata:
 *   post:
 *     summary: Add new student
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 5
 *               name:
 *                 type: string
 *                 example: Karan Patel
 *               age:
 *                 type: integer
 *                 example: 23
 *               course:
 *                 type: string
 *                 example: MBA
 *               city:
 *                 type: string
 *                 example: Ahmedabad
 *           example:
 *             id: 5
 *             name: Karan Patel
 *             age: 23
 *             course: MBA
 *             city: Ahmedabad
 *     responses:
 *       201:
 *         description: Student added successfully
 */
router.post("/insertstudentdata",st.insertstudentdata)
/**
 * @swagger
 * /updatestudentdata/{id}:
 *   put:
 *     summary: Update student details
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Student ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               course:
 *                 type: string
 *               city:
 *                 type: string
 *           example:
 *             name: Rahul Sharma
 *             age: 22
 *             course: MCA
 *             city: Delhi
 *     responses:
 *       200:
 *         description: Student updated successfully
 */

router.put("/updatestudentdata/:id",st.updatestudentdata)
/**
 * @swagger
 * /deletestudentdata/{id}:
 *   delete:
 *     summary: Delete student
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Student ID
 *     responses:
 *       200:
 *         description: Student deleted successfully
 */

router.delete("/deletestudentdata/:id",st.deletestudentdata)

/**
 * @swagger
 * /getteacherdata:
 *   get:
 *     summary: Get all teachers data
 *     tags: [Teacher]
 *     responses:
 *       200:
 *         description: Teacher list
 */

router.get("/getteacherdata",td.getteacherdata)
/**
 * @swagger
 * /insertteacherdata:
 *   post:
 *     summary: Add new teacher
 *     tags: [Teacher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *               subject:
 *                 type: string
 *               experience:
 *                 type: integer
 *               city:
 *                 type: string
 *           example:
 *             id: 1
 *             name: Amit Kumar
 *             subject: Java
 *             experience: 5
 *             city: Delhi
 *     responses:
 *       201:
 *         description: Teacher added successfully
 */



/**
 * @swagger
 * tags:
 *   - name: Authentication
 *     description: User Authentication APIs
 *   - name: Student
 *     description: Student Management APIs
 *   - name: Teacher
 *     description: Teacher Management APIs
 *   - name: Course
 *     description: Course Management APIs
 *   - name: Email
 *     description: Email APIs
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post("/register",user.register);
/**
 * @swagger
 * /sendmail:
 *   post:
 *     summary: Send Email
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               to:
 *                 type: string
 *               subject:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Email sent successfully
 */
router.post("/sendmail", email.sendMail);
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login User
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login",user.login);
/**
 * @swagger
 * /getstudentdata:
 *   get:
 *     summary: Get all students data
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: Student list
 */
router.post("/insertteacherdata",td.insertteacherdata)
/**
 * @swagger
 * /updateteacherdata/{id}:
 *   put:
 *     summary: Update teacher details
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Teacher ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               subject:
 *                 type: string
 *               experience:
 *                 type: integer
 *               city:
 *                 type: string
 *           example:
 *             name: Amit Kumar
 *             subject: React
 *             experience: 6
 *             city: Mumbai
 *     responses:
 *       200:
 *         description: Teacher updated successfully
 */
router.put("/updateteacherdata/:id",td.updateteacherdata)
/**
 * @swagger
 * /deleteteacherdata/{id}:
 *   delete:
 *     summary: Delete teacher
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Teacher ID
 *     responses:
 *       200:
 *         description: Teacher deleted successfully
 */

router.delete("/deleteteacherdata/:id",td.deleteteacherdata)

/**
 * @swagger
 * /getcoursedata:
 *   get:
 *     summary: Get all courses
 *     tags: [Course]
 *     responses:
 *       200:
 *         description: Course list
 */

router.get("/getcoursedata",cs.getcoursedata)
/**
 * @swagger
 * /insertcoursedata:
 *   post:
 *     summary: Add new course
 *     tags: [Course]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               courseName:
 *                 type: string
 *               duration:
 *                 type: string
 *               fees:
 *                 type: integer
 *               department:
 *                 type: string
 *           example:
 *             id: 1
 *             courseName: BCA
 *             duration: 3 Years
 *             fees: 120000
 *             department: Computer Science
 *     responses:
 *       201:
 *         description: Course added successfully
 */

router.post("/insertcoursedata",cs.insertcoursedata)
/**
 * @swagger
 * /updatecoursedata/{id}:
 *   put:
 *     summary: Update course details
 *     tags: [Course]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Course ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseName:
 *                 type: string
 *               duration:
 *                 type: string
 *               fees:
 *                 type: integer
 *               department:
 *                 type: string
 *           example:
 *             courseName: B.Tech
 *             duration: 4 Years
 *             fees: 450000
 *             department: Engineering
 *     responses:
 *       200:
 *         description: Course updated successfully
 */
router.put("/updatecoursedata/:id",cs.updatecoursedata)
/**
 * @swagger
 * /deletecoursedata/{id}:
 *   delete:
 *     summary: Delete course
 *     tags: [Course]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Course ID
 *     responses:
 *       200:
 *         description: Course deleted successfully
 */

router.delete("/deletecoursedata/:id",cs.deletecoursedata)


module.exports = router;