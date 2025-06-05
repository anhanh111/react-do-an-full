import React, { useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    // Khởi tạo hiệu ứng AOS
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });

    // Xử lý cuộn về đầu nếu có hash trong URL (ví dụ: #menu)
    if (window.location.hash) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Xóa phần hash khỏi thanh địa chỉ
        window.history.replaceState(null, null, window.location.pathname);
      }, 100); // delay nhỏ để trình duyệt hoàn tất render
    }
  }, []);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
