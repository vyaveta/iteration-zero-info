import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const Faqs = () => {
    return (
        <section className="w-full py-12 md:py-24 relative companies">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground">
                        Find answers to common questions about our platform
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}


export const faqs = [
    {
      question: "What makes Iteration Zero unique as a career development tool?",
      answer:
        "Iteration Zero stands out by offering personalized learning paths, hands-on projects, and 24/7 mentorship support. Our AI-powered platform adapts to your skill level and learning style, while providing real-world projects to build your portfolio. We focus on both technical skills and career development to ensure your success.",
    },
    {
      question: "How does Iteration create tailored content?",
      answer:
        "Iteration Zero learns about your industry, experience, and skills during onboarding. It then uses this information to generate customized learning paths, project recommendations, and practice materials. The content is specifically aligned with your professional background and learning goals, making it highly relevant and effective for your development.",
    },
    {
      question: "How accurate and up-to-date are Iteration's industry insights?", 
      answer:
        "We update our industry insights weekly using advanced AI analysis of current market trends. This includes salary data, in-demand skills, and industry growth patterns. Our system constantly evolves to ensure you have the most relevant information for your career decisions.",
    },
    {
      question: "Is my data secure with Iteration?",
      answer:
        "Absolutely. We prioritize the security of your professional information. All data is encrypted and securely stored using industry-standard practices and never share your personal information with third parties.",
    },
    {
      question: "How can I track my interview preparation progress?",
      answer:
        "Iteration Zero provides a comprehensive dashboard to track your learning progress across multiple topics and projects. You can view detailed analytics on completed modules, skill assessments, and practice exercises. Our AI system provides personalized feedback and suggestions to help you improve in specific areas.",
    },
    {
      question: "Can I edit the AI-generated content?",
      answer:
        "Yes! While Iteration Zero generates high-quality initial content and learning materials, you have full control to customize your learning path and project implementations. Our platform makes it easy to adapt the content and exercises to match your preferred learning style and pace.",
    },
  ];

export default Faqs