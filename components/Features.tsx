import { Calendar, Phone, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Features() {
  return (
    <section className="w-full bg-black">
      <h1 className="text-orange-500 text-center font-bold text-3xl md:text-4xl mb-6 pb-4">
        Callling Features
      </h1>
      {/* First Feature */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="inline-block rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-500">
              Smart Scheduling
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Automate appointment booking & reminders
            </h2>
            <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let AI handle your appointment scheduling with smart calendar
              integration and automated reminders.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-orange-500" />
                Live calendar integration
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-500" />
                Automated confirmation calls
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <Card className="border-orange-500 rounded-5xl">
              <CardContent className="p-0">
                <Image
                  src="/feature1.jpeg"
                  width={600}
                  height={400}
                  alt="Calendar Interface"
                  className="rounded-lg object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Second Feature */}
      <div className="container mx-auto px-4 md:px-6 mt-20 max-w-6xl">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="inline-block rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-500">
              24/7 Support
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Automate customer support inquiries
            </h2>
            <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Handle customer support calls instantly with zero waiting time and
              consistent service quality.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                24/7 Availability
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                Real-time system integration
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                Smart procedure handling
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <Card className="border-orange-500 rounded-5xl">
              <CardContent className="p-0 ">
                <Image
                  src="/feature2.jpeg"
                  width={600}
                  height={400}
                  alt="Support Interface"
                  className="rounded-lg object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* thired Feature */}
      <div className="container mx-auto px-4 md:px-6 mt-20 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-12 justify-center">
          <Card className="bg-black border-orange-500/20">
            <CardContent className="p-6 space-y-4">
              <BarChart3 className="h-12 w-12 text-orange-500" />
              <h3 className="text-xl font-bold text-white">Detailed Reports</h3>
              <p className="text-gray-400">
                Track every interaction with comprehensive call recordings,
                transcriptions, and customized analytics.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black border-orange-500/20">
            <CardContent className="p-6 space-y-4">
              <Calendar className="h-12 w-12 text-orange-500" />
              <h3 className="text-xl font-bold text-white">
                Focus on Priorities
              </h3>
              <p className="text-gray-400">
                Let AI handle routine calls while your team focuses on
                high-value tasks and strategic initiatives.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black border-orange-500/20">
            <CardContent className="p-6 space-y-4">
              <Phone className="h-12 w-12 text-orange-500" />
              <h3 className="text-xl font-bold text-white">
                Outbound Campaigns
              </h3>
              <p className="text-gray-400">
                Seamlessly import leads and automate outbound calling campaigns
                with intelligent AI agents.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
