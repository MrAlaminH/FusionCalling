export const definitionBlockData = {
  eyebrow: "What is AI phone call automation?",
  heading: "AI phone call automation, explained",
  intro:
    "AI phone call automation is the use of artificial intelligence voice agents to automatically place and answer business phone calls — without a human on the line. Powered by speech recognition, large language models, and text-to-speech, these agents hold natural, two-way conversations that book appointments, qualify leads, answer FAQs, and route complex calls to your team, 24/7.",
  detail:
    "Unlike a traditional IVR menu or a basic chatbot, a modern AI receptionist understands context, remembers details within a call, and integrates with your CRM, calendar, and helpdesk in real time.",
  stats: [
    {
      value: "80%",
      label:
        "Fewer missed calls reported by customers after switching to AI receptionists.",
      source: "Fusion Calling customer testimonials",
    },
    {
      value: "99%",
      label:
        "Customer satisfaction across 60+ completed voice-AI deployments.",
      source: "Fusion Calling internal data, 2024–2026",
    },
    {
      value: "24/7",
      label:
        "Always-on call handling — no hold music, no downtime, no agent burnout.",
      source: "Fusion Calling platform",
    },
  ],
};

export default function DefinitionBlock() {
  return (
    <section id="what-is" className="w-full bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-3">
          {definitionBlockData.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {definitionBlockData.heading}
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {definitionBlockData.intro}
        </p>
        <p className="text-gray-400 leading-relaxed mb-10">
          {definitionBlockData.detail}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {definitionBlockData.stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-xl border border-brand/20 bg-black/40 p-5"
            >
              <p className="text-3xl font-bold text-brand-strong">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              <p className="text-xs text-gray-500 mt-2">
                Source: {stat.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
