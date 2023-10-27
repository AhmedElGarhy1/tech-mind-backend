import mockCourse from "./src/courses.js";
import mockDiploma from "./src/diploma.js";
import connectToDB from "./src/config/database.js";
import Course from "./src/models/courses.js";
import Diploma from "./src/models/diplomas.js";

async function createCourses() {
  let c = 0;
  while (c < 10) {
    console.log(c + " Course Started");
    const createdCourse1 = new Course({
      ...mockCourse,
      name: {
        AR: mockCourse.name.AR + " " + c,
        EN: mockCourse.name.EN + " " + c,
      },
    });
    await createdCourse1.save();
    c++;
  }
}
async function createDiplomas() {
  let c = 0;
  while (c < 10) {
    console.log(c + " Diploma Started");
    const createdCourse1 = new Diploma({
      ...mockDiploma,
      name: {
        AR: mockDiploma.name.AR + " " + c,
        EN: mockDiploma.name.EN + " " + c,
      },
    });
    await createdCourse1.save();
    c++;
  }
}

(async () => {
  try {
    await connectToDB();
    createCourses();
    createDiplomas();
  } catch (err) {
    console.log(err);
  }
})();
