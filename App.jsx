import React from 'react';
import { Phone, Mail, MapPin, CheckCircle, Star, Droplets, Home, Palette, Hammer } from 'lucide-react';

const App = () => {
  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Отделка парных",
      description: "Профессиональная обшивка парных комнат из натурального дерева с учетом всех требований"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Отделка предбанников",
      description: "Создание уютного и функционального пространства для отдыха и переодевания"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Декоративная отделка",
      description: "Художественная отделка потолков, стен и элементов интерьера из дерева"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Монтаж печей",
      description: "Установка и облицовка дровяных и электрических печей для саун и бань"
    }
  ];

  const testimonials = [
    {
      name: "Александр К.",
      rating: 5,
      text: "Мастер сделал отличную работу по отделке нашей бани. Все четко, аккуратно и в срок. Рекомендую!"
    },
    {
      name: "Елена М.",
      rating: 5,
      text: "Заказывали отделку парной и предбанника. Результат превзошел ожидания - уютно, красиво и функционально!"
    },
    {
      name: "Дмитрий П.",
      rating: 5,
      text: "Профессиональный подход, качественные материалы и адекватные цены. Спасибо за отличную работу!"
    }
  ];

  const advantages = [
    "Более 10 лет опыта в отделке бань и саун",
    "Используем только натуральное дерево высокого качества",
    "Гарантия на все виды работ до 3 лет",
    "Бесплатный выезд на замер и консультация",
    "Работаем по всему Гомельскому району",
    "Фиксированные цены без скрытых платежей"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-2xl md:text-3xl font-bold text-amber-800">Мастер по отделке бань и саун</h1>
              <p className="text-gray-600">Гомель - качество проверенное временем</p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="text-amber-600" />
                <span className="font-semibold text-amber-700">+375 (29) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-amber-600" />
                <span className="text-gray-700">5922999@mail.ru</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Профессиональная отделка бань и саун в Гомеле</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Превращаем готовые бани и сауны в уютные и функциональные пространства для отдыха и оздоровления
          </p>
          <button className="bg-white text-amber-700 hover:bg-amber-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Оставить заявку
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Услуги по отделке</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Специализируемся исключительно на внутренней отделке уже построенных бань и саун
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-amber-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-amber-600 mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-amber-800 mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Почему выбирают нас?</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-amber-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Отзывы наших клиентов</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-amber-50 p-6 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-400 fill-current w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-amber-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Оставьте заявку на отделку</h3>
            <p className="text-xl">
              Мы свяжемся с вами в течение часа для уточнения деталей
            </p>
          </div>
          
          {/* Форма обратной связи */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto">
            <form 
              action="https://formsubmit.co/5922999@mail.ru" 
              method="POST"
              className="space-y-4"
            >
              <input 
                type="text" 
                name="name" 
                placeholder="Ваше имя" 
                required 
                className="w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <input 
                type="tel" 
                name="phone" 
                placeholder="Телефон" 
                required 
                className="w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <textarea 
                name="message" 
                placeholder="Опишите ваш проект (тип бани, объём работ и т.д.)" 
                rows="4"
                className="w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-300"
              ></textarea>
              
              {/* Защита от спама и настройки */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://formsubmit.co/thanks" />
              <input type="hidden" name="_subject" value="Новая заявка на отделку бани - Гомель" />
              
              <button 
                type="submit"
                className="w-full bg-white text-amber-700 hover:bg-amber-50 font-bold py-3 px-6 rounded-lg text-lg transition-colors"
              >
                Отправить заявку
              </button>
            </form>
          </div>

          {/* Контакты */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-2" />
              <span className="font-bold">+375 (29) 123-45-67</span>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-2" />
              <span className="font-bold">5922999@mail.ru</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-2" />
              <span className="font-bold">Гомель, Беларусь</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 Мастер по отделке бань и саун в Гомеле</p>
          <p className="text-gray-400 text-sm">Индивидуальный предприниматель | Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
