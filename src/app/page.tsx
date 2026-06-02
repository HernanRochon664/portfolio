import { Hero } from "@/components/home/Hero"
import { FeaturedProjects } from "@/components/home/FeaturedProjects"
import { Skills } from "@/components/home/Skills"
import { LabPreview } from "@/components/home/LabPreview"

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <LabPreview />
    </>
  )
}
