import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToForm = () => {
    document
      .getElementById("demo-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            ИИ, который слышит,
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              понимает и закрывает сделки
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Vortex.ai подключается к вашей CRM, анализирует звонки в режиме
            реального времени и помогает менеджерам закрывать больше сделок —
            без тренингов, контроля и стресса.
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <button
            onClick={scrollToForm}
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3 mx-auto"
          >
            <Icon name="Play" size={24} />
            Получить демонстрацию
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
