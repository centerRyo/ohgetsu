import { SERVICE_NAME } from '@/constants';
import Head from 'next/head';
import { memo, ReactNode } from 'react';
import Header from '../header';
import styles from './index.module.scss';

type Props = {
  children: ReactNode;
};

const Layout = memo(({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>{SERVICE_NAME}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='自分が食べれるメニューがきっと見つかる、アレルギー検索サイト'
        />
        <meta name='keywords' content='アレルギー,レストラン' lang='ja' />
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
});
Layout.displayName = 'Layout';

export default Layout;
