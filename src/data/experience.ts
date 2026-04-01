export const EXPERIENCE_EN = [
    {
        id: 1,
        title: "Full Stack Developer",
        company: "Freelance Services",
        location: "Remote",
        date: "Aug 2025 - Present",
        description: [
        {
            name: "Project 1: Instagram Customer Support Chatbot (WATI — production with real users)",
                desc: [
                    "Designed and implemented a rule-based chatbot on WATI (Instagram), automating 60–70% of incoming customer queries within the first month of deployment.",
                    "Analyzed historical chat data to identify friction patterns and drop-off points, restructuring conversation flows based on real user behavior.",
                    "Architected the solution as a data pipeline: ingestion → validation → automated response — ensuring traceability and consistency across all interactions.",
                    "Monitored system performance via resolution rate and response time metrics, iterating on response logic continuously based on production data.",
                    "Delivered a working flow in under one week; expanded the system over the following month based on client feedback and live usage patterns.",
                ]
        },
        {
            name: "Project 2: Class Booking Platform (full-stack greenfield build)",
                desc: [
                    "Sole engineer and client-facing technical lead: gathered requirements directly, translated business needs into a relational data model, and owned all architectural decisions independently.",
                    "Designed a normalized PostgreSQL schema (Supabase) from scratch, applying indexing strategies and data modeling principles for performance and scalability.",
                    "Built secure authentication flows and data validation pipelines, ensuring consistent user data handling across React frontend and Node.js backend.",
                    "Managed CI/CD pipelines and production monitoring end-to-end.",
                    "Client reference available upon request."
                ]
        }],
        current: true
    },
    {
        id: 2,
        title: "Full Stack Developer",
        company: "Consulting Company",
        location: "Hybrid",
        date: "Jan 2025 - May 2025",
        description: [
           {
                name: "Project 1: ATS Platform (HR SaaS product — greenfield development for a consulting client)",
                desc: [
                    "Sole developer on a greenfield ATS module: built end-to-end job posting ingestion via CSV-to-database pipelines, including schema design, data normalization, and validation logic in PostgreSQL.",
                    "Designed and implemented a full psychometric evaluation module: form rendering, candidate response capture, and structured persistence — owning backend, frontend (React), and database layers entirely.",
                    "Worked from scratch with only existing modules as reference, no documentation, no handoffs — reverse-engineered domain logic independently."
                ]
           },
           {
                name: "Project 2: Medical Affiliate System (1,000+ active users, 64-table MySQL database)",
                desc: [
                    "Inherited a legacy system with 6+ months of backlog, no documentation, and a tech lead unable to provide technical guidance; completed 10–11 of 24 high-priority user stories in under 6 weeks.",
                    "Navigated a 64-table MySQL schema with no ERD or documentation, mapping relationships and business logic through code archaeology and direct database analysis using MySQL Workbench and DBeaver.",
                    "Identified and consciously scoped a critical permissions gap (API-level over-permissioning): documented the risk and deferred remediation to stay within sprint scope — a deliberate technical trade-off, not an oversight.",
                    "Built a data reporting module translating business requirements into SQL queries against the legacy schema with no prior context.",
                    "Stack: React, React Redux, Node.js (no framework), MySQL. Frontend and backend with full ownership across both layers."
                ]
           }
        ],
        current: false
    },
]

export const EXPERIENCE_ES = [
    {
        id: 1,
        title: "Desarrollador Full Stack",
        company: "Freelance",
        location: "Remoto",
        date: "Ago 2025 - Dec 2025",
        description: [
            {
                name: "Proyecto 1: Chatbot de Atención al Cliente en Instagram (WATI – Producción)",
                desc: [
                    "Diseñé e implementé chatbot basado en reglas en WATI (Instagram), automatizando el 60–70% de las consultas entrantes en el primer mes de despliegue.",
                    "Analicé datos históricos de conversaciones para identificar fricciones y puntos de abandono; reestructuré flujos conversacionales en base a comportamiento real de usuarios.",
                    "Arquitecturé la solución como pipeline de datos: ingesta, validación y respuesta automatizada, garantizando trazabilidad y consistencia.",
                    "Monitoreé el desempeño mediante métricas de resolución y tiempo de respuesta, iterando continuamente la lógica en producción.",
                    "Entregué flujo funcional en menos de una semana; expandí el sistema durante el mes siguiente en base a retroalimentación del cliente."
                ]
            },
            {
                name: "Proyecto 2: Plataforma de Reserva de Clases – Desarrollo Greenfield Full Stack",
                desc: [
                    "Único ingeniero y referente técnico ante el cliente: levanté requerimientos, diseñé el modelo de datos relacional y tomé todas las decisiones arquitectónicas de forma independiente.",
                    "Diseñé esquema PostgreSQL normalizado en Supabase desde cero, aplicando indexación y modelado de datos para rendimiento y escalabilidad.",
                    "Implementé autenticación segura y pipelines de validación de datos entre frontend React y backend Node.js.",
                    "Gestioné pipelines CI/CD y monitoreo en producción end-to-end. Referencia del cliente disponible a solicitud."
                ]
            }
        ],
        current: false
    },
    {
        id: 2,
        title: "Desarrollador Full Stack",
        company: "Empresa de Consultoría",
        location: "Híbrido",
        date: "Ene 2025 - May 2025",
        description: [
            {
                name: "Proyecto 1: Plataforma ATS – Desarrollo Greenfield (SaaS de RRHH)",
                desc: [
                    "Desarrollador único de módulo ATS greenfield: ingesta de ofertas laborales mediante pipelines CSV a base de datos, diseño de esquema, normalización y validación en PostgreSQL.",
                    "Diseñé e implementé módulo completo de evaluación psicométrica: formularios, captura de respuestas y persistencia estructurada con propiedad total de backend, frontend (React) y base de datos.",
                    "Trabajé desde cero sin documentación ni traspasos; reconstruí lógica de negocio de forma independiente a partir de módulos existentes."
                ]
            },
            {
                name: "Proyecto 2: Sistema Médico de Afiliados – Sistema Legado (1,000+ usuarios activos)",
                desc: [
                    "Recibí sistema legado con 6 meses de backlog y sin documentación; completé 10 de 24 historias de usuario de alta prioridad en menos de 6 semanas.",
                    "Analicé esquema MySQL de 64 tablas sin ERD ni documentación, mapeando relaciones y lógica de negocio mediante MySQL Workbench y DBeaver.",
                    "Identifiqué brecha crítica de permisos a nivel de API; documenté el riesgo y diferí la corrección de forma deliberada para mantener el alcance del sprint.",
                    "Construí módulo de reportería de datos traduciendo requerimientos de negocio en consultas SQL sobre esquema legado sin contexto previo.",
                    "Stack: React, React Redux, Node.js, MySQL. Propiedad total de frontend y backend."
                ]
            }
        ],
        current: false
    },
]

