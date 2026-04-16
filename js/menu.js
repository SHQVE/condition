
// Передаем название товара в модалку
const orderModal = document.getElementById('orderModal');
if (orderModal) {
    orderModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const product = button.getAttribute('data-product');
        document.getElementById('productNameInput').value = product;
    });
}


// Обработка заказа
document.getElementById('submitOrderBtn')?.addEventListener('click', function () {
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail')?.value.trim();
    const phone = document.getElementById('customerPhone').value;
    const date = document.getElementById('orderDate').value;
    const product = document.getElementById('productNameInput').value;

    if (name && phone && date && email.includes("@")) {
        alert(`Спасибо, ${name}! Ваш заказ на "${product}" принят. Заберите ${date} по адресу: Алые паруса`);
        bootstrap.Modal.getInstance(orderModal).hide();
        document.getElementById('orderForm').reset();
    } else {
        alert('Пожалуйста, заполните все поля');
    }
});

// Викторина
document.querySelectorAll('.quiz-ans').forEach(btn => {
    btn.addEventListener('click', function () {
        const result = this.getAttribute('data-result');
        const div = document.getElementById('quizResult');
        div.innerHTML = `Вам подойдёт торт <strong>${result}</strong>! Идеальный выбор для вашего вкуса.`;
        div.classList.remove('d-none');
    });
});

// скрытие навбара 
(function () {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 50;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > scrollThreshold) {
            if (currentScroll > lastScrollTop) {
                navbar.classList.add('navbar-hidden');
            } else {
                navbar.classList.remove('navbar-hidden');
            }
        } else {
            navbar.classList.remove('navbar-hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
})();

// рекомендуемые
document.querySelector('a[href="#rec"]').addEventListener('click', function (e) {
    e.preventDefault();

    //переключаемся на Авторские десерты
    const authorTab = document.querySelector('#author-tab');
    if (authorTab) {
        const tab = new bootstrap.Tab(authorTab);
        tab.show();
    }

    // ждём, потом скролим
    setTimeout(() => {
        const recElement = document.querySelector('#rec');
        if (recElement) {
            recElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, 300);
});