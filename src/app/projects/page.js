import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const projects = [
  {
    title: "E-commerce Website",
    description: "Built with Next.js and Stripe integration",
    tags: ["Next.js", "Tailwind CSS", "Stripe"]
  },
  {
    title: "Task Management App",
    description: "React application with Firebase backend",
    tags: ["React", "Firebase", "Material UI"]
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Projects</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
              <p className="text-gray-600 my-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}