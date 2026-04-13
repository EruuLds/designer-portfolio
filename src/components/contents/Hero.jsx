import Silk from "../decorative/Silk";
import GradientText from "../decorative/GradientText";
import LinkButton from "../ui/LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBezierCurve, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
    return (
        <header className="relative h-svh w-full flex flex-col justify-center items-center">
            <div className="absolute w-full h-full z-[0]">
                <Silk />
            </div>
            <div className="responsive-container text-center z-[10]">
                <h1 className="text-6xl">Erhubey Ledesma</h1>
                <GradientText
                    colors={["#FFC933", "#FFEA73", "#FFC933"]}
                    
                    className="mb-8"
                >
                    <p className="text-4xl font-semibold text-balance">
                        Diseñador Multimedia
                    </p>
                </GradientText>
                <p className="text-xl mb-8 text-balance">
                    Diseño visual y multimedia enfocado en crear contenido atractivo para entornos digitales.
                </p>
                <p className="text-sm mb-8 text-balance">
                    RRSS • Branding • Multimedia • UI/UX • Web
                </p>
                <div className="flex justify-center gap-3">
                    <LinkButton href='#portfolio'>
                        <FontAwesomeIcon icon={faBezierCurve} className="me-2" />
                        Ver portafolio
                    </LinkButton>
                    <LinkButton variant={"secondary"} href="#contactMe">
                        <FontAwesomeIcon icon={faUser} className="me-1" />
                        Contacto
                    </LinkButton>
                </div>
            </div>
        </header>
    );
}
