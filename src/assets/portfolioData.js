export const resume = "./static_resources/files/Resume.pdf";

export const heroImg = "./static_resources/images/heroImg.png";

export const experienceData = [
    {
        date: "May - September 2023",
        jobTitle: "Software Developer Intern",
        subtitle: "Genesys",
        description: "At Genesys, I led a group of 3 interns to create various pipelines to process and write metrics to Druid for all the event data handled by Genesys Cloud. This led to an increased pipeline run efficiency by 70% and saved significant amounts of costs and resources.",
        icon: "./static_resources/images/genesys.png",
        techStack: ['Python', 'Java', 'AWS', 'Airflow', 'Jenkins', 'Kafka', 'Druid', 'Elasticsearch', 'Datalake'],
        id: 0,
    },
    {
        date: "September 2021 - August 2022",
        jobTitle: "Software & Dev-Ops Engineering Intern",
        subtitle: "TELUS",
        description: "At TELUS, I developed several GitHub actions to move CI/CD operations off of OpenShift & Spinnaker and provide project management automations which increased efficiency by 80%. Created multiple Python and Bash scripts to manage internal pipelines, saving ~100 hours of manual work. Developed a full-take application to show CI/CD through GitHub which helped migrating team 3 weeks worth of work and setup.",
        icon: "./static_resources/images/telus.png",
        techStack: ['Python', 'Java', 'C++', 'Typescript', 'Bash', 'Docker', 'OpenShift', 'Kubernetes', 'Spinnaker', 'Terraform', 'GCP'],
        id: 1,
    },
    {
        date: "June - September 2021",
        jobTitle: "Data & AI Research Assistant",
        subtitle: "McMaster University",
        description: "At McMaster, I developed an algorithm help doctors achieve an optimal schedule to see their patients of varying priorities resulting in a 95% reduction in waiting times. I analyzed and reworked a hospital triaging ML model to improve its projected patient arrivals.",
        icon: "./static_resources/images/mcmaster.png",
        techStack: ['Python', 'Flask', 'SQLAlchemy', 'Tensorflow', 'Keras'],
        id: 2,
    },
    {
        date: "May - June 2021",
        jobTitle: "Teaching Assistant",
        subtitle: "McMaster University",
        description: "At McMaster, I was TA for a Java OOP course where I led tutorials and worked with other TA's to enhance the course. Automated the marking of Assignments and exams for ~100 students using Java and JUnit.",
        icon: "./static_resources/images/mcmaster.png",
        techStack: ['Java', 'JUnit', ],
        id: 3,
    },
];

export const projectData = [
    {
        title: "Oober: Taxi Sharing Service",
        description: "An Android/IOS application allowing ride sharing through an existing network of taxis. The application allows users to offer or request a taxi carpool to a particular destination and matches them with other users going to the same destination. This app optimizes the routes to destinations and allows users to save money and time while also allowing customers to see the carbon emissions that they have saved.",
        icon: './static_resources/images/oober1.svg',
        techStack: ['React Native', 'Firebase', 'Google Maps API', 'NodeJS', 'RestAPI'],
    },
    {
        title: "Hospital Capacity Planning Tool",
        description: "This tool is used to help local Hamilton clinics triage their patients. The tool can simulate a given schedule or it can generate a schedule based on historical data, times that various patients should be seen within, patient priority type waiting list(s), and multipliers (changes the base arrival rate for patient types). The dashboard displays overdue ratios, weekly unused slots, standard deviation of wait times, and the average wait time.",
        icon: './static_resources/images/triage.jpeg',
        techStack: ['Python', 'Flask', 'NumPy', 'Pandas', 'RestAPI', 'TensorFlow', 'Matplotlib'],
    },
    {
        title: "Agriculture Protection Bot",
        description: "This is a machine learning model that identifies preventable agricultural diseases which can increase crop yields by approximately 80%.",
        icon: './static_resources/images/agbot.png',
        techStack: ['Python', 'Linear Regression', 'SVM', 'KNN', 'NumPy', 'Pandas', 'Sklearn', 'Matplotlib'],
    },
    {
        title: "2048",
        description: "This is a 2048 replica desktop game that has been created using the MVC design pattern which uses various data structures and algorithms along with OOP principles.",
        icon: './static_resources/images/2048.jpeg',
        techStack: ['Java', 'JavaFX', 'JUnit'],
    },
    {
        title: "Image Scanner",
        description: "This is a python project that turns an image of a page or receipt and scans it automatically. Unlike traditional phone applications that require you to take a picture of your sheet in a birds-eye view, this program automatically does that so you can just snap a pic and send it into the application.",
        icon: './static_resources/images/scan.png',
        techStack: ['Python', 'OpenCV', 'NumPy', 'Pandas', 'Scikit-learn'],
    },
];

export const skillsData = [
    {
      title: 'Front-End',
      skills: ['ReactJS', 'Javascript', 'HTML', 'CSS', 'TailwindCSS', 'Bootstrap'],
      icon: 'ri-reactjs-fill',
    },
    {
        title: 'Mobile Development',
        skills: ['React Native', 'Kotlin', 'Swift', 'Firebase'],
        icon: 'ri-cellphone-fill',
    },
    {
        title: 'Computer Automation',
        skills: ['Bash', 'Python'],
        icon: 'ri-terminal-box-fill',
    },
    {
        title: 'Back-End',
        skills: ['GCP', 'AWS', 'NodeJS', 'Flask', 'Java', 'SQL', 'PostgreSQL', 'Terraform','Docker', 'Kubernetes', 'OpenShift', 'Spinnaker', 'Jenkins', 'Airflow', 'Kafka', 'Druid', 'Elasticsearch', 'Datalake'],
        icon: 'ri-database-line',
    },
    {
        title: 'Machine Learning',
        skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Linear Regression', 'SVM', 'KNN', 'OpenCV'],
        icon: 'ri-brain-fill',
    },
    {
        title: 'Other',
        skills: ['Git', 'GitHub', 'Jira', 'Confluence', 'Agile', 'Scrum', 'JUnit', 'MVC', 'PAC', 'OOP'],
        icon: 'ri-search-fill',
    }
];
