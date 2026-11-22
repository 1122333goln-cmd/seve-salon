document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".page-loader");
  if (loader) {
    window.addEventListener("load", () => {
      loader.classList.add("page-loader-hidden");
      document.body.classList.add("loaded");
      setTimeout(() => loader.remove(), 900);
    });
  }
});

const categories = [
  {
    name: "Стилистика и окрашивание",
    services: [
      {
        name: "Сложное окрашивание AirTouch / Balayage",
        brand: "KEVIN.MURPHY",
        description:
          "Индивидуальная схема осветления, тонирование и защита структуры волос.",
        duration: "от 4 ч",
        price: "от 18 000 ₽",
      },
      {
        name: "Ритуал «Блеск и сила»",
        brand: "ORIBE",
        description:
          "Диагностика, концентрированный уход и укладка по длине волос.",
        duration: "90 мин",
        price: "8 500 ₽",
      },
      {
        name: "Архитектура стрижки",
        brand: "SÈVE SIGNATURE",
        description:
          "Форма с учётом роста волос, пропорций лица и привычной укладки.",
        duration: "90 мин",
        price: "7 500 ₽",
      },
      {
        name: "Укладка на Dyson",
        brand: "DYSON PRO",
        description:
          "Подготовка, форма и фиксация без избыточного теплового воздействия.",
        duration: "60 мин",
        price: "5 500 ₽",
      },
      {
        name: "Тонирование и глоссинг",
        brand: "KEVIN.MURPHY",
        description:
          "Точное обновление оттенка и мягкий блеск без стойкого осветления.",
        duration: "120 мин",
        price: "от 9 500 ₽",
      },
      {
        name: "Персональный уход за волосами",
        brand: "ORIBE",
        description:
          "Протокол по результатам диагностики кожи головы и полотна волос.",
        duration: "75 мин",
        price: "6 500 ₽",
      },
    ],
  },
  {
    name: "Косметология и эстетика",
    services: [
      {
        name: "Ремоделирующий уход",
        brand: "BIOLOGIQUE RECHERCHE",
        description:
          "Диагностика кожи и многоэтапный протокол по её текущему состоянию.",
        duration: "90 мин",
        price: "14 500 ₽",
      },
      {
        name: "Микротоковая терапия",
        brand: "BIOLOGIQUE RECHERCHE",
        description:
          "Мягкое воздействие микротоками по индивидуальной схеме косметолога.",
        duration: "60 мин",
        price: "8 000 ₽",
      },
      {
        name: "Чистка и гидропилинг",
        brand: "GENOSYS",
        description:
          "Очищение, деликатная эксфолиация и интенсивное увлажнение кожи.",
        duration: "90 мин",
        price: "10 500 ₽",
      },
      {
        name: "Скульптурный массаж лица",
        brand: "SÈVE RITUAL",
        description:
          "Ручная техника для расслабления мышц и чёткого контура лица.",
        duration: "75 мин",
        price: "9 000 ₽",
      },
      {
        name: "Уход по протоколу Biologique Recherche",
        brand: "BIOLOGIQUE RECHERCHE",
        description:
          "Персонально подобранные этапы, маски и сыворотки после консультации.",
        duration: "120 мин",
        price: "от 16 000 ₽",
      },
      {
        name: "Уход за кожей головы",
        brand: "GENOSYS",
        description:
          "Осмотр, очищающий ритуал и рекомендации по домашнему уходу.",
        duration: "60 мин",
        price: "7 500 ₽",
      },
    ],
  },
  {
    name: "Ногтевой сервис и подология",
    services: [
      {
        name: "Маникюр с покрытием Luxio",
        brand: "LUXIO",
        description:
          "Комбинированная обработка, форма и покрытие в выбранном оттенке.",
        duration: "120 мин",
        price: "6 500 ₽",
      },
      {
        name: "Японский глянцевый уход",
        brand: "P.SHINE",
        description:
          "Полировка натуральной пластины минеральной пастой и пудрой.",
        duration: "75 мин",
        price: "4 500 ₽",
      },
      {
        name: "Spa-педикюр",
        brand: "CHRISTINA FITZGERALD",
        description:
          "Деликатная обработка, уход за кожей и завершающий массаж.",
        duration: "120 мин",
        price: "8 000 ₽",
      },
      {
        name: "Сет «В 4 руки»",
        brand: "SÈVE SIGNATURE",
        description: "Маникюр и педикюр одновременно в отдельном кабинете.",
        duration: "150 мин",
        price: "13 500 ₽",
      },
      {
        name: "Подологическая консультация",
        brand: "SÈVE CARE",
        description:
          "Оценка состояния стоп и план ухода с профильным специалистом.",
        duration: "45 мин",
        price: "4 000 ₽",
      },
    ],
  },
  {
    name: "SPA и ритуалы тела",
    services: [
      {
        name: "Восточное обёртывание",
        brand: "LA SULTANE DE SABA",
        description:
          "Прогрев, уходовый состав и тихий отдых в приватном spa-кабинете.",
        duration: "120 мин",
        price: "12 500 ₽",
      },
      {
        name: "Стоун-терапия",
        brand: "SÈVE RITUAL",
        description:
          "Расслабляющая техника с тёплыми камнями и натуральным маслом.",
        duration: "90 мин",
        price: "10 000 ₽",
      },
      {
        name: "Лимфодренажный массаж",
        brand: "SÈVE BODY",
        description:
          "Мягкая ручная техника для ощущения лёгкости и восстановления.",
        duration: "75 мин",
        price: "8 500 ₽",
      },
      {
        name: "Ритуал «Тёплый шёлк»",
        brand: "LA SULTANE DE SABA",
        description:
          "Скрабирование, обёртывание и увлажнение кожи ароматным маслом.",
        duration: "150 мин",
        price: "16 500 ₽",
      },
    ],
  },
  {
    name: "Визаж и архитектура бровей",
    services: [
      {
        name: "Макияж — дневной образ",
        brand: "SÈVE MAKEUP",
        description:
          "Естественный тон и акценты, подобранные под освещение и повод.",
        duration: "60 мин",
        price: "7 500 ₽",
      },
      {
        name: "Макияж — вечерний образ",
        brand: "SÈVE MAKEUP",
        description:
          "Стойкий образ с выразительным акцентом и подготовкой кожи.",
        duration: "90 мин",
        price: "10 000 ₽",
      },
      {
        name: "Ламинирование и коррекция бровей",
        brand: "CHRISTINA FITZGERALD",
        description:
          "Форма, укладка волосков и оттенок с учётом естественного роста.",
        duration: "60 мин",
        price: "5 500 ₽",
      },
      {
        name: "Архитектура и окрашивание бровей",
        brand: "SÈVE BROW",
        description:
          "Построение формы и деликатное тонирование подходящим оттенком.",
        duration: "45 мин",
        price: "4 000 ₽",
      },
    ],
  },
];

const reviews = [
  {
    text: "Я пришла на окрашивание, а получила редкое чувство — меня никуда не торопят. Цвет получился именно таким, каким я его представляла, только лучше.",
    author: "Анна К.",
    detail: "Гость SÈVE с 2022 года · окрашивание",
  },
  {
    text: "Пока мастер работала с волосами, косметолог провела уход за лицом. Два часа, которые обычно растягиваются на полдня, прошли в тишине и с прекрасным кофе.",
    author: "Мария Л.",
    detail: "Гость SÈVE с 2023 года · сервис в 4 руки",
  },
  {
    text: "Здесь помнят, какой кофе я люблю, и не предлагают то, что мне не нужно. После процедур кожа действительно стала спокойнее — мы наконец нашли работающий протокол.",
    author: "Екатерина П.",
    detail: "Гость SÈVE с 2021 года · косметология",
  },
];

const categoriesTabs = document.querySelector(".service-tabs");
const serviceList = document.querySelector(".service-list");
const dialog = document.querySelector(".booking-dialog");
const bookingForm = document.querySelector(".booking-form");
const categorySelect = bookingForm.elements.category;
const serviceSelect = bookingForm.elements.service;
const masterSelect = bookingForm.elements.master;
let currentReview = 0;

function setupCustomSelect(container, options, placeholder) {
  const trigger = container.querySelector(".custom-select-trigger");
  const label = container.querySelector("[data-select-label]");
  const menu = container.querySelector(".custom-select-menu");
  const input = container.querySelector("input");

  menu.replaceChildren(
    ...options.map((option) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "custom-select-option";
      item.setAttribute("role", "option");
      item.dataset.value = option.value;
      item.textContent = option.label;
      item.addEventListener("click", () => {
        input.value = option.value;
        label.textContent = option.label;
        trigger.setAttribute("aria-expanded", "false");
        container.classList.remove("is-open");
        menu.querySelectorAll("[aria-selected]").forEach((selected) => {
          selected.removeAttribute("aria-selected");
        });
        item.setAttribute("aria-selected", "true");
        input.dispatchEvent(new Event("change", { bubbles: true }));
      });
      return item;
    }),
  );

  trigger.addEventListener("click", () => {
    document.querySelectorAll(".custom-select.is-open").forEach((openSelect) => {
      if (openSelect !== container) openSelect.classList.remove("is-open");
    });
    const isOpen = container.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  });

  return {
    setOptions(nextOptions) {
      menu.replaceChildren(
        ...nextOptions.map((option) => {
          const item = document.createElement("button");
          item.type = "button";
          item.className = "custom-select-option";
          item.setAttribute("role", "option");
          item.dataset.value = option.value;
          item.textContent = option.label;
          item.addEventListener("click", () => {
            input.value = option.value;
            label.textContent = option.label;
            trigger.setAttribute("aria-expanded", "false");
            container.classList.remove("is-open");
            menu.querySelectorAll("[aria-selected]").forEach((selected) => {
              selected.removeAttribute("aria-selected");
            });
            item.setAttribute("aria-selected", "true");
            input.dispatchEvent(new Event("change", { bubbles: true }));
          });
          return item;
        }),
      );
    },
    set(value, text) {
      input.value = value;
      label.textContent = text || placeholder;
      menu.querySelectorAll("[aria-selected]").forEach((selected) => {
        selected.removeAttribute("aria-selected");
      });
      if (value) {
        const selected = [...menu.querySelectorAll("[data-value]")]
          .find((item) => item.dataset.value === value);
        if (selected) selected.setAttribute("aria-selected", "true");
      }
    },
  };
}

const categoryCustom = setupCustomSelect(
  document.querySelector('[data-custom-select="category"]'),
  categories.map((category, index) => ({
    value: String(index),
    label: category.name,
  })),
  "Выберите направление",
);
const serviceCustom = setupCustomSelect(
  document.querySelector('[data-custom-select="service"]'),
  [{ value: "", label: "Можно выбрать позже" }],
  "Можно выбрать позже",
);
const masterCustom = setupCustomSelect(
  document.querySelector('[data-custom-select="master"]'),
  [
    { value: "", label: "Подобрать с консьержем" },
    { value: "Елена Воронцова", label: "Елена Воронцова" },
    { value: "Марк Соколов", label: "Марк Соколов" },
    { value: "Алиса Кравцова", label: "Алиса Кравцова" },
    { value: "София Морозова", label: "София Морозова" },
  ],
  "Подобрать с консьержем",
);

function renderServices(categoryIndex) {
  categoriesTabs.querySelectorAll(".service-tab").forEach((tab, index) => {
    tab.setAttribute("aria-selected", String(index === categoryIndex));
    tab.tabIndex = index === categoryIndex ? 0 : -1;
  });
  serviceList.replaceChildren(
    ...categories[categoryIndex].services.map((service) => {
      const row = document.createElement("article");
      row.className = "service-item";
      const main = document.createElement("div");
      main.className = "service-main";
      const titleLine = document.createElement("div");
      titleLine.className = "service-title-line";
      const title = document.createElement("h3");
      title.textContent = service.name;
      const brand = document.createElement("span");
      brand.className = "service-brand";
      brand.textContent = service.brand;
      titleLine.append(title, brand);
      const description = document.createElement("p");
      description.textContent = service.description;
      main.append(titleLine, description);
      const duration = document.createElement("span");
      duration.className = "service-duration";
      duration.textContent = service.duration;
      const price = document.createElement("span");
      price.className = "service-price";
      price.textContent = service.price;
      const choose = document.createElement("button");
      choose.className = "service-choose";
      choose.type = "button";
      choose.textContent = "Выбрать →";
      choose.setAttribute(
        "aria-label",
        `Записаться на услугу: ${service.name}`,
      );
      choose.addEventListener("click", () =>
        openBooking({ category: categoryIndex, service: service.name }),
      );
      row.append(main, duration, price, choose);
      return row;
    }),
  );
}

categories.forEach((category, index) => {
  const tab = document.createElement("button");
  tab.className = "service-tab";
  tab.type = "button";
  tab.id = `service-tab-${index}`;
  tab.setAttribute("role", "tab");
  tab.setAttribute("aria-controls", "service-panel");
  tab.setAttribute("aria-selected", String(index === 0));
  tab.tabIndex = index === 0 ? 0 : -1;
  tab.textContent = category.name;
  tab.addEventListener("click", () => renderServices(index));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? categories.length - 1
          : (index + (event.key === "ArrowRight" ? 1 : categories.length - 1)) %
            categories.length;
    categoriesTabs.querySelectorAll(".service-tab")[next].focus();
    renderServices(next);
  });
  categoriesTabs.append(tab);
});

function populateServiceSelect(categoryIndex, selectedService = "") {
  const options = [{ value: "", label: "Можно выбрать позже" }];
  if (categoryIndex !== "") {
    options.push(
      ...categories[Number(categoryIndex)].services.map((service) => ({
        value: service.name,
        label: service.name,
      })),
    );
  }
  serviceCustom.setOptions(options);
  serviceCustom.set("", "Можно выбрать позже");
  if (selectedService) {
    serviceCustom.set(selectedService, selectedService);
  }
}

categorySelect.addEventListener("change", () =>
  populateServiceSelect(categorySelect.value),
);

document.addEventListener("click", (event) => {
  if (event.target.closest(".custom-select")) return;
  document.querySelectorAll(".custom-select.is-open").forEach((container) => {
    container.classList.remove("is-open");
    container
      .querySelector(".custom-select-trigger")
      .setAttribute("aria-expanded", "false");
  });
});

function openBooking(selection = {}) {
  bookingForm.reset();
  bookingForm.elements["request-type"].value =
    selection.type ?? "Запись на визит";
  const categoryIndex =
    selection.category === undefined ? "" : String(selection.category);
  categoryCustom.set(
    categoryIndex,
    categoryIndex === ""
      ? "Выберите направление"
      : categories[Number(categoryIndex)].name,
  );
  populateServiceSelect(
    categoryIndex,
    selection.service ?? "",
  );
  masterCustom.set(
    selection.master ?? "",
    selection.master || "Подобрать с консьержем",
  );
  bookingForm.querySelector(".form-status").textContent = "";
  bookingForm.querySelector(".form-status").removeAttribute("data-error");
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("dialog-open");
}

document
  .querySelectorAll("[data-booking-open]")
  .forEach((button) => button.addEventListener("click", () => openBooking()));
document
  .querySelectorAll("[data-master-book]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      openBooking({ master: button.dataset.masterBook }),
    ),
  );
document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = bookingForm.querySelector(".form-status");
  if (!bookingForm.reportValidity()) return;
  const name = String(new FormData(bookingForm).get("name")).trim();
  status.removeAttribute("data-error");
  status.textContent = `Спасибо, ${name}. Консьерж свяжется с вами в ближайшее время.`;
  bookingForm.querySelector(".form-submit").disabled = true;
  window.setTimeout(() => {
    bookingForm.querySelector(".form-submit").disabled = false;
    dialog.close();
  }, 2200);
});

document.querySelectorAll("input[name='gift-amount']").forEach((input) => {
  input.addEventListener("change", () => {
    document.querySelector(".gift-card-amount").textContent = input.value;
  });
});

document.querySelector("[data-gift-order]").addEventListener("click", () => {
  const amount = document.querySelector(
    "input[name='gift-amount']:checked",
  ).value;
  const format = document.querySelector(
    "input[name='gift-format']:checked",
  ).value;
  openBooking({ type: "Заказ подарочного сертификата" });
  bookingForm.elements.message.value = `Формат сертификата: ${format}. Номинал: ${amount}.`;
});

const brandButtons = [...document.querySelectorAll(".brand-name")];
brandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    brandButtons.forEach((brand) => {
      brand.setAttribute("aria-pressed", String(brand === button));
    });
    document.querySelector(".brand-description-name").textContent =
      button.dataset.brand;
    document.querySelector(".brand-description-copy").textContent =
      button.dataset.description;
  });
});

function showReview(index) {
  currentReview = (index + reviews.length) % reviews.length;
  const review = reviews[currentReview];
  document.querySelector("[data-review-text]").textContent = review.text;
  document.querySelector("[data-review-author]").textContent = review.author;
  document.querySelector("[data-review-detail]").textContent = review.detail;
  document.querySelector("[data-review-current]").textContent = String(
    currentReview + 1,
  ).padStart(2, "0");
}
document
  .querySelector("[data-review-prev]")
  .addEventListener("click", () => showReview(currentReview - 1));
document
  .querySelector("[data-review-next]")
  .addEventListener("click", () => showReview(currentReview + 1));

showReview(0);

const header = document.querySelector(".site-header");
const updateHeader = () =>
  header.classList.toggle("is-scrolled", window.scrollY > 40);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
function setMobileMenu(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
  mobileMenu.classList.toggle("is-open", open);
  mobileMenu.inert = !open;
  document.body.classList.toggle("dialog-open", open || dialog.open);
}
menuToggle.addEventListener("click", () =>
  setMobileMenu(menuToggle.getAttribute("aria-expanded") !== "true"),
);
mobileMenu
  .querySelectorAll("a")
  .forEach((link) =>
    link.addEventListener("click", () => setMobileMenu(false)),
  );
window.addEventListener("resize", () => {
  if (
    window.innerWidth > 760 &&
    menuToggle.getAttribute("aria-expanded") === "true"
  )
    setMobileMenu(false);
});

renderServices(0);
