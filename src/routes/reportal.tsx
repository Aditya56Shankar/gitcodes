import { Download, FileText, Filter } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Header from "@/components/header";


// Mock data - in real application, this would come from your backend


const ElectionDashboard = () => {
  

  const handleDownload = (format: string) => {
    // Implement download logic here
    console.log(`Downloading in ${format} format`);
  };

  return (
    <>
          <Header />

    <div className="p-6 max-w-6xl mx-auto">
    <div className="flex gap-4">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <button
                  onClick={() => handleDownload('pdf')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  PDF
                </button>
                <button
                  onClick={() => handleDownload('excel')}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Excel
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Generate Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <button
                className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Generate Official Report
              </button>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Custom Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <button
                className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Configure Filters
              </button>
            </CardContent>
          </Card>
        </div>
    </div>
    </>
  );
};

export default ElectionDashboard;

