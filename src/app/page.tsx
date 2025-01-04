import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import Image from "next/image"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"
import Hero from "@/components/ui/Hero"
import { Qna } from "@/components/ui/qna"

export default function Page() {
  return (
    <main className="min-h-screen text-white">
      <Header />
      {/* Hero Section */}
      <Hero />
      <div className=" ">
        {/* About Section */}
        <section className="py-24 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-sm uppercase tracking-wider">About Us</h2>
                <p className="mt-4 text-gray-400 text-sm max-w-xs">
                  We believe in being the best possible version of ourselves. Pushing boundaries, Setting up Records and being a kind of Human Experience.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-light mb-4">
                  Photography <span className="text-gray-500">is driven by a deep passion for</span> capturing life's{" "}
                  most <span className="text-gray-500">precious moments</span> with artistry and a touch of magic
                </h3>
                <Button variant="outline" className="text-white border-white mt-6">
                  LEARN MORE <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 bg-zinc-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-sm uppercase tracking-wider">Our Expertise</h2>
                <h3 className="text-3xl font-light mt-4">
                  When moments captured every dreams crafted into beautiful reality
                </h3>
              </div>
              <div className="space-y-2 text-right">
                <p className="text-gray-400">Landscape</p>
                <p className="text-gray-400">Wildlife</p>
                <p className="text-gray-400">Architectural</p>
                <p className="text-gray-400">Portrait</p>
              </div>
            </div>
            <div className="mt-12">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Mountain landscape"
                width={1200}
                height={600}
                className="rounded-lg"
              />
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Chasing Clouds at Mont Blanc, Europe</h4>
                  <p className="text-sm text-gray-400">Mont Blanc, France</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-sm uppercase tracking-wider">2024</h2>
              <div className="flex justify-between items-end mt-4">
                <h3 className="text-3xl font-light">
                  Explore <span className="text-gray-500">the artistry and precision behind</span> our portfolio{" "}
                  <span className="text-gray-500">of timeless photography</span>
                </h3>
                <Button variant="outline" className="text-white border-white">
                  EXPLORE MORE <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Majestic Creatures of the African Savanna",
                  tags: ["Wildlife Portfolio", "Nature", "Africa"],
                },
                {
                  title: "A Temple's Serene Silhouette",
                  tags: ["Architectural", "Japan"],
                },
                {
                  title: "Moments Framed in Portraits",
                  tags: ["Portrait", "People"],
                },
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt={item.title}
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg p-6 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-4">{item.title}</h4>
                      <Button variant="outline" className="text-white border-white">
                        MORE DETAILS <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* qna*/}
        <Qna />
        {/* Footer */}
        <Footer />      <ThemeToggle />

      </div>
    </main>
  )
}

