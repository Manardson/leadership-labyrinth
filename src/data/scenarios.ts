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
    title: "Client Satisfaction vs. Team Morale",
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
  }
];

export const getRandomScenario = (): Scenario => {
  const randomIndex = Math.floor(Math.random() * scenarios.length);
  return scenarios[randomIndex];
};
