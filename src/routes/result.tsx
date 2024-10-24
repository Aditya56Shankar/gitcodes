import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Footer from '@/components/footer';
import Header from '@/components/header';

// Define TypeScript interfaces
interface Candidate {
  name: string;
  votes: number;
  percentage: number;
}

interface Election {
  id: number;
  name: string;
  type: string;
  winner: string;
  totalVotes: number;
  candidates: Candidate[];
}





// Mock data
const mockElections: Election[] = [
  {
    id: 1,
    name: "2024 Student Council",
    type: "Student Body",
    winner: "Jane Smith",
    totalVotes: 1500,
    candidates: [
      { name: "Jane Smith", votes: 800, percentage: 53.3 },
      { name: "John Doe", votes: 600, percentage: 40 },
      { name: "NOTA", votes: 100, percentage: 6.7 }
    ]
  },
  {
    id: 2,
    name: "2024 Department Head",
    type: "Faculty",
    winner: "Dr. Johnson",
    totalVotes: 120,
    candidates: [
      { name: "Dr. Johnson", votes: 70, percentage: 58.3 },
      { name: "Dr. Williams", votes: 40, percentage: 33.3 },
      { name: "NOTA", votes: 10, percentage: 8.4 }
    ]
  }
];


const ElectionDashboard: React.FC = () => {
  const [selectedElection, setSelectedElection] = useState<Election>(mockElections[0]);

  

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50">
      
      
      <div className="p-6 max-w-6xl mx-auto">
        <div className="grid gap-6">
          {/* Election Selector */}
          <Card className="bg-green-600">
            <CardHeader>
              <CardTitle className="text-white">Election Results Dashboard</CardTitle>
              <CardDescription className="text-gray-100">
                View and analyze election results and generate reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Select
                  onValueChange={(value) => {
                    const election = mockElections.find(e => e.id === parseInt(value));
                    if (election) setSelectedElection(election);
                  }}
                >
                  <SelectTrigger className="w-[240px] bg-white">
                    <SelectValue placeholder="Select Election" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockElections.map((election) => (
                      <SelectItem key={election.id} value={election.id.toString()}>
                        {election.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
               
              </div>
            </CardContent>
          </Card>

          {/* Results Display */}
          <Card>
            <CardHeader>
              <CardTitle>Results: {selectedElection.name}</CardTitle>
              <CardDescription>Winner: {selectedElection.winner}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {selectedElection.candidates.map((candidate, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{candidate.name}</span>
                      <span>{candidate.percentage.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${candidate.percentage}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-500">
                      {candidate.votes.toLocaleString()} votes
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ElectionDashboard;