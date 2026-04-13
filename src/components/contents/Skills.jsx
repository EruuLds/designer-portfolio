import IconsBundleCard from "../layout/IconsBundleCard";
import LabeledIcon from "../layout/LabeledIcon";
import SubsectionTitle from "../layout/SubsectionTitle";

export default function Skills() {
  return (
    <div>
      <p className="mb-3">
        Cuento con experiencia en el desarrollo de contenido multimedia enfocado a entornos digitales,
        incluyendo diseño para redes sociales, captura y edición de fotografía y video, así como
        producción de audio digital y motion graphics a nivel básico-intermedio. Además, integro
        conocimientos de diseño y desarrollo web utilizando HTML, CSS y JavaScript, lo que me permite
        crear soluciones visuales funcionales y adaptadas a plataformas digitales.
      </p>
      <p className="mb-8">
        Me caracterizo por mi responsabilidad, compromiso con la calidad y capacidad de adaptación
        a distintos flujos de trabajo, incluyendo entornos ágiles y colaborativos. Cuento con nivel
        de inglés B2.1, lo que me permite comprender y utilizar recursos técnicos en este idioma.
      </p>

      <div className="grid md:grid-cols-3 gap-x-3">
        <div>
          <SubsectionTitle text={'Dominio de herramientas'} />
          <p className="mb-8">
            Manejo de herramientas digitales orientadas al diseño gráfico, edición multimedia y desarrollo web.
            Amplia experiencia trabajando con software de la suite Adobe y tecnologías web para la producción de piezas
            gráficas, audiovisuales e interfaces funcionales.
          </p>
        </div>
        <div className="col-span-2">
          <div className="@container">
            <div className="grid @xl:grid-cols-2 @4xl:grid-cols-3 gap-3">
              <IconsBundleCard label={"Diseño e Ilustración"}>
                <LabeledIcon id={'illustrator'} />
                <LabeledIcon id={'affinity'} />
                <LabeledIcon id={'indesign'} />
              </IconsBundleCard>
              <IconsBundleCard label={"Video y Motion Graphics"}>
                <LabeledIcon id={'premiere'} />
                <LabeledIcon id={'aftereffects'} />
                <LabeledIcon id={'maya'} />
              </IconsBundleCard>
              <IconsBundleCard label={"Audio y Producción Musical"}>
                <LabeledIcon id={'logic'} />
                <LabeledIcon id={'ableton'} />
                <LabeledIcon id={'audition'} />
              </IconsBundleCard>
              <IconsBundleCard label={"Retoque Fotográfico"}>
                <LabeledIcon id={'photoshop'} />
                <LabeledIcon id={'lightroom'} />
              </IconsBundleCard>
              <div className="@xl:col-span-2">
                <IconsBundleCard label={"Diseño y Desarrollo Web"}>
                  <LabeledIcon id={'html'} />
                  <LabeledIcon id={'css'} />
                  <LabeledIcon id={'js'} />
                  <LabeledIcon id={'react'} />
                  <LabeledIcon id={'tailwind'} />
                  <LabeledIcon id={'firebase'} />
                </IconsBundleCard>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
