'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What if I don&apos;t have any experience running a business or signing clients?",
    answer: "You don&apos;t need prior experience. Our program is designed to teach you step-by-step how to start & scale an agency, even if you&apos;re starting from scratch. We provide the tools, strategies, & support to make success the path of least resistance."
  },
  {
    question: "How much time will this require? I&apos;m already busy with work & other commitments.",
    answer: "The program is designed with busy individuals in mind. You&apos;ll learn how to maximize efficiency & energy, focus on 80/20 activities, & leverage systems to build a business that runs on autopilot."
  },
  {
    question: "What if I&apos;m not good at sales or I&apos;m afraid of rejection?",
    answer: "Sales is a skill anyone can learn. We provide proven scripts, training, & guidance to help you confidently close deals, even if you&apos;re a complete beginner. Rejection is just part of the process, & we&apos;ll show you how to handle it like a ninja."
  },
  {
    question: "I&apos;m not sure I can afford to invest in this right now.",
    answer: "Building your own business is one of the best investments you can make in your future. Our program is designed to help you quickly land high-ticket clients so you can generate a return on your investment faster than you might think. If you&apos;re not winning, we&apos;re not winning."
  },
  {
    question: "I don&apos;t think I can keep up with the health side of things — what if I fail?",
    answer: "The health strategies we teach are simple, sustainable, & designed for entrepreneurs with a busy schedule. You&apos;ll learn how to implement small, consistent changes that create massive improvements in your energy, focus, & overall well-being, ensuring you make money forever, not just for two years."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-greek-gold/30 to-transparent"></div>
            <span className="text-sm font-serif tracking-wide text-greek-marble/80 uppercase">FAQ</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-greek-gold/30 to-transparent"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl">
            Got Questions?{' '}
            <span className="text-greek-gold">We&apos;ve Got Answers.</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-greek-gold/10 last:border-b-0"
            >
              <button
                className="w-full py-6 flex items-start justify-between gap-4 text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-serif text-lg md:text-xl group-hover:text-greek-gold transition-colors duration-300">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 mt-1">
                  <svg
                    className={`w-5 h-5 text-greek-gold transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-greek-marble/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 