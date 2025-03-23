import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Share2, ArrowLeft, PenTool } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';
import GuestPostForm from '../components/GuestPostForm';

const articles = {
  'enhancing-diversity': {
    title: "Enhancing Patient Diversity in Clinical Trials",
    date: "April 2025",
    author: "Dr. Sarah Johnson",
    authorTitle: "Director of Clinical Research Innovation",
    content: `
# Enhancing Patient Diversity in Clinical Trials: A Strategic Guide for Modern Research

## Executive Summary

This white paper examines the critical importance of diversity in clinical trials and provides actionable strategies for improving representation across different demographic groups. As the healthcare industry evolves, ensuring diverse participation in clinical research has become not just an ethical imperative but a scientific necessity for developing effective treatments for all populations.

## Introduction

Clinical trial diversity remains one of the most pressing challenges in medical research. Despite regulatory guidance and industry initiatives, many trials still fail to reflect the true demographic composition of patient populations. This paper presents evidence-based approaches to address this challenge and create more inclusive clinical research programs.

## Current State of Clinical Trial Diversity

### Key Statistics

- Only 5-10% of clinical trial participants come from minority populations
- 75% of trial participants are typically Caucasian
- Geographic and socioeconomic barriers limit access for many potential participants

### Impact on Medical Research

Limited diversity in clinical trials can lead to:
- Incomplete understanding of drug efficacy across populations
- Missed opportunities for identifying population-specific responses
- Reduced generalizability of trial results
- Potential safety risks when treatments are applied broadly

## Strategic Framework for Enhancing Diversity

### 1. Community Engagement

#### Building Trust
- Establish long-term relationships with community leaders
- Create cultural competency training programs
- Develop transparent communication channels

#### Community Partnerships
- Collaborate with local healthcare providers
- Engage with community organizations
- Support health education initiatives

### 2. Protocol Design Considerations

#### Inclusive Eligibility Criteria
- Review and eliminate unnecessary exclusion criteria
- Consider real-world patient populations
- Account for genetic and environmental factors

#### Practical Considerations
- Flexible visit schedules
- Transportation support
- Multilingual study materials
- Cultural adaptation of protocols

### 3. Site Selection and Support

#### Geographic Strategy
- Identify underserved areas
- Partner with community health centers
- Utilize mobile research units

#### Site Support
- Provide cultural competency training
- Offer translation services
- Implement diversity recruitment tools

### 4. Technology Integration

#### Digital Solutions
- Remote participation options
- Mobile health technologies
- Electronic consent processes
- Virtual visit capabilities

#### Data Analytics
- Real-time diversity metrics
- Predictive modeling for recruitment
- Geographic mapping tools

## Implementation Framework

### Phase 1: Assessment
- Analyze current diversity metrics
- Identify specific gaps
- Define target populations

### Phase 2: Planning
- Develop targeted strategies
- Create implementation timelines
- Establish success metrics

### Phase 3: Execution
- Launch community initiatives
- Implement protocol modifications
- Deploy technology solutions

### Phase 4: Monitoring
- Track diversity metrics
- Gather feedback
- Make real-time adjustments

## Measuring Success

### Key Performance Indicators
1. Demographic representation metrics
2. Recruitment source analysis
3. Retention rates across populations
4. Patient satisfaction scores
5. Site performance metrics

## Recommendations

1. Establish clear diversity goals early in trial planning
2. Invest in community relationships before trial initiation
3. Implement flexible protocol designs
4. Utilize technology to reduce participation barriers
5. Monitor and adjust strategies continuously

## Conclusion

Enhancing diversity in clinical trials requires a comprehensive, systematic approach that addresses multiple barriers to participation. By implementing the strategies outlined in this paper, organizations can work toward more inclusive and representative clinical research programs.

## References

1. FDA Guidance on Enhancing Clinical Trial Diversity (2020)
2. NIH Policy on Inclusion in Clinical Research
3. Journal of Clinical Research Best Practices, Vol. 15
4. Clinical Trials Transformation Initiative Reports
5. Industry Association Guidelines on Diversity in Clinical Research

## About the Author

Dr. Sarah Johnson is the Director of Clinical Research Innovation at TheraNovex, with over 15 years of experience in clinical trial design and patient recruitment. She has published extensively on improving clinical trial accessibility and has been recognized for her work in developing innovative recruitment strategies.
    `
  },
  'ai-machine-learning': {
    title: "AI and Machine Learning in Clinical Research",
    date: "March 2025",
    author: "Dr. Michael Chen",
    authorTitle: "Head of AI Research & Development",
    content: `
# AI and Machine Learning in Clinical Research: Transforming Trial Design and Execution

## Executive Summary

This comprehensive white paper explores the transformative potential of artificial intelligence (AI) and machine learning (ML) in clinical research, examining current applications, emerging trends, and future possibilities. We provide a detailed analysis of how these technologies are revolutionizing trial design, patient recruitment, and data analysis.

## Introduction

The integration of AI and ML into clinical research represents a paradigm shift in how we approach trial design, execution, and analysis. This paper examines the current state of AI/ML implementation in clinical trials and provides a roadmap for organizations looking to leverage these technologies effectively.

## Current State of AI/ML in Clinical Research

### Key Applications
- Protocol design optimization
- Patient matching and recruitment
- Real-time data monitoring
- Safety signal detection
- Outcome prediction

### Market Overview
- Current adoption rates
- Key technology providers
- Implementation challenges
- Success metrics

## AI/ML Applications in Clinical Trials

### 1. Protocol Design and Optimization

#### Intelligent Protocol Development
- Historical data analysis
- Inclusion/exclusion criteria optimization
- Endpoint selection support
- Sample size calculation

#### Feasibility Analysis
- Site selection modeling
- Patient population analysis
- Resource requirement prediction
- Timeline optimization

### 2. Patient Recruitment and Retention

#### Smart Patient Matching
- Electronic health record analysis
- Genetic profile matching
- Real-time eligibility assessment
- Predictive dropout modeling

#### Engagement Optimization
- Personalized communication strategies
- Adherence prediction
- Risk factor identification
- Intervention timing optimization

### 3. Data Management and Analysis

#### Automated Data Cleaning
- Error detection algorithms
- Data consistency checking
- Missing data prediction
- Quality control automation

#### Advanced Analytics
- Pattern recognition
- Biomarker identification
- Safety signal detection
- Efficacy prediction

### 4. Real-time Monitoring

#### Safety Monitoring
- Adverse event prediction
- Risk pattern identification
- Early warning systems
- Safety signal detection

#### Performance Tracking
- Site performance analytics
- Enrollment rate optimization
- Protocol deviation detection
- Quality metrics tracking

## Implementation Framework

### Phase 1: Assessment
- Current capabilities evaluation
- Technology needs analysis
- Resource assessment
- ROI projection

### Phase 2: Infrastructure Setup
- Data architecture design
- Integration planning
- Security implementation
- Validation protocols

### Phase 3: Deployment
- Pilot program launch
- Staff training
- Process integration
- Performance monitoring

### Phase 4: Optimization
- Performance analysis
- System refinement
- Process improvement
- Capability expansion

## Best Practices and Guidelines

### Data Management
1. Data quality standards
2. Integration protocols
3. Security measures
4. Privacy protection

### Model Development
1. Validation procedures
2. Performance metrics
3. Bias detection
4. Update protocols

### Implementation
1. Change management
2. Training programs
3. Documentation requirements
4. Compliance monitoring

## Future Trends and Opportunities

### Emerging Technologies
- Natural language processing
- Computer vision
- Federated learning
- Quantum computing applications

### Future Applications
- Automated protocol writing
- Real-time protocol adaptation
- Predictive enrollment modeling
- Automated regulatory submissions

## Challenges and Solutions

### Technical Challenges
- Data quality issues
- Integration complexity
- Model validation
- Scalability concerns

### Organizational Challenges
- Change resistance
- Skill gaps
- Resource allocation
- Process adaptation

## Recommendations

1. Start with clear objectives and use cases
2. Build robust data infrastructure
3. Ensure proper validation protocols
4. Maintain human oversight
5. Monitor and measure impact

## Conclusion

AI and ML are fundamentally transforming clinical research, offering unprecedented opportunities for efficiency, accuracy, and innovation. Organizations that successfully implement these technologies will be well-positioned for future success in clinical research.

## References

1. FDA Guidance on AI/ML in Clinical Trials
2. IEEE Standards for AI in Healthcare
3. Clinical Research in the Digital Age (2024)
4. Journal of Artificial Intelligence in Medicine
5. International Conference on ML in Clinical Research Proceedings

## About the Author

Dr. Michael Chen leads AI Research & Development at TheraNovex, combining expertise in artificial intelligence with extensive experience in clinical research. He has pioneered several breakthrough applications of AI in clinical trials and regularly speaks at international conferences on the future of AI in healthcare.
    `
  },
  'regulatory-compliance': {
    title: "Regulatory Compliance in the Digital Age",
    date: "February 2025",
    author: "Dr. Emily Rodriguez",
    authorTitle: "Head of Regulatory Affairs",
    content: `
# Regulatory Compliance in the Digital Age: Navigating Modern Clinical Trial Requirements

## Executive Summary

This white paper provides a comprehensive overview of regulatory compliance challenges and solutions in the era of digital clinical trials. We examine how organizations can maintain compliance while leveraging modern technologies and innovative trial designs.

## Introduction

The digital transformation of clinical trials has introduced new regulatory challenges while creating opportunities for more efficient and patient-centric research. This paper explores the evolving regulatory landscape and provides practical guidance for maintaining compliance in the digital age.

## Current Regulatory Landscape

### Key Regulations
- FDA 21 CFR Part 11
- GDPR requirements
- HIPAA compliance
- ICH GCP E6(R3)

### Digital Trial Considerations
- Electronic consent
- Remote monitoring
- Digital data collection
- Virtual trial conduct

## Digital Compliance Framework

### 1. Electronic Systems Validation

#### System Requirements
- Audit trail capabilities
- Electronic signatures
- Data integrity controls
- Security measures

#### Validation Process
- Risk assessment
- Requirements specification
- Testing protocols
- Documentation standards

### 2. Data Privacy and Security

#### Data Protection
- Encryption standards
- Access controls
- Data transfer protocols
- Storage requirements

#### Privacy Compliance
- Consent management
- Data minimization
- Subject rights
- International transfers

### 3. Remote Trial Conduct

#### Virtual Visits
- Identity verification
- Data collection
- Quality assurance
- Documentation requirements

#### Remote Monitoring
- Source data verification
- Risk-based monitoring
- Quality control
- Issue management

### 4. Electronic Documentation

#### Document Control
- Version management
- Change control
- Approval workflows
- Archive procedures

#### Essential Documents
- Regulatory submissions
- Trial master file
- Site files
- Subject records

## Implementation Strategy

### Phase 1: Assessment
- Current state analysis
- Gap identification
- Risk assessment
- Resource planning

### Phase 2: Development
- Policy creation
- Procedure development
- Training materials
- Implementation plans

### Phase 3: Implementation
- System deployment
- Staff training
- Process integration
- Compliance monitoring

### Phase 4: Maintenance
- Regular audits
- Updates management
- Continuous improvement
- Performance monitoring

## Best Practices

### System Selection
1. Regulatory compliance
2. Validation requirements
3. Integration capabilities
4. Support services

### Process Design
1. Risk-based approach
2. Quality by design
3. Efficiency optimization
4. Compliance assurance

### Training Programs
1. Initial qualification
2. Ongoing education
3. Competency assessment
4. Documentation requirements

## Risk Management

### Risk Assessment
- System vulnerabilities
- Process weaknesses
- Compliance gaps
- Control effectiveness

### Mitigation Strategies
- Preventive controls
- Detective controls
- Corrective actions
- Monitoring programs

## Quality Management System

### Key Components
1. Quality manual
2. SOPs
3. Work instructions
4. Forms and templates

### Quality Metrics
1. Compliance rates
2. Audit findings
3. Issue resolution
4. Training completion

## Recommendations

1. Implement risk-based approaches
2. Maintain comprehensive documentation
3. Ensure adequate training
4. Monitor compliance continuously
5. Stay current with regulations

## Future Considerations

### Emerging Technologies
- Artificial intelligence
- Blockchain
- Cloud computing
- Mobile applications

### Regulatory Trends
- Harmonization efforts
- New guidelines
- Technology adoption
- International standards

## Conclusion

Maintaining regulatory compliance in the digital age requires a comprehensive approach that combines traditional principles with modern technologies. Organizations must stay agile while ensuring robust compliance programs.

## References

1. FDA Guidance on Digital Health Technologies
2. EMA Guidelines on Computerized Systems
3. MHRA Data Integrity Guidance
4. ICH GCP E6(R3) Draft Guidelines
5. PIC/S Guidance on Computerized Systems

## About the Author

Dr. Emily Rodriguez is the Head of Regulatory Affairs at TheraNovex, with over 20 years of experience in regulatory compliance and clinical research. She has been instrumental in developing compliance strategies for digital clinical trials and regularly contributes to regulatory guidance development.
    `
  },
  'your-next-trial': {
    title: "Your Next Trial Deserves Better Sites—Theranovex Makes It Happen",
    date: "May 2025", 
    author: "Dr. James Wilson",
    authorTitle: "VP of Clinical Operations",
    content: `
# Your Next Trial Deserves Better Sites—Theranovex Makes It Happen

## Executive Summary

Clinical trials often face delays and setbacks. This slows down the progress toward life-saving treatments. Sites struggle with getting patients enrolled, lack resources, and use outdated processes. This leaves teams overworked and timelines at risk.

Theranovex changes this by offering AI-driven solutions. These solutions are tailored to the needs of clinical research. Our technology streamlines recruitment, turning enrollment challenges into opportunities.

A quality trial website paired with smart algorithms finds eligible participants faster. Theranovex reduces administrative burdens. This lets your team focus on accelerating trials without sacrificing quality.

## Key Takeaways

- Theranovex uses AI to solve patient recruitment bottlenecks for clinical trials
- Quality trial website tools cut enrollment delays by targeting the right patients
- Automated systems free staff time, improving site efficiency and patient care
- AI solutions lower costs while boosting trial participation rates
- Modern technology ensures trials stay on track to deliver treatments faster

## The Hidden Challenges Clinical Research Sites Face Today

Clinical research sites face big hurdles that slow them down and cost a lot. Finding participants and managing resources are major challenges. These issues block progress in science and money goals. Knowing these problems shows why old ways don't work.

### Patient Recruitment Bottlenecks That Delay Progress

Recruitment problems come from three main issues:

- Inconsistent eligibility criteria leading to 30%+ screen failures
- Competition from other trials for the same patient demographics
- Lack of centralized databases to track potential participants

These problems make teams spend weeks on legal fights over when to start trials.

### Resource Allocation Issues in Clinical Research

Sites struggle to balance staff between caring for patients and trial work. This often means they ignore important rules. Key problems include:

- Over 40% of staff time spent on administrative tasks
- Understaffed compliance teams needing external legal services for protocol reviews
- Spread too thin to optimize recruitment strategies

### The True Cost of Enrollment Delays

Every day of delay costs more than just time:

- Financial: Average trials lose $10,000 daily due to extended timelines
- Scientific: Lost chances to test therapies during key research times
- Legal: Delays lead to penalties that need court help

Theranovex's tools help solve these problems. They cut down on expensive legal help and speed up finding patients.

## Why Every Trial Deserves Better Sites

Clinical trials are key to medical progress, but old site practices slow them down. Better sites mean faster start-ups, more accurate data, and happier patients. Sites that work well save money by avoiding costly delays.

Studies show trials missing their goals cost over $80 million a year. Sites that are optimized cut protocol errors by 30% or more. This makes trials more efficient and ethical.

When sites focus on quality, patients get treatments faster. It's important to follow the law. Using attorney resources and online legal support helps meet legal standards without slowing things down.

- **Time saved:** Less paperwork lets researchers focus on science
- **Data integrity:** Better workflows reduce errors
- **Trust built:** Clear, well-run sites attract more participants

Every delay in treatment development costs lives. Modern sites are not just tools; they're moral necessities. By fixing these gaps, we make clinical trials drivers of innovation, not obstacles.

## Introducing Theranovex: AI-Powered Patient Recruitment

Theranovex uses AI and clinical knowledge to improve clinical research. Our platform helps trials move faster while keeping ethics high. We follow strict rules, making sure we meet justice system help standards.

### Proprietary Technology Built for Life Sciences

Our AI is made for life sciences, with help from top clinical experts. It looks at lots of data to find the right patients quickly. This tech also changes as research does, fitting right into your work.

### How Our Intelligent Targeting Works

Our smart targeting finds the best patients for trials. It uses:

- Demographic and health data analysis
- Real-time eligibility verification
- Automated outreach prioritization

This makes it easier to find patients who will join, saving time and money.

### The Human Touch Behind Our AI Solutions

Our team of experts checks AI decisions for ethics and patient care. This human touch is like a premium law firm site, ensuring fairness and openness. Our team makes the final choices, mixing new ideas with responsibility.

Theranovex doesn't just speed up finding patients. It also builds trust. We handle the details, so your team can focus on science and caring for patients.

## Connecting Your Study to Major Recruitment Networks

Theranovex connects your clinical trial to the biggest healthcare recruitment platforms. We work with big names like PatientCrossroads, CenterWatch, and ResearchMatch. This way, your study finds the right participants quickly. Our motto, Trial Deserves Better Sites, guides us to grow your reach without overloading your team.

### Expanding Your Reach Without Expanding Your Workload

Our platform links to 15+ patient databases and expert trial advocacy networks. Here's how it works:

- **Database Integration:** Syncs with leading health systems and EHR platforms to find eligible candidates
- **Advocacy Partnerships:** Works with trusted groups like the Leukemia & Lymphoma Society to increase visibility
- **Digital Outreach:** Uses Google Ads, social media, and health forums to reach potential participants

No need for manual data entry or extra staff. Our AI sorts leads and sends them straight to your site.

### Multi-Channel Recruitment Strategies That Deliver Results

Theranovex uses a mix of automated and human-driven methods:

1. **Social Media:** Runs targeted ads on Facebook and LinkedIn for specific diseases
2. **Physician Networks:** Gets referrals from over 50,000 doctors in our database
3. **Community Outreach:** Partners with local hospitals and patient groups for grassroots efforts

All channels feed into one dashboard. This lets you see metrics in real-time without juggling systems. Sites using our strategy enroll 40% faster than usual methods.

## How Theranovex Transforms Site Performance

Theranovex's solutions make big changes in clinical research. Sites see up to 40% faster enrollment thanks to our quality trial website. AI checks if patients qualify in real time, cutting down on errors.

Staff follow rules better, with a 35% boost in protocol adherence. This is thanks to automated alerts that guide them through steps.

- **Time-to-enrollment** reduced by optimizing participant outreach
- **Screen failure rates** cut by predictive analytics
- **Resource allocation** boosted via dynamic workflow tools

One site saw a 60% increase in enrollment in just six months. Another saved 25% on admin hours with our legal services module. This module handles IRB documents and consent form updates automatically.

These improvements attract more sponsors, leading to more trials. Sites using Theranovex keep 90% of new trial opportunities, helping them grow.

Transparency is key, from dashboards to compliance audits. This lets sites focus on research, not paperwork. Enrollment times get shorter, budgets stay on track, and science moves forward.

## The Automation Advantage: Streamlining Clinical Trial Workflows

Theranovex's automation changes clinical workflows for the better. It lets teams focus on important work, not just routine tasks. With smart technology, sites cut down on paperwork, freeing staff to care for patients and advance science.

### Reducing Administrative Burden Through Smart Technology

Automated systems take care of tasks like pre-screening and scheduling. This cuts down on paperwork by up to 30%. Staff can then spend more time with patients and work with attorney resources to keep protocols legal. This saves time and speeds up recruitment without risking compliance.

### Customizable Solutions That Adapt to Your Protocols

Our platform fits any study's needs, even complex ones. You don't need tech skills to set it up. Just adjust the settings to match your trial goals. This makes it easy to meet court case representation standards.

### Real-Time Analytics and Performance Tracking

Get updates on enrollment, conversion rates, and compliance with live dashboards. Teams can make quick changes based on these insights. This keeps everyone on track with legal and operational standards, backed by up-to-date data for audits or court case representation.

## Measurable Results: Faster Enrollment, Fewer Delays

Theranovex's impact is clear in numbers. Sites using our platform see a 40% reduction in recruitment periods. Screen-to-randomization rates jump by 35%. This means less time waiting and more time for research.

- Phase II trials shortened by 30+ days on average
- Protocol adherence improved by 25% through real-time analytics
- 95% of partners report smoother regulatory compliance

These numbers lead to real benefits. Faster enrollment means sponsors get results quicker, saving money. Sites can handle more trials, helping more people.

Online legal support keeps things running smoothly. Justice system help ensures ethics are upheld without slowing things down.

Studies show Theranovex users have 60% fewer protocol deviations. This leads to stronger sponsor relationships and quicker funding. Every hour saved means 20% more time for patient care, speeding up life-saving therapies.

## Refocusing Your Team on What Matters: Patient Care and Research

Theranovex's systems reduce recruitment work, freeing teams to focus on key goals. With expert trial advocacy, staff can spend more time on patient care and research. By using premium law firm site tools, your team works more efficiently.

### Reclaiming Valuable Clinical Hours

Automated recruitment saves over 200 hours a year per site. Here's how time shifts:

| Before | After |
|--------|--------|
| Spent on outreach | Allocated to protocol design |
| Manual tracking | Patient education sessions |
| Administrative tasks | Staff training programs |

### Improving Site-Patient Relationships

With more time, staff now:

- Hold 40% more one-on-one consultations
- Address personalized questions during visits
- Track 30% higher retention rates

Clinicians build trust, leading to better adherence and outcomes. Premium law firm site compliance ensures ethical standards while fostering stronger patient partnerships. Expert trial advocacy also drives protocol improvements, turning saved hours into breakthroughs.

## The Broader Impact: Bringing Life-Changing Treatments to Market Faster

Every month saved in clinical trials means hope restored for those waiting. Theranovex's focus on quality trial websites ensures trials run smoothly. This turns scientific progress into real-world impact. When enrollment accelerates, the entire journey—from lab to patient—shrinks.

Cutting years into months for therapies to reach desperate communities.

### From Recruitment to Regulatory Approval: Accelerating the Timeline

Efficiencies in recruitment directly shrink the path to regulatory milestones. Here's how:

1. Streamlined patient matching cuts enrollment phases by 40% on average
2. Automated data pipelines reduce errors, speeding up submissions to agencies like the FDA
3. Real-time analytics allow teams to adjust protocols faster, avoiding costly delays

### Patient Stories: The Real Difference Better Sites Make

Behind every accelerated timeline is a story of resilience. Consider these outcomes from Theranovex-supported trials:

- A 32-year-old with multiple sclerosis accessed a novel drug six months earlier, halting disease progression
- A pediatric cancer study enrolled 30% faster, giving children life-extending therapies sooner
- Patients in rural areas discovered trials via our Trial Deserves Better Sites network, connecting them to hope they might have missed

These moments define our mission: turning data into healing. By prioritizing a quality trial website, we ensure breakthroughs don't linger in labs. Every second saved is a heartbeat closer to a cure.

## Conclusion: Partner With Theranovex for Your Next Clinical Trial

Theranovex offers solutions that change clinical research. We use AI and legal services together. This reduces delays and makes sure everything is done right.

Our online legal support makes things easier. It simplifies paperwork and keeps risks low. This doesn't add extra work for you.

Working with us is more than just using new tech. It's about working with a system that speeds things up. Our tools and legal help make sure your site can do its best work.

Every trial we help with brings treatments to people faster. It's all about making a difference sooner.

Want to move your study forward? Ask for a consultation. See how Theranovex's AI and legal help can make your study better. Our team will make a plan that fits your needs. Together, we make sure breakthroughs help people, fast and right.
    `
  }
};

const WhitePaperArticle = () => {
  const [showGuestPostForm, setShowGuestPostForm] = useState(false);
  const { id } = useParams();
  const article = articles[id as keyof typeof articles];

  const handleGuestPostSubmit = (data: {
    title: string;
    author: string;
    authorTitle: string;
    content: string;
  }) => {
    // Here you would typically send the data to your backend
    console.log('Guest post submitted:', data);
    // Show success message or handle the submission
    setShowGuestPostForm(false);
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <AccessibilityMenu />
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 md:px-8 py-16">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <Link to="/white-papers" className="text-purple-700 hover:underline">
              Return to White Papers
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const renderMarkdown = (content: string) => {
    return content.split('\n').map((line, index) => {
      // Headers
      if (line.startsWith('#')) {
        const level = line.match(/^#+/)?.[0].length || 1;
        const text = line.replace(/^#+\s/, '');
        const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
        const className = level === 1 ? 'text-3xl font-bold mb-6' :
                         level === 2 ? 'text-2xl font-bold mb-4 mt-8' :
                         'text-xl font-bold mb-3 mt-6';
        return React.createElement(HeadingTag, { key: index, className }, text);
      }

      // Lists
      if (line.startsWith('-') || line.startsWith('*')) {
        return (
          <li key={index} className="ml-6 mb-2 list-disc">
            {line.substring(2)}
          </li>
        );
      }

      // Numbered lists
      if (line.match(/^\d+\./)) {
        return (
          <li key={index} className="ml-6 mb-2 list-decimal">
            {line.replace(/^\d+\.\s/, '')}
          </li>
        );
      }

      // Bold text
      if (line.includes('**')) {
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={index} className="mb-4">
            {parts.map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i}>{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </p>
        );
      }

      // Italic text
      if (line.includes('*')) {
        const parts = line.split(/(\*.*?\*)/g);
        return (
          <p key={index} className="mb-4">
            {parts.map((part, i) => {
              if (part.startsWith('*') && part.endsWith('*')) {
                return <em key={i}>{part.slice(1, -1)}</em>;
              }
              return part;
            })}
          </p>
        );
      }

      // Tables
      if (line.includes('|')) {
        const rows = line.split('\n').filter(row => row.trim());
        if (rows.length > 0) {
          const cells = rows[0].split('|').filter(cell => cell.trim());
          return (
            <table key={index} className="w-full mb-4 border-collapse">
              <tbody>
                <tr>
                  {cells.map((cell, i) => (
                    <td key={i} className="border p-2">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          );
        }
      }

      // Regular paragraphs
      if (line.trim()) {
        return <p key={index} className="mb-4">{line}</p>;
      }

      // Empty lines
      return <br key={index} />;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <AccessibilityMenu />
      <Header />
      
      <main className="pt-20">
        <section className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Link 
                to="/white-papers" 
                className="inline-flex items-center text-white/80 hover:text-white mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to White Papers
              </Link>
              <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full mb-6">
                <FileText className="h-5 w-5 mr-2" />
                <span className="font-semibold">WHITE PAPER</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center">
                  <div className="text-lg">{article.date}</div>
                </div>
                <div>
                  <div className="font-semibold">{article.author}</div>
                  <div className="text-white/80">{article.authorTitle}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <article className="prose prose-lg max-w-none">
                  {renderMarkdown(article.content)}
                </article>
              </div>
              
              <div className="lg:w-1/3">
                <div className="sticky top-24 space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Share this Article</h3>
                    <div className="flex space-x-4">
                      <motion.button 
                        className="bg-purple-100 p-2 rounded-full text-purple-700 hover:bg-purple-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Share2 className="h-5 w-5" />
                      </motion.button>
                      <motion.button 
                        className="bg-purple-100 p-2 rounded-full text-purple-700 hover:bg-purple-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Download className="h-5 w-5" />
                      
                      </motion.button>
                    </div>
                  </div>

                  <div className="bg-purple-900 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Need Help with Your Clinical Trials?</h3>
                    <p className="mb-6">
                      Let us help you implement these strategies in your next trial.
                    </p>
                    <Link to="/contact-us">
                      <motion.button 
                        className="w-full bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Contact Us
                      </motion.button>
                    </Link>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Share Your Expertise</h3>
                    <p className="text-gray-600 mb-6">
                      Have valuable insights to share with the clinical research community? Submit your white paper for publication.
                    </p>
                    <motion.button
                      onClick={() => setShowGuestPostForm(true)}
                      className="w-full bg-purple-700 text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-purple-800"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <PenTool className="mr-2 h-4 w-4" />
                      Submit a White Paper
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showGuestPostForm && (
        <GuestPostForm
          onClose={() => setShowGuestPostForm(false)}
          onSubmit={handleGuestPostSubmit}
        />
      )}

      <Footer />
    </div>
  );
};

export default WhitePaperArticle;