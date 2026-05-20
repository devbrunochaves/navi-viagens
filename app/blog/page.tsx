import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'

export const metadata: Metadata = {
  title: 'Blog | NAVI Viagens',
  description: 'Dicas de viagem, destinos, roteiros e inspiração para a sua próxima aventura.',
}

// ─── Placeholder data — será substituído por dados do Sanity ───
const posts = [
  {
    slug: 'melhores-destinos-lua-de-mel-2025',
    title: 'Os melhores destinos para lua de mel em 2025',
    excerpt: 'Descubra os roteiros mais românticos do mundo para tornar o momento mais especial do casal absolutamente inesquecível.',
    category: 'Lua de Mel',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80&auto=format&fit=crop',
    date: '15 Mai 2025',
    readTime: '5 min',
  },
  {
    slug: 'como-planejar-viagem-estados-unidos',
    title: 'Como planejar a viagem dos sonhos para os Estados Unidos',
    excerpt: 'Do visto americano aos parques temáticos de Orlando, um guia completo para quem vai pela primeira vez.',
    category: 'Dicas de Viagem',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80&auto=format&fit=crop',
    date: '8 Mai 2025',
    readTime: '7 min',
  },
  {
    slug: 'nordeste-brasileiro-guia-completo',
    title: 'Nordeste Brasileiro: o paraíso que você precisa conhecer',
    excerpt: 'Praias de areia branca, gastronomia única e o calor do povo nordestino. Conheça o melhor do Brasil.',
    category: 'Destinos Nacionais',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop',
    date: '2 Mai 2025',
    readTime: '4 min',
  },
  {
    slug: 'cruzeiros-mediterraneo-guia-iniciantes',
    title: 'Cruzeiros pelo Mediterrâneo: guia completo para iniciantes',
    excerpt: 'Tudo que você precisa saber antes de embarcar na aventura mais luxuosa e inesquecível do Mediterrâneo.',
    category: 'Cruzeiros',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80&auto=format&fit=crop',
    date: '25 Abr 2025',
    readTime: '6 min',
  },
  {
    slug: 'paris-com-criancas-dicas',
    title: 'Paris com crianças: dicas para uma viagem inesquecível em família',
    excerpt: 'A cidade do amor também é perfeita para toda a família. Confira as atrações imperdíveis para os pequenos.',
    category: 'Família',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80&auto=format&fit=crop',
    date: '18 Abr 2025',
    readTime: '5 min',
  },
  {
    slug: 'seguro-viagem-importancia',
    title: 'Seguro viagem: por que você não pode abrir mão desta proteção',
    excerpt: 'Entenda a importância do seguro viagem e como escolher o plano ideal para cada tipo de experiência.',
    category: 'Dicas de Viagem',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80&auto=format&fit=crop',
    date: '10 Abr 2025',
    readTime: '3 min',
  },
]

export default function BlogPage() {
  return (
    <>
      <FloatingElements />
      <Navbar />

      {/* ─── Hero do Blog ─── */}
      <section className="blog-hero">
        <div className="container blog-hero-content">
          <span className="label">Inspiração para viajar</span>
          <h1 className="heading-xl">Blog NAVI</h1>
          <p className="text-body">
            Dicas de destinos, roteiros, documentação e tudo que você precisa saber para viajar com tranquilidade e sofisticação.
          </p>
        </div>
      </section>

      {/* ─── Grid de Posts ─── */}
      <section className="blog-section">
        <div className="container">
          {/* TODO: Conectar ao Sanity — substituir `posts` por dados do CMS */}
          <div className="blog-grid">
            {posts.map(post => (
              <article key={post.slug} className="blog-card">
                <div className="blog-card-img">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="blog-card-category">{post.category}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span><i className="fas fa-calendar-alt" /> {post.date}</span>
                    <span><i className="fas fa-clock" /> {post.readTime} de leitura</span>
                  </div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  {/* TODO: Substituir por <Link href={`/blog/${post.slug}`}> quando conectar ao Sanity */}
                  <span className="blog-card-link">
                    Ler artigo <i className="fas fa-arrow-right" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Placeholder para próximos posts via Sanity */}
          <div className="blog-coming-soon" style={{ marginTop: 48 }}>
            <i className="fas fa-satellite-dish" />
            <p style={{ fontWeight: 600, marginBottom: 6 }}>Mais conteúdo em breve</p>
            <p style={{ fontSize: '.84rem' }}>
              Em breve esta seção será alimentada diretamente pelo Sanity CMS.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
