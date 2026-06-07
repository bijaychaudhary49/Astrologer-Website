import { GiCrystalBall, GiMoonOrbit, GiBookCover, GiMeditation } from "react-icons/gi";
import { BsStars, BsAward, BsCheckCircle } from "react-icons/bs";
import { FaOm } from "react-icons/fa";
import { Link } from "react-router-dom";

const milestones = [
  { year: "2009", title: "Began Jyotish Studies", description: "Started formal training in Vedic astrology under renowned Guru in Varanasi." },
  { year: "2012", title: "Certified Jyotish Acharya", description: "Completed advanced certification in Parashari and Jaimini systems." },
  { year: "2015", title: "10,000th Consultation", description: "Reached milestone of 10,000 personal consultations with 98% satisfaction rate." },
  { year: "2018", title: "International Recognition", description: "Invited to speak at International Vedic Astrology Conference in New Delhi." },
  { year: "2022", title: "Online Platform Launch", description: "Expanded services online to serve devotees across Nepal and India." },
  { year: "2025", title: "Continuing the Journey", description: "Continuing to serve thousands with authentic Vedic wisdom and compassion." },
];

const values = [
  { icon: FaOm, title: "Authentic Vedic Tradition", description: "Every consultation is rooted in classical Jyotish Shastra texts and time-tested methods." },
  { icon: BsCheckCircle, title: "Accuracy & Integrity", description: "We provide honest readings without fear-mongering or unnecessary upselling of remedies." },
  { icon: GiMeditation, title: "Compassionate Guidance", description: "Every individual receives empathetic, personalized attention regardless of their background." },
  { icon: GiBookCover, title: "Continuous Learning", description: "Our Guruji continually deepens his knowledge through research and spiritual practice." },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* ═══ HERO ═══ */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-royal-purple/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-royal-purple/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-royal-purple tracking-widest uppercase flex items-center gap-2">
                <BsStars /> About JyotishGuru
              </span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
                A Life Dedicated to{" "}
                <span className="text-royal-purple">Cosmic Wisdom</span>
              </h1>
              <p className="text-lg text-secondary leading-relaxed mb-6">
                For over 15 years, Guruji has been interpreting the celestial
                language of the stars to help individuals understand their life
                purpose, overcome challenges, and embrace their cosmic destiny.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface rounded p-4 border border-theme">
                  <p className="text-2xl font-bold text-royal-purple font-heading">15+</p>
                  <p className="text-sm text-secondary">Years Experience</p>
                </div>
                <div className="bg-surface rounded p-4 border border-theme">
                  <p className="text-2xl font-bold text-royal-purple font-heading">10K+</p>
                  <p className="text-sm text-secondary">Consultations</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-80 rounded-2xl bg-gradient-to-br from-cosmic-navy to-dark-indigo flex items-center justify-center shadow-theme-lg overflow-hidden border border-royal-purple/20">
                  <div className="text-center">
                    <GiCrystalBall className="text-royal-purple text-8xl mx-auto mb-4 opacity-90" />
                    <p className="text-royal-purple font-heading text-2xl font-bold">Guruji</p>
                    <p className="text-soft-ivory/60 text-sm mt-1">Jyotish Acharya</p>
                    <div className="flex items-center justify-center gap-1 mt-3">
                      <BsAward className="text-royal-purple" />
                      <span className="text-xs text-royal-purple/80">Certified Vedic Astrologer</span>
                    </div>
                  </div>
                </div>
                <GiMoonOrbit className="absolute -top-3 -right-3 text-royal-purple text-3xl animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BIOGRAPHY ═══ */}
      <section className="py-20 bg-surface" id="biography">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-royal-purple tracking-widest uppercase">
              The Journey
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-3">
              From Student to Master
            </h2>
          </div>

          <div className="prose prose-lg mx-auto space-y-6">
            <p className="text-secondary leading-relaxed">
              Born into a family with deep roots in the Vedic tradition, Guruji's
              journey into astrology began at a young age. Growing up in Nepal, he
              was surrounded by the rich tapestry of Hindu spiritual practices and
              developed a natural curiosity about the celestial influences on human
              life.
            </p>
            <p className="text-secondary leading-relaxed">
              At the age of 18, he traveled to Varanasi — the ancient seat of
              Vedic learning — to study under renowned Jyotish masters. For five
              years, he immersed himself in the classical texts: Brihat Parashara
              Hora Shastra, Brihat Jataka, Saravali, and Phaladeepika, gaining
              mastery over both Parashari and Jaimini systems of prediction.
            </p>
            <p className="text-secondary leading-relaxed">
              Returning to Nepal, Guruji began serving the community with
              authentic Vedic astrology consultations. His approach combines the
              mathematical precision of classical Jyotish with the intuitive
              wisdom gained through years of spiritual practice. He believes that
              astrology is not about creating fear, but about empowering
              individuals with knowledge and practical remedies.
            </p>
            <p className="text-secondary leading-relaxed">
              Today, Guruji has served over 10,000 individuals across Nepal and
              India, helping them navigate major life decisions — from marriage and
              career choices to health concerns and spiritual growth. His
              commitment to accuracy, integrity, and compassion has earned him the
              trust and respect of thousands of families.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="py-20 bg-primary" id="timeline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-royal-purple tracking-widest uppercase">
              Milestones
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-3">
              Journey Through the Years
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-royal-purple via-royal-purple to-royal-purple" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-royal-purple border-2 border-primary z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-sm font-bold text-royal-purple">
                      {m.year}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-primary mt-1">
                      {m.title}
                    </h3>
                    <p className="text-sm text-secondary mt-1">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-20 bg-surface" id="values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-royal-purple tracking-widest uppercase">
              Our Philosophy
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-3">
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-primary rounded-2xl border border-theme p-6 text-center shadow-theme hover:shadow-theme-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded bg-gradient-to-br from-royal-purple/20 to-royal-purple/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <v.icon className="text-royal-purple text-2xl" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER / STAY IN COSMIC ALIGNMENT ═══ */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-6">
              Stay in Cosmic Alignment
            </h2>
            <p className="text-lg text-secondary mb-12">
              Connect with Guruji for personalized Vedic astrology guidance.
              Receive exclusive insights directly in your inbox.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-lg mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="w-full bg-transparent border-0 border-b border-theme py-3 px-2 text-base focus:ring-0 focus:outline-none focus:border-royal-purple transition-colors placeholder:text-muted text-primary text-center sm:text-left"
                placeholder="Email Address"
                required
                type="email"
              />
              <button className="bg-cosmic-navy text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest whitespace-nowrap border-2 border-cosmic-navy btn-dwc btn-dwc-fill-light hover:text-cosmic-navy w-full sm:w-auto">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
