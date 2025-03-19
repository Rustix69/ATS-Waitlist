import { FileText } from "lucide-react"
import WaitlistPopup from "@/components/waitlist-popup"
import WhySection from "@/app/components/why-section"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
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
                <span className="font-medium">Coming Soon</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get Past ATS Systems & Land More Interviews
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our AI-powered Resume Checker analyzes your resume against job descriptions to ensure it passes
                Applicant Tracking Systems.
              </p>
              <WaitlistPopup />
            </div>
          </div>
        </section>

        {/* Animated Why Section with Logos */}
        <WhySection />

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl">Be the First to Know When We Launch</h2>
              <p className="max-w-[600px] text-muted-foreground">
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

