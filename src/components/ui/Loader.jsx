import { faCircleNotch} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReactDOM from "react-dom"
export default function Loader() {
    return ReactDOM.createPortal(
        <div className="fixed z-300 inset-0 bg-black/50 backdrop-blur-lg flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faCircleNotch} size="2xl" spin className="text-(--color-primary) mb-2"/>
            <p>Cargando</p>
        </div>, document.getElementById("loader")
    )
}
