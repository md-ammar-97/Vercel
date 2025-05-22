import { ReactNode, useEffect } from 'react';
import Head from 'next/head'; // Import Head for managing head tags in Next.js
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // Create Calendly widget script element
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    // When script loads, initialize the Calendly badge widget
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/md-ammar',
          text: 'Schedule call with me',
          color: '#0069ff',
          textColor: '#ffffff',
          branding: true,
        });
      }
    };

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script if component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
