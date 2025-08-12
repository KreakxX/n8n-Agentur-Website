"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Github,
  Star,
  Users,
  Zap,
  Code,
  Database,
  Workflow,
  Mail,
  UserCheck,
} from "lucide-react";
import {
  SiN8N,
  SiWhatsapp,
  SiGmail,
  SiSlack,
  SiGooglesheets,
  SiTelegram,
  SiMysql,
  SiDiscord,
  SiPostgresql,
  SiNotion,
  SiAirtable,
  SiGoogledrive,
  SiTrello,
  SiJira,
  SiHubspot,
  SiGithub,
  SiClickup,
  SiTwilio,
  SiShopify,
  SiSendgrid,
  SiZoom,
  SiDropbox,
  SiGooglecalendar,
  SiStripe,
  SiZendesk,
  SiSalesforce,
  SiWordpress,
  SiFirebase,
  SiReddit,
  SiMongodb,
  SiX,
  SiOpenai,
  SiAmazons3,
  SiWoocommerce,
  SiFacebook,
  SiLinkedin,
  SiInstagram,
  SiYoutube,
  SiSpotify,
  SiNetflix,
  SiAmazon,
  SiPaypal,
  SiCanva,
  SiFigma,
  SiMiro,
  SiPerplexity,
  SiGooglegemini,
  SiJson,
  SiGooglechat,
  SiGoogleads,
  SiGoogledocs,
  SiGoogletasks,
} from "react-icons/si";

export default function LandingPage() {
  const iconsMap = {
    // Deine bestehenden
    SiN8N,
    SiWhatsapp,
    SiGmail,
    SiSlack,
    SiGooglesheets,
    SiTelegram,
    SiMysql,
    SiDiscord,
    SiPostgresql,
    SiNotion,
    SiAirtable,
    SiGoogledrive,
    SiTrello,
    SiJira,
    SiHubspot,
    SiGithub,
    SiClickup,
    SiTwilio,
    SiShopify,
    SiSendgrid,
    SiZoom,
    SiDropbox,
    SiGooglecalendar,
    SiStripe,
    SiZendesk,
    SiSalesforce,
    SiWordpress,
    SiFirebase,
    SiReddit,
    SiMongodb,
    SiX,
    SiOpenai,
    SiAmazons3,
    SiFacebook,
    SiLinkedin,
    SiPaypal,
    SiFigma,
    SiMiro,
    SiPerplexity,
    SiGooglegemini,
    SiJson,
    SiGooglechat,
    SiGoogledocs,
    SiGoogleads,
    SiGoogletasks,
  } as const;

  const integrations = Object.keys(iconsMap) as Array<keyof typeof iconsMap>;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded bg-orange-500 flex items-center justify-center">
                  <Workflow className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">FlowBroz</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Produkte
                </a>

                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Preise
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Flexible KI-Workflow-Automatisierung
                  <span className="text-orange-500"> für technische Teams</span>
                </h1>
                <p className="text-lg text-slate-300 max-w-2xl">
                  Entwickeln Sie mit der Präzision von Code oder der
                  Geschwindigkeit von Drag-and-Drop. Hosten Sie mit
                  vollständiger On-Premise-Kontrolle oder der Bequemlichkeit der
                  Cloud. n8n bietet Ihnen mehr Freiheit, mehrstufige KI-Agenten
                  umzusetzen und Apps zu integrieren als jedes andere Tool.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Starte gratis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
                >
                  Kontakt
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 blur-3xl"></div>
              <div className="relative bg-slate-900 rounded-lg p-8 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-orange-500" />
                    <span className="text-sm font-medium">
                      Workflow Builder
                    </span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-orange-500/10 text-orange-400 border-orange-500/20"
                  >
                    Active
                  </Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-slate-800 rounded border border-slate-600">
                    <Database className="h-4 w-4 text-blue-400" />
                    <span className="text-sm">Database Trigger</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-slate-500" />
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-800 rounded border border-slate-600">
                    <Code className="h-4 w-4 text-green-400" />
                    <span className="text-sm">AI Processing</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-slate-500" />
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-800 rounded border border-slate-600">
                    <Users className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">Send Notification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Unsere Produkte
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Lead Generation
                    </h3>
                    <p className="text-sm text-slate-300">
                      Personalisierte Lead Generation individuell an dein
                      Unternehmen angepasst
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Mitarbeiter Verteilung
                    </h3>
                    <p className="text-sm text-slate-300">
                      Verteile automatische Aufgaben an deine Mitarbeiter, und
                      steigere die Effizients deines Unternehmens und spare Zeit
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Workflow className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Email Autoresponder
                    </h3>
                    <p className="text-sm text-slate-300">
                      Automatisierte und personalisierte Antworten auf
                      Unternehmens um Leads und Umsatz zu steigern
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Eigene Anfragen
                    </h3>
                    <p className="text-sm text-slate-300">
                      Gib uns eine Anfrage zum automatisieren, und wir werden
                      <span className="line-through  text-red-500 font-bold">
                        {"  "}
                        versuchen{"  "}
                      </span>
                      es umzusetzen
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Revolutioniere dein Unternehmen
              <span className="text-orange-500">
                {" "}
                mit personalisierte Automatisierungen
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 mt-4">
                gestaltet um Effizienz zu steigern und Zeit zu sparen
              </h2>
            </h2>
          </div>
          <div className="overflow-hidden mb-8 relative">
            <div className="flex animate-scroll gap-4 whitespace-nowrap">
              {/* Erste Kopie */}
              {integrations.slice(0, 15).map((iconName, index) => {
                const IconComponent = iconsMap[iconName];
                return (
                  <div
                    key={`first-${iconName}-${index}`}
                    className="flex items-center justify-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors flex-shrink-0 w-20 h-20"
                  >
                    <IconComponent
                      size={32}
                      className="text-slate-300 hover:text-white transition-colors"
                    />
                  </div>
                );
              })}
              {integrations.slice(0, 15).map((iconName, index) => {
                const IconComponent = iconsMap[iconName];
                return (
                  <div
                    key={`second-${iconName}-${index}`}
                    className="flex items-center justify-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors flex-shrink-0 w-20 h-20"
                  >
                    <IconComponent
                      size={32}
                      className="text-slate-300 hover:text-white transition-colors"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Zweite Reihe: Rechts nach Links */}
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll-reverse gap-4 whitespace-nowrap">
              {integrations.slice(15, 30).map((iconName, index) => {
                const IconComponent = iconsMap[iconName];
                return (
                  <div
                    key={`first-${iconName}-${index}`}
                    className="flex items-center justify-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors flex-shrink-0 w-20 h-20"
                  >
                    <IconComponent
                      size={32}
                      className="text-slate-300 hover:text-white transition-colors"
                    />
                  </div>
                );
              })}
              {integrations.slice(15, 30).map((iconName, index) => {
                const IconComponent = iconsMap[iconName];
                return (
                  <div
                    key={`second-${iconName}-${index}`}
                    className="flex items-center justify-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors flex-shrink-0 w-20 h-20"
                  >
                    <IconComponent
                      size={32}
                      className="text-slate-300 hover:text-white transition-colors"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to get started?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Join thousands of teams already automating their workflows with
              FlowBroz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Start building for free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
              >
                Schedule a demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded bg-orange-500 flex items-center justify-center">
                  <Workflow className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">FlowBroz</span>
              </div>
              <p className="text-sm text-slate-400">
                The workflow automation platform for technical teams
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 FlowBroz. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll 20s linear infinite reverse;
        }
      `}</style>
    </div>
  );
}
