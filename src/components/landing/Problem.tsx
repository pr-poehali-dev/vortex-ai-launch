import Icon from "@/components/ui/icon";

const Problem = () => {
  const problems = [
    {
      icon: "UserX",
      title: "Менеджеры звонят один раз и «хоронят» лида",
      color: "text-red-500",
    },
    {
      icon: "AlertTriangle",
      title: "Воронка — чёрная дыра: никто не знает, где теряются деньги",
      color: "text-orange-500",
    },
    {
      icon: "Clock",
      title: "КП готовится вручную, 30 минут на одного клиента",
      color: "text-yellow-500",
    },
    {
      icon: "BrainCircuit",
      title: "Руководитель всё держит в голове и выгорает",
      color: "text-red-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Что мешает продавать больше прямо сейчас?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`flex-shrink-0 w-12 h-12 ${problem.color} flex items-center justify-center`}
              >
                <Icon name={problem.icon} size={32} />
              </div>
              <div>
                <p className="text-xl text-gray-800 font-medium leading-relaxed">
                  {problem.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
