import React, { useState, useEffect } from 'react';

// --- Helper Components ---

const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

// --- New Persona Vector Icons ---
const HrIcon = ({ className }) => (<svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.68 44.88A11.94 11.94 0 0 0 40 36a11.94 11.94 0 0 0-9.68 8.88" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M40 36c0-6.63-5.37-12-12-12s-12 5.37-12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M24.32 44.88A11.94 11.94 0 0 0 16 36a11.94 11.94 0 0 0-9.68 8.88" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M32 58.67V54.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M32 24c0-6.63-5.37-12-12-12S8 17.37 8 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M44 24c0-6.63 5.37-12 12-12s12 5.37 12 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>);
const ItIcon = ({ className }) => (<svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 44h24v12H20V44z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 8h40v28H12V8z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M28 16h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M24 24h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M32 44V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>);
const SalesIcon = ({ className }) => (<svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 20L42.63 33.37a8 8 0 0 1-10.26 0L24 25l-16 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M44 20h12v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 56h48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>);
const MarketingIcon = ({ className }) => (<svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 28h12v28H12V28zM32 12h12v44H32V12zM52 40h12v16H52V40z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 8h52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>);
const DataAnalystIcon = ({ className }) => (<svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 56V32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M28 56V20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 56V44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M60 56V12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="28" cy="12" r="4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></circle><circle cx="44" cy="24" r="4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></circle></svg>);
const BusinessAnalystIcon = ({ className }) => (<svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 21H8v-8h16v8zM40 37h16v-8H40v8zM24 53h-8V45h16v8z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M24 21h8v16h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M24 45v-8h-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>);
const OperationsIcon = ({ className }) => (<svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 48l-12-8-12 8-12-8-12 8V20l12-8 12 8 12-8 12 8v28z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M32 20v36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 12v36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M44 12v36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>);
const CustomerExpIcon = ({ className }) => (<svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 32a24 24 0 1 1-48 0 24 24 0 0 1 48 0z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M44 40H20a16 16 0 1 0 24 0z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="24" cy="28" r="2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></circle><circle cx="40" cy="28" r="2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></circle></svg>);
const ProjectManagerIcon = ({ className }) => (<svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8h40v48H16V8z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 8h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 20h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 32h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 44h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M28 20h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M28 32h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M28 44h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>);
const CorpCommsIcon = ({ className }) => (<svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 56V8h48v36H24L8 56z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 24h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 34h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>);

const CheckIcon = () => <Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-6 h-6 text-green-500" />;
const XCircleIcon = () => <Icon path="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-6 h-6 text-red-500" />;
const SparklesIcon = () => <Icon path="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 15.75l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 18l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 21.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 18l1.035-.259a3.375 3.375 0 002.456-2.456L18 15.75z" className="w-6 h-6 text-indigo-500" />;
const DownloadIcon = () => <Icon path="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" className="w-5 h-5 mr-2" />;


// --- Main Application ---

const App = () => {
    // --- State Management ---
    const [currentPage, setCurrentPage] = useState('welcome');
    const [nickname, setNickname] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [hasAgreed, setHasAgreed] = useState(false);
    
    const [selectedPersona, setSelectedPersona] = useState(null);
    const [currentChallenge, setCurrentChallenge] = useState(null);
    const [userPrompt, setUserPrompt] = useState('');
    const [score, setScore] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [recommendation, setRecommendation] = useState('');
    const [perfectPrompt, setPerfectPrompt] = useState('');

    // --- Load External Libraries ---
    useEffect(() => {
        const jspdfScript = document.createElement('script');
        jspdfScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        jspdfScript.async = true;
        document.body.appendChild(jspdfScript);

        const html2canvasScript = document.createElement('script');
        html2canvasScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        html2canvasScript.async = true;
        document.body.appendChild(html2canvasScript);

        return () => {
            if (document.body.contains(jspdfScript)) document.body.removeChild(jspdfScript);
            if (document.body.contains(html2canvasScript)) document.body.removeChild(html2canvasScript);
        }
    }, []);

    // --- Expanded Data for Personas and Scenarios ---
    const personas = [
        { 
            name: 'HR Manager', 
            icon: HrIcon,
            color: 'bg-blue-100',
            hoverColor: 'hover:bg-blue-200',
            textColor: 'text-blue-800',
            challenges: [
                { scenario: "Two departments have been merged, and there's tension and confusion among the teams about their new roles. You need to facilitate a workshop to improve collaboration.", task: "Write a prompt to generate a detailed agenda and talking points for a half-day team-building workshop focused on clarifying roles and fostering communication." },
                { scenario: "A high-performing employee has resigned, citing a lack of growth opportunities. You need to analyze the exit interview data from the past year to identify trends.", task: "Craft a prompt to analyze a provided dataset of exit interview notes and identify the top three reasons for employee attrition, presenting the findings as a bulleted list." },
                { scenario: "The company is implementing a new remote work policy, and employees have many questions. You need to create a comprehensive FAQ document.", task: "Generate a prompt to create a list of at least 15 frequently asked questions and their clear, concise answers regarding a new hybrid work policy." },
                { scenario: "You're preparing for the annual salary review cycle and need to ensure your recommendations are fair and data-driven.", task: "Write a prompt to analyze a spreadsheet of employee salaries, performance scores, and tenure, and highlight any potential pay-gap anomalies that need further investigation." },
                { scenario: "A manager has reported a conflict between two team members. You need to provide the manager with guidance on how to mediate the situation.", task: "Create a prompt to generate a step-by-step guide for a manager on how to conduct a mediation session between two conflicting employees, with a focus on a neutral and constructive tone." },
                { scenario: "The company wants to launch a new wellness initiative. You need to brainstorm ideas that are both engaging and cost-effective.", task: "Draft a prompt to generate five creative and low-cost corporate wellness initiatives, including a brief description and potential benefits for each." },
                { scenario: "You are tasked with updating the company's code of conduct to include new guidelines on social media usage.", task: "Write a prompt to draft a new section for the company's code of conduct that outlines professional and ethical guidelines for employees' social media activities." },
                { scenario: "Recruiting for a specialized technical role has been difficult. You need to rewrite the job description to attract a wider, more qualified pool of candidates.", task: "Craft a prompt to revise a technical job description to make it more engaging and inclusive, focusing on the impact of the role rather than just a list of required skills." },
                { scenario: "An employee has requested an accommodation for a disability. You need to understand the legal requirements and best practices.", task: "Generate a prompt to summarize the key legal obligations and best practices for providing reasonable accommodations for employees with disabilities under the ADA." },
                { scenario: "You need to create a presentation for new hires that explains the company culture in a compelling way.", task: "Write a prompt to create an outline for a 15-minute presentation on the company's culture for new hire orientation, including suggestions for visuals and interactive elements." },
            ] 
        },
        {
            name: 'IT Specialist',
            icon: ItIcon,
            color: 'bg-sky-100',
            hoverColor: 'hover:bg-sky-200',
            textColor: 'text-sky-800',
            challenges: [
                { scenario: "A phishing email is circulating, and several employees have clicked the malicious link. You need to send an urgent, company-wide alert.", task: "Draft a prompt to write a clear, urgent, and non-technical security alert for all employees about a new phishing scam, including instructions on what to do if they've been affected." },
                { scenario: "The marketing team needs access to a new analytics software, but you have concerns about its data security protocols.", task: "Write a prompt to create a list of security and compliance questions to ask the vendor of a new marketing analytics software before approving its use." },
                { scenario: "A critical server went down overnight. You've fixed it, but you need to write a post-mortem report for management explaining the cause and prevention plan.", task: "Generate a prompt to structure a technical incident post-mortem report, including sections for summary, timeline, root cause analysis, resolution, and future prevention steps." },
                { scenario: "The company is migrating to a new cloud storage provider. You need to create a simple guide for employees on how to move their files.", task: "Craft a prompt to generate a user-friendly, step-by-step guide with screenshots (placeholder text for screenshots) for non-technical employees on migrating files from Dropbox to Google Drive." },
                { scenario: "You've noticed that many support tickets are for the same simple issue: resetting passwords. You want to create a self-service solution.", task: "Write a prompt to design a simple flowchart for an internal wiki that guides users through the password reset process before they create a support ticket." },
                { scenario: "Management wants to cut costs on software licenses. You need to analyze usage data to see which subscriptions can be cancelled.", task: "Create a prompt to analyze a provided CSV file of software license usage and identify all licenses that have not been used in the last 90 days." },
                { scenario: "A new employee is starting, and you need to provision their laptop and all necessary accounts.", task: "Generate a prompt to create a comprehensive checklist for onboarding a new employee from an IT perspective, including hardware setup, software installation, and account creation." },
                { scenario: "The Wi-Fi in the main conference room is unreliable. You need to propose a solution to improve the network coverage.", task: "Write a prompt to draft a short proposal to management for upgrading the conference room Wi-Fi, explaining the problem, the proposed solution (e.g., new access points), and the estimated cost." },
                { scenario: "You are responsible for the quarterly data backup and recovery test. You need to document the process and results.", task: "Craft a prompt to create a formal report template for a data backup and recovery test, including fields for date, systems tested, outcome, and any issues encountered." },
                { scenario: "An employee's laptop has been stolen. You need to execute the company's security protocol for lost devices immediately.", task: "Generate a prompt to create an emergency checklist of actions to take when an employee's laptop is reported stolen, including remote wipe, password resets, and revoking access." },
            ]
        },
        { 
            name: 'Sales Lead', 
            icon: SalesIcon,
            color: 'bg-cyan-100',
            hoverColor: 'hover:bg-cyan-200',
            textColor: 'text-cyan-800',
            challenges: [
                { scenario: "Your top competitor just launched a new product. A key prospect you've been nurturing for months has mentioned this new offering, and their decision is now on hold.", task: "Craft a prompt to generate a concise 'battle card' that outlines your service's key advantages over the competitor's new product, including three pointed questions to ask the prospect." },
                { scenario: "You've been handed a list of 100 lukewarm leads from a recent webinar. Your goal is to quickly identify the most promising prospects.", task: "Write a prompt to create a personalized, yet scalable, follow-up email template designed to gauge interest and qualify leads from a webinar attendee list." },
                { scenario: "A long-term, high-value client has been unusually quiet, and their contract is up for renewal in three months. You suspect they might be exploring other options.", task: "Generate a prompt to draft a proactive 'check-in' email to a key client, aiming to schedule a strategic review meeting and uncover any unspoken concerns." },
                { scenario: "Your quarterly sales numbers are lagging. Your manager has asked for a concrete plan to close the gap in the final month.", task: "Create a prompt to analyze your current sales pipeline deals (with deal size, stage, and probability) and suggest a prioritized action plan for the 5 deals most likely to close this quarter." },
                { scenario: "You're about to give a final product demo to the C-suite of a major potential client. You need your presentation to be flawless and tailored to their strategic goals.", task: "Write a prompt to generate a customized demo script outline that aligns your product's features with the specific business objectives (e.g., 'increase efficiency') of a target company's executive team." },
                { scenario: "A prospect has raised a pricing objection, stating your solution is 'too expensive.' You need to reframe the conversation around value and ROI.", task: "Craft a prompt to generate three different responses to a pricing objection, each focusing on a different value proposition (e.g., long-term ROI, superior support, risk reduction)." },
                { scenario: "You're trying to get a foot in the door at a large enterprise, but your emails to the decision-maker are going unanswered.", task: "Generate a prompt to write a compelling LinkedIn connection request message and a brief follow-up message to a key decision-maker at a target company." },
                { scenario: "Your team is launching a new add-on feature. You need to identify which of your existing customers would be the best candidates for an upsell.", task: "Write a prompt to analyze a list of existing customers and their usage data to identify the top 10 candidates for a new feature upsell." },
                { scenario: "After a successful meeting, a prospect has asked for a formal proposal. You want to ensure it's comprehensive and persuasive.", task: "Create a prompt to generate a detailed proposal template, including sections for understanding the client's problem, proposed solution, implementation timeline, pricing, and case studies." },
                { scenario: "You need to prepare for your annual performance review and want to showcase your achievements effectively.", task: "Craft a prompt to summarize your sales activities from a provided data sheet (deals closed, revenue generated) into a compelling narrative for a performance review." },
            ] 
        },
        { 
            name: 'Marketing Coordinator', 
            icon: MarketingIcon,
            color: 'bg-teal-100',
            hoverColor: 'hover:bg-teal-200',
            textColor: 'text-teal-800',
            challenges: [
                { scenario: "The company is launching a new eco-friendly product line. You need to create a social media campaign that resonates with environmentally conscious consumers.", task: "Generate a prompt to create a one-week social media content calendar for Instagram and Facebook to launch a new sustainable product line, including post ideas, visuals (text descriptions), and relevant hashtags." },
                { scenario: "The latest company blog post has very low engagement. You need to find ways to repurpose the content to reach a wider audience.", task: "Write a prompt to suggest five ways to repurpose a 1000-word blog post into different content formats (e.g., infographic, video script, Twitter thread, email newsletter snippet)." },
                { scenario: "You're planning the company's booth for a major industry trade show in three months. You need a comprehensive plan to make a big impact.", task: "Craft a prompt to create a detailed project plan for a trade show booth, including pre-show promotion, at-show activities (e.g., demos, giveaways), and post-show lead nurturing." },
                { scenario: "Management wants to know the ROI of your recent digital advertising campaign. You have the data but need to present it clearly.", task: "Generate a prompt to write a concise summary report for a non-technical audience analyzing a digital ad campaign's performance, using metrics like CPC, CTR, and conversion rate from a provided dataset." },
                { scenario: "You've been tasked with creating the next monthly customer newsletter, but you're struggling with fresh content ideas.", task: "Create a prompt to brainstorm five engaging content ideas for a B2B company's monthly email newsletter, including a mix of product news, industry insights, and customer stories." },
                { scenario: "A competitor is getting a lot of press for their new marketing campaign. You need to analyze their strategy to learn from it.", task: "Write a prompt to analyze a competitor's recent marketing campaign (based on their social media and recent press releases) and summarize its key messages, target audience, and tactics." },
                { scenario: "You need to write compelling copy for a new landing page that aims to convert visitors into free trial users.", task: "Craft a prompt to write persuasive and benefit-oriented copy for a website landing page, including a strong headline, a brief introduction, three key feature/benefit bullet points, and a compelling call-to-action." },
                { scenario: "You're organizing a webinar with a guest expert. You need to create promotional materials to drive registrations.", task: "Generate a prompt to draft a promotional email and three social media posts to encourage sign-ups for an upcoming webinar featuring a guest speaker." },
                { scenario: "The company wants to start a customer testimonial program to build social proof. You need to outline the process.", task: "Create a prompt to write a simple process for collecting and using customer testimonials, including an outreach email template to request a review." },
                { scenario: "You have a limited budget for the next quarter and need to decide which marketing channels to prioritize.", task: "Write a prompt to propose a low-budget marketing plan for one quarter, allocating a hypothetical $5,000 budget across 2-3 recommended channels and justifying the choices." },
            ] 
        },
        { 
            name: 'Data Analyst', 
            icon: DataAnalystIcon,
            color: 'bg-indigo-100',
            hoverColor: 'hover:bg-indigo-200',
            textColor: 'text-indigo-800',
            challenges: [
                { scenario: "The marketing team just finished a 3-month campaign and has given you a messy spreadsheet with daily spend, clicks, and conversions. They want to know 'what worked'.", task: "Craft a prompt to analyze a provided marketing campaign dataset (CSV) to identify which channel had the best return on ad spend (ROAS) and create a summary visualization (describe the chart)." },
                { scenario: "The product team thinks users are abandoning the new sign-up form. They've given you a raw data export of user events.", task: "Write a prompt to analyze a user event log to create a funnel analysis of the sign-up process and identify at which step the highest number of users drop off." },
                { scenario: "Sales leadership wants to understand regional performance. You have a database of all sales from the last year, including customer location and deal size.", task: "Generate a prompt to query a sales database to find the top 3 performing regions by total sales revenue and calculate the average deal size for each of those regions." },
                { scenario: "The support team is overwhelmed with tickets. They want to know the most common problems. You have a CSV export of all support tickets from the last month, including the ticket subject line.", task: "Create a prompt to perform a keyword analysis on a list of support ticket subjects to categorize them and identify the top 5 most common problem categories." },
                { scenario: "An executive is giving a presentation tomorrow and just asked you for a 'single slide with our key customer growth metrics'.", task: "Write a prompt to calculate Month-over-Month (MoM) user growth, churn rate, and new customer acquisition from a user data table and present these three key metrics in a clear, concise summary." },
                { scenario: "You've discovered a data quality issue: the 'country' field in your customer database has multiple inconsistent entries (e.g., 'USA', 'U.S.A.', 'United States'). You need to clean it.", task: "Craft a prompt to generate a script (in Python or SQL) to standardize a 'country' column in a database table, mapping various abbreviations and names to a single, consistent format." },
                { scenario: "The logistics team wants to know if there's a correlation between shipping distance and customer satisfaction scores.", task: "Generate a prompt to perform a correlation analysis between two columns in a dataset: 'shipping_distance_km' and 'satisfaction_score' (1-5), and explain the result in simple terms." },
                { scenario: "You are asked to build a dashboard for the sales team. You need to decide which KPIs are the most important to display.", task: "Write a prompt to propose the 5 most critical KPIs for a sales team dashboard and provide a brief justification for why each is important." },
                { scenario: "A product manager wants to A/B test a new feature. You need to determine the required sample size to get a statistically significant result.", task: "Create a prompt to calculate the required sample size for an A/B test, given a baseline conversion rate, the desired minimum detectable effect, and statistical significance and power levels." },
                { scenario: "You've completed a complex analysis and need to explain your findings to the non-technical leadership team.", task: "Craft a prompt to summarize the results of a predictive model's performance (including metrics like accuracy and precision) into a simple, one-paragraph explanation for a non-technical audience." },
            ] 
        },
        { 
            name: 'Business Analyst', 
            icon: BusinessAnalystIcon,
            color: 'bg-blue-200',
            hoverColor: 'hover:bg-blue-300',
            textColor: 'text-blue-900',
            challenges: [
                { scenario: "The sales team is complaining that their CRM is clunky and slows them down. Management has approved a project to 'improve the CRM' but the scope is vague.", task: "Write a prompt to generate a list of targeted questions for a workshop with the sales team to elicit specific pain points and functional requirements for improving their CRM." },
                { scenario: "You're mapping out the current 'order-to-cash' process and have discovered several bottlenecks and redundant steps.", task: "Craft a prompt to create a 'future state' process map description (in bullet points) that streamlines the current 'order-to-cash' process, highlighting the key changes and expected efficiencies." },
                { scenario: "A project stakeholder from the legal department is concerned about data privacy in a new feature you're defining. You need to address their concerns.", task: "Generate a prompt to draft a business requirements document section that specifically addresses data privacy, including requirements for data handling, user consent, and compliance with GDPR." },
                { scenario: "The development team has finished a new feature, and you need to create a plan to test whether it meets the business requirements.", task: "Write a prompt to create a User Acceptance Testing (UAT) plan for a new 'user profile' feature, including at least 5 key test cases with expected outcomes." },
                { scenario: "You are in a meeting where two departments are arguing over the requirements for a new internal reporting dashboard. You need to mediate and find a compromise.", task: "Create a prompt to generate a facilitation plan to help two conflicting stakeholders prioritize a list of requirements for a new dashboard using the MoSCoW method (Must have, Should have, Could have, Won't have)." },
                { scenario: "You need to explain a complex technical constraint to a non-technical project sponsor without getting lost in jargon.", task: "Craft a prompt to write a simple analogy to explain why a real-time data sync between two systems is technically challenging and expensive, for an audience that is not tech-savvy." },
                { scenario: "The project's scope is creeping, with new requests coming in every week. You need to create a formal process for managing these changes.", task: "Generate a prompt to draft a simple Change Request Form and outline the steps of a change control process for a project." },
                { scenario: "You've gathered all the requirements for a new mobile app feature. Now you need to translate them into clear user stories for the development team.", task: "Write a prompt to convert a list of business requirements into a set of well-formed user stories, each following the format: 'As a [user type], I want [an action] so that [a benefit]'." },
                { scenario: "Management is considering buying a third-party software vs. building a solution in-house. They've asked you for a recommendation.", task: "Create a prompt to generate a 'Build vs. Buy' analysis framework, outlining the key criteria (e.g., cost, time to market, customization, maintenance) to consider when evaluating a software solution." },
                { scenario: "The project is complete, but you need to document the lessons learned to help future projects.", task: "Craft a prompt to create a 'Lessons Learned' report template, with sections for 'What went well?', 'What didn't go well?', and 'Recommendations for the future'." },
            ] 
        },
        { 
            name: 'Operations Manager', 
            icon: OperationsIcon,
            color: 'bg-sky-200',
            hoverColor: 'hover:bg-sky-300',
            textColor: 'text-sky-900',
            challenges: [
                { scenario: "The warehouse has seen a 15% increase in picking errors over the last quarter, leading to costly returns. You need to identify the root cause and propose a solution.", task: "Write a prompt to create a fishbone (Ishikawa) diagram to analyze the potential root causes of an increase in warehouse picking errors, considering factors like People, Process, and Technology." },
                { scenario: "A key supplier has just informed you of a 4-week delay on a critical component, which will halt your production line.", task: "Craft a prompt to draft an urgent action plan to mitigate a critical supply chain disruption, including steps to find alternative suppliers, communicate with affected customers, and adjust production schedules." },
                { scenario: "The morning shift and the evening shift at the distribution center are constantly blaming each other for misplaced inventory. You need to standardize the shift handover process.", task: "Generate a prompt to create a clear and concise Standard Operating Procedure (SOP) for a warehouse shift handover, including a checklist of items to be verified." },
                { scenario: "You believe a new automated sorting machine could significantly increase your fulfillment center's efficiency, but you need to convince the finance department.", task: "Write a prompt to create a business case for purchasing a new piece of equipment, including sections for the initial investment, projected labor cost savings, and the calculated Return on Investment (ROI) over three years." },
                { scenario: "The company is launching a new subscription box service. You need to design the entire fulfillment process from receiving an order to shipping the box.", task: "Create a prompt to outline a detailed workflow for a new subscription box fulfillment process, from inventory management of the box items to the final packing and shipping stages." },
                { scenario: "You are responsible for the safety of your facility. After a minor accident, you need to reinforce safety protocols with all staff.", task: "Craft a prompt to write a script for a 5-minute 'safety stand-up' meeting to remind employees of the importance of proper lifting techniques and keeping walkways clear." },
                { scenario: "Your delivery fleet's fuel costs have skyrocketed. You need to find ways to optimize delivery routes to save money.", task: "Generate a prompt to analyze a dataset of delivery addresses and propose a strategy for route optimization to reduce total mileage and fuel consumption for a delivery fleet." },
                { scenario: "You need to set Key Performance Indicators (KPIs) for your team for the upcoming year to track efficiency and quality.", task: "Write a prompt to define and explain three critical KPIs for an operations team, such as 'On-Time Delivery Rate', 'Order Accuracy Rate', and 'Inventory Turnover'." },
                { scenario: "The company is scaling up, and your current manual inventory tracking system (a spreadsheet) is failing. You need to evaluate inventory management software.", task: "Create a prompt to generate a list of key features and requirements to look for when evaluating and selecting a new inventory management software system." },
                { scenario: "Customer complaints about damaged goods on arrival are increasing. You need to review and improve your packaging standards.", task: "Craft a prompt to create new packaging guidelines for fragile items, specifying the type of packing materials to use and providing step-by-step packing instructions." },
            ] 
        },
        { 
            name: 'Customer Experience Rep', 
            icon: CustomerExpIcon,
            color: 'bg-cyan-200',
            hoverColor: 'hover:bg-cyan-300',
            textColor: 'text-cyan-900',
            challenges: [
                { scenario: "A customer is furious because their 'guaranteed next-day' delivery is three days late and contains the wrong item. They've posted a one-star review and are demanding a full refund and compensation.", task: "Craft a prompt to write a compassionate and effective de-escalation email to a very angry customer, offering a specific resolution that aims to retain their business." },
                { scenario: "You've noticed a recurring question in your support chats about how to use a specific feature of your product. You want to create a proactive solution.", task: "Write a prompt to create a short, user-friendly 'mini-guide' with 3-5 steps (including emoji) that explains how to use a confusing product feature, which can be used as a saved reply in live chat." },
                { scenario: "A customer's subscription auto-renewed, and they are upset, claiming they were not notified. They want an immediate refund, but it's against policy after a certain date.", task: "Generate a prompt to write a polite and firm response to a customer requesting a refund that is outside the policy window, explaining the policy while still offering a small, alternative gesture of goodwill (e.g., a discount on their next purchase)." },
                { scenario: "Your manager has asked you to analyze customer feedback from the last month's surveys to identify the top area for improvement.", task: "Create a prompt to analyze a spreadsheet of customer survey responses (with scores and comments) and summarize the main theme of the negative feedback into a single, actionable insight for the product team." },
                { scenario: "A loyal customer for over 5 years has had their first bad experience and has written a long, disappointed email. You want to personally call them to fix it.", task: "Write a prompt to generate a call script for a follow-up phone call to a loyal customer after a service failure, with the goal of apologizing sincerely and regaining their trust." },
                { scenario: "You're handling a social media account and see a public complaint about your company's service. You need to respond publicly before taking the conversation private.", task: "Craft a prompt to write a brief, professional public response to a customer complaint on Twitter, acknowledging their issue and directing them to a private channel (like DMs) to resolve it." },
                { scenario: "A potential customer is asking detailed questions in a live chat that you can't answer. You need to escalate the chat to a senior technical support specialist.", task: "Generate a prompt to write a concise internal message to a Tier 2 support agent, summarizing the customer's issue and the steps you've already taken, to ensure a smooth handover." },
                { scenario: "The company is sunsetting an old feature that a small group of customers still use. You need to inform them gently and guide them to the new alternative.", task: "Write a prompt to draft a proactive and empathetic email to users of a feature that is being discontinued, explaining the change and clearly highlighting the benefits of the new replacement feature." },
                { scenario: "You want to go beyond just 'closing tickets' and start actively delighting customers. You need some ideas.", task: "Create a prompt to brainstorm five simple, low-cost ways a customer support agent can 'wow' a customer during a routine interaction." },
                { scenario: "After resolving a complex issue for a grateful customer, you want to ask them for a positive review or testimonial.", task: "Craft a prompt to write a friendly and non-pushy email to a happy customer, thanking them for their time and gently asking if they'd be willing to share their positive experience in a public review." },
            ] 
        },
        { 
            name: 'Project Manager', 
            icon: ProjectManagerIcon,
            color: 'bg-teal-200',
            hoverColor: 'hover:bg-teal-300',
            textColor: 'text-teal-900',
            challenges: [
                { scenario: "You are kicking off a complex, 6-month project with team members from three different departments. You need to ensure everyone is aligned on the goals and roles from day one.", task: "Craft a prompt to generate a comprehensive project kickoff meeting agenda, including sections for project goals, scope, key deliverables, roles and responsibilities, and communication plan." },
                { scenario: "A key developer on your team has just resigned, putting a critical project milestone at risk. You need to immediately assess the impact and communicate a revised plan to stakeholders.", task: "Write a prompt to draft an urgent project status update for stakeholders, explaining the impact of a key team member's departure and outlining a mitigation plan with a revised timeline." },
                { scenario: "Your project's budget is tighter than expected, and the finance team has asked you to identify potential cost savings without compromising the core deliverables.", task: "Generate a prompt to analyze a project budget spreadsheet and identify three potential areas for cost reduction, along with the potential risks or trade-offs for each." },
                { scenario: "The project has entered the testing phase, and bug reports are flooding in without any clear priority, causing chaos for the development team.", task: "Create a prompt to establish a bug tracking and prioritization process, defining severity levels (e.g., Critical, High, Medium, Low) and a clear workflow for reporting and resolving issues." },
                { scenario: "A major stakeholder who was previously supportive has started to raise objections and challenge the project's direction in meetings.", task: "Write a prompt to create a stakeholder engagement plan for a difficult stakeholder, including strategies for re-aligning their expectations and improving communication." },
                { scenario: "Your team is consistently missing deadlines. You suspect the initial time estimates were too optimistic. You need to re-evaluate the project schedule.", task: "Craft a prompt to create a project re-planning document that includes a revised Gantt chart (description of tasks and dependencies) and a justification for the new timeline." },
                { scenario: "The project is halfway complete, and you need to prepare a mid-point review presentation for the executive steering committee.", task: "Generate a prompt to create an outline for a project status presentation, including slides for accomplishments to date, current budget vs. actuals, risks and issues, and next steps." },
                { scenario: "Two team members are having a disagreement about the best technical approach for a feature, and it's stalling progress.", task: "Write a prompt to draft a facilitation plan for a meeting between two team members to resolve a technical disagreement, focusing on objective criteria and the project's best interests." },
                { scenario: "The project is finally complete! You need to create a formal closure report to document its success and officially hand it over to the operations team.", task: "Create a prompt to generate a project closure report template, including sections for final project summary, performance against goals, final budget, and lessons learned." },
                { scenario: "You're managing a remote team across different time zones, and communication has been a challenge. You need to improve your communication rhythm.", task: "Craft a prompt to design a weekly communication plan for a remote project team, specifying the purpose and format of a weekly status email, a quick daily stand-up, and a bi-weekly deep-dive meeting." },
            ] 
        },
        { 
            name: 'Corporate Comms', 
            icon: CorpCommsIcon,
            color: 'bg-indigo-200',
            hoverColor: 'hover:bg-indigo-300',
            textColor: 'text-indigo-900',
            challenges: [
                { scenario: "The company is about to announce a major, and potentially unpopular, reorganization. You need to draft the internal announcement from the CEO to all employees.", task: "Craft a prompt to write a clear, empathetic, and reassuring internal announcement from the CEO about a company reorganization, explaining the rationale and the next steps for affected employees." },
                { scenario: "A negative and misleading article about the company has just been published by an industry blog. The leadership team wants to issue a public statement to correct the record.", task: "Write a prompt to draft a professional and non-defensive public statement responding to a negative news article, correcting factual inaccuracies while reinforcing the company's values." },
                { scenario: "The CEO is scheduled for a 15-minute interview on a popular business podcast next week. You need to prepare her with key talking points.", task: "Generate a prompt to create a briefing document for a CEO's podcast interview, including three key messages to convey, potential tough questions, and suggested answers." },
                { scenario: "The company just won a prestigious industry award. You need to write a press release to share the good news.", task: "Create a prompt to write a standard press release announcing a company award, including a compelling headline, a summary of the achievement, a quote from the CEO, and the company boilerplate." },
                { scenario: "You are launching a new corporate social responsibility (CSR) initiative focused on local volunteering. You need to create an internal campaign to get employees excited and involved.", task: "Write a prompt to create a communications plan to launch a new employee volunteering program, including an announcement email, intranet article, and ideas for a launch event." },
                { scenario: "An employee has posted something inappropriate on their personal social media that identifies them as working for your company, causing a minor online backlash.", task: "Craft a prompt to draft internal guidance for the HR and management teams on how to handle situations where an employee's personal social media conduct negatively impacts the company." },
                { scenario: "The quarterly all-hands meeting is next week, and you are responsible for the presentation deck. You need to compile updates from various departments into a cohesive story.", task: "Generate a prompt to create an outline and narrative flow for a quarterly all-hands presentation, weaving together updates from sales, marketing, and product into a single story of company progress." },
                { scenario: "You need to write a script for a 2-minute video featuring the Head of Product explaining a new feature to customers.", task: "Write a prompt to create a concise and engaging video script for a product leader, explaining the benefits of a new feature in simple, customer-friendly language." },
                { scenario: "A journalist has contacted you with detailed questions for a story about your company's culture. You need to prepare a response that is both positive and authentic.", task: "Create a prompt to draft a set of responses to a journalist's questions about company culture, providing specific examples that illustrate the company's values in action." },
                { scenario: "The company is updating its brand messaging. You need to create a one-page guide to help all employees understand and use the new messaging consistently.", task: "Craft a prompt to generate a one-page 'Brand Messaging Guide' that summarizes the company's mission, vision, and key value propositions, with 'do's and don'ts' for employees." },
            ] 
        },
    ];
    

    // --- Scoring Logic ---
    const scorePrompt = (prompt) => {
        let score = 0;
        const breakdown = {
            goal: { met: false, points: 25 },
            context: { met: false, points: 25 },
            expectations: { met: false, points: 25 },
            source: { met: false, points: 25 },
        };

        const goalKeywords = ['what i want', 'i want', 'give me', 'create', 'list', 'summarize', 'write', 'draft', 'generate', 'analyze', 'outline', 'compose', 'revise', 'design'];
        const contextKeywords = ['for a', 'for an', 'for my', 'to a', 'to an', 'because', 'upcoming meeting', 'client', 'team', 'employee', 'department', 'management', 'vendor'];
        const expectationKeywords = ['tone', 'format', 'style', 'bullet points', 'email', 'professional', 'friendly', 'concise', 'detailed', 'engaging', 'compassionate', 'step-by-step', 'table', 'json'];
        const sourceKeywords = ['using', 'based on', 'from the', 'attached', 'dataset', 'policy', 'information', 'data', 'file', 'spreadsheet', 'notes'];

        if (goalKeywords.some(kw => prompt.toLowerCase().includes(kw))) { score += breakdown.goal.points; breakdown.goal.met = true; }
        if (contextKeywords.some(kw => prompt.toLowerCase().includes(kw))) { score += breakdown.context.points; breakdown.context.met = true; }
        if (expectationKeywords.some(kw => prompt.toLowerCase().includes(kw))) { score += breakdown.expectations.points; breakdown.expectations.met = true; }
        if (sourceKeywords.some(kw => prompt.toLowerCase().includes(kw))) { score += breakdown.source.points; breakdown.source.met = true; }

        return { total: score, breakdown };
    };

    // --- Gemini API for Feedback and Perfect Prompt ---
    const getFeedbackAndPerfectPrompt = async (prompt, initialScore) => {
        setLoading(true);
        setRecommendation('');
        setPerfectPrompt('');

        const analysis = `Goal: ${initialScore.breakdown.goal.met ? 'Met' : 'Not Met'}, Context: ${initialScore.breakdown.context.met ? 'Met' : 'Not Met'}, Expectations: ${initialScore.breakdown.expectations.met ? 'Met' : 'Not Met'}, Source: ${initialScore.breakdown.source.met ? 'Met' : 'Not Met'}`;
        
        const geminiPrompt = `
            You are a prompt engineering coach. Your task is to provide feedback on a user's prompt and then create a "perfect" example prompt.
            The user is a ${selectedPersona}.
            The user's problem scenario is: "${currentChallenge.scenario}"
            The user's task is: "${currentChallenge.task}"
            
            Here is the user's prompt: "${prompt}"
            
            My initial analysis of the user's prompt is: ${analysis}

            Please provide a response in a JSON format with two keys: "recommendation" and "idealPrompt".
            1. "recommendation": A string containing friendly, actionable feedback, between 100 and 150 words. Structure the feedback with a heading for each criterion that needs improvement, starting the heading with the criterion name followed by a colon (e.g., "Goal:"). If all criteria are met, provide a short congratulatory message.
            2. "idealPrompt": A string containing a complete, concise, and brief "perfect" prompt for the user's task that clearly demonstrates all four criteria. The prompt must be a maximum of 120 words.
        `;

        try {
            let chatHistory = [{ role: "user", parts: [{ text: geminiPrompt }] }];
            const payload = { 
                contents: chatHistory,
                generationConfig: {
                    responseMimeType: "application/json",
                }
            };
            const apiKey = ""; // API key will be injected by the environment
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error(`API call failed with status: ${response.status}`);

            const result = await response.json();
            
            if (result.candidates && result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                const parsedJson = JSON.parse(text);
                setRecommendation(parsedJson.recommendation || "No recommendation provided.");
                setPerfectPrompt(parsedJson.idealPrompt || "No ideal prompt provided.");
            } else {
                 setRecommendation("Could not get recommendations at this time.");
                 setPerfectPrompt("Could not generate a suggested prompt.");
            }
        } catch (error) {
            console.error("Error fetching feedback:", error);
            setRecommendation("There was an error getting recommendations. Please try again later.");
            setPerfectPrompt("There was an error generating the suggested prompt.");
        } finally {
            setLoading(false);
        }
    };

    // --- Download Handler ---
    const handleDownload = async (format) => {
        const resultsElement = document.getElementById('results-to-download');
        if (!resultsElement) {
            alert("Could not find results to download.");
            return;
        }
        if (!window.html2canvas || !window.jspdf) {
            alert("Download libraries are still loading. Please try again in a moment.");
            return;
        }
        
        setIsDownloading(true);

        const canvas = await window.html2canvas(resultsElement, { 
            scale: 2,
            backgroundColor: '#f9fafb'
        });

        if (format === 'png') {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'prompt-challenge-results.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else if (format === 'pdf') {
            const imgData = canvas.toDataURL('image/png');
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: 'p',
                unit: 'mm',
                format: 'a4'
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const ratio = canvasWidth / canvasHeight;
            
            const imgWidth = pdfWidth - 20; // with margin
            const imgHeight = imgWidth / ratio;
            
            pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
            pdf.save('prompt-challenge-results.pdf');
        }
        setIsDownloading(false);
    };


    // --- Event Handlers ---
    const handlePersonaSelect = (personaName) => {
        const personaData = personas.find(p => p.name === personaName);
        const randomIndex = Math.floor(Math.random() * personaData.challenges.length);
        const randomChallenge = personaData.challenges[randomIndex];

        setSelectedPersona(personaName);
        setCurrentChallenge(randomChallenge);
        setCurrentPage('challenge');
    };
    
    const handleResetChallenge = () => {
        const personaData = personas.find(p => p.name === selectedPersona);
        const randomIndex = Math.floor(Math.random() * personaData.challenges.length);
        const randomChallenge = personaData.challenges[randomIndex];

        setCurrentChallenge(randomChallenge);
        setUserPrompt('');
        setScore(null);
        setRecommendation('');
        setPerfectPrompt('');
        setCurrentPage('challenge');
    };

    const handleNewPersona = () => {
        setSelectedPersona(null);
        setCurrentChallenge(null);
        setUserPrompt('');
        setScore(null);
        setRecommendation('');
        setPerfectPrompt('');
        setCurrentPage('personas');
    };

    const handleSubmit = () => {
        if (!userPrompt.trim()) return;
        const newScore = scorePrompt(userPrompt);
        setScore(newScore);
        getFeedbackAndPerfectPrompt(userPrompt, newScore);
    };

    // --- Render Methods ---
    
    const renderColoredRecommendation = () => {
        if (!recommendation || !score) return <p>{recommendation}</p>;

        // Split by the specific headings. The regex captures the delimiter so we can keep it.
        const parts = recommendation.split(/(\b(?:Goal:|Context:|Expectations:|Source:)\b)/g);

        return (
            <p>
                {parts.map((part, index) => {
                    if (/^(Goal:|Context:|Expectations:|Source:)$/.test(part)) {
                        const criterion = part.slice(0, -1).toLowerCase();
                        const isMet = score.breakdown[criterion]?.met;
                        const colorClass = isMet ? 'text-green-600 font-bold' : 'text-red-500 font-bold';
                        return <strong key={index} className={colorClass}>{part} </strong>;
                    }
                    return <span key={index}>{part}</span>;
                })}
            </p>
        );
    };

    const renderWelcomePage = () => (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">Welcome to the Prompt Challenge!</h1>
            <p className="text-lg text-gray-600 mb-8 text-center">Let's sharpen your prompt engineering skills together.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Information</h2>
                    <div className="space-y-4">
                        <input type="text" placeholder="Nickname" value={nickname} onChange={e => setNickname(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                        <input type="text" placeholder="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                        <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Objectives & Rationale</h2>
                    <p className="text-gray-600">
                        This challenge is designed to help you master the art of writing effective prompts for AI models.
                        Well-crafted prompts are crucial for getting accurate, relevant, and high-quality responses. By practicing here, you'll learn to structure your requests for better results in your daily work.
                    </p>
                </div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100 mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Quick Guide to Effective Prompting</h2>
                <ul className="space-y-3 text-gray-600">
                    <li><strong className="text-indigo-600">Goal (Be Clear):</strong> Start with a clear action verb. State exactly what you want the AI to do (e.g., "Create a list...", "Summarize this text...", "Write an email...").</li>
                    <li><strong className="text-indigo-600">Context (Be Specific):</strong> Provide necessary background. Who is the audience? What is the situation? The more relevant details, the better the output.</li>
                    <li><strong className="text-indigo-600">Expectations (Set the Format):</strong> Define the desired output format and style. Do you need bullet points, a table, or a formal email? Specify the tone (e.g., friendly, authoritative).</li>
                    <li><strong className="text-indigo-600">Source (Provide the Data):</strong> Tell the AI what information to use. Mention if it should use an attached document, a specific data set, or general knowledge.</li>
                </ul>
            </div>
            
            <div className="flex items-center justify-center space-x-3 mb-6">
                <input type="checkbox" id="agree" checked={hasAgreed} onChange={() => setHasAgreed(!hasAgreed)} className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="agree" className="font-medium text-gray-700">Okay to proceed</label>
            </div>

            <button
                onClick={() => setCurrentPage('personas')}
                disabled={!hasAgreed}
                className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                Proceed to Challenge
            </button>
        </div>
    );

    const renderPersonaSelector = () => (
        <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Select Your Persona</h1>
            <p className="text-lg text-gray-600 mb-8">Choose a role to begin the challenge scenario.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {personas.map(p => (
                    <button
                        key={p.name}
                        onClick={() => handlePersonaSelect(p.name)}
                        className={`p-6 rounded-xl shadow-sm transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex flex-col items-center justify-center aspect-square ${p.color} ${p.hoverColor}`}
                    >
                        <p.icon className={`w-16 h-16 mx-auto mb-3 ${p.textColor}`} />
                        <span className={`font-semibold text-center ${p.textColor}`}>{p.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );

    const renderChallenge = () => (
        <div>
             <button onClick={handleNewPersona} className="mb-6 text-indigo-600 hover:text-indigo-800 font-semibold flex items-center">
                <Icon path="M15.75 19.5L8.25 12l7.5-7.5" className="w-5 h-5 mr-2" />
                Choose New Persona
            </button>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Challenge for: <span className="text-indigo-600">{selectedPersona}</span></h2>
                <div className="mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                    <h3 className="font-semibold text-gray-700">Problem Scenario:</h3>
                    <p className="text-gray-600">{currentChallenge.scenario}</p>
                </div>
                <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
                    <h3 className="font-semibold text-gray-700">Your Task:</h3>
                    <p className="text-gray-600">{currentChallenge.task}</p>
                </div>
                <textarea
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                    className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                    placeholder="Write your prompt here..."
                />
                <button
                    onClick={handleSubmit}
                    className="mt-4 w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 disabled:bg-gray-400"
                    disabled={!userPrompt.trim()}
                >
                    Submit & Score Prompt
                </button>
            </div>
        </div>
    );

    const renderScorePage = () => (
        <div className="w-full">
            {isDownloading && (
                <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
                    <div className="text-center">
                        <p className="text-lg font-semibold text-indigo-600">Generating your file, please wait...</p>
                    </div>
                </div>
            )}
            <div id="results-to-download" className="bg-gray-50 p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your Results, {nickname || 'Challenger'}!</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Left Column: Your Prompt & Score */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-md border">
                            <h3 className="text-xl font-semibold text-gray-700 mb-3">Your Submitted Prompt</h3>
                            <p className="p-4 bg-gray-50 rounded-md text-gray-600 italic">"{userPrompt}"</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">Score Breakdown</h3>
                            <div className="space-y-3">
                                {Object.entries(score.breakdown).map(([key, value]) => (
                                    <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center">
                                            {value.met ? <CheckIcon /> : <XCircleIcon />}
                                            <span className="ml-3 capitalize font-medium text-gray-700">{key}</span>
                                        </div>
                                        <span className={`font-bold ${value.met ? 'text-green-600' : 'text-red-600'}`}>{value.met ? `+${value.points}` : '+0'}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 text-center p-4 bg-indigo-100 rounded-lg">
                                <span className="text-lg font-medium text-indigo-800">Total Score:</span>
                                <span className="text-3xl font-bold text-indigo-600 ml-2">{score.total}</span>
                                <span className="text-lg font-medium text-indigo-800">/100</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Action Buttons */}
                    <div className="flex flex-col space-y-4">
                         <button onClick={handleResetChallenge} className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition text-center">Try New Scenario</button>
                         <button onClick={handleNewPersona} className="w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-indigo-700 transition text-center">Choose New Persona</button>
                         <div className="pt-4 border-t">
                            <h3 className="text-lg font-semibold text-gray-700 mb-3 text-center">Download Results</h3>
                            <button onClick={() => handleDownload('pdf')} className="w-full mb-3 inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                                <DownloadIcon />
                                Download as PDF
                            </button>
                            <button onClick={() => handleDownload('png')} className="w-full inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                                <DownloadIcon />
                                Download as Image
                            </button>
                         </div>
                    </div>
                </div>

                {/* Bottom Full-Width Row: AI Feedback */}
                <div className="space-y-8">
                     <div className="bg-white p-6 rounded-xl shadow-md border">
                         <h3 className="text-xl font-semibold text-gray-700 mb-3">AI Recommendations</h3>
                         <div className="p-4 bg-gray-50 rounded-md prose prose-sm max-w-none">
                             {loading && <div className="flex justify-center items-center h-24"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div></div>}
                             {!loading && recommendation && renderColoredRecommendation()}
                         </div>
                    </div>
                     <div className="bg-slate-100 p-6 rounded-xl shadow-md border border-slate-200">
                         <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center"><SparklesIcon /><span className="ml-2">Suggested Perfect Prompt</span></h3>
                         <div className="p-4 bg-slate-50 rounded-md prose prose-sm max-w-none">
                             {loading && <div className="flex justify-center items-center h-24"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-600"></div></div>}
                             {!loading && perfectPrompt && <p className="text-slate-700 italic">{perfectPrompt}</p>}
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
    const renderCurrentPage = () => {
        if (score) {
            return renderScorePage();
        }
        switch (currentPage) {
            case 'welcome':
                return renderWelcomePage();
            case 'personas':
                return renderPersonaSelector();
            case 'challenge':
                if (currentChallenge) {
                    return renderChallenge();
                }
                return renderPersonaSelector();
            default:
                return renderWelcomePage();
        }
    }

    return (
        <div className="bg-gray-50 min-h-screen p-4 sm:p-8 flex items-center justify-center font-sans">
            <div className="max-w-6xl w-full">
                {renderCurrentPage()}
            </div>
        </div>
    );
};

export default App;
