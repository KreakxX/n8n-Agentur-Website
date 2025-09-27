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
  Users,
  Clock,
  Shield,
  Star,
  Sigma,
  Table,
  User,
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
  SiExcalidraw,
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
      <nav className="border-b border-slate-800 bg-slate-transparent backdrop-blur supports-[backdrop-filter]:bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="h-12 w-13 rounded bg-black flex items-center justify-center">
                  <img src="Logo.png" className="h-10 w-11" alt="" />
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none ">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-purple-500/5" />
          <div className="absolute inset-0 w-full h-full pointer-events-none ">
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
        </div>

        <div className="container mx-auto relative ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex  items-center gap-2 px-4 py-3 bg-orange-500/10 border border-orange-500/20 rounded-full">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  <span className="text-orange-400 text-sm font-medium tracking-wide">
                    KI-POWERED AUTOMATION
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold mb-6 mt-2 ">
                  Flexible KI-Workflow-Automatisierungen
                  <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
                    {" "}
                    für alle Unternehmen
                  </span>
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
                  className="bg-orange-500 hover:bg-orange-600 text-white p-7 text-xl"
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
                  <div className="flex items-center space-x-3 p-7 bg-slate-800/50 rounded border border-slate-600">
                    <SiAirtable size={35} className=" text-blue-400" />
                    <span className="text-lg">Airtable trigger</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowDown className="h-6 w-6 text-orange-500 animate-bounce" />
                  </div>
                  <div className="flex items-center space-x-3 p-7 bg-slate-800/50 rounded border border-slate-600">
                    <SiOpenai size={35} className=" text-green-400" />
                    <span className="text-lg">AI Processing</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowDown className="h-6 w-6 text-orange-500 animate-bounce" />
                  </div>
                  <div className="flex items-center space-x-3 p-7 bg-slate-800/50 rounded border border-slate-600">
                    <SiGmail size={35} className=" text-purple-400" />
                    <span className="text-lg">Email verschicken</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowDown className="h-6 w-6 text-orange-500 animate-bounce" />
                  </div>
                  <div className="flex items-center space-x-3 p-7 bg-slate-800/50 rounded border border-slate-600">
                    <UserCheck size={35} className=" text-orange-400" />
                    <span className="text-lg">Generiere neue leads</span>
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Workflows
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
                {" "}
                die ihr leben erleichtern
              </span>
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
              <div className="mt-16  opacity-80">
                <div className="grid grid-cols-2 gap-4 w-full mt-10">
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
                        <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                          <SiGmail className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2 text-left">
                            Kaltaquise Email Schreiber
                          </h3>
                          <p className="text-sm text-left">
                            Reaktivierte alte Leads, mit personalisierter Email
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
                        <div className="h-12 w-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                          <Table className="h-6 w-6 text-yellow-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2 text-left">
                            Excel Generator
                          </h3>
                          <p className="text-sm text-left">
                            Generiert und verbessert Excel Tabellen
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
                        <div className="h-12 w-12 bg-pink-500/10 rounded-lg flex items-center justify-center">
                          <User className="h-6 w-6 text-pink-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2 text-left">
                            Klone dein Arbeitskraft
                          </h3>
                          <p className="text-sm text-left">
                            ChatBots die dich personalisiert repäsentieren
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

                        <div className="pt-6">
                          <Button className="w-full h-14 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
                            <span className="flex items-center gap-2">
                              Auftrag bearbeiten
                              <ArrowRight className="h-5 w-5" />
                            </span>
                          </Button>
                        </div>

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

      <section className="bg-slate-900/50 py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Tabs
              defaultValue="IT"
              className="w-full max-w-6xl bg-slate-900 rounded-2xl p-6"
            >
              <TabsList className="grid w-full grid-cols-4 gap-4 mb-20 bg-transparent ">
                <TabsTrigger
                  value="IT"
                  className="flex items-center gap-3 p-4 bg-slate-800 border border-slate-700 rounded-xl
                         data-[state=active]:bg-slate-700 data-[state=active]:border-slate-600
                         hover:bg-slate-750 transition-colors"
                >
                  <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-slate-700" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-medium text-sm">
                      Enterprise
                    </h3>
                    <p className="text-slate-400 text-xs">
                      Employee Automation
                    </p>
                  </div>
                </TabsTrigger>

                <TabsTrigger
                  value="Leads"
                  className="flex items-center gap-3 p-4 bg-slate-800 border border-slate-700 rounded-xl
                         data-[state=active]:bg-slate-700 data-[state=active]:border-slate-600
                         hover:bg-slate-750 transition-colors"
                >
                  <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <ChartNoAxesCombined className="h-5 w-5 text-slate-700" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-medium text-sm">Services</h3>
                    <p className="text-slate-400 text-xs">Lead Automation</p>
                  </div>
                </TabsTrigger>

                <TabsTrigger
                  value="PersonalAgent"
                  className="flex items-center gap-3 p-4 bg-slate-800 border border-slate-700 rounded-xl
                         data-[state=active]:bg-slate-700 data-[state=active]:border-slate-600
                         hover:bg-slate-750 transition-colors"
                >
                  <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <ChartNoAxesCombined className="h-5 w-5 text-slate-700" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-medium text-sm">Employee</h3>
                    <p className="text-slate-400 text-xs">Personal Agent</p>
                  </div>
                </TabsTrigger>

                <TabsTrigger
                  value="DevOps"
                  className="flex items-center gap-3 p-4 bg-slate-800 border border-slate-700 rounded-xl
                         data-[state=active]:bg-slate-700 data-[state=active]:border-slate-600
                         hover:bg-slate-750 transition-colors"
                >
                  <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-slate-700" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-medium text-sm">Social</h3>
                    <p className="text-slate-400 text-xs">Media Automation</p>
                  </div>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="IT" className="mt-0">
                <div className="bg-slate-800 rounded-xl p-1">
                  <img
                    src="/MitarbeiterWorkflowNew.png"
                    alt="Employee automation workflow"
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                </div>
              </TabsContent>

              <TabsContent value="Leads" className="mt-0">
                <div className="bg-slate-800 rounded-xl p-1">
                  <img
                    src="/LeadsWorkflow.png"
                    alt="Lead automation workflow"
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                </div>
              </TabsContent>

              <TabsContent value="PersonalAgent" className="mt-0">
                <div className="bg-slate-800 rounded-xl p-1">
                  <img
                    src="/PersonalAgent.png"
                    alt="Lead automation workflow"
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                </div>
              </TabsContent>

              <TabsContent value="DevOps" className="mt-0">
                <div className="bg-slate-800 rounded-xl p-1">
                  <img
                    src="/SocialMediaAgent.png"
                    alt="Social media automation workflow"
                    className="w-full h-[500px] object-cover rounded-lg"
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

      <section
        id="preise"
        className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.05),transparent_70%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <Users className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium tracking-wide uppercase">
                Kundenerfahrungen
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Was unsere{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
                Kunden sagen
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Erfahren Sie, wie Unternehmen mit unseren Automatisierungslösungen
              Zeit sparen und Effizienz steigern
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="h-16 w-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
                <Clock className="h-8 w-8 text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">60%</div>
              <div className="text-slate-300">Zeitersparnis</div>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-slate-300">Zufriedene Kunden</div>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-slate-300">Automatisierte Workflows</div>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-500/20">
                <Shield className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-slate-300">Verfügbarkeit</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "Young Digitalist hat unsere Lead-Generation komplett
                  revolutioniert. Wir sparen täglich 4 Stunden und haben 40%
                  mehr qualifizierte Leads."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-white">Marcus Weber</div>
                    <div className="text-slate-400 text-sm">
                      CEO, TechStart GmbH
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "Die Social Media Automatisierung ist ein Game-Changer. Unsere
                  Reichweite hat sich verdreifacht, ohne zusätzlichen Aufwand."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sarah Klein</div>
                    <div className="text-slate-400 text-sm">
                      Marketing Director, CreativeFlow
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "Der KI-Telefon-Agent übernimmt 80% unserer Kundenanfragen.
                  Unser Team kann sich endlich auf strategische Aufgaben
                  fokussieren."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    T
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Thomas Müller
                    </div>
                    <div className="text-slate-400 text-sm">
                      Geschäftsführer, ServicePro
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                Bereit für Ihre eigene Erfolgsgeschichte?
              </h3>
              <p className="text-xl text-slate-300 mb-8">
                Lassen Sie uns gemeinsam Ihre Workflows optimieren und Ihr
                Unternehmen automatisieren.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
              >
                Kostenloses Beratungsgespräch buchen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
