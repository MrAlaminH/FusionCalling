"use client";

import Cal from "@calcom/embed-react";
import { useEffect, useState } from "react";

interface CalendarProps {
  calUsername: string;
  eventSlug: string;
}

const Calendar = ({ calUsername, eventSlug }: CalendarProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check initially
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <h2>Schedule a Discovery Call</h2>
        <p>
          Book a convenient time slot for us to discuss your needs and how we
          can help you succeed.
        </p>
      </div>
      <div className="calendar-container">
        <Cal
          calLink={`${calUsername}/${eventSlug}`}
          style={{
            width: "100%",
            height: "100%",
            minHeight: isMobile ? "600px" : "450px",
            borderRadius: "16px",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
          }}
          config={{
            theme: "dark",
            layout: "month_view",
            hideEventTypeDetails: "true",
            layout_mobile: "month_view",
            hideRangeSelection: "true",
            hideTimeZoneSwitcher: "true",
          }}
        />
      </div>
      <style jsx>{`
        .calendar-wrapper {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
          background: #000000;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow-x: hidden;
        }
        .calendar-header {
          text-align: center;
          margin-bottom: 2.5rem;
          padding: 0 1rem;
        }
        .calendar-header h2 {
          font-size: 2.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
          letter-spacing: -0.025em;
        }
        .calendar-header p {
          font-size: 1.25rem;
          color: #9ca3af;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .calendar-container {
          background: #1a1a1a;
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
          width: 100%;
          height: auto;
          min-height: 600px;
          position: relative;
          overflow: visible;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 1rem;
          -webkit-overflow-scrolling: touch;
        }

        /* Large desktop screens */
        @media (min-width: 1440px) {
          .calendar-wrapper {
            padding: 3rem;
            padding-bottom: 1rem;
          }
          .calendar-container {
            min-height: 650px;
          }
          .calendar-header h2 {
            font-size: 3rem;
          }
        }

        /* Tablets and smaller desktops */
        @media (max-width: 1024px) {
          .calendar-wrapper {
            padding: 2rem;
            padding-bottom: 1rem;
          }
          .calendar-container {
            min-height: 580px;
          }
          .calendar-header h2 {
            font-size: 2.25rem;
          }
        }

        /* Tablets */
        @media (max-width: 768px) {
          .calendar-wrapper {
            padding: 1.5rem;
            padding-bottom: 0.5rem;
          }
          .calendar-container {
            min-height: 550px;
            padding: 1rem;
            overflow: visible;
          }
          .calendar-header h2 {
            font-size: 2rem;
          }
          .calendar-header p {
            font-size: 1.125rem;
          }
        }

        /* Mobile phones */
        @media (max-width: 480px) {
          .calendar-wrapper {
            padding: 1rem;
            padding-bottom: 0;
            overflow-x: hidden;
            overflow-y: visible;
          }
          .calendar-container {
            padding: 0.75rem;
            min-height: 500px;
            margin-bottom: 0;
            overflow: visible;
            height: auto;
          }
          .calendar-header {
            margin-bottom: 1.5rem;
          }
          .calendar-header h2 {
            font-size: 1.75rem;
          }
          .calendar-header p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Calendar;
