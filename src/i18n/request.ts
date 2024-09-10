import {getRequestConfig} from 'next-intl/server';

import {getUserLocale} from '../services/locale';
 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
//    const localeCookie = cookies().get('NEXT_LOCALE');
//   const locale = localeCookie?.value || 'vi';  // Mặc định là 'vi'
 const locale = await getUserLocale();
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});