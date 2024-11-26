import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Store = createContext()


export const StoreProvider = (props) => {

    const products = [
        {
            id: 1,
            name: 'Samsung Galaxy S24 Ultra 5G AI Smartphone',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/81vxWpPpgNL._SX679_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 139999,
            color: 'Black',
            category: 'Samsung',
            desc: 'Unleash innovation with the Samsung Galaxy S24 Ultra, featuring a stunning 6.8-inch Dynamic AMOLED 2X display. Capture breathtaking photos with its 200MP quad-camera system and enjoy 100x Space Zoom. Powered by the Snapdragon 8 Gen 3 processor, it ensures lightning-fast performance with up to 12GB RAM and 1TB storage. The robust 5000mAh battery supports fast and wireless charging for all-day connectivity. Integrated S Pen enhances creativity and productivity, while 5G and Wi-Fi 6E keep you connected. Built with Gorilla Glass Victus 2 and IP68 rating for durability, its ready for any adventure. Experience Samsung’s One UI 6.0 on Android for a seamless user interface. Available in Phantom Black, Cream, Green, and Lavender. Order now to elevate your smartphone experience!'
        },
        {
            id: 2,
            name: 'Panasonic Fully Automatic Machine',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/712G-LLV+NL._SX679_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 30000,
            color: 'Black',
            category: 'Panasonic',
            desc: 'The Panasonic Fully Automatic Washing Machine combines advanced technology with user-friendly features for an efficient laundry experience. It offers multiple wash programs to handle various fabric types and soil levels. With its powerful motor, it ensures thorough cleaning while being energy efficient. The machines smart sensor technology adjusts water usage based on load size, optimizing resource consumption. Its sleek design and compact size make it suitable for any home. The digital display simplifies operation, allowing users to select settings with ease. Additionally, the anti wrinkle feature helps reduce ironing time. With a durable build, it promises long lasting performance. Maintenance is straightforward, thanks to its self cleaning drum. Experience convenience and quality with Panasonics trusted engineering.'
        },
        {
            id: 3,
            name: 'Xiaomi 108 cm (43 inches) X Pro Smart Google TV',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/81Y0L0r8IJL._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 34999,
            color: 'Black',
            category: 'Xiaomi',
            desc: 'The Xiaomi 108 cm (43 inches) X Pro Smart Google TV offers an immersive viewing experience with stunning 4K resolution. Its sleek design enhances any living space while providing vibrant colors and sharp details. The built-in Google TV interface allows for seamless navigation and access to a vast library of apps and streaming services.With Google Assistant integrated, you can control the TV and smart home devices using voice commands. Multiple HDMI and USB ports offer versatile connectivity options. Enjoy gaming and binge-watching with minimal lag and a stunning visual experience. The Xiaomi X Pro is perfect for any entertainment enthusiast.'
        },
        {
            id: 4,
            name: 'Godrej 7 Kg Fully-Automatic Washing Machine (2024 Model',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/61Yu-OA7u2L._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 19990,
            color: 'Black',
            category: 'Godrej',
            desc: 'Introducing the Godrej 7 Kg Fully-Automatic Washing Machine (2024 Model), designed for efficiency and convenience. This model features a sleek, modern design that fits seamlessly into any laundry space. With a capacity of 7 kg, it is perfect for small to medium-sized families. The machine offers multiple wash programs tailored for different fabric types, ensuring optimal care for your clothes. With a user-friendly control panel and a transparent lid, monitoring your wash cycle is a breeze. Experience hassle-free laundry days with the Godrej 7 Kg Fully-Automatic Washing Machine, making laundry chores simpler and more efficient.Enjoy quiet operation with its low noise levels, thanks to a robust motor design. The energy-efficient features help save on utility bills while delivering excellent performance.'
        },
        {
            id: 5,
            name: 'Samsung Galaxy Watch 7 (44mm, Green, BT)',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/71QUv8DcRBL._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 31499,
            color: 'Black',
            category: 'Samsung',
            desc: 'The Samsung Galaxy Watch 7 (44mm, Green, BT) combines cutting-edge technology with sleek design. Featuring a powerful 3nm processor, it ensures lightning-fast performance and enhanced battery efficiency. The vibrant green color adds a touch of style, making it perfect for any occasion. With an array of health monitoring features, including heart rate tracking and sleep analysis, it supports your wellness journey. The watch offers customizable watch faces and a range of apps for a personalized experience. Its Bluetooth connectivity allows seamless pairing with your smartphone. Built with durable materials, its designed to withstand daily wear and tear. Enjoy fitness tracking for various activities, from running to swimming, with IP68 water resistance. The Galaxy Watch 7 is the ideal companion for those seeking functionality and elegance in one device.'
        },
        {
            id: 6,
            name: 'Apple iPhone 15 Pro Max (256 GB)',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/41zb7hwFUmL._SY445_SX342_QL70_FMwebp_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 134900,
            color: 'Black',
            category: 'Apple',
            desc: 'The Apple iPhone 15 Pro Max (256 GB) features a sleek and durable design with a titanium frame. It boasts a stunning 6.7-inch Super Retina XDR display for vibrant colors and sharp details. Powered by the A17 Pro chip, it offers exceptional performance and efficiency for gaming and multitasking. The camera system includes advanced computational photography, enabling stunning photos and videos, even in low light. Enhanced zoom capabilities provide versatility for capturing distant subjects. With 256 GB of storage, it accommodates all your apps, photos, and media seamlessly. It supports 5G connectivity for lightning-fast internet speeds. The device runs on iOS, ensuring a smooth and intuitive user experience. An improved battery life allows for all-day use, while MagSafe technology offers convenient wireless charging options. The iPhone 15 Pro Max is a premium smartphone, designed for users who demand the best.'
        },
        {
            id: 7,
            name: 'Godrej 1.5 Ton 3 Star, Turbo Mode Window AC',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/61aE+-zFTcL._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 33999,
            color: 'Black',
            category: 'Godrej',
            desc: 'The Godrej 1.5 Ton 3 Star Turbo Mode Window AC is an ideal solution for medium-sized rooms, effectively cooling spaces up to 150-180 sq. ft. With its 3 Star energy rating, it ensures efficient power consumption, helping to keep electricity bills manageable. The Turbo Mode feature provides rapid cooling for immediate comfort, while the anti-bacterial filter enhances indoor air quality by eliminating dust and allergens. Designed for quiet operation, it’s perfect for bedrooms and living areas, and the user-friendly remote control allows for easy adjustments. The auto-restart function maintains previous settings after power outages, ensuring uninterrupted comfort. Built with durable materials and eco-friendly refrigerant, it is both sustainable and long-lasting, and its sleek design seamlessly integrates with any home décor.'
        },
        {
            id: 8,
            name: 'Godrej 223 L 3 Star  Refrigrator',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/51vLVJBQV7L._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 21699,
            color: 'Black',
            category: 'Godrej',
            desc: 'The Godrej 223 L 3 Star Convertible Refrigerator is an ideal choice for modern households, combining efficiency and versatility. With a spacious 223-liter capacity, it accommodates a variety of food items, making it perfect for families. Its convertible feature allows you to adjust the compartments as per your needs, providing flexibility for storage. The 3-star energy rating ensures lower electricity consumption while maintaining optimal cooling performance. Designed with a sleek finish, it adds a touch of elegance to your kitchen decor. The refrigerator is equipped with an advanced cooling technology that maintains consistent temperatures, keeping your food fresh for longer. It features toughened glass shelves, offering durability and easy maintenance. Additionally, the intelligent inverter compressor optimizes energy use, reducing noise levels.'
        },
        {
            id: 9,
            name: 'OnePlus Nord Buds  Wireless Earbuds',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/611BCw7ulaL._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 1599,
            color: 'Black',
            category: 'Oneplus',
            desc: 'The OnePlus Nord Buds 2R True Wireless Earbuds offer a sleek and modern design that seamlessly blends style with functionality. Equipped with advanced noise cancellation technology, they ensure an immersive listening experience by minimizing background distractions. The earbuds deliver rich, high-fidelity sound, making them perfect for music lovers and podcast enthusiasts alike. With an impressive battery life, you can enjoy up to 38 hours of playback time with the charging case, ensuring your music never stops. The touch controls provide easy access to calls and playlists, enhancing convenience on the go. They also feature an ergonomic design for a comfortable fit, allowing for extended wear without discomfort. Water and sweat resistance make them suitable for workouts and outdoor activities. Additionally, the quick pairing feature simplifies connectivity with your devices.'
        },
        {
            id: 10,
            name: 'Samsung 1.5 Ton 5 Star, Wi-Fi Enabled Split Ac',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/7163G-X21WL._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 48590,
            color: 'Black',
            category: 'Samsung',
            desc: 'The Samsung 1.5 Ton 5 Star Wi-Fi Enabled Split AC combines advanced cooling technology with energy efficiency, making it an ideal choice for modern homes. With its 5-star rating, it ensures minimal energy consumption while delivering optimal performance, helping you save on electricity bills. The unit features a powerful compressor that quickly cools your space, providing comfort even during the hottest days. Its Wi-Fi connectivity allows for convenient remote control via a smartphone app, enabling you to adjust settings from anywhere. The sleek design fits seamlessly into any room decor, while the anti-corrosion coating ensures durability. Additionally, the air conditioner comes with a smart air flow feature that adjusts the direction of airflow for even cooling. It also includes a self-cleaning function, promoting hygiene by preventing dust accumulation.'
        },
        {
            id: 11,
            name: 'Panasonic (43 inches) 4K Ultra Smart LED',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/714L9-X8dPL._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 32490,
            color: 'Black',
            category: 'Panasonic',
            desc: 'The Panasonic 43-inch 4K Ultra Smart LED TV combines stunning picture quality with advanced smart features, delivering an immersive viewing experience. With its 4K resolution, it showcases vibrant colors and sharp details, making every scene come alive. The sleek design fits seamlessly into any space, while smart connectivity options allow for easy access to your favorite streaming services. Enhanced with Panasonics innovative technologies, this TV ensures excellent performance and reliability. Whether you are watching movies, playing games, or enjoying live sports, the powerful audio and visual capabilities create an engaging atmosphere. Enjoy endless entertainment possibilities with the user-friendly interface and integrated voice control features. Perfect for any home, this TV is designed to elevate your entertainment experience to new heights.'
        },
        {
            id: 12,
            name: 'Apple iPhone 16 Pro Max (1 TB) White Titanium',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/31qMi11K9PL._SY445_SX342_QL70_FMwebp_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 184899,
            color: 'Black',
            category: 'Apple',
            desc: 'The Apple iPhone 16 Pro Max in White Titanium is a stunning blend of elegance and power. Featuring a sleek, durable titanium frame, it exudes sophistication while providing robust protection. The device boasts a spacious 1 TB storage capacity, perfect for photography enthusiasts and heavy app users. Its stunning Super Retina XDR display delivers vibrant colors and exceptional clarity, making every image and video come to life. Powered by the latest A17 chip, it ensures lightning-fast performance and efficiency, enhancing multitasking capabilities. The advanced camera system captures breathtaking photos with incredible detail, even in low-light conditions. With improved battery life, you can stay connected throughout the day without worry. The iPhone 16 Pro Max also supports 5G connectivity, allowing for ultra-fast downloads and streaming.'
        },
        {
            id: 13,
            name: 'Samsung Galaxy S24 5G 8,128GB Smartphone',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/71r4P+34FuL._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 62900,
            color: 'Black',
            category: 'Samsung',
            desc: 'The Samsung Galaxy S24 5G in Onyx Black combines sleek design with powerful performance, making it a standout choice for tech enthusiasts. Equipped with 8GB of RAM and 128GB of storage, it offers ample space for apps, photos, and videos. The vibrant display delivers stunning visuals, enhancing everything from streaming to gaming. Powered by a robust processor, the S24 ensures smooth multitasking and quick app launches. Its advanced camera system captures breathtaking photos and videos in various lighting conditions, allowing users to unleash their creativity. With 5G connectivity, you’ll experience lightning-fast download speeds and seamless streaming. The long-lasting battery ensures you stay connected throughout the day without interruption. Additionally, the device features enhanced AI capabilities that personalize your user experience, optimizing performance based on your habits.'
        },
        {
            id: 14,
            name: 'Voltas Automatic Washing Machine',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/51Cfm2z7bDL._SL1000_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 8190,
            color: 'Black',
            category: 'Voltas',
            desc: 'The Voltas Beko 7Kg Semi-Automatic Top Loading Washing Machine is designed for efficiency and convenience, making laundry days easier. With a capacity of 7 kg, its ideal for small to medium-sized families. Its robust build and sleek design ensure durability while enhancing your laundry space. The machine features multiple wash programs, allowing you to customize cycles for different fabric types. Its powerful motor ensures effective cleaning, while the semi-automatic feature offers control over water levels and wash times. The easy-to-use control panel simplifies operation, even for first-time users. The machine also includes a lint filter, ensuring cleaner clothes with every wash. Additionally, its compact design makes it suitable for limited spaces, blending functionality with style. Enjoy a reliable laundry experience with the Voltas Beko 7Kg Semi-Automatic Washing Machine.'
        },
        {
            id: 15,
            name: 'Apple AirPods Max Headphones',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/71IiZfBppNL._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 59900,
            color: 'Black',
            category: 'Apple',
            desc: 'The Apple AirPods Max are premium wireless over-ear headphones designed for an immersive audio experience. Featuring active noise cancellation, they block external sounds, allowing listeners to focus solely on their music or calls. With a custom acoustic design, the headphones deliver rich, high-fidelity sound across a wide range of frequencies. The breathable knit mesh canopy and memory foam ear cushions ensure comfort during extended listening sessions. Seamless integration with Apple devices allows for easy switching and access to features like Spatial Audio, enhancing the surround sound experience. The intuitive Digital Crown offers precise volume control and playback options. Battery life lasts up to 20 hours with noise cancellation activated, making them ideal for long journeys. Built-in microphones provide clear call quality and voice recognition for Siri. '
        },
        {
            id: 16,
            name: 'Boat Airdopes 311 Pro Truly Wireless in Ear Ear Buds',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/614gbl-O98L._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 798,
            color: 'Black',
            category: 'Boat',
            desc: 'The Boat Airdopes 311 Pro Truly Wireless In-Ear Earbuds offer an immersive audio experience with powerful sound and deep bass. Designed for comfort and stability, these earbuds feature a sleek, ergonomic design that fits snugly in your ears, making them perfect for long listening sessions. Equipped with advanced Bluetooth technology, they provide seamless connectivity with your devices, ensuring you enjoy music and calls without interruption. With an impressive battery life, the Airdopes 311 Pro delivers hours of playback time on a single charge, complemented by a compact charging case for on-the-go convenience. The earbuds also come with touch controls, allowing you to easily manage your music and calls. Additionally, they offer IPX4 water resistance, making them suitable for workouts and outdoor use. With voice assistant support, you can access your favorite features hands-free.'
        },
        {
            id: 17,
            name: 'boAt Rockerz 255 Pro+ w/Upto 60 Hours Playback',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/61HZLDc2ykL._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 999,
            color: 'Black',
            category: 'Boat',
            desc: 'The boAt Rockerz 255 Pro+ is designed for audio enthusiasts who crave exceptional sound quality and long-lasting performance. With up to 60 hours of playback time, these wireless earbuds ensure you can enjoy your favorite tunes throughout the day without frequent recharging. The lightweight design and ergonomic fit provide comfort for extended wear, making them ideal for workouts or daily commutes. Featuring the latest Bluetooth technology, they offer seamless connectivity and a stable connection. The earbuds also come equipped with powerful 10mm drivers, delivering deep bass and crisp treble for an immersive listening experience. Additionally, the IPX7 water resistance rating protects against sweat and splashes, making them perfect for active lifestyles. With easy-to-use touch controls, managing your music and calls is effortless.'
        },
        {
            id: 18,
            name: 'LG 655 L  Smart Inverter Double Door Side by Side Refrigerator',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/61-1qpLcY5L._SX679_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 72990,
            color: 'Black',
            category: 'L.G',
            desc: 'The LG 655 L Frost Free Smart Inverter Double Door Side by Side Refrigerator combines modern design with advanced technology, making it an ideal addition to any kitchen. With a generous 655 liters of storage capacity, it provides ample space for all your groceries and beverages. The frost-free feature ensures that you never have to deal with manual defrosting, maintaining optimal freshness and convenience. Its smart inverter compressor not only enhances energy efficiency but also ensures consistent cooling, adapting to varying load conditions. The refrigerator is equipped with a multi-air flow system, ensuring even distribution of cool air to keep your food fresh for longer.Its durable build and premium finishes promise longevity and a sleek look. With LG’s commitment to quality, this refrigerator is designed to meet the needs of modern households, ensuring that your food stays fresher, longer.'
        },
        {
            id: 19,
            name: 'Whirlpool 6.5 kg Top Loading Washing Machine',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/61TciZ7OLPL._SX679_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 9380,
            color: 'Black',
            category: 'Whirpool',
            desc: 'The Whirlpool 6.5 kg Top Loading Washing Machine is designed for efficient and convenient laundry care. With its spacious drum capacity, it easily accommodates small to medium-sized loads, making it ideal for families. This model features a powerful wash system that ensures thorough cleaning, while its advanced technology optimizes water and energy usage. The user-friendly control panel allows for easy selection of wash cycles, catering to various fabric types and soil levels. Its unique design includes a lid that opens smoothly and securely, ensuring safety during operation. Additionally, the machine is equipped with a built-in soak feature that enhances stain removal. The durable construction promises longevity, while the sleek aesthetic complements any laundry space. With low vibration and noise levels, it operates quietly, allowing you to carry on with your day.'
        },
        {
            id: 20,
            name: 'Blue Star VC65D Single Door Visi Cooler ',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/711B5juZQ1L._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 11320,
            color: 'Black',
            category: 'Bluestar',
            desc: 'The Blue Star VC65D Single Door Visi Cooler is an ideal solution for displaying beverages and chilled products in retail environments. With its sleek design and glass door, it allows for maximum visibility, attracting customers to the products inside. The cooler features an energy-efficient compressor that ensures optimal cooling performance while minimizing electricity costs. Its adjustable shelving provides flexibility in organizing various product sizes, making it versatile for different retail needs. The interior LED lighting enhances product visibility, creating an inviting ambiance. Additionally, the digital temperature control system ensures precise temperature management, keeping products fresh. The durable construction of the cooler ensures long-lasting performance, making it a reliable choice for businesses. Its compact size makes it suitable for limited spaces without compromising on capacity.'
        },
        {
            id: 21,
            name: 'Vivo Y200e 5G (Saffron Delight, 8GB RAM, 128GB Storage)',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/41rpAG+7wDL._SY300_SX300_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 20994,
            color: 'Black',
            category: 'Vivo',
            desc: 'The Vivo Y200e 5G in Saffron Delight is a standout smartphone designed for those who appreciate both style and performance. With 8GB of RAM and 128GB of storage, it offers ample space for apps, photos, and multimedia, ensuring smooth multitasking and efficient usage. Its 5G capability enables ultra-fast internet connectivity, making streaming, gaming, and downloading a breeze. The vibrant Saffron Delight color adds a touch of elegance, making it visually appealing. Equipped with a powerful processor, the device ensures seamless operation even under demanding conditions. The camera setup captures stunning photos with rich details and vibrant colors, perfect for photography enthusiasts. Additionally, its sleek design fits comfortably in hand, enhancing the overall user experience. With a long-lasting battery, users can enjoy extended usage without frequent recharges. The Vivo Y200e 5G is an excellent choice for anyone seeking a reliable and stylish smartphone.'
        },
        {
            id: 22,
            name: 'OnePlus Nord Buds 3 Pro Truly Wireless Bluetooth Earbuds',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/61xCG0L3cSL._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 2799,
            color: 'Black',
            category: 'Oneplus',
            desc: 'The OnePlus Nord Buds 3 Pro are a stylish and high-performance pair of truly wireless Bluetooth earbuds designed for audiophiles on the go. Featuring 11 mm drivers, they deliver rich bass and crystal-clear highs for an immersive listening experience. Their ergonomic design ensures a comfortable fit, perfect for extended use, while the active noise cancellation (ANC) technology helps block out unwanted background noise. With an impressive battery life of up to 38 hours, these earbuds can keep you entertained all day long. Bluetooth 5.3 connectivity provides a stable and quick connection, making pairing seamless. Intuitive touch controls allow for easy music management and call handling, while their IP55 rating offers resistance to water and sweat, making them ideal for workouts. Fast charging capabilities mean you can get hours of playback with just a short charging session.'
        },
        {
            id: 23,
            name: 'Apple Watch Ultra GPS smart watch',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/91z5KuonXrL._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 73299,
            color: 'Black',
            category: 'Apple',
            desc: 'The Apple Watch Ultra (GPS + Cellular, 49 mm) is a cutting-edge smartwatch designed for adventure and versatility. With its rugged titanium case, it offers enhanced durability while maintaining a sleek aesthetic. The always-on Retina display is bright and vibrant, making it easy to read in any lighting conditions. Equipped with advanced health and fitness features, it includes heart rate monitoring, blood oxygen levels, and an ECG app, helping users stay on top of their well-being.Water resistance up to 100 meters makes it suitable for swimming and other water sports, while the built-in compass and depth gauge cater to explorers. The Apple Watch Ultra combines style, functionality, and robust performance, making it an ideal companion for both everyday use and extreme activities.With customizable watch faces and a wide array of apps, users can tailor their experience to fit their lifestyle.'
        },
        {
            id: 24,
            name: 'Apple iPhone 16 (128 GB) - White',
            href: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/61lLjrvDEkL._SL1500_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 79900,
            color: 'Black',
            category: 'Apple',
            desc: 'The Apple iPhone 16 (128 GB) in white embodies elegance and innovation. Featuring a sleek, minimalist design, it seamlessly fits into any lifestyle. The stunning Super Retina XDR display delivers vibrant colors and sharp contrasts, perfect for streaming videos or browsing photos. With its powerful A17 chip, performance is smooth and responsive, ensuring that multitasking and gaming are effortless. The advanced camera system captures breathtaking photos and videos, even in low light, making every moment memorable. Enhanced battery life keeps you connected longer, while iOS provides a user-friendly experience with regular updates. Privacy features ensure your data remains secure, giving you peace of mind. With 128 GB of storage, there’s ample space for apps, photos, and music. The iPhone 16 also supports 5G connectivity, enabling lightning-fast download speeds. Overall, it’s a perfect blend of style, performance, and functionality for today’s tech-savvy user.'
        }
      
        


    ]


    const [cartItem, setCartItem] = useState({});
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    








    const navigate = useNavigate()



    const addToCard = async (id) => {
        let cartData = structuredClone(cartItem)
        if (cartData[id]) {
            cartData[id] += 1

        }
        else {
            cartData[id] = 1
        }
        // console.log(cartData)
        setCartItem(cartData)
    }

    const updateQuantity = async (id, quantity) => {
        let cartData = structuredClone(cartItem)

        cartData[id] = quantity
        setCartItem(cartData)
    }

    const cartTotal = () => {
        let totalAmount = 0;

        for (const itemId in cartItem) {
            const itemQuantity = cartItem[itemId];

            // Convert itemId to a number for comparison
            const productInfo = products.find((product) => product.id === Number(itemId));
            if (productInfo && itemQuantity > 0) {
                totalAmount += productInfo.price * itemQuantity;
            }
        }
        return totalAmount;
    }

    const getTotalCount = () => {
        let totalCount = 0

        for (const id in cartItem) {
            totalCount = totalCount + cartItem[id]
        }
        console.log(totalCount)
        return totalCount
    }



    const handleChange = (e) => {
        setCouponCode(e.target.value);
    };

    const handleApply = () => {
        if (couponCode === 'kartik007') {
            toast.success('Coupon applied successfully!');
            setDiscount(10);
        } else {
            toast.error('Invalid coupon code.');
            setDiscount(0);
        }
        setCouponCode('');
    };

    const subTotal = cartTotal();
    const shippingFee = 100;
    const coupenDiscount = subTotal * discount / 100
    const total = subTotal + shippingFee - (subTotal * (discount / 100))

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phone: '',
    });
    const [errors, setErrors] = useState({});


    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'First Name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.street.trim()) newErrors.street = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip Code is required';
        if (!formData.country.trim()) newErrors.country = 'Country is required';
        if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid Phone Number is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const clearCart = () => {
        setCartItem({});

    };

    const [confirmedOrders, setConfirmedOrders] = useState([]);


    






    const value = {
        products,
        addToCard,
        getTotalCount,
        updateQuantity,
        cartItem,
        cartTotal,
        navigate,
        handleApply,
        handleChange,
        discount,
        couponCode,
        ToastContainer,
        subTotal,
        shippingFee,
        coupenDiscount,
        total,
        validateForm,
        setFormData,
        formData,
        confirmedOrders,
        setConfirmedOrders,
        setCartItem,
        clearCart, 
        errors


    }

    return (
        <>
            <Store.Provider value={value}>
                {props.children}
            </Store.Provider>

        </>
    )
}

export const useStore = () => {
    return useContext(Store)
}

