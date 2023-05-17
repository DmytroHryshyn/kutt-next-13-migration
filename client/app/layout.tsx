import { Metadata } from 'next';
import { Colors } from "../consts";
import ContextProvider from "../components/ContextProvider";

export const metadata: Metadata = {
  manifest: 'manifest.webmanifest',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  description: `${process.env.NEXT_PUBLIC_SITE_NAME} is a free and open source URL shortener with custom domains and stats.`,
  themeColor: '#f3f3f3',
  openGraph: {
    url: `https://${process.env.NEXT_PUBLIC_DEFAULT_DOMAIN}`,
    type: 'website', 
    title: process.env.NEXT_PUBLIC_SITE_NAME, 
    description: 'Free & Open Source Modern URL Shortener', 
  },
  twitter: {
    site: `https://${process.env.NEXT_PUBLIC_DEFAULT_DOMAIN}`,
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description: 'Free & Open Source Modern URL Shortener'
  },
  icons: [{ 
    rel: 'icon',
    sizes: '196x196', 
    url: '/images/favicon-196x196.png'
  }, 
  {
    rel: 'icon', 
    sizes: '32x32', 
    url: '/images/favicon-32x32.png'
  },
  {
    rel: 'icon', 
    sizes: '16x16', 
    url: '/images/favicon-16x16.png'
  },
  {
    rel: 'apple-touch-icon', 
    url: '/images/favicon-196x196.png'
  },
],
other: {
  'fb:app_id': '123456789'
}
};
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:300,400,700&display=optional"
            rel="stylesheet"
          />
          <link rel="mask-icon" href="/images/icon.svg" color="blue" />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.recaptchaCallback = function() { window.isCaptchaReady = true; }`
            }}
          />

          <script
            src="https://www.google.com/recaptcha/api.js?render=explicit"
            async
            defer
          />
        </head>
        <body
          style={{
            margin: 0,
            backgroundColor: Colors.Bg,
            font: '16px/1.45 "Nunito", sans-serif',
            overflowX: "hidden",
            color: Colors.Text
          }}
        >
          <ContextProvider>
            { children }
          </ContextProvider>
        </body>
      </html>
  );
}