// ===== 헤더: 스크롤 시 그림자 =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 10);
});

// ===== 모바일 메뉴 토글 =====
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});

// 메뉴 링크를 누르면 메뉴 닫기
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', '메뉴 열기');
  });
});

// ===== 숫자 카운트업 =====
function countUp(el) {
  const target = Number(el.dataset.target);
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased).toLocaleString('ko-KR');
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ===== 스크롤 등장 효과 + 카운트/막대 애니메이션 =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;

    el.classList.add('is-visible');
    el.querySelectorAll('.count').forEach(countUp);
    el.querySelectorAll('.bar__fill').forEach((bar) => {
      bar.style.width = bar.dataset.width + '%';
    });

    observer.unobserve(el);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ===== 제휴 문의 폼 (데모: 실제 전송 없음) =====
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  form.querySelectorAll('input[required]').forEach((input) => {
    const ok = input.checkValidity() && input.value.trim() !== '';
    input.classList.toggle('is-invalid', !ok);
    if (!ok) valid = false;
  });

  formMsg.className = 'form__msg';
  if (!valid) {
    formMsg.textContent = '공방 이름과 올바른 이메일을 입력해 주세요.';
    formMsg.classList.add('is-error');
    return;
  }

  formMsg.textContent = `${form.studio.value} 님, 문의가 접수되었습니다. 곧 연락드릴게요!`;
  formMsg.classList.add('is-success');
  form.reset();
});

// ===== 푸터 연도 =====
document.getElementById('year').textContent = new Date().getFullYear();
