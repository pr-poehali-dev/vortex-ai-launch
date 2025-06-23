import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-tech-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-tech-purple to-tech-blue rounded-lg flex items-center justify-center mr-3">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold">TechVision</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Создаём технологии будущего сегодня. Наша миссия - делать сложные
              технологии простыми и доступными для каждого.
            </p>
            <div className="flex space-x-4">
              {["Github", "Twitter", "Linkedin", "Mail"].map(
                (social, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-slate-800 hover:bg-tech-purple rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon name={social} size={18} />
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Продукты</h3>
            <ul className="space-y-2 text-gray-400">
              {[
                "TechPro Suite",
                "Analytics Pro",
                "Mobile SDK",
                "API Platform",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-gray-400">
              {[
                "Документация",
                "Тех. поддержка",
                "Сообщество",
                "Статус системы",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Icon name="MapPin" size={20} className="text-tech-purple mr-3" />
              <div>
                <div className="font-medium">Офис</div>
                <div className="text-gray-400 text-sm">Москва, Россия</div>
              </div>
            </div>
            <div className="flex items-center">
              <Icon name="Phone" size={20} className="text-tech-blue mr-3" />
              <div>
                <div className="font-medium">Телефон</div>
                <div className="text-gray-400 text-sm">+7 (495) 123-45-67</div>
              </div>
            </div>
            <div className="flex items-center">
              <Icon name="Mail" size={20} className="text-tech-purple mr-3" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-gray-400 text-sm">hello@techvision.ru</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 TechVision. Все права защищены.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">
              Конфиденциальность
            </a>
            <a href="#" className="hover:text-white">
              Условия использования
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
