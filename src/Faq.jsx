import React, { useState } from "react";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Who can join CODEXPLORE?",
            answer:
                "Any student interested in technology, programming, innovation, and collaborative learning can become a member of CODEXPLORE."
        },
        {
            question: "Do I need prior coding experience?",
            answer:
                "No. Students from all skill levels are welcome. The club encourages learning, mentorship, and practical skill development."
        },
        {
            question: "What activities does the club organize?",
            answer:
                "CODEXPLORE organizes workshops, hackathons, technical sessions, project showcases, coding challenges, and community events."
        },
        {
            question: "How can I participate in projects?",
            answer:
                "Members can join ongoing projects, collaborate with teams, contribute ideas, and gain hands-on development experience."
        },
        {
            question: "Is there any membership fee?",
            answer:
                "Membership policies may vary by academic year. Contact the club coordinators for the latest information."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq">
            <div className="faq-header">
                <span>FREQUENTLY ASKED QUESTIONS</span>

                <h1>
                    Everything you need to know about CODEXPLORE
                </h1>

                <p>
                    Find answers to common questions about membership,
                    activities, projects, and opportunities within the club.
                </p>
            </div>

            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div
                            className="faq-question"
                        >
                            <h3>{faq.question}</h3>
                            <span>
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </div>

                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}