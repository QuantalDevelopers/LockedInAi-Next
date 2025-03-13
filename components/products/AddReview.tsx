
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Minus, Trash2, ArrowLeft } from "lucide-react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/providers/AuthProvider";
import { useToast } from "@/components/ui/use-toast";
import { companies } from "./companyData";

const AddReview = () => {
  const navigate = useNavigate();
  const { companyId } = useParams();
  const location = useLocation();
  const [experience, setExperience] = useState<string>("");
  const [applicationSource, setApplicationSource] = useState<string>("");
  const [interviewProcess, setInterviewProcess] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [offer, setOffer] = useState<string>("");
  const [questions, setQuestions] = useState<{ question: string; answer: string }[]>([
    { question: "", answer: "" }
  ]);

  const { session } = useAuth();
  const { toast } = useToast();

  const currentCompanyId = companyId || location.state?.companyId;
  const company = currentCompanyId ? companies[currentCompanyId as keyof typeof companies] : null;

  useEffect(() => {
    if (!company) {
      navigate('/');
    }
  }, [company, navigate]);

  const addQuestion = () => {
    setQuestions([...questions, { question: "", answer: "" }]);
  };

  const deleteQuestion = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!company || !currentCompanyId || !session?.user?.id) {
      toast({
        title: "Error",
        description: "Please sign in to submit a review",
        variant: "destructive",
      });
      return;
    }

    if (!experience) {
      toast({
        title: "Error",
        description: "Please rate your overall experience",
        variant: "destructive",
      });
      return;
    }

    if (!applicationSource.trim()) {
      toast({
        title: "Error",
        description: "Please provide the application source",
        variant: "destructive",
      });
      return;
    }

    if (!interviewProcess.trim()) {
      toast({
        title: "Error",
        description: "Please describe the interview process",
        variant: "destructive",
      });
      return;
    }

    if (!difficulty) {
      toast({
        title: "Error",
        description: "Please select the interview difficulty",
        variant: "destructive",
      });
      return;
    }

    if (!offer) {
      toast({
        title: "Error",
        description: "Please indicate whether you received an offer",
        variant: "destructive",
      });
      return;
    }

    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    if (!jobTitle.trim()) {
      toast({
        title: "Error",
        description: "Please enter the job title",
        variant: "destructive",
      });
      return;
    }

    if (!questions[0].question.trim()) {
      toast({
        title: "Error",
        description: "Please provide at least one interview question",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data: interviewData, error: interviewError } = await supabase
        .from('interviews')
        .insert({
          company_id: currentCompanyId,
          position: jobTitle,
          date: new Date().toISOString(),
          experience,
          application_source: applicationSource,
          interview_process: interviewProcess,
          difficulty,
          offer,
          user_id: session.user.id
        })
        .select()
        .single();

      if (interviewError) throw interviewError;

      const questionsToInsert = questions
        .filter(q => q.question.trim())
        .map(q => ({
          interview_id: interviewData.id,
          question: q.question,
          answer: q.answer
        }));

      const { error: questionsError } = await supabase
        .from('interview_questions')
        .insert(questionsToInsert);

      if (questionsError) throw questionsError;

      toast({
        title: "Success",
        description: "Your interview review has been submitted",
      });

      navigate(`/company/${currentCompanyId}`);
    } catch (error) {
      console.error('Error saving interview:', error);
      toast({
        title: "Error",
        description: "Failed to save your review. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate(`/company/${currentCompanyId}`)}
          className="mb-6 inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to interview details</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-6">
              <h1 className="text-3xl font-bold mb-6">Tell us about a recent job interview</h1>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="employer">Employer</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                      {company?.logo ? (
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-sky-100 rounded flex items-center justify-center text-sky-600 font-bold">
                          {company?.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-gray-700">
                      {company?.name}
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="after:content-['*'] after:text-red-500 after:ml-0.5">Rate Overall Experience</Label>
                  <div className="flex gap-4 mt-2">
                    <button 
                      type="button"
                      className={`p-4 rounded-full hover:bg-gray-100 ${
                        experience === "positive" ? "bg-gray-100" : ""
                      }`}
                      onClick={() => setExperience("positive")}
                    >
                      <ThumbsUp className="w-6 h-6 text-gray-600" />
                    </button>
                    <button 
                      type="button"
                      className={`p-4 rounded-full hover:bg-gray-100 ${
                        experience === "neutral" ? "bg-gray-100" : ""
                      }`}
                      onClick={() => setExperience("neutral")}
                    >
                      <Minus className="w-6 h-6 text-gray-600" />
                    </button>
                    <button 
                      type="button"
                      className={`p-4 rounded-full hover:bg-gray-100 ${
                        experience === "negative" ? "bg-gray-100" : ""
                      }`}
                      onClick={() => setExperience("negative")}
                    >
                      <ThumbsDown className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="jobTitle" className="after:content-['*'] after:text-red-500 after:ml-0.5">Job Title</Label>
                  <Input id="jobTitle" className="mt-2" required />
                </div>

                <div>
                  <Label htmlFor="applicationSource" className="after:content-['*'] after:text-red-500 after:ml-0.5">Application Source</Label>
                  <Input
                    id="applicationSource"
                    value={applicationSource}
                    onChange={(e) => setApplicationSource(e.target.value)}
                    placeholder="e.g., Applied through referral, Company website, LinkedIn"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="process" className="after:content-['*'] after:text-red-500 after:ml-0.5">Describe the Interview Process</Label>
                  <textarea
                    id="process"
                    value={interviewProcess}
                    onChange={(e) => setInterviewProcess(e.target.value)}
                    className="mt-2 w-full min-h-[100px] p-3 rounded-md border border-input bg-transparent text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    required
                    minLength={30}
                  />
                  <p className="text-sm text-gray-500 mt-1">30 word minimum</p>
                </div>

                <div>
                  <Label htmlFor="difficulty" className="after:content-['*'] after:text-red-500 after:ml-0.5">Interview Difficulty</Label>
                  <Select value={difficulty} onValueChange={setDifficulty} required>
                    <SelectTrigger id="difficulty" className="mt-2">
                      <SelectValue placeholder="Select difficulty level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="average">Average</SelectItem>
                      <SelectItem value="difficult">Difficult</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="offer" className="after:content-['*'] after:text-red-500 after:ml-0.5">Did you get an offer?</Label>
                  <Select value={offer} onValueChange={setOffer} required>
                    <SelectTrigger id="offer" className="mt-2">
                      <SelectValue placeholder="Select your option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-6">
                  <Label className="after:content-['*'] after:text-red-500 after:ml-0.5">Interview questions</Label>
                  {questions.map((q, index) => (
                    <div key={index} className="space-y-4 relative">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Label className="after:content-['*'] after:text-red-500 after:ml-0.5">Question</Label>
                          {index > 0 && (
                            <button 
                              type="button"
                              onClick={() => deleteQuestion(index)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                        <Input 
                          value={q.question}
                          onChange={(e) => {
                            const newQuestions = [...questions];
                            newQuestions[index].question = e.target.value;
                            setQuestions(newQuestions);
                          }}
                          placeholder="What was the one thing that they asked you?"
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label>How did you answer this question? (Optional)</Label>
                        <textarea
                          value={q.answer}
                          onChange={(e) => {
                            const newQuestions = [...questions];
                            newQuestions[index].answer = e.target.value;
                            setQuestions(newQuestions);
                          }}
                          className="mt-2 w-full min-h-[100px] p-3 rounded-md border border-input bg-transparent text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                      </div>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addQuestion}
                    className="w-auto"
                  >
                    Add a question
                  </Button>
                </div>

                <Button type="submit" className="w-auto bg-sky-500 hover:bg-sky-600">
                  Submit Review
                </Button>
              </div>
            </form>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-4">Keep it Real</h2>
              <p className="text-gray-700 mb-6">
                Thank you for contributing to the community. Your opinion will help others make decisions about jobs and companies.
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Please stick to the{" "}
                  <a href="#" className="text-green-600 hover:underline">
                    Community Guidelines
                  </a>{" "}
                  and do not post:
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Aggressive or discriminatory language</li>
                  <li>Profanities</li>
                  <li>Trade secrets/confidential information</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
