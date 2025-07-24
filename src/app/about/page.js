import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function About() {
  const skills = ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js']
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Bio</h2>
            <p className="text-gray-700">
              I'm a passionate developer with 3+ years of experience building web applications.
              Specializing in modern JavaScript frameworks and responsive design.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}