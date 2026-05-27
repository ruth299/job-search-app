// Transformation Jobs Data - Melbourne Based
const jobsData = [
    {
        id: 1,
        title: "Workday HCM Consultant",
        company: "Workday",
        salary: 145000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "2 days ago",
        description: "Lead Workday HCM implementations for enterprise clients. Design and configure FINS/Payroll modules.",
        tags: ["Workday HCM", "Implementation", "Consulting"],
        featured: true
    },
    {
        id: 2,
        title: "Digital Transformation Manager",
        company: "Cognizant",
        salary: 165000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "1 day ago",
        description: "Drive enterprise digital transformation programs. Lead cross-functional teams through organizational change.",
        tags: ["Transformation", "Program Management", "Change Management"],
        featured: true
    },
    {
        id: 3,
        title: "Workday Integration Specialist",
        company: "Deloitte",
        salary: 155000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "3 days ago",
        description: "Design and implement Workday integrations using EIB, Studio, and core connectors. Support client implementations.",
        tags: ["Workday Integration", "EIB", "API Design"]
    },
    {
        id: 4,
        title: "Change Management Lead",
        company: "Accenture",
        salary: 160000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "5 days ago",
        description: "Lead change management for enterprise transformation initiatives. Develop change strategies and stakeholder engagement plans.",
        tags: ["Change Management", "Stakeholder Engagement", "Transformation"]
    },
    {
        id: 5,
        title: "Workday FINS Analyst",
        company: "IBM",
        salary: 135000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "1 week ago",
        description: "Configure and support Workday Financial Management module. Support finance team on FINS implementations.",
        tags: ["Workday FINS", "Financial Systems", "Configuration"]
    },
    {
        id: 6,
        title: "ERP Transformation Director",
        company: "KPMG",
        salary: 200000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "4 days ago",
        description: "Lead enterprise ERP transformation programs. Guide organizations through SAP/Workday implementations.",
        tags: ["ERP", "Leadership", "Workday", "SAP"]
    },
    {
        id: 7,
        title: "Payroll Implementation Specialist",
        company: "PwC",
        salary: 140000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "6 days ago",
        description: "Implement Workday Payroll solutions for large enterprises. Configure deductions, earnings, and tax integrations.",
        tags: ["Workday Payroll", "Implementation", "Compliance"]
    },
    {
        id: 8,
        title: "Enterprise Architect - Digital",
        company: "Cognizant",
        salary: 180000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "2 days ago",
        description: "Design enterprise digital transformation roadmaps. Guide organizations in cloud and digital strategy.",
        tags: ["Enterprise Architecture", "Digital Strategy", "Cloud"]
    },
    {
        id: 9,
        title: "Workday Security Administrator",
        company: "EY",
        salary: 125000,
        location: "Melbourne CBD",
        industry: "Finance",
        workType: "Full Time",
        postedDate: "3 days ago",
        description: "Manage Workday security, access controls, and compliance requirements. Support tenant administration.",
        tags: ["Workday Admin", "Security", "Access Control"]
    },
    {
        id: 10,
        title: "Process Improvement Consultant",
        company: "Capgemini",
        salary: 150000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "5 days ago",
        description: "Analyze business processes and design improvements. Support organizations in operational transformation.",
        tags: ["Process Improvement", "Lean", "Business Analysis"]
    },
    {
        id: 11,
        title: "Workday Reporting Developer",
        company: "Infosys",
        salary: 130000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "1 week ago",
        description: "Develop advanced Workday reports and analytics. Build dashboards for financial and HR reporting.",
        tags: ["Workday Reporting", "Analytics", "Dashboard Development"]
    },
    {
        id: 12,
        title: "Organizational Change Manager",
        company: "NTT Data",
        salary: 155000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "4 days ago",
        description: "Design and execute organizational change strategies for large transformation programs.",
        tags: ["Change Management", "Org Design", "Communication"]
    },
    {
        id: 13,
        title: "Solutions Architect - ERP",
        company: "TCS",
        salary: 170000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "3 days ago",
        description: "Design ERP solutions tailored to client needs. Lead solution architecture for Workday and SAP implementations.",
        tags: ["Solutions Architecture", "ERP", "Workday"]
    },
    {
        id: 14,
        title: "Business Transformation Consultant",
        company: "DXC",
        salary: 145000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "6 days ago",
        description: "Support business transformation initiatives. Design operating models and process improvements.",
        tags: ["Business Transformation", "Operating Model", "Strategy"]
    },
    {
        id: 15,
        title: "Workday Adaptive Planning Analyst",
        company: "Cognizant",
        salary: 135000,
        location: "Melbourne CBD",
        industry: "Finance",
        workType: "Full Time",
        postedDate: "2 days ago",
        description: "Configure and support Workday Adaptive Planning for financial planning and budgeting.",
        tags: ["Adaptive Planning", "Financial Planning", "Budgeting"]
    },
    {
        id: 16,
        title: "Program Manager - Enterprise Transformation",
        company: "Deloitte",
        salary: 175000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "5 days ago",
        description: "Lead large-scale enterprise transformation programs. Manage budgets, timelines, and cross-functional teams.",
        tags: ["Program Management", "Transformation", "Leadership"]
    },
    {
        id: 17,
        title: "Workday Student Success Manager",
        company: "Accenture",
        salary: 120000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "1 week ago",
        description: "Support Workday Student module implementations for higher education institutions.",
        tags: ["Workday Student", "Education", "Implementation"]
    },
    {
        id: 18,
        title: "Digital Strategy Consultant",
        company: "IBM",
        salary: 160000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "4 days ago",
        description: "Develop digital strategy roadmaps for enterprise clients. Guide technology transformations.",
        tags: ["Digital Strategy", "Consulting", "Roadmap"]
    },
    {
        id: 19,
        title: "Workday Community Analyst",
        company: "Workday",
        salary: 130000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "3 days ago",
        description: "Support Workday Community module. Configure and optimize community solutions for large enterprises.",
        tags: ["Workday Community", "Configuration", "Support"]
    },
    {
        id: 20,
        title: "Data Transformation Specialist",
        company: "KPMG",
        salary: 155000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "6 days ago",
        description: "Lead data transformation initiatives. Design data strategy and analytics solutions for digital transformation.",
        tags: ["Data Transformation", "Analytics", "Data Strategy"]
    },
    {
        id: 21,
        title: "HCM Transformation Lead",
        company: "PwC",
        salary: 170000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "2 days ago",
        description: "Lead Human Capital Management transformation programs. Design and implement HCM strategies.",
        tags: ["HCM", "Transformation", "People Strategy"]
    },
    {
        id: 22,
        title: "Enterprise Systems Analyst",
        company: "Cognizant",
        salary: 140000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "5 days ago",
        description: "Analyze enterprise systems and support digital transformation. Design system solutions for organizational needs.",
        tags: ["Systems Analysis", "Enterprise Systems", "Transformation"]
    },
    {
        id: 23,
        title: "Workday Recruiting Systems Analyst",
        company: "EY",
        salary: 135000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "4 days ago",
        description: "Configure and support Workday Recruiting module. Optimize talent acquisition processes.",
        tags: ["Workday Recruiting", "Talent Acquisition", "Configuration"]
    },
    {
        id: 24,
        title: "Operational Transformation Manager",
        company: "Capgemini",
        salary: 160000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "1 week ago",
        description: "Drive operational transformation initiatives. Redesign processes and improve operational efficiency.",
        tags: ["Operational Transformation", "Process Design", "Efficiency"]
    },
    {
        id: 25,
        title: "Business Analyst - Finance Systems",
        company: "Infosys",
        salary: 125000,
        location: "Melbourne CBD",
        industry: "Finance",
        workType: "Full Time",
        postedDate: "3 days ago",
        description: "Support finance system transformations. Analyze business requirements for FINS and accounting systems.",
        tags: ["Business Analysis", "Finance Systems", "FINS"]
    },
    {
        id: 26,
        title: "Cloud Transformation Architect",
        company: "NTT Data",
        salary: 180000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "6 days ago",
        description: "Design cloud transformation strategies. Lead cloud migration and modernization initiatives.",
        tags: ["Cloud Transformation", "Architecture", "Cloud Migration"]
    },
    {
        id: 27,
        title: "Supply Chain Transformation Specialist",
        company: "TCS",
        salary: 150000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "2 days ago",
        description: "Lead supply chain transformation programs. Optimize procurement and supply chain processes.",
        tags: ["Supply Chain", "Transformation", "Procurement"]
    },
    {
        id: 28,
        title: "Workday Testing Analyst",
        company: "DXC",
        salary: 120000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "5 days ago",
        description: "Lead QA and testing for Workday implementations. Ensure quality and compliance.",
        tags: ["QA Testing", "Workday", "Compliance"]
    },
    {
        id: 29,
        title: "Governance and Risk Manager",
        company: "Deloitte",
        salary: 165000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "4 days ago",
        description: "Establish governance frameworks for transformation programs. Manage risk and compliance.",
        tags: ["Governance", "Risk Management", "Compliance"]
    },
    {
        id: 30,
        title: "Talent Strategy Consultant",
        company: "Accenture",
        salary: 155000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "1 week ago",
        description: "Design talent strategies for transformation initiatives. Support organizational redesign.",
        tags: ["Talent Strategy", "Org Design", "HR"]
    },
    {
        id: 31,
        title: "Technology Change Manager",
        company: "IBM",
        salary: 145000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "3 days ago",
        description: "Manage change for technology transformations. Support user adoption and capability building.",
        tags: ["Change Management", "Technology", "Adoption"]
    },
    {
        id: 32,
        title: "Workday Continuity Analyst",
        company: "KPMG",
        salary: 130000,
        location: "Melbourne CBD",
        industry: "Finance",
        workType: "Full Time",
        postedDate: "6 days ago",
        description: "Support Workday Continuity Cloud module. Ensure business continuity and disaster recovery.",
        tags: ["Continuity", "Workday", "Disaster Recovery"]
    },
    {
        id: 33,
        title: "Business Process Manager",
        company: "PwC",
        salary: 150000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "2 days ago",
        description: "Design and optimize business processes. Support process transformation initiatives.",
        tags: ["Process Management", "Optimization", "Transformation"]
    },
    {
        id: 34,
        title: "Digital Innovation Manager",
        company: "Cognizant",
        salary: 165000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "5 days ago",
        description: "Drive digital innovation initiatives. Identify and implement emerging technologies.",
        tags: ["Digital Innovation", "Technology", "Strategy"]
    },
    {
        id: 35,
        title: "Workday Analytics Developer",
        company: "EY",
        salary: 140000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "4 days ago",
        description: "Develop analytics solutions for Workday data. Build insights dashboards.",
        tags: ["Analytics", "Workday", "Data Science"]
    },
    {
        id: 36,
        title: "Strategic Project Manager",
        company: "Capgemini",
        salary: 170000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "1 week ago",
        description: "Manage strategic transformation projects. Lead high-impact initiatives.",
        tags: ["Project Management", "Strategy", "Transformation"]
    },
    {
        id: 37,
        title: "Workday Staffing Consultant",
        company: "Infosys",
        salary: 125000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "3 days ago",
        description: "Configure Workday Staffing module. Support workforce planning and contingent workforce.",
        tags: ["Workday Staffing", "Workforce Planning", "Configuration"]
    },
    {
        id: 38,
        title: "Enterprise Data Architect",
        company: "NTT Data",
        salary: 175000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "6 days ago",
        description: "Design enterprise data architectures. Support data-driven transformation initiatives.",
        tags: ["Data Architecture", "Enterprise Systems", "Data Strategy"]
    },
    {
        id: 39,
        title: "Transformation Office Director",
        company: "TCS",
        salary: 190000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "2 days ago",
        description: "Lead transformation office. Oversee multiple transformation programs and initiatives.",
        tags: ["Transformation Office", "Leadership", "Program Management"]
    },
    {
        id: 40,
        title: "Customer Success Manager - Workday",
        company: "Workday",
        salary: 135000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "5 days ago",
        description: "Support customer success for Workday implementations. Drive adoption and value realization.",
        tags: ["Customer Success", "Adoption", "Workday"]
    },
    {
        id: 41,
        title: "Compliance and Risk Specialist",
        company: "DXC",
        salary: 145000,
        location: "Melbourne CBD",
        industry: "Finance",
        workType: "Full Time",
        postedDate: "4 days ago",
        description: "Ensure compliance in transformation programs. Manage regulatory requirements.",
        tags: ["Compliance", "Risk Management", "Regulation"]
    },
    {
        id: 42,
        title: "Integration Architect",
        company: "Deloitte",
        salary: 165000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "1 week ago",
        description: "Design integration solutions for ERP transformations. Architect system integrations.",
        tags: ["Integration Architecture", "ERP", "Systems Design"]
    },
    {
        id: 43,
        title: "Organizational Effectiveness Manager",
        company: "Accenture",
        salary: 160000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "3 days ago",
        description: "Drive organizational effectiveness initiatives. Support organizational transformation.",
        tags: ["Org Development", "Transformation", "Effectiveness"]
    },
    {
        id: 44,
        title: "Workday Certification Trainer",
        company: "IBM",
        salary: 130000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "6 days ago",
        description: "Develop and deliver Workday training programs. Build capability and user adoption.",
        tags: ["Training", "Workday", "Capability Building"]
    },
    {
        id: 45,
        title: "Finance Transformation Manager",
        company: "KPMG",
        salary: 170000,
        location: "Melbourne CBD",
        industry: "Finance",
        workType: "Full Time",
        postedDate: "2 days ago",
        description: "Lead finance transformation programs. Design new finance operating models.",
        tags: ["Finance Transformation", "Finance Operations", "Leadership"]
    },
    {
        id: 46,
        title: "Solution Delivery Manager",
        company: "PwC",
        salary: 150000,
        location: "Melbourne CBD",
        industry: "Consulting",
        workType: "Full Time",
        postedDate: "5 days ago",
        description: "Deliver transformation solutions. Manage delivery and ensure quality outcomes.",
        tags: ["Solution Delivery", "Project Management", "Quality"]
    },
    {
        id: 47,
        title: "Workday HCM Plus Consultant",
        company: "Cognizant",
        salary: 145000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "4 days ago",
        description: "Implement Workday HCM Plus modules including Talent, Learning, and Succession.",
        tags: ["Workday HCM Plus", "Talent Management", "Learning"]
    },
    {
        id: 48,
        title: "Digital Experience Designer",
        company: "EY",
        salary: 155000,
        location: "Melbourne CBD",
        industry: "Tech",
        workType: "Full Time",
        postedDate: "1 week ago",
        description: "Design digital experiences for transformation initiatives. Create user-centric solutions.",
        tags: ["UX Design", "Digital Experience", "Transformation"]
    }
];

// DOM Elements
const jobsContainer = document.getElementById('jobsContainer');
const searchInput = document.getElementById('searchInput');
const jobCount = document.getElementById('jobCount');
const salarySlider = document.getElementById('salarySlider');
const salaryDisplay = document.getElementById('salaryDisplay');
const industryFilters = document.querySelectorAll('.industry-filter');
const locationFilters = document.querySelectorAll('.location-filter');
const workTypeFilters = document.querySelectorAll('.work-type-filter');
const sortBtns = document.querySelectorAll('.sort-btn');

let filteredJobs = [...jobsData];

// Initialize
renderJobs(filteredJobs);

// Event Listeners
searchInput.addEventListener('input', handleSearch);
industryFilters.forEach(filter => filter.addEventListener('change', handleFilters));
locationFilters.forEach(filter => filter.addEventListener('change', handleFilters));
workTypeFilters.forEach(filter => filter.addEventListener('change', handleFilters));
salarySlider.addEventListener('input', handleSalaryFilter);
sortBtns.forEach(btn => btn.addEventListener('click', handleSort));

// Search Handler
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    filteredJobs = jobsData.filter(job =>
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.tags.some(tag => tag.toLowerCase().includes(query))
    );
    applyFilters();
}

// Filter Handlers
function handleFilters() {
    applyFilters();
}

function handleSalaryFilter(e) {
    const salary = parseInt(e.target.value);
    salaryDisplay.textContent = `$${salary}K+`;
    applyFilters();
}

function applyFilters() {
    const salary = parseInt(salarySlider.value);
    const selectedIndustries = Array.from(industryFilters)
        .filter(f => f.checked)
        .map(f => f.value);
    const selectedLocations = Array.from(locationFilters)
        .filter(f => f.checked)
        .map(f => f.value);
    const selectedWorkTypes = Array.from(workTypeFilters)
        .filter(f => f.checked)
        .map(f => f.value);

    filteredJobs = jobsData.filter(job => {
        const salaryMatch = job.salary >= salary * 1000;
        const industryMatch = selectedIndustries.length === 0 || selectedIndustries.includes(job.industry);
        const locationMatch = selectedLocations.length === 0 || selectedLocations.includes(job.location);
        const workTypeMatch = selectedWorkTypes.length === 0 || selectedWorkTypes.includes(job.workType);

        return salaryMatch && industryMatch && locationMatch && workTypeMatch;
    });

    // Apply search filter if there's a search query
    const searchQuery = searchInput.value.toLowerCase();
    if (searchQuery) {
        filteredJobs = filteredJobs.filter(job =>
            job.title.toLowerCase().includes(searchQuery) ||
            job.company.toLowerCase().includes(searchQuery) ||
            job.description.toLowerCase().includes(searchQuery) ||
            job.tags.some(tag => tag.toLowerCase().includes(searchQuery))
        );
    }

    renderJobs(filteredJobs);
}

// Sort Handler
function handleSort(e) {
    const sortType = e.target.dataset.sort;
    sortBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    if (sortType === 'recent') {
        filteredJobs.sort((a, b) => jobsData.indexOf(b) - jobsData.indexOf(a));
    } else if (sortType === 'salary-high') {
        filteredJobs.sort((a, b) => b.salary - a.salary);
    }

    renderJobs(filteredJobs);
}

// Render Jobs
function renderJobs(jobs) {
    jobCount.textContent = jobs.length;

    if (jobs.length === 0) {
        jobsContainer.innerHTML = `
            <div class="no-results">
                <div class="no-results-title">No jobs found</div>
                <p>Try adjusting your filters or search query</p>
            </div>
        `;
        return;
    }

    jobsContainer.innerHTML = jobs.map(job => `
        <div class="job-card">
            <div class="job-card-header">
                <div>
                    <h3 class="job-title">${job.title}</h3>
                    <p class="job-company">${job.company}</p>
                </div>
                <div class="job-salary">${job.salary.toLocaleString('en-AU', {style: 'currency', currency: 'AUD', maximumFractionDigits: 0})}</div>
            </div>
            <div class="job-info">
                <span>📍 ${job.location}</span>
                <span>💼 ${job.workType}</span>
                <span>🕒 ${job.postedDate}</span>
            </div>
            <p class="job-description">${job.description}</p>
            <div class="job-tags">
                ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
            </div>
            <div class="job-footer">
                <span>${job.industry}</span>
                <button class="apply-btn">View Job</button>
            </div>
        </div>
    `).join('');
}
