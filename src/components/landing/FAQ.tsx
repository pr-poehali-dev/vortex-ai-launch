import { useState } from "react";
import Icon from "@/components/ui/icon";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "❓ У нас нет CRM",
      answer: "✅ Мы внедрим её под ключ",
    },
    {
      question: "❓ Это сложно?",
      answer: "✅ Подключение за 1 день, всё делаем сами",
    },
    {
      question: "❓ А если не сработает?",
      answer: "✅ Покажем результат на ваших звонках до оплаты",
    },
    {
      question: "❓ Это дорого?",
      answer: "✅ Вы теряете больше на каждом слитом клиенте",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Вопросы, которые волнуют всех
          </h2>
          <p className="text-xl text-gray-600">(отвечаем честно)</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-medium text-gray-900">
                  {faq.question}
                </span>
                <Icon
                  name={openIndex === index ? "ChevronUp" : "ChevronDown"}
                  size={24}
                  className="text-gray-500"
                />
              </button>
              {openIndex === index && (
                <div className="px-8 pb-8">
                  <p className="text-xl text-gray-700 font-medium">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
