import type { Metadata } from "next";
import Link from "next/link";
import { getAuthor } from "@/lib/authors";
import { getBlogPost } from "@/lib/blog-posts";
import { blogFaqs } from "@/lib/blog-faqs";
import { buildBlogGraph, buildPostMetadata } from "@/lib/blog-schema";
import PostLayout from "@/components/blog/PostLayout";

/* eslint-disable react/no-unescaped-entities */

const post = getBlogPost("ai-receptionist-call-recording-laws")!;
const teamAuthor = getAuthor("voice-team")!;
const faqs = blogFaqs["ai-receptionist-call-recording-laws"];

export const metadata: Metadata = buildPostMetadata(post, teamAuthor);

export default function AIReceptionistCallRecordingLawsBlogPost() {
  return (
    <>
      <script
        id="ai-receptionist-laws-blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBlogGraph({
              slug: post.slug,
              title: post.title,
              description: post.description,
              image: post.image,
              datePublished: post.date,
              dateModified: post.updated ?? post.date,
              authorSchemaId: teamAuthor.authorSchemaId,
              faqs,
              crumbName: "AI Receptionist Call Recording Laws by State",
            })
          ),
        }}
      />

      <PostLayout
        post={post}
        titleLead="Are AI Receptionists Legal?"
        titleHighlight="Recording & Disclosure Laws by State"
        dek={
          <>
            Short answer: <strong>yes</strong> &mdash; answering your own
            inbound calls with an{" "}
            <Link href="/ai-receptionist" className="text-brand-light hover:text-brand transition-colors">
              AI receptionist
            </Link>{" "}
            is legal in the US, and no federal law requires you to announce
            that the voice is AI on inbound calls. The rules that actually bite
            are three: state call-recording consent laws, bans on
            impersonating a human, and &mdash; for calls your system{" "}
            <em>makes</em> &mdash; the TCPA as applied to AI voices. Here&apos;s
            the verified map, statutes linked, current as of September 2026.
          </>
        }
        author={teamAuthor}
        faqs={faqs}
        toc={[
          { id: "federal-rules", title: "What federal law actually says" },
          { id: "recording-consent", title: "State recording consent: the map" },
          { id: "ai-disclosure", title: "AI disclosure laws so far" },
          { id: "compliance-checklist", title: "The six-step compliance checklist" },
          { id: "for-buyers-and-agencies", title: "What this means for buyers & agencies" },
        ]}
      >
        <div className="space-y-8">
          <div className="glass rounded-2xl p-8 border border-brand/20">
            <h2 id="federal-rules" className="scroll-mt-28 mb-4">
              What federal law actually says
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The headline everyone remembers from February 2024 &mdash;
              &ldquo;FCC bans AI voices in robocalls&rdquo; &mdash; is shorthand
              for a technical ruling. In{" "}
              <a
                href="https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-light hover:text-brand transition-colors underline decoration-brand/40"
              >
                Declaratory Ruling FCC 24-17 (February 8, 2024)
              </a>
              , the FCC confirmed that the TCPA&apos;s existing ban on
              &ldquo;artificial or prerecorded voice&rdquo; calls includes
              AI-generated voices, and that{" "}
              <strong>callers must obtain consent before making such a
              call</strong>. Read that carefully: the rule governs{" "}
              <em>making</em> calls. An AI receptionist that{" "}
              <em>answers</em> your inbound line isn&apos;t making a call
              &mdash; which is why it isn&apos;t covered by that ruling.
            </p>
            <div className="overflow-x-auto rounded-xl border border-brand/30 mb-6">
              <table>
                <thead>
                  <tr>
                    <th>Call scenario</th>
                    <th>TCPA AI-voice consent rules</th>
                    <th>State recording laws</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Inbound AI answering your own line</td>
                    <td>Generally not triggered &mdash; you&apos;re answering, not initiating</td>
                    <td>Triggered if you record &mdash; depends on your state</td>
                  </tr>
                  <tr>
                    <td>Outbound AI marketing calls</td>
                    <td>Triggered &mdash; prior express <strong>written</strong> consent required for cell phones</td>
                    <td>Triggered if recorded</td>
                  </tr>
                  <tr>
                    <td>Outbound reminders to existing customers</td>
                    <td>Narrower FCC exemptions exist &mdash; confirm the fit with counsel before running reminder campaigns</td>
                    <td>Triggered if recorded</td>
                  </tr>
                  <tr>
                    <td>AI impersonating a person or business</td>
                    <td>Illegal under the TCPA if it&apos;s a robocall</td>
                    <td>&mdash;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              The other federal rules worth knowing, with their sources:
            </p>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>Penalties are per call.</strong> TCPA private
                  lawsuits run $500 per violation, up to $1,500 per call for
                  willful or knowing violations (47 U.S.C. &sect;227(b)(3) &mdash;{" "}
                  <a
                    href="https://www.law.cornell.edu/uscode/text/47/227"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-light hover:text-brand transition-colors underline decoration-brand/40"
                  >
                    statute text
                  </a>
                  ). At scale, unconsented AI-voice outbound calling gets
                  expensive fast.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>Calling hours and DNC.</strong> Telemarketing calls
                  only between 8 a.m. and 9 p.m. local time, and
                  national-do-not-call registrations are honored indefinitely
                  (47 CFR &sect;64.1200(c)).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>Recording&apos;s federal baseline is
                  one-party consent</strong> (18 U.S.C. &sect;2511(2)(d)) &mdash;
                  federal law lets you record a call you&apos;re party to. The
                  states that diverge are where the map below matters.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>No impersonating humans.</strong> The FTC&apos;s
                  Impersonation Rule (16 CFR Part 461, effective April 1,{" "}
                  <a
                    href="https://www.federalregister.gov/documents/2024/03/01/2024-04335/trade-regulation-rule-on-impersonation-of-government-and-businesses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-light hover:text-brand transition-colors underline decoration-brand/40"
                  >
                    2024
                  </a>
                  ) bans impersonating businesses and people &mdash; your AI
                  receptionist must never claim to be a named human employee.
                </span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              One more piece is pending: the FCC proposed requiring callers to{" "}
              <em>disclose</em> AI-generated voices in outbound robocalls and
              robotexts (notice issued September 2024). As of this writing no
              final rule has been adopted &mdash; we&apos;ll update this page
              when one lands.
            </p>
          </div>

          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="recording-consent" className="scroll-mt-28 mb-4">
              State recording consent: the map
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This is the big one for inbound AI receptionists, because
              virtually every platform records calls for transcription and
              quality review. The commonly cited count:{" "}
              <strong>13 states require all-party consent</strong> to record a
              conversation, plus Oregon&apos;s hybrid rule (one-party by
              telephone, all-party in person) and Vermont&apos;s common-law
              version. Everywhere else, federal-style one-party consent
              applies &mdash; recording a call you&apos;re on is lawful.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              We pulled the statute texts while writing this guide, and
              we&apos;re marking which ones we verified directly &mdash; the
              same transparency we&apos;d want from any vendor advising you on
              compliance:
            </p>
            <div className="overflow-x-auto rounded-xl border border-brand/30 mb-6">
              <table>
                <thead>
                  <tr>
                    <th>State</th>
                    <th>Rule</th>
                    <th>Statute</th>
                    <th>Text checked for this guide</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>California</td><td>All-party</td><td>Penal Code &sect;632(a)</td><td>Yes</td></tr>
                  <tr><td>Connecticut</td><td>All-party, with notice options</td><td>C.G.S. &sect;52-570d</td><td>Yes</td></tr>
                  <tr><td>Delaware</td><td>All-party (widely listed)</td><td>11 Del. C. &sect;1332</td><td>Not in our review</td></tr>
                  <tr><td>Florida</td><td>All-party</td><td>Fla. Stat. &sect;934.03(2)(d)</td><td>Yes</td></tr>
                  <tr><td>Illinois</td><td>All-party for private conversations</td><td>720 ILCS 5/14-2(a)</td><td>Yes</td></tr>
                  <tr><td>Maryland</td><td>All-party (widely listed)</td><td>Cts. &amp; Jud. Proc. &sect;10-402</td><td>Not in our review</td></tr>
                  <tr><td>Massachusetts</td><td>All-party (bans &ldquo;secret&rdquo; recording)</td><td>Mass. Gen. Laws c.272, &sect;99</td><td>Yes</td></tr>
                  <tr><td>Michigan</td><td>All-party (classification disputed)</td><td>MCL 750.539c</td><td>Not in our review</td></tr>
                  <tr><td>Montana</td><td>All-party</td><td>MCA 45-8-213</td><td>Not in our review</td></tr>
                  <tr><td>Nevada</td><td>All-party (intent element disputed)</td><td>NRS 200.650</td><td>Yes</td></tr>
                  <tr><td>New Hampshire</td><td>All-party</td><td>RSA 570-A:2</td><td>Not in our review</td></tr>
                  <tr><td>Oregon</td><td>Hybrid: one-party by phone, all-party in person</td><td>ORS 165.540</td><td>Yes</td></tr>
                  <tr><td>Pennsylvania</td><td>All-party (business exceptions exist)</td><td>18 Pa.C.S. &sect;5703</td><td>Yes</td></tr>
                  <tr><td>Washington</td><td>All-party</td><td>RCW 9.73.030(1)(a)</td><td>Yes</td></tr>
                  <tr><td>Vermont</td><td>All-party under common law (no statute)</td><td>&mdash;</td><td>Classification widely reported</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Connecticut is the clearest example of what
              &ldquo;notice&rdquo; means in practice.</strong> Its statute
              (&sect;52-570d) spells out the routes to lawful recording: all-party
              consent in writing, consent captured at the start of the
              recording, a <strong>verbal notification recorded at the
              beginning of the call</strong>, or an automatic tone repeated
              every fifteen seconds or so. An AI receptionist that opens with
              &ldquo;this call may be recorded&rdquo; satisfies the
              verbal-notification route &mdash; and that one habit also
              undercuts the &ldquo;secret recording&rdquo; wording in
              Massachusetts and is harmless in every one-party state.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Several all-party states also carve out exceptions for ordinary
              business use &mdash; but exceptions are exactly where you
              shouldn&apos;t wing it. If you operate in one of the states
              above, have counsel confirm the current statute before you
              standardize on recording. For our state-by-state agency pages,
              see the{" "}
              <Link href="/whitelabel/locations" className="text-brand-light hover:text-brand transition-colors">
                local market guides
              </Link>{" "}
              (California, Texas, Florida, New York, Illinois, Georgia,
              Colorado, Arizona, Washington, Pennsylvania).
            </p>
          </div>

          <div className="glass rounded-2xl p-8 border border-brand/20">
            <h2 id="ai-disclosure" className="scroll-mt-28 mb-4">
              AI disclosure laws: what&apos;s enacted so far
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Do you have to <em>tell</em> callers they&apos;re talking to an
              AI? For inbound calls, no federal rule requires it yet &mdash;
              but four state laws move in that direction:
            </p>
            <ul className="space-y-4 text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>California AB 2905 (effective January 1, 2025).</strong>{" "}
                  Outbound robocalls using an &ldquo;artificial voice&rdquo;
                  &mdash; defined as &ldquo;a voice that is generated or
                  significantly altered using artificial intelligence&rdquo;
                  &mdash; must say so in their opening announcement.{" "}
                  <a
                    href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240AB2905"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-light hover:text-brand transition-colors underline decoration-brand/40"
                  >
                    Bill text
                  </a>
                  . This governs calls you <em>make</em>, not inbound answering.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>Utah (SB 149, 2024, amended by SB 226, 2025).</strong>{" "}
                  The broadest enacted business-interaction disclosure law: be
                  prepared to disclose AI use when a consumer asks, and &mdash;
                  for regulated occupations, which squarely includes law
                  &mdash; disclose proactively at the outset. The 2025
                  amendment added a safe harbor for disclosing clearly at the
                  start of the interaction, and the Act carries a July 1, 2027
                  sunset.{" "}
                  <a
                    href="https://le.utah.gov/~2024/bills/static/SB0149.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-light hover:text-brand transition-colors underline decoration-brand/40"
                  >
                    Bill page
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>Colorado SB 24-205.</strong> A general duty to
                  disclose to consumers when they&apos;re interacting with an AI
                  system, with compliance obligations now phased in from{" "}
                  <strong>June 30, 2026</strong> after a delay bill (SB
                  25B-004) moved the date.{" "}
                  <a
                    href="https://leg.colorado.gov/bills/sb24-205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-light hover:text-brand transition-colors underline decoration-brand/40"
                  >
                    Bill page
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>California AB 3030 (healthcare).</strong> Health
                  facilities and physician offices using generative AI in
                  patient communications about clinical information must
                  disclaim it &mdash; and for audio, the disclaimer must be{" "}
                  <strong>verbal, at both the start and end</strong> of the
                  interaction. It names physician offices rather than dental
                  practices, but read it as the direction of travel for any
                  patient-facing phone AI.
                </span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Pattern to note: every enacted rule so far targets{" "}
              <em>outbound</em> calls or specific regulated settings &mdash;
              none bans inbound AI answering. The pragmatic read for a small
              business: proactive disclosure is cheap insurance, the laws are
              converging on it, and buyers increasingly expect it.
            </p>
          </div>

          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="compliance-checklist" className="scroll-mt-28 mb-4">
              The six-step compliance checklist
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Everything above compresses into six habits that cover the
              verified requirements:
            </p>
            <ul className="space-y-4 text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>1. Play a notice at the start of every recorded
                  call.</strong> &ldquo;This call may be recorded and may be
                  answered by an automated assistant.&rdquo; One sentence
                  covers Connecticut&apos;s verbal-notification route,
                  Massachusetts&apos;s secret-recording wording, and every
                  one-party state.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>2. Never let the AI claim to be a human.</strong> No
                  fake names, no &ldquo;this is Sarah from the front desk.&rdquo;
                  The FTC Impersonation Rule (effective April 1, 2024) plus
                  state consumer-protection laws apply to what your AI says.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>3. Handle patient data with a signed BAA.</strong>{" "}
                  If your receptionist vendor creates, receives, or transmits
                  protected health information for a covered practice, it&apos;s
                  a business associate under HIPAA &mdash; which requires a
                  written Business Associate Agreement (45 CFR
                  &sect;164.502(e), &sect;164.504(e)). See our{" "}
                  <Link href="/glossary/hipaa" className="text-brand-light hover:text-brand transition-colors">
                    HIPAA glossary entry
                  </Link>{" "}
                  for the checklist to run before taking healthcare calls.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>4. Treat outbound AI calls as the regulated zone.</strong>{" "}
                  Marketing calls with AI voices to cell phones need prior
                  express <em>written</em> consent; honor the do-not-call
                  registry and the 8 a.m.&ndash;9 p.m. window; expect $500 per
                  call, up to $1,500 willful, in private suits. Full rules in
                  our{" "}
                  <Link href="/glossary/tcpa" className="text-brand-light hover:text-brand transition-colors">
                    TCPA glossary entry
                  </Link>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>5. If you operate in Utah or Colorado, build
                  disclosure in now.</strong> Disclose AI use on request
                  (Utah), at the outset for regulated occupations, and from
                  June 30, 2026 in Colorado consumer interactions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>6. Keep transcripts and consent logs.</strong> If a
                  recording is ever questioned, your defense is evidence: the
                  recorded notice at the start of the call, timestamps, and
                  retention controls. The same transcripts double as your
                  quality-assurance loop &mdash; the failure patterns we found
                  in{" "}
                  <Link href="/blog/ai-receptionist-complaints" className="text-brand-light hover:text-brand transition-colors">
                    55 real user reports
                  </Link>{" "}
                  are all visible in transcripts within days of launch.
                </span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              The technical layer underneath all of this &mdash; encryption,
              retention windows, access controls &mdash; lives in our{" "}
              <Link href="/blog/voice-ai-security-compliance" className="text-brand-light hover:text-brand transition-colors">
                voice AI security &amp; compliance guide
              </Link>
              .
            </p>
          </div>

          <div className="glass rounded-2xl p-8 border border-brand/20">
            <h2 id="for-buyers-and-agencies" className="scroll-mt-28 mb-4">
              What this means for buyers and agencies
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>If you&apos;re buying an AI receptionist for your own
              business:</strong> legality isn&apos;t the reason to hesitate
              &mdash; configuration is. Before you sign, ask any vendor three
              questions: Can the agent play a custom recording/AI notice at
              call start? Will you sign a BAA if we handle patient data? Can
              the agent disclose it&apos;s an assistant and transfer to a human
              on request? Fusion Calling answers yes to all three &mdash;
              disclosure and consent notices are part of standard agent
              configuration, BAAs are available for healthcare deployments,
              and every agent identifies itself as an assistant with a human
              handoff path. See{" "}
              <Link href="/pricing" className="text-brand-light hover:text-brand transition-colors">
                pricing from $149/mo
              </Link>
              .
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>If you&apos;re an agency reselling AI receptionists:</strong>{" "}
              your compliance exposure is your clients&apos; exposure,
              multiplied across every deployment. The six checklist items above
              are also your sales assets &mdash; being the agency that walks in
              with a recording-disclosure script, a BAA, and a state-by-state
              answer is why you win regulated accounts. Our{" "}
              <Link href="/whitelabel/locations" className="text-brand-light hover:text-brand transition-colors">
                state market guides
              </Link>{" "}
              cover the local-angle specifics for the ten largest agency
              markets, and the{" "}
              <Link href="/whitelabel/reseller-program" className="text-brand-light hover:text-brand transition-colors">
                reseller program
              </Link>{" "}
              includes the retention and consent controls you&apos;ll need to
              demonstrate.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <em>
                One honest caveat: this guide is a practical summary compiled
                from the statutes and rulings linked above &mdash; it is not
                legal advice, laws change, and states amend their wiretap
                statutes more often than you&apos;d think. Confirm with counsel
                before making compliance decisions, especially in the all-party
                states.
              </em>
            </p>
          </div>
        </div>
      </PostLayout>
    </>
  );
}
