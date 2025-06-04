import containersport from "../assets/images/containersport.jpg";

export default function Header() {
  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat  h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center"
      style={{ backgroundImage: `url(${containersport})` }}
    >
      <div className="bg-black/30 w-full h-full absolute top-0 left-0 z-0"></div>

      <div className="bg-black/40 w-full h-full absolute top-0 left-0 z-0" />

      {/* Texte centré */}
      <div className="z-10 text-center px-6 md:px-12">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
          Welcome to Ter Maximum Ltd
        </h1>
        <p className="mt-4 text-sm md:text-base text-white max-w-2xl mx-auto drop-shadow-sm leading-relaxed text-justify">
          We are a leading logistics and supply chain management company based
          in <strong className="font-semibold">Tema, Ghana</strong>. We
          specialize in <strong>shipping</strong>,{" "}
          <strong>import/export</strong>, and{" "}
          <strong>general goods handling</strong> — providing{" "}
          <span className="italic">
            efficient, reliable, and customized solutions
          </span>{" "}
          for global trade.
        </p>
      </div>
    </header>
  );
}
