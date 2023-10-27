import { CourseType } from "./types/course";
const mockCourse: CourseType = {
  name: {
    AR: "أساسيات البرمجة بلغة بايثون",
    EN: "Basics of programming in Python language",
  },
  description: {
    EN: "Developing your programming skills in Python and teaching you how to solve problems by thinking computationally.",
    AR: "تطوير مهارات البرمجة الخاصة بك في بايثون وتعليمك كيفية القيام بذلك لحل المشكلات بالتفكير الحسابي.",
  },
  duration: 35,
  lectures: 27,
  real_projects: 5,
  workshops: 3,
  overview: {
    AR: [
      "لن تنقل دورة بايثون هذه مهارات البرمجة لديك إلى المستوى التالي فحسب ، بل ستمنحك أيضًا قوة عظمى في حل المشكلات!",
      "تعتبر البرمجة مهارة متزايدة الأهمية ، سواء كنت تطمح إلى الحصول على وظيفة في مجال تطوير البرمجيات ، أو في مجالات أخرى. هذه الدورة هي مقدمة إلى البرمجة بلغة بايثون ، لكن دروسها تمتد إلى أي لغة قد ترغب في تعلمها. هذا لأن البرمجة تدور في الأساس حول معرفة كيفية حل فئة من المشاكل وكتابة الخوارزمية ، وهي مجموعة واضحة من الخطوات لحل أي مشكلة في مسارها.",
      "في هذه الدورة ، ستتعلم كيفية تطوير خوارزمية ، ثم التقدم إلى قراءة التعليمات البرمجية وفهم كيفية ارتباط مفاهيم البرمجة بالخوارزميات",
    ],
    EN: [
      "This Python course will not only take your programming skills to the next level, but also give you a problem-solving superpower!",
      "Programming is an increasingly important skill, whether you aspire to a career in software development, or in other fields. This course is an Introduction to Programming in Python, but its lessons extend to any language you might want to learn. This is because programming is fundamentally about figuring out how to solve a class of problems and writing the algorithm, a clear set of steps to solve any problem in its course.",
      "In this course, you will learn how to develop an algorithm, then progress to reading code and understanding how programming concepts relate to algorithms",
    ],
  },
  what_you_will_learn: {
    AR: [
      "في هذه الدورة ، ستتعلم كيفية تطوير خوارزمية ، ثم التقدم إلى قراءة التعليمات البرمجية وفهم كيفية ارتباط مفاهيم البرمجة بالخوارزميات",
      "تطوير فهم شامل للغة بايثون.",
      "كن مطور Python محترفًا واحصل على وظيفة.",
      "حل مشاكل كود بايثون.",
      "إعداد بيئة التثبيت (دفتر ملاحظات anaconda-jupyter)",
      "عوامل تشغيل python ، والحلقات ، والشرطية ، بينما الحلقات ، وهياكل البيانات ، والمتغيرات وأنواع البيانات ..",
      "تنفيذ البرمجة الموجهة للكائنات ومعالجة استثناءات الدراسة في Python ..",
      "إنشاء مخططات Python في Matplotlib.",
      "كن مطورًا محترفًا للغة Python وتوظيفك",
      "العمل مع IDEs مختلفة مثل Spyder و Jupyter.",
      "دراسة معالجة الاستثناءات في بايثون.",
    ],
    EN: [
      "In this course, you will learn how to develop an algorithm, then progress to reading code and understanding how programming concepts relate to algorithms",
      "Develop a thorough understanding of Python .",
      "Become a professional Python Developer and get hire .",
      "Solve problems with Python code .",
      "installation environment setup (anaconda-jupyter notebook)",
      "python operators , loops , conditionals , while loops, data structures , variables and data types..",
      "Implement object-oriented programming and Study exception handling in Python ..",
      "Create Python charts in Matplotlib .",
      "Become a professional Python Developer and get hired",
      "Work with different IDEs like Spyder and Jupyter .",
      "Study exception handling in Python .",
    ],
  },
  fqa: [
    {
      q: {
        EN: "What is Python ?",
        AR: "ما هي لغة بايثون؟",
      },
      a: {
        EN: [
          "Python is an interpreted, interactive, object-oriented programming language. It incorporates modules, exceptions, dynamic typing, very high-level dynamic data types, and classes. It supports multiple programming paradigms beyond object- oriented programming, such as procedural and functional programming.",
        ],
        AR: [
          "Python هي لغة برمجة مفسرة وتفاعلية وموجهة للكائنات. وهو يشتمل على الوحدات النمطية والاستثناءات والكتابة الديناميكية وأنواع البيانات الديناميكية عالية المستوى والفئات. وهو يدعم نماذج برمجة متعددة تتجاوز البرمجة الموجهة للكائنات ، مثل البرمجة الإجرائية والوظيفية.",
        ],
      },
    },
    {
      q: {
        EN: "Why use python ?",
        AR: "لماذا نستخدم بيثون؟",
      },
      a: {
        EN: [
          "Python is commonly used for developing websites and software, task automation, data analysis, and data visualization.",
        ],
        AR: [
          "يتم استخدام Python بشكل شائع لتطوير مواقع الويب والبرامج وأتمتة المهام وتحليل البيانات وتصور البيانات.",
        ],
      },
    },
    {
      q: {
        EN: "Is python commonly used ?",
        AR: "هل بايثون شائع الاستخدام؟",
      },
      a: {
        EN: [
          "Python has become one of the most popular programming languages in the world in recent years. It's used in everything from machine learning to building websites and software testing. It can be used by developers and non-developers alike.",
        ],
        AR: [
          "أصبحت Python واحدة من أشهر لغات البرمجة في العالم فى السنوات الاخيرة. يتم استخدامه في كل شيء من التعلم الآلي إلى إنشاء مواقع الويب واختبار البرامج. يمكن استخدامه من قبل المطورين وغير المطورين على حد سواء.",
        ],
      },
    },
  ],
  have_target: false, // to display
  is_dependent: true,
  icon: "icon",
  main_img: "mainImage",
  other_src: "otherSourse",
  have_objectives: false,
  objectives: [
    {
      name: {
        EN: "Engilsh",
        AR: "Arabic",
      },
      description: {
        EN: "Engilsh",
        AR: "Arabic",
      },
      icon: "icon",
    },
  ],
};

export default mockCourse;
