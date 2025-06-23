import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Icon name="Brain" size={24} className="text-white" />
              </div>
              <span className="text-3xl font-bold">Vortex.ai</span>
            </div>
            <p className="text-gray-400 text-lg max-w-md">
              ИИ-помощник для продаж, который подключается к CRM и помогает
              закрывать больше сделок
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Icon name="Mail" size={20} className="text-blue-400" />
                <a
                  href="mailto:info@vortex.ai"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@vortex.ai
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="Phone" size={20} className="text-green-400" />
                <a
                  href="tel:+79991234567"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Icon
                  name="MessageCircle"
                  size={20}
                  className="text-blue-500"
                />
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Telegram
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Icon
                  name="MessageSquare"
                  size={20}
                  className="text-green-500"
                />
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Vortex.ai. Все права защищены.
          </div>
          <div>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
