import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

interface Props {
  title?: string,
  description?: string,
  url?: string,
  imgUrl?: string,
  imgWidth?: number,
  imgHeight?: number,
  docnumber?: string
}


const Header: React.FunctionComponent<Props> = ({
  title="",
  description="EBPMデータベースは、証拠に基づく政策を推進するためのプラットフォームです。",
  url="https://cyberagentailab.github.io/EBPMDB/",
  imgWidth=1280,
  imgHeight=640,
  docnumber
}) => {
  const defaultImgUrl="https://cyberagentailab.github.io/EBPMDB/EBPM_ogp_221107_01.png";
  const imgUrl = docnumber
    ? `https://cyberagentailab.github.io/EBPMDB/screenshots/${docnumber}.png`
    : defaultImgUrl;

  return(
  <>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/EBPMDB/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/EBPMDB/favicon-16x16.png"/>
      <link rel="manifest" href="/EBPMDB/site.webmanifest"/>
      <link rel="mask-icon" href="/EBPMDB/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${title + (title !== '' ? ' | ' : '')}EBPMデータベース`} />
      <meta property="og:site_name" content={`${title + (title !== '' ? ' | ' : '')}EBPMデータベース`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <title>{`${title + (title !== '' ? ' | ' : '')}EBPMデータベース`}</title>
      <meta name='description' content={description} />
    </Head>
    <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-PZVWLS7B4E`} />
    <Script
      id='google-analytics-script'
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
  </>
  );
}

export default Header