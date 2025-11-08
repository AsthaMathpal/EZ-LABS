import { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Front-end Validation
    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus("Please fill all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setStatus("Please enter a valid email");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200 || res.status === 201) {
        setStatus("Form Submitted ✅");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Submission failed ❌");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 max-w-lg">
        <h3 className="text-3xl font-bold mb-6 text-center">Contact Us</h3>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        {status && <p className="mt-4 text-center text-red-600">{status}</p>}
      </div>
    </section>
  );
}

export default ContactForm;
