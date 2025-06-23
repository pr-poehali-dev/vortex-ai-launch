import { useState } from "react";
import Icon from "@/components/ui/icon";

const MainOffer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    agreement: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section
      id="demo-form"
      className="py-20 bg-gradient-to-br from-blue-900 to-purple-900"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Запишитесь на демонстрацию Vortex.ai — и посмотрите, как это
            работает на ваших звонках
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Разберём 2 ваших реальных диалога и покажем:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3 text-white">
              <Icon name="Target" size={24} className="text-blue-400" />
              <span>Где теряются клиенты</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Icon
                name="MessageCircle"
                size={24}
                className="text-purple-400"
              />
              <span>Какие фразы не работают</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Icon name="Brain" size={24} className="text-green-400" />
              <span>Как ИИ предложит лучшее решение</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full p-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreement"
                checked={formData.agreement}
                onChange={(e) =>
                  setFormData({ ...formData, agreement: e.target.checked })
                }
                className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                required
              />
              <label htmlFor="agreement" className="text-gray-600 text-sm">
                Я согласен на обработку персональных данных в соответствии с{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  политикой конфиденциальности
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Получить демонстрацию
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MainOffer;
