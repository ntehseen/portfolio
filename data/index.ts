export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I am committed to building strong client relationships through transparent and effective communication.",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-sm",
    imgClassName: "w-full h-full opacity-30",
    titleClassName: "justify-end",
    img: "/b1.jpeg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible Time Zone Communications",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 text-xs lg:text-sm md:text-xs",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Podcast Application ",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Would you like to work together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "PodNexus",
    des: "AI SaaS platform designed to revolutionize the way you create, discover, and enjoy podcasts. Leveraging advanced technologies, PodNexus offers features such as text-to-audio conversion with multi-voice AI, podcast thumbnail image generation, and seamless playback.",
    img: "/podnexus.svg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/clerk.png",
      "/sentry-2.svg",
    ],
    link: "https://github.com/ntehseen/podnexus",
    liveLink: "https://podnexus.vercel.app/",
  },

  {
    id: 2,
    title: "Florencia Florist",
    des: "Florencia Florist website developed using HTML, CSS, GSAP, and LocoMotive-Scroll.",
    img: "/florencia-florist.png",
    iconLists: ["/html.svg", "/css.svg", "/gsap.svg", "/js.svg"],
    link: "https://github.com/ntehseen/FlorenciaFlorist",
    liveLink: "https://ntehseen.github.io/FlorenciaFlorist/",
  },
  {
    id: 3,
    title: "I Am Nacho Mama",
    des: "I Am Nacho Mama website developed using HTML, CSS, JavaScript, and Bootstrap.",
    img: "/iamnacho.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/bootstrap.svg"],
    link: "https://github.com/ntehseen/IAmNachoMama",
    liveLink: "https://ntehseen.github.io/IAmNachoMama/",
  },
  {
    id: 4,
    title: "Vertical Slider",
    des: "Vertical Slider implemented with HTML, CSS, and JavaScript.",
    img: "/verticle-slider.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://github.com/ntehseen/Vertical-Slider",
    liveLink: "https://ntehseen.github.io/Vertical-Slider/",
  },
  {
    id: 5,
    title: "Layman Hall Theatre",
    des: "Layman Hall Theatre website created using HTML, CSS, and JavaScript.",
    img: "/Layman.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://github.com/ntehseen/The-Layman-Hall-Theater",
    liveLink: "https://ntehseen.github.io/The-Layman-Hall-Theater/",
  },
  {
    id: 6,
    title: "Simple JavaScript Calculator",
    des: "A simple calculator built with JavaScript.",
    img: "/calc-js.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://github.com/ntehseen/JavaScript-Calculator",
    liveLink: "https://ntehseen.github.io/JavaScript-Calculator/",
  },
  {
    id: 7,
    title: "Blurry Loader",
    des: "A blurry loading effect implemented with HTML, CSS, and JavaScript.",
    img: "/blurry.jpg",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://github.com/ntehseen/Blurry-Loader",
    liveLink: "https://ntehseen.github.io/Blurry-Loader/",
  },
  {
    id: 8,
    title: "Motor Vehicle Collisions in New York City Analysis Dashboard",
    des: "Dashboard analyzing motor vehicle collisions in NYC using Python, Pandas, and Matplotlib.",
    img: "/motor-veh.png",
    iconLists: [
      "/python.svg",
      "/pandas.svg",
      "/matplotlib.svg",
      "/Streamlit.svg",
    ],
    link: "https://github.com/ntehseen/Motor-Vehicle-Collisions-in-New-York-City-Analysis-Dashboard",
    liveLink:
      "https://github.com/ntehseen/Motor-Vehicle-Collisions-in-New-York-City-Analysis-Dashboard",
  },
  {
    id: 9,
    title: "Fraud Detection using GANs",
    des: "Fraud detection using Generative Adversarial Networks (GANs) with Python and TensorFlow.",
    img: "/cred_fraud.jpg",
    iconLists: ["/python.svg", "/tensorflow.svg", "/Jupyter.svg"],
    link: "https://github.com/ntehseen/Data-Balancing-with-Gen-AI-Credit-Card-Fraud-Detection",
    liveLink:
      "https://github.com/ntehseen/Data-Balancing-with-Gen-AI-Credit-Card-Fraud-Detection",
  },
  {
    id: 10,
    title: "Predict Sales Revenue with scikit-learn",
    des: "Predict sales revenue using Pandas, Numpy, and scikit-learn.",
    img: "/pre-sal-rev.png",
    iconLists: ["/pandas.svg", "/numpy.svg", "/sklearn.svg"],
    link: "https://github.com/ntehseen/-Predict-Sales-Revenue-with-scikit-learn",
    liveLink:
      "https://github.com/ntehseen/-Predict-Sales-Revenue-with-scikit-learn",
  },
  {
    id: 11,
    title: "Facial Expression Classification Using Residual Neural Nets",
    des: "Classify facial expressions using residual neural networks with Pandas, TensorFlow, and Keras.",
    img: "/Emotion-AI-Detection.png",
    iconLists: [
      "/pandas.svg",
      "/tensorflow.svg",
      "/keras.svg",
      "/neuralnet.svg",
      "/OpenCV.svg",
    ],
    link: "https://github.com/ntehseen/Facial-Expression-Classification-Using-Residual-Neural-Nets",
    liveLink:
      "https://github.com/ntehseen/Facial-Expression-Classification-Using-Residual-Neural-Nets",
  },
  {
    id: 12,
    title: "NLP Fake News Classification",
    des: "Analyze thousands of news texts to detect authenticity using NLP techniques.",
    img: "/title.png",
    iconLists: ["/tensorflow.svg", "/sklearn.svg", "/Jupyter.svg"],
    link: "https://github.com/ntehseen/Real-vs-Fake-News-Classification-NLP",
    liveLink:
      "https://github.com/ntehseen/Real-vs-Fake-News-Classification-NLP",
  },
  {
    id: 13,
    title: "1984 Book vs. Album: A Unique NLP Project",
    des: "Exploring '1984' book and album using NLP techniques, including summarization, sentiment analysis, and word clouds.",
    img: "/title1984.png",
    iconLists: ["/pandas.svg", "/Jupyter.svg"],
    link: "https://github.com/ntehseen/1984_Book_vs_Album_NLP",
    liveLink: "https://github.com/ntehseen/1984_Book_vs_Album_NLP",
  },
  {
    id: 14,
    title: "Rock vs Mine Prediction",
    des: "Predicting rock vs mine using sonar dataset with logistic regression.",
    img: "/4.jpg",
    iconLists: ["/seaborn.svg", "/Jupyter.svg"],
    link: "https://github.com/ntehseen/Data-Science/tree/main/Projects/1.machine-learning/2.Open-source/01.sonar-rock-vs-mine-prediction",
    liveLink:
      "https://github.com/ntehseen/Data-Science/tree/main/Projects/1.machine-learning/2.Open-source/01.sonar-rock-vs-mine-prediction",
  },
  // {
  //   id: 14,
  //   title: "Bike Sharing Profit Prediction",
  //   des: "Using linear regression to predict profit/loss for bike sharing business.",
  //   img: "/2.png",
  //   iconLists: ["/python.svg", "/linear-regression.svg", "/gradient-descent.svg", "/numpy.svg"],
  //   link: "https://github.com/ntehseen/Data-Science/tree/main/Projects/1.machine-learning/1.Coursera-guided-projects/01.univariate-linear-regression",
  //   liveLink: "#"
  // }
];

// export const projects = [
//   {
//     id: 1,
//     title: "3D Solar System Planets to Explore",
//     des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
//     img: "/p1.svg",
//     iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
//     link: "https://github.com/adrianhajdin?tab=repositories",
//   },
//   {
//     id: 2,
//     title: "Yoom - Video Conferencing App",
//     des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
//     img: "/p2.svg",
//     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
//     link: "https://github.com/adrianhajdin/zoom-clone",
//   },
//   {
//     id: 3,
//     title: "AI Image SaaS - Canva Application",
//     des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
//     img: "/p3.svg",
//     iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
//     link: "https://github.com/adrianhajdin/ai_saas_app",
//   },
//   {
//     id: 4,
//     title: "Animated Apple Iphone 3D Website",
//     des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
//     img: "/p4.svg",
//     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
//     link: "https://github.com/adrianhajdin/iphone",
//   },
// ];

// export const testimonials = [
//   {
//     quote:
//       "Working with Navid Tehseen was an absolute pleasure. Their attention to detail, creativity, and commitment to excellence truly set them apart. I highly recommend Navid for anyone seeking a top-notch developer. They exceeded my expectations and delivered outstanding results!",
//     name: "Gustavo Taveras",
//     title: "Full Stack Developer at AlphaPrime Tech",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },

export const testimonials = [
  {
    quote:
      "Working with Navid Tehseen was an absolute pleasure. His attention to detail, creativity, and commitment to excellence truly sets him apart. I highly recommend Navid for anyone seeking a top-notch developer. He exceeded my expectations and delivered outstanding results!",
    name: "Gustavo Taveras",
    title: "Full Stack Developer at AlphaPrime Tech",
    img: "/testi1.png",
  },
  {
    quote:
      "I had the pleasure of working closely with Navid Tehseen, and I can confidently say he is hardworking, professional, very well-mannered, and exceptionally neat. Navid's dedication to his work and his pleasant demeanor made our collaboration enjoyable and productive. I highly recommend Navid as a reliable and skilled professional.",
    name: "Ivan Reyes",
    title: "Business Owner",
    img: "/testi2.png",
  },

  {
    quote:
      "Navid has excelled in his classwork in the Full Stack course he took with me. His projects are completed on time and are of outstanding quality, earning him a place at the very top of the class.  He has developed his skills to be competitive in all ends of the spectrum from open AI to Rest API.  With his eagerness to learn and his attention to detail, he has become a leader for his classmates, even mentoring other students with their coding and project work. You will find Navid to be an asset to any company. ",

    name: "Jane Sferrazza",
    title: "Full Stack Developer at THEPRMG",
    img: "/testi3.png",
  },
  // Add more testimonials with corresponding images
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

// export const workExperience = [
//   {
//     id: 1,
//     title: "Full Stack Web Developer Intern",
//     desc: "Built dynamic and responsive websites using HTML, CSS, Bootstrap, JavaScript, and Angular, with advanced JavaScript and Cloud operations.",
//     className: "md:col-span-2",
//     thumbnail: "/exp1.svg",
//   },
//   {
//     id: 2,
//     title: "Mobile App Dev - JSM Tech",
//     desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
//     className: "md:col-span-2", // change to md:col-span-2
//     thumbnail: "/exp2.svg",
//   },
//   {
//     id: 3,
//     title: "Freelance App Dev Project",
//     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
//     className: "md:col-span-2", // change to md:col-span-2
//     thumbnail: "/exp3.svg",
//   },
//   {
//     id: 4,
//     title: "Lead Frontend Developer",
//     desc: "Developed and maintained user-facing features using modern frontend technologies.",
//     className: "md:col-span-2",
//     thumbnail: "/exp4.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Web Developer Intern",
    desc: "Interned at AlphaPrime Tech, developing dynamic and responsive websites with HTML, CSS, Bootstrap, JavaScript, and Angular. Implemented advanced JavaScript features and gained substantial experience in cloud operations.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer - NetSoul Technologies",
    desc: "Specialized in frontend development at NetSoul Technologies, focusing on building scalable and performant web applications. Collaborated closely with cross-functional teams to deliver high-quality solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Machine Learning and Data Science Practitioner",
    desc: "Completed extensive coursework and projects in machine learning and data science. Proficient with TensorFlow, data analysis, and building predictive models. Continuously expanding expertise in advanced data science techniques.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Customer Service and Technical Support Specialist",
    desc: "Exhibited outstanding customer service skills in the hospitality and retail industries for over 8 years. Managed freelance projects, including tutoring and event management, leveraging strong communication and problem-solving abilities.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

// export const socialMedia = [
//   {
//     id: 1,
//     img: "/git.svg",

//   },
//   {
//     id: 2,
//     img: "/twit.svg",
//   },
//   {
//     id: 3,
//     img: "/link.svg",
//   },
// ];

// export const socialMedia = [
//   {
//     id: 1,
//     img: "/git.svg",
//     url: "https://github.com/ntehseen",
//   },
//   {
//     id: 2,
//     img: "/twit.svg",
//     url: "https://twitter.com/your-profile",
//   },
//   {
//     id: 3,
//     img: "/link.svg",
//     url: "https://linkedin.com/in/ntehseen",
//   },
// ];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg", // Downloaded GitHub icon
    url: "https://github.com/ntehseen",
  },
  {
    id: 2,
    img: "/link.svg", // Downloaded LinkedIn icon
    url: "https://linkedin.com/in/ntehseen",
  },
  {
    id: 3,
    img: "/instagram.svg", // Downloaded Instagram icon
    url: "https://instagram.com/navid.tehseen",
  },
  {
    id: 4,
    img: "/kaggle.svg", // Downloaded Kaggle icon
    url: "https://www.kaggle.com/navidtehseen",
  },
  {
    id: 5,
    img: "/tree.svg", // Downloaded Linktree icon
    url: "https://linktr.ee/navid.tehseen",
  },
  {
    id: 6,
    img: "/twit.svg",
    url: "https://twitter.com/your-profile",
  },
];
