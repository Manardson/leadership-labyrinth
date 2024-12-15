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
    "description": "A key employee has received an offer from a competitor and is considering leaving. Losing them could disrupt ongoing projects and morale. Do you counter the offer or let them go?","
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
  
];

export const getRandomScenario = (): Scenario => {
  const randomIndex = Math.floor(Math.random() * scenarios.length);
  return scenarios[randomIndex];
};
