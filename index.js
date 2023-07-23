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



const root = document.querySelector('.root')

data.forEach((item) => {
        let transport;
    
        if (item.type === 'car') {
        transport = new Car(item.type, item.brand, item.price, item.image, item.doors);

        const divTransportCard = document.createElement('div');
        divTransportCard.className = 'transport__card';
        const divTransportImages = document.createElement('div');
        divTransportImages.className = 'transport__images';
        const image = document.createElement('img');
        image.src = item.image;
        const divTransportInformation = document.createElement('div');
        divTransportInformation.className = 'transport__information';
        divTransportInformation.textContent = transport.getInfo();
        const divTransportDoors = document.createElement('div');
        divTransportDoors.className = 'transport__doors';
        divTransportDoors.textContent = `Doors: ${transport.getDoorsCount()}`;
        const divTransportPrice = document.createElement('div');
        divTransportPrice.className = 'transport__price';
        divTransportPrice.textContent = `Price: ${transport.getPrice()}`;
        divTransportCard.append(divTransportImages, divTransportInformation, divTransportDoors, divTransportPrice);
        divTransportImages.append(image);
        root.append(divTransportCard);
    
        } else if (item.type === 'bike') {
        transport = new Bike(item.type, item.brand, item.price, item.image, item.maxSpeed);
        const divTransportCard = document.createElement('div');
        divTransportCard.className = 'transport__card';
        const divTransportImages = document.createElement('div');
        divTransportImages.className = 'transport__images';
        const image = document.createElement('img');
        image.src = item.image;
        const divTransportInformation = document.createElement('div');
        divTransportInformation.className = 'transport__information';
        divTransportInformation.textContent = transport.getInfo();
        const divTransportDoors = document.createElement('div');
        divTransportDoors.className = 'transport__doors';
        divTransportDoors.textContent = `Max Speed: ${transport.getMaxSpeed()} km/h`;
        const divTransportPrice = document.createElement('div');
        divTransportPrice.className = 'transport__price';
        divTransportPrice.textContent = `Price: ${transport.getPrice()}`;
        divTransportCard.append(divTransportImages, divTransportInformation, divTransportDoors, divTransportPrice);
        divTransportImages.append(image);
        root.append(divTransportCard);
        }
});