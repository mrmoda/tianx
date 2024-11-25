// welcome按钮点击滚动
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// 滚动事件监听，动态显示背景色
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // 滚动时添加背景类
    } else {
        header.classList.remove('scrolled'); // 滚动回顶部移除背景类
    }
});

// 平滑滚动效果
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); // 阻止默认跳转行为
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
