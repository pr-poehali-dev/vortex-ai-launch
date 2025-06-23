import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tech-dark via-slate-900 to-tech-purple overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-purple opacity-20 rounded-full blur-3xl floating-animation"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-blue opacity-20 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Будущее
            <span className="block bg-gradient-to-r from-tech-purple to-tech-blue bg-clip-text text-transparent">
              Технологий
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Инновационные решения для цифрового мира. Создаем технологии,
            которые меняют жизнь людей.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-tech-purple to-tech-blue text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 tech-glow flex items-center gap-2">
            <Icon name="Rocket" size={20} />
            Начать сейчас
          </button>
          <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
            <Icon name="Play" size={20} />
            Смотреть демо
          </button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10M+</div>
            <div className="text-gray-400">Пользователей</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Надёжность</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Поддержка</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
