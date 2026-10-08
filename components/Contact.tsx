import Photo from "./Photo";
import { Button } from "./Buttons";
import { MailIcon, PinIcon } from "./Icons";
import { contact } from "./data";
import { Reveal } from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-cream-deep">
      <div className="absolute inset-y-0 left-0 w-full md:w-[48%] group">
        <Photo
          src="/images/contact-banner.jpg"
          alt="A hilltop monastery at golden hour"
          sizes="(min-width: 768px) 48vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-cream-deep pointer-events-none" />
        <div className="absolute inset-0 bg-cream-deep/70 md:hidden pointer-events-none" />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-8 px-8 py-14 md:grid-cols-[1fr_1.1fr_0.8fr] lg:px-12">
        <div className="hidden md:block" />
        <Reveal direction="up" delay={0.2}>
          <div>
            <p className="eyebrow !text-muted">Field Correspondence</p>
            <h2 className="display mt-3 text-[30px] leading-tight text-ink">
              Contact The Wanderers
            </h2>
            <p className="mt-3 max-w-[330px] text-[12px] leading-relaxed text-muted">
              Have questions about the Silk Route, rail logistics, overland borders,
              or crafting your own slow travel itinerary?
            </p>
            <Button href={`mailto:${contact.email}`} className="mt-5 !px-5 !py-2.5 !text-[12px]">
              Send a Dispatch
            </Button>
          </div>
        </Reveal>

        <ul className="space-y-5 border-line md:border-l md:pl-8">
          <Reveal delay={0.4} direction="left">
            <li className="flex items-center gap-3 text-[12px] text-ink">
              <PinIcon className="h-4 w-4 text-gold" />
              {contact.location}
            </li>
          </Reveal>
          <Reveal delay={0.5} direction="left">
            <li className="flex items-center gap-3 text-[12px] text-ink">
              <MailIcon className="h-4 w-4 text-gold" />
              <a href={`mailto:${contact.email}`} className="hover:text-gold">
                {contact.email}
              </a>
            </li>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
