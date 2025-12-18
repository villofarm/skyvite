import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.wrapper}>
      <p style={styles.text}>
        We use cookies to improve your experience. By continuing, you agree to our use of cookies.
      </p>
      <button style={styles.button} onClick={acceptCookies}>
        Accept
      </button>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    bottom: 20,
    left: 20,
    right: 20,
    background: "#fff",
    color: "#000",
    padding: "16px 20px",
    brderRadius: 8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 9999,
    border: "1px solid #a4a4a4ff",
  },
  text: {
    margin: 0,
    fontSize: 14,
  },
  button: {
    background: "#b20dffff",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer",
  },
};
