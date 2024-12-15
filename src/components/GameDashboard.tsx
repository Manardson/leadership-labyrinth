import { Card } from "@/components/ui/card";
import { Trophy, Users, Target, ChartBar } from "lucide-react";
import StatsChart from "./StatsChart";
import ScenarioCard from "./ScenarioCard";
import { useState } from "react";

export interface GameStats {
  leadership: number;
  teamwork: number;
  strategy: number;
  innovation: number;
}

const GameDashboard = () => {
  const [stats, setStats] = useState<GameStats>({
    leadership: 65,
    teamwork: 70,
    strategy: 55,
    innovation: 60,
  });

  const statCards = [
    { title: "Leadership Score", value: stats.leadership, icon: Trophy },
    { title: "Team Management", value: stats.teamwork, icon: Users },
    { title: "Strategic Vision", value: stats.strategy, icon: Target },
    { title: "Innovation Index", value: stats.innovation, icon: ChartBar },
  ];

  return (
    <div className="p-6 bg-game-background min-h-screen text-game-foreground animate-fade-in">
      <h1 className="text-3xl font-bold mb-8">Leadership Simulator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {statCards.map((stat) => (
          <Card key={stat.title} className="p-4 bg-game-background border-game-border">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-game-primary/10 rounded-lg">
                <stat.icon className="w-6 h-6 text-game-primary" />
              </div>
              <div>
                <p className="text-sm text-game-muted">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6 bg-game-background border-game-border">
          <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
          <StatsChart stats={stats} />
        </Card>

        <Card className="p-6 bg-game-background border-game-border">
          <h2 className="text-xl font-semibold mb-4">Current Scenario</h2>
          <ScenarioCard onDecision={(choice) => {
            // Update stats based on decision
            setStats(prev => ({
              ...prev,
              leadership: Math.min(100, prev.leadership + (choice === 'A' ? 5 : -2)),
              teamwork: Math.min(100, prev.teamwork + (choice === 'B' ? 5 : -2)),
            }));
          }} />
        </Card>
      </div>
    </div>
  );
};

export default GameDashboard;