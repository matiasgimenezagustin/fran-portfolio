import { MdAvTimer,MdDevices } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { LuMonitorDown } from 'react-icons/lu';
import { IoExtensionPuzzle} from 'react-icons/io5'

export const servicesTypes = [
    {
        title: 'Velocidad',
        content: 'Mis proyectos se cargan rápidamente y ofrecen una experiencia fluida y sin demoras a los usuarios.',
        id: 1,
        Icon: MdAvTimer
    },
    {
        title: 'Claridad',
        content: 'Mis proyectos tienen un diseño limpio y una estructura lógica que facilita la navegación y la comprensión de los contenidos.',
        id: 2,
        Icon: HiOutlineLightBulb
    },
    {
        title: 'Consistencia',
        content: 'Mis proyectos mantienen una identidad visual clara y unas normas de diseño que aseguran una armonía y una cohesión entre las diferentes secciones y funcionalidades.',
        id: 3,
        Icon: IoExtensionPuzzle
    },
    {
        title: 'Adaptabilidad',
        content: 'Mis proyectos se adaptan al tamaño y la orientación de la pantalla, aprovechando el espacio disponible y optimizando la disposición de los elementos para cada caso.',
        id: 4,
        Icon: MdDevices
    },
    {
        title: 'Accesibilidad',
        content: 'Mis proyectos cumplen con los estándares de accesibilidad web y ofrecen opciones de personalización para mejorar la usabilidad y la inclusión de todos los usuarios.',
        id: 5,
        Icon: LuMonitorDown
    }
]

export const servicesTypesEn = [
    {
        title: 'Speed',
        content: 'My projects load quickly and provide a smooth, delay-free experience to users.',
        id: 1,
        Icon: MdAvTimer
    },
    {
        title: 'Clarity',
        content: 'My projects have a clean design and a logical structure that facilitates navigation and understanding of the content.',
        id: 2,
        Icon: HiOutlineLightBulb
    },
    {
        title: 'Consistency',
        content: 'My projects maintain a clear visual identity and design standards that ensure harmony and cohesion among different sections and functionalities.',
        id: 3,
        Icon: IoExtensionPuzzle
    },
    {
        title: 'Adaptability',
        content: 'My projects adapt to screen size and orientation, utilizing available space and optimizing the arrangement of elements for each case.',
        id: 4,
        Icon: MdDevices
    },
    {
        title: 'Accessibility',
        content: 'My projects comply with web accessibility standards and offer customization options to enhance usability and inclusion for all users.',
        id: 5,
        Icon: LuMonitorDown
    }
];
