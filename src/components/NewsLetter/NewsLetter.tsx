"use client";
import React, { useState, FormEvent, useEffect } from "react";
import s from "@/styles/NewsLetter.module.css";

const Xbtn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
  </svg>
);

const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>();
  const [isOpen, setIsOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showMsgSusbcribed, setShowMsgSusbcribed] = useState(false);

  useEffect(() => {
    const isSubscribed = localStorage.getItem("subscribed");
    if (isSubscribed) {
      setSubscribed(true);
    } else {
      setTimeout(() => setIsOpen(true), 3000);
    }
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetch(`/api/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    if (!response.ok) {
      setError("Error al suscribirse al boletín de noticias");
      throw new Error("Error al suscribirse al boletín de noticias");
    } else {
      setError(null);
      localStorage.setItem("subscribed", "true");
      setShowMsgSusbcribed(true);
      setTimeout(() => setIsOpen(false), 3000);
    }
  };

  if (subscribed) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <section className={`${s.NewsLetterSection}`}>
          <div className={`${s.NewsLetterContainer}`}>
            <button className={s.Xbtn} onClick={() => setIsOpen(false)}>
              <Xbtn />
            </button>
            <h2 className="font-title-header">Únete a nuestro newsletter</h2>
            <p className="font-description">
              Descubre el camino hacia el bienestar con nuestro Newsletter.
              Recibe alertas sobre nuevas guías de salud holísticas, cursos
              exclusivos y contenido inspirador. Transforma tu vida, ¡suscríbete
              ahora!
            </p>

            {!showMsgSusbcribed ? (
              <>
                <form className={`${s.NewsLetterForm}`} onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button disabled={!validateEmail(email)} type="submit">
                    Suscribirse
                  </button>
                </form>
                {error && <label className={s.FormError}>{error}</label>}
              </>
            ) : (
              <h3>Gracias por suscribirte</h3>
            )}
          </div>
        </section>
      )}
    </>
  );
}
