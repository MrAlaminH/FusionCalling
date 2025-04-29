"use client";
import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

const ChatWidget = () => {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://n8n.deployify.xyz/webhook/beb4b78f-1ffd-4411-b489-3ff9989b7169/chat", // Replace with your actual webhook URL
      mode: "window", // Options: 'window' or 'fullscreen'
      showWelcomeScreen: false, // Disable welcome screen to directly open chat
      initialMessages: ["Hi there! 👋", "How can I assist you today?"],
      i18n: {
        en: {
          title: "Welcome to Fusion Calling!",
          subtitle: "How can we assist you today?",
          footer: "Powered by Fusion Calling", // Add footer text back
          getStarted: "Start a New Conversation",
          inputPlaceholder: "Type your message here...",
          closeButtonTooltip: "Close Chat",
        },
      },
    });
  }, []);

  return <div id="n8n-chat"></div>;
};

export default ChatWidget;
