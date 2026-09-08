export function OfficeLocationSection() {
  return (
    <section className="office-location-section" aria-label="Ubicación de Afinitive">
      <div className="office-location-map">
        <span className="office-location-block office-location-block--one" aria-hidden="true" />
        <span className="office-location-block office-location-block--two" aria-hidden="true" />
        <span className="office-location-block office-location-block--three" aria-hidden="true" />
        <span className="office-location-block office-location-block--four" aria-hidden="true" />
        <span className="office-location-block office-location-block--five" aria-hidden="true" />
        <span className="office-location-block office-location-block--six" aria-hidden="true" />
        <span className="office-location-street office-location-street--camino" aria-hidden="true">
          Av. Camino Real
        </span>
        <span className="office-location-street office-location-street--lizardo" aria-hidden="true">
          Calle Lizardo Alzamora Este
        </span>
        <span className="office-location-street office-location-street--conquistadores" aria-hidden="true">
          Av. Los Conquistadores
        </span>
        <a
          className="office-location-pin"
          href="https://www.google.com/maps/search/?api=1&query=Camino+Real+1236%2C+San+Isidro%2C+Lima%2C+Peru"
          aria-label="Abrir Camino Real 1236 en Google Maps"
          rel="noreferrer"
          target="_blank"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
        </a>

        <address className="office-location-card">
          <span className="office-location-card-icon" aria-hidden="true">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </span>
          <span className="office-location-copy">
            <strong>Camino Real 1236</strong>
            <span>San Isidro, Lima · Perú</span>
          </span>
        </address>
      </div>
    </section>
  );
}
