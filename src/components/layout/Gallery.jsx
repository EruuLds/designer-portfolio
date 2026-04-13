import ReactDOM from "react-dom"
import { faChevronLeft, faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import Button from "../ui/Button";

export default function Gallery({ images = [{ src: "", alt: "" }], maxCols = 5 }) {
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [lightboxIsVisible, setLightboxIsVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openLightbox = (item) => {
        setLightboxIsOpen(true);
        setCurrentImage(item);
        requestAnimationFrame(showLightBox)
    }

    const closeLightBox = () => {
        setLightboxIsOpen(false);
        setCurrentImage(null);
    }

    const showLightBox = () => {
        setLightboxIsVisible(true);
    }

    const hideLightbox = () => {
        setLightboxIsVisible(false);
    }

    const nextImg = () => {
        if (currentImage < images.length - 1) {
            setCurrentImage(prev => prev + 1)
        } else {
            setCurrentImage(0);
        }
    }

    const prevImg = () => {
        if (currentImage > 0) {
            setCurrentImage(prev => prev - 1)
        } else {
            setCurrentImage(images.length - 1);
        }
    }

    return (
        <>
            <div className="@container">
                <div className={`
                    gap-3 *:mb-3
                    ${maxCols >= 2 ? 'columns-2' : ''} 
                    ${maxCols >= 3 ? '@md:columns-3' : ''} 
                    ${maxCols >= 4 ? '@xl:columns-4' : ''} 
                    ${maxCols >= 5 ? '@3xl:columns-5' : ''} 
                `}>
                    {images?.map((img, i) => (
                        <img
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            onClick={() => openLightbox(i)}
                            className="w-full rounded-[0.5rem] transition-transform duration-300 cursor-pointer hover:scale-102"
                        />
                    ))}
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
                    <div className="absolute z-150 top-0 right-0 p-3" onClick={e => e.stopPropagation()} >
                        <Button
                            variant={'secondary'}
                            small
                            onClick={hideLightbox}
                        >
                            <FontAwesomeIcon icon={faXmark} size="lg" />
                        </Button>
                    </div>
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
                            items-center"
                        >
                            <div className="relative max-w-full max-h-full rounded-[0.5rem] overflow-hidden">
                                <img
                                    src={images[currentImage].src}
                                    alt={images[currentImage].alt}
                                    onClick={e => e.stopPropagation()}
                                    height={2000}
                                    className="w-full h-full"
                                />
                                <div className="absolute inset-0 flex items-end transition-opacity duration-300 opacity-30 hover:opacity-100" onClick={e => e.stopPropagation()}>
                                    <p className="p-4 w-full text-center bg-black/75 ">{images[currentImage].alt}</p>
                                </div>
                            </div>

                            <div className="absolute left-0 p-3" onClick={e => e.stopPropagation()} >
                                <Button
                                    variant={'secondary'}
                                    small
                                    onClick={prevImg}
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} size="xl" />
                                </Button>
                            </div>
                            <div className="absolute right-0 p-3 right-0" onClick={e => e.stopPropagation()} >
                                <Button
                                    variant={'secondary'}
                                    small
                                    onClick={nextImg}
                                >
                                    <FontAwesomeIcon icon={faChevronRight} size="xl" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>, document.getElementById("lightbox")
            )}
        </>
    )
}
