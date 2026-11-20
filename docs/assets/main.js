(function () {
  // Адрес, на который уходят заявки. Замените на реальный email или endpoint.
  var REQUEST_EMAIL = "info@example.kz";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var form = document.getElementById("request-form");
  if (!form) return;

  var status = form.querySelector(".form__status");
  var phone = form.elements.phone;

  function setStatus(text) {
    status.textContent = text;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var name = (data.get("name") || "").toString().trim();
    var contact = (data.get("phone") || "").toString().trim();
    var type = data.get("type");
    var message = (data.get("message") || "").toString().trim();

    phone.removeAttribute("aria-invalid");
    form.elements.name.removeAttribute("aria-invalid");

    var digits = contact.replace(/\D/g, "");
    var bad = false;
    if (!name) {
      form.elements.name.setAttribute("aria-invalid", "true");
      bad = true;
    }
    if (digits.length < 10) {
      phone.setAttribute("aria-invalid", "true");
      bad = true;
    }
    if (bad) {
      setStatus("Укажите имя и телефон, чтобы мы могли ответить.");
      return;
    }

    var body = [
      "Имя: " + name,
      "Телефон: " + contact,
      "Кто: " + type,
      "",
      message || "(без комментария)"
    ].join("\n");

    var subject = "Заявка с сайта: " + name;
    window.location.href =
      "mailto:" + REQUEST_EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    setStatus("Открылось письмо с заявкой. Если почта не открылась, позвоните нам или напишите в WhatsApp.");
  });
})();
