import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    nameKey: "project1Name",
    typeKey: "project1Type",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5hkjn3gPgJPRs7o7VcAr9nF5s0oqiaO8N2tHX903MFraKU-aHh5d8E5YpCf7LtJpN2hfgf2O1vyhTl4j2eMecKVB6h2kQoMTyYpA3AZeo2q1YxvWABkbx8yPsdLqWvl72MqsVz8ZZ7zZNk3ECTybS9NsVqS1rU4T40JFUaDCp5KPwglHYwcujNz4YXmFla8zbyyIhhztGNSObwkD4qCWEMEJciA7DrxPP3C1thmMYy_AuzwSthWfja-OyTvgFEpC9UkqIZppB-M03",
    alt: "Nova Studio Case Study",
    offset: false,
  },
  {
    nameKey: "project2Name",
    typeKey: "project2Type",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3-HqCUksC7wWeKAeplClR06VZTKx93suWU9TRT0lEnjcQoCldn_a7SDmDqqjHKa_7bb-_PRIA42eHQnT4Cak1ktwE8Ko5Zy8PdzgNKTMIOP4hQiiBrhrhA3nNxmXL5qa1U38LGVVwiGrE_kBx2ONS2N9vSQqJ4_IUUI6JwkoqoMI3zfhFfkDuMrvMjzFrdITOyUHZpuPcPI-l5_AocW9dbRd3IKlk1Eon73ibr7_ttwJ_kkmmjyA7lrESVwycwZZDoErxTNyOI4TO",
    alt: "Pulse Launch Case Study",
    offset: true,
  },
  {
    nameKey: "project3Name",
    typeKey: "project3Type",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH1M6NYoOaebEXbSEL9POoVLaQWFqAGko3MQdSndCxTEIKzTkQnVFmAVm-6t21cPbA_9X5Zu7t2ooWq3IvQQybCe6thIc5kKPdL-g8rej51Yss0fyoyRk-4jHWdrwGNnPeH4aygmv4As4OvbOq3Tx-RXV18Wy5LSkikaq2jcgI5sR4ITsKBm6jXLSWayYeQUJQAjsEgWHptKwbekypxS0fJqBAbHCNt2uCanjLaanAEEfEB95IUN0z3Kf_jbtfltW3XZI3ETawc5jy",
    alt: "Urban Cart Case Study",
    offset: false,
  },
];

export default async function Projects() {
  const t = await getTranslations();

  return (
    <section className="py-24 md:py-32 bg-sc-surface" id="proyectos">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-sc-on-surface">
            {t("Projects.title")}
          </h2>
          <a
            className="text-sc-green font-bold flex items-center gap-2 group"
            href="#"
          >
            {t("Projects.viewAll")}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.nameKey}
              className={`group cursor-pointer ${
                project.offset ? "translate-y-0 md:translate-y-12" : ""
              }`}
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 relative bg-sc-surface-mid">
                <Image
                  src={project.img}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out-expo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sc-surface via-transparent to-transparent opacity-60" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-2">
                {t(`Projects.${project.nameKey}`)}
              </h3>
              <p className="text-sc-on-surface-variant font-medium">
                {t(`Projects.${project.typeKey}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
