const servicios = [
  {
    glifo: "♆",
    nombre: "Amarres de Amor",
    promesa: "El regreso del ser amado",
    texto:
      "Trabajo de unión profunda para reavivar lo que el tiempo y el orgullo apagaron. Se ata el sentir, no la voluntad: la persona vuelve porque su corazón lo pide.",
    sello: "Ritual de luna menguante · 7 noches",
  },
  {
    glifo: "☿",
    nombre: "Limpia y Desamarre",
    promesa: "Corte de energías oscuras",
    texto:
      "Barrida con hierbas, huevo y sahumerio para arrancar envidias, brujería ajena y maldiciones heredadas. Sales liviano, como recién nacido.",
    sello: "Baño de ruda y romero · sal del mar",
  },
  {
    glifo: "♄",
    nombre: "Apertura de Caminos",
    promesa: "Dinero, trabajo y suerte",
    texto:
      "Se destraban los caminos cerrados del dinero y el destino. Atraemos prosperidad, contratos y oportunidades que estaban detenidas por mano oscura.",
    sello: "Velón de oro · miel y canela",
  },
  {
    glifo: "♀",
    nombre: "Endulzamiento",
    promesa: "Ablandar al de corazón duro",
    texto:
      "Para el jefe injusto, la suegra difícil o el amor frío. Dulcifica el trato y abre la palabra a tu favor sin que nadie note la mano.",
    sello: "Tarro de miel · 9 nombres",
  },
  {
    glifo: "☾",
    nombre: "Lectura del Tarot",
    promesa: "Ver lo que se esconde",
    texto:
      "Las cartas hablan de lo que callan: terceros, traiciones, futuros. Lectura honesta cara a cara o a distancia, sin adornos ni mentiras piadosas.",
    sello: "Tarot de Marsella · baraja española",
  },
  {
    glifo: "✦",
    nombre: "Protección y Escudo",
    promesa: "Coraza contra todo mal",
    texto:
      "Resguardo personal, del hogar y del negocio. Cierre energético, amuletos consagrados y sello de defensa para que ningún trabajo ajeno te toque.",
    sello: "Azabache · cuarzo negro · oración",
  },
];

const pasos = [
  {
    n: "I",
    titulo: "La Consulta",
    texto:
      "Cuéntame tu caso por mensaje o en persona. Leo tu energía y te digo con verdad si tu situación tiene solución y qué trabajo la mueve.",
  },
  {
    n: "II",
    titulo: "El Trabajo",
    texto:
      "Enciendo el velón con tu nombre. Durante las noches del ritual mantengo la fuerza encendida y te informo de cada señal que aparece.",
  },
  {
    n: "III",
    titulo: "El Resultado",
    texto:
      "Verás los cambios en días: una llamada, un reencuentro, una puerta que se abre. Acompañamiento hasta que el trabajo asiente del todo.",
  },
];

const testimonios = [
  {
    texto:
      "Mi esposo se había ido de la casa. A las dos semanas del trabajo volvió pidiendo perdón. No sé cómo lo hizo la Madre, pero funcionó.",
    autor: "Marisol R.",
    lugar: "Cali",
  },
  {
    texto:
      "Tenía el negocio cerrado por envidias. Después de la limpia entraron clientes como nunca. Estoy eternamente agradecida.",
    autor: "Don Hernán",
    lugar: "Medellín",
  },
  {
    texto:
      "La lectura me dijo cosas que nadie sabía. Me advirtió de una traición y tenía toda la razón. Una mujer de verdad.",
    autor: "Camila T.",
    lugar: "Bogotá",
  },
];

function Sigilo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      >
        <circle cx="100" cy="100" r="92" />
        <circle cx="100" cy="100" r="78" />
        <path d="M100 22 L150 150 L26 70 L174 70 L50 150 Z" />
        <circle cx="100" cy="100" r="40" strokeDasharray="2 6" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={100 + Math.cos(a) * 78}
              y1={100 + Math.sin(a) * 78}
              x2={100 + Math.cos(a) * 92}
              y2={100 + Math.sin(a) * 92}
            />
          );
        })}
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="grain relative flex flex-col flex-1 overflow-hidden">
      {/* resplandores de fondo */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-amethyst/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-blood/20 blur-[120px]" />
        <div className="absolute top-1/3 left-0 h-[24rem] w-[24rem] rounded-full bg-ember/10 blur-[120px]" />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#080407]/70 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-[88rem] items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <Sigilo className="h-9 w-9 text-ember flicker" />
            <span className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.25em] text-stone-100">
              El Séptimo Sello
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm uppercase tracking-widest text-stone-300 md:flex">
            <a href="#servicios" className="transition hover:text-ember">
              Servicios
            </a>
            <a href="#ritual" className="transition hover:text-ember">
              El Ritual
            </a>
            <a href="#testimonios" className="transition hover:text-ember">
              Testimonios
            </a>
          </div>
          <a
            href="#contacto"
            className="rounded-full border border-ember/40 bg-ember/10 px-5 py-2 text-xs uppercase tracking-widest text-ember transition hover:bg-ember/20"
          >
            Consultar
          </a>
        </nav>
      </header>

      <main className="flex flex-col">
        {/* HERO */}
        <section className="relative mx-auto flex w-full max-w-[88rem] flex-col items-center px-6 pt-24 pb-32 text-center">
          <Sigilo className="pulse-glow absolute top-10 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 text-ember/10 spin-slow" />

          <span className="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-stone-300">
            <span className="h-1.5 w-1.5 rounded-full bg-ember flicker" />
            Tradición ancestral · +30 años
          </span>

          <h1 className="relative z-10 max-w-5xl font-[family-name:var(--font-display)] text-6xl font-semibold leading-[1.05] tracking-tight text-stone-50 sm:text-7xl md:text-8xl">
            Donde la magia
            <span className="block bg-gradient-to-b from-ember via-amber-200 to-ember bg-clip-text text-transparent">
              se siente de verdad
            </span>
          </h1>

          <p className="relative z-10 mt-8 max-w-3xl font-[family-name:var(--font-body)] text-2xl leading-relaxed text-stone-200 sm:text-3xl">
            Amarres, limpias y trabajos de alta brujería para regresar al ser
            amado, romper la mala suerte y abrir tus caminos. Lo que otros
            prometen, aquí se{" "}
            <em className="font-semibold italic text-ember">cumple</em>.
          </p>

          <div className="relative z-10 mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="group relative flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blood via-[#a01a2c] to-blood px-9 text-sm font-semibold uppercase tracking-widest text-stone-100 shadow-[0_0_40px_-8px_rgba(122,18,32,0.8)] transition hover:shadow-[0_0_60px_-6px_rgba(184,134,47,0.6)]"
            >
              Pedir mi trabajo
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#servicios"
              className="flex h-14 items-center justify-center rounded-full border border-white/15 px-9 text-sm uppercase tracking-widest text-stone-300 transition hover:border-ember/50 hover:text-ember"
            >
              Ver los servicios
            </a>
          </div>

          <div className="relative z-10 mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-widest text-stone-400">
            <span>Discreción absoluta</span>
            <span className="h-3 w-px bg-white/10" />
            <span>Atención a distancia</span>
            <span className="h-3 w-px bg-white/10" />
            <span>Resultados garantizados*</span>
          </div>
        </section>

        {/* FRANJA DE CIFRAS */}
        <section className="border-y border-white/5 bg-ash/40">
          <div className="mx-auto grid w-full max-w-[88rem] grid-cols-2 divide-x divide-white/5 md:grid-cols-4">
            {[
              ["30+", "Años de oficio"],
              ["8.000+", "Trabajos realizados"],
              ["72h", "Primeras señales"],
              ["100%", "Discreto y reservado"],
            ].map(([cifra, label]) => (
              <div key={label} className="px-6 py-10 text-center">
                <div className="font-[family-name:var(--font-display)] text-3xl font-semibold text-ember md:text-4xl">
                  {cifra}
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-stone-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="mx-auto w-full max-w-[88rem] px-6 py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-ember">
              El altar
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold text-stone-50 md:text-6xl">
              Trabajos de la Casa
            </h2>
            <p className="mt-5 text-xl text-stone-300 md:text-2xl">
              Cada trabajo se prepara a mano, con tu nombre y tu intención. Nada
              en serie, nada al azar.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s) => (
              <article
                key={s.nombre}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 transition duration-500 hover:border-ember/40 hover:-translate-y-1"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-ember/0 blur-3xl transition duration-500 group-hover:bg-ember/20" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-ember/30 bg-ember/5 text-2xl text-ember">
                  {s.glifo}
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-rose-400">
                  {s.promesa}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-stone-50">
                  {s.nombre}
                </h3>
                <p className="mt-4 flex-1 text-xl leading-relaxed text-stone-300">
                  {s.texto}
                </p>
                <div className="mt-6 border-t border-white/5 pt-4 text-xs uppercase tracking-widest text-stone-400">
                  {s.sello}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* RITUAL / PROCESO */}
        <section
          id="ritual"
          className="relative border-y border-white/5 bg-gradient-to-b from-ash/60 to-transparent"
        >
          <div className="mx-auto w-full max-w-[88rem] px-6 py-28">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-ember">
                El proceso
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold text-stone-50 md:text-6xl">
                Cómo obra el trabajo
              </h2>
            </div>

            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {pasos.map((p) => (
                <div key={p.n} className="relative text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-ember/30 bg-[#0d070b] font-[family-name:var(--font-display)] text-3xl text-ember shadow-[0_0_30px_-10px_rgba(184,134,47,0.6)]">
                    {p.n}
                  </div>
                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl text-stone-50">
                    {p.titulo}
                  </h3>
                  <p className="mt-3 text-xl leading-relaxed text-stone-300">
                    {p.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section id="testimonios" className="mx-auto w-full max-w-[88rem] px-6 py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-ember">
              Voces
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold text-stone-50 md:text-6xl">
              Quienes ya creyeron
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonios.map((t) => (
              <figure
                key={t.autor}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8"
              >
                <div className="mb-4 text-ember" aria-hidden>
                  ★★★★★
                </div>
                <blockquote className="flex-1 font-[family-name:var(--font-body)] text-2xl italic leading-relaxed text-stone-200">
                  “{t.texto}”
                </blockquote>
                <figcaption className="mt-6 text-sm uppercase tracking-widest text-stone-400">
                  {t.autor} · <span className="text-stone-500">{t.lugar}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CTA / CONTACTO */}
        <section id="contacto" className="relative px-6 pb-28">
          <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-ember/20 bg-gradient-to-br from-amethyst/40 via-[#0d070b] to-blood/30 px-8 py-20 text-center">
            <div className="drift pointer-events-none absolute -top-10 left-10 h-40 w-40 rounded-full bg-ember/15 blur-3xl" />
            <Sigilo className="pulse-glow absolute -bottom-24 right-0 h-72 w-72 text-ember/10" />

            <h2 className="relative z-10 mx-auto max-w-2xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-tight text-stone-50 md:text-6xl">
              El primer trabajo empieza con tu nombre
            </h2>
            <p className="relative z-10 mx-auto mt-6 max-w-2xl text-xl text-stone-200 md:text-2xl">
              Escribe a la Madre Selene. La consulta inicial es reservada y sin
              compromiso. Ella te dirá con honestidad si tu caso tiene cura.
            </p>

            <div className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/000000000"
                className="flex h-14 items-center justify-center gap-3 rounded-full bg-ember px-9 text-sm font-semibold uppercase tracking-widest text-[#1a0c02] shadow-[0_0_50px_-10px_rgba(184,134,47,0.9)] transition hover:bg-amber-300"
              >
                Escribir por WhatsApp
              </a>
              <a
                href="mailto:consultas@madreselene.example"
                className="flex h-14 items-center justify-center rounded-full border border-white/20 px-9 text-sm uppercase tracking-widest text-stone-200 transition hover:border-ember/50 hover:text-ember"
              >
                Enviar correo
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER + AVISO */}
      <footer className="border-t border-white/5 bg-[#060305]">
        <div className="mx-auto w-full max-w-[88rem] px-6 py-14">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-3">
              <Sigilo className="h-8 w-8 text-ember/70" />
              <span className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.25em] text-stone-300">
                El Séptimo Sello
              </span>
            </div>
            <p className="text-sm text-stone-400">
              Atención presencial y a distancia · Toda Latinoamérica
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center text-xs leading-relaxed text-stone-400">
            <p className="mb-2 font-semibold uppercase tracking-widest text-stone-300">
              Aviso
            </p>
            Este sitio y sus servicios se ofrecen con fines de{" "}
            <span className="text-stone-300">
              entretenimiento, acompañamiento espiritual y bienestar personal
            </span>
            . Las prácticas aquí descritas pertenecen al ámbito de la fe, la
            tradición y la creencia; no constituyen, ni sustituyen, asesoría
            médica, psicológica, legal ni financiera. Ningún trabajo se realiza
            contra la voluntad de las personas y los resultados pueden variar
            según cada caso. (*) “Garantizado” se refiere a nuestro compromiso de
            acompañarte en el proceso, no a un resultado material asegurado. Al
            consultar, declaras ser mayor de edad y participar de forma libre y
            voluntaria.
          </div>

          <p className="mt-8 text-center text-xs uppercase tracking-widest text-stone-500">
            © {new Date().getFullYear()} El Séptimo Sello · Hecho con respeto a
            la tradición
          </p>
        </div>
      </footer>
    </div>
  );
}
