import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nuestra Historia | Afinitive",
};

export default function NuestraHistoriaPage() {
  return (
    <main className="history-page">
      <header className="history-page-hero">
        <div className="history-page-wrap">
          <Link className="history-page-back" href="/#historia">
            <span aria-hidden="true">←</span>
            Volver a Afinitive
          </Link>
          <span className="history-page-eyebrow">HISTORIA DE AFINITIVE</span>
          <h1>Nuestra Historia</h1>
        </div>
      </header>

      <section className="history-page-content" aria-label="Historia de Afinitive">
        <div className="history-page-wrap history-page-timeline">
          <article className="history-page-entry">
            <div className="history-page-marker" aria-hidden="true">
              <span>2018</span>
            </div>
            <div className="history-page-copy">
              <p>
                <strong>AFINITIVE</strong> nace en el año 2018 cuando un grupo
                de economistas de la Universidad del Pacífico con experiencia
                en banca, finanzas corporativas e intermediación bursátil
                deciden incursionar en el mundo financiero con una propuesta
                distinta, enfocada en ofrecer un servicio de asesoría objetivo e
                integral, de arquitectura abierta y <em>tailor-made</em> para
                patrimonios desatendidos por la oferta masiva en el mercado.
              </p>
              <p>
                Su experiencia docente en universidades privadas, maestrías en
                finanzas y en la Bolsa de Valores de Lima, fue una ventaja
                perfecta para comunicar a sus clientes potenciales la
                importancia de contar con una asesoría patrimonial en sus vidas,
                tal y como una consulta médica, legal o tributaria.
              </p>
              <p>
                Utilizaron su formación académica, experiencia docente y años
                de trabajo en el sector de banca, finanzas corporativas y
                mercado de capitales para brindar soluciones a medida de las
                necesidades y objetivos de cada uno de sus clientes. Utilizando
                los mejores productos del mercado de valores como bonos, papeles
                comerciales, certificados de depósito, acciones, ETF&apos;s entre
                otros para armar carteras con activos que cotizaban en la Bolsa
                de Valores de Lima (BVL) y la Bolsa de Valores de Nueva York
                (NYSE).
              </p>
              <p>
                Iniciaron su servicio de asesoría con entidades privadas de alto
                patrimonio como universidades privadas, ONGs, fondos
                institucionales y <em>family office</em>, utilizando a
                Sociedades Agentes de Bolsa (S.A.B.), custodios nacionales e
                internacionales (CAVALI, Pershing LLC) y otros proveedores de
                primer nivel para implementar soluciones eficientes para las
                diferentes necesidades de sus clientes.
              </p>
            </div>
          </article>

          <article className="history-page-entry">
            <div className="history-page-marker" aria-hidden="true">
              <span>2021</span>
            </div>
            <div className="history-page-copy">
              <p>
                <strong>AFINITIVE</strong> amplía su gama de proveedores y, por
                tanto, de productos y servicios. No se limita al sector
                financiero y mercado de valores, sino que utiliza a fiduciarios
                regulados por la Superintendencia del Mercado de Valores (SMV) y
                la Superintendencia de Banca y Seguros (SBS), los cuales
                permiten proponer soluciones más eficientes e integrales, tanto
                desde el punto de vista de retorno y riesgo como de su eficiencia
                tributaria de cada inversión diseñada.
              </p>
              <p>
                Estas estructuras permiten unir a inversionistas excedentarios
                con empresas sin liquidez pero con activos que podían servir de
                garantía para los primeros. Es así que, mediante estructuras
                sólidas y sofisticadas, y sobre todo transparentes, se titulizan
                activos y emiten instrumentos de renta fija en un mercado
                extrabursátil al que tienen acceso los inversionistas que
                consiguen más rentabilidad y estructura para mitigar su riesgo de
                inversión.
              </p>
              <p>
                Es así que <strong>AFINITIVE</strong> se convierte en uno de los
                pioneros en dar servicios de asesoría utilizando este tipo de
                estructuras sofisticadas con rendimientos de hasta dos dígitos.
              </p>
            </div>
          </article>

          <article className="history-page-entry">
            <div className="history-page-marker" aria-hidden="true">
              <span>2025</span>
            </div>
            <div className="history-page-copy">
              <p>
                Continuando el crecimiento y el enfoque en brindar un servicio
                de excelencia, se comenzó a integrar otra suerte de alternativas
                y actores en las soluciones ofrecidas, haciendo que estas sean
                cada vez más eficientes en variables como retorno, riesgo,
                plazo, garantías, monedas y otras variables relevantes en toda
                inversión.
              </p>
              <p>
                Paralelamente se difunde la cultura financiera, la importancia
                del ahorro y la inversión. Se dictan talleres gratuitos en
                colegios, universidades, empresas y mediante eventos a personas
                naturales. De esta manera se logra empoderar a las personas con
                una mayor cultura financiera y de inversiones, destacando la
                importancia de la inversión como mecanismo para contrarrestar la
                inflación y generar ingresos pasivos.
              </p>
              <p>
                A fines del año 2025 y con la intención de hacer posible la
                inversión fuera del país, se estructuran soluciones con
                eficiencia tributaria para lograr el acceso a la inversión en el
                exterior en mecanismos regulados y tributariamente eficientes. A
                la fecha, sigue innovando con la misión de empoderar a los
                inversionistas actuales y potenciales con información,
                transparencia y educación financiera de alto valor.
              </p>
            </div>
          </article>

          <aside className="history-page-essence">
            Nuestra esencia es brindar un servicio profesional y de calidad,
            eligiendo los mejores proveedores del mercado, con soluciones a
            medida cada vez más eficientes bajo una disciplina institucional con
            la flexibilidad de una boutique de inversiones; cuidando la
            transparencia y objetividad en cada transacción.
          </aside>
        </div>
      </section>
    </main>
  );
}
