const BeforeAfter = () => {
  const comparisons = [
    { metric: "Конверсия", before: "8%", after: "12–15%" },
    { metric: "Звонки", before: "Хаос, неясно", after: "Анализ, отчёты" },
    { metric: "КП", before: "30 мин вручную", after: "2 мин ИИ-подготовка" },
    { metric: "Управление", before: "На интуиции", after: "На данных" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            До / После Vortex.ai
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-6 px-8 text-left text-xl font-bold text-gray-900"></th>
                <th className="py-6 px-8 text-center text-xl font-bold text-red-600">
                  До Vortex
                </th>
                <th className="py-6 px-8 text-center text-xl font-bold text-green-600">
                  С Vortex
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-6 px-8 font-semibold text-gray-900 text-lg">
                    {item.metric}
                  </td>
                  <td className="py-6 px-8 text-center text-red-600 font-medium text-lg">
                    {item.before}
                  </td>
                  <td className="py-6 px-8 text-center text-green-600 font-medium text-lg">
                    {item.after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
