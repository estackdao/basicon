import React from 'react';
import { Copy, Github, BookOpen, Zap, Code } from "lucide-react"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export function HomePage() {
  const [isMounted, setIsMounted] = React.useState(false)
  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const installCommands = [
    { manager: "npm", command: "npm install awesome-package" },
    { manager: "pnpm", command: "pnpm add awesome-package" },
    { manager: "yarn", command: "yarn add awesome-package" },
    { manager: "bun", command: "bun add awesome-package" },
  ]

  const features = [
    {
      icon: <Zap className="h-5 w-5 text-pink-500" />,
      title: "Developer-first",
      description: "Integrate in just seconds. Works with modern frameworks without code changes.",
    },
    {
      icon: <Code className="h-5 w-5 text-blue-500" />,
      title: "Simple & modular",
      description: "Use headlessly, or with UI. No extensions, API keys, passwords, or seed phrases needed.",
    }
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }


  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="flex justify-center gap-[32px]">
        <div className="flex flex-1 flex-col items-start max-[1024px]:max-w-[452px]">
          {/* Left Content - 2/3 width */}
          <div className="space-y-12 mt-6">
            {/* Hero Section */}
            <section className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Basicon Logo"
                    className="h-10 w-12"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-medium text-gray-600">Basicon</h1>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-base text-gray-500 font-normal leading-relaxed">
                  Basicon is your minimal, trusted npm dependency for chain and token metadata & SVG icons. All locally served, no dynamic fetch, fully type-safe.
                </p>
              </div>
            </section>

            {/* Installation */}
            <section className="space-y-4">
              <Tabs defaultValue="npm" className="w-full">
                <TabsList className="grid w-fit grid-cols-4 bg-gray-50 p-1">
                  <TabsTrigger value="npm" className="text-sm px-4 py-2">
                    npm
                  </TabsTrigger>
                  <TabsTrigger value="pnpm" className="text-sm px-4 py-2">
                    pnpm
                  </TabsTrigger>
                  <TabsTrigger value="yarn" className="text-sm px-4 py-2">
                    yarn
                  </TabsTrigger>
                  <TabsTrigger value="bun" className="text-sm px-4 py-2">
                    bun
                  </TabsTrigger>
                </TabsList>

                <div className="mt-4">
                  {installCommands.map((item) => (
                    <TabsContent key={item.manager} value={item.manager}>
                      <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-blue-500 font-mono text-sm">{item.manager}</span>
                            <code className="text-gray-700 font-mono text-sm">{item.command}</code>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(item.command)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>

              {/* Code Example */}
              <div className="bg-gray-100/50 rounded-lg p-4 border mt-4 border-gray-300">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 font-mono text-sm">1</span>
                    <code className="text-gray-700 font-mono text-sm">{"import { Porto } from 'porto'"}</code>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 font-mono text-sm">2</span>
                    <code className="text-gray-700 font-mono text-sm">
                      {"Porto."}
                      <span className="text-blue-600">create</span>
                      {"()"}
                    </code>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Grid */}
            <section className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-3 border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-50 rounded-lg">{feature.icon}</div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-11">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="space-y-3">
              <div className="flex items-center space-x-4">
                <Button className="bg-gray-100 hover:bg-gray-200 text-gray-800">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Documentation
                </Button>
                <Button variant="outline" className="border-gray-300">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
