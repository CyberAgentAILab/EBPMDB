import Head from 'next/head';
import Script from 'next/script'

const Header = (props) => {
  const {
    title="",
    description="EBPMデータベースは、証拠に基づく政策を推進するためのプラットフォームです。"
  } = props

  return (
    <Head>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-PZVWLS7B4E`} />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PZVWLS7B4E', {
            page_path: window.location.pathname,
          });`,
        }}
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/EBPMDB/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/EBPMDB/favicon-16x16.png"/>
      <link rel="manifest" href="/EBPMDB/site.webmanifest"/>
      <link rel="mask-icon" href="/EBPMDB/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
      <title>{`${title + (title !== '' ? ' | ' : '')}EBPMデータベース`}</title>
      <meta name='description' content={description} />
    </Head>
  )
};

export default Header