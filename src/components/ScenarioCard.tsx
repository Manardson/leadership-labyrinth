import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getRandomScenario, type Scenario } from "@/data/scenarios";
import { toast } from "@/hooks/use-toast";

interface ScenarioCardProps {
  onDecision: (impacts: Record<string, number>) => void;
}

const ScenarioCard = ({ onDecision }: ScenarioCardProps) => {
  const [hasChosen, setHasChosen] = useState(false);
  const [currentScenario, setCurrentScenario] = useState<Scenario>(getRandomScenario());

  const handleChoice = (choice: typeof currentScenario.choices[0]) => {
    setHasChosen(true);
    onDecision(choice.impact);

    // Show congratulatory messages for positive impacts
    Object.entries(choice.impact).forEach(([skill, value]) => {
      if (value > 0) {
        toast({
          title: `${skill.charAt(0).toUpperCase() + skill.slice(1)} Improved!`,
          description: `Your ${skill} score has increased by ${value} points!`,
          variant: "default",
        });
      }
    });

    // Load new scenario after 2 seconds
    setTimeout(() => {
      setCurrentScenario(getRandomScenario());
      setHasChosen(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{currentScenario.title}</h3>
      <p className="text-game-foreground/50">{currentScenario.description}</p>
      
      <div className="space-y-3 mt-4">
        {currentScenario.choices.map((choice) => (
          <div key={choice.id} className="space-y-2">
            <Button
              className="w-full justify-start text-left h-auto py-3 px-4 text-white"
              variant={hasChosen ? "secondary" : "default"}
              onClick={() => handleChoice(choice)}
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