
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ModelHeader = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Cloud AI Research Interface</h1>
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          Experimental
        </Badge>
      </div>
      <p className="text-slate-500 mt-2">
        A simple interface for testing and experimenting with cloud AI research models
      </p>
      <Separator className="my-4" />
    </div>
  );
};

export default ModelHeader;
