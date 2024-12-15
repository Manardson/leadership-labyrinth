import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ScenarioCardProps {
  onDecision: (choice: string) => void;
}

const ScenarioCard = ({ onDecision }: ScenarioCardProps) => {
  const [hasChosen, setHasChosen] = useState(false);

  const scenario = {
    title: "Team Conflict Resolution",
    description: "Two of your senior team members are in disagreement about the project direction. This is causing tension in the team and potentially delaying deliverables.",
    choices: [
      {
        id: "A",
        text: "Schedule a mediated discussion to find common ground",
        feedback: "Good choice! Facilitating open communication helps resolve conflicts constructively.",
      },
      {
        id: "B",
        text: "Make an executive decision and assign clear responsibilities",
        feedback: "This can be effective but might not address the underlying conflict.",
      },
    ],
  };

  const handleChoice = (choiceId: string) => {
    setHasChosen(true);
    onDecision(choiceId);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{scenario.title}</h3>
      <p className="text-game-foreground/80">{scenario.description}</p>
      
      <div className="space-y-3 mt-4">
        {scenario.choices.map((choice) => (
          <div key={choice.id} className="space-y-2">
            <Button
              className="w-full justify-start text-left h-auto py-3 px-4"
              variant={hasChosen ? "secondary" : "default"}
              onClick={() => handleChoice(choice.id)}
              disabled={hasChosen}
            >
              {choice.text}
            </Button>
            {hasChosen && (
              <p className="text-sm text-game-foreground/70 px-4">
                {choice.feedback}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenarioCard;