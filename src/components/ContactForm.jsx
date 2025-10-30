import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("idle");
  const [fileUrl, setFileUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const widget = window.uploadcare; // access via window

    if (widget) {
      setUploading(true);

      const dialog = widget.openDialog(null, {
        publicKey: "ffb4800a429e4ca17391",
      });

      dialog.done((filePromise) => {
        filePromise.done((fileInfo) => {
          setFileUrl(fileInfo.cdnUrl);
          setUploading(false);
          console.log("Uploaded File URL:", fileInfo.cdnUrl);
        });
      });
    } else {
      console.error("Uploadcare widget not found on window object");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    //append uploadcare url
    if (fileUrl) {
      data.append("file", fileUrl);
    }

    try {
      const response = await fetch("https://formspree.io/f/xnnvznbo", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");

        setTimeout(() => {
          form.reset();
          setFileUrl("");
          setStatus("idle"); // Reset status to allow re-submission
        }, 4000);
      } else {
        setStatus("error");
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      setStatus("error");
      console.error("Network error:", error);
    }
  };

  return (
    <section id="contact" className="max-w-xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Get In Touch
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 p-10 bg-white shadow-xl rounded-md border border-gray-200 transition hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
      >
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="text"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Uploadcare button */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Attach Logo
          </label>
          <button
            type="button"
            onClick={handleUpload}
            className="bg-gray-200 text-gray-800 px-4 py-2 text-sm sm:text-base rounded hover:bg-gray-300"
          >
            Upload logo
          </button>
          {uploading && (
            <p className="text-sm text-yellow-600 mt-2">
              Uploading file... it may take a few seconds
            </p>
          )}
          {fileUrl && (
            <p className="mt-2 text-sm text-gree-600">
              Uploaded:{" "}
              <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                {fileUrl}
              </a>
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-blue-600 text-white px-5 py-1 rounded hover:bg-blue-700 transition"
        >
          {status === "submitting" ? "Sending..." : "Send"}
        </button>
        {status === "success" && (
          <p className="text-green-600">Thanks! Your message has been sent.</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2">Oops! Something went wrong.</p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;



