'use-client'

const ContactPage = () => {
  return (
    <div className="relative flex place-items-center justify-center min-h-screen before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      <section className="flex justify-center items-center flex-col gap-3">
        <span className="text-5xl">🎧</span>
        <iframe
          className="rounded-xl"
          src="https://open.spotify.com/embed/track/1LEn1MF7PGfBougaTFOD8R?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
