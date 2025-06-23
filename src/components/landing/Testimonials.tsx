import Icon from "@/components/ui/icon";

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Вот что говорят те, кто уже внедрил Vortex.ai
          </h2>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 text-center">
          <div className="mb-8">
            <Icon
              name="Quote"
              size={48}
              className="text-blue-500 mx-auto mb-6"
            />
            <p className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed mb-8">
              "После подключения конверсия не упала, а выросла на 26%. Раньше я
              слушал 10 звонков в день — теперь просто открываю отчёт."
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Icon name="User" size={24} className="text-white" />
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900 text-lg">Алексей</div>
              <div className="text-gray-600">
                директор по развитию B2B-компании
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
