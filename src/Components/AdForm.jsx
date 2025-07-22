import React, { useEffect } from 'react';

const AdForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container-fluid" style={{ height: '95vh' }}>
      <div class="visme_d" data-title="Simple Subscription Sign Up Form" data-url="zzdd1q91-simple-subscription-sign-up-form?fullPage=true" data-domain="forms" data-full-page="false" data-min-height="100vh" data-form-id="136019"></div>
    </div>
  );
};

export default AdForm;
