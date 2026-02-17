import { Monitor, Bot, Cloud, Code2, Smartphone } from 'lucide-react';

export const projects = [
    {
        title: 'E-Commerce Platform Revamp',
        category: 'Web',
        desc: 'Redesigned and replatformed a major retail e-commerce site using Next.js and Shopify, resulting in a 40% increase in conversion and 50% faster load times.',
        tech: ['Next.js', 'Shopify', 'Tailwind', 'Redux'],
        impact: '40% Conversion Boost',
        icon: Monitor
    },
    {
        title: 'College ERP & LMS Suite',
        category: 'Web',
        desc: 'A comprehensive Enterprise Resource Planning and Learning Management System for colleges, streamlining student records, library management, and digital learning.',
        tech: ['React', 'Django', 'PostgreSQL', 'Redis'],
        impact: '50k+ Students Managed',
        icon: Monitor
    },
    {
        title: 'AI Customer Support Bot',
        category: 'AI',
        desc: 'Implemented an intelligent chatbot using OpenAI API to automate level-1 customer support, reducing ticket volume by 60% and improving response time.',
        tech: ['OpenAI', 'Python', 'FastAPI', 'LangChain'],
        impact: '60% Support Automation',
        icon: Bot
    },
    {
        title: 'Cloud ERP Migration',
        category: 'Cloud',
        desc: 'Migrated an on-premise ERP system to AWS cloud, improving scalability and reducing infrastructure costs by 30% through serverless architecture.',
        tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
        impact: '30% Cost Reduction',
        icon: Cloud
    },
    {
        title: 'Intelligent Inventory System',
        category: 'Web',
        desc: 'Built a real-time inventory management system for a global logistics firm, featuring predictive analytics for stock replenishment.',
        tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
        impact: 'Zero Stock-outs',
        icon: Code2
    },
    {
        title: 'Healthcare Patient Portal',
        category: 'Mobile',
        desc: 'A HIPAA-compliant patient management system with tele-consultation features and encrypted medical records storage.',
        tech: ['Flutter', 'Firebase', 'WebRTC', 'AES-256'],
        impact: 'HIPAA Certified',
        icon: Smartphone
    },
    {
        title: 'Web3 Gaming Marketplace',
        category: 'Web',
        desc: 'A high-performance NFT marketplace with real-time bidding, wallet integration (Metamask), and low-gas minting solutions.',
        tech: ['React', 'Solidity', 'Ethers.js', 'Hardhat'],
        impact: '2.5M+ Volume',
        icon: Code2
    },
    {
        title: 'Real-time Analytics Engine',
        category: 'AI',
        desc: 'An AI-powered dashboard processing millions of events per second to provide actionable insights for retail businesses.',
        tech: ['Spark', 'Kafka', 'Python', 'React'],
        impact: 'Real-time Insights',
        icon: Bot
    },
    {
        title: 'Prime Apparel Export Hub',
        category: 'Web',
        desc: 'A high-scale export management and manufacturing portal for Prime Apparel, optimizing international wholesale distribution and production workflows.',
        tech: ['Next.js', 'PostgreSQL', 'Cloudflare', 'Redux'],
        impact: '3x Operational Scale',
        icon: Monitor
    }
];

export const categories = ['All', 'Web', 'Mobile', 'AI', 'Cloud'];

export const testimonials = [
    { text: "Their engineering team delivered our ERP platform ahead of schedule with outstanding quality and precision.", author: "Prime Apparel Exporter, Wholesale Garments" },
    { text: "Highly reliable partner for AI and cloud-based product development. Their innovation is top-notch.", author: "Product Head, SaaS Startup" },
    { text: "We modernized our legacy systems seamlessly with SGS Codeworks. Exceptional expertise.", author: "Director of IT, FinTech Firm" },
];
