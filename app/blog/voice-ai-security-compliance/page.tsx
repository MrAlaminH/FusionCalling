import type { Metadata } from "next";
import Link from "next/link";
import { getAuthor } from "@/lib/authors";
import { getBlogPost } from "@/lib/blog-posts";
import { blogFaqs } from "@/lib/blog-faqs";
import { buildBlogGraph, buildPostMetadata } from "@/lib/blog-schema";
import PostLayout from "@/components/blog/PostLayout";
import { primaryButton } from "@/components/ui/button-styles";

/* eslint-disable react/no-unescaped-entities */

const post = getBlogPost("voice-ai-security-compliance")!;
const author = getAuthor(post.author ?? "voice-team")!
const faqs = blogFaqs["voice-ai-security-compliance"];

export const metadata: Metadata = buildPostMetadata(post, author);

export default function VoiceAISecurityComplianceBlogPost() {
  return (
    <>
      <script
        id="voice-ai-security-blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBlogGraph({
              slug: post.slug,
              title: post.title,
              description: post.description,
              image: post.image,
              datePublished: post.date,
              dateModified: post.updated,
              authorSchemaId: author.authorSchemaId,
              faqs,
              crumbName: "Voice AI Security & Compliance: Encryption, GDPR, Interruption Handling",
            })
          ),
        }}
      />

      <PostLayout
        post={post}
        titleLead="Voice AI Security"
        titleHighlight="& Compliance"
        dek={
          <>
            How call audio is encrypted, how GDPR retention works, what rules
            cover outbound dialing, and how interruption handling behaves — in
            plain English, so you know what to ask any vendor.
          </>
        }
        author={author}
        faqs={faqs}
        toc={[
          { id: "why-security-questions", title: "Why Security Questions Come First" },
          { id: "encryption-in-transit", title: "How Call Audio Is Encrypted in Transit" },
          { id: "encryption-at-rest", title: "How Call Audio Is Encrypted at Rest" },
          { id: "gdpr-retention", title: "GDPR and Call Analytics Retention" },
          { id: "outbound-and-recording", title: "Outbound Dialing and Recording Rules" },
          { id: "barge-in", title: "Interruption Handling: How Barge-In Works" },
          { id: "synthetic-voice-detection", title: "Synthetic-Voice Detection and Safe Use" },
          { id: "how-fusion-approaches-it", title: "How Fusion Approaches This" },
        ]}
      >
        <div className="space-y-8">
          {/* Introduction */}
          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="why-security-questions" className="scroll-mt-28 text-2xl font-bold text-white mb-4">
              Why Security Questions Come First
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Voice AI handles real phone calls with real people. Those calls
              carry names, phone numbers, and often payment or health details.
              So buyers are right to ask hard questions before they sign.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This guide answers the most common ones in simple terms. It is
              general information, not legal advice. Use it as a checklist
              when you talk to any voice AI vendor, including us.
            </p>
          </div>

          {/* In Transit */}
          <div>
            <h2 id="encryption-in-transit" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              How Call Audio Is Encrypted in Transit
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When a call is live, audio travels across networks between the
              caller, the phone carrier, and the AI platform. Most voice AI
              platforms protect this trip in two layers.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Call setup uses TLS, the same tech that shows the lock icon in
              your browser. The voice stream itself typically uses SRTP, which
              scrambles audio packets as they move. Together, TLS plus SRTP
              are the standard answer to expect.
            </p>
            <p className="text-gray-300 leading-relaxed">
              What to ask your vendor: do you use TLS and SRTP on all calls,
              including carrier handoffs? If part of the path is not covered,
              ask where and why.
            </p>
          </div>

          {/* At Rest */}
          <div className="glass rounded-2xl p-8 border border-brand/20">
            <h2 id="encryption-at-rest" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              How Call Audio Is Encrypted at Rest
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              After a call ends, recordings and transcripts sit in storage.
              The common standard here is{" "}
              <Link href="/glossary/aes-256-encryption" className="text-brand-light hover:text-brand transition-colors">
                AES-256 encryption
              </Link>
              , a strong cipher used across the industry for stored data.
            </p>
            <div className="rounded-xl border border-white/10 p-5 mb-4 overflow-x-auto">
              <h3 className="font-semibold text-white mb-3">
                Encryption layers to expect
              </h3>
              <table className="w-full text-sm text-gray-300">
                <thead>
                  <tr className="text-left text-gray-400">
                    <th className="pb-2 pr-4 font-semibold">Layer</th>
                    <th className="pb-2 pr-4 font-semibold">Standard</th>
                    <th className="pb-2 font-semibold">What to confirm</th>
                  </tr>
                </thead>
                <tbody className="leading-relaxed">
                  <tr className="border-t border-white/10">
                    <td className="py-2 pr-4">Signaling in transit</td>
                    <td className="py-2 pr-4">TLS 1.2+ (prefer 1.3)</td>
                    <td className="py-2">All call setup, including carrier handoffs</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2 pr-4">Voice media in transit</td>
                    <td className="py-2 pr-4">SRTP</td>
                    <td className="py-2">Audio packets scrambled in motion</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2 pr-4">Stored calls</td>
                    <td className="py-2 pr-4">AES-256 at rest</td>
                    <td className="py-2">Key storage, access roles, auto-delete</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2 pr-4">Key management</td>
                    <td className="py-2 pr-4">Rotation per NIST SP 800-57</td>
                    <td className="py-2">Who holds keys, rotation cadence</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Ask where keys are kept, who can access stored calls, and
              whether you can turn storage off or set auto-delete. Good
              answers are short and clear. Long, vague answers are a warning
              sign. For transport baselines see NIST SP 800-52r2 and for key
              management NIST SP 800-57 alongside our{" "}
              <Link href="/glossary/aes-256-encryption" className="text-brand-light hover:text-brand transition-colors">
                AES-256 glossary definition
              </Link>
              .
            </p>
          </div>

          {/* GDPR */}
          <div>
            <h2 id="gdpr-retention" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              GDPR and Call Analytics Retention
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you call people in the EU,{" "}
              <Link href="/glossary/gdpr" className="text-brand-light hover:text-brand transition-colors">
                GDPR
              </Link>{" "}
              applies. It says you may only keep personal data as long as you
              need it, and people can ask for a copy or for deletion.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              In practice this means three things. Set a clear retention
              period for recordings and transcripts. Delete on schedule, not
              by hand. And have a simple process for access and deletion
              requests.
            </p>
            <p className="text-gray-300 leading-relaxed">
              What to ask your vendor: can I set retention per client? Can I
              delete one call or one caller's full history? How fast are
              backups cleared? Full details on API controls are in our{" "}
              <Link href="/docs/api-reference" className="text-brand-light hover:text-brand transition-colors">
                API reference
              </Link>
              . For outbound consent baselines see the{" "}
              <Link href="/glossary/tcpa" className="text-brand-light hover:text-brand transition-colors">
                TCPA glossary definition
              </Link>
              .
            </p>
          </div>

          {/* Outbound + Recording */}
          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="outbound-and-recording" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              Outbound Dialing and Recording Rules
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Outbound AI calling has rules. In the US, the TCPA requires
              consent for autodialed and prerecorded marketing calls, and it
              limits calling hours. Do-not-call lists apply too.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Recording has its own rules. Some states need only one party to
              consent, while others need all parties. Many teams play a short
              notice at the start of each recorded call. Check the rules for
              each state or country you call before you launch &mdash; our{" "}
              <Link href="/blog/ai-receptionist-call-recording-laws" className="text-brand-light hover:text-brand transition-colors">
                AI receptionist call recording laws guide
              </Link>{" "}
              breaks down the federal rules and the state-by-state consent map.
            </p>
          </div>

          {/* Barge-in */}
          <div>
            <h2 id="barge-in" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              Interruption Handling: How Barge-In Works
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              People interrupt. A good voice agent handles it well. When a
              caller talks over the agent, the agent should stop, listen, and
              respond to the new input. This is called{" "}
              <Link href="/glossary/barge-in" className="text-brand-light hover:text-brand transition-colors">
                barge-in
              </Link>
              , and it needs full-duplex audio so both sides can be heard at
              once.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Under the hood teams tune voice activity detection (VAD):
              server-side VAD for accuracy, client-side VAD for speed, or
              hybrid for both. Well-tuned setups respond in 80–150ms without
              cutting off breaths or background noise. Ask your vendor which
              VAD they use and what endpointer delay they target for
              multi-turn phone conversations with natural turn-taking.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The best test is a live call. Interrupt the agent mid-sentence
              and time how fast it yields. If it keeps talking over you, the
              setup needs tuning. See plan options on our{" "}
              <Link href="/pricing" className="text-brand-light hover:text-brand transition-colors">
                pricing page
              </Link>{" "}
              and try the demo line yourself.
            </p>
          </div>

          {/* Synthetic voice */}
          <div className="glass rounded-2xl p-8 border border-brand/20">
            <h2 id="synthetic-voice-detection" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              Synthetic-Voice Detection and Safe Use
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI voices now sound close to human. That is useful, but it
              needs care. Common safeguards are simple: tell callers they are
              speaking with an AI, keep logs of each call, and only clone
              voices you have permission to use.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Ask your vendor what abuse controls they offer. Also ask how
              callers can reach a human at any point. A clear path to a real
              person builds trust and keeps edge cases safe.
            </p>
          </div>

          {/* How Fusion approaches it */}
          <div>
            <h2 id="how-fusion-approaches-it" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              How Fusion Approaches This
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Fusion is built to help agencies meet these needs across
              clients. Calls run over encrypted connections. Stored call data
              is protected with strong encryption. Retention and deletion
              controls are available per account.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If you serve clinics or other regulated clients, talk to us
              about your needs before you sign. We will walk through what
              controls fit your case and what paperwork your process
              requires.
            </p>
          </div>

          {/* Conclusion */}
          <div className="glass-light rounded-2xl p-8 border border-brand/30">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ask These Questions, Then Launch
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Short version: confirm TLS plus SRTP in transit, AES-256 at
              rest, clear GDPR retention, consent-checked outbound, tested
              barge-in, and honest AI disclosure. Any vendor worth your money
              will answer all six in plain words.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Want to hear barge-in and voice quality firsthand? There is a{" "}
              <Link href="/#show-case" className="text-brand-light hover:text-brand transition-colors">
                live demo on the homepage
              </Link>
              , or you can start a trial and test with your own call flows.
            </p>

            <Link
              href="/whitelabel"
              className={primaryButton}
            >
              Start White-Labeling Fusion Calling
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </PostLayout>
    </>
  );
}
