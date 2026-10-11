# wp-headless-nextjs-starter

![stack: Next.js 14](https://img.shields.io/badge/stack--Next.js%2014-0d9488?style=flat-square) ![stack: WordPress REST API](https://img.shields.io/badge/stack--WordPress%20REST%20API-0d9488?style=flat-square) ![stack: TypeScript](https://img.shields.io/badge/stack--TypeScript-0d9488?style=flat-square)
![IA: asistido](https://img.shields.io/badge/IA--asistido-6366f1?style=flat-square)

Starter headless: consume la WP REST API desde Next.js con revalidacion por tiempo.

> **Transparencia sobre IA:** este proyecto se desarrollo con asistencia de inteligencia artificial (generacion de codigo, revision y documentacion). El codigo fue leido, ejecutado y probado manualmente antes de publicarse. No declara clientes, metricas ni resultados que no puedan verificarse.

## Problema que resuelve

Separar el panel de contenido (WordPress) de la capa de presentacion, evitando acoplar el frontend al tema PHP.

## Solucion implementada

Cliente de la WP REST API con revalidacion por tiempo y pagina del App Router que resuelve los datos en el servidor.

### Funcionalidades principales

- Cliente tipado de la WP REST API
- Revalidacion ISR (600 s)
- Variables de entorno para la URL del CMS
- Render en servidor

## Stack

- Next.js 14
- WordPress REST API
- TypeScript

## Estructura

```
lib/wp.ts   # cliente REST
app/page.tsx  # listado servidor
.env.example
```

## Puesta en marcha

```bash
cp .env.example .env   # apuntar WP_URL a tu WordPress
npm install
npm run dev
```

## Complejidad del proyecto

**Nivel: Intermedio** — Integracion entre dos sistemas (CMS y frontend) con contrato HTTP y cache.

El nivel describe la complejidad tecnica del proyecto, no el grado de dominio de quien lo escribio.

## Despliegue

Construible como estatico solo si apunta a un WordPress accesible; sin CMS no hay datos que mostrar.  
El codigo fuente si esta disponible en este repositorio.

## Autor

**Luis Felipe Zuniga Leon** — Desarrollador de software asistido por IA

- GitHub: <https://github.com/Luisf2020>

---

_Proyecto de portafolio. El desarrollo se apoyo en herramientas de IA bajo revision tecnica humana._
