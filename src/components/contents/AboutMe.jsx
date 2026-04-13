import LinkButton from "../ui/LinkButton";
import Button from "../ui/Button";
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBezierCurve, faFileArrowDown, faFileLines, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function AboutMe() {
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [lightboxIsVisible, setLightboxIsVisible] = useState(false);

    const openLightbox = (item) => {
        setLightboxIsOpen(true);
        requestAnimationFrame(showLightBox)
    }

    const closeLightBox = () => {
        setLightboxIsOpen(false);
    }

    const showLightBox = () => {
        setLightboxIsVisible(true);
    }

    const hideLightbox = () => {
        setLightboxIsVisible(false);
    }

    return (
        <>
            <div className="panel-a grid sm:grid-cols-[1fr_auto] gap-2">
                <div className="max-w-full h-full">
                    <img
                        className="min-w-75 w-full h-full rounded-[1.25rem] object-cover subtle-border"
                        src="/img/photo.jpg"
                        alt="Fotografía de Erhubey Ledesma"
                    />
                </div>
                <div className="flex flex-col justify-between panel-b">
                    <p>Hola, mi nombre es</p>
                    <h3 className="mb-4">Erhubey Ledesma</h3>
                    <p className="mb-3">
                        Diseñador multimedia con experiencia en creación de contenido visual para redes sociales,
                        incluyendo diseño de imágenes, reels, video, y fotografía. He trabajado con cuentas
                        institucionales y marcas comerciales desarrollando materiales para campañas digitales.
                    </p>
                    <p className="mb-4">
                        Con enfoque en evolución hacia diseño UI/UX y desarrollo frontend, integrando conocimientos
                        de programación y diseño de interfaces digitales. Rápida adaptación y capacidad de traducir
                        ideas en soluciones visuales.
                    </p>
                    <div className="flex gap-3">
                        <LinkButton variant={"primary"} href={'#portfolio'} >
                            <FontAwesomeIcon icon={faBezierCurve} className="me-2" />
                            Portafolio
                        </LinkButton>
                        <Button variant={"secondary"} onClick={openLightbox}>
                            <FontAwesomeIcon icon={faFileLines} className="me-1" />
                            CV
                        </Button>
                    </div>
                </div>
            </div>

            {lightboxIsOpen && ReactDOM.createPortal(
                <div
                    className={`
                                    fixed
                                    inset-0 
                                    bg-black/30 
                                    z-100 
                                    transition-all
                                    duration-500
                                    ${lightboxIsVisible
                            ? 'opacity-100 backdrop-blur-md'
                            : 'opacity-0'
                        }
                                `}
                    onClick={hideLightbox}
                    onTransitionEnd={!lightboxIsVisible ? closeLightBox : () => { }}
                >
                    <div
                        className={`
                                        responsive-container 
                                        py-10
                                        h-full 
                                        w-full 
                                        transition-translate 
                                        duration-500 
                                        ${lightboxIsVisible
                                ? 'translate-y-0'
                                : 'translate-y-8'
                            }`}>
                        <div className="
                                        relative
                                        h-full 
                                        w-full 
                                        flex 
                                        flex-col 
                                        justify-center 
                                        items-center
                                        rounded-[0.5rem]
                                        overflow-hidden
                                        "
                        >
                            <div className="relative w-full h-full flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
                                {/*-------------------------------------------------------*/}
                                {/* BODY (SCROLLABLE) */}
                                <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar rounded-[1.25rem]">
                                    <img src="/img/cv.jpg" alt="CV" className="w-full rounded-[1.25rem]"  />
                                </div>

                                {/* FOOTER */}
                                <div className={`absolute bottom-0 w-full flex justify-center sm:justify-end gap-4 p-3`} >
                                    <Button variant={'secondary'} onClick={hideLightbox}>
                                        Volver
                                    </Button>
                                    <LinkButton variant={'primary'} href={'/docs/ErhubeyLedesma_CV.pdf'} download >
                                        <FontAwesomeIcon icon={faFileArrowDown} className="me-1"/>
                                        Descargar PDF
                                    </LinkButton>
                                </div>
                                {/*-------------------------------------------------------*/}
                            </div>
                        </div>
                    </div>
                </div>, document.getElementById("lightbox")
            )}
        </>
    );
}
