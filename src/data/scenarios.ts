export interface Scenario {
  id: number;
  title: string;
  description: string;
  choices: {
    id: string;
    text: string;
    feedback: string;
    impact: {
      leadership?: number;
      teamwork?: number;
      strategy?: number;
      innovation?: number;
    };
  }[];
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Team Conflict Resolution",
    description: "Two senior team members, both highly respected in their areas, are clashing over the project's direction. One insists on a conservative, tested approach to ensure stability, while the other pushes for an aggressive, innovative strategy that could redefine market positioning. Their escalating disagreements are creating tension in team meetings, distracting other members, and delaying critical deadlines. Both team members have strong personalities, and your decision could set a precedent for how conflicts are resolved in the future.",
    choices: [
      {
        id: "A",
        text: "Schedule a mediated discussion",
        feedback: "Good choice! Facilitating open communication helps resolve conflicts. However, success depends on your ability to stay neutral and guide the discussion effectively.",
        impact: { leadership: 5, teamwork: 3 }
      },
      {
        id: "B",
        text: "Make an executive decision",
        feedback: "This can be effective but might not address underlying issues. It could also alienate one of the team members if they feel unheard.",
        impact: { leadership: -2, teamwork: -2 }
      }
    ]
  },
  {
    id: 2,
    title: "Innovation Challenge",
    description: "Your team has developed an ambitious prototype that leverages cutting-edge technology to solve a persistent client problem. However, the implementation is risky and could overextend resources. While some team members are excited about the potential impact, others are hesitant due to the high cost and uncertainty of success. Key stakeholders are looking to you to decide whether to proceed, knowing that failure could strain relationships with clients and damage the team's morale. The team is divided, and your decision will set the tone for how risks are evaluated in the organization.",
    choices: [
      {
        id: "A",
        text: "Support the innovative approach",
        feedback: "Taking calculated risks can lead to breakthroughs! However, ensure you have a contingency plan in place if things don’t go as expected.",
        impact: { innovation: 5, strategy: 3 }
      },
      {
        id: "B",
        text: "Stick to proven methods",
        feedback: "Playing it safe might limit potential growth. While this ensures stability, it could frustrate the more ambitious members of your team.",
        impact: { innovation: -2, strategy: 2 }
      }
    ]
  },
  {
    id: 3,
    title: "Unexpected Absence of a Key Leader",
    description: "Your project manager, a critical link in your team’s operations, has taken an unplanned leave of absence due to personal reasons. The team is struggling without their guidance, and productivity is dropping. Some team members are stepping up, but they lack the experience to fill the gap fully. With an approaching deadline, you must decide how to address the leadership void. Do you redistribute responsibilities among the team or appoint an interim leader who might not have the full team's trust? Each choice could have long-term implications for team morale and efficiency.",
    choices: [
      {
        id: "A",
        text: "Redistribute responsibilities among the team",
        feedback: "This empowers the team and encourages collaboration but might lead to inefficiencies and delays as roles overlap.",
        impact: { teamwork: 4, leadership: 2 }
      },
      {
        id: "B",
        text: "Appoint an interim leader",
        feedback: "A clear chain of command can restore order, but it risks alienating team members if the choice is seen as unfair or ineffective.",
        impact: { leadership: 5, teamwork: -1 }
      }
    ]
  },
  {
    id: 4,
    title: "Gigantic Client",
    description: "A major client has requested last-minute changes to a project, requiring extra hours from your team. While fulfilling the request could secure a long-term partnership and additional revenue, the team is already working at capacity and showing signs of burnout. Pushing them harder could risk mistakes and resentment, while declining the request might damage the client relationship. You need to weigh short-term sacrifices against long-term sustainability for both your team and the business.",
    choices: [
      {
        id: "A",
        text: "Prioritize the client’s request",
        feedback: "Meeting the client’s needs reinforces your commitment but could exacerbate team burnout. Consider balancing workload carefully.",
        impact: { strategy: 5, teamwork: -3 }
      },
      {
        id: "B",
        text: "Protect the team’s workload",
        feedback: "Preserving morale fosters loyalty and reduces errors but risks disappointing a key client. Communicating openly with the client might mitigate this.",
        impact: { teamwork: 5, strategy: -2 }
      }
    ]
  },
  {
    id: 5,
    title: "New Market Expansion",
    description: "Your company is considering entering a new international market with significant potential but also considerable risks. Some of your team members are enthusiastic, highlighting the opportunity for growth, while others caution against the lack of local expertise and regulatory challenges. The decision is time-sensitive as competitors are also eyeing the same market. Do you take the leap, or focus on strengthening your position in current markets?",
    choices: [
      {
        id: "A",
        text: "Enter the new market",
        feedback: "This bold move could pay off with significant growth, but it requires strong planning and resource allocation to mitigate risks.",
        impact: { strategy: 5, innovation: 3 }
      },
      {
        id: "B",
        text: "Focus on existing markets",
        feedback: "Staying within known markets ensures stability but could mean missed opportunities and lost market share to competitors.",
        impact: { strategy: 2, leadership: -1 }
      }
    ]
  },
  {
    id: 6,
    title: "Diversity and Inclusion Initiative",
    description: "You’ve identified a lack of diversity in your team, which has resulted in limited perspectives and less innovative solutions. A proposal has been made to implement a company-wide diversity and inclusion program, but it will require significant time and resources. Some senior members support the initiative, while others are concerned about the potential disruption to productivity. How do you proceed?",
    choices: [
      {
        id: "A",
        text: "Launch the diversity initiative",
        feedback: "This long-term investment could foster innovation and improve team dynamics, but it needs careful planning to avoid disruptions.",
        impact: { leadership: 4, innovation: 3 }
      },
      {
        id: "B",
        text: "Delay the initiative",
        feedback: "Delaying minimizes immediate disruptions but risks perpetuating existing problems and missed opportunities for growth.",
        impact: { leadership: -2, teamwork: -1 }
      }
    ]
  },
  {
    id: 7,
    title: "Technology Upgrade?",
    description: "A new software solution has been recommended to improve efficiency and reduce errors in your operations. However, the initial cost and time required for implementation are substantial. The team is divided, with some pushing for the upgrade and others worried about the learning curve and potential downtime. Do you invest in the upgrade or stick with the current system?",
    choices: [
      {
        id: "A",
        text: "Invest in the upgrade",
        feedback: "This could significantly improve efficiency but requires strong change management to ensure a smooth transition.",
        impact: { innovation: 4, strategy: 3 }
      },
      {
        id: "B",
        text: "Stick with the current system",
        feedback: "This avoids immediate costs and disruptions but could result in stagnation and missed opportunities for improvement.",
        impact: { strategy: -1, innovation: -2 }
      }
    ]
  },
  {
    id: 8,
    title: "Product",
    description: "A product defect has been discovered shortly after launch, causing dissatisfaction among early adopters. While the issue can be resolved with a patch, news has spread on social media, and your team is under pressure to respond. Do you publicly address the issue immediately, or work on a solution first before making an announcement?",
    choices: [
      {
        id: "A",
        text: "Address the issue immediately",
        feedback: "Transparency builds trust, but it requires careful communication to manage the narrative effectively.",
        impact: { leadership: 3, strategy: 2 }
      },
      {
        id: "B",
        text: "Work on a solution first",
        feedback: "Delivering a fix with your message demonstrates competence, but the delay might damage trust among customers.",
        impact: { strategy: 4, teamwork: 1 }
      }
    ]
  },
  {
    id: 9,
    title: "Remote Work Policy",
    description: "Your company is considering a permanent remote work policy following a successful trial period during the pandemic. While many employees value the flexibility, others miss the collaboration of in-person work. Senior leadership is divided, and you must decide whether to adopt remote work fully, return to the office, or implement a hybrid approach.",
    choices: [
      {
        id: "A",
        text: "Adopt a hybrid model",
        feedback: "This balances flexibility and collaboration but requires clear policies and communication to manage effectively.",
        impact: { leadership: 4, teamwork: 3 }
      },
      {
        id: "B",
        text: "Return fully to the office",
        feedback: "This fosters collaboration but risks losing employees who value flexibility and could damage morale.",
        impact: { teamwork: -2, strategy: 1 }
      }
    ]
  },
  {
    "id": 10,
    "title": "Sustainability Initiative",
    "description": "Your company is considering investing in a sustainability initiative to reduce its carbon footprint. While this aligns with long-term environmental goals, it requires significant upfront costs. Some team members are excited about the initiative, while others are concerned about the financial strain and impact on short-term profitability.",
    "choices": [
      {
        "id": "A",
        "text": "Pursue the initiative",
        "feedback": "This demonstrates social responsibility and aligns with future trends, but it requires careful financial planning.",
        "impact": { "leadership": 5, "strategy": 3 }
      },
      {
        "id": "B",
        "text": "Delay the initiative",
        "feedback": "This preserves financial stability but risks falling behind competitors adopting sustainable practices.",
        "impact": { "strategy": -1, "leadership": -2 }
      }
    ]
  },
  {
    "id": 11,
    "title": "Department Merger",
    "description": "Two departments in your company are being merged to streamline operations. However, the integration has led to confusion about roles and responsibilities, and tensions are rising between team members. You need to decide how to handle the transition.",
    "choices": [
      {
        "id": "A",
        "text": "Hold a joint meeting to clarify roles",
        "feedback": "This helps address confusion and ensures alignment but requires skilled facilitation to avoid further conflicts.",
        "impact": { "teamwork": 4, "leadership": 3 }
      },
      {
        "id": "B",
        "text": "Appoint a transition leader",
        "feedback": "Having a single point of leadership can provide clarity but might alienate some employees if perceived as favoritism.",
        "impact": { "leadership": 5, "teamwork": -1 }
      }
    ]
  },
  {
    "id": 12,
    "title": "Product Launch Dilemma",
    "description": "A new product is scheduled to launch in two weeks, but testing has revealed minor defects that could affect customer satisfaction. Fixing the defects would delay the launch, while proceeding as planned could lead to negative reviews.",
    "choices": [
      {
        "id": "A",
        "text": "Delay the launch",
        "feedback": "Ensuring product quality builds long-term trust but risks losing momentum and market interest.",
        "impact": { "strategy": 4, "innovation": 2 }
      },
      {
        "id": "B",
        "text": "Launch as scheduled",
        "feedback": "This maintains momentum but risks damaging your brand reputation if defects are widely reported.",
        "impact": { "innovation": -1, "strategy": -2 }
      }
    ]
  },
  {
    "id": 13,
    "title": "Employee Retention Crisis",
    "description": "A key employee has received an offer from a competitor and is considering leaving. Losing them could disrupt ongoing projects and morale. Do you counter the offer or let them go?",
    "choices": [
      {
        "id": "A",
        "text": "Counter the offer",
        "feedback": "Retaining the employee ensures continuity but may set a precedent for others to negotiate raises.",
        "impact": { "leadership": 3, "teamwork": 2 }
      },
      {
        "id": "B",
        "text": "Let them go",
        "feedback": "This allows for fresh talent and avoids disrupting pay structures but risks project delays and reduced morale.",
        "impact": { "teamwork": -2, "strategy": -1 }
      }
    ]
  },
  {
    "id": 14,
    "title": "Partnership Opportunity",
    "description": "A potential partner has approached your company with an offer to collaborate on a project. While the partnership could lead to significant opportunities, it requires sharing resources and may create dependencies.",
    "choices": [
      {
        "id": "A",
        "text": "Accept the partnership",
        "feedback": "This opens doors for growth and innovation but requires clear agreements to manage dependencies.",
        "impact": { "strategy": 5, "innovation": 3 }
      },
      {
        "id": "B",
        "text": "Decline the partnership",
        "feedback": "This avoids dependencies but may close off valuable opportunities for expansion.",
        "impact": { "strategy": -2, "innovation": -1 }
      }
    ]
  },
  {
    "id": 15,
    "title": "Budget Reallocation",
    "description": "Midway through the fiscal year, you discover an opportunity to invest in a high-potential project. However, funding it would require cutting budgets for other departments, which could affect their performance.",
    "choices": [
      {
        "id": "A",
        "text": "Reallocate the budget",
        "feedback": "This prioritizes high-impact projects but risks resentment and underperformance in affected departments.",
        "impact": { "strategy": 4, "leadership": 2 }
      },
      {
        "id": "B",
        "text": "Stick to the existing budget",
        "feedback": "This maintains stability but could mean missing out on a transformative opportunity.",
        "impact": { "strategy": -1, "innovation": -2 }
      }
    ]
  },
  {
    "id": 16,
    "title": "Cultural Integration",
    "description": "Your company has acquired a smaller firm, and integrating the two cultures has proven challenging. Employees from both organizations are struggling to adapt, leading to decreased morale and productivity.",
    "choices": [
      {
        "id": "A",
        "text": "Host team-building workshops",
        "feedback": "This fosters collaboration and understanding but requires time and resources to implement effectively.",
        "impact": { "teamwork": 4, "leadership": 3 }
      },
      {
        "id": "B",
        "text": "Enforce a unified culture",
        "feedback": "This creates consistency but risks alienating employees who feel their identity is being overlooked.",
        "impact": { "leadership": 5, "teamwork": -1 }
      }
    ]
  },
  {
    "id": 17,
    "title": "Crisis Management",
    "description": "An unexpected economic downturn has significantly reduced your company’s revenue. You must decide whether to lay off staff to cut costs or find alternative ways to save money without impacting the workforce.",
    "choices": [
      {
        "id": "A",
        "text": "Implement layoffs",
        "feedback": "This ensures short-term financial stability but impacts morale and trust.",
        "impact": { "strategy": 4, "leadership": -2 }
      },
      {
        "id": "B",
        "text": "Explore alternative savings",
        "feedback": "This maintains morale but requires creative thinking and potential sacrifices in other areas.",
        "impact": { "leadership": 5, "teamwork": 3 }
      }
    ]
  },
  {
    "id": 18,
    "title": "Training Program Decision",
    "description": "A proposal for a company-wide training program has been presented, aiming to upskill employees and improve efficiency. However, the program is expensive and would take time away from daily operations.",
    "choices": [
      {
        "id": "A",
        "text": "Approve the training program",
        "feedback": "This enhances skills and long-term productivity but requires careful scheduling to minimize disruptions.",
        "impact": { "innovation": 4, "leadership": 3 }
      },
      {
        "id": "B",
        "text": "Reject the training program",
        "feedback": "This avoids short-term disruptions but risks falling behind in employee capabilities.",
        "impact": { "strategy": -2, "innovation": -1 }
      }
    ]
  },
  {
    "id": 19,
    "title": "Public Relations Crisis",
    "description": "A senior executive's controversial statement has gone viral, sparking backlash from customers and stakeholders. You need to decide whether to issue a public apology or quietly address the issue internally.",
    "choices": [
      {
        "id": "A",
        "text": "Issue a public apology",
        "feedback": "This demonstrates accountability but might draw more attention to the issue.",
        "impact": { "leadership": 3, "strategy": 2 }
      },
      {
        "id": "B",
        "text": "Handle it internally",
        "feedback": "This minimizes public attention but risks appearing unaccountable if the issue resurfaces.",
        "impact": { "strategy": -1, "leadership": -2 }
      }
    ]
  },
  {
    "id": 20,
    "title": "Product Quality Compromise",
    "description": "Your manufacturing team has identified a flaw in a recently produced batch of products. The flaw is minor but visible to attentive customers. Addressing the issue will delay delivery and increase costs. Do you address the issue or proceed with distribution?",
    "choices": [
      {
        "id": "A",
        "text": "Delay delivery and fix the flaw",
        "feedback": "This ensures quality but risks customer frustration due to delays.",
        "impact": { "strategy": 3, "leadership": 2 }
      },
      {
        "id": "B",
        "text": "Proceed with the current batch",
        "feedback": "This saves time but risks damaging your brand reputation.",
        "impact": { "strategy": -1, "innovation": -2 }
      },
      {
        "id": "C",
        "text": "Offer a discount for the flawed batch",
        "feedback": "This could mitigate customer dissatisfaction but sets a precedent for reduced quality.",
        "impact": { "teamwork": -1, "strategy": 1 }
      },
      {
        "id": "D",
        "text": "Split the batch and fix critical issues only",
        "feedback": "This minimizes delays but may lead to inconsistent customer experiences.",
        "impact": { "leadership": 1, "teamwork": -1 }
      },
      {
        "id": "E",
        "text": "Engage with customers directly and explain",
        "feedback": "This builds trust but requires careful communication to avoid backlash.",
        "impact": { "strategy": 2, "leadership": 3 }
      }
    ]
  },
  {
    "id": 21,
    "title": "Market Expansion Strategy",
    "description": "Your company has the opportunity to enter a highly competitive international market. While it promises high returns, it also requires a significant upfront investment and comes with regulatory hurdles. How do you proceed?",
    "choices": [
      {
        "id": "A",
        "text": "Invest fully in entering the market",
        "feedback": "This could lead to high rewards but requires managing substantial risks.",
        "impact": { "strategy": 5, "leadership": 3 }
      },
      {
        "id": "B",
        "text": "Conduct a small-scale pilot first",
        "feedback": "This minimizes risks but may delay realizing full potential.",
        "impact": { "strategy": 4, "innovation": 2 }
      },
      {
        "id": "C",
        "text": "Collaborate with a local partner",
        "feedback": "This mitigates risks but reduces potential profit margins.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "D",
        "text": "Focus on current markets instead",
        "feedback": "This ensures stability but may result in missed opportunities.",
        "impact": { "strategy": -1, "leadership": -2 }
      },
      {
        "id": "E",
        "text": "Research further before committing",
        "feedback": "This gives you more data but risks losing first-mover advantage.",
        "impact": { "innovation": 1, "strategy": 1 }
      }
    ]
  },
  {
    "id": 22,
    "title": "Diversity in Leadership",
    "description": "A leadership position has opened up in your company, and you’re considering candidates. One candidate brings extensive experience, while another adds diversity and fresh perspectives but has less experience. Which candidate do you choose?",
    "choices": [
      {
        "id": "A",
        "text": "Choose the experienced candidate",
        "feedback": "This ensures immediate results but risks missing long-term innovation opportunities.",
        "impact": { "leadership": 3, "strategy": 2 }
      },
      {
        "id": "B",
        "text": "Choose the diverse candidate",
        "feedback": "This encourages innovation but requires more training and support initially.",
        "impact": { "leadership": 2, "innovation": 4 }
      },
      {
        "id": "C",
        "text": "Split leadership responsibilities between them",
        "feedback": "This promotes collaboration but might dilute accountability.",
        "impact": { "teamwork": 3, "strategy": 1 }
      },
      {
        "id": "D",
        "text": "Reopen the hiring process",
        "feedback": "This could bring in more options but delays filling the role.",
        "impact": { "strategy": -1, "leadership": -2 }
      },
      {
        "id": "E",
        "text": "Create a mentorship role for the diverse candidate",
        "feedback": "This balances experience and fresh perspectives but adds additional workload.",
        "impact": { "leadership": 4, "teamwork": 2 }
      }
    ]
  },
  {
    "id": 23,
    "title": "Crisis Budget Cuts",
    "description": "A sudden economic downturn forces your company to cut costs. You must decide which department's budget to reduce. Each option has significant implications for future performance.",
    "choices": [
      {
        "id": "A",
        "text": "Cut marketing budget",
        "feedback": "This saves costs but might reduce brand visibility and sales.",
        "impact": { "strategy": -1, "innovation": -2 }
      },
      {
        "id": "B",
        "text": "Cut R&D budget",
        "feedback": "This preserves current operations but risks losing future innovations.",
        "impact": { "strategy": -2, "innovation": -3 }
      },
      {
        "id": "C",
        "text": "Cut operational expenses",
        "feedback": "This reduces immediate waste but could impact efficiency.",
        "impact": { "leadership": 1, "teamwork": -1 }
      },
      {
        "id": "D",
        "text": "Implement across-the-board cuts",
        "feedback": "This spreads the burden equally but might demoralize employees.",
        "impact": { "teamwork": -2, "leadership": -1 }
      },
      {
        "id": "E",
        "text": "Explore alternative revenue streams",
        "feedback": "This avoids cuts but may not yield immediate results.",
        "impact": { "innovation": 3, "strategy": 2 }
      }
    ]
  },
  {
    "id": 24,
    "title": "Product Launch Timing",
    "description": "Your marketing team recommends delaying the launch of a new product to align with a major industry conference, while your sales team believes launching immediately will give you a competitive edge. How do you proceed?",
    "choices": [
      {
        "id": "A",
        "text": "Delay the launch for the conference",
        "feedback": "This maximizes visibility but risks losing the first-mover advantage.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "B",
        "text": "Launch immediately",
        "feedback": "This takes advantage of early demand but risks missing broader marketing opportunities.",
        "impact": { "strategy": 4, "leadership": 2 }
      },
      {
        "id": "C",
        "text": "Split the launch into two phases",
        "feedback": "This balances timing but increases resource strain.",
        "impact": { "strategy": 2, "teamwork": 1 }
      },
      {
        "id": "D",
        "text": "Redefine the launch strategy entirely",
        "feedback": "This could provide a unique advantage but requires significant time and effort.",
        "impact": { "innovation": 3, "strategy": 1 }
      },
      {
        "id": "E",
        "text": "Gather more data before deciding",
        "feedback": "This ensures a data-driven approach but delays action.",
        "impact": { "strategy": -1, "leadership": -2 }
      }
    ]
  },
  {
    "id": 25,
    "title": "Team Conflict Over Workload",
    "description": "Two departments are in conflict over workload distribution, with one claiming to be overburdened and the other insisting their tasks are equally challenging. Both are vital to the project. How do you address the issue?",
    "choices": [
      {
        "id": "A",
        "text": "Redistribute workloads more evenly",
        "feedback": "This fosters fairness but risks disrupting project momentum.",
        "impact": { "teamwork": 4, "leadership": 3 }
      },
      {
        "id": "B",
        "text": "Mediate a discussion between departments",
        "feedback": "This encourages collaboration but takes time to resolve.",
        "impact": { "teamwork": 3, "leadership": 2 }
      },
      {
        "id": "C",
        "text": "Assign an external auditor to review workloads",
        "feedback": "This provides an objective view but may delay decisions.",
        "impact": { "strategy": 2, "teamwork": 1 }
      },
      {
        "id": "D",
        "text": "Focus resources on the overburdened department",
        "feedback": "This addresses immediate needs but risks alienating the other department.",
        "impact": { "teamwork": -1, "leadership": 1 }
      },
      {
        "id": "E",
        "text": "Maintain the current setup and monitor closely",
        "feedback": "This avoids immediate disruption but risks deepening tensions.",
        "impact": { "strategy": -1, "teamwork": -2 }
      }
    ]
  },
  {
    "id": 26,
    "title": "Customer Data Privacy",
    "description": "A new regulation requires stricter data privacy compliance. While your legal team suggests investing heavily in compliance measures, your IT team believes minor adjustments are sufficient. What do you do?",
    "choices": [
      {
        "id": "A",
        "text": "Invest heavily in compliance",
        "feedback": "This ensures regulatory safety but increases costs significantly.",
        "impact": { "strategy": 3, "leadership": 2 }
      },
      {
        "id": "B",
        "text": "Make minor adjustments and monitor risks",
        "feedback": "This saves costs but risks penalties if compliance is inadequate.",
        "impact": { "strategy": -1, "innovation": -2 }
      },
      {
        "id": "C",
        "text": "Outsource compliance tasks to a third party",
        "feedback": "This balances expertise and cost but reduces internal control.",
        "impact": { "strategy": 2, "teamwork": 1 }
      },
      {
        "id": "D",
        "text": "Form a cross-functional compliance task force",
        "feedback": "This promotes collaboration but may slow down implementation.",
        "impact": { "teamwork": 3, "innovation": 1 }
      },
      {
        "id": "E",
        "text": "Delay decisions until further clarification of the regulation",
        "feedback": "This avoids premature investments but risks falling behind competitors.",
        "impact": { "strategy": -2, "leadership": -1 }
      }
    ]
  },
  {
    "id": 27,
    "title": "Social Media Backlash",
    "description": "A promotional post from your company has received unexpected backlash on social media, with users accusing the company of being tone-deaf. Your marketing team suggests taking the post down immediately, while the PR team suggests issuing a formal statement. How do you respond?",
    "choices": [
      {
        "id": "A",
        "text": "Take down the post and remain silent",
        "feedback": "This avoids further backlash but may appear as if you're ignoring the criticism.",
        "impact": { "strategy": -1, "leadership": -2 }
      },
      {
        "id": "B",
        "text": "Issue a formal apology and explain the context",
        "feedback": "This shows accountability but risks drawing more attention to the issue.",
        "impact": { "leadership": 3, "teamwork": 2 }
      },
      {
        "id": "C",
        "text": "Engage with users in the comments to clarify",
        "feedback": "This promotes dialogue but requires careful and consistent communication.",
        "impact": { "strategy": 2, "innovation": 1 }
      },
      {
        "id": "D",
        "text": "Redirect attention with a new campaign",
        "feedback": "This might diffuse the situation but risks being seen as dismissive.",
        "impact": { "strategy": 1, "teamwork": -1 }
      },
      {
        "id": "E",
        "text": "Monitor the situation before acting",
        "feedback": "This allows for a measured response but risks appearing indecisive.",
        "impact": { "strategy": -2, "leadership": -1 }
      }
    ]
  },
  {
    "id": 28,
    "title": "Employee Performance Issue",
    "description": "A previously high-performing employee has been missing deadlines and delivering subpar work. The HR team suggests initiating a performance improvement plan, while their manager recommends immediate reassignment to a less critical role. How do you proceed?",
    "choices": [
      {
        "id": "A",
        "text": "Implement a performance improvement plan",
        "feedback": "This supports the employee’s growth but may delay immediate results.",
        "impact": { "leadership": 3, "teamwork": 2 }
      },
      {
        "id": "B",
        "text": "Reassign the employee to a less critical role",
        "feedback": "This ensures short-term project success but may demotivate the employee.",
        "impact": { "strategy": 2, "teamwork": -1 }
      },
      {
        "id": "C",
        "text": "Combine reassignment with mentoring support",
        "feedback": "This balances immediate needs with long-term development but requires additional resources.",
        "impact": { "teamwork": 3, "innovation": 2 }
      },
      {
        "id": "D",
        "text": "Hold an open conversation to understand their challenges",
        "feedback": "This builds trust but may not provide an immediate solution.",
        "impact": { "leadership": 4, "teamwork": 3 }
      },
      {
        "id": "E",
        "text": "Let the employee resolve issues independently",
        "feedback": "This tests their self-reliance but risks further delays.",
        "impact": { "strategy": -1, "leadership": -2 }
      }
    ]
  },
  {
    "id": 29,
    "title": "Supplier Negotiation",
    "description": "Your primary supplier has increased prices due to global shortages. While negotiating for a lower rate might strain the relationship, switching suppliers could delay your operations. What is your course of action?",
    "choices": [
      {
        "id": "A",
        "text": "Negotiate for a better rate",
        "feedback": "This might reduce costs but risks damaging the relationship with the supplier.",
        "impact": { "strategy": 3, "innovation": 1 }
      },
      {
        "id": "B",
        "text": "Accept the increased rate temporarily",
        "feedback": "This maintains the relationship but impacts profitability.",
        "impact": { "leadership": 2, "strategy": -1 }
      },
      {
        "id": "C",
        "text": "Seek alternative suppliers immediately",
        "feedback": "This promotes competition but risks operational delays.",
        "impact": { "innovation": 2, "strategy": -2 }
      },
      {
        "id": "D",
        "text": "Diversify suppliers gradually",
        "feedback": "This reduces dependency but requires long-term planning.",
        "impact": { "strategy": 4, "innovation": 2 }
      },
      {
        "id": "E",
        "text": "Pass the cost to customers",
        "feedback": "This preserves margins but risks customer dissatisfaction.",
        "impact": { "strategy": -1, "leadership": -2 }
      }
    ]
  },
  {
    "id": 30,
    "title": "Merger Communication Strategy",
    "description": "Your company is merging with a smaller competitor. While the merger presents great opportunities, employees are anxious about their roles and future. Some leaders suggest addressing concerns immediately, while others prefer waiting until decisions are finalized. How do you proceed?",
    "choices": [
      {
        "id": "A",
        "text": "Address concerns immediately",
        "feedback": "This builds trust but risks spreading incomplete information.",
        "impact": { "leadership": 4, "teamwork": 3 }
      },
      {
        "id": "B",
        "text": "Wait until decisions are finalized",
        "feedback": "This avoids misinformation but risks escalating employee anxiety.",
        "impact": { "strategy": 2, "teamwork": -1 }
      },
      {
        "id": "C",
        "text": "Host regular updates during the process",
        "feedback": "This provides transparency but requires consistent communication efforts.",
        "impact": { "leadership": 5, "teamwork": 2 }
      },
      {
        "id": "D",
        "text": "Focus communication only on senior staff",
        "feedback": "This ensures alignment among key leaders but risks alienating other employees.",
        "impact": { "leadership": 3, "teamwork": -2 }
      },
      {
        "id": "E",
        "text": "Engage an external consultant for communication",
        "feedback": "This provides expertise but may feel impersonal to employees.",
        "impact": { "strategy": 3, "teamwork": 1 }
      }
    ]
  },
  {
    "id": 31,
    "title": "Office Relocation Decision",
    "description": "Your current office lease is ending, and you must decide whether to move to a smaller, cost-efficient office, a more prestigious downtown location, or fully embrace remote work. Each option has financial and cultural implications. What’s your choice?",
    "choices": [
      {
        "id": "A",
        "text": "Move to a smaller, cost-efficient office",
        "feedback": "This saves money but might reduce team collaboration and morale.",
        "impact": { "strategy": 3, "leadership": -1 }
      },
      {
        "id": "B",
        "text": "Relocate to a prestigious downtown office",
        "feedback": "This enhances brand reputation but significantly increases costs.",
        "impact": { "strategy": -2, "leadership": 2 }
      },
      {
        "id": "C",
        "text": "Adopt a fully remote work model",
        "feedback": "This reduces costs but risks team cohesion and collaboration.",
        "impact": { "teamwork": -2, "strategy": 3 }
      },
      {
        "id": "D",
        "text": "Implement a hybrid workspace",
        "feedback": "This balances flexibility and in-person interaction but requires careful management.",
        "impact": { "leadership": 4, "teamwork": 3 }
      },
      {
        "id": "E",
        "text": "Extend the current lease temporarily",
        "feedback": "This allows more time to decide but delays a long-term solution.",
        "impact": { "strategy": -1, "teamwork": 1 }
      }
    ]
  },
  {
    "id": 32,
    "title": "New Technology Adoption",
    "description": "Your company has the opportunity to adopt a cutting-edge technology that promises to improve efficiency but requires significant training and upfront investment. How do you approach the decision?",
    "choices": [
      {
        "id": "A",
        "text": "Adopt the technology immediately",
        "feedback": "This positions the company as a leader but risks overwhelming the team.",
        "impact": { "innovation": 5, "teamwork": -2 }
      },
      {
        "id": "B",
        "text": "Conduct a pilot program first",
        "feedback": "This minimizes risks but delays company-wide benefits.",
        "impact": { "strategy": 4, "innovation": 2 }
      },
      {
        "id": "C",
        "text": "Wait for competitors to adopt it first",
        "feedback": "This reduces risks but could result in lost opportunities.",
        "impact": { "strategy": -2, "innovation": -1 }
      },
      {
        "id": "D",
        "text": "Provide comprehensive training before adoption",
        "feedback": "This ensures team readiness but significantly increases costs.",
        "impact": { "teamwork": 3, "strategy": 1 }
      },
      {
        "id": "E",
        "text": "Invest in alternatives to the technology",
        "feedback": "This reduces dependency but might result in inefficiencies compared to competitors.",
        "impact": { "innovation": -1, "leadership": 2 }
      }
    ]
  },
  {
    "id": 33,
    "title": "Diversity Hiring Goal",
    "description": "Your company has committed to improving diversity but is struggling to meet hiring goals. Some suggest prioritizing diversity over experience in recruitment, while others emphasize finding the most qualified candidates regardless of diversity. How do you approach this issue?",
    "choices": [
      {
        "id": "A",
        "text": "Prioritize diversity in hiring decisions",
        "feedback": "This aligns with goals but might require additional training for new hires.",
        "impact": { "leadership": 3, "innovation": 4 }
      },
      {
        "id": "B",
        "text": "Focus on qualifications over diversity",
        "feedback": "This ensures immediate capability but risks falling short of diversity goals.",
        "impact": { "strategy": 2, "leadership": -1 }
      },
      {
        "id": "C",
        "text": "Combine diversity with mentorship programs",
        "feedback": "This creates long-term impact but requires significant time and resources.",
        "impact": { "teamwork": 4, "leadership": 3 }
      },
      {
        "id": "D",
        "text": "Delay hiring until more diverse candidates are available",
        "feedback": "This emphasizes diversity but risks delays in meeting company needs.",
        "impact": { "strategy": -1, "teamwork": -2 }
      },
      {
        "id": "E",
        "text": "Set clear diversity targets without compromising qualifications",
        "feedback": "This balances both priorities but requires careful planning.",
        "impact": { "leadership": 5, "strategy": 2 }
      }
    ]
  },
  {
    "id": 34,
    "title": "Handling an Industry Rumor",
    "description": "A rumor about your company’s financial instability is circulating in the industry. Your board is divided on whether to issue a public statement or let the rumor die naturally. How do you address this?",
    "choices": [
      {
        "id": "A",
        "text": "Issue a public statement denying the rumor",
        "feedback": "This clarifies the situation but risks drawing more attention to it.",
        "impact": { "leadership": 3, "strategy": 1 }
      },
      {
        "id": "B",
        "text": "Stay silent and monitor the situation",
        "feedback": "This avoids fueling the rumor but may appear as confirmation to some.",
        "impact": { "strategy": -1, "leadership": -2 }
      },
      {
        "id": "C",
        "text": "Engage with key stakeholders directly",
        "feedback": "This reassures important allies but requires additional effort.",
        "impact": { "teamwork": 3, "leadership": 2 }
      },
      {
        "id": "D",
        "text": "Launch a positive PR campaign",
        "feedback": "This redirects attention but might not directly address the issue.",
        "impact": { "strategy": 2, "innovation": 2 }
      },
      {
        "id": "E",
        "text": "Investigate the source of the rumor",
        "feedback": "This could uncover valuable information but delays immediate action.",
        "impact": { "strategy": 3, "teamwork": 1 }
      }
    ]
  },
  {
    "id": 35,
    "title": "Sustainability vs. Cost Efficiency",
    "description": "Your company is evaluating whether to adopt a new sustainable production method that aligns with environmental goals but increases production costs. While this could enhance your brand image, it could also reduce profit margins. What is your decision?",
    "choices": [
      {
        "id": "A",
        "text": "Adopt the sustainable method immediately",
        "feedback": "This reinforces environmental commitment but puts financial pressure on the company.",
        "impact": { "strategy": -1, "leadership": 3 }
      },
      {
        "id": "B",
        "text": "Delay adoption and explore subsidies",
        "feedback": "This minimizes cost impact but may delay achieving sustainability goals.",
        "impact": { "strategy": 3, "innovation": 1 }
      },
      {
        "id": "C",
        "text": "Adopt partially for key products",
        "feedback": "This balances costs and sustainability but complicates operations.",
        "impact": { "strategy": 2, "teamwork": 2 }
      },
      {
        "id": "D",
        "text": "Reject the sustainable method for now",
        "feedback": "This preserves profits but could harm brand reputation.",
        "impact": { "strategy": 1, "leadership": -2 }
      },
      {
        "id": "E",
        "text": "Launch a pilot program",
        "feedback": "This provides data for long-term decisions but delays broad implementation.",
        "impact": { "innovation": 2, "strategy": 2 }
      }
    ]
  },
  {
    "id": 36,
    "title": "New Office Design",
    "description": "Your company is redesigning its office to reflect modern workplace trends. While open-office layouts promote collaboration, some employees prefer private spaces for focus. You must decide on a design strategy.",
    "choices": [
      {
        "id": "A",
        "text": "Implement a fully open-office layout",
        "feedback": "This promotes collaboration but may disrupt focus for some employees.",
        "impact": { "teamwork": 4, "innovation": 2 }
      },
      {
        "id": "B",
        "text": "Design a mix of open spaces and private offices",
        "feedback": "This balances collaboration and focus but requires higher costs.",
        "impact": { "leadership": 5, "strategy": 2 }
      },
      {
        "id": "C",
        "text": "Prioritize private spaces with minimal collaboration areas",
        "feedback": "This supports focus but risks reducing teamwork opportunities.",
        "impact": { "teamwork": -2, "strategy": 1 }
      },
      {
        "id": "D",
        "text": "Conduct an employee survey before deciding",
        "feedback": "This ensures employee buy-in but delays implementation.",
        "impact": { "teamwork": 3, "strategy": 1 }
      },
      {
        "id": "E",
        "text": "Hire an external consultant for a neutral design plan",
        "feedback": "This provides expertise but may feel impersonal to employees.",
        "impact": { "strategy": 3, "teamwork": 2 }
      }
    ]
  },
  {
    "id": 37,
    "title": "Team Productivity Monitoring",
    "description": "Your company is considering implementing productivity monitoring tools to track remote employees’ work habits. While some see this as improving accountability, others view it as invasive. How do you proceed?",
    "choices": [
      {
        "id": "A",
        "text": "Implement the tools with transparency",
        "feedback": "This improves accountability but may reduce trust among employees.",
        "impact": { "leadership": 3, "teamwork": -2 }
      },
      {
        "id": "B",
        "text": "Focus on outcome-based performance reviews instead",
        "feedback": "This maintains trust but might not address accountability concerns.",
        "impact": { "leadership": 4, "strategy": 2 }
      },
      {
        "id": "C",
        "text": "Use monitoring tools selectively for critical projects",
        "feedback": "This balances needs but risks appearing inconsistent.",
        "impact": { "strategy": 3, "teamwork": -1 }
      },
      {
        "id": "D",
        "text": "Conduct a trial with employee feedback",
        "feedback": "This encourages collaboration but delays full implementation.",
        "impact": { "teamwork": 3, "strategy": 1 }
      },
      {
        "id": "E",
        "text": "Reject monitoring tools entirely",
        "feedback": "This upholds trust but could fail to address productivity concerns.",
        "impact": { "teamwork": 2, "strategy": -1 }
      }
    ]
  },
  {
    "id": 38,
    "title": "AI Integration",
    "description": "A new AI system could optimize customer support processes by automating responses, but it may result in layoffs and concerns among employees. What is your decision?",
    "choices": [
      {
        "id": "A",
        "text": "Adopt the AI system fully",
        "feedback": "This improves efficiency but risks employee morale.",
        "impact": { "strategy": 4, "innovation": 5 }
      },
      {
        "id": "B",
        "text": "Integrate AI with a focus on augmentation, not replacement",
        "feedback": "This preserves jobs but reduces potential cost savings.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "C",
        "text": "Delay adoption to provide training",
        "feedback": "This minimizes layoffs but delays efficiency improvements.",
        "impact": { "strategy": 2, "innovation": 1 }
      },
      {
        "id": "D",
        "text": "Adopt partially in low-risk areas",
        "feedback": "This balances risks and rewards but limits immediate benefits.",
        "impact": { "strategy": 3, "teamwork": 2 }
      },
      {
        "id": "E",
        "text": "Avoid AI adoption entirely",
        "feedback": "This maintains employee trust but risks falling behind competitors.",
        "impact": { "strategy": -2, "innovation": -3 }
      }
    ]
  },
  {
    "id": 39,
    "title": "Customer Loyalty Program",
    "description": "Your company is planning a loyalty program to reward repeat customers, but the finance team is concerned about potential revenue losses. Marketing believes it will increase lifetime customer value. How do you proceed?",
    "choices": [
      {
        "id": "A",
        "text": "Launch the loyalty program as proposed",
        "feedback": "This builds customer loyalty but increases short-term costs.",
        "impact": { "leadership": 3, "strategy": 2 }
      },
      {
        "id": "B",
        "text": "Test the program with select customers",
        "feedback": "This minimizes risks but delays broader benefits.",
        "impact": { "strategy": 4, "innovation": 2 }
      },
      {
        "id": "C",
        "text": "Focus on discounts instead of loyalty rewards",
        "feedback": "This simplifies implementation but may not foster long-term loyalty.",
        "impact": { "strategy": 1, "innovation": -1 }
      },
      {
        "id": "D",
        "text": "Engage customers to co-create the program",
        "feedback": "This ensures alignment with customer needs but extends the timeline.",
        "impact": { "teamwork": 4, "strategy": 2 }
      },
      {
        "id": "E",
        "text": "Delay the program until financial concerns are resolved",
        "feedback": "This avoids immediate costs but risks losing competitive edge.",
        "impact": { "strategy": -1, "innovation": -2 }
      }
    ]
  },
  {
    "id": 40,
    "title": "Leadership Succession Planning",
    "description": "Your company is preparing for the retirement of a key senior leader. While one internal candidate has strong operational skills, another is known for innovative thinking but lacks experience. How do you approach succession planning?",
    "choices": [
      {
        "id": "A",
        "text": "Promote the operational candidate",
        "feedback": "This ensures stability but might limit innovation in the long run.",
        "impact": { "leadership": 3, "strategy": 2 }
      },
      {
        "id": "B",
        "text": "Choose the innovative candidate",
        "feedback": "This brings fresh ideas but may require significant mentorship and support.",
        "impact": { "leadership": 2, "innovation": 4 }
      },
      {
        "id": "C",
        "text": "Create a dual leadership structure",
        "feedback": "This promotes collaboration but risks unclear decision-making.",
        "impact": { "teamwork": 3, "strategy": 1 }
      },
      {
        "id": "D",
        "text": "Hire an external candidate",
        "feedback": "This introduces new perspectives but could disrupt team dynamics.",
        "impact": { "strategy": 2, "innovation": 3 }
      },
      {
        "id": "E",
        "text": "Delay the decision and rotate responsibilities",
        "feedback": "This allows more evaluation but may slow down operations.",
        "impact": { "leadership": -1, "teamwork": -2 }
      }
    ]
  },
  {
    "id": 41,
    "title": "Crisis Management Drill",
    "description": "Your company is planning a crisis management drill to test readiness for emergencies. Some team members worry it will disrupt current workflows, while others see it as essential preparation. What is your decision?",
    "choices": [
      {
        "id": "A",
        "text": "Conduct the drill as planned",
        "feedback": "This ensures preparedness but might disrupt ongoing projects.",
        "impact": { "leadership": 4, "strategy": 3 }
      },
      {
        "id": "B",
        "text": "Postpone the drill until a slower period",
        "feedback": "This minimizes disruption but delays readiness.",
        "impact": { "strategy": 2, "teamwork": -1 }
      },
      {
        "id": "C",
        "text": "Scale down the scope of the drill",
        "feedback": "This balances disruption and preparation but may not fully test readiness.",
        "impact": { "strategy": 3, "teamwork": 1 }
      },
      {
        "id": "D",
        "text": "Focus only on critical teams for the drill",
        "feedback": "This ensures key teams are prepared but leaves others less equipped.",
        "impact": { "teamwork": 2, "strategy": 2 }
      },
      {
        "id": "E",
        "text": "Cancel the drill and rely on theoretical training",
        "feedback": "This avoids disruption but may lead to untested procedures in emergencies.",
        "impact": { "strategy": -2, "leadership": -1 }
      }
    ]
  },
  {
    "id": 42,
    "title": "Social Responsibility Program",
    "description": "Your company has received an opportunity to sponsor a large social responsibility project. While this aligns with company values, it requires a substantial budget allocation that could impact operational goals. What do you decide?",
    "choices": [
      {
        "id": "A",
        "text": "Approve the sponsorship immediately",
        "feedback": "This boosts brand reputation but stretches financial resources.",
        "impact": { "leadership": 3, "strategy": 1 }
      },
      {
        "id": "B",
        "text": "Decline the sponsorship",
        "feedback": "This preserves finances but risks losing goodwill in the community.",
        "impact": { "strategy": -1, "teamwork": -2 }
      },
      {
        "id": "C",
        "text": "Seek partial funding from partners",
        "feedback": "This reduces cost impact but requires additional coordination.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "D",
        "text": "Support a smaller initiative instead",
        "feedback": "This aligns with values but may seem less impactful.",
        "impact": { "strategy": 2, "leadership": 2 }
      },
      {
        "id": "E",
        "text": "Delay the decision for further budget review",
        "feedback": "This allows time for planning but risks losing the opportunity.",
        "impact": { "strategy": -2, "teamwork": -1 }
      }
    ]
  },
  {
    "id": 43,
    "title": "Expanding Product Lines",
    "description": "Your R&D team has proposed launching a new product line that could open up new markets. However, this requires diverting resources from existing successful products. How do you proceed?",
    "choices": [
      {
        "id": "A",
        "text": "Invest fully in the new product line",
        "feedback": "This could drive growth but risks undermining current strengths.",
        "impact": { "strategy": 4, "innovation": 5 }
      },
      {
        "id": "B",
        "text": "Focus on existing products for stability",
        "feedback": "This preserves current success but may miss future opportunities.",
        "impact": { "strategy": 1, "leadership": -1 }
      },
      {
        "id": "C",
        "text": "Test the new product line in a pilot market",
        "feedback": "This minimizes risk but delays broader rollout.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "D",
        "text": "Develop the new line with a smaller budget",
        "feedback": "This reduces financial risk but might compromise product quality.",
        "impact": { "innovation": 2, "strategy": 1 }
      },
      {
        "id": "E",
        "text": "Seek external funding for the new product",
        "feedback": "This offsets costs but might reduce control over the project.",
        "impact": { "strategy": 3, "teamwork": 1 }
      }
    ]
  },
  {
    "id": 44,
    "title": "Handling Internal Fraud",
    "description": "An internal audit has revealed minor financial irregularities in one department. While the issue doesn’t appear systemic, it raises questions about oversight and accountability. What is your approach?",
    "choices": [
      {
        "id": "A",
        "text": "Launch a full investigation across all departments",
        "feedback": "This ensures transparency but could disrupt regular operations.",
        "impact": { "leadership": 4, "strategy": 2 }
      },
      {
        "id": "B",
        "text": "Address the issue quietly within the department",
        "feedback": "This minimizes disruption but may seem like favoritism.",
        "impact": { "teamwork": 2, "leadership": -1 }
      },
      {
        "id": "C",
        "text": "Implement stricter oversight company-wide",
        "feedback": "This improves accountability but increases administrative burdens.",
        "impact": { "strategy": 3, "teamwork": 1 }
      },
      {
        "id": "D",
        "text": "Involve external auditors for transparency",
        "feedback": "This builds trust but may incur additional costs.",
        "impact": { "strategy": 2, "leadership": 3 }
      },
      {
        "id": "E",
        "text": "Dismiss the issue as an isolated incident",
        "feedback": "This avoids immediate disruption but risks recurring issues.",
        "impact": { "strategy": -1, "teamwork": -2 }
      }
    ]
  },
  {
    "id": 45,
    "title": "Employee Retention Strategy",
    "description": "Your company is experiencing a higher-than-average turnover rate. Some leaders propose implementing monetary incentives, while others believe investing in training and career development programs will have a more lasting impact. What is your approach?",
    "choices": [
      {
        "id": "A",
        "text": "Offer immediate monetary bonuses",
        "feedback": "This provides a quick morale boost but may not address long-term retention challenges.",
        "impact": { "leadership": 3, "teamwork": 1 }
      },
      {
        "id": "B",
        "text": "Invest in career development programs",
        "feedback": "This builds long-term loyalty but requires significant resources upfront.",
        "impact": { "leadership": 4, "innovation": 2 }
      },
      {
        "id": "C",
        "text": "Conduct exit interviews to understand turnover causes",
        "feedback": "This helps identify root issues but may delay immediate action.",
        "impact": { "strategy": 3, "teamwork": 2 }
      },
      {
        "id": "D",
        "text": "Improve work-life balance policies",
        "feedback": "This addresses common concerns but requires changes across teams.",
        "impact": { "teamwork": 4, "strategy": 1 }
      },
      {
        "id": "E",
        "text": "Focus on hiring more replacements quickly",
        "feedback": "This ensures staffing needs but does not address retention challenges.",
        "impact": { "strategy": -1, "teamwork": -2 }
      }
    ]
  },
  {
    "id": 46,
    "title": "Cross-Functional Collaboration",
    "description": "A cross-functional project is facing delays due to communication gaps between departments. Team leaders have proposed creating a dedicated collaboration task force, but some employees feel this adds unnecessary bureaucracy. What’s your solution?",
    "choices": [
      {
        "id": "A",
        "text": "Form a dedicated collaboration task force",
        "feedback": "This ensures coordination but may slow down decision-making.",
        "impact": { "teamwork": 4, "leadership": 3 }
      },
      {
        "id": "B",
        "text": "Improve communication tools and protocols",
        "feedback": "This addresses the root issue but requires team buy-in.",
        "impact": { "teamwork": 3, "innovation": 2 }
      },
      {
        "id": "C",
        "text": "Appoint a single cross-department leader",
        "feedback": "This provides clear direction but risks overloading one individual.",
        "impact": { "leadership": 4, "strategy": 1 }
      },
      {
        "id": "D",
        "text": "Host regular interdepartmental meetings",
        "feedback": "This fosters collaboration but takes time away from daily tasks.",
        "impact": { "teamwork": 2, "strategy": 1 }
      },
      {
        "id": "E",
        "text": "Maintain the current structure and address issues as they arise",
        "feedback": "This avoids additional layers but risks ongoing delays.",
        "impact": { "teamwork": -1, "strategy": -2 }
      }
    ]
  },
  {
    "id": 47,
    "title": "Ethical Supplier Dilemma",
    "description": "Your primary supplier has been accused of unethical labor practices. Switching suppliers would align with company values but could result in significant delays and increased costs. What do you do?",
    "choices": [
      {
        "id": "A",
        "text": "Immediately switch to an ethical supplier",
        "feedback": "This aligns with values but risks operational disruptions.",
        "impact": { "leadership": 4, "strategy": -1 }
      },
      {
        "id": "B",
        "text": "Continue with the current supplier while investigating alternatives",
        "feedback": "This ensures continuity but might harm brand reputation.",
        "impact": { "strategy": 2, "leadership": -1 }
      },
      {
        "id": "C",
        "text": "Negotiate with the supplier to improve practices",
        "feedback": "This promotes change but might not result in immediate improvements.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "D",
        "text": "Develop internal solutions to reduce supplier dependency",
        "feedback": "This reduces long-term risk but requires substantial investment.",
        "impact": { "innovation": 4, "strategy": 2 }
      },
      {
        "id": "E",
        "text": "Maintain the current supplier and issue a public statement",
        "feedback": "This minimizes operational risk but might damage public perception.",
        "impact": { "strategy": -2, "leadership": -2 }
      }
    ]
  },
  {
    "id": 48,
    "title": "Remote Team Bonding",
    "description": "Your remote team has reported feeling disconnected, which has started to impact productivity. Some suggest hosting in-person retreats, while others believe virtual team-building activities are sufficient. What’s your decision?",
    "choices": [
      {
        "id": "A",
        "text": "Host regular in-person retreats",
        "feedback": "This strengthens connections but requires significant investment.",
        "impact": { "teamwork": 4, "leadership": 2 }
      },
      {
        "id": "B",
        "text": "Implement more virtual team-building activities",
        "feedback": "This is cost-effective but may not fully address the issue.",
        "impact": { "teamwork": 3, "innovation": 1 }
      },
      {
        "id": "C",
        "text": "Create a hybrid bonding approach",
        "feedback": "This balances in-person and virtual needs but requires careful planning.",
        "impact": { "leadership": 4, "teamwork": 3 }
      },
      {
        "id": "D",
        "text": "Survey the team to gather feedback on preferred methods",
        "feedback": "This ensures buy-in but delays action.",
        "impact": { "teamwork": 2, "strategy": 1 }
      },
      {
        "id": "E",
        "text": "Focus solely on productivity tools and workflows",
        "feedback": "This addresses efficiency but risks further disconnect among team members.",
        "impact": { "teamwork": -2, "strategy": 2 }
      }
    ]
  },
  {
    "id": 49,
    "title": "Cybersecurity Breach Response",
    "description": "Your company has experienced a minor cybersecurity breach affecting a small group of users. While IT suggests addressing it quietly, the legal team advises issuing a public statement. How do you proceed?",
    "choices": [
      {
        "id": "A",
        "text": "Issue a public statement immediately",
        "feedback": "This demonstrates accountability but risks drawing unnecessary attention.",
        "impact": { "leadership": 4, "strategy": 2 }
      },
      {
        "id": "B",
        "text": "Address the issue internally without public disclosure",
        "feedback": "This minimizes external scrutiny but might appear as a cover-up if discovered.",
        "impact": { "strategy": -1, "leadership": -2 }
      },
      {
        "id": "C",
        "text": "Notify affected users directly and offer remedies",
        "feedback": "This maintains user trust but requires additional resources.",
        "impact": { "leadership": 3, "teamwork": 2 }
      },
      {
        "id": "D",
        "text": "Engage a cybersecurity expert to conduct an audit",
        "feedback": "This ensures future protection but delays immediate response.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "E",
        "text": "Develop a comprehensive breach response plan for the future",
        "feedback": "This enhances readiness but doesn’t address current concerns.",
        "impact": { "strategy": 2, "teamwork": 1 }
      }
    ]
  },
  {
    "id": 50,
    "title": "Sustainability vs. Profit Margins",
    "description": "Your company has been offered an opportunity to transition to renewable energy sources for operations, which would reduce environmental impact but increase costs by 10%. Leadership is divided on whether to proceed. How do you decide?",
    "choices": [
      {
        "id": "A",
        "text": "Adopt renewable energy sources immediately",
        "feedback": "This strengthens your sustainability credentials but reduces short-term profits.",
        "impact": { "strategy": -1, "leadership": 4 }
      },
      {
        "id": "B",
        "text": "Phase in renewable energy gradually",
        "feedback": "This balances cost and sustainability but delays the full impact.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "C",
        "text": "Maintain current energy sources and offset emissions",
        "feedback": "This reduces environmental impact without high costs but may be seen as superficial.",
        "impact": { "strategy": 2, "leadership": -1 }
      },
      {
        "id": "D",
        "text": "Focus on energy efficiency instead of renewables",
        "feedback": "This minimizes costs but misses the opportunity to lead in sustainability.",
        "impact": { "strategy": 1, "innovation": 1 }
      },
      {
        "id": "E",
        "text": "Delay the decision until more data is available",
        "feedback": "This avoids immediate costs but risks losing credibility in sustainability.",
        "impact": { "strategy": -2, "leadership": -2 }
      }
    ]
  },
  {
    "id": 51,
    "title": "Diversity in Promotions",
    "description": "An open leadership position has multiple qualified candidates, including one who would improve team diversity and another with more experience. Senior staff is divided on the selection criteria. What is your decision?",
    "choices": [
      {
        "id": "A",
        "text": "Promote the experienced candidate",
        "feedback": "This ensures immediate results but misses an opportunity to enhance diversity.",
        "impact": { "leadership": 3, "strategy": 2 }
      },
      {
        "id": "B",
        "text": "Promote the diverse candidate",
        "feedback": "This encourages inclusivity but may require additional training and support.",
        "impact": { "leadership": 2, "innovation": 4 }
      },
      {
        "id": "C",
        "text": "Create a mentorship plan for the diverse candidate",
        "feedback": "This prepares future leadership but delays immediate diversity in senior roles.",
        "impact": { "teamwork": 4, "leadership": 2 }
      },
      {
        "id": "D",
        "text": "Split the responsibilities between the candidates",
        "feedback": "This allows both to contribute but risks diluting accountability.",
        "impact": { "strategy": 1, "teamwork": 3 }
      },
      {
        "id": "E",
        "text": "Delay the decision to explore more candidates",
        "feedback": "This provides more options but prolongs the vacancy.",
        "impact": { "strategy": -2, "leadership": -1 }
      }
    ]
  },
  {
    "id": 52,
    "title": "Crisis Advertising Response",
    "description": "A recent advertising campaign has unintentionally offended a segment of your audience. Marketing suggests quickly retracting the campaign, while PR advises issuing a public apology and continuing. What is your decision?",
    "choices": [
      {
        "id": "A",
        "text": "Retract the campaign immediately",
        "feedback": "This minimizes further offense but might appear reactive.",
        "impact": { "leadership": 4, "strategy": 2 }
      },
      {
        "id": "B",
        "text": "Issue a public apology and continue the campaign",
        "feedback": "This shows accountability but risks ongoing backlash.",
        "impact": { "leadership": 3, "teamwork": 2 }
      },
      {
        "id": "C",
        "text": "Redirect resources to launch a new campaign",
        "feedback": "This shifts focus but increases costs significantly.",
        "impact": { "strategy": -1, "innovation": 3 }
      },
      {
        "id": "D",
        "text": "Consult with affected audiences for input on the response",
        "feedback": "This promotes inclusivity but may delay action.",
        "impact": { "teamwork": 4, "strategy": 1 }
      },
      {
        "id": "E",
        "text": "Ignore the backlash and continue as planned",
        "feedback": "This avoids immediate costs but risks long-term reputational damage.",
        "impact": { "strategy": -2, "leadership": -3 }
      }
    ]
  },
  {
    "id": 53,
    "title": "Office Space Utilization",
    "description": "Post-pandemic, much of your office space is unused due to remote work policies. Options include subleasing the extra space, redesigning for collaboration, or keeping it for future growth. What is your choice?",
    "choices": [
      {
        "id": "A",
        "text": "Sublease the extra space",
        "feedback": "This generates income but limits flexibility for future needs.",
        "impact": { "strategy": 3, "teamwork": -1 }
      },
      {
        "id": "B",
        "text": "Redesign the office for collaboration",
        "feedback": "This improves teamwork but requires upfront costs.",
        "impact": { "teamwork": 4, "leadership": 2 }
      },
      {
        "id": "C",
        "text": "Keep the space as is for future growth",
        "feedback": "This ensures readiness but incurs ongoing costs.",
        "impact": { "strategy": -1, "teamwork": 1 }
      },
      {
        "id": "D",
        "text": "Offer the space for community events",
        "feedback": "This enhances community relations but might disrupt operations.",
        "impact": { "leadership": 3, "teamwork": 2 }
      },
      {
        "id": "E",
        "text": "Fully embrace remote work and eliminate the office",
        "feedback": "This reduces costs significantly but risks team cohesion.",
        "impact": { "strategy": 4, "teamwork": -2 }
      }
    ]
  },
  {
    "id": 54,
    "title": "Product Recall Decision",
    "description": "A safety issue has been identified in one of your products after a customer complaint. Your legal team advises against a recall unless more evidence emerges, while the operations team supports a voluntary recall. What is your response?",
    "choices": [
      {
        "id": "A",
        "text": "Initiate a voluntary recall immediately",
        "feedback": "This demonstrates accountability but incurs significant costs.",
        "impact": { "leadership": 4, "strategy": 1 }
      },
      {
        "id": "B",
        "text": "Wait for more evidence before deciding",
        "feedback": "This avoids unnecessary costs but might harm customer trust.",
        "impact": { "strategy": -1, "leadership": -2 }
      },
      {
        "id": "C",
        "text": "Improve quality checks for future products",
        "feedback": "This addresses long-term risks but doesn’t resolve the current issue.",
        "impact": { "innovation": 2, "strategy": 1 }
      },
      {
        "id": "D",
        "text": "Contact affected customers directly and offer replacements",
        "feedback": "This balances costs and customer satisfaction but risks media scrutiny.",
        "impact": { "teamwork": 3, "leadership": 2 }
      },
      {
        "id": "E",
        "text": "Issue a public statement acknowledging the issue",
        "feedback": "This builds transparency but doesn’t fully resolve customer concerns.",
        "impact": { "leadership": 3, "strategy": 2 }
      }
    ]
  },
  {
    "id": 55,
    "title": "Client-Specific Customization",
    "description": "A major client has requested significant customization to your core product. While this could secure a lucrative long-term contract, it requires diverting resources from your main roadmap. What is your decision?",
    "choices": [
      {
        "id": "A",
        "text": "Accept the customization request",
        "feedback": "This strengthens client relationships but disrupts your overall strategy.",
        "impact": { "leadership": 3, "strategy": -1 }
      },
      {
        "id": "B",
        "text": "Negotiate a compromise with fewer changes",
        "feedback": "This preserves resources but might reduce client satisfaction.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "C",
        "text": "Decline the request and stick to your roadmap",
        "feedback": "This maintains your vision but risks losing the client.",
        "impact": { "strategy": -2, "leadership": -1 }
      },
      {
        "id": "D",
        "text": "Develop a separate version for the client",
        "feedback": "This meets the client’s needs but increases complexity and costs.",
        "impact": { "innovation": 2, "strategy": -1 }
      },
      {
        "id": "E",
        "text": "Engage with the client to identify mutual priorities",
        "feedback": "This builds collaboration but may delay the project.",
        "impact": { "teamwork": 4, "leadership": 2 }
      }
    ]
  },
  {
    "id": 56,
    "title": "Team Skill Gap",
    "description": "Your team is struggling with a technical challenge that none of the current members have expertise in. Options include hiring an external consultant, training existing staff, or postponing the project until expertise is available. What do you do?",
    "choices": [
      {
        "id": "A",
        "text": "Hire an external consultant",
        "feedback": "This provides immediate expertise but increases costs.",
        "impact": { "strategy": 2, "teamwork": 1 }
      },
      {
        "id": "B",
        "text": "Train your existing team",
        "feedback": "This develops internal capability but delays project completion.",
        "impact": { "leadership": 3, "innovation": 2 }
      },
      {
        "id": "C",
        "text": "Postpone the project until expertise is developed",
        "feedback": "This avoids short-term costs but risks falling behind competitors.",
        "impact": { "strategy": -2, "teamwork": -1 }
      },
      {
        "id": "D",
        "text": "Split the project into smaller, manageable tasks",
        "feedback": "This minimizes the immediate skill gap but might limit progress.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "E",
        "text": "Reassign the project to another team",
        "feedback": "This ensures progress but risks overburdening other teams.",
        "impact": { "strategy": 1, "teamwork": -1 }
      }
    ]
  },
  {
    "id": 57,
    "title": "Strategic Partnership Proposal",
    "description": "A larger company has proposed a strategic partnership that could give your business greater market access but involves sharing proprietary data. Your team is concerned about the potential loss of competitive advantage. How do you proceed?",
    "choices": [
      {
        "id": "A",
        "text": "Accept the partnership",
        "feedback": "This increases growth potential but risks data security.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "B",
        "text": "Negotiate stricter data-sharing terms",
        "feedback": "This reduces risks but may weaken the partnership’s appeal.",
        "impact": { "leadership": 4, "teamwork": 1 }
      },
      {
        "id": "C",
        "text": "Decline the partnership",
        "feedback": "This preserves data security but may limit market growth.",
        "impact": { "strategy": -1, "leadership": -2 }
      },
      {
        "id": "D",
        "text": "Pilot the partnership on a smaller scale",
        "feedback": "This minimizes initial risk but delays full benefits.",
        "impact": { "strategy": 2, "innovation": 1 }
      },
      {
        "id": "E",
        "text": "Develop an alternative plan to achieve growth internally",
        "feedback": "This maintains independence but requires significant resources.",
        "impact": { "innovation": 3, "strategy": 2 }
      }
    ]
  },
  {
    "id": 58,
    "title": "Employee Feedback Implementation",
    "description": "An employee survey has revealed dissatisfaction with current policies, particularly around vacation time and flexibility. How do you address these concerns?",
    "choices": [
      {
        "id": "A",
        "text": "Increase vacation allowances across the company",
        "feedback": "This boosts morale but increases operational costs.",
        "impact": { "teamwork": 3, "leadership": 2 }
      },
      {
        "id": "B",
        "text": "Introduce a flexible work policy",
        "feedback": "This addresses flexibility concerns but requires careful management.",
        "impact": { "leadership": 4, "strategy": 2 }
      },
      {
        "id": "C",
        "text": "Conduct focus groups to understand concerns better",
        "feedback": "This ensures employee voices are heard but delays action.",
        "impact": { "teamwork": 3, "strategy": 1 }
      },
      {
        "id": "D",
        "text": "Offer compensation bonuses instead of policy changes",
        "feedback": "This addresses dissatisfaction in the short term but doesn’t resolve underlying issues.",
        "impact": { "strategy": -1, "teamwork": -1 }
      },
      {
        "id": "E",
        "text": "Communicate a plan to gradually address concerns",
        "feedback": "This balances employee input and operational feasibility but may feel slow to some.",
        "impact": { "leadership": 2, "strategy": 2 }
      }
    ]
  },
  {
    "id": 59,
    "title": "Competing Product Launch",
    "description": "A competitor has launched a product that directly competes with one of your key offerings. Your team is debating whether to lower prices, improve features, or focus on brand loyalty to maintain market share. What is your strategy?",
    "choices": [
      {
        "id": "A",
        "text": "Lower prices to compete directly",
        "feedback": "This attracts cost-conscious customers but reduces margins.",
        "impact": { "strategy": 3, "leadership": 1 }
      },
      {
        "id": "B",
        "text": "Enhance your product features",
        "feedback": "This adds value but requires additional resources and time.",
        "impact": { "innovation": 4, "strategy": 2 }
      },
      {
        "id": "C",
        "text": "Focus on brand loyalty through targeted campaigns",
        "feedback": "This leverages existing relationships but may not attract new customers.",
        "impact": { "leadership": 3, "teamwork": 1 }
      },
      {
        "id": "D",
        "text": "Bundle your product with complementary services",
        "feedback": "This creates differentiation but complicates marketing efforts.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "E",
        "text": "Hold steady and monitor market reaction",
        "feedback": "This minimizes immediate disruption but risks losing momentum.",
        "impact": { "strategy": -1, "leadership": -2 }
      }
    ]
  },
  {
    "id": 60,
    "title": "New Market Expansion",
    "description": "Your company has the chance to enter a lucrative international market, but it requires navigating complex regulations and significant upfront investment. Some leaders suggest entering immediately, while others recommend waiting until resources are stronger. How do you proceed?",
    "choices": [
      {
        "id": "A",
        "text": "Enter the market immediately",
        "feedback": "This captures early opportunities but involves high risk and costs.",
        "impact": { "strategy": 4, "leadership": 2 }
      },
      {
        "id": "B",
        "text": "Delay until resources are more stable",
        "feedback": "This reduces risk but might miss early market advantages.",
        "impact": { "strategy": -1, "teamwork": 1 }
      },
      {
        "id": "C",
        "text": "Start with a limited pilot in the market",
        "feedback": "This minimizes risk while testing feasibility but delays full expansion.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "D",
        "text": "Partner with a local company to share risks",
        "feedback": "This reduces upfront costs but might limit potential profits.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "E",
        "text": "Focus on strengthening existing markets instead",
        "feedback": "This avoids risk but might lead to stagnation.",
        "impact": { "strategy": -2, "leadership": -1 }
      }
    ]
  },
  {
    "id": 61,
    "title": "Employee Wellness Budget",
    "description": "Your company is considering introducing wellness programs to address rising employee burnout. The finance team is concerned about the budget implications, and some suggest focusing on other areas instead. What is your decision?",
    "choices": [
      {
        "id": "A",
        "text": "Approve a comprehensive wellness program",
        "feedback": "This boosts morale but significantly impacts the budget.",
        "impact": { "teamwork": 4, "leadership": 3 }
      },
      {
        "id": "B",
        "text": "Introduce a smaller, pilot wellness initiative",
        "feedback": "This tests effectiveness with minimal cost but has limited immediate impact.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "C",
        "text": "Focus on flexible work policies instead of wellness programs",
        "feedback": "This addresses burnout indirectly but might not meet expectations.",
        "impact": { "teamwork": 2, "strategy": 1 }
      },
      {
        "id": "D",
        "text": "Delay implementing wellness initiatives until the budget improves",
        "feedback": "This conserves resources but risks employee dissatisfaction.",
        "impact": { "strategy": -1, "teamwork": -2 }
      },
      {
        "id": "E",
        "text": "Survey employees to identify preferred wellness investments",
        "feedback": "This ensures alignment with needs but delays action.",
        "impact": { "teamwork": 3, "strategy": 1 }
      }
    ]
  },
  {
    "id": 62,
    "title": "Product Recall Timing",
    "description": "A minor defect has been detected in a product already in circulation. Operations suggest recalling the product immediately, while marketing believes the defect is negligible and can be managed through customer support. What is your response?",
    "choices": [
      {
        "id": "A",
        "text": "Issue an immediate recall",
        "feedback": "This prioritizes customer safety but incurs high costs.",
        "impact": { "leadership": 4, "strategy": 1 }
      },
      {
        "id": "B",
        "text": "Handle issues through customer support",
        "feedback": "This minimizes costs but risks damaging trust if issues escalate.",
        "impact": { "strategy": -1, "leadership": -2 }
      },
      {
        "id": "C",
        "text": "Notify customers and offer free repairs or replacements",
        "feedback": "This balances safety and costs but requires extensive coordination.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "D",
        "text": "Investigate further before deciding",
        "feedback": "This avoids premature action but delays resolution.",
        "impact": { "strategy": -2, "teamwork": 1 }
      },
      {
        "id": "E",
        "text": "Launch a PR campaign to address concerns",
        "feedback": "This manages public perception but doesn’t resolve the defect.",
        "impact": { "leadership": 3, "strategy": 1 }
      }
    ]
  },
  {
    "id": 63,
    "title": "AI Automation Investment",
    "description": "A new AI system promises to automate repetitive tasks, improving efficiency but potentially displacing a portion of your workforce. Your team is divided on whether to adopt it. What do you decide?",
    "choices": [
      {
        "id": "A",
        "text": "Fully adopt the AI system",
        "feedback": "This improves efficiency but risks employee morale.",
        "impact": { "strategy": 4, "innovation": 3 }
      },
      {
        "id": "B",
        "text": "Introduce AI gradually alongside reskilling programs",
        "feedback": "This balances efficiency and workforce retention but takes longer to implement.",
        "impact": { "teamwork": 4, "leadership": 3 }
      },
      {
        "id": "C",
        "text": "Use AI only for non-critical tasks",
        "feedback": "This minimizes disruption but limits potential benefits.",
        "impact": { "innovation": 2, "strategy": 1 }
      },
      {
        "id": "D",
        "text": "Focus on improving existing systems instead of AI",
        "feedback": "This avoids displacement but may fall behind competitors.",
        "impact": { "strategy": -1, "innovation": -2 }
      },
      {
        "id": "E",
        "text": "Survey employees for their input before deciding",
        "feedback": "This promotes transparency but delays adoption.",
        "impact": { "teamwork": 3, "leadership": 2 }
      }
    ]
  },
  {
    "id": 64,
    "title": "Department Budget Allocation",
    "description": "Mid-year budget reviews indicate that one department is consistently overspending while another is underfunded. You must decide how to redistribute funds without causing inter-departmental conflicts. What’s your strategy?",
    "choices": [
      {
        "id": "A",
        "text": "Reallocate funds based on immediate needs",
        "feedback": "This addresses current priorities but risks resentment from impacted teams.",
        "impact": { "strategy": 3, "teamwork": -1 }
      },
      {
        "id": "B",
        "text": "Maintain current allocations and enforce stricter spending controls",
        "feedback": "This avoids conflict but doesn’t solve underlying issues.",
        "impact": { "strategy": 2, "leadership": -1 }
      },
      {
        "id": "C",
        "text": "Host a collaborative meeting to determine allocation priorities",
        "feedback": "This fosters transparency but may delay decisions.",
        "impact": { "teamwork": 4, "leadership": 2 }
      },
      {
        "id": "D",
        "text": "Cut budgets equally across all departments",
        "feedback": "This ensures fairness but might limit critical operations.",
        "impact": { "strategy": -1, "teamwork": -2 }
      },
      {
        "id": "E",
        "text": "Hire an external auditor to recommend allocations",
        "feedback": "This ensures objectivity but might feel impersonal to teams.",
        "impact": { "strategy": 3, "leadership": 1 }
      }
    ]
  },
  {
    "id": 65,
    "title": "Crisis Communication Strategy",
    "description": "A major product defect has been exposed by a popular influencer, sparking backlash on social media. PR suggests issuing an immediate public apology, while marketing wants to focus on a future product update. What do you decide?",
    "choices": [
      {
        "id": "A",
        "text": "Issue a public apology immediately",
        "feedback": "This demonstrates accountability but might amplify the controversy.",
        "impact": { "leadership": 4, "strategy": 1 }
      },
      {
        "id": "B",
        "text": "Focus on announcing a future product update",
        "feedback": "This redirects attention but might be seen as avoiding responsibility.",
        "impact": { "strategy": 2, "leadership": -1 }
      },
      {
        "id": "C",
        "text": "Engage with the influencer directly to resolve the issue",
        "feedback": "This builds a personal connection but risks further exposure.",
        "impact": { "teamwork": 3, "leadership": 2 }
      },
      {
        "id": "D",
        "text": "Conduct a customer survey to gauge responses",
        "feedback": "This ensures data-driven actions but delays resolution.",
        "impact": { "strategy": -1, "teamwork": 2 }
      },
      {
        "id": "E",
        "text": "Stay silent and address the issue internally",
        "feedback": "This avoids drawing more attention but risks losing customer trust.",
        "impact": { "strategy": -2, "leadership": -3 }
      }
    ]
  },
  {
    "id": 66,
    "title": "Remote Onboarding",
    "description": "Your company has hired a new team of remote employees, but onboarding remotely has been a challenge. Options include creating an extensive virtual onboarding program or hosting a physical retreat to kickstart the process. What’s your decision?",
    "choices": [
      {
        "id": "A",
        "text": "Create an extensive virtual onboarding program",
        "feedback": "This ensures consistency but requires significant resources to set up.",
        "impact": { "teamwork": 4, "leadership": 2 }
      },
      {
        "id": "B",
        "text": "Host a physical onboarding retreat",
        "feedback": "This builds relationships quickly but adds travel and lodging costs.",
        "impact": { "teamwork": 3, "strategy": 1 }
      },
      {
        "id": "C",
        "text": "Assign mentors for one-on-one guidance",
        "feedback": "This provides personalized support but might strain existing team members.",
        "impact": { "teamwork": 3, "leadership": 3 }
      },
      {
        "id": "D",
        "text": "Develop onboarding in smaller stages",
        "feedback": "This spreads out the effort but delays full integration.",
        "impact": { "strategy": 2, "teamwork": 2 }
      },
      {
        "id": "E",
        "text": "Use self-paced onboarding materials",
        "feedback": "This minimizes resources but risks inconsistency in training.",
        "impact": { "strategy": 1, "teamwork": -1 }
      }
    ]
  },
  {
    "id": 67,
    "title": "Supply Chain Disruption",
    "description": "A critical supplier has notified you of an unexpected delay in shipments. Options include finding an alternative supplier, renegotiating timelines, or adjusting production schedules. How do you proceed?",
    "choices": [
      {
        "id": "A",
        "text": "Switch to an alternative supplier immediately",
        "feedback": "This ensures continuity but may increase costs.",
        "impact": { "strategy": 3, "innovation": 1 }
      },
      {
        "id": "B",
        "text": "Renegotiate with the current supplier",
        "feedback": "This maintains the relationship but risks further delays.",
        "impact": { "teamwork": 2, "strategy": 1 }
      },
      {
        "id": "C",
        "text": "Adjust production schedules to accommodate delays",
        "feedback": "This avoids immediate costs but might frustrate customers.",
        "impact": { "strategy": -1, "teamwork": 2 }
      },
      {
        "id": "D",
        "text": "Engage multiple suppliers to diversify risk",
        "feedback": "This reduces dependency but adds complexity.",
        "impact": { "strategy": 4, "innovation": 2 }
      },
      {
        "id": "E",
        "text": "Invest in building an in-house supply solution",
        "feedback": "This offers long-term security but requires significant investment.",
        "impact": { "innovation": 4, "strategy": 2 }
      }
    ]
  },
  {
    "id": 68,
    "title": "Customer Data Monetization",
    "description": "Your company has collected valuable customer data that could be monetized by selling insights to third parties. While this could generate significant revenue, it might raise privacy concerns among customers. What do you decide?",
    "choices": [
      {
        "id": "A",
        "text": "Monetize the data with customer consent",
        "feedback": "This generates revenue ethically but may reduce participation in data collection.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "B",
        "text": "Sell anonymized data to minimize privacy concerns",
        "feedback": "This maintains some trust but might still face criticism.",
        "impact": { "strategy": 2, "leadership": 1 }
      },
      {
        "id": "C",
        "text": "Focus on internal use of the data to improve services",
        "feedback": "This avoids privacy concerns but misses a revenue opportunity.",
        "impact": { "leadership": 3, "teamwork": 2 }
      },
      {
        "id": "D",
        "text": "Conduct a customer survey before deciding",
        "feedback": "This builds transparency but delays potential revenue generation.",
        "impact": { "teamwork": 3, "strategy": 1 }
      },
      {
        "id": "E",
        "text": "Reject monetization entirely to preserve trust",
        "feedback": "This maintains strong relationships but forfeits a lucrative opportunity.",
        "impact": { "strategy": -2, "leadership": 4 }
      }
    ]
  },
  {
    "id": 69,
    "title": "Team Restructuring Proposal",
    "description": "Your team is proposing a restructuring plan to improve efficiency, but it involves reassigning roles and could lead to resistance from employees. What is your decision?",
    "choices": [
      {
        "id": "A",
        "text": "Approve the restructuring plan fully",
        "feedback": "This enhances efficiency but risks short-term disruption.",
        "impact": { "leadership": 4, "strategy": 3 }
      },
      {
        "id": "B",
        "text": "Pilot the restructuring with a smaller team",
        "feedback": "This minimizes risks but delays broader benefits.",
        "impact": { "strategy": 3, "innovation": 1 }
      },
      {
        "id": "C",
        "text": "Engage employees to co-develop the restructuring plan",
        "feedback": "This builds trust but requires significant time and effort.",
        "impact": { "teamwork": 4, "leadership": 3 }
      },
      {
        "id": "D",
        "text": "Modify the plan to reduce employee impact",
        "feedback": "This minimizes resistance but might not fully achieve efficiency goals.",
        "impact": { "strategy": 2, "teamwork": 2 }
      },
      {
        "id": "E",
        "text": "Maintain the current structure and improve processes instead",
        "feedback": "This avoids disruption but might limit potential efficiency gains.",
        "impact": { "strategy": -1, "leadership": -2 }
      }
    ]
  },
  {
    "id": 70,
    "title": "Digital Transformation Initiative",
    "description": "Your company is considering a major digital transformation project, including adopting advanced tools and automating workflows. While some team members see this as a necessary step forward, others are concerned about the cost and learning curve. What do you decide?",
    "choices": [
      {
        "id": "A",
        "text": "Implement the transformation fully",
        "feedback": "This positions the company as a leader but requires significant investment and training.",
        "impact": { "strategy": 4, "innovation": 5 }
      },
      {
        "id": "B",
        "text": "Start with a small pilot program",
        "feedback": "This minimizes risks but delays company-wide benefits.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "C",
        "text": "Focus on training employees before implementing changes",
        "feedback": "This ensures readiness but delays progress.",
        "impact": { "teamwork": 3, "leadership": 3 }
      },
      {
        "id": "D",
        "text": "Adopt only the most critical digital tools",
        "feedback": "This balances progress and cost but may limit long-term potential.",
        "impact": { "strategy": 2, "innovation": 1 }
      },
      {
        "id": "E",
        "text": "Postpone the transformation until the budget allows",
        "feedback": "This avoids immediate costs but risks falling behind competitors.",
        "impact": { "strategy": -2, "innovation": -3 }
      }
    ]
  },
  {
    "id": 71,
    "title": "Customer Service Policy Change",
    "description": "To reduce costs, your customer service team has proposed limiting phone support and focusing on chat and email channels instead. Some believe this will improve efficiency, but others are concerned about losing the personal touch. What is your decision?",
    "choices": [
      {
        "id": "A",
        "text": "Approve the policy change",
        "feedback": "This reduces costs but risks alienating customers who prefer phone support.",
        "impact": { "strategy": 3, "leadership": -1 }
      },
      {
        "id": "B",
        "text": "Maintain all current support channels",
        "feedback": "This preserves customer satisfaction but increases costs.",
        "impact": { "teamwork": 2, "strategy": -1 }
      },
      {
        "id": "C",
        "text": "Focus on improving chat and email response times",
        "feedback": "This enhances the efficiency of digital channels but might not satisfy all customers.",
        "impact": { "strategy": 3, "innovation": 1 }
      },
      {
        "id": "D",
        "text": "Survey customers to determine their preferred channels",
        "feedback": "This ensures alignment with customer needs but delays the decision.",
        "impact": { "teamwork": 3, "strategy": 1 }
      },
      {
        "id": "E",
        "text": "Outsource phone support to an external provider",
        "feedback": "This balances cost and availability but might reduce service quality.",
        "impact": { "strategy": 2, "leadership": 1 }
      }
    ]
  },
  {
    "id": 72,
    "title": "Remote Work Productivity Tools",
    "description": "Your remote team has suggested investing in new productivity tools to enhance collaboration. While these tools promise to improve efficiency, they come with a steep learning curve and ongoing subscription fees. What do you decide?",
    "choices": [
      {
        "id": "A",
        "text": "Adopt the productivity tools immediately",
        "feedback": "This enhances collaboration but requires time for onboarding.",
        "impact": { "teamwork": 4, "innovation": 3 }
      },
      {
        "id": "B",
        "text": "Test the tools with a small team first",
        "feedback": "This minimizes risk but delays full implementation.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "C",
        "text": "Continue using current tools and improve workflows",
        "feedback": "This avoids costs but might not address all productivity gaps.",
        "impact": { "strategy": -1, "teamwork": 1 }
      },
      {
        "id": "D",
        "text": "Negotiate with vendors for better pricing",
        "feedback": "This reduces costs but might not eliminate the learning curve.",
        "impact": { "strategy": 2, "teamwork": 2 }
      },
      {
        "id": "E",
        "text": "Delay adoption until the budget allows",
        "feedback": "This avoids immediate expenses but risks inefficiencies in the interim.",
        "impact": { "strategy": -2, "innovation": -2 }
      }
    ]
  },
  {
    "id": 73,
    "title": "New Product Pricing Strategy",
    "description": "Your company is launching a premium product, and there’s debate over whether to price it high to maximize margins or competitively to gain market share. How do you proceed?",
    "choices": [
      {
        "id": "A",
        "text": "Set a high price to maximize margins",
        "feedback": "This reinforces the product's premium image but might limit market adoption.",
        "impact": { "strategy": 3, "leadership": 2 }
      },
      {
        "id": "B",
        "text": "Price it competitively to gain market share",
        "feedback": "This attracts customers but reduces short-term profitability.",
        "impact": { "strategy": 4, "innovation": 1 }
      },
      {
        "id": "C",
        "text": "Launch with introductory discounts",
        "feedback": "This builds momentum but might set expectations for lower prices.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "D",
        "text": "Focus on highlighting premium features in marketing",
        "feedback": "This supports a higher price but might not appeal to all customers.",
        "impact": { "strategy": 2, "innovation": 3 }
      },
      {
        "id": "E",
        "text": "Delay launch to conduct further market research",
        "feedback": "This ensures data-driven pricing but delays revenue generation.",
        "impact": { "strategy": -1, "teamwork": 1 }
      }
    ]
  },
  {
    "id": 74,
    "title": "Leadership Team Expansion",
    "description": "Your company’s growth has led to increased workload for the current leadership team. Options include hiring an external leader, promoting from within, or redistributing responsibilities. What’s your decision?",
    "choices": [
      {
        "id": "A",
        "text": "Hire an external leader",
        "feedback": "This brings fresh perspectives but might disrupt team dynamics.",
        "impact": { "strategy": 3, "leadership": 2 }
      },
      {
        "id": "B",
        "text": "Promote from within",
        "feedback": "This boosts morale but might require additional training.",
        "impact": { "teamwork": 4, "leadership": 3 }
      },
      {
        "id": "C",
        "text": "Redistribute responsibilities among current leaders",
        "feedback": "This avoids hiring costs but might overburden existing staff.",
        "impact": { "strategy": 1, "teamwork": -1 }
      },
      {
        "id": "D",
        "text": "Create a rotating leadership structure",
        "feedback": "This promotes inclusivity but might reduce consistency.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "E",
        "text": "Delay the decision to assess long-term needs",
        "feedback": "This conserves resources but might slow growth.",
        "impact": { "strategy": -1, "leadership": -2 }
      }
    ]
  },
  {
    "id": 75,
    "title": "Sustainability Certification Decision",
    "description": "Your company has the opportunity to pursue a sustainability certification that could improve your brand image but requires significant investment and operational changes. What do you decide?",
    "choices": [
      {
        "id": "A",
        "text": "Pursue the certification immediately",
        "feedback": "This enhances brand reputation but strains resources in the short term.",
        "impact": { "leadership": 3, "strategy": 2 }
      },
      {
        "id": "B",
        "text": "Implement a phased approach to certification",
        "feedback": "This balances costs and progress but delays benefits.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "C",
        "text": "Focus on internal sustainability initiatives instead",
        "feedback": "This avoids certification costs but might not gain external recognition.",
        "impact": { "strategy": 2, "leadership": 1 }
      },
      {
        "id": "D",
        "text": "Delay the decision to prioritize other projects",
        "feedback": "This conserves resources but risks falling behind competitors.",
        "impact": { "strategy": -2, "leadership": -1 }
      },
      {
        "id": "E",
        "text": "Seek external funding or partnerships for certification",
        "feedback": "This reduces financial strain but requires additional coordination.",
        "impact": { "teamwork": 3, "strategy": 2 }
      }
    ]
  },
  {
    "id": 76,
    "title": "Marketing Budget Allocation",
    "description": "Your marketing team is debating whether to allocate the budget toward a new digital campaign, sponsoring a high-profile event, or improving existing campaigns. How do you proceed?",
    "choices": [
      {
        "id": "A",
        "text": "Invest in a new digital campaign",
        "feedback": "This could capture new audiences but carries higher risks.",
        "impact": { "innovation": 3, "strategy": 2 }
      },
      {
        "id": "B",
        "text": "Sponsor the high-profile event",
        "feedback": "This boosts visibility but consumes a significant portion of the budget.",
        "impact": { "strategy": 2, "leadership": 2 }
      },
      {
        "id": "C",
        "text": "Enhance existing campaigns",
        "feedback": "This leverages current successes but might limit innovation.",
        "impact": { "strategy": 3, "teamwork": 1 }
      },
      {
        "id": "D",
        "text": "Split the budget across all options",
        "feedback": "This diversifies risk but may dilute the impact of each effort.",
        "impact": { "strategy": 2, "teamwork": 2 }
      },
      {
        "id": "E",
        "text": "Conduct market research before allocating the budget",
        "feedback": "This ensures data-driven decisions but delays action.",
        "impact": { "strategy": -1, "innovation": 1 }
      }
    ]
  },
  {
    "id": 77,
    "title": "Cultural Integration Post-Acquisition",
    "description": "Your company has acquired a smaller firm with a drastically different work culture. Employees are struggling to adjust, and productivity is declining. How do you address this challenge?",
    "choices": [
      {
        "id": "A",
        "text": "Host workshops to align cultures",
        "feedback": "This fosters understanding but requires significant effort and time.",
        "impact": { "teamwork": 4, "leadership": 3 }
      },
      {
        "id": "B",
        "text": "Adopt the acquired firm's culture in key areas",
        "feedback": "This builds goodwill but might alienate your existing team.",
        "impact": { "teamwork": 3, "strategy": 1 }
      },
      {
        "id": "C",
        "text": "Maintain your company's culture and enforce adherence",
        "feedback": "This preserves consistency but risks resentment from the acquired team.",
        "impact": { "strategy": 2, "leadership": -1 }
      },
      {
        "id": "D",
        "text": "Create a blended culture with input from both teams",
        "feedback": "This promotes collaboration but requires substantial coordination.",
        "impact": { "teamwork": 4, "strategy": 2 }
      },
      {
        "id": "E",
        "text": "Delay integration efforts and focus on immediate productivity",
        "feedback": "This addresses short-term goals but risks long-term discord.",
        "impact": { "strategy": -1, "teamwork": -2 }
      }
    ]
  },
  {
    "id": 78,
    "title": "Product Line Discontinuation",
    "description": "One of your product lines is underperforming, consuming resources without significant returns. Options include discontinuing it, rebranding, or scaling back production. What do you decide?",
    "choices": [
      {
        "id": "A",
        "text": "Discontinue the product line",
        "feedback": "This cuts losses but might upset loyal customers.",
        "impact": { "strategy": 3, "leadership": -1 }
      },
      {
        "id": "B",
        "text": "Rebrand the product line",
        "feedback": "This could reinvigorate sales but involves marketing costs.",
        "impact": { "innovation": 3, "strategy": 2 }
      },
      {
        "id": "C",
        "text": "Scale back production",
        "feedback": "This minimizes costs but might not fully solve profitability issues.",
        "impact": { "strategy": 2, "teamwork": 1 }
      },
      {
        "id": "D",
        "text": "Survey customers for input on improving the product",
        "feedback": "This ensures alignment with customer needs but delays action.",
        "impact": { "teamwork": 3, "strategy": 1 }
      },
      {
        "id": "E",
        "text": "Bundle the product with successful offerings",
        "feedback": "This boosts perceived value but might complicate sales strategies.",
        "impact": { "strategy": 2, "innovation": 1 }
      }
    ]
  },
  {
    "id": 79,
    "title": "Leadership Transparency",
    "description": "Your company is facing financial challenges, and employees are starting to speculate about layoffs. Some leaders suggest full transparency, while others recommend keeping information internal until solutions are found. What is your decision?",
    "choices": [
      {
        "id": "A",
        "text": "Be fully transparent with employees",
        "feedback": "This builds trust but might escalate concerns prematurely.",
        "impact": { "leadership": 4, "teamwork": 2 }
      },
      {
        "id": "B",
        "text": "Share limited information and a positive outlook",
        "feedback": "This reassures employees but might appear disingenuous if issues worsen.",
        "impact": { "strategy": 2, "leadership": 1 }
      },
      {
        "id": "C",
        "text": "Maintain confidentiality while addressing the issues",
        "feedback": "This avoids panic but risks damaging trust if rumors escalate.",
        "impact": { "strategy": -1, "leadership": -2 }
      },
      {
        "id": "D",
        "text": "Engage employees in problem-solving",
        "feedback": "This fosters collaboration but might not resolve financial issues quickly.",
        "impact": { "teamwork": 4, "leadership": 3 }
      },
      {
        "id": "E",
        "text": "Seek external consultation before making announcements",
        "feedback": "This ensures informed decisions but delays communication.",
        "impact": { "strategy": 3, "teamwork": 1 }
      }
    ]
  },
  {
    "id": 80,
    "title": "Employee Skill Development",
    "description": "Your team has identified skill gaps that could affect upcoming projects. Some leaders suggest investing in training programs, while others recommend hiring experienced professionals. What is your approach?",
    "choices": [
      {
        "id": "A",
        "text": "Launch a comprehensive training program",
        "feedback": "This builds long-term capability but requires time and resources.",
        "impact": { "leadership": 3, "teamwork": 4 }
      },
      {
        "id": "B",
        "text": "Hire experienced professionals",
        "feedback": "This addresses immediate needs but might impact team morale.",
        "impact": { "strategy": 3, "teamwork": -1 }
      },
      {
        "id": "C",
        "text": "Provide targeted training for specific gaps",
        "feedback": "This balances costs and efficiency but might not fully address all needs.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "D",
        "text": "Pair less experienced team members with mentors",
        "feedback": "This fosters growth but might slow down project timelines.",
        "impact": { "teamwork": 4, "leadership": 2 }
      },
      {
        "id": "E",
        "text": "Delay projects until the team is fully trained",
        "feedback": "This ensures readiness but risks losing momentum.",
        "impact": { "strategy": -2, "teamwork": -1 }
      }
    ]
  },
  {
    "id": 81,
    "title": "Data Security Enhancement",
    "description": "A recent audit highlighted vulnerabilities in your company's data security. Options include upgrading your security systems, training employees on best practices, or hiring a dedicated security officer. How do you proceed?",
    "choices": [
      {
        "id": "A",
        "text": "Upgrade the security systems",
        "feedback": "This addresses vulnerabilities quickly but involves high costs.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "B",
        "text": "Provide mandatory security training for employees",
        "feedback": "This reduces human error but doesn’t address systemic issues.",
        "impact": { "teamwork": 3, "leadership": 2 }
      },
      {
        "id": "C",
        "text": "Hire a dedicated security officer",
        "feedback": "This adds expertise but increases ongoing expenses.",
        "impact": { "strategy": 2, "teamwork": 1 }
      },
      {
        "id": "D",
        "text": "Focus on addressing critical vulnerabilities only",
        "feedback": "This minimizes costs but might leave some areas exposed.",
        "impact": { "strategy": 1, "innovation": -1 }
      },
      {
        "id": "E",
        "text": "Delay enhancements and monitor the situation",
        "feedback": "This conserves resources but think about security breaches.",
        "impact": { "strategy": -2, "leadership": -2 }
      }
    ]
  },
  {
    "id": 82,
    "title": "Product Expansion vs. Core Focus",
    "description": "Your company is considering launching a new product line to diversify revenue streams. However, this would divert resources from improving your core offerings. How do you decide?",
    "choices": [
      {
        "id": "A",
        "text": "Invest in the new product line",
        "feedback": "This expands revenue opportunities but might stretch resources thin.",
        "impact": { "innovation": 4, "strategy": 2 }
      },
      {
        "id": "B",
        "text": "Focus on enhancing core products",
        "feedback": "This strengthens your foundation but limits new growth opportunities.",
        "impact": { "strategy": 3, "leadership": 2 }
      },
      {
        "id": "C",
        "text": "Test the new product line in a limited market",
        "feedback": "This minimizes risk but delays a broader rollout.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "D",
        "text": "Develop partnerships to co-create the new product",
        "feedback": "This reduces costs but might complicate ownership and direction.",
        "impact": { "teamwork": 3, "strategy": 1 }
      },
      {
        "id": "E",
        "text": "Postpone the new product line until resources improve",
        "feedback": "This avoids immediate strain but think about market trends.",
        "impact": { "strategy": -1, "innovation": -2 }
      }
    ]
  },
  {
    "id": 83,
    "title": "Performance Metrics Overhaul",
    "description": "Your team has proposed revising performance metrics to better align with long-term goals. While this could improve clarity and motivation, it might disrupt current workflows. How do you approach this?",
    "choices": [
      {
        "id": "A",
        "text": "Revise all metrics immediately",
        "feedback": "This ensures alignment but might overwhelm the team.",
        "impact": { "strategy": 3, "leadership": 2 }
      },
      {
        "id": "B",
        "text": "Pilot the new metrics with a smaller team",
        "feedback": "This minimizes risks but delays broader implementation.",
        "impact": { "teamwork": 3, "strategy": 1 }
      },
      {
        "id": "C",
        "text": "Incorporate team feedback into the revisions",
        "feedback": "This builds buy-in but requires additional time and effort.",
        "impact": { "teamwork": 4, "leadership": 3 }
      },
      {
        "id": "D",
        "text": "Focus on updating only the most critical metrics",
        "feedback": "This balances effort and impact but might leave gaps.",
        "impact": { "strategy": 2, "innovation": 1 }
      },
      {
        "id": "E",
        "text": "Maintain current metrics and revisit later",
        "feedback": "This avoids disruption but what about opportunities for improvement.",
        "impact": { "strategy": -2, "leadership": -1 }
      }
    ]
  },
  {
    "id": 84,
    "title": "Conflict of Interest in Leadership",
    "description": "A senior leader has taken on an external advisory role that overlaps with your industry, raising concerns about potential conflicts of interest. What action do you take?",
    "choices": [
      {
        "id": "A",
        "text": "Request the leader to step down from the advisory role",
        "feedback": "This avoids conflicts but might impact their morale.",
        "impact": { "leadership": 4, "teamwork": 1 }
      },
      {
        "id": "B",
        "text": "Establish clear boundaries and guidelines for their external role",
        "feedback": "This allows them to continue but requires careful monitoring.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "C",
        "text": "Engage a legal advisor to assess the conflict",
        "feedback": "This ensures compliance but delays resolution.",
        "impact": { "strategy": 2, "leadership": 1 }
      },
      {
        "id": "D",
        "text": "Allow the role to continue without intervention",
        "feedback": "This avoids confrontation but risks perceptions of impropriety.",
        "impact": { "strategy": -2, "leadership": -1 }
      },
      {
        "id": "E",
        "text": "Consult the team for input on the decision",
        "feedback": "This promotes transparency but might create internal divisions.",
        "impact": { "teamwork": 4, "leadership": 2 }
      }
    ]
  },
  {
    "id": 85,
    "title": "Sponsorship Opportunity",
    "description": "Your company has been offered a chance to sponsor a major industry event, which could enhance brand visibility but requires a significant portion of your marketing budget. What is your decision?",
    "choices": [
      {
        "id": "A",
        "text": "Commit to the sponsorship",
        "feedback": "This maximizes visibility but reduces available funds for other initiatives.",
        "impact": { "strategy": 3, "leadership": 2 }
      },
      {
        "id": "B",
        "text": "Negotiate for a smaller sponsorship package",
        "feedback": "This balances visibility and budget but might reduce the impact.",
        "impact": { "strategy": 2, "teamwork": 2 }
      },
      {
        "id": "C",
        "text": "Decline the sponsorship and focus on existing campaigns",
        "feedback": "This conserves resources but may miss a high-profile opportunity.",
        "impact": { "strategy": -1, "leadership": -1 }
      },
      {
        "id": "D",
        "text": "Redirect funds to create your own event",
        "feedback": "This builds your brand independently but involves significant effort.",
        "impact": { "innovation": 3, "strategy": 1 }
      },
      {
        "id": "E",
        "text": "Seek co-sponsors to share the cost",
        "feedback": "This reduces the financial burden but requires coordination.",
        "impact": { "teamwork": 3, "strategy": 2 }
      }
    ]
  },
  {
    "id": 86,
    "title": "Ethical Investment Dilemma",
    "description": "Your company has the opportunity to invest in a high-return project that aligns with business goals but raises ethical concerns among some stakeholders. What is your approach?",
    "choices": [
      {
        "id": "A",
        "text": "Proceed with the investment",
        "feedback": "This ensures financial growth but risks damaging your reputation.",
        "impact": { "strategy": 4, "leadership": -1 }
      },
      {
        "id": "B",
        "text": "Decline the investment",
        "feedback": "This maintains ethical standards but sacrifices potential profits.",
        "impact": { "strategy": -2, "leadership": 3 }
      },
      {
        "id": "C",
        "text": "Propose modifications to align the project with company values",
        "feedback": "This balances ethics and returns but might delay progress.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "D",
        "text": "Engage stakeholders to address concerns before proceeding",
        "feedback": "This promotes collaboration but requires additional effort.",
        "impact": { "teamwork": 4, "leadership": 2 }
      },
      {
        "id": "E",
        "text": "Focus on developing an alternative investment strategy",
        "feedback": "This avoids controversy but might take longer to deliver returns.",
        "impact": { "innovation": 3, "strategy": 1 }
      }
    ]
  },
  {
    "id": 87,
    "title": "Cross-Team Collaboration Issues",
    "description": "A project requiring input from multiple teams is facing delays due to communication gaps and unclear responsibilities. How do you address this?",
    "choices": [
      {
        "id": "A",
        "text": "Appoint a dedicated project manager",
        "feedback": "This improves coordination but adds to costs.",
        "impact": { "leadership": 4, "teamwork": 2 }
      },
      {
        "id": "B",
        "text": "Host regular cross-team meetings",
        "feedback": "This fosters collaboration but might slow down individual team progress.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "C",
        "text": "Implement a shared project management tool",
        "feedback": "This enhances visibility but requires training and adaptation.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "D",
        "text": "Clarify roles and responsibilities in a formal document",
        "feedback": "This reduces confusion but might not address deeper issues.",
        "impact": { "teamwork": 2, "leadership": 1 }
      },
      {
        "id": "E",
        "text": "Allow teams to resolve issues independently",
        "feedback": "This promotes autonomy but risks further delays.",
        "impact": { "strategy": -1, "leadership": -2 }
      }
    ]
  },
  {
    "id": 88,
    "title": "Handling a PR Crisis",
    "description": "A former employee has made allegations against your company that are gaining attention on social media. Your PR team suggests issuing a statement, while legal advises waiting for more information. What do you do?",
    "choices": [
      {
        "id": "A",
        "text": "Issue an immediate public statement",
        "feedback": "This demonstrates transparency but risks providing incomplete information.",
        "impact": { "leadership": 4, "strategy": 1 }
      },
      {
        "id": "B",
        "text": "Wait for a full investigation before responding",
        "feedback": "This ensures accuracy but might appear evasive.",
        "impact": { "strategy": -1, "leadership": -2 }
      },
      {
        "id": "C",
        "text": "Engage with the former employee directly",
        "feedback": "This could resolve the issue quickly but might escalate tensions.",
        "impact": { "teamwork": 3, "leadership": 2 }
      },
      {
        "id": "D",
        "text": "Launch a positive PR campaign to shift the focus",
        "feedback": "This diverts attention but might not address core concerns.",
        "impact": { "strategy": 2, "innovation": 2 }
      },
      {
        "id": "E",
        "text": "Involve external PR consultants to guide the response",
        "feedback": "This provides expertise but might feel impersonal to stakeholders.",
        "impact": { "strategy": 3, "leadership": 1 }
      }
    ]
  },
  {
    "id": 89,
    "title": "Remote Work Tool Overload",
    "description": "Your employees have raised concerns about the growing number of tools required for remote work, causing confusion and inefficiency. What is your solution?",
    "choices": [
      {
        "id": "A",
        "text": "Consolidate tools to reduce redundancy",
        "feedback": "This simplifies workflows but might lose some functionality.",
        "impact": { "innovation": 3, "strategy": 2 }
      },
      {
        "id": "B",
        "text": "Provide additional training on existing tools",
        "feedback": "This improves proficiency but might not address all concerns.",
        "impact": { "teamwork": 3, "leadership": 2 }
      },
      {
        "id": "C",
        "text": "Survey employees to identify their preferred tools",
        "feedback": "This ensures alignment with needs but delays action.",
        "impact": { "teamwork": 4, "strategy": 1 }
      },
      {
        "id": "D",
        "text": "Invest in an integrated tool to replace multiple platforms",
        "feedback": "This improves efficiency but requires significant upfront costs.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "E",
        "text": "Maintain the current toolset and address issues individually",
        "feedback": "This avoids immediate costs, are there any broader concerns hm.",
        "impact": { "strategy": -1, "leadership": -1 }
      }
    ]
  },
  {
    "id": 90,
    "title": "Employee Social Media Policy",
    "description": "Several employees have been sharing controversial opinions on social media, causing concerns about the company's image. While freedom of expression is important, some leaders suggest implementing stricter social media guidelines. How do you handle this situation?",
    "choices": [
      {
        "id": "A",
        "text": "Introduce strict social media guidelines",
        "feedback": "This protects the company’s image but may lead to employee dissatisfaction.",
        "impact": { "leadership": 3, "strategy": 2 }
      },
      {
        "id": "B",
        "text": "Encourage employees to act responsibly without formal policies",
        "feedback": "This respects autonomy but risks ongoing issues.",
        "impact": { "teamwork": 2, "leadership": -1 }
      },
      {
        "id": "C",
        "text": "Provide training on responsible social media use",
        "feedback": "This balances guidance and freedom but requires time and resources.",
        "impact": { "teamwork": 4, "leadership": 3 }
      },
      {
        "id": "D",
        "text": "Address concerns individually with the involved employees",
        "feedback": "This targets specific issues but might not prevent future occurrences.",
        "impact": { "leadership": 2, "teamwork": 1 }
      },
      {
        "id": "E",
        "text": "Ignore the situation to avoid backlash",
        "feedback": "This avoids immediate conflict.",
        "impact": { "strategy": -2, "leadership": -2 }
      }
    ]
  },
  {
    "id": 91,
    "title": "Team Innovation Stagnation",
    "description": "Your team has been delivering consistent results but seems hesitant to propose innovative ideas, fearing failure or rejection. How do you encourage innovation?",
    "choices": [
      {
        "id": "A",
        "text": "Host innovation workshops to generate new ideas",
        "feedback": "This fosters creativity but requires a dedicated budget and time.",
        "impact": { "innovation": 4, "teamwork": 3 }
      },
      {
        "id": "B",
        "text": "Introduce an innovation reward program",
        "feedback": "This incentivizes creativity but might lead to short-term focus.",
        "impact": { "leadership": 3, "innovation": 2 }
      },
      {
        "id": "C",
        "text": "Encourage risk-taking by accepting failure as part of the process",
        "feedback": "This promotes experimentation but may temporarily impact results.",
        "impact": { "leadership": 4, "teamwork": 2 }
      },
      {
        "id": "D",
        "text": "Assign a dedicated team to focus on innovation",
        "feedback": "This ensures innovation efforts but might exclude other team members.",
        "impact": { "innovation": 3, "strategy": 1 }
      },
      {
        "id": "E",
        "text": "Maintain the current approach and prioritize consistency",
        "feedback": "This avoids disruption but what about competitors.",
        "impact": { "strategy": -2, "innovation": -3 }
      }
    ]
  },
  {
    "id": 92,
    "title": "High Performer Burnout",
    "description": "A top-performing employee has expressed feelings of burnout and may leave the company. Retaining them is critical, but addressing their concerns could set new precedents. What is your approach?",
    "choices": [
      {
        "id": "A",
        "text": "Offer additional support and resources to reduce workload",
        "feedback": "This addresses their concerns but may create expectations for others.",
        "impact": { "teamwork": 4, "leadership": 3 }
      },
      {
        "id": "B",
        "text": "Provide a temporary sabbatical to recharge",
        "feedback": "This ensures their well-being but may disrupt project timelines.",
        "impact": { "leadership": 2, "strategy": 1 }
      },
      {
        "id": "C",
        "text": "Reassign tasks to balance their workload across the team",
        "feedback": "This reduces pressure but might overburden others.",
        "impact": { "teamwork": 3, "strategy": 1 }
      },
      {
        "id": "D",
        "text": "Encourage them to stay without changing current conditions",
        "feedback": "This avoids additional costs but risks losing a valuable employee.",
        "impact": { "leadership": -2, "teamwork": -1 }
      },
      {
        "id": "E",
        "text": "Engage them in creating a long-term strategy for their role",
        "feedback": "This aligns with their goals but requires additional effort and time.",
        "impact": { "teamwork": 4, "leadership": 2 }
      }
    ]
  },
  {
    "id": 93,
    "title": "AI Ethics Policy",
    "description": "Your company is developing AI solutions, but there’s growing concern about potential misuse. Some team members suggest drafting a comprehensive AI ethics policy, while others see this as an unnecessary distraction. What is your decision?",
    "choices": [
      {
        "id": "A",
        "text": "Draft a comprehensive AI ethics policy immediately",
        "feedback": "This demonstrates responsibility but delays development efforts.",
        "impact": { "leadership": 3, "strategy": 1 }
      },
      {
        "id": "B",
        "text": "Develop basic guidelines and refine them over time",
        "feedback": "This balances ethics and progress but might overlook critical issues.",
        "impact": { "strategy": 3, "innovation": 2 }
      },
      {
        "id": "C",
        "text": "Focus on technical development and address ethics later",
        "feedback": "This accelerates development but with what cost?",
        "impact": { "strategy": -1, "leadership": -2 }
      },
      {
        "id": "D",
        "text": "Engage external experts to guide policy creation",
        "feedback": "This ensures credibility but increases costs and timelines.",
        "impact": { "teamwork": 3, "strategy": 2 }
      },
      {
        "id": "E",
        "text": "Conduct internal discussions to align on core principles",
        "feedback": "This fosters team buy-in but might lack comprehensive expertise.",
        "impact": { "teamwork": 4, "leadership": 2 }
      }
    ]
  },
  {
    "id": 94,
    "title": "Office Relocation Decision",
    "description": "Your current office lease is expiring, and you must decide whether to renew, move to a larger space for future growth, or downsize to save costs. How do you approach this?",
    "choices": [
      {
        "id": "A",
        "text": "Renew the current lease",
        "feedback": "This avoids disruption but limits flexibility for future growth.",
        "impact": { "strategy": -1, "teamwork": 1 }
      },
      {
        "id": "B",
        "text": "Move to a larger office",
        "feedback": "This supports growth but increases costs.",
        "impact": { "strategy": 3, "leadership": 2 }
      },
      {
        "id": "C",
        "text": "Downsize to reduce costs",
        "feedback": "This improves financial stability but might impact team morale.",
        "impact": { "strategy": 2, "leadership": -1 }
      },
      {
        "id": "D",
        "text": "Adopt a hybrid model with a smaller central office",
        "feedback": "This balances costs and flexibility but requires clear policies.",
        "impact": { "teamwork": 4, "strategy": 3 }
      },
      {
        "id": "E",
        "text": "Delay the decision by negotiating a short-term lease extension",
        "feedback": "This buys time but what about long-term needs.",
        "impact": { "strategy": -2, "leadership": -1 }
      }
    ]
  }
];

export const getRandomScenario = (): Scenario => {
  const randomIndex = Math.floor(Math.random() * scenarios.length);
  return scenarios[randomIndex];
};
