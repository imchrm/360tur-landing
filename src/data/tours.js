// Carousel data for the Portfolio section.
// Each entry describes a Marzipano tour exported into `public/tours/<id>/`.
//
// Поля:
//   id          — slug папки в public/tours/
//   embedSrc    — путь к index.html тура (без ведущего слеша; префиксуется BASE_URL)
//   previewSrc  — путь к превью-картинке (typically tiles/<sceneId>/preview.jpg)
//   titleKey    — ключ в локалях (tours.<id>.title)
//   typeKey     — ключ отрасли в services.industries[].icon (real_estate, hotel,
//                 restaurant, museum, school, storefront) — лейблы уже локализованы
//
// Чтобы добавить новый тур: положить экспорт Marzipano в public/tours/<id>/,
// вписать запись в массив ниже и добавить tours.<id>.title в ru.js / uz.js / en.js.

export const TOURS = [
  {
    id: 'neoclassicalbedroom',
    embedSrc: 'tours/neoclassicalbedroom/index.html',
    previewSrc: 'tours/neoclassicalbedroom/tiles/0-bedroom-left/preview.jpg',
    titleKey: 'tours.neoclassicalbedroom.title',
    typeKey: 'real_estate',
  },
   {
    id: 'appartment_1',
    embedSrc: 'tours/appartment_1/index.html',
    previewSrc: 'tours/appartment_1/tiles/0-hall/preview.jpg',
    titleKey: 'tours.appartment_1.title',
    typeKey: 'real_estate',
  },
   {
    id: 'neo_2',
    embedSrc: 'tours/neo_2/index.html',
    previewSrc: 'tours/neo_2/tiles/0-bedroom-left/preview.jpg',
    titleKey: 'tours.neo_2.title',
    typeKey: 'real_estate',
  },
  // TODO: ещё 2 тура планируются — добавить, когда экспорты будут в public/tours/
];
