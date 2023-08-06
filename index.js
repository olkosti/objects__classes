class Transport {
    constructor(type, brand, price, image) {
        this.type = type;
        this.brand = brand;
        this.price = price;
        this.image = image;
    }

    getInfo() {
        return `Type: ${this.type}, Brand: ${this.brand}`;
    }
    
    getPrice() {
        return this.price;
    }
}

class Car extends Transport {
    constructor(type, brand, price, image, doors) {
        super(type, brand, price, image);
        this.doors = doors;
    }
    getDoorsCount() {
        return this.doors;
    }
}

class Bike extends Transport {
    constructor(type, brand, price, image, maxSpeed) {
        super(type, brand, price, image);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }
}

const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

const root = document.querySelector('.root');

//Функция для создания карточки транспорта
function createTransportCard(item, transport, specialInfo, specialValue) {
    //Создание элементов для карточки
    const divTransportCard = document.createElement('div');
    divTransportCard.className = 'transport__card';

    const divTransportImages = document.createElement('div');
    divTransportImages.className = 'transport__images';

    //Добавление изображения
    const image = document.createElement('img');
    image.src = item.image;
    divTransportImages.append(image);

    //Добавление информации о транспорте
    const divTransportInformation = document.createElement('div');
    divTransportInformation.className = 'transport__information';
    divTransportInformation.textContent = transport.getInfo();

    //Добавление спец. информации (двери для машины, макс. скорость для байка)
    const divTransportSpecial = document.createElement('div');
    divTransportSpecial.className = 'transport__special';
    divTransportSpecial.textContent = `${specialInfo}: ${specialValue}`;

    //Добавление цены 
    const divTransportPrice = document.createElement('div');
    divTransportPrice.className = 'transport__price';
    divTransportPrice.textContent = `Price: ${transport.getPrice()}`;

    //Собираем все части вместе и добавляем карточку в корневой элемент
    divTransportCard.append(
        divTransportImages,
        divTransportInformation,
        divTransportSpecial,
        divTransportPrice
    );
    root.append(divTransportCard);
}

//Обход массива данных и создание соттветсвующих объектов транспорта
data.forEach((item) => {
        //Если это машина
    
        if (item.type === 'car') {
            const transport = new Car(
                item.type,
                item.brand,
                item.price, 
                item.image, 
                item.doors
            );
                createTransportCard(item, transport, "Doors", transport.getDoorsCount());           
        }         
        //Если это байк
        else if (item.type === 'bike') {
            const transport = new Bike(
                item.type,
                item.brand,
                item.price, 
                item.image, 
                item.maxSpeed
            );
            createTransportCard(item, transport, "Max Speed", `${transport.getMaxSpeed()} km/h`);
        }
});