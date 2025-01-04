"use client"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

interface QnAItem {
    question: string
    answer: string
}

const qnaData: QnAItem[] = [
    {
        question: "What equipment do you use for your photography?",
        answer: "We use a variety of professional-grade cameras and lenses, including Canon and Sony systems. Our specific equipment choices depend on the type of shoot and the desired outcome."
    },
    {
        question: "How long does a typical photo shoot last?",
        answer: "The duration of a photo shoot can vary greatly depending on the type of session. A standard portrait session might last 1-2 hours, while a full-day event could be 8-12 hours. We always discuss timing in detail during the planning phase."
    },
    {
        question: "Do you offer photo editing services?",
        answer: "Yes, we provide professional photo editing services. This includes color correction, retouching, and artistic enhancements. The level of editing is discussed and agreed upon with each client based on their preferences."
    },
    {
        question: "Can I purchase prints or digital files of the photos?",
        answer: "We offer both high-quality prints and digital files of your photos. The specific offerings and pricing are outlined in our service packages, which we'd be happy to discuss with you."
    }
]

export function Qna() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-24 bg-white dark:bg-zinc-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-sm uppercase tracking-wider text-gray-700 dark:text-gray-300">FAQ</h2>
                    <h3 className="text-3xl font-light mt-4 text-gray-900 dark:text-gray-100">
                        Frequently <span className="text-gray-500 dark:text-gray-400">Asked</span> Questions
                    </h3>
                </div>
                <div className="space-y-6">
                    {qnaData.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-700 pb-6 dark:border-gray-500"
                        >
                            <Button
                                variant="default"
                                className="w-full justify-between text-left font-normal text-gray-900 dark:text-gray-100  focus:ring-2 focus:ring-indigo-500"
                                onClick={() => toggleQuestion(index)}
                            >
                                <span>{item.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-4 w-4 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                                ) : (
                                    <ChevronDown className="h-4 w-4 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                                )}
                            </Button>
                            {openIndex === index && (
                                <p className="mt-4 text-gray-500 dark:text-gray-400">{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
