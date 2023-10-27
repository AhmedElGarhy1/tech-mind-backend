router.get("/", getAllDiplomas);
router.get("/:id", getDiploma);
router.post("/", addDiploma);
router.put("/:id", updateDiploma);
router.delete("/:id", deleteDiploma);
router.post("/course/:id", addDiplomaCourse);
router.delete("/course/:id", deleteDiplomaCourse);

# API Endpoints

## Courses

- GET /api/courses - Get all courses.
- GET /api/courses/:id - Get course by id.
- POST /api/courses - Create a new course.
- PUT /api/courses/:id - Update course by id
- DELETE /api/courses/:id - Delete course by id.
- GET /api/courses/related/:id - Get related courses for the given course id.
- POST /api/courses/related/:id - Adds a related course to the specified course.
- DELETE /api/courses/related/:id - Deletes a specific relationship between two courses.

## Diplomas

- GET /api/diplomas - Get all diplomas.
- GET /api/diplomas/:id - Get diploma by id.
- POST /api/diplomas - Create a new diploma.
- PUT /api/diplomas/:id - Update diploma by id
- DELETE /api/diplomas/:id - Delete diploma by id.
- POST /api/diplomas/course/:id - Adds a course to the specified diploma.
- DELETE /api/diplomas/course/:id - Removes a specific course from the specified diploma.

## Messages

contact-us messages

- GET /api/messages - Get all messages.
- GET /api/messages/:id - Get message by id.
- POST /api/messages - Send a new message.
- DELETE /api/messages/:id - Remove a message by its id.

## reservations

students can make reservations to specific course/diploma to enroll into

- GET /api/reservations - Get all reservations.
- GET /api/reservations/:id - Get reservation by id.
- POST /api/reservations - Send a new reservations.

---

## Feedback (Not finished yet)

Student feedbacks on courses/diplomas

- GET /api/feedback - Get all feedback.
- GET /api/feedback/:id - Get feedback by id.
- POST /api/feedback - Create a new feedback.
- PUT /api/feedback/:id - Update feedback by id
