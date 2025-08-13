"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Zap,
  Code,
  Database,
  Workflow,
  Mail,
  UserCheck,
  User,
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
} from "react-icons/si";
import { useEffect, useState } from "react";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
                  Kontakt
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 to-purple-500/40 blur-3xl"></div>
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-purple-500/30 blur-3xl "></div>

              <Card className="bg-slate-800 border-slate-700 relative z-10 h-[100%]">
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
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-purple-500/30 blur-3xl"></div>
              <Card className="bg-slate-800 border-slate-700 relative z-10">
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
                        steigere die Effizienz deines Unternehmens und spare
                        Zeit
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-purple-500/30 blur-3xl "></div>
              <Card className="bg-slate-800 border-slate-700 z-10 relative">
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
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-purple-500/30 blur-3xl "></div>
              <Card className="bg-slate-800 border-slate-700 z-10 relative h-[100%] ">
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Beispiel Workflows
              </h2>
            </div>

            <div className="flex justify-between mb-20  ">
              <div className="flex  ">
                <div className="flex-col bg-slate-900 p-10 rounded-2xl">
                  <img
                    className="h-[300px] w-[600px] rounded-lg mb-10"
                    src={"LeadAutomationWorkflow.png"}
                  ></img>
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="">
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
                          <div className="flex justify-between max-w-[400px] mt-5">
                            <p className="text-sm text-slate-300">
                              Es funktioniert wie folgt, die Unternehmen werden
                              mit{" "}
                              <span className="text-blue-500 font-bold">
                                {" "}
                                Google Maps
                              </span>{" "}
                              rausgesucht, die Emails anschließend von der
                              Website extrahiert. Der KI Agent nutzt
                              anschließend die Informationen{" "}
                              <span className="text-blue-500 font-bold">
                                {" "}
                                ihres{" "}
                              </span>
                              Unternehmens und die Informationen von der Website
                              des potentiellen{" "}
                              <span className="text-blue-500 font-bold">
                                Kunden
                              </span>{" "}
                              um eine personalisierte einzigartige Email zu
                              verfassen und abzusenden{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex ">
                <div className="flex-col bg-slate-900 p-10 rounded-2xl">
                  <img
                    className="h-[300px] w-[600px] rounded-lg mb-10"
                    src={"MitarbeiterWorkflow.png"}
                  ></img>
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="">
                      <div className="space-y-4">
                        <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                          <UserCheck className="h-6 w-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">
                            Mitarbeiter Verteilung
                          </h3>
                          <p className="text-sm text-slate-300 max-w-[440px]">
                            Verteile automatische Aufgaben an{" "}
                            <span className="text-green-500 font-bold">
                              {" "}
                              deine Mitarbeiter{" "}
                            </span>
                            , und steigere die Effizienz deines Unternehmens und
                            spare Zeit
                          </p>
                          <div className="flex justify-between max-w-[400px] mt-5">
                            <p className="text-sm text-slate-300">
                              Es funktioniert so, sobald ein lead geantwortet
                              hat, wird der{" "}
                              <span className="font-bold text-green-500">
                                {" "}
                                KI Agent{" "}
                              </span>{" "}
                              uns sagen, ob sie Interesse an dem Angebot haben,
                              bzw zustimmen, wenn dies der Fall ist, werden alle
                              wichtigen Informationen an ihre Mitarbeiter
                              gesendet, mit einer{" "}
                              <span className="font-bold text-green-500">
                                {" "}
                                personalisierte{" "}
                              </span>{" "}
                              Aufforderung, damit alle Bescheid wissen was zu
                              tun ist
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="flex justify-between mb-10  ">
              <div className="flex ">
                <div className="flex-col bg-slate-900 p-10 rounded-2xl">
                  <img
                    className="h-[300px] w-[600px] rounded-lg mb-10"
                    src={"AutoResponder.png"}
                  ></img>
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="">
                      <div className="space-y-4">
                        <div className="h-12 w-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                          <Workflow className="h-6 w-6 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">
                            Email Autoresponder
                          </h3>
                          <p className="text-sm text-slate-300">
                            Automatische Email Beantwortung, um keine Kunden zu
                            verpassen
                          </p>
                          <div className="flex justify-between max-w-[400px] mt-5">
                            <p className="text-sm text-slate-300">
                              Es funktioniert so, sobald eine Email eintrifft,
                              wird ein{" "}
                              <span className="text-orange-500 font-bold">
                                KI Agent
                              </span>{" "}
                              bestimmen, ob die{" "}
                              <span className="text-orange-500 font-bold">
                                {" "}
                                Email{" "}
                              </span>{" "}
                              z.B. ein Auftrag animmt, wenn dies der Fall ist
                              wird eine responding Email gesendet die man
                              <span className="text-orange-500 font-bold">
                                {" "}
                                personalisieren{" "}
                              </span>{" "}
                              lassen kann, oder auch nur simple Emails um einen
                              Termin auszumachen.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex ">
                <div className="flex-col bg-slate-900 p-10 rounded-2xl">
                  <img
                    className="h-[300px] w-[600px] rounded-lg mb-10"
                    src={"LeadAutomationWorkflow.png"}
                  ></img>
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="">
                      <div className="space-y-4">
                        <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                          <User className="h-6 w-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">
                            Ihre Vorstellungen
                          </h3>
                          <p className="text-sm text-slate-300">
                            Gib uns eine Anfrage zum automatisieren, und wir
                            werden
                            <span className="line-through  text-red-500 font-bold">
                              {"  "}
                              versuchen{"  "}
                            </span>
                            es umzusetzen
                          </p>
                          <div className="flex justify-between max-w-[400px] mt-5">
                            <p className="text-sm text-slate-300">
                              Wir werden eine Automatisierung entwerfen, die zu
                              <span className="text-purple-500 font-bold">
                                {" "}
                                ihrem Unternehmen
                              </span>{" "}
                              und zu ihren Wünschen passt, von spezieller Lead
                              Generation bis hin zu kompletten Automatisierung
                              von{" "}
                              <span className="text-purple-500 font-bold">
                                {" "}
                                Workflows{" "}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
              Revolutioniere dein Unternehmen
              <span className="text-orange-500">
                {" "}
                mit personalisierte Automatisierungen
              </span>
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 mt-4">
              gestaltet um Effizienz zu steigern und Zeit zu sparen
            </h3>
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
