/**
 * Portfolio content — edit this file to update the website.
 * See README.md → "Updating content" for how to publish changes.
 */

export const portfolioData = {
  hero: {
    fullName: "Ananya C G",
    role: "Sustainability & Finance Professional | ESG Analyst",
    subtitle:
      "MBA graduate with expertise in sustainability management and financial modeling. Passionate about building scalable solutions for environmental impact and corporate ESG strategy.",
    profileImage: "/ananya_pfp.jpg",
    cta: {
      primary: { label: "Get In Touch", href: "mailto:ananya2girish@gmail.com" },
      secondary: { label: "Resume", href: "/resume.pdf" },
    },
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    heading: "Professional Journey",
    subheading:
      "From agriculture to sustainability: Building a career in ESG and climate finance",
    summary:
      "MBA graduate in Sustainability Management with a strong foundation in Agricultural Marketing. Specialized experience in ESG data management, financial modeling for renewable energy projects, and building scalable solutions for environmental impact. Proven expertise in conducting gap assessments, developing carbon reduction strategies, and translating complex sustainability frameworks into actionable business initiatives.",
  },
  education: {
    heading: "Education",
    qualifications: [
      {
        id: 1,
        institution: "TERI School Of Advanced Studies",
        location: "New Delhi",
        degree: "Master of Business Administration (Sustainability Management)",
        specialization: "Finance",
        gpa: "8.02 SGPA",
        period: "2024 - 2026",
      },
      {
        id: 2,
        institution: "College of Agriculture, UAS",
        location: "Bangalore",
        degree: "B.Sc. (Hons) Agricultural Marketing and Co-operation",
        gpa: "8.736 CGPA",
        period: "2019 - 2023",
      },
    ],
  },
  experience: {
    heading: "Experience",
    subheading: "Driving sustainability transformation across industries",
    positions: [
      {
        id: 1,
        role: "Sustainability Intern",
        company: "Amara Raja Group",
        period: "Jan 2026 - Present",
        location: "Hyderabad, Telangana",
        description: "Leading ESG data management and sustainability initiatives",
        achievements: [
          "Conducted Eco Vadis and CDP gap assessments, performing ESG data validation, quality checks, and gap analysis to strengthen reporting accuracy and compliance readiness",
          "Built a custom Employee Water Footprint Calculator from scratch using HTML, CSS, and JavaScript to help employees understand and reduce their individual water usage, supporting the company's broader water stewardship goals",
        ],
      },
      {
        id: 2,
        role: "Energy Intern",
        company: "Jindal Stainless Limited (JSL)",
        period: "Jun 2025 - Aug 2025",
        location: "Gurugram, Haryana",
        description: "Focused on decarbonization and renewable energy integration strategies",
        achievements: [
          "Evaluated technical and economic feasibility of 125 MW coal gasification plant, including technology mapping, material/energy balances, and 30-year CAPEX/OPEX modeling and LCOE Benchmarking, projected to reduce Scope 2 emissions by ~20-25%",
          "Developed CAPEX scenarios for green hydrogen integration in steelmaking, analyzing imported/domestic electrolyzers with/without policy incentives to support decarbonization strategies",
        ],
      },
      {
        id: 3,
        role: "Research Associate",
        company: "Rareminds",
        period: "Dec 2023 - May 2024",
        location: "Bengaluru, Karnataka",
        description: "Developed educational content for agricultural upskilling programs",
        achievements: [
          "Developed course materials for 2 major upskilling programs (Agribusiness Management and Organic Food Production) under the Naan Mudhalvan scheme, reaching students across Tamil Nadu",
          "Delivered classroom training sessions to over 500 students on sustainable agriculture and agribusiness topics",
        ],
      },
      {
        id: 4,
        role: "Research Intern",
        company: "ITC Ltd, Agribusiness Division",
        period: "Dec 2022 - April 2023",
        location: "Guntur, Andhra Pradesh",
        description: "Digital innovation in agricultural advisory services",
        achievements: [
          "Designed and localized digital crop advisories for 10 millet and pulse crops on the ITC MAARS app, reaching stakeholders across 10 states",
        ],
      },
    ],
  },
  projects: {
    heading: "Projects",
    subheading: "Financial modeling and sustainability analysis",
    items: [
      {
        id: 1,
        title: "Renewable Energy & Decarbonization Financial Model",
        tag: "Finance · Sustainability",
        period: "2025",
        highlights: [
          "Built multi-scenario CAPEX/OPEX models for coal gasification and green hydrogen pathways in steelmaking",
          "Mapped material and energy balances with 30-year cash flow projections and LCOE benchmarking",
          "Compared policy-incentive scenarios for domestic vs. imported electrolyzer deployment",
          "Structured outputs for leadership review on Scope 2 reduction potential (~20–25%)",
        ],
        workbookUrl:
          "https://teriuni-my.sharepoint.com/personal/ananya_g_terisas_ac_in/_layouts/15/guestaccess.aspx?share=IQD6jqVQMWimR6FJxOnPR6hZAUPzKkVf1FKL5cY1jm9W6Ts&rtime=C2ZOTX-53kg",
        workbookLabel: "View Excel workbook",
      },
      {
        id: 2,
        title: "Employee Water Footprint Calculator",
        tag: "ESG · Digital Tool",
        period: "2026",
        highlights: [
          "Built an interactive web calculator from scratch using HTML, CSS, and JavaScript",
          "Helps employees understand and reduce individual water consumption patterns",
          "Aligns with corporate water stewardship goals and employee engagement initiatives",
        ],
      },
    ],
  },
  skills: {
    heading: "Skills & Expertise",
    subheading: "Core competencies across sustainability, finance, and analytics",
    categories: [
      {
        id: "finance",
        category: "Finance & Modeling",
        icon: "TrendingUp",
        accent: "from-emerald-500 to-teal-600",
        skills: [
          "Financial Modelling (CAPEX/OPEX)",
          "Project Economics",
          "LCOE Analysis",
          "Scenario Analysis",
          "Budgeting & Forecasting",
        ],
      },
      {
        id: "esg",
        category: "Sustainability & ESG",
        icon: "Leaf",
        accent: "from-green-500 to-lime-600",
        skills: ["CDP", "Eco Vadis", "GRI", "BRSR", "TCFD", "ESG Data Management"],
      },
      {
        id: "analytics",
        category: "Analytics & Data",
        icon: "BarChart3",
        accent: "from-cyan-500 to-blue-600",
        skills: [
          "Data Visualization",
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Advanced Excel",
        ],
      },
      {
        id: "managerial",
        category: "Leadership & Communication",
        icon: "Users",
        accent: "from-violet-500 to-purple-600",
        skills: [
          "Cross-functional Team Management",
          "Stakeholder Management",
          "Report Writing",
          "Presentation",
        ],
      },
      {
        id: "technical",
        category: "Technical",
        icon: "Code2",
        accent: "from-slate-600 to-slate-800",
        skills: ["Python", "HTML/CSS", "R", "JavaScript"],
      },
    ],
  },
  contact: {
    ctaHeading: "Let's build sustainable impact together",
    ctaText:
      "Passionate about leveraging finance and technology to solve environmental challenges. Open to sustainability, ESG, and climate finance roles.",
    channels: [
      {
        type: "email",
        label: "Email",
        value: "ananya2girish@gmail.com",
        href: "mailto:ananya2girish@gmail.com",
        icon: "Mail",
      },
      {
        type: "phone",
        label: "Phone",
        value: "+91 8088 373 462",
        href: "tel:+918088373462",
        icon: "Phone",
      },
      {
        type: "linkedin",
        label: "LinkedIn",
        value: "Ananya C G",
        href: "https://www.linkedin.com/in/ananya-c-g/",
        icon: "Linkedin",
      },
    ],
    footer: "© 2026 Ananya C G. Building sustainability solutions with passion.",
  },
} as const;

export type PortfolioData = typeof portfolioData;
