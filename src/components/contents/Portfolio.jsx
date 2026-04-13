import smGallery from "../../data/smGallery.json" with { type: "json" };
import artGallery from "../../data/artGallery.json" with { type: "json" };
import Gallery from "../layout/Gallery";
import SubsectionTitle from "../layout/SubsectionTitle";
import Badge from "../ui/Badge";

export default function Portfolio() {
    return (
        <div className="flex flex-col justify-center">
            <SubsectionTitle text={'Diseño Gráfico para Redes Sociales'} />
            <p className="mb-4">
                Gráficos optimizados para publicación en redes sociales y otras plataformas digitales.
                Estos son algunos ejemplos realizados para empresas pertenecientes a diversos sectores.
            </p>
            <div className="flex flex-wrap gap-1 mb-8">
                <Badge id={'illustrator'} />
                <Badge id={'photoshop'} />
            </div>
            <div className="mb-16 panel-b">
                <Gallery images={smGallery} maxCols={3}/>
            </div>

            <SubsectionTitle text={'Video para redes sociales y propósito general'} />
            <p className="mb-4">
                Videos diseñados para redes sociales y plataformas digitales, enfocados en captar la
                atención y generar impacto visual. Estos son algunos ejemplos de contenido para campañas,
                reels, anuncios y formatos adaptados para distintas plataformas como Instagram, TikTok y YouTube.
            </p>
            <div className="flex flex-wrap gap-1 mb-8">
                <Badge id={'premiere'} />
                <Badge id={'aftereffects'} />
            </div>
            <div className="grid md:grid-cols-7 gap-3 mb-16">
                <div className="panel-a h-fit md:col-span-3">
                    <h4 className="text-center my-3">Formato horizontal</h4>
                    <div className="panel-b grid gap-3">
                        <iframe
                            className="w-full rounded-[0.5rem] aspect-16/9"
                            src="https://www.youtube-nocookie.com/embed/n-BYFkUyeTg"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            className="w-full rounded-[0.5rem] aspect-16/9"
                            src="https://www.youtube-nocookie.com/embed/_A3_EhRzS6A"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="panel-a md:col-span-4">
                    <h4 className="text-center my-3">TikTok/Reels</h4>
                    <div className="panel-b grid grid-cols-2 gap-3">
                        <iframe
                            className="w-full rounded-[0.5rem] aspect-9/16"
                            src="https://www.youtube-nocookie.com/embed/Jgw1ZkVTONo"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            className="w-full rounded-[0.5rem] aspect-9/16"
                            src="https://www.youtube-nocookie.com/embed/Bm7uKnmR1pA"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            <SubsectionTitle text={'Exploración Creativa'} />
            <p className="mb-4">
                Este es un pequeño espacio dedicado a proyectos personales enfocados en la exploración creativa 
                y el desarrollo de habilidades en distintas áreas del diseño y la producción digital. Estos 
                trabajos reflejan mi interés por experimentar con nuevas ideas, técnicas y estilos fuera de un 
                contexto comercial.
            </p>

            <div className="grid grid gap-3">
                <div className="panel-a h-fit grid gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                        <h4 className="me-4 ms-3">Ilustración Digital</h4>
                        <div className="flex flex-wrap gap-1">
                            <Badge id={'illustrator'} />
                            <Badge id={'affinity'} />
                            <Badge id={'photoshop'} />
                        </div>
                    </div>
                    <div className="panel-b">
                        <Gallery images={artGallery} maxCols={3} />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                    <div className="panel-a h-fit grid gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                            <h4 className="me-4 ms-3">Animación 2D y 3D</h4>
                            <div className="flex flex-wrap gap-1">
                                <Badge id={'illustrator'} />
                                <Badge id={'aftereffects'} />
                                <Badge id={'maya'} />
                            </div>
                        </div>
                        <div className="panel-b grid gap-3">
                            <iframe
                                className="w-full rounded-[0.5rem] aspect-16/9"
                                src="https://www.youtube.com/embed/OxJ7XISZRSA?si=JyVaDK2RX7XvfSxV"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <iframe
                                className="w-full rounded-[0.5rem] aspect-16/9"
                                src="https://www.youtube.com/embed/3ou-dwuUOgY?si=KIEb6MfzTMblYtO4"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <iframe
                                className="w-full rounded-[0.5rem] aspect-16/9"
                                src="https://www.youtube.com/embed/HwFQBVOGBqI?si=RFp0gqf2s3tyM5HL"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    <div className="panel-a h-fit grid gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                            <h4 className="me-4 ms-3">Captura y edición de Audio Digital</h4>
                            <div className="flex flex-wrap gap-1">
                                <Badge id={'logic'} />
                                <Badge id={'audition'} />
                                <Badge id={'ableton'} />
                            </div>
                        </div>
                        <div className="panel-b grid gap-3">
                            <p>
                                Sonido y edición de audio digital para "Die Mortis", un documental sobre la tradición del desfile 
                                y festival del día de muertos en Salamanca, Guanajuato.
                            </p>
                            <iframe
                                className="w-full rounded-[0.5rem] aspect-16/9"
                                src="https://www.youtube.com/embed/DfWY_YNd_ss?si=vKfSmVvocF9g32uf"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="panel-b grid gap-3">
                            <p>
                                Grabación, mezcla y producción del sountrack para "Die Mortis".
                            </p>
                            <div className="grid sm:grid-cols-2 gap-3">
                                <iframe 
                                    className="w-full rounded-[0.5rem] aspect-square" 
                                    allow="autoplay; encrypted-media" 
                                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/945724183&color=%23ffc933&show_user=true&visual=true">
                                </iframe>
                                <iframe 
                                    className="w-full rounded-[0.5rem] aspect-square" 
                                    allow="autoplay; encrypted-media" 
                                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/945724165&color=%23ffc933&show_user=true&visual=true">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
