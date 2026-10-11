# wp-headless-nextjs-starter

Starter headless: consume la WP REST API desde Next.js con revalidacion por tiempo.

> Proyecto de portafolio de Luis Felipe Zuniga Leon. Desarrollado con asistencia de IA
> (generacion de codigo, revision y documentacion); el codigo fue revisado y probado manualmente.
> No declara clientes, metricas ni resultados no verificables.

## Stack

- Next.js 14
- WordPress REST API
- TypeScript

## Como ejecutar

```bash
cp .env.example .env   # apuntar WP_URL a tu WordPress
npm install
npm run dev
```

## Estructura

```
lib/wp.ts   # cliente REST
app/page.tsx  # listado servidor
.env.example
```

## Estado

Muestra tecnica de portafolio. Sin datos de produccion.
