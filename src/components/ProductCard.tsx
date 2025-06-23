import Icon from "@/components/ui/icon";

const ProductCard = () => {
  return (
    <section className="py-20 bg-tech-dark">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700 hover:border-tech-purple/50 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-tech-purple/20 text-tech-purple rounded-full text-sm font-medium mb-4">
                  <Icon name="Sparkles" size={16} className="mr-2" />
                  Премиум решение
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  TechPro Suite
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  Комплексная платформа для управления всеми аспектами вашего
                  технологического бизнеса
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Автоматизация рабочих процессов",
                  "Интеграция с внешними системами",
                  "Расширенная аналитика и отчёты",
                  "Персональный менеджер поддержки",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-tech-purple mr-3 flex-shrink-0"
                    />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-tech-purple to-tech-blue text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 tech-glow">
                  Попробовать бесплатно
                </button>
                <div className="text-white">
                  <span className="text-3xl font-bold">₽2,990</span>
                  <span className="text-gray-400">/мес</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-tech-purple/20 to-tech-blue/20 rounded-2xl p-8 backdrop-blur">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Icon
                      name="Users"
                      size={24}
                      className="text-tech-blue mx-auto mb-2"
                    />
                    <div className="text-white font-semibold">1M+</div>
                    <div className="text-gray-400 text-sm">
                      Активных пользователей
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Icon
                      name="Server"
                      size={24}
                      className="text-tech-purple mx-auto mb-2"
                    />
                    <div className="text-white font-semibold">99.99%</div>
                    <div className="text-gray-400 text-sm">Время работы</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Icon
                      name="Gauge"
                      size={24}
                      className="text-tech-blue mx-auto mb-2"
                    />
                    <div className="text-white font-semibold">&lt;10ms</div>
                    <div className="text-gray-400 text-sm">Время отклика</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Icon
                      name="Award"
                      size={24}
                      className="text-tech-purple mx-auto mb-2"
                    />
                    <div className="text-white font-semibold">ISO</div>
                    <div className="text-gray-400 text-sm">Сертификация</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
