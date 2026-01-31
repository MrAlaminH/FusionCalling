"use client";

import { useState } from "react";
import {
  AlertCircle,
  RefreshCw,
  XCircle,
  CheckCircle2,
  HelpCircle,
  Phone,
  User,
  Key,
  Server,
  Wifi,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ErrorCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  type?: "permanent" | "temporary";
}

function ErrorCard({ title, icon, children, type }: ErrorCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`p-2 rounded-lg ${type === "permanent" ? "bg-red-900/30" : type === "temporary" ? "bg-yellow-900/30" : "bg-gray-800"}`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {type && (
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              type === "permanent"
                ? "bg-red-900/30 text-red-400 border border-red-700/50"
                : "bg-yellow-900/30 text-yellow-400 border border-yellow-700/50"
            }`}
          >
            {type === "permanent" ? "❌ Permanent" : "⏳ Temporary"}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-900 hover:bg-gray-800 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-orange-400 shrink-0" />
          <span className="font-semibold text-white">{question}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-950 border-t border-gray-800">
          <div className="text-gray-300 pl-8">{answer}</div>
        </div>
      )}
    </div>
  );
}

export function ErrorClassificationSection() {
  return (
    <section id="error-classification" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Error Classification Guide
      </h2>

      {/* Overview */}
      <div className="bg-gradient-to-r from-orange-900/20 to-purple-900/20 border border-orange-500/30 rounded-xl p-6 mb-10">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-orange-600/20 rounded-lg shrink-0">
            <AlertCircle className="w-8 h-8 text-orange-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              What is Error Classification?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              When your system makes phone calls through Vapi or Retell,
              sometimes things go wrong. The Error Classifier automatically
              analyzes these errors and decides whether to mark the lead as
              failed (permanent problem) or retry the call later (temporary
              problem). This helps you avoid wasting time on phone numbers that
              will never work, while still retrying calls that failed due to
              temporary issues like network problems.
            </p>
          </div>
        </div>
      </div>

      {/* Error Types Overview */}
      <h3 className="text-2xl font-semibold mb-6 text-white">
        Understanding Error Types
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Permanent Errors */}
        <div className="bg-red-900/10 border border-red-700/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <XCircle className="w-8 h-8 text-red-400" />
            <h4 className="text-xl font-semibold text-white">
              Permanent Errors
            </h4>
            <span className="text-xs px-2 py-1 rounded-full bg-red-900/30 text-red-400 border border-red-700/50">
              ❌ Stop Trying
            </span>
          </div>
          <p className="text-gray-300 mb-4">
            These errors mean something is fundamentally wrong and won&apos;t
            fix itself. The system marks the lead as &quot;failed&quot; so you
            can focus on other leads.
          </p>
          <div className="space-y-3">
            <div className="bg-red-950/50 rounded-lg p-3">
              <p className="text-red-400 font-semibold text-sm mb-2">
                What happens:
              </p>
              <ul className="text-gray-300 text-sm space-y-1 ml-4">
                <li>• Lead status changes to &quot;failed&quot;</li>
                <li>• No more automatic retries</li>
                <li>
                  • You&apos;ll see the specific reason in the error message
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-3">
              <p className="text-orange-400 font-semibold text-sm mb-2">
                Common causes:
              </p>
              <ul className="text-gray-300 text-sm space-y-1 ml-4">
                <li>• Invalid phone number format</li>
                <li>• Phone number doesn&apos;t exist</li>
                <li>• API key is invalid or missing</li>
                <li>• Agent/assistant not configured properly</li>
                <li>• Phone number not registered in your account</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Temporary Errors */}
        <div className="bg-yellow-900/10 border border-yellow-700/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="w-8 h-8 text-yellow-400" />
            <h4 className="text-xl font-semibold text-white">
              Temporary Errors
            </h4>
            <span className="text-xs px-2 py-1 rounded-full bg-yellow-900/30 text-yellow-400 border border-yellow-700/50">
              ⏳ Will Retry
            </span>
          </div>
          <p className="text-gray-300 mb-4">
            These errors are short-term problems that might resolve themselves.
            The system will automatically retry the call later.
          </p>
          <div className="space-y-3">
            <div className="bg-yellow-950/50 rounded-lg p-3">
              <p className="text-yellow-400 font-semibold text-sm mb-2">
                What happens:
              </p>
              <ul className="text-gray-300 text-sm space-y-1 ml-4">
                <li>• Lead stays in the queue</li>
                <li>• System retries automatically (with increasing delays)</li>
                <li>• No manual intervention needed</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-3">
              <p className="text-orange-400 font-semibold text-sm mb-2">
                Common causes:
              </p>
              <ul className="text-gray-300 text-sm space-y-1 ml-4">
                <li>• Rate limiting (too many calls too quickly)</li>
                <li>• Server errors on the provider&apos;s side</li>
                <li>• Network or connection issues</li>
                <li>• Unknown errors (defaults to temporary for safety)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Vapi Provider Errors */}
      <h3 className="text-2xl font-semibold mb-6 text-white">
        Vapi Provider Errors
      </h3>

      <div className="space-y-6 mb-10">
        {/* Phone Number Errors */}
        <ErrorCard
          title="Phone Number Errors"
          icon={<Phone className="w-5 h-5 text-blue-400" />}
        >
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-white mb-2">
                &quot;Invalid lead phone number format&quot;
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-red-400 font-medium">What it means:</span>{" "}
                The phone number you&apos;re trying to call isn&apos;t formatted
                correctly.
              </p>
              <div className="bg-gray-950 rounded p-3 mb-2">
                <p className="text-orange-400 font-semibold text-sm mb-1">
                  Common causes:
                </p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>
                    • Missing country code (e.g., using{" "}
                    <code className="text-gray-300">5551234567</code> instead of{" "}
                    <code className="text-green-400">+15551234567</code>)
                  </li>
                  <li>
                    • Using incorrect format (must be E.164 format:{" "}
                    <code className="text-green-400">
                      +[country code][number]
                    </code>
                    )
                  </li>
                  <li>
                    • Contains invalid characters (spaces, dashes, parentheses
                    in wrong places)
                  </li>
                </ul>
              </div>
              <div className="bg-green-950/30 rounded p-3">
                <p className="text-green-400 font-semibold text-sm mb-1">
                  How to fix:
                </p>
                <ol className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>
                    1. Check the phone number format in your CSV or lead data
                  </li>
                  <li>
                    2. Ensure it starts with{" "}
                    <code className="text-green-400">+</code> followed by
                    country code and number
                  </li>
                  <li>3. Remove any spaces, dashes, or special characters</li>
                  <li>
                    4. Example:{" "}
                    <code className="text-green-400">+14155551234</code>{" "}
                    (correct) vs{" "}
                    <code className="text-red-400">415-555-1234</code>{" "}
                    (incorrect)
                  </li>
                </ol>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-white mb-2">
                &quot;Phone number not registered in account&quot;
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-red-400 font-medium">What it means:</span>{" "}
                The phone number you&apos;re trying to use as the caller (your
                agent&apos;s number) isn&apos;t set up in your Vapi account.
              </p>
              <div className="bg-green-950/30 rounded p-3">
                <p className="text-green-400 font-semibold text-sm mb-1">
                  How to fix:
                </p>
                <ol className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>1. Go to your Vapi dashboard</li>
                  <li>2. Buy or register a phone number</li>
                  <li>
                    3. Update your agent configuration with the correct phone
                    number ID
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </ErrorCard>

        {/* Agent Configuration Errors */}
        <ErrorCard
          title="Agent Configuration Errors"
          icon={<User className="w-5 h-5 text-purple-400" />}
        >
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-white mb-2">
                &quot;Agent phone number configuration error&quot;
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-red-400 font-medium">What it means:</span>{" "}
                Your agent isn&apos;t properly configured with a phone number to
                call from.
              </p>
              <div className="bg-green-950/30 rounded p-3">
                <p className="text-green-400 font-semibold text-sm mb-1">
                  How to fix:
                </p>
                <ol className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>1. Check your agent settings in Vapi dashboard</li>
                  <li>2. Ensure a phone number is assigned to the agent</li>
                  <li>
                    3. Verify the phone number ID is correct in your
                    configuration
                  </li>
                </ol>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-white mb-2">
                &quot;Agent or assistant configuration not found&quot;
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-red-400 font-medium">What it means:</span>{" "}
                The agent or assistant ID you&apos;re using doesn&apos;t exist
                in your Vapi account.
              </p>
              <div className="bg-green-950/30 rounded p-3">
                <p className="text-green-400 font-semibold text-sm mb-1">
                  How to fix:
                </p>
                <ol className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>1. Verify the agent ID in your system settings</li>
                  <li>2. Check that the agent exists in your Vapi dashboard</li>
                  <li>3. Update the configuration with the correct agent ID</li>
                </ol>
              </div>
            </div>
          </div>
        </ErrorCard>

        {/* API Key Errors */}
        <ErrorCard
          title="API Key Errors"
          icon={<Key className="w-5 h-5 text-yellow-400" />}
          type="permanent"
        >
          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold text-white mb-2">
              &quot;API key is invalid or missing&quot;
            </h4>
            <p className="text-gray-300 text-sm mb-2">
              <span className="text-red-400 font-medium">What it means:</span>{" "}
              Your Vapi API key isn&apos;t working or isn&apos;t configured.
            </p>
            <div className="bg-green-950/30 rounded p-3">
              <p className="text-green-400 font-semibold text-sm mb-1">
                How to fix:
              </p>
              <ol className="text-gray-300 text-sm space-y-1 ml-4">
                <li>
                  1. Check your environment variables (
                  <code className="text-orange-400">VAPI_API_KEY</code>)
                </li>
                <li>2. Generate a new API key from Vapi dashboard if needed</li>
                <li>3. Ensure the API key has proper permissions</li>
                <li>4. Restart your application after updating the key</li>
              </ol>
            </div>
          </div>
        </ErrorCard>

        {/* Network & Server Errors */}
        <ErrorCard
          title="Network & Server Errors"
          icon={<Server className="w-5 h-5 text-cyan-400" />}
        >
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-white mb-2">
                &quot;Rate limit exceeded&quot;
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-yellow-400 font-medium">
                  What it means:
                </span>{" "}
                You&apos;ve made too many calls in a short time. Vapi has limits
                on how many calls you can initiate per minute/hour.
              </p>
              <div className="bg-yellow-950/30 rounded p-3 mb-2">
                <p className="text-yellow-400 font-semibold text-sm mb-1">
                  What happens:
                </p>
                <p className="text-gray-300 text-sm">
                  Temporary error - system will retry automatically
                </p>
              </div>
              <div className="bg-gray-950 rounded p-3">
                <p className="text-orange-400 font-semibold text-sm mb-1">
                  How to handle:
                </p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>
                    • Wait for the system to retry (it uses exponential backoff)
                  </li>
                  <li>• Consider upgrading your Vapi plan for higher limits</li>
                  <li>• Spread out your call initiation times</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-white mb-2">
                &quot;Server error&quot; (5xx codes)
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-yellow-400 font-medium">
                  What it means:
                </span>{" "}
                Vapi&apos;s servers are having issues.
              </p>
              <div className="bg-yellow-950/30 rounded p-3 mb-2">
                <p className="text-yellow-400 font-semibold text-sm mb-1">
                  What happens:
                </p>
                <p className="text-gray-300 text-sm">
                  Temporary error - system will retry automatically
                </p>
              </div>
              <div className="bg-gray-950 rounded p-3">
                <p className="text-orange-400 font-semibold text-sm mb-1">
                  How to handle:
                </p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• System will retry automatically</li>
                  <li>• Check Vapi status page if issues persist</li>
                  <li>• No action needed on your part</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-white mb-2">
                &quot;Network or connection error&quot;
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-yellow-400 font-medium">
                  What it means:
                </span>{" "}
                Your server couldn&apos;t reach Vapi&apos;s servers.
              </p>
              <div className="bg-yellow-950/30 rounded p-3 mb-2">
                <p className="text-yellow-400 font-semibold text-sm mb-1">
                  What happens:
                </p>
                <p className="text-gray-300 text-sm">
                  Temporary error - system will retry automatically
                </p>
              </div>
              <div className="bg-gray-950 rounded p-3">
                <p className="text-orange-400 font-semibold text-sm mb-1">
                  How to handle:
                </p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• Check your internet connection</li>
                  <li>• System will retry automatically</li>
                  <li>• No action needed on your part</li>
                </ul>
              </div>
            </div>
          </div>
        </ErrorCard>
      </div>

      {/* Retell Provider Errors */}
      <h3 className="text-2xl font-semibold mb-6 text-white">
        Retell Provider Errors
      </h3>

      <div className="space-y-6 mb-10">
        {/* Phone Number Errors */}
        <ErrorCard
          title="Phone Number Errors"
          icon={<Phone className="w-5 h-5 text-blue-400" />}
        >
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-white mb-2">
                &quot;Invalid phone number format&quot;
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-red-400 font-medium">What it means:</span>{" "}
                The phone number doesn&apos;t meet Retell&apos;s requirements.
              </p>
              <div className="bg-gray-950 rounded p-3 mb-2">
                <p className="text-orange-400 font-semibold text-sm mb-1">
                  Common causes:
                </p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• Not in E.164 format</li>
                  <li>• Missing country code</li>
                  <li>• Invalid characters</li>
                </ul>
              </div>
              <div className="bg-green-950/30 rounded p-3">
                <p className="text-green-400 font-semibold text-sm mb-1">
                  How to fix:
                </p>
                <ol className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>
                    1. Format:{" "}
                    <code className="text-green-400">
                      +[country code][number]
                    </code>{" "}
                    (e.g., <code className="text-green-400">+14155551234</code>)
                  </li>
                  <li>2. No spaces, dashes, or parentheses</li>
                  <li>
                    3. Must start with <code className="text-green-400">+</code>
                  </li>
                </ol>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-white mb-2">
                &quot;Phone number not found&quot; or &quot;not a valid
                number&quot;
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-red-400 font-medium">What it means:</span>{" "}
                The phone number doesn&apos;t exist or isn&apos;t a real phone
                number.
              </p>
              <div className="bg-green-950/30 rounded p-3">
                <p className="text-green-400 font-semibold text-sm mb-1">
                  How to fix:
                </p>
                <ol className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>1. Verify the phone number is correct</li>
                  <li>2. Check if the number has been disconnected</li>
                  <li>3. Contact the lead to get a different number</li>
                </ol>
              </div>
            </div>
          </div>
        </ErrorCard>

        {/* Agent Configuration Errors */}
        <ErrorCard
          title="Agent Configuration Errors"
          icon={<User className="w-5 h-5 text-purple-400" />}
        >
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-white mb-2">
                &quot;Agent phone number configuration error&quot;
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-red-400 font-medium">What it means:</span>{" "}
                Your Retell agent doesn&apos;t have a phone number configured to
                call from.
              </p>
              <div className="bg-green-950/30 rounded p-3">
                <p className="text-green-400 font-semibold text-sm mb-1">
                  How to fix:
                </p>
                <ol className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>1. Go to Retell dashboard</li>
                  <li>2. Configure your agent with a phone number</li>
                  <li>3. Save the agent settings</li>
                </ol>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-white mb-2">
                &quot;Agent or assistant not found&quot;
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-red-400 font-medium">What it means:</span>{" "}
                The agent ID in your configuration doesn&apos;t exist in Retell.
              </p>
              <div className="bg-green-950/30 rounded p-3">
                <p className="text-green-400 font-semibold text-sm mb-1">
                  How to fix:
                </p>
                <ol className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>1. Verify the agent ID in your settings</li>
                  <li>2. Check Retell dashboard for the correct agent ID</li>
                  <li>3. Update your configuration</li>
                </ol>
              </div>
            </div>
          </div>
        </ErrorCard>

        {/* API Key Errors */}
        <ErrorCard
          title="API Key Errors"
          icon={<Key className="w-5 h-5 text-yellow-400" />}
          type="permanent"
        >
          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold text-white mb-2">
              &quot;API key is invalid or missing&quot;
            </h4>
            <p className="text-gray-300 text-sm mb-2">
              <span className="text-red-400 font-medium">What it means:</span>{" "}
              Your Retell API key isn&apos;t working.
            </p>
            <div className="bg-green-950/30 rounded p-3">
              <p className="text-green-400 font-semibold text-sm mb-1">
                How to fix:
              </p>
              <ol className="text-gray-300 text-sm space-y-1 ml-4">
                <li>
                  1. Check{" "}
                  <code className="text-orange-400">RETELL_API_KEY</code>{" "}
                  environment variable
                </li>
                <li>2. Get a new API key from Retell dashboard</li>
                <li>3. Ensure the key has necessary permissions</li>
                <li>4. Restart your application</li>
              </ol>
            </div>
          </div>
        </ErrorCard>

        {/* Network & Server Errors */}
        <ErrorCard
          title="Network & Server Errors"
          icon={<Wifi className="w-5 h-5 text-cyan-400" />}
        >
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-white mb-2">
                &quot;Rate limit exceeded&quot;
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-yellow-400 font-medium">
                  What it means:
                </span>{" "}
                You&apos;ve hit Retell&apos;s rate limits.
              </p>
              <div className="bg-yellow-950/30 rounded p-3 mb-2">
                <p className="text-yellow-400 font-semibold text-sm mb-1">
                  What happens:
                </p>
                <p className="text-gray-300 text-sm">
                  Temporary error - automatic retry
                </p>
              </div>
              <div className="bg-gray-950 rounded p-3">
                <p className="text-orange-400 font-semibold text-sm mb-1">
                  How to handle:
                </p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• System will retry with delays</li>
                  <li>• Consider upgrading your plan for higher limits</li>
                  <li>• Space out your call initiations</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-white mb-2">
                &quot;Server error&quot; (5xx codes)
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-yellow-400 font-medium">
                  What it means:
                </span>{" "}
                Retell is having server issues.
              </p>
              <div className="bg-yellow-950/30 rounded p-3 mb-2">
                <p className="text-yellow-400 font-semibold text-sm mb-1">
                  What happens:
                </p>
                <p className="text-gray-300 text-sm">
                  Temporary error - automatic retry
                </p>
              </div>
              <div className="bg-gray-950 rounded p-3">
                <p className="text-orange-400 font-semibold text-sm mb-1">
                  How to handle:
                </p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• System will retry automatically</li>
                  <li>• Check Retell status if issues continue</li>
                  <li>• No action needed</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-white mb-2">
                &quot;Network or connection error&quot;
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-yellow-400 font-medium">
                  What it means:
                </span>{" "}
                Can&apos;t reach Retell&apos;s servers.
              </p>
              <div className="bg-yellow-950/30 rounded p-3 mb-2">
                <p className="text-yellow-400 font-semibold text-sm mb-1">
                  What happens:
                </p>
                <p className="text-gray-300 text-sm">
                  Temporary error - automatic retry
                </p>
              </div>
              <div className="bg-gray-950 rounded p-3">
                <p className="text-orange-400 font-semibold text-sm mb-1">
                  How to handle:
                </p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• Check your internet connection</li>
                  <li>• System will retry automatically</li>
                  <li>• No action needed</li>
                </ul>
              </div>
            </div>
          </div>
        </ErrorCard>
      </div>

      {/* General Troubleshooting Steps */}
      <h3 className="text-2xl font-semibold mb-6 text-white">
        General Troubleshooting Steps
      </h3>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-orange-400">1</span>
            </div>
            <h4 className="font-semibold text-white mb-2">
              Identify the Error Type
            </h4>
            <p className="text-gray-400 text-sm">
              Check if it&apos;s <span className="text-red-400">permanent</span>{" "}
              (take action) or{" "}
              <span className="text-yellow-400">temporary</span> (auto-retry)
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-orange-400">2</span>
            </div>
            <h4 className="font-semibold text-white mb-2">
              Read the Specific Reason
            </h4>
            <p className="text-gray-400 text-sm">
              Each error includes a specific reason telling you exactly
              what&apos;s wrong
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-orange-400">3</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Follow the Fix</h4>
            <p className="text-gray-400 text-sm">
              Use the sections above to find the specific fix for your error
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-orange-400">4</span>
            </div>
            <h4 className="font-semibold text-white mb-2">
              Prevent Future Errors
            </h4>
            <p className="text-gray-400 text-sm">
              Follow best practices to avoid similar issues
            </p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-xl p-6 mb-10">
        <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-green-400" />
          Best Practices to Prevent Errors
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-orange-400 mb-2">
              1. Phone Number Format
            </h5>
            <ul className="text-gray-300 text-sm space-y-1 ml-4">
              <li>
                • Always use E.164 format:{" "}
                <code className="text-green-400">+14155551234</code>
              </li>
              <li>• Validate numbers before importing</li>
              <li>• Clean data before CSV import</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-orange-400 mb-2">2. API Keys</h5>
            <ul className="text-gray-300 text-sm space-y-1 ml-4">
              <li>• Store in environment variables</li>
              <li>• Rotate keys periodically</li>
              <li>• Use separate keys for development/production</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-orange-400 mb-2">
              3. Agent Configuration
            </h5>
            <ul className="text-gray-300 text-sm space-y-1 ml-4">
              <li>• Test agent setup before bulk calling</li>
              <li>• Verify phone numbers are registered</li>
              <li>• Keep agent IDs updated</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-orange-400 mb-2">
              4. Rate Limiting
            </h5>
            <ul className="text-gray-300 text-sm space-y-1 ml-4">
              <li>• Check provider rate limits</li>
              <li>• Space out call initiations</li>
              <li>• Monitor your usage</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <h3 className="text-2xl font-semibold mb-6 text-white">
        Frequently Asked Questions
      </h3>

      <div className="space-y-4 mb-10">
        <FAQItem
          question="Why did my lead get marked as failed?"
          answer={
            <>
              <p className="mb-2">
                Your lead was marked as failed because of a{" "}
                <strong>permanent error</strong>. This means the system detected
                a problem that won&apos;t fix itself, like:
              </p>
              <ul className="list-disc ml-4 space-y-1 mb-2">
                <li>Invalid phone number</li>
                <li>Missing agent configuration</li>
                <li>API key issues</li>
              </ul>
              <p>
                Check the error reason to see exactly what went wrong, then
                follow the fixing steps above.
              </p>
            </>
          }
        />

        <FAQItem
          question="How many times will the system retry temporary errors?"
          answer={
            <p>
              The system uses <strong>exponential backoff</strong>, meaning it
              waits longer between each retry. This prevents overwhelming the
              provider while giving issues time to resolve.
            </p>
          }
        />

        <FAQItem
          question="Can I manually retry a failed lead?"
          answer={
            <>
              <p className="mb-2">
                <strong>Yes!</strong> Once you&apos;ve fixed the issue (like
                correcting a phone number), you can:
              </p>
              <ol className="list-decimal ml-4 space-y-1">
                <li>Update the lead&apos;s information</li>
                <li>Manually trigger a call attempt</li>
                <li>The system will try again</li>
              </ol>
            </>
          }
        />

        <FAQItem
          question="What's the difference between Vapi and Retell errors?"
          answer={
            <>
              <p className="mb-2">Both providers have similar errors, but:</p>
              <ul className="list-disc ml-4 space-y-1 mb-2">
                <li>
                  <strong>Error messages</strong> might be worded differently
                </li>
                <li>
                  <strong>Rate limits</strong> are different
                </li>
                <li>
                  <strong>Configuration</strong> steps vary slightly
                </li>
              </ul>
              <p>
                However, the error classifier translates both into the same
                user-friendly messages, so you don&apos;t need to worry about
                which provider you&apos;re using.
              </p>
            </>
          }
        />

        <FAQItem
          question='I see "Unknown error - will retry" - what does that mean?'
          answer={
            <>
              <p className="mb-2">
                This means the system encountered an error it doesn&apos;t
                recognize. For safety, it treats it as{" "}
                <strong>temporary</strong> and will retry.
              </p>
              <p className="mb-2">If this keeps happening:</p>
              <ol className="list-decimal ml-4 space-y-1">
                <li>Check the original error details in logs</li>
                <li>Contact support if the issue persists</li>
                <li>
                  The error classifier might need updating to recognize this new
                  error type
                </li>
              </ol>
            </>
          }
        />

        <FAQItem
          question="How do I know if a phone number is in E.164 format?"
          answer={
            <>
              <p className="mb-2">E.164 format is:</p>
              <ul className="list-disc ml-4 space-y-1 mb-3">
                <li>
                  Starts with <code className="text-green-400">+</code>
                </li>
                <li>Followed by country code (1-3 digits)</li>
                <li>Followed by phone number</li>
                <li>No spaces, dashes, or other characters</li>
              </ul>
              <div className="bg-gray-900 rounded p-3">
                <p className="text-orange-400 font-semibold text-sm mb-2">
                  Examples:
                </p>
                <ul className="text-sm space-y-1">
                  <li>
                    <span className="text-green-400">✅ +14155551234</span>{" "}
                    (correct - US number)
                  </li>
                  <li>
                    <span className="text-red-400">❌ 415-555-1234</span>{" "}
                    (incorrect - missing +1 and has dashes)
                  </li>
                  <li>
                    <span className="text-red-400">❌ +1 415 555 1234</span>{" "}
                    (incorrect - has spaces)
                  </li>
                  <li>
                    <span className="text-red-400">❌ 4155551234</span>{" "}
                    (incorrect - missing country code and +)
                  </li>
                </ul>
              </div>
            </>
          }
        />

        <FAQItem
          question='Why are my calls failing with "rate limit exceeded"?'
          answer={
            <>
              <p className="mb-2">
                You&apos;re initiating calls too quickly. Providers limit how
                many calls you can start per minute/hour to prevent abuse.
              </p>
              <p className="mb-2 font-semibold text-orange-400">Solutions:</p>
              <ul className="list-disc ml-4 space-y-1">
                <li>System will automatically retry with delays</li>
                <li>Consider upgrading your plan for higher limits</li>
                <li>Space out your CSV import processing</li>
                <li>Check your provider&apos;s rate limit documentation</li>
              </ul>
            </>
          }
        />
      </div>

      {/* Getting Help */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-semibold text-white mb-4">Getting Help</h3>
        <p className="text-gray-300 mb-4">
          If you&apos;re still having trouble after following this guide:
        </p>
        <ol className="space-y-2 text-gray-300 list-decimal list-inside">
          <li>
            <strong>Check the logs</strong> for the original error details
          </li>
          <li>
            <strong>Verify your configuration</strong> in the provider dashboard
          </li>
          <li>
            <strong>Test with a single lead</strong> before bulk processing
          </li>
          <li>
            <strong>Contact support</strong> with the specific error message
          </li>
        </ol>
        <p className="text-gray-400 text-sm mt-4 italic">
          The error classifier is designed to make troubleshooting easier, but
          sometimes provider-specific issues require looking at their
          documentation or contacting their support.
        </p>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-orange-900/20 to-purple-900/20 border border-orange-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium">Permanent errors</p>
              <p className="text-gray-400 text-sm">
                Fix the issue, then you can retry manually
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <RefreshCw className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium">Temporary errors</p>
              <p className="text-gray-400 text-sm">
                System retries automatically
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium">Phone numbers</p>
              <p className="text-gray-400 text-sm">
                Always use E.164 format (+14155551234)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Key className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium">API keys</p>
              <p className="text-gray-400 text-sm">
                Check environment variables if authentication fails
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <User className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium">Agent setup</p>
              <p className="text-gray-400 text-sm">
                Verify configuration in provider dashboard
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Server className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium">Rate limits</p>
              <p className="text-gray-400 text-sm">
                System handles automatically with retries
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray-300 mt-6 text-center">
          The error classifier helps you focus on leads that can actually work,
          saving you time and frustration!
        </p>
      </div>
    </section>
  );
}
