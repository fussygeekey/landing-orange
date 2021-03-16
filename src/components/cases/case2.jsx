// Images
import preview from './../../images/content/cases/SureHands/preview.jpg'
// Prototype's slides
import prototypeImage1 from './../../images/content/cases/SureHands/prototype-image1.svg'
import prototypeImage2 from './../../images/content/cases/SureHands/prototype-image2.svg'
// Adaptive images
import adaptiveSlideImage1 from './../../images/content/cases/SureHands/mock-up1.png'
import adaptiveSlideImage2 from './../../images/content/cases/SureHands/mock-up2.png'
// Design images
import designImage1 from './../../images/content/cases/SureHands/content-design-image1.jpg'
import designImage2 from './../../images/content/cases/SureHands/content-design-image2.jpg'



export default {
    // Preview
    previewImage: `url(${preview})`,
    heading: 'В надёжных руках',

    linkToOrigin: 'https://vrukah.com/',
    originLink: 'vrukah.com',

    // Targets
    city: 'Краснодар',
    dateOfPublication: '18.02.2018',

    targets: [
        'Разработка и программирование функционала сайта',
        'Внедрение стороннего кода на сайт',
        'Автоматизация работы сайта',
        'Генерация фотоконтента'
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
        '#E43949',
        '#3E414F',
    ],

    firstFontExample: 'Lorem Bold',
    secondFontExample: 'Lorem Italic',

    images: [
        adaptiveSlideImage1,
        adaptiveSlideImage2
    ],

    // Adaptive design
    designText: 'Следующая задача — адаптировать разработанный дизайн для мобильных устройств. Пользователь должен получить всю необходимую информацию, где бы он ни находился.',

    designImages: [
        designImage1,
        designImage2
    ],

    // Build
    buildText: 'Финальный этап разработки — сборка сайта. Грамотная и качественная. Наши программисты подогнали каждый винтик и продумали каждую строку кода, чтобы ресурс был надежным и стабильным.',

    // Footer
    tech: 'CMS Bitrix',
    feature: 'Адаптивность на всех устройствах',

    hours: '150 часов',
    humansValue: '6'
}