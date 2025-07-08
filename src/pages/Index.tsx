import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [deliveryTime, setDeliveryTime] = useState(25);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setDeliveryTime((prev) => (prev > 15 ? prev - 1 : 25));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const restaurants = [
    {
      id: 1,
      name: "Суши Мастер",
      cuisine: "Японская",
      rating: 4.8,
      time: "20-30 мин",
      image: "/img/a152427a-1db6-4104-b3ca-836d4f1ae637.jpg",
    },
    {
      id: 2,
      name: "Пицца Экспресс",
      cuisine: "Итальянская",
      rating: 4.6,
      time: "25-35 мин",
      image: "/img/a152427a-1db6-4104-b3ca-836d4f1ae637.jpg",
    },
    {
      id: 3,
      name: "Бургер Хаус",
      cuisine: "Американская",
      rating: 4.7,
      time: "15-25 мин",
      image: "/img/a152427a-1db6-4104-b3ca-836d4f1ae637.jpg",
    },
    {
      id: 4,
      name: "Азиатская кухня",
      cuisine: "Азиатская",
      rating: 4.9,
      time: "30-40 мин",
      image: "/img/a152427a-1db6-4104-b3ca-836d4f1ae637.jpg",
    },
  ];

  const popularDishes = [
    {
      id: 1,
      name: "Маргарита",
      restaurant: "Пицца Экспресс",
      price: 590,
      time: "25 мин",
      image: "/img/a152427a-1db6-4104-b3ca-836d4f1ae637.jpg",
    },
    {
      id: 2,
      name: "Филадельфия",
      restaurant: "Суши Мастер",
      price: 420,
      time: "20 мин",
      image: "/img/a152427a-1db6-4104-b3ca-836d4f1ae637.jpg",
    },
    {
      id: 3,
      name: "Двойной чизбургер",
      restaurant: "Бургер Хаус",
      price: 350,
      time: "15 мин",
      image: "/img/a152427a-1db6-4104-b3ca-836d4f1ae637.jpg",
    },
    {
      id: 4,
      name: "Том Ям",
      restaurant: "Азиатская кухня",
      price: 460,
      time: "30 мин",
      image: "/img/a152427a-1db6-4104-b3ca-836d4f1ae637.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Utensils" className="text-orange-500" size={28} />
              <h1 className="text-2xl font-bold text-gray-900">FastFood</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Heart" size={20} />
                Избранное
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="ShoppingCart" size={20} />
                Корзина
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="User" size={20} />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Быстрая доставка
                <span className="block text-orange-500">любимой еды</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 font-body">
                Доставляем вашу любимую еду за {deliveryTime} минут. Более 500
                ресторанов и кафе в вашем городе.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Введите адрес доставки"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12 text-lg"
                  />
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-8 text-lg">
                  Найти еду
                </Button>
              </div>
              <div className="flex items-center mt-6 space-x-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" className="text-orange-500" size={20} />
                  <span className="text-sm text-gray-600">
                    Доставка {deliveryTime} мин
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" className="text-orange-500" size={20} />
                  <span className="text-sm text-gray-600">
                    Гарантия качества
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" className="text-orange-500" size={20} />
                  <span className="text-sm text-gray-600">Отслеживание</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/ffaafe33-a1e3-46f1-ab27-bfb8e4475f2c.jpg"
                alt="Быстрая доставка еды"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Популярные блюда
            </h3>
            <p className="text-gray-600 font-body">
              Самые заказываемые блюда в вашем районе
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDishes.map((dish) => (
              <Card
                key={dish.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader className="p-0">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{dish.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-500 mb-3">
                    {dish.restaurant}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-orange-500">
                        {dish.price}₽
                      </span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      <Icon name="Clock" size={12} className="mr-1" />
                      {dish.time}
                    </Badge>
                  </div>
                  <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Рестораны рядом
            </h3>
            <p className="text-gray-600 font-body">
              Выберите ресторан по вашему вкусу
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader className="p-0">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">
                    {restaurant.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500 mb-3">
                    {restaurant.cuisine}
                  </CardDescription>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" className="text-yellow-500" size={16} />
                      <span className="text-sm font-medium">
                        {restaurant.rating}
                      </span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      <Icon name="Clock" size={12} className="mr-1" />
                      {restaurant.time}
                    </Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    Открыть меню
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Tracking */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Отслеживайте заказ в реальном времени
                </h3>
                <p className="text-orange-100 mb-6 font-body">
                  Узнайте точное время доставки и следите за курьером на карте.
                  Получайте уведомления о каждом этапе приготовления.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <Icon
                        name="CheckCircle"
                        className="text-orange-500"
                        size={16}
                      />
                    </div>
                    <span>Заказ принят рестораном</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <Icon
                        name="Clock"
                        className="text-orange-500"
                        size={16}
                      />
                    </div>
                    <span>Готовится ({deliveryTime - 10} мин)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center">
                      <Icon
                        name="Truck"
                        className="text-orange-600"
                        size={16}
                      />
                    </div>
                    <span>Курьер в пути</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-center">
                    <Icon
                      name="MapPin"
                      className="text-orange-500 mx-auto mb-4"
                      size={48}
                    />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Ваш заказ
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Доставляется по адресу:
                    </p>
                    <p className="text-gray-900 font-medium mb-4">
                      ул. Примерная, 123
                    </p>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <p className="text-orange-600 font-medium">
                        Осталось: {deliveryTime} минут
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Utensils" className="text-orange-500" size={24} />
                <h4 className="text-xl font-bold">FastFood</h4>
              </div>
              <p className="text-gray-400 font-body">
                Быстрая доставка любимой еды в вашем городе
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Меню</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Рестораны
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Популярные блюда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Акции
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p>+7 (999) 123-45-67</p>
                <p>info@fastfood.ru</p>
                <p>Работаем 24/7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FastFood. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
