import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDialog } from "../../../app/infraestructure/modal-system/dialogs/useDialog";

export default function Dialog({
    id,
    size,
    headingText,
    bodyComponent,
    footer,
    footerAlignment,
    closeButton = true,
    onRequestClose,
    isVisible,
    locked
}) {
    const { closeDialog, removeDialog } = useDialog();

    const sizeMap = {
        sm: "w-lg",
        md: "w-3xl",
        lg: "w-7xl"
    };

    const footerAlignmentMap = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end"
    }

    const handleClose = () => {
        if (locked) return;

        if (onRequestClose) {
            onRequestClose();
        } else {
            closeDialog(id);
        }
    };

    return (
        <div
            className={`
                fixed inset-0 z-[200]
                bg-black/20
                transition-opacity duration-300
                ${isVisible ? "opacity-100" : "opacity-0"}
            `}
            onClick={handleClose}
            onTransitionEnd={() => {
                if (!isVisible) removeDialog(id);
            }}
        >
            {/* Overlay Container */}
            <div className="responsive-container h-dvh w-full flex justify-center items-center py-6">

                {/* Modal Window */}
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`
                        relative
                        bg-white
                        shadow-xl
                        rounded-3xl
                        overflow-hidden
                        max-w-full
                        max-h-[calc(100dvh-3rem)]
                        flex flex-col
                        ${sizeMap[size] ?? "w-fit"}
                        transition-all duration-300 standard-ease
                        ${isVisible ? "scale-100" : "scale-95"}
                    `}
                >
                    {/* HEADER */}
                    {(headingText || closeButton) && (
                        <div className="flex justify-between items-center p-4 shrink-0">
                            <h3 className="uppercase">{headingText}</h3>
                            {closeButton && (
                                <span
                                    className="p-2"
                                    onClick={handleClose}
                                >
                                    <FontAwesomeIcon icon={faXmark} size="lg" />
                                </span>
                            )}
                        </div>
                    )}

                    {/* BODY (SCROLLABLE) */}
                    <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar px-4 py-2">
                        {bodyComponent}
                    </div>

                    {/* FOOTER */}
                    {footer && (
                        <div className={`flex gap-4 p-4 shrink-0 ${footerAlignmentMap[footerAlignment] ?? footerAlignmentMap['end']}`}>
                            {footer}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
