import Icon from "@/components/ui/icon";

const Trust = () => {
  const trustPoints = [
    {
      icon: "Zap",
      title: "Подключение за 1 день",
      color: "text-blue-500",
    },
    {
      icon: "Headphones",
      title: "Персональная поддержка",
      color: "text-green-500",
    },
    {
      icon: "FileCheck",
      title: "Работаем по договору",
      color: "text-purple-500",
    },
    {
      icon: "Shield",
      title: "Данные хранятся у клиента",
      color: "text-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`flex-shrink-0 w-12 h-12 ${point.color}`}>
                <Icon name={point.icon} size={32} />
              </div>
              <div>
                <span className="font-semibold text-gray-900 text-lg">
                  ✅ {point.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
