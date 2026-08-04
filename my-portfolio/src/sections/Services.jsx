import Card from '../components/Card';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { services } from '../data/services';

/* =====================
   Services Section
===================== */

/** Introduces the frontend services available to prospective clients. */
export default function Services() {
  return (
    <section id="services" className="border-y border-white/5 bg-[#090f1c] py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="03 / Services"
          title="Frontend support where it makes a difference."
          description="Whether you need a complete site or a focused improvement, the work stays purposeful and user-centered."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, description, Icon]) => (
            <ServiceCard key={title} title={title} description={description} Icon={Icon} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Displays a single portfolio service with a recognisable icon. */
function ServiceCard({ title, description, Icon }) {
  return (
    <Card className="group p-6">
      <div className="mb-8 inline-grid size-11 place-items-center rounded-md bg-blue/10 text-2xl text-blue transition-colors group-hover:bg-blue group-hover:text-white">
        <Icon />
      </div>
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </Card>
  );
}
