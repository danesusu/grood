"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"

export function PreOrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Pre-order submitted!",
        description: "We'll contact you soon with more details.",
      })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="Enter your full name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="Enter your phone number" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="model">Bike Model</Label>
        <Select required>
          <SelectTrigger id="model">
            <SelectValue placeholder="Select a model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="city">Grood City</SelectItem>
            <SelectItem value="commuter">Grood Commuter</SelectItem>
            <SelectItem value="explorer">Grood Explorer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="color">Color Preference</Label>
        <Select>
          <SelectTrigger id="color">
            <SelectValue placeholder="Select a color" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="green">Forest Green</SelectItem>
            <SelectItem value="black">Matte Black</SelectItem>
            <SelectItem value="blue">Ocean Blue</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" required />
        <Label htmlFor="terms" className="text-sm">
          I agree to the terms and conditions
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-amber-400 hover:bg-amber-500 text-black font-medium"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Submit Pre-Order"}
      </Button>
    </form>
  )
}
