import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  const steps = [
    {
      icon: "Plug",
      title: "Подключаемся к вашей CRM за 1 день",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "Ear",
      title: "ИИ анализирует звонки и чат-переписки в реальном времени",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "MessageSquare",
      title: "Даёт подсказки: что сказать, как дожать, куда передать",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "FileText",
      title: "Автоматически собирает персональные КП",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: "BarChart3",
      title: "Руководитель получает аналитику, а не оправдания",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Как работает Vortex.ai?
          </h2>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-8 p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300"
            >
              <div
                className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}
              >
                {index + 1}
              </div>
              <div
                className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center`}
              >
                <Icon name={step.icon} size={24} className="text-white" />
              </div>
              <div>
                <p className="text-xl md:text-2xl text-gray-800 font-medium">
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
