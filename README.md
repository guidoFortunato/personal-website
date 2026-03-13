# Landing – Registro de clientes

Landing en modo oscuro para captar consultas de clientes: formulario de proyecto, internacionalización (ES/EN) y persistencia en Supabase.

## Características

- **Formulario de consulta**: nombre, email, confirmación de email, tipo de proyecto (select) y descripción. Validación con Zod y React Hook Form.
- **Supabase**: envío a la tabla `client_leads`. Detección de email duplicado (error 23505 / 409) con toast específico.
- **Internacionalización**: [next-intl](https://next-intl.dev/) con rutas por locale (`/` y `/en`). Dropdown de idioma en el header.
- **UI**: fondo con partículas, card con efecto glass, toasts con Sonner, componentes [shadcn/ui](https://ui.shadcn.com/).
- **Responsive**: layout adaptable, safe area en móvil, scroll en landscape.

## Stack

| Área        | Tecnología |
|------------|------------|
| Framework  | Next.js 16 (App Router), React 19 |
| Estilos    | Tailwind CSS 4 |
| Formulario | React Hook Form, Zod, @hookform/resolvers |
| Backend    | Supabase (`@supabase/supabase-js`) |
| i18n       | next-intl |
| UI         | shadcn/ui, Lucide, Sonner |

## Requisitos

- Node.js 18+
- pnpm

## Instalación

```bash
git clone <repo>
cd website
pnpm install
```

## Variables de entorno

Crear `.env.local` en la raíz:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=tu_publishable_key
```

Las claves se obtienen en el dashboard de Supabase (Settings → API).

## Scripts

```bash
pnpm dev    # Desarrollo (http://localhost:3000)
pnpm build  # Build de producción
pnpm start  # Servidor de producción
pnpm lint   # ESLint
```

## Estructura del proyecto

```
├── app/
│   ├── [locale]/          # Rutas con idioma (es, en)
│   │   ├── layout.tsx     # Layout con NextIntlClientProvider y Header
│   │   └── page.tsx       # Página principal con formulario
│   ├── layout.tsx         # Root layout (html, body, Toaster)
│   └── globals.css
├── components/
│   ├── header.tsx         # Header con selector de idioma
│   ├── waitlist-form.tsx  # Formulario de registro de clientes
│   ├── lazy-particles.tsx
│   └── ui/                # shadcn (button, sonner)
├── i18n/
│   ├── routing.ts        # Locales (es, en) y defaultLocale
│   ├── request.ts        # getRequestConfig para next-intl
│   └── navigation.ts     # Link, useRouter, etc. con locale
├── lib/
│   ├── supabase.ts       # Cliente Supabase (browser)
│   └── utils.ts
├── messages/
│   ├── es.json
│   └── en.json
├── middleware.ts         # next-intl middleware (locale)
└── next.config.ts        # Plugin next-intl
```

## Base de datos (Supabase)

La tabla `client_leads` tiene:

- `id` (uuid, PK)
- `full_name`, `email` (UNIQUE), `project_type`, `project_description`
- `created_at`

RLS está habilitado con política de `INSERT` para el rol anónimo. Los duplicados por email se detectan por código de error (23505 o 409) y se muestra el mensaje correspondiente en el toast.

## Licencia

MIT.
