import { Feed } from '../Feed'
import { Head } from '../Helper/Head'

export function Home() {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do site dogs, com o feed de fotos" />
      <Feed />
    </section>
  )
}
