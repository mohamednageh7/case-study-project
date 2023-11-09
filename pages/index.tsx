import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticlesWrapper from '../src/components/indexComp/ArticlesWrapper';

export default function Home() {
  return <ArticlesWrapper />;
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}
