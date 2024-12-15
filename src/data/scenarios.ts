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
    description: "Two senior team members disagree about project direction, causing delays.",
    choices: [
      {
        id: "A",
        text: "Schedule a mediated discussion",
        feedback: "Good choice! Facilitating open communication helps resolve conflicts.",
        impact: { leadership: 5, teamwork: 3 }
      },
      {
        id: "B",
        text: "Make an executive decision",
        feedback: "This can be effective but might not address underlying issues.",
        impact: { leadership: -2, teamwork: -2 }
      }
    ]
  },
  {
    id: 2,
    title: "Innovation Challenge",
    description: "Your team has proposed a risky but innovative solution.",
    choices: [
      {
        id: "A",
        text: "Support the innovative approach",
        feedback: "Taking calculated risks can lead to breakthroughs!",
        impact: { innovation: 5, strategy: 3 }
      },
      {
        id: "B",
        text: "Stick to proven methods",
        feedback: "Playing it safe might limit potential growth.",
        impact: { innovation: -2, strategy: 2 }
      }
    ]
  },
  // ... Add 198 more scenarios following the same pattern
];

export const getRandomScenario = (): Scenario => {
  const randomIndex = Math.floor(Math.random() * scenarios.length);
  return scenarios[randomIndex];
};