"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formData = new FormData(event.currentTarget)

      // Submit directly to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        ;(event.target as HTMLFormElement).reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send us a Message</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {submitStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}

        <form name="contact" onSubmit={handleSubmit} className="space-y-4">
          {/* Web3Forms Access Key - replace with your actual key */}
          <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ''} />

          {/* Web3Forms Configuration */}
          <input type="hidden" name="from_name" value="OUR Website Contact Form" />

          {/* Honeypot for spam protection */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oxford-blue focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oxford-blue focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oxford-blue focus:border-transparent"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oxford-blue focus:border-transparent"
              placeholder="Enter your subject"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oxford-blue focus:border-transparent"
              placeholder="Tell us more about your inquiry..."
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </CardContent>
    </Card>
  )
}