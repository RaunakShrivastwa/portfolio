import {
  Book,
  Database,
  Film,
  Globe,
  Phone,
  Server,
  Sliders,
} from "lucide-react";
import {
  Airplay,
  Facebook,
  Figma,
  GitHub,
  Instagram,
  Linkedin,
  Video,
} from "react-feather";

const aboutMe = {
  heading: "Why",
  title: "Choose Me as Your Web Development Partner",
  summary: `I bring a strong technical foundation and innovative 
    approach to every project. I specialize in delivering tailored solutions using cutting-edge tools like the MERN stack, 
    ensuring your website is scalable, efficient, and aligned with your goals. With a commitment to creating seamless user 
    experiences and on-time delivery, I focus on turning your ideas into impactful digital solutions. My passion for excellence 
    and dedication to ongoing support ensures that your digital presence not only stands out but thrives. Let’s work together to 
    make your vision a reality!`.trim(),
};

const about = {
  title: "Crafting Websites That Empower Your Vision",
  summary: `
    "I am graduate with a passion for modern web technologies and innovative solutions. With expertise in the MERN 
    stack and other cutting-edge tools, I specialize in creating websites that are scalable, efficient, and tailored to your unique
     needs. From portfolios to e-commerce platforms, I focus on turning ideas into impactful digital experiences. My approach 
     emphasizes seamless user experiences, modern designs, and optimized performance. I am dedicated to delivering projects on 
     time while providing reliable ongoing support. With a strong foundation in technology and a commitment to excellence, I strive 
     to help your digital presence stand out. Let’s collaborate to bring your vision to life!
  `.trim(),
};

const served = [
  {
    Image: "./images/ecart.jpg",
    tips: "we work for E-commerce",
  },
  {
    Image: "./images/edit.jpg",
    tips: "we work for Edditing (Video,Images,Logo,banner,Thumbnail)",
  },
  {
    Image: "./images/edu.jpg",
    tips: "we work for Education",
  },
  {
    Image: "./images/gym.jpg",
    tips: "we work for Gym",
  },
  {
    Image: "./images/health.jpg",
    tips: "we work for Health or Hospital",
  },
  {
    Image: "./images/music.jpg",
    tips: "we work for Music",
  },
  {
    Image: "./images/sport.jpg",
    tips: "we work for Sports",
  },
  {
    Image: "./images/edu.jpg",
    tips: "we work for Education",
  },
];

const blogs = [
  {
    title: "How to Get Started as a Freelance Web Developer",
    aboutBlog:
      "Learn the essential steps to kickstart your freelancing career as a web developer. From setting up your portfolio to finding your first clients, this blog covers it all.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Top 10 Skills Every Freelance Web Developer Needs in 2025",
    aboutBlog:
      "Discover the most in-demand skills for web developers, including frameworks, tools, and soft skills to thrive in the freelancing world.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Effective Ways to Build a Winning Portfolio",
    aboutBlog:
      "A step-by-step guide to creating a portfolio that attracts high-paying clients. Showcase your skills and stand out from the competition.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "How to Price Your Web Development Services",
    aboutBlog:
      "Learn how to set competitive and profitable rates for your freelance web development projects without underselling yourself.",
    image:
      "https://blog.oziconnect.com/wp-content/uploads/2023/12/How-to-price-your-web-design-and-development-services-oziconnect.jpg",
  },
  {
    title: "Managing Clients: Tips for Freelance Web Developers",
    aboutBlog:
      "Master the art of client communication, setting expectations, and maintaining long-term relationships to ensure a steady stream of projects.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Best Platforms to Find Freelance Web Development Projects",
    aboutBlog:
      "Explore the top freelancing platforms and networks to land consistent projects and grow your business.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Balancing Work and Life as a Freelance Web Developer",
    aboutBlog:
      "Tips and strategies to manage your time, avoid burnout, and achieve a healthy work-life balance in freelancing.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "The Future of Freelance Web Development",
    aboutBlog:
      "Get insights into the trends and technologies shaping the future of web development and how freelancers can stay ahead of the curve.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "We create responsive websites using cutting-edge technologies.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Professional video editing services for all your multimedia needs.",
  },
  {
    icon: Airplay,
    title: "API Services",
    description: "Robust and scalable API solutions for seamless integration.",
  },
  {
    icon: Figma,
    title: "UI Design",
    description: "Intuitive and visually appealing user interface designs.",
  },
  {
    icon: Book,
    title: "Courses",
    description:
      "Educational courses to enhance your skills in various technologies.",
  },
];

const teamMembers = [
  {
    name: "Shubham Shrivastwa",
    role: "Fullstack Developer",
    experience: "4 Years",
    avtar:
      "https://media.licdn.com/dms/image/v2/D4D03AQFs9JSnLC_o2g/profile-displayphoto-shrink_400_400/B4DZRyjYTfHYAk-/0/1737088670945?e=1742428800&v=beta&t=27DeZfqzJGHpy07AhS6MbJa6Ph-_hbK3PwEhoHkedbQ",
    background:
      "Expertise in modern web technologies, delivering innovative and scalable web solutions.",
    socialLinks: [
      {
        icon: <Linkedin size={20} />,
        url: "https://www.linkedin.com/in/shubham-shrivastwa/",
      },
      {
        icon: <GitHub size={20} />,
        url: "https://github.com/RaunakShrivastwa",
      },
      {
        icon: <Facebook size={20} />,
        url: "https://www.facebook.com/shubham.shrivastwa.16",
      },

      {
        icon: <Instagram size={20} />,
        url: "https://www.instagram.com/ks_shubham31/",
      },
      {
        icon: <Phone size={20} />,
        url: "9508840645",
      },
    ],
  },

  {
    name: "Abhijeet Kumar",
    role: "Fullstack Developer",
    experience: "3 Years",
    avtar:
      "https://media.licdn.com/dms/image/v2/D4D03AQFQ2CGeYJT4_A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1687675824971?e=1742428800&v=beta&t=xEf89Je-ojZ_jJEgb2YmygCLvoFbkS5W6ATKXMTphPk",
    background:
      "Graduate with expertise in modern web technologies, delivering innovative and scalable web solutions.",
    socialLinks: [
      {
        icon: <Linkedin size={20} />,
        url: "https://www.linkedin.com/in/java-abhijeet/",
      },
      {
        icon: <GitHub size={20} />,
        url: "https://github.com/abhijeet2532002",
      },
      {
        icon: <Facebook size={20} />,
        url: "*",
      },

      {
        icon: <Instagram size={20} />,
        url: "*",
      },
      {
        icon: <Phone size={20} />,
        url: "*",
      },
    ],
  },

  {
    name: "Satyam Kumar",
    role: "Frontend Developer",
    experience: "4 Years",
    avtar:
      "https://media.licdn.com/dms/image/v2/C5603AQFjGiY5wbXSqQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1642685318968?e=1742428800&v=beta&t=gLciLv8PS4IYmzNDOcIlPVNjNeME5YBZ1E9bPUOgX28",
    background: "B.tech Computer Science",
    socialLinks: [
      {
        icon: <Linkedin size={20} />,
        url: "https://www.linkedin.com/in/satyam-tripathi-5111a4194/",
      },
      {
        icon: <GitHub size={20} />,
        url: "https://github.com/st17931",
      },
      {
        icon: <Facebook size={20} />,
        url: "*",
      },

      {
        icon: <Instagram size={20} />,
        url: "*",
      },
      {
        icon: <Phone size={20} />,
        url: "6387651169",
      },
    ],
  },
];

const service = [
  {
    title: "React Development",
    description: `Looking for a highly responsive, modern, and dynamic website or web application? My React development service is tailored to meet your needs and deliver exceptional results. React, a leading JavaScript library, is known for creating interactive and high-performance user interfaces. As a specialist in React development, I use its full potential to build scalable, fast, and feature-rich applications that stand out.

Whether you need a single-page application (SPA) or a more complex solution, I ensure a seamless development process from start to finish. My expertise in React includes state management using tools like Redux or Context API, optimized rendering with hooks, and seamless integration with back-end systems.

I focus on creating reusable components and clean code, ensuring that your application is easy to maintain and scale as your business grows. By leveraging React's modular nature, I deliver applications with faster load times, excellent user experiences, and robust performance.

Every project begins with a detailed understanding of your vision and requirements, ensuring that the final product aligns perfectly with your goals. I also provide ongoing support to keep your application running smoothly and efficiently.

Whether you're a business looking to improve your digital presence or a startup ready to launch your big idea, my React development service offers the tools and expertise you need to succeed. Let’s work together to turn your vision into reality with the power of React!`,
    icon: <Globe size={24} />,
    color: "info",
    image: "/react.jpg",
  },

  {
    title: "Spring Boot Development",
    description: `Are you looking for robust, secure, and scalable back-end solutions for your web or mobile applications? My Spring Boot development service is designed to provide high-performance, enterprise-grade applications tailored to your needs. Spring Boot, a powerful Java framework, simplifies the development process while ensuring flexibility and reliability.

I specialize in creating RESTful APIs, microservices architectures, and full-stack solutions using Spring Boot. By leveraging its features like built-in dependency management, auto-configuration, and seamless integration with databases, I ensure that your application is efficient, secure, and easy to scale.

From designing the architecture to deployment, I follow a structured approach to deliver back-end systems that align with your project goals. With experience in integrating third-party APIs, implementing authentication and authorization (OAuth2, JWT), and optimizing database performance, I ensure that every component of your application works seamlessly.

My solutions are built with future growth in mind, offering easy maintainability and adaptability to evolving business needs. Whether you need a cloud-based solution or an on-premise application, I utilize the best practices of Spring Boot and Java to create a product that excels in performance and reliability.

Every project begins with a detailed consultation to understand your unique requirements, followed by tailored development and continuous support to ensure long-term success. Let’s work together to build a robust foundation for your application with Spring Boot!`,
    icon: <Server size={24} />,
    color: "success",
    image: "/spring.png",
  },
  {
    title: "Node.js Development",
    description: `Looking for fast, scalable, and efficient back-end solutions for your web or mobile applications? My Node.js development service offers cutting-edge solutions tailored to your business needs. Node.js, a powerful JavaScript runtime, enables the development of high-performance applications capable of handling real-time data and heavy traffic with ease.

I specialize in creating RESTful APIs, real-time applications, and full-stack solutions using Node.js. With expertise in frameworks like Express.js and tools like Socket.io, I build back-end systems that are lightweight, robust, and scalable. Whether it’s a simple application or a complex architecture, I design solutions that ensure speed, security, and reliability.

By leveraging the asynchronous nature of Node.js, I deliver applications with faster response times and seamless performance. My services also include database integration (MongoDB, MySQL, PostgreSQL), API development, and microservices architecture for scalable and maintainable applications.

Every project starts with understanding your unique requirements, followed by designing a tailored solution that aligns with your goals. I ensure clean and reusable code, making it easier to maintain and enhance your application as your business grows.

From startups to established enterprises, my Node.js development service is perfect for building dynamic, modern applications that can handle today’s demanding user expectations. Let’s collaborate to create a back-end solution that powers your application efficiently and effectively!`,
    icon: <Sliders size={24} />,
    color: "primary",
    image: "/node.jpg",
  },
  {
    title: "App Development",
    description: `Unlock the potential of mobile technology with custom mobile app development designed to meet your unique needs. I specialize in creating high-quality, user-friendly applications for both iOS and Android platforms, ensuring seamless performance and exceptional user experiences.

Using cutting-edge technologies like React Native, Flutter, and Swift, I develop scalable and feature-rich apps tailored to your business objectives. Whether you need an e-commerce app, social networking platform, or utility-based solution, I ensure your app is optimized for functionality, speed, and aesthetics.

My services include end-to-end mobile app development, starting with concept design, prototyping, and UI/UX development, followed by coding, testing, and deployment. I also integrate essential features like payment gateways, notifications, analytics, and cloud-based services to enhance your app's functionality.

Security and performance are my top priorities, ensuring your app is robust and capable of handling increasing user demands. Additionally, I provide post-launch maintenance and updates to ensure your app remains relevant and effective as your business grows.

Let’s bring your vision to life with a mobile app that engages users, drives growth, and stands out in the competitive mobile landscape!`,
    icon: <Film size={24} />,
    color: "dark",
    image: "/app.jpg",
  },
  {
    title: "API Integration",
    description: `Seamless data flow and connectivity are crucial for modern applications. My API integration service ensures that your systems, applications, and third-party services work together effortlessly. Whether you need to integrate payment gateways, social media APIs, or custom APIs, I deliver reliable, secure, and efficient solutions tailored to your needs.

With expertise in RESTful and GraphQL APIs, I enable smooth communication between your application and external services, ensuring real-time data synchronization and optimal performance. My experience covers integrating various APIs, including payment systems (Stripe, PayPal), cloud services (AWS, Google Cloud), and third-party tools like CRM, ERP, and marketing platforms.

I focus on delivering robust solutions by following best practices for authentication (OAuth2, API keys, JWT), error handling, and scalability. Whether it's integrating with an existing system or building a custom API for your application, I ensure a seamless experience from planning to deployment.

My approach begins with understanding your specific requirements and then crafting an integration strategy that aligns with your goals. I also provide documentation and ongoing support to ensure your integrations remain reliable and up-to-date as your business evolves.

Unlock the full potential of your application with my API integration service. Let’s connect your systems and streamline your processes for better efficiency and performance!`,
    icon: <Globe size={24} />,
    color: "secondary",
    image: "/api.jpg",
  },
  {
    title: "Database Management",
    description: `Efficient and well-structured databases are the backbone of any successful application. My database development and management service ensures your data is securely stored, easily accessible, and optimized for performance. Whether you need a new database designed from scratch, optimization of an existing system, or seamless integration with your application, I deliver tailored solutions to meet your requirements.

I specialize in working with both SQL and NoSQL databases, including MySQL, PostgreSQL, MongoDB, and SQLite. From designing relational schemas to implementing flexible, document-based structures, I ensure your database is scalable, reliable, and suited to your application's needs.

My services include database design, optimization, query performance tuning, backup and recovery strategies, and data migration. I follow industry best practices to maintain data integrity, ensure security, and optimize performance under varying workloads.

Whether you're managing large-scale enterprise data or handling a dynamic startup application, I provide solutions that grow with your business. I also offer support for cloud-based database systems such as AWS RDS, Azure Cosmos DB, and Firebase to enhance flexibility and accessibility.

Every project begins with a thorough analysis of your data requirements to create a database that supports your application’s goals effectively. Let’s work together to build a robust and efficient data management system that powers your application seamlessly!`,
    icon: <Database size={24} />,
    color: "danger",
    image: "/db.png",
  },
  {
    title: "Video Editing",
    description: `Bring your ideas to life with professional video editing that captivates and engages your audience. My video editing service is tailored to enhance the storytelling of your content, whether it's for promotional videos, YouTube channels, social media, or personal projects.

With expertise in tools like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve, I deliver polished videos with seamless transitions, dynamic effects, and color grading that elevate your visuals. From cutting and trimming to adding motion graphics, text overlays, and sound design, I focus on creating videos that align with your vision and branding.

I specialize in various formats, including corporate videos, product demos, event highlights, tutorials, and vlogs. Each project is handled with attention to detail, ensuring smooth pacing, high-quality visuals, and professional audio.

My process begins with understanding your goals and style preferences, followed by meticulous editing to create a final product that exceeds expectations. Whether you need short clips for social media or long-form content, I ensure timely delivery and revisions to achieve your desired outcome.

Let’s collaborate to transform your raw footage into engaging and impactful videos that leave a lasting impression on your audience!`,
    icon: <Film size={24} />,
    color: "dark",
    image: "/edit.jpg",
  },
];

const projects = [
  {
    image:
      "https://res.cloudinary.com/dnk5iqeup/image/upload/v1737916300/hniqhequowfbfsv4ur7u.png",
    name: "Feedocenter",
    url: "https://feedocenter.com",
    github: "",
    desc: "Discover new friends nearby with shared interests! Our MERN-based platform connects you to like-minded people in your area, making it easy to build genuine friendships. Join now and start connecting today!",
  },
  {
    image:
      "https://res.cloudinary.com/dnk5iqeup/image/upload/v1737916302/c0wimjmm9b9qa7fwywv4.png",
    name: "OurNinjas",
    url: "https://ninjasteam.vercel.app/",
    desc: "OurNinjas is an interactive teaching portal designed to empower learners with engaging lessons and resources. Connect, learn, and grow with a platform tailored for effective education. Start your learning journey with us today!",
  },
  {
    image:
      "https://res.cloudinary.com/dnk5iqeup/image/upload/v1737916301/qx47q7j64r0hgukw7gis.png",
    name: "GPT",
    url: "https://gpt-eight-beige.vercel.app/",
    desc: "Developing a conversational AI inspired by ChatGPT, designed for real-time, context-aware interactions. Aiming to provide seamless communication for diverse applications.",
  },
  {
    image:
      "https://res.cloudinary.com/dnk5iqeup/image/upload/v1737916301/wmbavqxmerqjhfwvx4ns.png",
    name: "Health Plus+",
    url: "https://alkaison.github.io/Health-Plus/",
    desc: "Health Plus is a comprehensive healthcare platform designed to connect users with medical services, wellness resources, and personalized health insights. Offering easy appointment booking, expert consultations, and health tracking, it empowers users to take charge of their well-being conveniently and efficiently.",
  },
  {
    image:
      "https://res.cloudinary.com/dnk5iqeup/image/upload/v1737916299/vcrysfovuoiwh9lpfrah.png",
    name: "E-Commerce",
    url: "https://e-commerce-mansy.vercel.app/",
    desc: "An innovative e-commerce platform offering a seamless shopping experience with a wide range of products, user-friendly navigation, secure payments, and fast delivery. Designed to make online shopping convenient, reliable, and enjoyable for everyone.",
  },
];

const apiService = [
  {
    title: "OurNinjas API Services",
    desc: "I have developed APIs for a teaching platform, enabling course management, user authentication, and content delivery. These APIs ensure a seamless learning experience with secure access and efficient data handling.",
    image:
      "https://res.cloudinary.com/dnk5iqeup/image/upload/v1738440492/zhpdbwkau281quwjccz2.png",
    url: "https://documenter.getpostman.com/view/39299456/2sAYX3qibR",
  },
  {
    title: "E-Commerce API",
    desc: "APIs for an e-commerce platform, enabling seamless product management, user authentication, and order processing. These APIs ensure secure transactions, efficient inventory handling, and a smooth shopping experience",
    image:
      "https://res.cloudinary.com/dnk5iqeup/image/upload/v1738444281/yilaug3fiwpyuuimlkis.png",
    url: "https://documenter.getpostman.com/view/39299456/2sAYX3qibR",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export {
  aboutMe,
  about,
  served,
  blogs,
  services,
  teamMembers,
  service,
  projects,
  apiService,
};
