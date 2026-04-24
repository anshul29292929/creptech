import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  {
    id: 1,
    name: "PhysioCity Academy of Rehabilitation",
    location: "India",
    category: "Rehab Education & Training",
    image: "/physiocity.png",
    instagram: "https://www.instagram.com/physiocity/",
    website: "https://physiocity.org",
    initials: "PA",
    color: "#0ea5e9",
  },
  {
    id: 2,
    name: "VIPC Conference 2026",
    location: "International",
    category: "Grand Summit & Conference",
    image: "/vipc.png",
    instagram: "https://www.instagram.com/vipc3.0/",
    website: "https://vipc.physiocity.org",
    initials: "VC",
    color: "#f59e0b",
  },
  {
    id: 3,
    name: "Divine Touch Physio & Rehab",
    location: "Lucknow",
    category: "Physiotherapy & Rehabilitation",
    image: "/dtp.png",
    instagram: "https://www.instagram.com/divinetouchphysio/",
    website: "https://divinetouchphysio.in",
    initials: "DT",
    color: "#3b82f6",
  },
];

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ClientCard = ({ client, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="client-card group"
      style={{ '--accent': client.color }}
    >
      {/* Glow */}
      <div className="client-card__glow" />

      {/* Image — clicking redirects to client website */}
      <a
        href={client.website}
        target="_blank"
        rel="noopener noreferrer"
        className="client-card__img-link"
        aria-label={`Visit ${client.name} website`}
      >
        <div className="client-card__img-wrap">
          <img
            src={client.image}
            alt={client.name}
            className="client-card__img"
            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
          />
          {/* Fallback initials */}
          <div className="client-card__initials" style={{ display: 'none' }}>
            {client.initials}
          </div>
          {/* Overlay */}
          <div className="client-card__img-overlay" />
          {/* Visit hint on hover */}
          <div className="client-card__visit-hint">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Visit Site
          </div>
        </div>
      </a>

      {/* Content */}
      <div className="client-card__body">
        <div className="client-card__badge">{client.category}</div>

        <h3 className="client-card__name">{client.name}</h3>

        <div className="client-card__location">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {client.location}
        </div>

        <div className="client-card__links">
          <a
            href={client.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="client-card__insta"
            aria-label={`${client.name} on Instagram`}
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>
          <a
            href={client.website}
            target="_blank"
            rel="noopener noreferrer"
            className="client-card__website"
            aria-label={`${client.name} website`}
          >
            <GlobeIcon />
            <span>Website</span>
          </a>
        </div>
      </div>

      <style>{`
        .client-card {
          position: relative;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.07);
          background: #050a14;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.4s, transform 0.4s, box-shadow 0.4s;
          cursor: default;
        }
        .client-card:hover {
          border-color: color-mix(in srgb, var(--accent) 40%, transparent);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px -12px color-mix(in srgb, var(--accent) 20%, transparent);
        }
        .client-card__glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 180px;
          height: 180px;
          background: var(--accent);
          opacity: 0.06;
          border-radius: 50%;
          filter: blur(60px);
          transition: opacity 0.4s;
          pointer-events: none;
        }
        .client-card:hover .client-card__glow {
          opacity: 0.14;
        }
        .client-card__img-wrap {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }
        .client-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .client-card:hover .client-card__img {
          transform: scale(1.06);
        }
        .client-card__initials {
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 900;
          color: var(--accent);
          background: #0a1020;
        }
        .client-card__img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #050a14 0%, transparent 60%);
        }
        .client-card__body {
          padding: 20px 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          position: relative;
          z-index: 10;
        }
        .client-card__badge {
          display: inline-flex;
          align-items: center;
          padding: 3px 10px;
          border-radius: 999px;
          border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
          color: var(--accent);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          width: fit-content;
          background: color-mix(in srgb, var(--accent) 8%, transparent);
        }
        .client-card__name {
          font-size: 1.05rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.3;
          letter-spacing: -0.01em;
          margin: 0;
          transition: color 0.3s;
        }
        .client-card:hover .client-card__name {
          color: var(--accent);
        }
        .client-card__location {
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255,255,255,0.4);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .client-card__links {
          display: flex;
          flex-direction: row;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 8px;
        }
        .client-card__insta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.6);
          font-size: 0.78rem;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: all 0.3s;
          flex: 1;
          justify-content: center;
        }
        .client-card__insta:hover {
          background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          border-color: transparent;
          color: #fff;
          transform: scale(1.03);
        }
        .client-card__website {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.6);
          font-size: 0.78rem;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: all 0.3s;
          flex: 1;
          justify-content: center;
        }
        .client-card__website:hover {
          background: color-mix(in srgb, var(--accent) 90%, transparent);
          border-color: transparent;
          color: #fff;
          transform: scale(1.03);
        }
      `}</style>
    </motion.div>
  );
};

export default function ClientsSection() {
  return (
    <section className="clients-section">
      <div className="clients-section__inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="clients-section__header"
        >
          <div className="clients-section__pill">Our Clients</div>
          <h2 className="clients-section__title">
            Brands That <span className="clients-section__title--accent">Trust Us</span>
          </h2>
          <p className="clients-section__desc">
            From healthcare innovators to international conferences — we engineer digital excellence for every domain.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="clients-section__grid">
          {clients.map((client, i) => (
            <ClientCard key={client.id} client={client} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .clients-section {
          position: relative;
          padding: 100px 24px;
          background: #030712;
          overflow: hidden;
        }
        .clients-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(59,130,246,0.4), transparent);
        }
        .clients-section__inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .clients-section__header {
          text-align: center;
          margin-bottom: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .clients-section__pill {
          display: inline-flex;
          align-items: center;
          padding: 5px 16px;
          border-radius: 999px;
          border: 1px solid rgba(59,130,246,0.25);
          background: rgba(59,130,246,0.06);
          color: rgba(59,130,246,0.8);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }
        .clients-section__title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 0;
        }
        .clients-section__title--accent {
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .clients-section__desc {
          max-width: 520px;
          color: rgba(255,255,255,0.45);
          font-size: 1rem;
          line-height: 1.7;
          margin: 0;
        }
        .clients-section__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .clients-section__grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .clients-section__grid {
            grid-template-columns: 1fr;
          }
          .clients-section {
            padding: 60px 16px;
          }
        }
      `}</style>
    </section>
  );
}
