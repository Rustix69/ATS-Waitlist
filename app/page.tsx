import { FileText } from "lucide-react"
import WaitlistPopup from "@/components/waitlist-popup"
import WhySection from "@/app/components/why-section"

export default function LandingPage() {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto] grid-bg">
      <header className="border-b">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2 font-bold text-xl">
            <FileText className="h-6 w-6" />
            <span>ResumeAI</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-8">
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                <span className="font-medium ls-wide">COMING SOON</span>
              </div>
              <h1 className="heading-xl text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl ls-tight">
                Get Past <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">ATS Systems</span> & Land More Interviews
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl ls-normal">
                Our AI-powered Resume Checker analyzes your resume against job descriptions to ensure it passes
                Applicant Tracking Systems.
              </p>
              <WaitlistPopup />
            </div>
          </div>
        </section>

        {/* Animated Why Section with Logos */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4 ls-tight">
                <span className="border-b-4 border-purple-500 pb-1">KEY FEATURES</span>
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground text-lg ls-normal">
                Our AI-powered tools help you optimize your resume for success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-8 bg-white/90 backdrop-blur-sm shadow-md rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-purple-200 opacity-50 blur-md"></div>
                  <img 
                    src="/resume.png" 
                    alt="ATS Optimization" 
                    className="h-14 w-14 object-contain relative z-10" 
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">ATS Optimization</h3>
                <p className="text-muted-foreground text-base">
                  Ensure your resume passes through Applicant Tracking Systems with keyword optimization.
                </p>
              </div>
              <div className="p-8 bg-white/90 backdrop-blur-sm shadow-md rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-blue-200 opacity-50 blur-md"></div>
                  <img 
                    src="/job.png" 
                    alt="Job-Specific Analysis" 
                    className="h-14 w-14 object-contain relative z-10" 
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Job-Specific Analysis</h3>
                <p className="text-muted-foreground text-base">
                  Get personalized recommendations based on the specific job descriptions you're applying to.
                </p>
              </div>
              <div className="p-8 bg-white/90 backdrop-blur-sm shadow-md rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-green-200 opacity-50 blur-md"></div>
                  <img 
                    src="/standout.png" 
                    alt="Stand Out" 
                    className="h-14 w-14 object-contain relative z-10" 
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Stand Out</h3>
                <p className="text-muted-foreground text-base">
                  Receive actionable feedback to make your resume stand out to both algorithms and hiring managers.
                </p>
              </div>
              <div className="p-8 bg-white/90 backdrop-blur-sm shadow-md rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-amber-200 opacity-50 blur-md"></div>
                  <img 
                    src="/ai.png" 
                    alt="LLM Resume Checker" 
                    className="h-14 w-14 object-contain relative z-10" 
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">LLM Resume Checker</h3>
                <p className="text-muted-foreground text-base">
                  Leverage the latest AI technology to receive smart suggestions to enhance your professional profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl ls-tight">
                BE THE <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">FIRST TO KNOW</span> WHEN WE LAUNCH
              </h2>
              <p className="max-w-[600px] text-muted-foreground ls-normal">
                Join our waitlist to get early access and special launch offers.
              </p>
              <div className="mt-4">
                <WaitlistPopup />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} ResumeAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

