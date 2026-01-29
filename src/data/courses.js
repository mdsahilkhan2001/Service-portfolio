import {
    Code2, Terminal, Brain, Cloud, Database, BarChart
} from 'lucide-react';

export const courses = [
    {
        id: 'full-stack-mern',
        title: 'Full Stack Web Development (MERN)',
        icon: Code2,
        shortDesc: 'Master MongoDB, Express, React, and Node.js. Build dynamic, responsive web applications from scratch.',
        description: 'Become a complete web developer capable of building complex, scalable applications. This comprehensive course covers the entire MERN stack, from frontend interfaces with React to backend APIs with Node.js and database management with MongoDB.',
        details: {
            duration: '6 Months',
            mode: 'Online / Hybrid',
            level: 'Beginner to Advanced',
            syllabus: [
                {
                    module: 'Frontend Foundations',
                    topics: ['HTML5 & Semantic Web', 'CSS3, Flexbox & Grid', 'JavaScript ES6+', 'Responsive Design']
                },
                {
                    module: 'React.js Mastery',
                    topics: ['Components & Props', 'Hooks (useState, useEffect)', 'State Management (Redux/Context)', 'React Router']
                },
                {
                    module: 'Backend with Node.js',
                    topics: ['Node.js Runtime', 'Express.js Framework', 'RESTful API Design', 'Authentication (JWT)']
                },
                {
                    module: 'Database & Deployment',
                    topics: ['MongoDB Schema Design', 'Mongoose ODM', 'Deployment (Vercel/Heroku)', 'CI/CD Basics']
                }
            ],
            outcomes: [
                'Build 3+ Real-world Projects',
                'Master Asynchronous JavaScript',
                'Create Secure Authentication Systems',
                'Job-ready Portfolio'
            ]
        }
    },
    {
        id: 'ai-machine-learning',
        title: 'AI & Machine Learning',
        icon: Brain,
        shortDesc: 'Deep dive into Python, TensorFlow, and PyTorch. Build smart agents and predictive models.',
        description: 'Step into the future with our AI & ML specialization. Learn to build intelligent systems that can learn from data, make predictions, and understand natural language.',
        details: {
            duration: '5 Months',
            mode: 'Online',
            level: 'Intermediate',
            syllabus: [
                {
                    module: 'Python for Data Science',
                    topics: ['NumPy & Pandas', 'Data Visualization (Matplotlib)', 'Exploratory Data Analysis']
                },
                {
                    module: 'Machine Learning Algorithms',
                    topics: ['Regression & Classification', 'Decision Trees & Random Forests', 'Clustering (K-Means)', 'Model Evaluation']
                },
                {
                    module: 'Deep Learning',
                    topics: ['Neural Networks Basics', 'TensorFlow & Keras', 'CNNs for Image Processing', 'RNNs for Sequence Data']
                },
                {
                    module: 'Generative AI',
                    topics: ['LLM Basics', 'Prompt Engineering', 'Integrating OpenAI API', 'Building Chatbots']
                }
            ],
            outcomes: [
                'Predictive Market Analysis Model',
                'Image Recognition App',
                'Custom AI Chatbot',
                'TensorFlow Developer Certification Prep'
            ]
        }
    },
    {
        id: 'devops-cloud',
        title: 'DevOps & Cloud Engineering',
        icon: Cloud,
        shortDesc: 'Learn CI/CD pipelines, Docker, Kubernetes, and AWS/Azure cloud infrastructure.',
        description: 'Bridge the gap between development and operations. Master the tools and practices required to deploy, scale, and monitor modern software applications in the cloud.',
        details: {
            duration: '4 Months',
            mode: 'Online',
            level: 'Advanced',
            syllabus: [
                {
                    module: 'DevOps Fundamentals',
                    topics: ['Linux Administration', 'Shell Scripting', 'Git & Version Control', 'Networking Basics']
                },
                {
                    module: 'Containerization',
                    topics: ['Docker Fundamentals', 'Creating Dockerfiles', 'Docker Compose', 'Container Security']
                },
                {
                    module: 'Orchestration & CI/CD',
                    topics: ['Kubernetes Architecture', 'Deploying Ops', 'Jenkins/GitHub Actions', 'Automated Testing']
                },
                {
                    module: 'Cloud Infrastructure (AWS)',
                    topics: ['EC2 & S3', 'IAM Security', 'VPC Networking', 'Terraform (IaC)']
                }
            ],
            outcomes: [
                'Automated Deployment Pipelines',
                'Scalable Microservices Architecture',
                'Cloud Security Best Practices',
                'AWS Content Practitioner Prep'
            ]
        }
    },
    {
        id: 'python-development',
        title: 'Python Development',
        icon: Terminal,
        shortDesc: 'From scripting to advanced backend systems. Master the most versatile language in the industry.',
        description: 'Unlock the power of Python. Whether for web development, automation, or data analysis, this course covers the versatile applications of the world\'s most popular language.',
        details: {
            duration: '3 Months',
            mode: 'Online',
            level: 'Beginner',
            syllabus: [
                {
                    module: 'Core Python',
                    topics: ['Syntax & Data Structures', 'OOP Concepts', 'Modules & Packages', 'File Handling']
                },
                {
                    module: 'Web Development (Django)',
                    topics: ['MVC Architecture', 'Django ORM', 'Template System', 'Admin Interface']
                },
                {
                    module: 'API Development (FastAPI)',
                    topics: ['Building Async APIs', 'Pydantic Models', 'Swagger UI', 'Dependency Injection']
                },
                {
                    module: 'Automation Scripting',
                    topics: ['Web Scraping (BeautifulSoup)', 'Task Automation', 'Working with Excel/PDFs']
                }
            ],
            outcomes: [
                'Robust Backend APIs',
                'Automated Data Scrapers',
                'Full-featured Django Web App',
                'Clean Code Practices'
            ]
        }
    },
    {
        id: 'data-analytics',
        title: 'Data Analytics',
        icon: BarChart,
        shortDesc: 'Transform raw data into actionable insights using SQL, PowerBI, and classic statistical methods.',
        description: 'In the age of information, data is the new oil. Learn to extract, clean, visualize, and interpret data to drive strategic business decisions.',
        details: {
            duration: '4 Months',
            mode: 'Online',
            level: 'Beginner to Intermediate',
            syllabus: [
                {
                    module: 'Excel & Statistics',
                    topics: ['Advanced Excel Formulas', 'Pivot Tables', 'Descriptive Statistics', 'Probability Basics']
                },
                {
                    module: 'SQL for Data Analysis',
                    topics: ['Relational Databases', 'Complex Joins', 'Subqueries', 'Data Cleaning']
                },
                {
                    module: 'Data Visualization',
                    topics: ['PowerBI Dashboard Design', 'DAX Measures', 'Tableau Basics', 'Storytelling with Data']
                },
                {
                    module: 'Business Intelligence',
                    topics: ['KPI Tracking', 'Market Analysis', 'Reporting Automation', 'Stakeholder Presentation']
                }
            ],
            outcomes: [
                'Interactive Business Dashboards',
                'Complex SQL Queries for Reporting',
                'Data-Driven Strategy Reports',
                'Portfolio of Case Studies'
            ]
        }
    },
    {
        id: 'backend-engineering',
        title: 'Backend Engineering',
        icon: Database,
        shortDesc: 'Design scalable APIs and database architectures. Focus on performance and security.',
        description: 'Deep dive into the server-side. Learn to build the invisible but critical logic that powers modern applications, focusing on performance, scalability, and security.',
        details: {
            duration: '5 Months',
            mode: 'Online',
            level: 'Advanced',
            syllabus: [
                {
                    module: 'System Design',
                    topics: ['Load Balancing', 'Caching Strategies', 'Microservices', 'Message Queues']
                },
                {
                    module: 'Database Engineering',
                    topics: ['SQL vs NoSQL', 'Indexing & Optimization', 'Transactions (ACID)', 'Sharding Basics']
                },
                {
                    module: 'Language Mastery (Go/Java)',
                    topics: ['Concurrency Models', 'Memory Management', 'Strong Typing', 'Performance Profiling']
                },
                {
                    module: 'Security',
                    topics: ['OAuth2 & OIDC', 'Rate Limiting', 'OWASP Top 10', 'Data Encryption']
                }
            ],
            outcomes: [
                'High-Performance Microservices',
                'Secure Authentication Server',
                'Optimized Database Schemas',
                'System Design Interview Prep'
            ]
        }
    }
];
