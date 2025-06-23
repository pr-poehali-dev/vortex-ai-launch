import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Zap",
      title: "Молниеносная скорость",
      description:
        "Обработка данных со скоростью света благодаря передовым алгоритмам",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description:
        "Многоуровневая защита и шифрование данных по военным стандартам",
    },
    {
      icon: "Brain",
      title: "Искусственный интеллект",
      description: "Машинное обучение и нейронные сети для умных решений",
    },
    {
      icon: "Globe",
      title: "Глобальное покрытие",
      description: "Доступность сервиса в любой точке мира 24/7",
    },
    {
      icon: "Smartphone",
      title: "Мобильность",
      description: "Полная совместимость со всеми устройствами и платформами",
    },
    {
      icon: "BarChart3",
      title: "Аналитика",
      description:
        "Глубокая аналитика и визуализация данных в реальном времени",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-dark mb-6">
            Передовые возможности
          </h2>
          <p className="text-xl text-tech-gray max-w-3xl mx-auto">
            Наша платформа объединяет в себе самые современные технологии для
            создания непревзойдённого пользовательского опыта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-tech-purple/20"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-tech-purple to-tech-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={feature.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-tech-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-tech-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
