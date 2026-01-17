"use client";

import Cal from "@calcom/embed-react";
import { useEffect, useState } from "react";

interface CalendarProps {
  calUsername: string;
  eventSlug: string;
  showHeader?: boolean;
}

const Calendar = ({ calUsername, eventSlug, showHeader = true }: CalendarProps) => {
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
      {showHeader && (
        <div className="calendar-header">
          <h2>Schedule a Discovery Call</h2>
          <p>
            Book a convenient time slot for us to discuss your needs and how we
            can help you succeed.
          </p>
        </div>
      )}
      <div className="calendar-container">
        <Cal
          calLink={`${calUsername}/${eventSlug}`}
          style={{
            width: "100%",
            height: "100%",
            minHeight: isMobile ? "550px" : "500px",
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
          padding: 0;
          background: #000000;
          display: flex;
          flex-direction: column;
          align-items: center;
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
          position: relative;
          overflow: visible;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 1rem;
          -webkit-overflow-scrolling: touch;
        }

        /* Extra large desktop screens (4K, ultrawide) */
        @media (min-width: 1536px) {
          .calendar-wrapper {
            max-width: 1100px;
          }
          .calendar-container {
            min-height: 520px;
          }
          .calendar-header h2 {
            font-size: 3rem;
          }
        }

        /* Large desktop screens (1440px - MacBooks, larger monitors) */
        @media (min-width: 1280px) and (max-width: 1535px) {
          .calendar-wrapper {
            padding: 2rem 0;
          }
          .calendar-container {
            min-height: 500px;
          }
          .calendar-header h2 {
            font-size: 2.75rem;
          }
        }

        /* Standard desktops (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .calendar-wrapper {
            padding: 1.5rem 0;
          }
          .calendar-container {
            min-height: 500px;
          }
          .calendar-header h2 {
            font-size: 2.5rem;
          }
        }

        /* Large tablets / small laptops (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .calendar-wrapper {
            max-width: 900px;
            padding: 1.5rem 0;
          }
          .calendar-container {
            min-height: 480px;
            padding: 1.25rem;
          }
          .calendar-header h2 {
            font-size: 2.25rem;
          }
          .calendar-header p {
            font-size: 1.125rem;
          }
        }

        /* Tablets (480px - 767px) */
        @media (min-width: 480px) and (max-width: 767px) {
          .calendar-wrapper {
            max-width: 700px;
            padding: 1rem 0;
          }
          .calendar-container {
            min-height: 450px;
            padding: 1rem;
          }
          .calendar-header h2 {
            font-size: 2rem;
          }
          .calendar-header p {
            font-size: 1rem;
          }
        }

        /* Mobile phones (max 479px) */
        @media (max-width: 479px) {
          .calendar-wrapper {
            max-width: 100%;
            padding: 0.5rem 0;
            overflow-x: hidden;
            overflow-y: visible;
          }
          .calendar-container {
            padding: 0.75rem;
            min-height: 420px;
            margin-bottom: 0;
            overflow: visible;
            height: auto;
          }
          .calendar-header {
            margin-bottom: 1.5rem;
            padding: 0 0.75rem;
          }
          .calendar-header h2 {
            font-size: 1.75rem;
            line-height: 1.2;
          }
          .calendar-header p {
            font-size: 0.9375rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Calendar;
