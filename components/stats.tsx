"use client";

import { useEffect, useRef, useState } from "react";

const AnimatedStatistics = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    satisfaction: 0,
    hours: 0,
    calls: 0,
  });

  const targets = useRef({
    projects: 100,
    satisfaction: 100,
    hours: 30,
    calls: 18,
  });

  const sectionRef = useRef<HTMLElement>(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationTriggered.current) {
          animationTriggered.current = true;
          startAnimation();
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const startAnimation = () => {
    const duration = 2000;
    const start = performance.now();

    const animate = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        projects: Math.floor(targets.current.projects * progress),
        satisfaction: Math.floor(targets.current.satisfaction * progress),
        hours: Math.floor(targets.current.hours * progress),
        calls: Math.floor(targets.current.calls * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const statItems = [
    {
      title: "Projects Completed",
      value: `${counters.projects}+`,
      description:
        "Transforming businesses through flawless communication solutions.",
    },
    {
      title: "Client Satisfaction",
      value: `${counters.satisfaction}%`,
      description: "Delivering excellence that keeps our clients coming back.",
    },
    {
      title: "Time Saved Monthly",
      value: `${counters.hours}h`,
      description: "Empowering businesses to focus on what truly matters.",
    },
    {
      title: "Calls Managed",
      value: `${counters.calls}k`,
      description: "Every call is an opportunity we never miss to impress.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white flex flex-col items-center py-12"
    >
      <h1 className="text-orange-600 text-3xl md:text-4xl font-bold text-center mb-12">
        Our Statistics
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl px-4">
        {statItems.map((item, index) => (
          <div
            key={index}
            className="bg-black/40 border-2 border-orange-500/20 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600 hover:-translate-y-1 min-h-[200px]"
          >
            <h2 className="text-lg md:text-xl font-medium mb-3">
              {item.title}
            </h2>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 mb-4">
              {item.value}
            </p>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedStatistics;
