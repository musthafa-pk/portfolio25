import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TypeWriter from '../components/TypeWriter.js';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Mohamed Musthafa</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            <TypeWriter
              phrases={[
                "Flutter Developer",
                "App Enthusiast",
                "Web Developer",
              ]}
              typingSpeed={80}    // Faster typing
              deletingSpeed={30}  // Faster deleting
              pauseDuration={2000} // Longer pause between phrases
            />
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            View My Work
          </button>
        </section>
      </main>

    

      <Footer />
    </div>
  )
}