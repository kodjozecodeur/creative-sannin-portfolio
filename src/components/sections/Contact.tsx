export default function Contact() {
  return (
    <section className="py-16 border-t border-gray-200 mt-16">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-black mb-4">Get in touch</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Let's discuss your next project or just say hello. I'm always open to
          new opportunities and collaborations.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:shatermt@gmail.com"
            className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-colors"
          >
            Send Message
          </a>
          <a
            href="#"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm hover:border-gray-400 transition-colors"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
