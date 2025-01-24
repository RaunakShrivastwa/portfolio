import React, { useState } from 'react';
import './Roadmap.scss';

const stages = [
    {
        id: 'goal',
        title: 'Goal',
        description: `
         The primary goal of this project is to deliver a user-friendly and fully functional platform that meets both user needs and business objectives. This platform will enhance customer engagement and support the future growth of the business. The goal is broken down into the following key objectives:
        `,
        icon: '🎯'
    },
    {
        id: 'planings',
        title: 'Planings',
        description: `
        Planning is a critical phase to ensure that all aspects of the project are laid out clearly and executed efficiently. Proper planning can prevent delays and ensure smooth operations during the development cycle.

        Key Objectives:
        - **Project Roadmap**: Define all project milestones and timelines.
        - **Risk Management**: Identify potential risks and prepare contingency plans.
        - **Resource Allocation**: Ensure proper allocation of resources such as time, manpower, and tools.
        - **Collaborative Approach**: Align all teams and stakeholders to maintain seamless communication.
        `,
        icon: '📝'
    },
    {
        id: 'domain',
        title: 'Domain',
        description: `
        Selecting the right domain is pivotal to establishing a strong online presence. The domain should resonate with the brand's identity and be easy for users to remember and access.

        Key Considerations:
        - **Brand Identity**: The domain name should reflect your brand and be recognizable.
        - **SEO Impact**: A well-chosen domain can positively affect your SEO efforts.
        - **TLD Selection**: The top-level domain (.com, .org, etc.) should align with your business goals and global reach.
        `,
        icon: '🌐'
    },
    {
        id: 'design',
        title: 'Design',
        description: `
        Design is not just about aesthetics; it’s about usability and functionality. A great design ensures that users have a seamless experience, encouraging engagement and satisfaction.

        Key Objectives:
        - **User Experience (UX)**: Create a design that is easy to navigate and offers a satisfying experience to users.
        - **Responsive Design**: Ensure the website looks great on all devices, from mobile to desktop.
        - **Visual Appeal**: The design should be modern, clean, and aligned with the brand’s identity.
        `,
        icon: '🎨'
    },
    {
        id: 'techstack',
        title: 'Tech Stack',
        description: `
        The choice of technologies is crucial in ensuring that the platform is scalable, secure, and efficient. The right tech stack supports rapid development and future upgrades.

        Key Components:
        - **Frontend Frameworks**: Select efficient frameworks (like React, Vue) for fast and interactive user interfaces.
        - **Backend Technologies**: Choose scalable and secure server-side technologies (Node.js, Django).
        - **Database Management**: Implement reliable and scalable databases (MongoDB, MySQL).
        `,
        icon: '🔧'
    },
    {
        id: 'coding',
        title: 'Coding',
        description: `
        Coding is the backbone of the project. Clean, efficient, and well-documented code ensures that the platform runs smoothly and is easy to maintain.

        Key Principles:
        - **Code Quality**: Write clean, maintainable, and efficient code.
        - **Best Practices**: Follow industry best practices for development (DRY, KISS).
        - **Version Control**: Use Git for proper versioning and collaboration.
        `,
        icon: '💻'
    },
    {
        id: 'seo',
        title: 'SEO',
        description: `
        SEO (Search Engine Optimization) ensures that your platform is visible to your target audience through organic search. Implementing best SEO practices helps in improving your rankings on search engines.

        Key Strategies:
        - **On-Page Optimization**: Optimize meta tags, headings, and content for keywords.
        - **Technical SEO**: Ensure fast load times, mobile-friendliness, and proper URL structures.
        - **Content Strategy**: Create high-quality, relevant content to improve search rankings.
        `,
        icon: '🔍'
    },
    {
        id: 'testing',
        title: 'Testing',
        description: `
        Thorough testing ensures that your platform is bug-free, secure, and ready to launch. Testing covers all aspects of the application to ensure it functions as expected.

        Key Areas:
        - **Unit Testing**: Test individual components for functionality.
        - **Integration Testing**: Ensure that all systems and modules work together.
        - **User Testing**: Conduct user tests to ensure a positive experience.
        `,
        icon: '⚙️'
    },
    {
        id: 'launch',
        title: 'Launch',
        description: `
        The launch is the culmination of all efforts. It’s not just about going live but ensuring that all components are ready and optimized for the big day.

        Key Actions:
        - **Deployment**: Ensure a seamless deployment to production.
        - **Monitoring**: Set up monitoring tools to track performance and issues.
        - **Marketing**: Plan a launch strategy to attract users and generate buzz.
        `,
        icon: '🚀'
    },
    {
        id: 'maintains',
        title: 'Maintains',
        description: `
        Maintenance is crucial to ensure the longevity and performance of the platform. Regular updates and monitoring ensure that the platform runs smoothly without issues.

        Key Tasks:
        - **Bug Fixes**: Address bugs and issues that arise post-launch.
        - **Updates**: Roll out updates and new features to keep the platform relevant.
        - **Security**: Regularly update security protocols to safeguard the platform.
        `,
        icon: '🔄'
    },
];

const Roadmap = () => {
    const [activeTab, setActiveTab] = useState('goal');

    return (
        <div className="roadmap m-0">
            <h1 className='container h_text mt-lg-0 mt-5'>Streamlined Success: Key Steps in Our SDLC Journey</h1>
            <div className='container-lg roadmap1 d-flex justify-content-center align-items-center'>
                <div className="roadmap-sidebar custome_radius container box_shadow">
                    {stages.map((stage) => (
                        <div
                            key={stage.id}
                            className={`tab f20 ${activeTab === stage.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(stage.id)}
                        >
                            {stage.icon} {stage.title}
                        </div>
                    ))}
                </div>
                <div className="roadmap-content custome_radius">
                    {stages.map((stage) => (
                        <div
                            key={stage.id}
                            className={`content ${activeTab === stage.id ? 'active' : ''}`}
                        >
                            <h2>{stage.title}</h2>
                            <p>{stage.description}</p>
                            <ul>
                                <li>
                                    <strong className='fw-bold'>1. User-Centric Design:</strong>
                                    <p className='f12'>Ensure a seamless and intuitive user experience (UX) across all devices by implementing responsive design principles. The interface should be clean, modern, and easy to navigate, providing users with the information or services they need without unnecessary friction. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis dignissimos saepe molestias libero dolor debitis rerum, ea, minima laudantium voluptatum, quod ex ratione nam numquam error odit iste. Quas magnam nisi nobis nesciunt? Necessitatibus, unde voluptatibus? Voluptatibus, cupiditate. Nemo, id rem necessitatibus assumenda quo repellendus corrupti labore porro quis quidem cum doloribus animi inventore exercitationem officia eos excepturi consequatur autem quae totam blanditiis reprehenderit. Nesciunt hic numquam, similique eveniet totam ut modi facere nostrum sapiente voluptates aliquid debitis exercitationem commodi error. Tenetur recusandae eum distinctio quas debitis, vero, corrupti ipsa voluptatum libero ab fuga consequatur veniam, quo excepturi aliquid? </p>
                                </li>
                                <li>
                                    <strong className='fw-bold'>1. User-Centric Design:</strong>
                                    <p className='f28'>Ensure a seamless and intuitive user experience (UX) across all devices by implementing responsive design principles. The interface should be clean, modern, and easy to navigate, providing users with the information or services they need without unnecessary friction.</p>
                                </li>
                                <li>
                                    <strong className='fw-bold'>1. User-Centric Design:</strong>
                                    <p className='f28'>Ensure a seamless and intuitive user experience (UX) across all devices by implementing responsive design principles. The interface should be clean, modern, and easy to navigate, providing users with the information or services they need without unnecessary friction.</p>
                                </li>
                                
                            </ul>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
