import { useUserStore } from '~/stores/UserController';
import { useCustomFetch } from '~/hooks/useCustomFetch';
import type  { TUser } from '~/types/account';

/**
 * ------------------------------------------------------------
 * Глобальный middleware для проверки аутефикации пользователя
 * ------------------------------------------------------------
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  /**
   * Переменные ----------------
   */
  const userController = useUserStore();
  const excludedRoutes = ['/register', '/login'];
  const token = useCookie('token');

  /**
   * Проверка аутефикации пользователя ----------------
   */
  // Если нет токена
  if (!token.value && !excludedRoutes.includes(to.fullPath)) {
    // Перенаправляем пользователя на страницу авторизации
    return navigateTo('/login');
  }
  // Если есть токен
  else if (token.value) {
    // Если в хранилище нету данных пользователя
    if (!userController.user) {
      try {
        // Получаем данные пользователя
        // const { data } = await useCustomFetch<TUser>(`/account`);
        //
        // if (data) {
        //   // Сохраняем в хранилище данные пользователя
        //   userController.setUser(data);
        // }
      } catch (err) {
        // Если токен не валидный то, обнуляем его
        token.value = '';
      }
    }
  }
});
