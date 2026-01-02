import { useState } from "react";

const faqs = [
  {
    question: "How do I join a challenge?",
    answer:
      "Login, go to the challenge detail page, and click 'Join Challenge'.",
  },
  {
    question: "Can I track my progress?",
    answer:
      "Yes, all joined challenges appear in 'My Activities' with progress updates.",
  },
  {
    question: "How is my environmental impact calculated?",
    answer:
      "Each challenge tracks measurable metrics like CO₂ saved or plastic reduced.",
  },
  {
    question: "Can I submit tips to the community?",
    answer:
      "Yes, go to 'Add Tip', write your tip, and share it with the community.",
  },
  {
    question: "Are there rewards for completing challenges?",
    answer: "Optional badges or recognition are available for active users.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      className="  p-6"
      style={{
        background:
          "linear-gradient(to bottom right, #d1fae5, #a7f3d0, #bbf7d0)",
      }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-md p-4 cursor-pointer bg-white/70 backdrop-blur-sm"
          >
            <h3
              className="font-semibold text-lg flex justify-between items-center"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </h3>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
