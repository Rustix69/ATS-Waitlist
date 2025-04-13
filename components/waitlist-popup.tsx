"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { supabase } from "@/utils/supabase"

export default function WaitlistPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  
  // Only run on client after hydration is complete
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }
    
    setIsSubmitting(true)
    setError("")
    
    try {
      // Insert the email into the Registration table - only on client
      if (typeof window !== 'undefined') {
        const { data, error: supabaseError } = await supabase
          .from('Registration')
          .insert([
            { 
              email: email
            },
          ])
          .select()

        if (supabaseError) {
          console.error("Error inserting email:", supabaseError)
          throw supabaseError
        }
      }
      
      setIsSubmitted(true)
    } catch (err) {
      console.error("Submission error:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const openPopup = () => {
    if (typeof window !== 'undefined') {
      setIsOpen(true)
      document.body.style.overflow = "hidden" // Prevent scrolling when popup is open
    }
  }

  const closePopup = () => {
    if (typeof window !== 'undefined') {
      setIsOpen(false)
      setIsSubmitted(false)
      setEmail("")
      setError("")
      document.body.style.overflow = "" // Re-enable scrolling
    }
  }

  // Basic button during SSR to avoid hydration issues
  if (!isMounted) {
    return <Button size="lg" className="rounded-full bg-white hover:bg-white/90 text-purple-800 font-semibold px-8">Get Notified</Button>
  }

  return (
    <>
      <Button 
        size="lg" 
        onClick={openPopup} 
        className="rounded-full bg-white hover:bg-white/90 text-purple-800 font-semibold px-8"
      >
        Get Notified
      </Button>

      {isOpen && (
        <div 
          ref={popupRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        >
          <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-br from-purple-900/90 to-black/90 p-6 shadow-lg border border-purple-600/30">
            <button
              onClick={closePopup}
              className="absolute right-4 top-4 rounded-full p-1 hover:bg-white/10 text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="mb-4 text-2xl font-bold text-white">Join Our Waitlist</h3>
                <p className="mb-6 text-white/70">
                  Be the first to know when we launch our ATS Resume Checker.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-lg"
                    />
                    {error && <p className="mt-2 text-sm text-pink-300">{error}</p>}
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold h-12" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Join Waitlist"}
                  </Button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <h3 className="mb-2 text-2xl font-bold text-white">Thank You!</h3>
                <p className="text-white/70">
                  You've been added to our waitlist. We'll notify you when we launch.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-6 border-white/20 text-white hover:bg-white/10" 
                  onClick={closePopup}
                >
                  Close
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

