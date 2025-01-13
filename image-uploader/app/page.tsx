import Header from './components/Header'
import Footer from './components/Footer'
import ImageUploadForm from './components/ImageUploadForm'
import ImageDisplay from './components/ImageDisplay'

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <ImageUploadForm />
            </div>
            <div className="w-full md:w-1/2">
              <ImageDisplay />
            </div>
          </div>
        </main>
        <Footer />
      </div>
  )
}
