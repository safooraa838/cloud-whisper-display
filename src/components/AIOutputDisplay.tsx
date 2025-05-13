
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface AIOutputDisplayProps {
  output: string;
  isProcessing: boolean;
}

const AIOutputDisplay = ({ output, isProcessing }: AIOutputDisplayProps) => {
  return (
    <Card className="p-6 shadow-md">
      <h2 className="text-lg font-medium mb-4 text-slate-700">Output</h2>
      
      {isProcessing ? (
        <div className="space-y-3">
          <Skeleton className="h-4 w-full bg-slate-200" />
          <Skeleton className="h-4 w-3/4 bg-slate-200" />
          <Skeleton className="h-4 w-5/6 bg-slate-200" />
          <Skeleton className="h-4 w-2/3 bg-slate-200" />
        </div>
      ) : output ? (
        <pre className="whitespace-pre-wrap font-mono text-sm p-4 bg-white border border-slate-200 rounded-md overflow-auto max-h-[500px]">
          {output}
        </pre>
      ) : (
        <div className="text-center py-8 text-slate-500 bg-slate-50 rounded-md border border-slate-100">
          Output will appear here after processing
        </div>
      )}
    </Card>
  );
};

export default AIOutputDisplay;
