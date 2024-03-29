var MVVM = {
    
    init: function () {
        var Akida = function () {
            //debugger;
            this.checkout = ko.observable(false);
            this.productName = ko.observable();
            this.price = ko.observable();
            this.Description = ko.observable();
            this.image = ko.observable();
            this.instock = ko.observable();
            this.count = ko.observable(0);
            this.totalSum = ko.observable(0);
            this.names = ko.observable();
            this.phoneNumber = ko.observable();
            this.location = ko.observable();
            this.inquiryMessage = ko.observable();
            this.subject = ko.observable();
            this.locationText = ko.observable();
            this.selectedLocation = ko.observable();
            this.locationInput = ko.observable(false);
            this.specs = ko.observable([]);
            this.ordered = ko.observable(false);
            this.empty = ko.observable(false);
            this.cnt = ko.observable();
            this.shipping = ko.observable(false);
            this.shippingFee = ko.observable(110);
            //this.termsAgreed = ko.observable(false);
            this.AirPodsList = ko.observable([
              { productName: 'Oraimo Freepods 4', price: 3999, description: 'oraimo FreePods 4 ANC True Wireless Earbuds', image: 'https://cdn-img.oraimo.com/NG/album/oeb-e105d/oeb-e105d.png', inStock: 1, quantity: 1 ,specs: [
                  "Bluetooth version: 5.2",
                  "Wireless range: Up to 10 meters",
                  "Battery capacity (earbuds): 37mAh each",
                  "Battery capacity (charging case): 500mAh",
                  "Charging time (earbuds): Approximately 1.5 hours",
                  "Charging time (charging case): Approximately 2 hours",
                  "Playback time: Up to 4 hours on a single charge",
                  "Total playback time with charging case: Up to 24 hours",
                  "Touch controls for music and calls",
                  "Voice assistant support",
                  "Comfortable in-ear design",
                  "Input: Type-C",
                  "LED indicators for battery status",
                  "Compact and portable charging case"
                ]
                },
                { productName: 'Oraimo Freepods 4 Tuned by Burna Boy', price: 5999, description: 'Oraimo X Burna Boy SpacePods True Wireless Earbuds', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/6941651/1.jpg?2845', inStock: 1, quantity: 1 ,specs: [
                  "Burna Boy Exclusive Voice Prompt, t feels like he's talking to you! 'Noise cancellation','Game Mode','Transparency' ",
                  "Burna Boy Specially Tuned After almost a year of collaboration between Grammy Award winner Burna Boy and the oraimo audio team",
                  "Wireless range: Up to 10 meters",
                  "Battery capacity (earbuds): 37mAh each",
                  "Battery capacity (charging case): 500mAh",
                  "Charging time (earbuds): Approximately 1.5 hours",
                  "Charging time (charging case): Approximately 2 hours",
                  "Playback time: Up to 4 hours on a single charge",
                  "Total playback time with charging case: Up to 24 hours",
                  "Touch controls for music and calls",
                  "Input: Type-C",
                  "Compact and portable charging case"
                ]
                },
                { productName: 'AirPods Pro', price: 1500, description: 'Immerse yourself in pure audio perfection with AirPods Pro featuring advanced Noise Cancellation technology.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2019/11/Apple-Airpods-Pro.png', inStock: 1, quantity: 1, specs: [
                    "Active Noise Cancellation (ANC)",
                    "Transparency mode",
                    "Adaptive EQ for audio optimization",
                    "Sweat and water resistance (IPX4)",
                    "Wireless charging case included"
                  ]
                },
                { productName: 'JBL Live Pro 2', price: 19999, description: 'Elevate your audio experience to new heights with JBL Live Pro 2 – where style meets superior sound.', image: 'https://www.jbl.com.sg/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6a81b882/1.JBL_Live%20Pro%202_Product%20image_Hero_Blue.png?sw=537&sfrm=png', inStock: 1, quantity: 1 , specs: [
                    "True Wireless In-Ear Earbuds",
                    "Active Noise Cancellation (ANC)",
                    "Up to X hours of battery life (varies with ANC)",
                    "Touch controls for music and calls",
                    "Voice assistant support (e.g., Google Assistant, Siri)"
                  ]
                },
                { productName: 'Air R02', price: 1100, description: 'True wireless earbuds that comes with a Free anti fingerprint silicone case. Bluetooth v5.0 supports both android and IOS devices. Smooth in ear design', image: 'https://bejikkala.ir/wp-content/uploads/2023/04/%D9%87%D9%86%D8%AF%D8%B2%D9%81%D8%B1%DB%8C-%D8%A7%DB%8C%D8%B1%D9%BE%D8%A7%D8%AF-jbl-AIR-R02-%D8%A8%D8%A7-%DA%A9%D8%A7%D9%88%D8%B1-%D9%88-%DA%AF%DB%8C%D8%B1%D9%87-1.jpg', inStock: 1, quantity: 1, specs: [
                  "True Wireless Earbuds",
                  "Bluetooth v5.0",
                  "Up to 3 hours of listening time",
                  "Charging case included",
                  "Compatible with Android and iOS devices"
                  ]
                  },
                { productName: 'Air R03', price: 1300, description: 'Experience the freedom of Air-R03 Wireless TWS Earbuds – Your perfect companion for untethered music bliss!', image: 'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/web/product/picture/64/27671064/168519644485923900130.webp', inStock: 1, quantity: 1 , specs: [
                  "Wireless TWS Earbuds",
                  "Bluetooth v5.0",
                  "Up to X hours of listening time",
                  "Charging case with XmAh capacity",
                  "Compatible with Android and iOS devices"
                ]
                  },
                { productName: 'Sony WF-1000XM4', price: 4000, description: 'Dive into a world of unparalleled audio with Sony WF-1000XM4 and its industry-leading Noise Cancelation.', image: 'https://www.pricepoint.co.ke/wp-content/uploads/2022/06/Sony-WF-1000XM4-silver.jpg', inStock: 0, quantity: 1 ,specs: [
                    "Industry-leading Noise Cancellation",
                    "High-resolution audio with LDAC",
                    "Up to 8 hours of battery life on a single charge",
                    "Additional 16 hours with the charging case",
                    "Speak-to-Chat feature for automatic pause/play"
                  ]
                  },
                { productName: 'Samsung Galaxy Buds Pro', price: 4800, description: 'Unleash immersive sound with intelligent ANC - Samsung Galaxy Buds Pro is your gateway to audio brilliance.', image: 'https://digitalphones.co.ke/wp-content/uploads/2021/03/Samsung-Galaxy-Buds-Pro.jpg', inStock: 1, quantity: 1 , specs: [
                    "Intelligent Active Noise Cancellation (ANC)",
                    "360-degree surround sound with Dolby Atmos",
                    "Up to 8 hours of playback on a single charge",
                    "Additional 20 hours with the charging case",
                    "IPX7 water resistance for durability"
                  ]
                  },
                { productName: 'AirPods Max', price: 3500, description: 'Immerse yourself in a symphony of sound with AirPods Max - Over-Ear High-Fidelity Headphones.', image: 'https://help.apple.com/assets/61AFEC45FA5233173908347B/61B0509E1BF38548362237B5/en_US/b9f519195f84950573eea5088a49b964.png', inStock: 1, quantity: 1 , specs: [
                    "Active Noise Cancellation (ANC)",
                    "Spatial audio with dynamic head tracking",
                    "Up to 20 hours of battery life with ANC",
                    "Apple-designed H1 chip for seamless connectivity",
                    "Premium over-ear design with adaptive EQ"
                  ]
                  },
                { productName: 'Bose QuietComfort Earbuds', price: 4900, description: 'Indulge in pure serenity with Bose QuietComfort Earbuds - Noise-Canceling True Wireless Earbuds.', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/11/QuietComfort-Earbuds-003.jpg', inStock: 1, quantity: 1 , specs: [
                    "World-class noise cancellation technology",
                    "Up to 6 hours of battery life on a single charge",
                    "Additional 12 hours with the charging case",
                    "Secure and comfortable in-ear design",
                    "Customizable touch controls for music and calls"
                  ]
                  },
                { productName: 'Google Pixel Buds A-Series', price: 4200, description: 'Embark on a journey of rich sound and clear calls with Google Pixel Buds A-Series.', image: 'https://gadgetcentral.co.ke/wp-content/uploads/2023/05/1622726491_1635923.jpg', inStock: 1, quantity: 1, specs: [
                    "Rich sound and clear calls with Adaptive Sound",
                    "Up to 5 hours of listening time on a single charge",
                    "Additional 24 hours with the charging case",
                    "Quick Charge: 15 minutes for up to 3 hours of listening",
                    "Hands-free Google Assistant integration"
                  ]
                  },
                { productName: 'Anker Soundcore Liberty Air 2 Pro', price: 4300, description: 'Immerse yourself in a world of sound with Anker Soundcore Liberty Air 2 Pro - Hybrid Active Noise Cancellation.', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/918569/1.jpg?3445', inStock: 1, quantity: 1 , specs: [
                    "Hybrid Active Noise Cancellation for immersive sound",
                    "Up to 7 hours of playtime on a single charge",
                    "Additional 26 hours with the charging case",
                    "HearID personalized sound for a customized listening experience",
                    "4 built-in microphones for clear calls and voice assistant support"
                  ]
                  },
                { productName: 'Jabra Elite 85t', price: 3750, description: 'Escape into tranquility with Jabra Elite 85t and its advanced Active Noise Cancellation.', image: 'https://cdn.mos.cms.futurecdn.net/3WszNpeYzKi7vWaREaJnrM.jpg', inStock: 0, quantity: 1 , specs: [
                    "Advanced Active Noise Cancellation (ANC)",
                    "Up to 5.5 hours of battery life on a single charge",
                    "Additional 25 hours with the charging case",
                    "6-microphone technology for clear calls and wind noise protection",
                    "Customizable equalizer for personalized sound"
                  ]
                  },
                { productName: 'OnePlus Buds Pro', price: 3600, description: 'Elevate your audio experience with OnePlus Buds Pro - Smart Adaptive Noise Cancellation at its best.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2022/05/OnePlus-Buds-Pro.png', inStock: 1, quantity: 1 , specs: [
                    "Smart Adaptive Noise Cancellation for an immersive experience",
                    "Up to 5 hours of playback on a single charge",
                    "Additional 15 hours with the charging case",
                    "OnePlus Audio ID for personalized sound",
                    "Wireless charging capability"
                  ]
                  },
                { productName: 'Beats Powerbeats Pro', price: 3700, description: 'Experience high-performance audio with Beats Powerbeats Pro - your key to wireless earphone excellence.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2020/09/Powerbeats-Pro-b.jpg', inStock: 1, quantity: 1 , specs: [
                    "High-performance audio with powerful bass",
                    "Up to 9 hours of listening time on a single charge",
                    "Additional 24 hours with the charging case",
                    "Sweat and water-resistant design for active lifestyles",
                    "Secure-fit ear hooks for stability during workouts"
                  ]
                  },
                { productName: 'Sennheiser Momentum True Wireless 2', price: 2100, description: 'Indulge in exceptional sound quality with Sennheiser Momentum True Wireless 2.', image: 'https://m.media-amazon.com/images/I/81NXYrn8JiL.jpg', inStock: 1, quantity: 1 , specs: [
                    "Premium sound quality with deep bass and clear treble",
                    "Active Noise Cancellation for immersive audio experience",
                    "Up to 7 hours of playback on a single charge",
                    "Additional 21 hours with the charging case",
                    "Touch controls for music playback, calls, and voice assistant",
                    "Customizable touch controls and equalizer settings via the app",
                    "Transparent Hearing feature for ambient sound awareness",
                    "Bluetooth 5.1 for reliable wireless connectivity",
                    "IPX4 water resistance for sweat and splash resistance",
                    "Ergonomic design for a comfortable and secure fit"
                  ]
                  },
                { productName: 'Skullcandy Indy Evo', price: 2100, description: 'Experience freedom with Skullcandy Indy Evo - True Wireless In-Ear Earbuds.', image: 'https://m.media-amazon.com/images/I/6119HR9g38L.jpg', inStock: 0, quantity: 1 , specs: [
                    "True Wireless In-Ear Earbuds",
                    "Up to 30 hours of total battery life with the charging case",
                    "Built-in Tile tracker for easy locating",
                    "IP55 sweat, water, and dust resistance",
                    "Touch controls for music, calls, and voice assistant",
                    "Ambient Mode for environmental awareness",
                    "Rapid charge: 10 minutes for 2 hours of playback",
                    "Bluetooth connectivity for wireless convenience"
                  ]
                  },
                { productName: 'Huawei FreeBuds 4i', price: 2250, description: 'Dive into pure audio bliss with Huawei FreeBuds 4i - Active Noise Cancellation Earbuds.', image: 'https://m.media-amazon.com/images/I/61+M23aLr2L.jpg', inStock: 1, quantity: 1, specs: [
                    "Active Noise Cancellation for an immersive listening experience",
                    "Up to 10 hours of playback on a single charge",
                    "Additional 6.5 hours with the charging case",
                    "Dual-microphone system for clear calls and noise reduction",
                    "Touch controls for music playback and calls",
                    "Lightweight and comfortable in-ear design",
                    "Awareness mode for environmental sound awareness",
                    "Bluetooth 5.2 for stable and efficient wireless connectivity"
                  ]
                  },
                { productName: 'Beats Studio Buds', price: 3800, description: 'Unleash the power of sound with Beats Studio Buds - True Wireless Noise Cancelling Earbuds.', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/12/Beats-Studio-buds-001.jpg', inStock: 0, quantity: 1 ,specs: [
                    "Powerful and balanced sound profile",
                    "Active Noise Cancellation for immersive audio",
                    "Up to 8 hours of listening time on a single charge",
                    "Additional 16 hours with the charging case",
                    "Sweat and water-resistant design for workouts and active use",
                    "Secure-fit ear tips for comfort and stability",
                    "One-touch pairing with both Apple and Android devices",
                    "USB-C charging for quick and convenient power replenishment"
                  ]
                  },
                { productName: 'JBL Free X', price: 2500, description: 'Immerse yourself in the music with JBL Free X - Truly Wireless In-Ear Headphones.', image: 'https://mm.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwfe1a3d59/JBL_FREEx_Hero_Black.png', inStock: 1, quantity: 1 , specs: [
                    "Truly Wireless In-Ear Headphones",
                    "Up to 4 hours of playback on a single charge",
                    "Additional 20 hours with the charging case",
                    "Hands-free calls with built-in microphone",
                    "Comfortable and secure fit for active lifestyles",
                    "Splashproof design for protection against sweat and light rain",
                    "Easy touch controls for music playback and calls",
                    "Smart charging case with LED indicators"
                  ]
                  },
            ]);
            this.speakerList = ko.observable([
                { productName: 'Jbl Charge 5 ', price: 22000, description: 'JBL CHARGE 5 - Bold JBL Original Pro Sound', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/223269/1.jpg?7704', inStock: 1, quantity: 1, specs: [
                  "Powerful portable Bluetooth speaker",
                  "JBL Pro Sound with deep bass",
                  "Built-in rechargeable battery with up to 20 hours of playtime",
                  "IP67 waterproof and dustproof design",
                  "USB-C charging port and powerbank feature",
                  "Wireless Bluetooth streaming with multi-device connectivity",
                  "JBL PartyBoost for syncing multiple compatible speakers",
                  "Durable fabric material and rugged rubber housing",
                  "Integrated noise- and echo-canceling speakerphone"
                ]
                },
                { productName: 'Jbl Xtreme 3 ', price: 34000, description: '4 drivers and 2 JBL Bass Radiators', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/3055651/1.jpg?8563', inStock: 1, quantity: 1 , specs: [
                  "Powerful portable Bluetooth speaker",
                  "JBL Pro Sound with immersive stereo sound",
                  "Built-in rechargeable battery with up to 15 hours of playtime",
                  "IP67 waterproof and dustproof design",
                  "USB-C charging port and powerbank feature",
                  "Wireless Bluetooth streaming with multi-device connectivity",
                  "JBL PartyBoost for connecting multiple compatible speakers",
                  "Durable fabric material and rugged rubber housing",
                  "Integrated noise- and echo-canceling speakerphone"
                ]
                },
                { productName: 'JBL Flip 6 ', price: 16000, description: 'Louder, more powerful sound', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/2465651/1.jpg?5506', inStock: 1, quantity: 1 , specs: [
                  "Compact and portable Bluetooth speaker",
                  "JBL Signature Sound with clear and powerful audio",
                  "Built-in rechargeable battery with extended playtime",
                  "Waterproof and durable design for outdoor use",
                  "USB-C charging port",
                  "Wireless Bluetooth streaming with easy device pairing",
                  "Integrated speakerphone for hands-free calling",
                  "JBL Connect feature for linking multiple compatible speakers"
                ]
                },
                { productName: 'Flip Essential', price: 13000, description: 'All purpose, all weather companion.', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw586de883/JBL_FlipEssential_Back_006_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "Compact and portable Bluetooth speaker",
                  "JBL Signature Sound for clear and powerful audio",
                  "Built-in rechargeable battery with extended playtime",
                  "Waterproof and durable design for outdoor use",
                  "USB-C charging port",
                  "Wireless Bluetooth streaming with easy device pairing",
                  "Integrated speakerphone for hands-free calling",
                  "JBL Connect feature for linking multiple compatible speakers"
                ]
                },
                { productName: 'JBL Clip 4', price: 8500, description: 'Clip and Play. Cool, portable, and waterproof. The vibrant fresh looking JBL Clip 4 delivers surprisingly rich JBL Original Pro Sound in a compact package. The unique oval shape fits easy in your hand. ', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw2e0d5a46/101664_JBL_CLIP4_HERO_PHONE_GREY_PINK_x2.png?sw=1605&sh=1605', inStock: 1, quantity: 1, specs: [
                  "Ultra-portable Bluetooth speaker with carabiner clip",
                  "JBL Pro Sound for clear and powerful audio",
                  "Built-in rechargeable battery with up to 10 hours of playtime",
                  "IP67 waterproof and dustproof design",
                  "Clip it anywhere with the integrated carabiner",
                  "Wireless Bluetooth streaming with easy device pairing",
                  "Integrated speakerphone for hands-free calling",
                  "Durable fabric material and rugged rubber housing",
                  "USB-C charging port for quick and convenient charging"
                ]
                },
                { productName: 'JBL Go3', price: 6500, description: 'Grab & Go. JBL Go 3 features bold styling and rich JBL Pro Sound. With its new eye-catching edgy design, colorful fabrics and expressive details this a must-have accessory for your next outing', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw1c56c775/JBL_GO_3_DETAIL_1_BLUE_0008_1605x1605px.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "Ultra-portable Bluetooth speaker",
                  "JBL Pro Sound for clear and punchy audio",
                  "Built-in rechargeable battery with up to 5 hours of playtime",
                  "IP67 waterproof and dustproof design",
                  "Compact and stylish design with integrated loop",
                  "Wireless Bluetooth streaming with easy device pairing",
                  "Speakerphone feature for hands-free calling",
                  "Durable fabric material and rugged rubber housing",
                  "USB-C charging port for quick and convenient charging"
                ]
                },
                { productName: 'JBL GO Essentia', price: 5000, description: 'Grab and go. The JBL Go Essential is an ultra-compact portable Bluetooth speaker. Stream music via Bluetooth for up to 5 hours of JBL Original Pro Sound', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6c30e385/JBL_GO_ESSENTIAL_DETAIL_BLACK_31543_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "Output power: 3.1W",
                  "Frequency response: 180Hz - 20kHz",
                  "Dimensions: 3.4 x 2.8 x 1.2 inches",
                  "Weight: 0.18 kg",
                  "Bluetooth version: 4.2",
                  "Bluetooth profiles: A2DP V1.2, AVRCP V1.5",
                  "Bluetooth frequency: 2400 MHz - 2483.5 MHz",
                  "Bluetooth modulation: GFSK, π/4 DQPSK, 8DPSK",
                  "Bluetooth transmitter power: ≤ 6 dBm (EIRP)",
                  "Charging time: 2.5 hours",
                  "Maximum music playing time: 5 hours",
                  "Features: Charging cable, Waterproof, Wireless, Rechargeable battery, Bluetooth"
                ]
                },
                { productName: 'JBL Boombox3', price: 62000, description: 'Grab and go. The JBL Go Essential is an ultra-compact portable Bluetooth speaker. Stream music via Bluetooth for up to 5 hours of JBL Original Pro Sound', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6c30e385/JBL_GO_ESSENTIAL_DETAIL_BLACK_31543_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "Portable Bluetooth speaker",
                  "JBL Pro Sound for powerful audio",
                  "Massive battery capacity for extended playtime",
                  "IPX7 waterproof and durable design",
                  "Bluetooth connectivity with multi-device support",
                  "JBL PartyBoost for connecting multiple compatible speakers",
                  "Built-in powerbank feature for charging devices",
                  "Integrated carrying handle for easy portability",
                  "Durable fabric material and rugged construction",
                  // Add more specific features if available
                ]
                },
                { productName: 'JBL Boombox2', price: 54000, description: 'Massive Sound. All Day Long. Own the party. From backyard barbecues to weekend road trips, JBL Boombox 2 brings it with monstrous bass, bold design and up to 24 hours of play time', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw38da412a/JBL_BOOMBOX_2_HERO_020_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "Portable Bluetooth speaker",
                  "JBL Pro Sound for powerful audio",
                  "Massive battery capacity for extended playtime",
                  "IPX7 waterproof and durable design",
                  "Bluetooth connectivity with multi-device support",
                  "JBL PartyBoost for connecting multiple compatible speakers",
                  "Built-in powerbank feature for charging devices",
                  "Integrated carrying handle for easy portability",
                  "Durable fabric material and rugged construction",
                  // Add more specific features if available
                ]
                 },
                { productName: 'JBL Partybox310', price: 79000, description: 'Incredible JBL Sound with a Dazzling Light Show. Huge sound, dazzling lights and unbelievable power set this speaker apart from the crowd', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw91f4edd0/JBL_PartyBox_310_Hero_0176_x3.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "High-power portable Bluetooth party speaker",
                  "JBL Pro Sound for immersive audio",
                  "Dynamic light show with customizable patterns",
                  "Rechargeable battery for hours of playtime",
                  "IPX4 splashproof design for outdoor use",
                  "Wireless Bluetooth streaming with multi-device support",
                  "USB playback and DJ pad for music control",
                  "Microphone and guitar inputs for karaoke or live performances",
                  "JBL PartyBoost for linking multiple compatible speakers",
                  // Add more specific features if available
                ]
                },
                { productName: 'JBL Partybox710', price: 108000, description: 'The life of every party. The splashproof PartyBox 710 transforms your next event into a real party, concert or nightclub', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw1b0c500b/JBL_PARTYBOX_710_TABLET_0056_x5.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "High-power portable Bluetooth party speaker",
                  "JBL Pro Sound for immersive audio",
                  "Dynamic light show with customizable patterns",
                  "Rechargeable battery for extended playtime",
                  "IPX4 splashproof design for outdoor use",
                  "Wireless Bluetooth streaming with multi-device support",
                  "USB playback and DJ pad for music control",
                  "Microphone and guitar inputs for karaoke or live performances",
                  "JBL PartyBoost for connecting multiple compatible speakers",
                  // Add more specific features if available
                ]
                },
                { productName: 'JBL Partybox1000', price: 148000, description: 'The Ultimate Party Machine! The JBL PartyBox 1000 is a powerful party speaker with JBL sound quality and exciting full panel light show', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw356c45cb/JBL_PartyBox_1000_Hero_344_fire_x2.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "High-power portable Bluetooth party speaker",
                  "JBL Pro Sound for powerful and immersive audio",
                  "Dynamic light show with customizable patterns",
                  "Rechargeable battery for extended playtime",
                  "IPX4 splashproof design for outdoor use",
                  "Wireless Bluetooth streaming with multi-device support",
                  "USB playback and DJ pad for music control",
                  "Microphone and guitar inputs for karaoke or live performances",
                  "JBL PartyBoost for connecting multiple compatible speakers",
                  "Air Gesture wristband for interactive light control",
                  // Add more specific features if available
                ]
                 },
                { productName: 'JBL Partybox Encore Essential ', price: 41000, description: 'The portable JBL PartyBox Encore Essential speaker gives you up to 6 hours of non-stop fun. With an easy grab-and-go handle and splash proof design, you can always take the party with you.', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa43c2101/JBL_PARTYBOX_ENCORE_ESSENTIAL_HERO_1605x1605px.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "Output power: 100W",
                  "Frequency response: 50Hz - 20kHz @ -6dB",
                  "Dimensions: 10.87 x 12.87 x 11.54 inches",
                  "Weight: 5.9 kg",
                  "Bluetooth version: 5.1",
                  "Bluetooth profiles: A2DP 1.3, AVRCP 1.6",
                  "Bluetooth frequency: 2.4 GHz - 2.4835 GHz",
                  "Bluetooth modulation: GFSK, π/4 DQPSK, 8DPSK",
                  "Bluetooth transmitter power: ≤ 15 dBm (EIRP)",
                  "Charging time: 3.5 hours",
                  "Maximum music playing time: 6 hours",
                  "Lightshow: Yes",
                  "Splashproof: Yes (IPx4)",
                  "Charging cable: Yes",
                  "Wireless: Yes",
                  "Rechargeable battery: Yes",
                  "Bluetooth: Yes"
                ]
                },
                // { productName: 'JBL ', price: 0, description: '', image: '', inStock: 1, quantity: 1 , },
                // { productName: 'JBL ', price: 0, description: '', image: '', inStock: 1, quantity: 1 , },
                // { productName: 'JBL ', price: 0, description: '', image: '', inStock: 1, quantity: 1 , },
            ]);
            this.laptopList = ko.observable([
                { productName: 'HP EliteBook 830 G5', price: 45000, description: 'refurbished Intel Core i5 8th Gen 8GB RAM 256GB SSD 13.3 Inches FHD Display', image: 'https://laptopparts.co.ke/wp-content/uploads/2022/08/830-g5.jpg', inStock: 1, quantity: 1, specs: [
                  "Keyboard: HP Premium Collaboration Keyboard (optional backlit)",
                  "Pointing Device: Clickpad with multi-touch gesture support",
                  "Battery: 3-cell Li-ion, 50 Whr, 14 hours and 15 minutes life",
                  "AC Adapter: Output: 65 W USB Type-C™ adapter",
                  "Ports: Thunderbolt™ (USB Type-C™), USB 3.1 Gen 1, HDMI 1.4b, RJ-45, docking connector, headphone/microphone combo, AC power",
                  "Wireless: Intel® Dual Band Wireless-AC 8265 802.11a/b/g/n/ac (2×2) Wi-Fi, Bluetooth 4.2 Combo, vPro",
                  "Wired Protocol: Intel® I219-LM 10/100/1000 GbE, vPro",
                  "Security: HP BIOSphere Gen4, HP DriveLock, Power-on authentication, HP Secure Erase, HP Fingerprint Sensor, TPM 2.0 embedded security chip",
                  "Management: HP Driver Packs, HP System Software Manager, HP BIOS Config Utility, HP Client Catalog, HP Manageability Integration Kit Gen2",
                  "Available Software: Native Miracast support, HP LAN Protection, HP Connection Optimizer, HP 3D DriveGuard, HP ePrint Driver + JetAdvantage, HP Hotkey Support, HP Recovery Manager, HP JumpStart, HP Support Assistant, HP Noise Cancellation Software, HP PhoneWise, HP Client Security Gen4, Buy Office",
                  "Product Type: HP EliteBook 830 G5 Notebook PC",
                  "Product Colour: Silver"]
                  },
                { productName: 'HP Renewed Elitebook 840 G3', price: 30999, description: '6th Gen , Core I5, 8GB RAM- SSD 256 -14", Sliver', image: 'https://bitratedigital.co.ke/wp-content/uploads/2022/07/1167430-e3a7141c47a242c1a3e0fafe7132f4f7-1.jpg', inStock: 1, quantity: 1 , specs: [
                  "CPU: 2.5GHz Intel Core i5",
                  "Operating System: Windows Trial",
                  "RAM: 8GB",
                  "Hard Drive Size: 256GB SSD",
                  "Display Size: 14\"",
                  "Graphics Card: Intel HD Graphics 6000"
                  ]
                  },
                { productName: 'Apple Refurbished MacBook Pro', price: 35500, description: '13" Core I5 16GB RAM, 1TB HDD ( 2012) 2.5GHz- Silver', image: 'https://www.patabay.co.ke/wp-content/uploads/2023/03/m1-500x500.jpg.webp', inStock: 1, quantity: 1 , specs: ["Brand: Apple",
                "Processor: Intel Core i5-3000M Processor (2.5GHz, Dual-Core)",
                "Memory: 16GB RAM",
                "Storage: 1TB HDD",
                "Storage Interface: Serial-ATA, 5400RPM",
                "Optical Drive: 8x Dual-Layer SuperDrive",
                "Display: 13-inch LED-Backlit TFT Display Screen",
                "Display Resolution: 1280 X 800 Resolution",
                "Graphics Card: Intel HD Graphics 4000",
                "Graphics Card Type: Integrated Memory",
                "Networking: Ethernet [LAN], 10/100/1000Base-T",
                "Wi-Fi: [WLAN], 802.11a/b/g/n",
                "Bluetooth: 2.1+EDR",
                "Audio: Built-in Stereo Speakers, Headphone Jack, Microphone Jack",
                "Input Devices: Trackpad, Numeric Keyboard",
                "Expansion: 2 X USB 2.0 Ports, 1 X Firewire Ports, 1 X SD Card Slot",
                "Dimensions: 32.5 x 22.7 x 2.41 cm",
                "Weight: 2.04KG",
                "Year: 2012",
                "Condition: Refurbished"]
                  },
                { productName: 'Asus ROG Zephyrus G14', price: 115000, description: 'Unleash gaming excellence with the Asus ROG Zephyrus G14 - A high-performance gaming laptop that delivers power and portability.', image: 'https://www.phone-x.co.ke/wp-content/uploads/2022/07/2-11.jpg', inStock: 1, quantity: 1 , specs: [
                    "AMD Ryzen 9 5900HS or Ryzen 7 5800HS processor",
                    "16GB or 32GB DDR4 RAM",
                    "512GB or 1TB NVMe SSD storage options",
                    "14-inch QHD (2560 x 1440) or FHD (1920 x 1080) display",
                    "NVIDIA GeForce RTX 3060 or RTX 3070 GPU",
                    "Windows 10",
                    "Multiple USB ports, including USB-C with DisplayPort support",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
                    "720p HD webcam",
                    "Up to 10 hours of battery life (varies by usage)",
                    "AniMe Matrix LED display on the lid",
                    "Weight: Approximately 3.5 pounds (1.6 kg)"
                  ]
                  },
                { productName: 'Lenovo ThinkPad X1 Carbon', price: 60000, description: 'Power through your workday with the Lenovo ThinkPad X1 Carbon - An ultra-light business laptop that blends durability with sophistication.', image: 'https://www.lenovo.com/medias/lenovo-laptops-x1-carbon-6th-gen-hero.png?context=bWFzdGVyfHJvb3R8Mjk0NzU4fGltYWdlL3BuZ3xoYTIvaDZjLzE0NDQ3MTYzNzM2MDk0LnBuZ3xiMThiNWJlY2NjODExN2U0M2E4ZDE2NGNmMTM2NTExMWZkNzYwMzE4YTBmNDE5YzFiNThhODc2ZDEzYTMwZWQ5', inStock: 0, quantity: 1 , specs: [
                    "Intel Core i5, i7, or i9 processor",
                    "8GB, 16GB, or 32GB LPDDR4x RAM",
                    "256GB, 512GB, 1TB, or 2TB NVMe SSD storage options",
                    "14-inch FHD (1920 x 1080) or 4K UHD (3840 x 2160) display",
                    "Intel UHD Graphics or Intel Iris Xe Graphics",
                    "Windows 10 Pro",
                    "Multiple USB-C/Thunderbolt ports",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.2",
                    "720p HD or IR camera with ThinkShutter privacy cover",
                    "Up to 15 hours of battery life (varies by configuration and usage)",
                    "Dolby Atmos speaker system",
                    "Carbon fiber or aluminum chassis",
                    "Weight: Starting from 2.4 pounds (1.09 kg)"
                  ]
                  },
                { productName: 'Microsoft Surface Laptop 4', price: 53599.00, description: 'Achieve perfection with the Microsoft Surface Laptop 4 - A premium device that combines style, power, and versatility.', image: 'https://dreamaudio.co.ke/wp-content/uploads/2022/03/1618331810_1631868.jpg', inStock: 1, quantity: 1 , specs: [
                    "Intel Core i5 or i7, or AMD Ryzen 5 or 7 processor",
                    "8GB, 16GB, or 32GB LPDDR4x RAM",
                    "256GB, 512GB, 1TB, or 2TB SSD storage options",
                    "13.5-inch or 15-inch PixelSense display with FHD or 4K resolution",
                    "Intel Iris Xe Graphics or AMD Radeon Graphics",
                    "Windows 10 Home or Windows 10 Pro",
                    "USB-A, USB-C, Surface Connect ports",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
                    "720p HD front-facing camera",
                    "Up to 32GB of RAM for Intel models, up to 16GB for AMD models",
                    "Up to 32 hours of battery life (varies by configuration and usage)",
                    "Aluminum chassis",
                    "Weight: Starting from 2.79 pounds (1.27 kg) for 13.5-inch model, and starting from 3.40 pounds (1.54 kg) for 15-inch model"
                  ]
                  },
                { productName: 'Acer Predator Helios 300', price: 25399, description: 'Dominate the gaming arena with the Acer Predator Helios 300 - A gaming laptop that delivers unrivaled performance and style.', image: 'https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_Acer_Predator_Helios_300_PH315_01.jpg', inStock: 1, quantity: 1 , specs: [
                    "Intel Core i7 or i9 processor",
                    "16GB or 32GB DDR4 RAM",
                    "512GB or 1TB NVMe SSD storage options",
                    "15.6-inch Full HD (1920 x 1080) display with 144Hz or 240Hz refresh rate",
                    "NVIDIA GeForce RTX 3060 or RTX 3070 GPU",
                    "Windows 10 Home",
                    "Multiple USB ports, including USB-C",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
                    "720p HD webcam",
                    "Up to 6 hours of battery life (varies by usage)",
                    "Backlit keyboard with customizable RGB lighting",
                    "Metal chassis",
                    "Weight: Approximately 5.07 pounds (2.3 kg)"
                  ]
                  },
                { productName: 'Dell Inspiron 14', price: 48199, description: 'Experience reliability with the Dell Inspiron 14 - A budget-friendly laptop that doesn\'t compromise on performance and features.', image: 'https://www.saruk.co.ke/images/76121645260282.jpg', inStock: 1, quantity: 1, specs: [
                    "Intel Core i3, i5, or i7 processor",
                    "4GB, 8GB, or 16GB DDR4 RAM",
                    "128GB, 256GB, 512GB, or 1TB SSD storage options",
                    "14-inch Full HD (1920 x 1080) display",
                    "Intel UHD Graphics or discrete AMD or NVIDIA graphics",
                    "Windows 10",
                    "Multiple USB ports, including USB-C",
                    "Wi-Fi 5 (802.11ac), Bluetooth",
                    "720p HD webcam",
                    "Up to 10 hours of battery life (varies by configuration and usage)",
                    "Backlit keyboard (varies by model)",
                    "Plastic or aluminum chassis",
                    "Weight: Varies by model and configuration"
                  ]
                   },
                { productName: 'HP Envy x360', price: 120000, description: 'Immerse yourself in creativity with the HP Envy x360 - A convertible laptop that combines sleek design with powerful capabilities.', image: 'https://smartbuy.co.ke/wp-content/uploads/2021/05/hp-envy-x360-bd1033dx-3.jpg', inStock: 1, quantity: 1 , specs: [
                    "AMD Ryzen 5 or Ryzen 7, or Intel Core i5 or i7 processor",
                    "8GB or 16GB DDR4 RAM",
                    "256GB, 512GB, or 1TB SSD storage options",
                    "13.3-inch or 15.6-inch Full HD (1920 x 1080) or 4K UHD (3840 x 2160) display",
                    "Integrated AMD Radeon or Intel Iris Xe Graphics",
                    "Windows 10 Home",
                    "Multiple USB ports, including USB-C with Thunderbolt support",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
                    "HP Wide Vision HD or IR camera",
                    "Up to 10 hours of battery life (varies by usage)",
                    "Aluminum chassis with a 360-degree hinge for 2-in-1 functionality",
                    "Backlit keyboard",
                    "Weight: Varies by model and screen size"
                  ]
                  },
                { productName: 'Asus ZenBook 14', price: 99599, description: 'Experience elegance with the Asus ZenBook 14 - An ultraportable laptop that combines beauty and performance seamlessly.', image: 'https://www.saruk.co.ke/images/20351691670915.png', inStock: 1, quantity: 1 , specs: [
                    "Intel Core i5 or i7 processor",
                    "8GB or 16GB LPDDR4x RAM",
                    "256GB, 512GB, or 1TB PCIe NVMe SSD storage options",
                    "14-inch Full HD (1920 x 1080) or 14-inch 2.8K NanoEdge display",
                    "Integrated Intel Iris Xe Graphics or NVIDIA GeForce MX450",
                    "Windows 10",
                    "USB-A, USB-C, HDMI, microSD card reader",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
                    "720p HD IR camera",
                    "Up to 22 hours of battery life (varies by configuration and usage)",
                    "ErgoLift hinge for comfortable typing and improved cooling",
                    "Military-grade durability with MIL-STD-810G standard",
                    "Weight: Approximately 2.62 pounds (1.19 kg)"
                  ]
                  },
                { productName: 'Lenovo Legion 5', price: 55000, description: 'Conquer the gaming battlefield with the Lenovo Legion 5 - A gaming laptop that strikes the perfect balance between power and affordability.', image: 'https://vgnet.co.ke/wp-content/uploads/2022/06/Lenovo-Legion-5-Pro.jpg', inStock: 0, quantity: 1, specs: [
                    "AMD Ryzen 5 or Ryzen 7, or Intel Core i5 or i7 processor",
                    "8GB, 16GB, or 32GB DDR4 RAM",
                    "256GB, 512GB, or 1TB NVMe SSD storage options",
                    "15.6-inch Full HD (1920 x 1080) display with 120Hz or 144Hz refresh rate",
                    "NVIDIA GeForce GTX 1650, GTX 1660 Ti, RTX 3060, RTX 3070, or AMD Radeon Graphics",
                    "Windows 10 Home or Windows 10 Pro",
                    "Multiple USB ports, HDMI, Ethernet",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
                    "720p HD webcam",
                    "Up to 8 hours of battery life (varies by configuration and usage)",
                    "Legion TrueStrike keyboard with 4-zone RGB lighting",
                    "Legion Coldfront 2.0 cooling system",
                    "Plastic and metal construction",
                    "Weight: Approximately 5.5 pounds (2.5 kg)"
                ]
                },
                { productName: 'Surface Book 4', price: 270000, description: 'Unleash your creativity with the Surface Book 4 - A versatile 2-in-1 laptop that adapts to your every need.', image: 'https://www.yankodesign.com/images/design_news/2020/06/auto-draft/organami_1.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Razer Blade 15', price: 320000, description: 'Experience gaming excellence with the Razer Blade 15 - A gaming laptop that combines power, performance, and stunning visuals.', image: 'https://www.techspot.com/images/products/2022/laptops/org/2022-04-01-product-3.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'LG Gram 17', price: 139900, description: 'Elevate your productivity with the LG Gram 17 - An ultra-lightweight laptop that delivers power and endurance.', image: 'https://cdn.mos.cms.futurecdn.net/GggajARVjXZEc2qeHamATV.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Dell G3 15', price: 99900, description: 'Dominate the gaming arena with the Dell G3 15 - A budget-friendly gaming laptop that doesn\'t compromise on performance.', image: 'https://divinetechcomputerske.co.ke/wp-content/uploads/2022/12/DELL.png', inStock: 0, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Acer Swift 5', price: 109900, description: 'Experience portability with the Acer Swift 5 - An ultrathin and lightweight laptop that combines power with elegance.', image: 'https://cdn.uc.assets.prezly.com/c55bb2f8-4599-49bc-b301-ce585d597302/Acer-Swift-5-SF514-55-Standard_01.png', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'HP Omen 15', price: 139900, description: 'Conquer the gaming battlefield with the HP Omen 15 - A gaming laptop that delivers raw power and cutting-edge features.', image: 'https://onetechcomputers.co.ke/wp-content/uploads/2021/11/HP-OMEN-15-Gaming-Laptop-10TH-Gen-in-kenya.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Asus VivoBook S15', price: 89900, description: 'Experience style with the Asus VivoBook S15 - A laptop that combines performance with a bold and expressive design.', image: 'https://dlcdnwebimgs.asus.com/gain/418d0f3b-aeef-44a0-81e0-4a68cc46e9f0/', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Lenovo Yoga C940', price: 129900, description: 'Immerse yourself in versatility with the Lenovo Yoga C940 - A 2-in-1 laptop that adapts to your every need.', image: 'https://m.media-amazon.com/images/I/71fDYa07BZL.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Microsoft Surface Laptop Go', price: 69900, description: 'Simplify your life with the Microsoft Surface Laptop Go - A compact and lightweight laptop that doesn\'t compromise on performance.', image: 'https://vividgold.co.ke/wp-content/uploads/2021/04/microsoft-laptop.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
            ]);
            this.phoneList = ko.observable([
                { productName: 'Techno Spark 10', price: 19000, description: '128GB ROM+8GB RAM, 5000mAh,Blue 6.6"', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/4291641/1.jpg?8317', inStock: 1, quantity: 1 , specs: ["Height: 163.89mm","Width:75.39mm","Thickness:8.40mm","6.6''","HD+90Hz Refresh Rate","720*1612 Resolution","Octa-core","128GB ROM","5000mAh(typ)+18W","Android 13"]},
                { productName: 'Infinix Smart 7 HD', price: 13000, description: '2GB RAM, 64GB, 5000mAh, 4G(DUAL SIM) - Ink Black.', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/2338621/1.jpg?8497', inStock: 1, quantity: 1 , specs: ["Display: 6.6 inches", "Memory: 64GB + 2GB RAM", "Main Camera: 8MP+AI LENS DUAL FLASH LIGHT", "Selfie Camera: 5MP FF WITH FLASH LIGHT", "SIM Card Slot: DUAL NANO SIM+MICRO SD", "OS: Android™ 12", "Battery: 5000mAh"]},
                { productName: 'Infinix Note 30 4G', price: 25000, description: '256GB + 8GB RAM (Dual SIM), 5000mAh, Obsidian Black', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/6625831/1.jpg?4662', inStock: 1, quantity: 1 , specs: ["Display: 6.66\"", "Memory: 256GB + 8GB RAM", "Rear Camera: 64MP", "Front Camera: 16MP", "OS: Android 13", "CPU: MediaTek Helio G85", "Battery: 5000mAh"]},
                { productName: 'XIAOMI Redmi A2+', price: 14000, description: '3GB+64GB, 8.0MP, 5000mAh, 4G , Dual SIM - Black', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1909161/1.jpg?9623', inStock: 1, quantity: 1 , specs: ["Operating System: Android 12 (Go edition), MIUI", "Chipset: Mediatek Helio G36 (12 nm)", "Display: 6.52\" HD+", "Memory: 3GB RAM + 64GB Internal storage", "Camera: 8MP Rear Camera, 5MP Front Camera", "Battery: 5000mAh(Typ), Support 10W Charge, In-box 10W charger", "WIFI, Bluetooth 5.0", "Dual SIM + Micro-SD Card Slot", "2G: GSM: 850 900 1800 1900 MHz"]},
                { productName: 'Blackview A80Plus', price: 14000, description: 'Android 10.0, HD Camera, 4/64G Memory,4680Mah Battery-Black', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/182654/1.jpg?6559', inStock: 1, quantity: 1 , specs: ["Powered to Enjoy More", "4GB RAM + 64GB ROM", "4680mAh Big Battery", "5V/2A, Type-C Port", "HD+ 6.49’’ In-Cell Waterdrop Screen", "89% Screen-to-Body Ratio"]},
                { productName: 'Samsung Galaxy A04e', price: 15000, description: '32GB ROM 3GB RAM 6.5" 5000mAh Battery - Black', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/4609161/1.jpg?4264', inStock: 1, quantity: 1 , specs: ["6.5'' display", "Android 12", "Octa-core processor", "13MP Rear camera and 2MP front camera", "32GB ROM 3GB RAM", "5000mAh Battery"]},
                { productName: 'Itel S23-6.6"HD', price: 15000, description: '128 GB/4GB RAM (UP TO 8GB)-50MP-5000MAH-4G LTE-WATCH & PODS', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/01/3801651/1.jpg?0043', inStock: 1, quantity: 1 , specs: ["ITEL S23", "6.6\" HD+ 90HZ WATERDROP FULLSCREEN", "128GB ROM/4GB RAM(UP TO 8GB RAM)", "50MP AI REAR CAMERA", "HIGH-SPEED 4G LTE NETWORK", "5000MAH BATTERY/10W FAST CHARGE", "FINGERPRINT"]},
                { productName: 'Nokia C1 2nd Edition', price: 10000, description: '5.45" - 16GB + 1 GB - Dual Sim - 2500 MAh, + FREE GITS', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/559235/1.jpg?7574', inStock: 1, quantity: 1 , specs: ["5.45\" toughened Glass Display", "5MP Rear Camera with Flash", "5MP Front Camera with Flash", "Android 11", "1GB RAM, 16GB Storage", "Dual Sim, 3G", "2500 mAh Battery", "Quad Core 1.3GHz processor", "Google Assistant Button", "Micro SD card slot Supports up to 64 GB"]},
                { productName: 'Infinix Hot 30i', price: 18500, description: '4GB RAM, 128GB, 5000mAh, Dual SIM Cards', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/5477051/1.jpg?1651', inStock: 1, quantity: 1 , specs: ["SIZE 6.56-INCH", "SCREEN-TO-BODY RATIO 90%", "RESOLUTION 720*1612", "Android™ 12", "nternal Storage: 128GB", "RAM 4GB(UP TO 8GB)", "BATTERY CAPACITY 5000mAh"]},
                { productName: 'Oppo A17K', price: 17500, description: '6.56" INCHES DISPLAY (3GB+ 64GB )Android 12 (Dual SIM), 5000 MAh', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/1701001/1.jpg?3904', inStock: 1, quantity: 1 , specs: ["RAM: 3GB", "Storage: 64GB", "Battery: 5000 mAh", "Camera: 8MP + 2MP", "Selfie: 5MP", "Display: 6.56 inch, IPS LCD", "Processor: Mediatek Helio P35", "Connectivity: Dual sim, 4G, Wi-Fi", "Colors: Midnight Black, Lake Blue", "OS: Android 12"]},
                { productName: 'Realme C33', price: 21000, description: '6.5" Display, 4GB RAM + 128GB, Dual Sim, 5000mAh', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/3388031/2.jpg?8471', inStock: 1, quantity: 1 , specs: ["4GB RAM +128 GB internal storage", "5000mAh battery", "Dual-Sim", "Unisoc T612,1.8GHz processor", "50MP + 5MP front camera", "Memory Card, up to 1TB"]},
                { productName: 'Oppo A17', price: 22500, description: '4GB + 64GB, 50MP, (Dual SIM), Blue + Airpods', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/4880161/2.jpg?7654', inStock: 1, quantity: 1 , specs: ["RAM: 4GB", "Storage: 64GB", "Battery: 5000 mAh", "Camera: 50MP + 2MP", "Selfie: 5MP", "Display: 6.56 inch, IPS LCD", "Processor: Mediatek Helio P35", "Connectivity: Dual sim, 4G, Wi-Fi", "Colors: Midnight Black, Lake Blue", "OS: Android 12"]},
                { productName: 'Realme C30s', price: 13500, description: '6.5", 64GB ROM + 3GB RAM, 8MP (Dual SIM) 5000mAh - Blue', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/3484921/2.jpg?0896', inStock: 1, quantity: 1 , specs: ["6.5 inches, 102.0 cm2 (~82.1% screen-to-body ratio)", "4GB RAM", "64GB expandable storage, Card slot", "8-megapixel main rear camera", "5-megapixel front camera", "5,000mAh battery", "Android 12 (Go Edition)"]},
                { productName: 'Samsung Galaxy A14', price: 21500, description: '6.6", 64GB + 4GB, 50MP, Dual SIM, 5000mAh, Black', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/2270321/1.jpg?0408', inStock: 1, quantity: 1 , specs: ["Display: 6.6\"", "Memory: 64GB Internal, 4GB RAM", "OS: Android", "Rear Camera: 50MP + 5MP + 2MP + 2MP", "Front Camera: 13MP", "Battery:  5000mAh"]},
            ]);            
            this.AvailableList = ko.observable([
              { productName: 'Pro 3', price: 900, description: '+ FREE case.', image: 'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/H/O/122813_1667536907.jpg', inStock: 1, quantity: 1, specs: [
                "Listening time: 3 hours",
                "360mAh charging case",
                "Lightning charging cable",
                "Sweat and water resistance (IPX4)",
                "Wireless charging case included",
                "Compatible with Android and iOS devices"
                ]
                },
                { productName: 'Air R02', price: 1000, description: 'True wireless earbuds that comes with a Free anti fingerprint silicone case. Bluetooth v5.0 supports both android and IOS devices. Smooth in ear design', image: 'https://bejikkala.ir/wp-content/uploads/2023/04/%D9%87%D9%86%D8%AF%D8%B2%D9%81%D8%B1%DB%8C-%D8%A7%DB%8C%D8%B1%D9%BE%D8%A7%D8%AF-jbl-AIR-R02-%D8%A8%D8%A7-%DA%A9%D8%A7%D9%88%D8%B1-%D9%88-%DA%AF%DB%8C%D8%B1%D9%87-1.jpg', inStock: 1, quantity: 1, specs: [
                  "True Wireless Earbuds",
                  "Bluetooth v5.0",
                  "Up to 3 hours of listening time",
                  "Charging case included",
                  "Compatible with Android and iOS devices"
                ]
                },
                { productName: 'Air R03', price: 1300, description: 'Experience the freedom of Air-R03 Wireless TWS Earbuds – Your perfect companion for untethered music bliss!', image: 'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/web/product/picture/64/27671064/168519644491371200830.webp', inStock: 1, quantity: 1 , specs: [
                  "Wireless TWS Earbuds",
                  "Bluetooth v5.0",
                  "Up to 3 hours of listening time",
                  "Charging case with 360mAh capacity",
                  "Compatible with Android and iOS devices"
                ]
                },
                { productName: 'In-Ear Earphone Stereo', price: 800, description: 'Wireless Bluetooth 5.2 In-Ear Earphone Stereo Headset', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/576237/6.jpg?1179', inStock: 1, quantity: 1, specs: [
                  "Bluetooth Version: 5.2",
                  "Wearing Mode: Neckband",
                  "Charging Time: 2-3 Hours",
                  "Playing Time: About 6 Hours",
                  "Compatible Models: for Android/for iPhone"
                ]
                },
                { productName: 'AirPods Pro', price: 1500, description: 'Immerse yourself in pure audio perfection with AirPods Pro featuring advanced Noise Cancellation technology.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2019/11/Apple-Airpods-Pro.png', inStock: 1, quantity: 1, specs: [
                  "Active Noise Cancellation (ANC)",
                  "Transparency mode",
                  "Adaptive EQ for audio optimization",
                  "Sweat and water resistance (IPX4)",
                  "Wireless charging case included"
                ]
                },
                { productName: 'pro 5s', price: 1500, description: 'True Wireless Communication : Enjoy the freedom of movement with no wires to hold you back. The earphones connect wirelessly to your device for a seamless audio experience.', image: 'https://static.jamboshop.com/0/img/product/PRO5SEARBUDS-7/He7eefa6d014042c2acdb9e39710c9124M.png', inStock: 1, quantity: 1, specs: ["Listening time: 3 hours","360mAh charging case","Lightning charging cable"] },
                { productName: 'Air R03s', price: 1300, description: 'Introducing Denise - the Air-R02 with extraordinary sound quality and stylish design.', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/5093861/1.jpg?0428', inStock: 1, quantity: 1, specs: ["Listening time: 3 hours","360mAh charging case","Lightning charging cable"] },
                { productName: 'JBL TWS 4 Earbuds', price: 1100, description: 'Introducing Denise - the Air-R02 with extraordinary sound quality and stylish design.', image: 'https://images.africasokoni.co.ke/electronics/20211027/DLFT-1099a.jpg', inStock: 1, quantity: 1, specs: ["Sweat proof","Compatible with all mobile phone (android or ios) and music players","Touch sensitive controls"] },
                { productName: 'Stereo F9 Bluetooth Earphone', price: 900, description: 'Stereo F9 Bluetooth Earphone', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/812253/1.jpg?0315', inStock: 0, quantity: 1, specs: [
                  "About 5 hours music time/talk time for the 1 time fully charged earphone by 70& volume,  15 times for the charging box to charge the earphone.",
                  "Easy touch control by touching earphone for volume up/down, Play/Pause Song, Next/Previous Song, activate/deactivate Voice Assistant(Siri and Android Voice assistant), power on/off, Answer/Reject call",
                  "Power Level Display for the charging box and earphone",
                  "Bluetooth 5.0",
                  "Effective Distance: > 10m",
                  "Sweat/rainy waterproofing"
                ] 
                },
                { productName: 'Silicone Protective Case Cover', price: 150, description: 'Silicone material made, durable and wear-resistant', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/15/948983/1.jpg?7829', inStock: 0, quantity: 1, specs: [
                  "Portable and lightweight, easy to carry and use",
                  "Application: For AirPods Pro",
                  "Portable, Anti-scratch, Dust-proof, Anti-fall"
                ] },
                { productName: 'Silicone Protective Case Cover', price: 150, description: 'Silicone material made, durable and wear-resistant', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/948983/1.jpg?7828', inStock: 0, quantity: 1, specs: [
                  "Portable and lightweight, easy to carry and use",
                  "Application: For AirPods Pro",
                  "Portable, Anti-scratch, Dust-proof, Anti-fall"
                ] },
                { productName: 'Silicone Protective Case Cover', price: 150, description: 'Silicone material made, durable and wear-resistant', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/01/446983/1.jpg?2121', inStock: 0, quantity: 1, specs: [
                  "Portable and lightweight, easy to carry and use",
                  "Application: For AirPods Pro",
                  "Portable, Anti-scratch, Dust-proof, Anti-fall"
                ] },
                { productName: 'Silicone Protective Case Cover', price: 150, description: 'Silicone material made, durable and wear-resistant', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/646983/1.jpg?2174', inStock: 0, quantity: 1, specs: [
                  "Portable and lightweight, easy to carry and use",
                  "Application: For AirPods Pro",
                  "Portable, Anti-scratch, Dust-proof, Anti-fall"
                ] },
                { productName: 'Protective TPU Cover Case For AirPods Pro', price: 1000, description: 'Protective TPU Cover Case For AirPods Pro', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/693295/3.jpg?4138', inStock: 0, quantity: 1, specs: [
                  "Portable and lightweight, easy to carry and use",
                  "Application: For AirPods Pro",
                  "Portable, Anti-scratch, Dust-proof, Anti-fall"
                ] },
                { productName: '2Pcs Anti-lost Anti-slip Soft Earcaps Earphone', price: 250, description: '2Pcs Anti-lost Anti-slip Soft Earcaps Earphone', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/948983/1.jpg?7828', inStock: 0, quantity: 1, specs: [
                  "Made of soft silicone material, it is comfortable to use",
                  "Application: For AirPods Pro",
                  "Portable, Anti-scratch, Dust-proof, Anti-fall",
                  "You can send it to friends as a gif"
                ] },
                
            //     { productName: 'Apple Lightning to USB Cable (1 m)', price: 700, description: 'Experience durable and high-speed charging with the Apple Lightning to USB Cable (1 m).', image: 'assets/img/cables/Apple Lightning to USB Cable (1 m).jpg', inStock: 1, quantity: 1 },
            //     { productName: 'Apple Thunderbolt 3 (USB‑C) Cable (0.8 m)', price: 450, description: 'Unleash the power of Thunderbolt with the Apple Thunderbolt 3 (USB‑C) Cable (0.8 m).', image: 'assets/img/cables/Apple Thunderbolt 3 (USB‑C) Cable (0.8 m).jpg', inStock: 0, quantity: 1 },
            //     { productName: 'Otterbox Lightning - USB C (Fast Charge) | 1meter - Cloud Sky', price: 350, description: 'Charge with style using the OtterBox Fast Charge Premium Lightning to USB-C Cable in Cloud Sky.', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/5/9/59d2e8f5_3825924a_SW-OS-SW-TAP2-001.jpg', inStock: 1, quantity: 1 },
            //     { productName: 'Apple Watch Magnetic Charging Cable (1 m)', price: 200, description: 'Experience MagSafe technology with inductive charging using the Apple Watch Magnetic Charging Cable (1 m).', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1./preview/e/f/ef535460_64c2a777-Apple-Watch-Magnetic-Charging-Cable-1m.jpg', inStock: 1, quantity: 1 },
            //     { productName: 'Belkin USB-C TO LTG, BRAID SIL, 2M', price: 550, description: 'Step into the future with Belkin USB-C TO LTG, BRAID SIL, 2M - your key to seamless connectivity.', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/b/8/b892c0a1_e574acb7_SW-OS-SW-TAP2-027.jpg', inStock: 1, quantity: 1 },
            //     { productName: 'Apple Thunderbolt 4 (USB‑C) Pro Cable (1m)', price: 400, description: 'Unleash the power of Thunderbolt with the Apple Thunderbolt 4 (USB‑C) Pro Cable (1m).', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/c/f/cf996451_7d842dd8_Thunderbolt-Pro.png', inStock: 1, quantity: 1 },
            ]);
            this.locations = ko.observableArray(['CBD', 'Nairobi West', 'South C','Juja', 'Along Thika road', "Other"])
            this.cartProducts = ko.observableArray([]);
            var prods = [];
            this.termsAgreed = ko.observable(false);
            this.termsAgreed.subscribe(function(newValue) {
              // debugger;
              var orderButton = document.getElementById('location');
              if (newValue) {
                  // orderButton.disabled = false;
                  orderButton.classList.remove('disabled');
              }
              else{
                orderButton.classList.add('disabled');
              }
                /* Do something when ShowOpened changes.
                  newValue variable holds the new value, obviously. :) */
            });
            this.location.subscribe(function(newValue){
              debugger;
              // var self = this;
              //var n = self.locationText();
              var inp = document.getElementById('locationInput');
              if ( newValue =='Other') {
                this.locationInput(true);
                inp.classList.remove('disabled');
                debugger;
              }
              else{
                //this.locationInput(false);
                inp.classList.add('disabled');
                debugger;
              }
              debugger;
            }.bind(this));
            this.isProductInList = function(productName) {
                var availableProducts = this.AvailableList();
                
                for (var i = 0; i < availableProducts.length; i++) {
                    if (availableProducts[i].productName === productName) {
                        ////debugger;
                        return true; // Product found in the list
                    }
                }
                //debugger;
                return false; // Product not found in the list
            }
            function checkCount (){
                //debugger;
                var self = this;
                if (localStorage.getItem('prods')){
                    // Retrieve the existing prods array from localStorage
                    // prods = JSON.parse(localStorage.getItem('prods'));
                    //prods = JSON.parse(sessionStorage.getItem('prods'));
                    // Update the count based on the length of the retrieved array
                    self.count(prods.length);
                    if(self.count() === 0 && !self.ordered()){
                        self.empty(true);
                    }else{
                        self.empty(false);
                    }
                    localStorage.setItem('prods', JSON.stringify(prods));
                    return;
                }
                localStorage.setItem('prods', JSON.stringify(prods));
            }
            checkCount.call(this);
            this.sendMessageModal = function(){
                // $("#messageModal").modal('show');
            }
            this.sendInquiry = function(){
                //debugger;
                var self = this;
                let num = 254745655524;
                let msg = "inquire"
                // this.cartProducts().forEach(function(item) {
                //     msg += "%0A" +item.productName + "( " + item.image +" )"+ "for Ksh" + item.price ;
                // });
                let name = self.names();
                let location = self.location();
                //debugger;
                // var win = window.open(`https://wa.me/${num}?text=Hi,%20my%20name%20is%20${name}%20from%20${location}.%20I%20would%20like%20to%20${msg}.
                // `, '_blank');
                let email = 'gearhutsales@gmail.com';
                let subject = self.subject();
                let body = `Hi, my name is ${self.names()}. ` + self.inquiryMessage();
            
                // this.cartProducts().forEach(function (item) {
                //     body += `${item.productName} ( ${item.image} ) for Ksh ${item.price}\n`;
                // });
                var mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                // Open the mailtoLink in a new tab
                var win = window.open(mailtoLink, '_blank');

                // Focus on the new tab (optional)
                if (win) {
                    win.focus();
                } else {
                    // Handle cases where pop-up blocking is enabled
                    alert('Please allow pop-ups for this site to open the email composer.');
                }
            }
            this.sendMessage = function (value) {
                //debugger;
                var self = this;
                let num = 254745655524;
                let msg = ""
                this.cartProducts().forEach(function(item) {
                  if(item.quantity != 0)
                    msg += "%0A" + item.quantity + " - " +item.productName + " @ Ksh." + item.price ;
                  else
                    msg += "%0A" + "(REQUEST) - " + item.productName + " @ Ksh." + item.price;
                });//+ "( " + item.image +" )"
                let name = self.names();
                let location = self.location();
                let total = self.totalSum();
                //debugger;
                if(name === undefined || location === undefined || name === " " || location === " "){
                    alert("Please provide your name and location");
                    return;
                }
                var win = window.open(`https://wa.me/${num}?text=Hi,%20my%20name%20is%20${name}%20from%20*${location}*.%20I%20would%20like%20to%20order%20these:%20${msg}.%0ATotal%20=%20*${total}*`, '_blank');
                // var whatsappLink = `https://wa.me/${num}?text=Hi,%20my%20name%20is%20${name}%20from%20${location}.%20I%20would%20like%20to%20order%20these:%20${msg}.`;
                //debugger;
                //delete from the local storage 
                localStorage.removeItem('prods');
                self.cartProducts([]);
                self.ordered(true);
                prods = [];
                checkCount.call(this);
                checkCount.call(this);
                // window.location.href = whatsappLink;
                // win.focus();
            }.bind(this);
            this.viewCart = function(){
                //debugger;
                var self = this;
                var totalPrice = 0;
                var cnt = 0;
                $('#myModal').modal('show');
                if(prods.length == 0){
                    self.totalSum(totalPrice);
                }
                // self.AvailableList().forEach(function(item) {
                prods.forEach(function(item) {
                    totalPrice += item.price * item.quantity;
                    cnt++;
                });
                
                self.totalSum(totalPrice);
                self.cnt(cnt);
                checkCount.call(this);
                self.cartProducts(prods);
            }
            this.closeCart  = function (){
                //debugger;
                $('#myModal').modal('hide');
            }
            this.enableOrderButton = function() {
              var orderButton = document.getElementById('orderButton');
              if (orderButton) {
                  orderButton.disabled = false;
              }
            }
            this.addCart = function (value){
                // alert('Added to cart');
                //debugger;
                var self = this;
                self.ordered(false);
                //this.count(this.count() + 1);
                //self.cartProducts().push(value);
                prods.push(value);
                //Akida.checkCount();
                //self.checkCount();
                checkCount.call(this);
            }.bind(this);
            this.addRequest = function(value){
                var self = this;
                debugger;
                self.ordered(false);
                value.quantity = 0;
                //this.count(this.count() + 1);
                //self.cartProducts().push(value);
                prods.push(value);
                //Akida.checkCount();
                //self.checkCount();
                checkCount.call(this);
            }.bind(this);
            this.addToCart = function (value){
                // alert('Added to cart');
                debugger;
                // var self = this;

                // var productName = self.productName();
                // var price = self.price();
                // var description = self.Description();
                // var image = self.image();
                // var quantity = 1;
                // var value = [productName,price,description,image, quantity]

                // this.count(this.count() + 1);
                // //self.cartProducts().push(value);
                // prods.push(value);
            }.bind(this);
            this.removeCart = function (value){
                // alert('Added to cart');
                //debugger;
                var self = this;
                var cnt = 0;
                this.count(this.count() - 1);
                //self.cartProducts().push(value);
                //prods.pop(value);
                //prods.pop()
                self.cartProducts(prods);
                // self.cartProducts.remove(value);
                // Find the first occurrence of the item in the array
                var indexToRemove = self.cartProducts.indexOf(value);

                // Remove the item if found
                if (indexToRemove !== -1) {
                    self.cartProducts.splice(indexToRemove, 1);
                }
                var totalPrice = 0;
                // self.AvailableList().forEach(function(item) {
                self.cartProducts().forEach(function(item) {
                    totalPrice += item.price * item.quantity;
                    cnt++;
                });
                self.totalSum(totalPrice);
                self.cnt(cnt);
                checkCount.call(this);
            }.bind(this);
            this.addShipment = function (){
              //debugger;
              var self = this;
              self.totalSum(self.totalSum() + self.shippingFee());
            }.bind(this);
            this.removeShipment = function (){
              //debugger;
              var self = this;
              self.totalSum(self.totalSum() - self.shippingFee());
            }.bind(this);
            this.viewProduct = function(value){
                debugger;
                var self = this;
                self.productName(value.productName);
                self.price(value.price);
                self.Description(value.description);
                self.image(value.image);
                self.instock(value.instock);
                self.specs(value.specs);
                $('#ProductModal').modal('show');
                //self.cartProducts(prods);
            }.bind(this);
            this.closeProduct  = function (){
                //debugger;
                var self = this;
                self.productName('');
                self.price('');
                self.Description('');
                self.image('');
                $('#ProductModal').modal('hide');
            }.bind(this);
            this.requestProduct = function(){
                
            };
            this.totalCalc = function() {
                var self = this;
                var totalPrice = 0;
                var cnt = 0;
                //debugger;
                // Loop through each item in the array and add its price to the total
                if(prods.length == 0){
                    self.totalSum(totalPrice);
                }
                // self.AvailableList().forEach(function(item) {
                prods.forEach(function(item) {
                    totalPrice += item.price * item.quantity;
                    cnt+= 1;
                });
                self.totalSum(totalPrice);
                self.cnt(cnt);
            }.bind(this);
            this.dateTwoDaysFromNow = ko.computed(function () {
                var self = this;
                var twoDaysFromNow = new Date();
                twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2);
                return twoDaysFromNow.toDateString();
            });
            this.dateThreeDaysFromNow = ko.computed(function () {
                var self = this;
                var twoDaysFromNow = new Date();
                twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 3);
                return twoDaysFromNow.toDateString();
            });
        }
        var mansur = new Akida();
        ko.applyBindings(mansur);
        // Assuming your Akida is named Akida and the modal is in an element with the id "myModal"
        // ko.applyBindings(Akida, document.getElementById('myModal'));
    }
};


$(document).ready(function () {
    //debugger;
    MVVM.init();
});