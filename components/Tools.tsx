import Image from "next/image";

interface Logo {
  name: string;
  url: string;
}

const logos: Logo[] = [
  {
    name: "ChatGPT",
    url: "/tools/chatgpt.png",
  },
  {
    name: "Gmail",
    url: "/tools/gmail.png",
  },
  {
    name: "Facebook",
    url: "/tools/facebook.png",
  },
  {
    name: "Google Calendar",
    url: "/tools/google-calendar.png",
  },
  {
    name: "WhatsApp",
    url: "/tools/whatsapp.png",
  },
  {
    name: "Gmail",
    url: "/tools/gmail.png",
  },
  {
    name: "GoHighLevel",
    url: "/tools/gohighlevel.jpg",
  },
  {
    name: "Twilio",
    url: "/tools/twilio.png",
  },
];

const Tools = () => {
  return (
    <div className="w-full bg-transparent">
      <h2 className="text-orange-500/80 text-center font-bold text-2xl mb-12">
        Tools We Integrate With
      </h2>
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div
          className="group relative flex gap-8 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-8"
              >
                {logos.map((logo, key) => (
                  <div
                    key={key}
                    className="flex items-center justify-center w-[80px] h-[40px] rounded-md transition-all duration-300"
                  >
                    <div className="w-[60px] h-[30px] relative flex items-center justify-center">
                      <Image
                        src={logo.url}
                        alt={`${logo.name} logo`}
                        title={logo.name}
                        fill
                        className="absolute w-full h-full transition-all duration-300 ease-in-out object-contain opacity-75 hover:opacity-100 [filter:drop-shadow(0_0_4px_rgba(59,130,246,0.3))] hover:[filter:drop-shadow(0_0_6px_rgba(59,130,246,0.5))]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
