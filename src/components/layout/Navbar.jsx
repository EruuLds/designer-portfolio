import Dropdown from '../ui/Dropdown'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faSquareLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useGlobalStateContext } from '../../hooks/useGlobalStateContext';

export default function Navbar() {
    const { isMobile } = useGlobalStateContext();
    const [showMenu, setShowMenu ] = useState(true);

    const handleCloseMenu = () => {
        if(isMobile)
        setShowMenu(false);
    }

    useEffect(() => {
        if(isMobile) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }, [isMobile])

    return (
        <nav>
            <div className="responsive-container grid grid-cols-[1fr_auto] sm:grid-cols-[auto_1fr] items-center gap-x-10">
                <a href="#">
                    <img
                        className="h-[2rem]"
                        src="/img/logo-reduced-colors.svg"
                        alt="Erhubey Ledesma - Logo"
                    />
                </a>

                {isMobile &&
                    <button className='cursor-pointer p-1 aspect-square button-secondary subtle-border rounded-[0.5rem]' onClick={() => setShowMenu(!showMenu)}>
                        <div className={`relative transition-all duration-500 ${showMenu ? 'rotate-180' : 'rotate-0'}`}>
                            <FontAwesomeIcon 
                                icon={faBars} 
                                size="xl"
                                className={`transition-all duration-300 ${showMenu ? 'opacity-0' : 'opacity-100'}`}
                            />
                            <FontAwesomeIcon 
                                icon={faChevronDown} 
                                size="xl" 
                                className={`absolute top-0 left-0 transition-all duration-300 ${showMenu ? 'opacity-100' : 'opacity-0'}`}
                            />
                        </div>
                    </button>
                }

                <div className='col-span-2 sm:col-span-1'>
                    <Dropdown isOpen={showMenu}>
                        <div className="flex flex-col justify-between items-center gap-x-10 gap-y-4 pt-4 sm:flex-row sm:pt-0">
                            <ul id="nav-menu" className="flex gap-4">
                                <li>
                                    <a href="#portfolio" onClick={handleCloseMenu}>Portafolio</a>
                                </li>
                                <li>
                                    <a href="#aboutMe" onClick={handleCloseMenu}>Sobre Mí</a>
                                </li>
                                <li>
                                    <a href="#contactMe" onClick={handleCloseMenu}>Contacto</a>
                                </li>
                            </ul>
                            <ul id="nav-menu" className="flex gap-4">
                                <li>
                                    <a href="mailto:erulds.digitalart@gmail.com">
                                        <FontAwesomeIcon icon={faSquareEnvelope} size="lg" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://api.whatsapp.com/send?phone=524621523479" target='_blank'>
                                        <FontAwesomeIcon icon={faSquareWhatsapp} size="lg" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/erulds/" target="_blank">
                                        <FontAwesomeIcon icon={faSquareLinkedin} size="lg" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </nav>
    );
}
