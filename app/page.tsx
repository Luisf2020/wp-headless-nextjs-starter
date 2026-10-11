import { fetchPosts } from '../lib/wp';

export const revalidate = 600;

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <main style={{ maxWidth: 720, margin: '3rem auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Contenido de WordPress (headless)</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <a href={`/${p.slug}`} dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }} />
          </li>
        ))}
      </ul>
    </main>
  );
}
