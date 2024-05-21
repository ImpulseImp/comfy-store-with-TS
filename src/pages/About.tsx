const About = () => {
  return (
    <section>
      {/* <h1>test</h1> */}
      <h1 className="flex flex-wrap items-center justify-center gap-2 text-4xl font-bold leading-none tracking-tight sm:gap-x-6 sm:text-6xl ">
        We love
        <span className="rounded-lg bg-primary px-4 py-2  tracking-widest text-white">
          comfy
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 tracking-wide">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam
        odit, officiis eos mollitia alias, doloremque, aspernatur ratione
        asperiores voluptas labore minus dolores reprehenderit corporis quos.
        Assumenda molestias harum dignissimos?
      </p>
    </section>
  );
};

export default About;
