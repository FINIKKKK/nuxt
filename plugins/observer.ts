/**
 * Directive "Observer" (для проверки элемента в поле зрения) ----------------
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('observe', {
    mounted(el, binding) {
      // Параметры наблюдателя
      const options = {
        root: null, // наблюдение относительно области просмотра (viewport)
        rootMargin: '0px', // отступы от области просмотра
        threshold: 0.5, // порог видимости элемента (50% видимости)
      };

      // Создаем новый экземпляр IntersectionObserver
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // Если элемент в поле зрения
          if (entry.isIntersecting) {
            binding.value(entry.target); // вызываем переданную в директиву функцию
          }
        });
      }, options);

      // Начинаем наблюдение за элементом
      observer.observe(el);
    },

    getSSRProps(binding, vnode) {
      return {};
    },
  });
});
