import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubsectionTitle from "../layout/SubsectionTitle";
import LinkButton from "../ui/LinkButton";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ContactMe() {
    return (
        <div className="h-[40vh] flex flex-col justify-center">
            <SubsectionTitle text={'Gracias por llegar hasta aquí :)'} />
            <div className="panel-a m-auto max-w-full w-fit flex flex-col gap-2 text-center">
                <p className="my-4 mx-3 text-pretty text-lg">
                    Si te gustó mi trabajo y deseas conocer más, pongo a tu disposición mis medios de contacto:
                </p>
                <div className="flex flex-wrap justify-center panel-b w-fit gap-3">
                    <LinkButton href={'https://api.whatsapp.com/send?phone=524621523479'} targetBlank >
                        <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
                        +52 462 152 3479
                    </LinkButton>
                    <LinkButton href={'mailto:erulds.digitalart@gmail.com'} >
                        <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                        erulds.digitalart@gmail.com
                    </LinkButton>
                    <LinkButton href={'https://www.linkedin.com/in/erulds/'} targetBlank >
                        <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                        Hugo Erhubey Quintana Ledesma
                    </LinkButton>
                </div>
            </div>
        </div>
    )
}
