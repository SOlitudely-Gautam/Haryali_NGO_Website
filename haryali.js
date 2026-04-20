function toggleCategory(btn) {
    const flowerList = btn.nextElementSibling;
    if (!flowerList || !flowerList.classList.contains('flower-list')) return;

    const isOpen = btn.classList.contains('open');

    // Close all
    document.querySelectorAll('.category-btn.open').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling?.classList.remove('open');
    });

    // Open clicked if it was closed
    if (!isOpen) {
        btn.classList.add('open');
        flowerList.classList.add('open');
    }
}