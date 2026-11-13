// ---------------------------------------------------------------
// Content — edit these arrays to update the site.
// TypeScript will flag typos and missing fields when you run `npm run build`.
// ---------------------------------------------------------------
import type { Community, Experience, Project, Research, SkillGroup } from './types';

export const typingPhrases = [
  'Computer Engineering @ Georgia Tech',
  'AI researcher',
  'Hardware enthusiast',
  'iOS developer',
];

export const focusTags = [
  'LLM reasoning',
  'Neurosymbolic AI',
  'RISC-V & RTL design',
  'SystemVerilog',
  'iOS development',
];

export const experience: Experience[] = [
  {
    role: 'Research Intern: LLM Reliability & Formal Reasoning',
    org: 'AIEA Lab, UC Santa Cruz · Prof. Leilani Gilpin',
    dates: 'Feb 2026 – May 2026',
    location: 'Santa Cruz, CA',
    points: [
      'Co-authored “Know Your Limits: On the Faithfulness of LLMs as Solvers and Autoformalizers in Legal Reasoning”; accepted to the AI4Law and AI for Math Workshops at ICML 2026.',
      'Exposed a critical gap between LLM accuracy and logical reliability by benchmarking 3 reasoning approaches across 5 LLMs; identified “scope laundering” in all 5 models, with rates from 15.3% (GPT) to 52.5% (Qwen).',
      'Achieved a 19.9% improvement in Claude’s legal entailment accuracy using first-order logic reasoning.',
    ],
  },
  {
    role: 'Research Intern: Neuro-Symbolic AI',
    org: 'AIEA Lab, UC Santa Cruz · Prof. Leilani Gilpin',
    dates: 'June 2025 – Oct 2025',
    location: 'Santa Cruz, CA',
    points: [
      'Co-authored “Follow My Lead: Logical Fallacy Classification with Knowledge-Augmented LLMs.”',
      'Improved LLM accuracy in classifying logical fallacies by 20.7% with a neurosymbolic approach using Prolog-based relational graphs and stepwise instructions, without expensive model training.',
      'Built and evaluated AWS Bedrock Knowledge Bases for retrieval-augmented reasoning.',
      'Presented at the 2025 Advances in Cognitive Systems Conference at Georgia Tech and the 2025 Bay Area Machine Learning Symposium at Santa Clara University.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'Monta Vista Robotics Team (MVRT)',
    dates: 'June 2023 – Mar 2026',
    location: 'Cupertino, CA',
    tech: 'Java · CTRE Phoenix 6 · WPILib · SolidWorks · CAN bus',
    points: [
      'Programmed Java state-machine logic with WPILib to control robot intake modes from real-time sensor feedback; implemented game-piece intake using limit switches and PID control.',
      'Co-designed a dual-roller intake with game-piece detection sensors in SolidWorks, using belts and gears to drive counter-rotating rollers; intakes game pieces in under 6 seconds and competed in 4 matches.',
      'Programmed the outreach page for MVRT’s official website using HTML, CSS, JavaScript, Bootstrap, and jQuery.',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'RISC-V CPU',
    description:
      'A RISC-V CPU designed in SystemVerilog and taken from RTL through verification to a physical chip layout. Verified with directed and constrained-random tests, assertions and scoreboarding, catching all 3 intentionally injected hardware bugs through waveform analysis.',
    tech: 'SystemVerilog · Cadence Xcelium · Innovus · Synopsys DC',
    dates: 'Aug 2026 – Present',
  },
  {
    name: 'Murder On Enchanted Island',
    description: 'A multi-genre adventure game built entirely from scratch.',
    image: 'assets/MurderOnEnchatedIslandHomePage.jpg',
    github: 'https://github.com/tashvib/MurderOnEnchantedIsland',
  },
  {
    name: 'GreenOvation',
    description:
      'An iOS sustainability app using Inception v3 and YOLO computer vision models for waste classification and carbon-impact analysis, with a Firebase backend and 100+ users. Won Most Creative Hack at PoweringSTEMHacks2 and 3rd place in the Congressional App Challenge (OR-06).',
    tech: 'Swift · Firebase · CoreML · YOLOv3',
    image: 'assets/GreenovationLendingPage.jpg',
    github: 'https://github.com/tashvib/GreenOvationCode_',
    devpost: 'https://devpost.com/software/greenovation-h7d4v8',
  },
];

export const research: Research[] = [
  {
    title: 'Know Your Limits: On the Faithfulness of LLMs as Solvers and Autoformalizers in Legal Reasoning',
    venue: 'ICML 2026 Workshops · AI4Law & AI for Math',
    points: [
      'Co-authored paper accepted to the AI4Law and AI for Math Workshops at ICML 2026.',
      'Benchmarked 3 reasoning approaches across 5 LLMs, exposing a gap between accuracy and logical reliability.',
      'Identified “scope laundering” in all 5 models, with rates from 15.3% (GPT) to 52.5% (Qwen).',
      'Improved Claude’s legal entailment accuracy by 19.9% using first-order logic reasoning.',
    ],
  },
  {
    title: 'Follow My Lead: Logical Fallacy Classification with Knowledge-Augmented LLMs',
    venue: 'arXiv · 2025',
    pdf: 'https://arxiv.org/pdf/2510.09970',
    points: [
      'Co-authored AI reasoning paper',
      'Created the first "chain of decision" method making model decisions verifiable, enhancing interpretability.',
      'Developed novel neurosymbolic AI method to improve LLM logical reasoning by 20.7% accuracy without expensive model training.',
      'Learned logic programming in Prolog, AWS (Bedrock, S3), RAG, and prompt engineering.',
    ],
    conferences: [
      { name: 'Advances in Cognitive Systems at Georgia Tech', url: 'http://cogsys.org/conference/2025/schedule.html' },
      {
        name: 'Bay Area Machine Learning Symposium (BayLearn) at Santa Clara University',
        url: 'https://baylearn-org.github.io/www/submissions.html',
      },
    ],
  },
  {
    title:
      'Analyzing Media Narratives with Machine Learning: Topic Alignment and Sentiment in Rally Speeches and News Media Coverage',
    venue: 'Paper · 2024',
    pdf: 'https://drive.google.com/file/d/1-46Ep7oWloXVb9eyrHY4FGZORyh-WCLt/view?usp=sharing',
    points: [
      'Built Natural Language Processing pipelines to discover political bias patterns',
      'Developed a hybrid LLM and probabilistic topic modeling method to process data.',
      'Primary author and presenter of paper to 150+ PhDs and Profs at Capstone Seminar, Southern California & Natl. Conference for Undergraduate Research.',
    ],
    conferences: [
      { name: 'Southern California Conference for Undergraduate Research' },
      { name: 'National Conference for Undergraduate Research' },
    ],
  },
  {
    title: 'Counterfactual Loss Improves Feature-Token Transformer Performance in Community Homelessness Prediction',
    venue: 'Paper · 2024',
    pdf: 'https://drive.google.com/file/d/1pxGPWxUAHrLOtAsLrvLUJMcptFZYDSG_/view?usp=sharing',
    poster: 'https://docs.google.com/presentation/d/1sH1uCYneM2FHOw3DITIsagd2ubruiLCXc8imiBe4tEo/edit?usp=sharing',
    points: [
      'Built an improved machine learning model that predicts homelessness rates across U.S. communities with 85% accuracy',
      'Identified which community factors (housing costs, job availability, social services) have the biggest impact on homelessness to help guide more efficient government spending',
    ],
  },
];

export const community: Community[] = [
  {
    title: 'Code Coach',
    org: 'theCoderSchool',
    points: [
      <>
        Led 2 <strong>in-person</strong> summer <strong>coding camps</strong>; entrusted by Manager with operation of
        space and safety of 25 students.
      </>,
      'Designed CodingBat curriculum; helped students break down problems, trace code, and explained abstract algorithms to varying levels of learners.',
    ],
  },
  {
    title: 'Tutor',
    org: 'Schoolhouse.world & Vivekanand High School',
    points: [
      'Tutored 19 learners across Azerbaijan, Egypt, Ghana, India, and Pakistan through Schoolhouse.world',
      'Led AI education session for students at Vivekanand High School',
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    group: 'Languages',
    items: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Swift', 'SystemVerilog', 'Prolog'],
  },
  { group: 'Hardware', items: ['RTL Design', 'FPGA Design', 'RISC-V', 'CAN Bus', 'Synthesis', 'Static Timing Analysis'] },
  {
    group: 'Frameworks & Libraries',
    items: ['React', 'Vite', 'Bootstrap', 'jQuery', 'SwiftUI', 'UIKit', 'CoreML', 'Firebase', 'WPILib'],
  },
  {
    group: 'Tools',
    items: [
      'AWS Bedrock',
      'Git',
      'GitHub',
      'Z3',
      'Cadence Xcelium',
      'SimVision',
      'IMC',
      'Innovus',
      'Synopsys Design Compiler',
      'AMD Vivado',
    ],
  },
];
