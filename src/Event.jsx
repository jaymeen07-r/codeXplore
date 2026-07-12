import React from "react";

export default function Event() {
    const events = [
        {
            title: "Web Development Workshop",
            subtitle: "Hands-on introduction to modern frontend development."
        },
        {
            title: "Hackathon Sprint",
            subtitle: "Collaborative problem-solving and rapid prototyping."
        },
        {
            title: "Open Source Session",
            subtitle: "Learn contribution workflows and GitHub collaboration."
        },
        {
            title: "AI & ML Fundamentals",
            subtitle: "Explore machine learning concepts and practical use cases."
        },
        {
            title: "Technical Interview Prep",
            subtitle: "Practice coding challenges and interview strategies."
        },
        {
            title: "Flutter Bootcamp",
            subtitle: "Build cross-platform applications from scratch."
        }
    ];

    return (
        <section className="event">

            <div className="event-header">
                <span>EVENTS & ACTIVITIES</span>

                <h1>
                    Learn, collaborate, and grow through
                    workshops, hackathons, and community events.
                </h1>

                <p>
                    Explore opportunities to gain practical experience,
                    connect with peers, and develop valuable technical skills.
                </p>
            </div>

            <div className="event-scroll">

                {events.map((event, index) => (
                    <div className="event-card" key={index}>
                        <div className="event-card-number">
                            {String(index + 1).padStart(2, "0")}
                        </div>

                        <h2>{event.title}</h2>

                        <p>{event.subtitle}</p>
                    </div>
                ))}

            </div>

        </section>
    );
}