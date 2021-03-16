// Images
import preview from './../../images/content/cases/PANH/PANH-preview.png'
import styleImage from './../../images/content/cases/PANH/content-style-image.png'
import designImage from './../../images/content/cases/PANH/content-design-image.jpg'
import { Form } from 'formik'
// Prototype's slides
import prototypeImage1 from './../../images/content/cases/PANH/prototype-image1.jpg'
import prototypeImage2 from './../../images/content/cases/PANH/prototype-image2.jpg'
// Adaptive images
import adaptiveSlideImage from './../../images/content/cases/PANH/content-style-image.png'
// Design images
import designSlideImage from './../../images/content/cases/PANH/content-design-image.jpg'



export default {
    // Preview
    previewImage: `url(${preview})`,
    heading: 'Panh Helicopters',

    linkToOrigin: 'https://panh.ru/',
    originLink: 'panh.ru',

    // Targets
    city: 'Краснодар',
    dateOfPublication: '25.06.2020',

    targets: [
        'Оказание позитивного влияния корпоративную культуру',
        'Повышение узнаваемости',
        'Развитие бизнеса в социальных сетях',
        'Пывышение прибыли',
        'Увеличение количества посетителей из поисковых систем',
        'Повышение конверсии'
    ],

    // Proptyping
    prototypesText1: 'Следом за аналитической частью проекта были созданы прототипы страниц еще будущего сайта.',
    prototypesText2: 'С их помощью нам удалось пройти путь потенциального посетителя сайта и довести интуитивную структуру сайта до логического завершения.',
    prototypesText3: 'Формируя «дружелюбный» интерфейс страниц, мы отталкивались от философии самой компании и, конечно, от требований поисковых систем.',
    slides: [
        prototypeImage1,
        prototypeImage2
    ],

    // Style
    colors: [
        '#EDB238',
        '#5F6C74',
        '#212121'
    ],

    firstFontExample: 'Ubuntu Bold',
    secondFontExample: 'Open Sans',

    images: [
        adaptiveSlideImage,
        adaptiveSlideImage,
        adaptiveSlideImage,
    ],

    // Adaptive design
    designText: 'Следующая задача — адаптировать разработанный дизайн для мобильных устройств. Пользователь должен получить всю необходимую информацию, где бы он ни находился.',

    designImages: [
        designSlideImage,
        designSlideImage,
        designSlideImage
    ],

    // Build
    buildText: 'Финальный этап разработки — сборка сайта. Грамотная и качественная. Наши программисты подогнали каждый винтик и продумали каждую строку кода, чтобы ресурс был надежным и стабильным.',

    // Footer
    tech: 'CMS ModX',
    feature: 'Адаптивность на всех устройствах',

    hours: '180 часов',
    humansValue: '5'
}