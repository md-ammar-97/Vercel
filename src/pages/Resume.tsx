
import Timeline from "@/components/resume/Timeline";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";

const Resume = () => {
  return (
    <div className="section-container">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="page-title">Resume</h1>
          <p className="subtitle">
            My professional journey and qualifications
          </p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-accent hover:bg-accent/90">
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="mb-4">Choose Resume Version</DialogTitle>
              <DialogDescription className="mb-6">
                I work across both domains and tailor my resume based on the role's focus.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <Button asChild>
                <a href="http://tiny.cc/Ammar-Resume-Industrial" target="_blank" rel="noopener noreferrer">
                  📄 Resume – Industrial Engineering Focus
                </a>
              </Button>
              <Button asChild>
                <a href="http://tiny.cc/Ammar-Resume-Analytics" target="_blank" rel="noopener noreferrer">
                  📊 Resume – Business Analytics & Strategy Focus
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Experience Section */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>
            <Timeline type="experience" />
          </div>

          {/* Education Section */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Education</h2>
            <Timeline type="education" />
          </div>
        </div>
        
        <div>
          {/* Skills Section */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <div className="space-y-4">
              {/* Skills Content */}
              <div>
                <h3 className="font-medium mb-1">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Python</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">SQL</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">R</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">CPLEX</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Advanced Excel</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">VBA</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Macros</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Data Visualization</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Power BI</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Tableau</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Looker Studio</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Alteryx</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Business Analysis</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Requirements Engineering</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Business Process Modeling</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Business Intelligence</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Requirements Gathering</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Data-Driven Insights</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Stakeholder Engagement</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Process Improvement</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Root Cause Analysis</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Business Process Reengineering</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Cost-Benefit Analysis</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">SWOT Analysis</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Operational Efficiency</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Methodologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Agile</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Scrum</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Lean Six Sigma</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Continuous Improvement</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Process Automation</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Value Stream Mapping</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Risk Mitigation</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Change Management</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Capability Maturity Model</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Waterfall Model</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Robotic Process Automation (RPA)</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-1">Gen AI Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">ChatGPT</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Perplexity AI</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Lovable AI</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Cursor AI</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Deepseek AI</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Cohere</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Adept AI</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Google Vertex AI</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Tableau AI</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">GitHub Copilot</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md">Replit</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications Section */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
             <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent"></div>
                <span>Power BI Certification</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent"></div>
                <span>Scrum Master Certification</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent"></div>
                <span>Lean Six Sigma (in-progress)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent"></div>
                <span>CBAP (in-progress)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
