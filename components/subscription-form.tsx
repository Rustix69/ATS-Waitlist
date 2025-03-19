"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"
import { supabase } from "@/utils/supabase"

export default function SubscriptionForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  
  // Ensure component is mounted before rendering interactive elements
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      // Insert the email into the Registration table - client-side only
      if (typeof window !== 'undefined') {
        const { data, error: supabaseError } = await supabase
          .from('Registration')
          .insert([
            { 
              email: email, 
              timestamp: new Date().toISOString(), 
              source: 'inline_form' 
            },
          ])
          .select()

        if (supabaseError) {
          console.error("Error inserting email:", supabaseError)
          throw supabaseError
        }
      }

      setIsSubmitted(true)
      setEmail("")
    } catch (err) {
      console.error("Submission error:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Return skeleton UI during server rendering
  if (!isMounted) {
    return (
      <div className="space-y-4">
        <div className="h-12 rounded-md bg-muted/30"></div>
        <div className="h-12 rounded-md bg-muted/50"></div>
        <div className="h-4 w-3/4 rounded-md bg-muted/20"></div>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border bg-background p-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">You're on the list!</h3>
        <p className="text-muted-foreground">Thank you for joining our waitlist. We'll notify you when we launch.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12"
          required
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
      <Button type="submit" className="w-full h-12" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Join Waitlist"}
      </Button>
      <p className="text-xs text-muted-foreground">We respect your privacy and will never share your information.</p>
    </form>
  )
}

