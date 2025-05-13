
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import AIOutputDisplay from "@/components/AIOutputDisplay";
import ModelHeader from "@/components/ModelHeader";

const Index = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const processInput = async () => {
    if (!input.trim()) {
      toast({
        title: "Empty Input",
        description: "Please enter some text to process.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setOutput("");
    
    try {
      // Simulate AI processing with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simple demo response generation
      const response = `Analysis of input: "${input}"\n\nThe provided text contains ${input.split(" ").length} words and ${input.length} characters.\n\nThis is a simulated response that would normally come from a cloud AI model. In a production environment, this would be replaced with actual API calls to services like OpenAI, Anthropic, or other research model providers.`;
      
      setOutput(response);
    } catch (error) {
      console.error("Error processing input:", error);
      toast({
        title: "Processing Error",
        description: "There was an error processing your request.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <ModelHeader />
        
        <div className="grid gap-8 mt-8">
          <Card className="p-6 shadow-md">
            <h2 className="text-lg font-medium mb-4 text-slate-700">Input</h2>
            <Textarea
              placeholder="Enter your prompt here..."
              className="min-h-[150px] resize-y font-mono text-sm bg-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex justify-end mt-4">
              <Button 
                onClick={processInput} 
                disabled={isProcessing || !input.trim()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isProcessing ? "Processing..." : "Process Input"}
              </Button>
            </div>
          </Card>

          <AIOutputDisplay output={output} isProcessing={isProcessing} />
        </div>
      </div>
    </div>
  );
};

export default Index;
