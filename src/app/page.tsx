import Link from 'next/link'
import {useTranslations} from 'next-intl';







export default  function HomePage () {
  const t = useTranslations('Test');
 

  return (
    <div>
      
    <h1>{t('title')}</h1>
   <Link href="/Login">Đăng nhập tại đây</Link>
    </div>
  );
}