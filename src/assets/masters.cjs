exports.seed = function (knex) {
  const mastersData = [
    {
      name: "Канье Петров",
      experience: 7,
      image: "/assets/img-1.jpg",
      resume:
        "Меня зовут Канье Петров, и уже 7 лет я посвящаю свою жизнь искусству татуировки. \nЗа это время я успел не только отточить технику, но и найти собственный стиль, понять, что для меня значит татуировка и почему я продолжаю вдохновляться этой работой каждый день. Татуировка — это не просто профессия, а способ самовыражения и диалог между мастером и клиентом. \nМеня вдохновляет, когда человек выходит из студии не только с красивым рисунком, но и с чувством, что он стал немного другим — более уверенным, свободным или цельным. \nТатуировка — это навсегда, и я делаю всё, чтобы мои работы радовали вас долгие годы. Буду рад помочь вам воплотить ваши идеи в жизнь!\nЯ работаю со стилями: реализм, орнаментал, минимализм и black & grey",
      gallery: JSON.stringify([
        "/assets/img-1.jpg",
        "/assets/img-1.jpg",
        "/assets/img-1.jpg",
        "/assets/img-1.jpg",
      ]),
    },
    {
      name: "Фар Куад",
      experience: 3,
      image: "/assets/img-2.jpg",
      resume: "Резюме Фар Куада: ляляляляя",
      gallery: JSON.stringify([
        "/assets/img-2.jpg",
        "/assets/img-2.jpg",
        "/assets/img-2.jpg",
        "/assets/img-2.jpg",
      ]),
    },
    {
      name: "Марио Марьев",
      experience: 20,
      image: "/assets/img-3.jpg",
      resume: "mariooo",
      gallery: JSON.stringify([
        "/assets/img-3.jpg",
        "/assets/img-3.jpg",
        "/assets/img-3.jpg",
        "/assets/img-3.jpg",
      ]),
    },
    {
      name: "Петр Котов",
      experience: 2,
      image: "/assets/img-4.jpg",
      resume: "mya",
      gallery: JSON.stringify([
        "/assets/img-4.jpg",
        "/assets/img-4.jpg",
        "/assets/img-4.jpg",
        "/assets/img-4.jpg",
      ]),
    },
    {
      name: "Жанна Жабова",
      experience: 4,
      image: "/assets/img-5.jpg",
      resume: null,
      gallery: null,
    },
    {
      name: "Шрек Шмеков",
      experience: 22,
      image: "/assets/img-6.jpg",
      resume: null,
      gallery: null,
    },
    {
      name: "Ривай Титанов",
      experience: 10,
      image: "/assets/img-7.jpg",
      resume: null,
      gallery: null,
    },
    {
      name: "Сейлор Мун",
      experience: 5,
      image: "/assets/img-8.jpg",
      resume: null,
      gallery: null,
    },
  ];

  return knex("masters")
    .del()
    .then(() => knex.raw("ALTER SEQUENCE masters_id_seq RESTART WITH 1")) // Сброс sequence
    .then(() => knex("masters").insert(mastersData));
};
