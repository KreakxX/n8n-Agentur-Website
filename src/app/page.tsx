"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Workflow,
  Mail,
  UserCheck,
  ArrowDown,
  Info,
  FileQuestionMark,
  Building2,
  BrainCog,
  Expand,
  Instagram,
  Smartphone,
  ChartNoAxesCombined,
  BookCheck,
  CircleDollarSign,
  ArrowRight,
  Network,
  Twitter,
  Youtube,
  Blocks,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  SiFacebook,
  SiLinkedin,
  SiPaypal,
  SiFigma,
  SiMiro,
  SiPerplexity,
  SiGooglegemini,
  SiJson,
  SiGooglechat,
  SiGoogleads,
  SiGoogledocs,
  SiGoogletasks,
  SiClaude,
  SiOllama,
  SiInstagram,
  SiYoutube,
  SiGoogle,
} from "react-icons/si";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    SiGoogleads,
    SiGoogledocs,
    SiGoogletasks,
  } as const;

  const integrations = Object.keys(iconsMap) as Array<keyof typeof iconsMap>;

  const [LeadGeneration, setLeadGeneration] = useState<boolean>(false);
  const [personalisedEmails, setPersonalizedEmails] = useState<boolean>(false);
  const [standardEmails, setStandardEmails] = useState<boolean>(false);
  const [EmailResponder, setEmailResponder] = useState<boolean>(false);
  const [MarketingAutomation, setMarketingAutomation] =
    useState<boolean>(false);
  const [MobileAgent, setMobileAgent] = useState<boolean>(false);
  const [MitArbeiterVerteilung, setMitArbeiterVerteilung] =
    useState<boolean>(false);
  const [Gmaildistribution, setGmailDistribution] = useState<boolean>(false);
  const [IntegrationDistribution, setIntegrationDistribution] =
    useState<boolean>(false);

  const [oneSocial, setOneSocial] = useState<boolean>(false);
  const [fourSocial, setFourSocial] = useState<boolean>(false);

  const [support, setSupport] = useState<boolean>(false);
  const [allinOne, setAllInOne] = useState<boolean>(false);

  const [EigeneAnfrage, setEigeneAnfrage] = useState<boolean>(false);

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
                <span className="text-xl font-bold">Young Digitalist</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Konfigurator
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

      <section className="relative overflow-hidden py-20  xl:h-[95vh] sm:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-orange-500/30 to-purple-500/15 rounded-full blur-3xl "
              style={{
                animationDuration: "4s",
              }}
            />
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            src="BackgroundProjects5.png"
            className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.3) 93%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.3) 85%, transparent 100%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Flexible KI-Workflow-Automatisierung
                  <span className="text-orange-500"> für technische Teams</span>
                </h1>

                <p className="text-lg text-slate-300 max-w-2xl">
                  Setzen Sie Workflows mit der Präzision von Code oder der
                  Geschwindigkeit von Drag-and-Drop um. Ob On-Premise oder in
                  der Cloud – wir bieten vollständige Kontrolle und maximale
                  Flexibilität. Unsere n8n Workflow-Agentur hilft Ihnen,
                  mehrstufige Automatisierungen, KI-Agenten und
                  App-Integrationen schneller und effizienter als je zuvor zu
                  realisieren.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white "
                >
                  Konfigurieren sie ihren Workflow
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pruple-500/50 to-purple-500/30 blur-3xl"></div>
              <div className="relative bg-slate-900/80 rounded-lg p-8 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-orange-500" />
                    <span className="text-sm font-medium">
                      Leads Generation
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
                  <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded border border-slate-600">
                    <SiAirtable size={35} className=" text-blue-400" />
                    <span className="text-sm">Airtable trigger</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowDown className="h-6 w-6 text-orange-500 animate-bounce" />
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded border border-slate-600">
                    <SiOpenai size={35} className=" text-green-400" />
                    <span className="text-sm">AI Processing</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowDown className="h-6 w-6 text-orange-500 animate-bounce" />
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded border border-slate-600">
                    <SiGmail size={35} className=" text-purple-400" />
                    <span className="text-sm">Email verschicken</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowDown className="h-6 w-6 text-orange-500 animate-bounce" />
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded border border-slate-600">
                    <UserCheck size={35} className=" text-orange-400" />
                    <span className="text-sm">Generiere neue leads</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-10 relative bg-slate-950/20 h-full w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-950/50 to-slate-950/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-orange-500 font-bold "> Workflows </span>{" "}
              die ihr Leben erleichtern
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 blur-3xl"></div>

              <Card className="bg-slate-800/60 border-slate-700 relative z-10 h-[90%]">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        Personalisiert an ihr Unternehmen
                      </h3>
                      <p className="text-sm text-slate-300">
                        Unsere Workflows sind personalisiert an ihr Unternehmen
                        und ihre Wünsche, um das bestmöglichste Ziel zu
                        erreichen
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 blur-3xl"></div>
              <Card className="bg-slate-800/60 border-slate-700 relative z-10 h-[90%]">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        Effizient und Zeitsparend
                      </h3>
                      <p className="text-sm text-slate-300">
                        Unsere Workflows sind dafür da, Zeit ihn ihrem
                        Unternehmen zu sparen, das erreichen wir durch
                        effiziente Workflows
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 blur-3xl"></div>
              <Card className="bg-slate-800/60 border-slate-700 z-10 relative h-[90%]">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <BrainCog className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        First Mover
                      </h3>
                      <p className="text-sm text-slate-300">
                        Sie werden die neuesten Technologien und KI Modelle
                        nutzen, um ganz Oben zu sein, und somit Konkurrenz zu
                        überperformen
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 blur-3xl"></div>
              <Card className="bg-slate-800/60 border-slate-700 z-10 relative h-[90%] ">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                      <Expand className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        Skaliebar mit ihrem Wachstum
                      </h3>
                      <p className="text-sm text-slate-300">
                        Unsere Automatisierung wachsen mit ihrem Unternehmen und
                        passen sich flexibel an neue Prozesse und Anforderungen
                        an
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-24 pb-50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.05),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-orange-400 text-sm font-medium tracking-wide uppercase">
                  Personalisierung
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent leading-tight">
                Konfigurator
              </h2>

              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Gestalten Sie Ihr perfektes Setup mit unserem intuitiven
                Konfigurator
              </p>
            </div>

            <div className="relative">
              <div className="mt-16  opacity-50">
                <div className="grid grid-cols-3 gap-4 w-full mt-10">
                  <Card
                    onClick={() => {
                      setLeadGeneration(!LeadGeneration);
                      setPersonalizedEmails(false);
                      setStandardEmails(false);
                      setEmailResponder(false);
                      setEigeneAnfrage(false);
                      setMitArbeiterVerteilung(false);
                      setMarketingAutomation(false);
                      setMobileAgent(false);
                    }}
                    className={`p-8 bg-slate-800/50 border-none w-full hover:bg-slate-700 ${
                      LeadGeneration ? "bg-slate-700" : ""
                    } transition-colors ease-in-out duration-300`}
                  >
                    <CardContent>
                      <div className="space-y-4">
                        <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                          <Mail className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2 text-left">
                            Lead Generation
                          </h3>
                          <p className="text-sm text-left">
                            Automatisiere Leads und gewinne Vertrauen mit
                            personalisierten Emails
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    onClick={() => {
                      setEmailResponder(!EmailResponder);
                      setPersonalizedEmails(false);
                      setStandardEmails(false);
                      setLeadGeneration(false);
                      setEigeneAnfrage(false);
                      setMitArbeiterVerteilung(false);
                      setMarketingAutomation(false);
                      setMobileAgent(false);
                    }}
                    className={`p-8 bg-slate-800/50 border-none w-full ${
                      EmailResponder ? "bg-slate-700" : ""
                    } hover:bg-slate-700 transition-colors ease-in-out duration-300`}
                  >
                    <CardContent>
                      <div className="space-y-4">
                        <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                          <Workflow className="h-6 w-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2 text-left">
                            Email Autoresponder
                          </h3>
                          <p className="text-sm text-left">
                            Antworten sie automatisch und personalisiert auf
                            Emails, und gewinne mehr Kunden
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    onClick={() => {
                      setMitArbeiterVerteilung(!MitArbeiterVerteilung);
                      setLeadGeneration(false);
                      setEigeneAnfrage(false);
                      setEmailResponder(false);
                      setMarketingAutomation(false);
                      setMobileAgent(false);
                    }}
                    className={`p-8 bg-slate-800/50 border-none ${
                      MitArbeiterVerteilung ? "bg-slate-700" : ""
                    } w-full hover:bg-slate-700 transition-colors ease-in-out duration-300`}
                  >
                    <CardContent>
                      <div className="space-y-4">
                        <div className="h-12 w-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                          <UserCheck className="h-6 w-6 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2 text-left">
                            Mitarbeiter verteilung
                          </h3>
                          <p className="text-sm text-left">
                            Verteile deine Aufgaben effizient und schnell auf
                            all deine Mitarbeiter, ohne den Überblick zu
                            verlieren
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    onClick={() => {
                      setEigeneAnfrage(!EigeneAnfrage);
                      setLeadGeneration(false);
                      setEmailResponder(false);
                      setMitArbeiterVerteilung(false);
                      setMarketingAutomation(false);
                      setMobileAgent(false);
                    }}
                    className={`p-8 bg-slate-800/50 border-none ${
                      EigeneAnfrage ? "bg-slate-700" : ""
                    } w-full hover:bg-slate-700 transition-colors ease-in-out duration-300`}
                  >
                    <CardContent>
                      <div className="space-y-4">
                        <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                          <FileQuestionMark className="h-6 w-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2 text-left">
                            Eigene Anfrage
                          </h3>
                          <p className="text-sm text-left">
                            Du hast eine eigene Idee bzw Aufgabe die
                            Automatisiert werden soll
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    onClick={() => {
                      setMarketingAutomation(!MarketingAutomation);
                      setLeadGeneration(false);
                      setEmailResponder(false);
                      setMitArbeiterVerteilung(false);
                      setMobileAgent(false);
                      setEigeneAnfrage(false);
                    }}
                    className={`p-8 bg-slate-800/50 border-none ${
                      MarketingAutomation ? "bg-slate-700" : ""
                    } w-full hover:bg-slate-700 transition-colors ease-in-out duration-300`}
                  >
                    <CardContent>
                      <div className="space-y-4">
                        <div className="h-12 w-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                          <Instagram className="h-6 w-6 text-yellow-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2 text-left">
                            Instagram, Twitter, Facebook Automatisierung
                          </h3>
                          <p className="text-sm text-left">
                            Wir automatisieren dir den Video Upload auf mehreren
                            Plattformen
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    onClick={() => {
                      setMobileAgent(!MobileAgent);
                      setEigeneAnfrage(false);
                      setLeadGeneration(false);
                      setEmailResponder(false);
                      setMitArbeiterVerteilung(false);
                      setMarketingAutomation(false);
                    }}
                    className={`p-8 bg-slate-800/50 border-none ${
                      MobileAgent ? "bg-slate-700" : ""
                    } w-full hover:bg-slate-700 transition-colors ease-in-out duration-300`}
                  >
                    <CardContent>
                      <div className="space-y-4">
                        <div className="h-12 w-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                          <Smartphone className="h-6 w-6 text-red-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2 text-left">
                            Automatische Telefon Assistenten
                          </h3>
                          <p className="text-sm text-left">
                            Kundensupport, Terminbuchungen, Fragen alles durch
                            ein KI Telefonagenten gemanaged
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {LeadGeneration ? (
                  <div className="w-full">
                    <div className="flex justify-center items-center mt-10 animate-bounce ">
                      <ArrowDown className="text-orange-500"></ArrowDown>
                    </div>

                    <div className="flex justify-between gap-4 mt-10">
                      <Card
                        onClick={() => {
                          setPersonalizedEmails(!personalisedEmails);
                          setStandardEmails(false);
                        }}
                        className={`p-8 bg-slate-800/50 border-none ${
                          personalisedEmails ? "bg-slate-700" : ""
                        } w-full hover:bg-slate-700 transition-colors ease-in-out duration-300`}
                      >
                        <CardContent>
                          <div className="space-y-4">
                            <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                              <Mail className="h-6 w-6 text-blue-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white mb-2 text-left">
                                Personalisierte Emails
                              </h3>
                              <p className="text-sm text-gray-400 text-left">
                                Durch KI Recherche, und einem Email Template,
                                entsteht eine seriöse personalisierte Email
                              </p>
                              <h2 className="text-left font-semibold  mt-2">
                                Vorteile:
                              </h2>
                              <div className="flex items-center gap-4 mt-2 ">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                  <BookCheck className="w-6 h-6 text-green-500" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                  <ChartNoAxesCombined className="w-6 h-6 text-blue-500" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card
                        onClick={() => {
                          setStandardEmails(!standardEmails);
                          setPersonalizedEmails(false);
                        }}
                        className={`p-8 bg-slate-800/50 border-none ${
                          standardEmails ? "bg-slate-700" : ""
                        } w-full hover:bg-slate-700 transition-colors ease-in-out duration-300`}
                      >
                        <CardContent>
                          <div className="space-y-4">
                            <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                              <Mail className="h-6 w-6 text-purple-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white mb-2 text-left">
                                Standard Emails
                              </h3>
                              <p className="text-sm text-gray-400 text-left">
                                Standard Emails basierend auf einem vorgegebenen
                                Template
                              </p>
                              <h2 className="text-left font-semibold  mt-2">
                                Vorteile:
                              </h2>
                              <div className="flex items-center gap-4 mt-2 ">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                  <CircleDollarSign className="w-6 h-6 text-green-500" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ) : null}

                {EmailResponder ? (
                  <div className="w-full">
                    <div className="flex justify-center items-center mt-10 animate-bounce ">
                      <ArrowDown className="text-orange-500"></ArrowDown>
                    </div>

                    <div className="flex justify-between gap-4 mt-10">
                      <Card
                        onClick={() => {
                          setPersonalizedEmails(!personalisedEmails);
                          setStandardEmails(false);
                        }}
                        className={`p-8 bg-slate-800/50 border-none ${
                          personalisedEmails ? "bg-slate-700" : ""
                        } w-full hover:bg-slate-700 transition-colors ease-in-out duration-300`}
                      >
                        <CardContent>
                          <div className="space-y-4">
                            <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                              <Mail className="h-6 w-6 text-blue-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white mb-2 text-left">
                                Personalisierte Emails
                              </h3>
                              <p className="text-sm text-gray-400 text-left">
                                Durch KI Recherche, und einem Email Template,
                                entsteht eine seriöse personalisierte Email
                              </p>
                              <h2 className="text-left font-semibold  mt-2">
                                Vorteile:
                              </h2>
                              <div className="flex items-center gap-4 mt-2 ">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                  <BookCheck className="w-6 h-6 text-green-500" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                  <ChartNoAxesCombined className="w-6 h-6 text-blue-500" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card
                        onClick={() => {
                          setStandardEmails(!standardEmails);
                          setPersonalizedEmails(false);
                        }}
                        className={`p-8 bg-slate-800/50 border-none ${
                          standardEmails ? "bg-slate-700" : ""
                        } w-full hover:bg-slate-700 transition-colors ease-in-out duration-300`}
                      >
                        <CardContent>
                          <div className="space-y-4">
                            <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                              <Mail className="h-6 w-6 text-purple-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white mb-2 text-left">
                                Standard Emails
                              </h3>
                              <p className="text-sm text-gray-400 text-left">
                                Standard Emails basierend auf einem vorgegebenen
                                Template
                              </p>
                              <h2 className="text-left font-semibold  mt-2">
                                Vorteile:
                              </h2>
                              <div className="flex items-center gap-4 mt-2 ">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                  <CircleDollarSign className="w-6 h-6 text-green-500" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ) : null}

                {MitArbeiterVerteilung ? (
                  <div className="w-full">
                    <div className="flex justify-center items-center mt-10 animate-bounce ">
                      <ArrowDown className="text-orange-500"></ArrowDown>
                    </div>

                    <div className="flex justify-between gap-4 mt-10">
                      <Card
                        onClick={() => {
                          setGmailDistribution(!Gmaildistribution);
                          setIntegrationDistribution(false);
                        }}
                        className={`p-8 bg-slate-800/50 border-none ${
                          Gmaildistribution ? "bg-slate-700" : ""
                        } w-full hover:bg-slate-700 transition-colors ease-in-out duration-300`}
                      >
                        <CardContent>
                          <div className="space-y-4">
                            <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                              <Network className="h-6 w-6 text-blue-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white mb-2 text-left">
                                Verteilung mit Gmail
                              </h3>
                              <p className="text-sm text-gray-400 text-left">
                                Automatischer Versand einer Email mit allen
                                wichtigen Informationen an all deine Mitarbeiter
                              </p>
                              <h2 className="text-left font-semibold  mt-2">
                                Vorteile:
                              </h2>
                              <div className="flex items-center gap-4 mt-2 ">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                  <CircleDollarSign className="w-6 h-6 text-green-500" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card
                        onClick={() => {
                          setGmailDistribution(false);
                          setIntegrationDistribution(!IntegrationDistribution);
                        }}
                        className={`p-8 bg-slate-800/50 border-none ${
                          IntegrationDistribution ? "bg-slate-700" : ""
                        } w-full hover:bg-slate-700 transition-colors ease-in-out duration-300`}
                      >
                        <CardContent>
                          <div className="space-y-4">
                            <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                              <Blocks className="h-6 w-6 text-purple-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white mb-2 text-left">
                                Verteilung über Integrations
                              </h3>
                              <p className="text-sm text-gray-400 text-left">
                                Automatische Verteilung von Aufgaben mit Tools
                                wie Monday.com oder SLACK
                              </p>

                              <h2 className="text-left font-semibold  mt-2">
                                Vorteile:
                              </h2>
                              <div className="flex items-center gap-4 mt-2 ">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                  <SiSlack className="w-6 h-6 text-green-500" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                  <SiTrello className="w-6 h-6 text-blue-500" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                  <SiJira className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                                  <SiHubspot className="w-6 h-6 text-red-500" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                                  <Zap className="w-6 h-6 text-purple-500" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ) : null}

                {MarketingAutomation ? (
                  <div className="w-full">
                    <div className="flex justify-center items-center mt-10 animate-bounce ">
                      <ArrowDown className="text-orange-500"></ArrowDown>
                    </div>

                    <div className="flex justify-between gap-4 mt-10">
                      <Card
                        onClick={() => {
                          setOneSocial(!Gmaildistribution);
                          setFourSocial(false);
                        }}
                        className={`p-8 bg-slate-800/50 border-none ${
                          oneSocial ? "bg-slate-700" : ""
                        } w-full hover:bg-slate-700 transition-colors ease-in-out duration-300`}
                      >
                        <CardContent>
                          <div className="space-y-4">
                            <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                              <Twitter className="h-6 w-6 text-blue-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white mb-2 text-left">
                                1 Social Media
                              </h3>
                              <p className="text-sm text-gray-400 text-left">
                                Automatische Post auf einem Social Media ihrer
                                Wahl
                              </p>
                              <h2 className="text-left font-semibold  mt-2">
                                Vorteile:
                              </h2>
                              <div className="flex items-center gap-4 mt-2 ">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                  <CircleDollarSign className="w-6 h-6 text-green-500" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card
                        onClick={() => {
                          setOneSocial(false);
                          setFourSocial(!fourSocial);
                        }}
                        className={`p-8 bg-slate-800/50 border-none ${
                          fourSocial ? "bg-slate-700" : ""
                        } w-full hover:bg-slate-700 transition-colors ease-in-out duration-300`}
                      >
                        <CardContent>
                          <div className="space-y-4">
                            <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                              <Youtube className="h-6 w-6 text-purple-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white mb-2 text-left">
                                Social King
                              </h3>
                              <p className="text-sm text-gray-400 text-left">
                                Automatische Post auf bis zu 4 sozialen Medien
                              </p>

                              <h2 className="text-left font-semibold  mt-2">
                                Vorteile:
                              </h2>
                              <div className="flex items-center gap-4 mt-2 ">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                  <SiX className="w-6 h-6 text-green-500" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                  <SiInstagram className="w-6 h-6 text-blue-500" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                  <SiYoutube className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                                  <SiLinkedin className="w-6 h-6 text-red-500" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ) : null}

                {MobileAgent ? (
                  <div className="w-full">
                    <div className="flex justify-center items-center mt-10 animate-bounce ">
                      <ArrowDown className="text-orange-500"></ArrowDown>
                    </div>

                    <div className="flex justify-between gap-4 mt-10">
                      <Card
                        onClick={() => {
                          setSupport(!support);
                          setAllInOne(false);
                        }}
                        className={`p-8 bg-slate-800/50 border-none ${
                          support ? "bg-slate-700" : ""
                        } w-full hover:bg-slate-700 transition-colors ease-in-out duration-300`}
                      >
                        <CardContent>
                          <div className="space-y-4">
                            <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                              <Smartphone className="h-6 w-6 text-blue-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white mb-2 text-left">
                                Kundensupport
                              </h3>
                              <p className="text-sm text-gray-400 text-left">
                                Automatischer KI Telefon Agent für ihren
                                Kundensupport
                              </p>
                              <h2 className="text-left font-semibold  mt-2">
                                Vorteile:
                              </h2>
                              <div className="flex items-center gap-4 mt-2 ">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                  <CircleDollarSign className="w-6 h-6 text-green-500" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card
                        onClick={() => {
                          setSupport(false);
                          setAllInOne(!allinOne);
                        }}
                        className={`p-8 bg-slate-800/50 border-none ${
                          allinOne ? "bg-slate-700" : ""
                        } w-full hover:bg-slate-700 transition-colors ease-in-out duration-300`}
                      >
                        <CardContent>
                          <div className="space-y-4">
                            <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                              <SiGooglecalendar className="h-6 w-6 text-purple-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white mb-2 text-left">
                                All in One
                              </h3>
                              <p className="text-sm text-gray-400 text-left">
                                Automatischer KI Telefon Agent, an ihre
                                Forderungen angepasst
                              </p>

                              <h2 className="text-left font-semibold  mt-2">
                                Vorteile:
                              </h2>
                              <div className="flex items-center gap-4 mt-2 ">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                  <SiGooglecalendar className="w-6 h-6 text-green-500" />
                                </div>

                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                  <SiWhatsapp className="w-6 h-6 text-blue-500" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                  <SiTelegram className="w-6 h-6 text-yellow-500" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ) : null}

                {/* Step 2 */}
                {standardEmails ||
                personalisedEmails ||
                EigeneAnfrage ||
                IntegrationDistribution ||
                Gmaildistribution ||
                fourSocial ||
                oneSocial ||
                allinOne ||
                support ? (
                  <div className="w-full max-w-2xl mx-auto">
                    <div className="flex justify-center items-center mt-16 mb-12">
                      <div className="animate-bounce">
                        <ArrowDown className="text-orange-500 h-6 w-6" />
                      </div>
                    </div>

                    <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-sm shadow-2xl">
                      <CardContent className="p-8 space-y-8">
                        {/* Header Section */}
                        <div className="text-center mb-8">
                          <h2 className="text-2xl font-bold text-white mb-2">
                            Kontaktinformationen
                          </h2>
                          <p className="text-slate-400 text-sm">
                            Bitte geben Sie Ihre Kontaktdaten ein, damit wir
                            Ihren Auftrag bearbeiten können
                          </p>
                        </div>

                        {/* Email Section */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                              <Mail className="h-6 w-6 text-blue-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white text-lg">
                                Kontakt Email
                              </h3>
                              <p className="text-slate-400 text-sm">
                                Ihre E-Mail-Adresse für die Kommunikation
                              </p>
                            </div>
                          </div>
                          <Input
                            className="border-slate-600 bg-slate-700/50 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20 h-12 text-base"
                            placeholder="beispiel@email.com"
                            type="email"
                          />
                        </div>

                        {/* Additional Information Section */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                              <Info className="h-6 w-6 text-blue-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white text-lg">
                                Zusätzliche Informationen oder Beschreibung
                                ihrer Anfrage
                              </h3>
                              <p className="text-slate-400 text-sm">
                                Weitere Details zu Ihrem Auftrag (optional)
                              </p>
                            </div>
                          </div>
                          <Textarea
                            className="border-slate-600 bg-slate-700/50 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20 min-h-[120px] text-base resize-none"
                            placeholder="Beschreiben Sie hier weitere Details zu Ihrem Auftrag, spezielle Anforderungen oder Wünsche..."
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                          <Button className="w-full h-14 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
                            <span className="flex items-center gap-2">
                              Auftrag bearbeiten
                              <ArrowRight className="h-5 w-5" />
                            </span>
                          </Button>
                        </div>

                        {/* Footer Note */}
                        <div className="text-center pt-4 border-t border-slate-700/50">
                          <p className="text-slate-500 text-xs">
                            Ihre Daten werden vertraulich behandelt und nur für
                            die Auftragsbearbeitung verwendet
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-purple-500/15 rounded-full blur-3xl animate-pulse"
              style={{
                animationDuration: "4s",
              }}
            />
            <div
              className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-orange-500/20 rounded-full blur-2xl animate-bounce"
              style={{
                animationDuration: "6s",
              }}
            />
          </div>

          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-purple-500/15 rounded-full blur-3xl animate-pulse"
            style={{
              animationDuration: "4s",
            }}
          />
          <div
            className="absolute bottom-32 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-orange-500/20 rounded-full blur-2xl animate-bounce"
            style={{
              animationDuration: "6s",
            }}
          />
        </div>
        <div className="relative z-10">
          <div className=" mx-auto container flex items-center justify-center ">
            <Tabs
              defaultValue="IT"
              className="w-3/4 bg-slate-900 pt-7 rounded-3xl border-2 border-slate-700"
            >
              <TabsList className="grid w-full grid-cols-3 gap-5 mb-18 px-3">
                <TabsTrigger
                  value="IT"
                  className="text-sm p-6 bg-slate-900/40 border-2 border-slate-800  data-[state=active]:bg-orange-900 
             data-[state=active]:border-orange-900"
                >
                  <div className="flex justify-between">
                    <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center mr-5">
                      <Building2 className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-left">
                        Unternehmen,{" "}
                      </h2>
                      <p className="text-sm text-gray-300 text-left">
                        automatisieren Mitarbeiter
                      </p>
                    </div>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="Leads"
                  className="text-sm p-6 bg-slate-900/40 border-2 border-slate-800  data-[state=active]:bg-orange-900 
             data-[state=active]:border-orange-900"
                >
                  <div className="flex justify-between">
                    <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center mr-5">
                      <ChartNoAxesCombined className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-left">
                        {" "}
                        Dienstleister,
                      </h2>
                      <p className="text-sm text-gray-300 text-left">
                        automatisieren Leads
                      </p>
                    </div>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="DevOps"
                  className="text-sm p-6  bg-slate-900/40 border-2 border-slate-800  data-[state=active]:bg-orange-900 
             data-[state=active]:border-orange-900"
                >
                  <div className="flex justify-between">
                    <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center mr-5">
                      <Instagram className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-left">
                        Unternehmen,
                      </h2>
                      <p className="text-sm text-gray-300 text-left ">
                        automatisieren Social Media
                      </p>
                    </div>
                  </div>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="IT" className="mt-6">
                <div className="w-full">
                  <img
                    src="/MitarbeiterWorkflowNew.png"
                    alt="IT Ops automation workflow showing employee onboarding process"
                    className="w-full h-[60vh] rounded-3xl"
                  />
                </div>
              </TabsContent>

              <TabsContent value="Leads" className="mt-6">
                <div className="w-full">
                  <img
                    src="/LeadsWorkflow.png"
                    alt="Sec Ops workflow for enriching security incident tickets"
                    className="w-full h-[60vh] rounded-3xl"
                  />
                </div>
              </TabsContent>

              <TabsContent value="DevOps" className="mt-6">
                <div className="w-full">
                  <img
                    src="/SocialMediaWorkflow.png"
                    alt="Dev Ops workflow for converting natural language to API calls"
                    className="w-full h-[60vh] rounded-3xl"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-20 bg-slate-900/50">
        <div className="relative">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="BackgroundProjects5.png"
              className="absolute inset-0 w-full h-full"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.8) 60%, black 80%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.8) 60%, black 80%)",
              }}
            />
          </div>
        </div>
        <div className="relative">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 ">
              <span className="text-orange-500">
                {" "}
                Personalisierte Automatisierungen
              </span>
            </h2>
            <h3 className="text-2xl sm:text-2xl font-bold mb-4 mt-4">
              mit N8N und deren 500 Integrations
            </h3>
          </div>
          <div className="overflow-hidden mb-8 relative">
            <div className="flex animate-scroll gap-4 whitespace-nowrap">
              {integrations.slice(0, 15).map((iconName, index) => {
                const IconComponent = iconsMap[iconName];
                return (
                  <div
                    key={`first-${iconName}-${index}`}
                    className="flex items-center justify-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors flex-shrink-0 w-20 h-20"
                  >
                    <IconComponent
                      size={32}
                      className="text-slate-300 hover:text-orange-500 transition-colors"
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
                      className="text-slate-300 hover:text-orange-500 transition-colors"
                    />
                  </div>
                );
              })}
            </div>
          </div>

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
                      className="text-slate-300 hover:text-orange-500 transition-colors"
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
                      className="text-slate-300 hover:text-orange-500 transition-colors"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="min-h-screen  bg-slate-900 flex items-center justify-center p-8 relative z-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full mr-10">
                <div className="relative bg-slate-900/80 rounded-lg p-8 border border-slate-700">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-orange-500" />
                      <span className="text-sm font-medium">
                        Personal Agent
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
                    <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded border border-slate-600">
                      <SiWhatsapp size={35} className=" text-green-400" />
                      <span className="text-sm">Whatsapp trigger</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowDown className="h-6 w-6 text-orange-500 animate-bounce" />
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded border border-slate-600">
                      <SiClaude size={35} className=" text-orange-400" />
                      <span className="text-sm">AI Processing</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowDown className="h-6 w-6 text-orange-500 animate-bounce" />
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded border border-slate-600">
                      <SiGooglecalendar size={35} className=" text-blue-400" />
                      <span className="text-sm">Kalendar Eintrag</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowDown className="h-6 w-6 text-orange-500 animate-bounce" />
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded border border-slate-600">
                      <SiGmail size={35} className=" text-red-400" />
                      <span className="text-sm">Email verschicken</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white space-y-8 lg:mt-24 ">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Bist du bereit, dein{" "}
                  <span className="text-orange-500">Unternehmen</span> aufs
                  nächste Level zu bringen?
                </h1>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Arbeite mit Young Digitalist und automatisiere das, auf das
                  niemand Lust hat
                </p>

                <div className="space-y-4">
                  <p className="text-gray-400">
                    Wir helfen dir dabei, wiederkehrende Aufgaben zu
                    automatisieren und deine Produktivität zu steigern. Von der
                    Kundenakquise bis zur Rechnungsstellung - lass uns die
                    langweiligen Sachen übernehmen, damit du dich auf das
                    konzentrieren kannst, was wirklich wichtig ist.
                  </p>

                  <p className="text-gray-400">
                    Unsere maßgeschneiderten Lösungen sparen dir nicht nur Zeit,
                    sondern auch Geld. Durchschnittlich reduzieren unsere Kunden
                    ihren Arbeitsaufwand um 60% bei gleichzeitig höherer
                    Qualität und weniger Fehlern.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <SiOpenai className="w-8 h-8 text-green-500" />
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <SiGooglegemini className="w-8 h-8 text-blue-500" />
                </div>
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <SiClaude className="w-8 h-8 text-orange-500" />
                </div>
                <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <SiOllama className="w-8 h-8 text-yellow-500" />
                </div>
              </div>

              <div>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-lg"
                >
                  Workflow Base Konfigurieren
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded bg-orange-500 flex items-center justify-center">
                  <Workflow className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Young Digitalist</span>
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-20px) translateX(-5px);
          }
          75% {
            transform: translateY(-10px) translateX(10px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(8px);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-8px) translateX(-6px);
          }
          66% {
            transform: translateY(-12px) translateX(4px);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(15px) translateX(-10px);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
{
}
