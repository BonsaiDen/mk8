app.core.data = {

    Characters: [],

    Groups: {

        'light.A': {
            speed: 2.25,
            acceleration: 3.25,
            weight: 2.25,
            handling: 4.75,
            traction: 4.5
        },

        'light.B': {
            speed: 2.75,
            acceleration: 3,
            weight: 2.75,
            handling: 4.25,
            traction: 4.25
        },

        'medium.A': {
            speed: 3.25,
            acceleration: 2.75,
            weight: 3.25,
            handling: 3.75,
            traction: 4
        },

        'medium.B': {
            speed: 3.75,
            acceleration: 2.5,
            weight: 3.75,
            handling: 3.25,
            traction: 3.75
        },

        'heavy.A': {
            speed: 4.25,
            acceleration: 2.25,
            weight: 4.25,
            handling: 2.75,
            traction: 3.5
        },

        'heavy.B': {
            speed: 4.25,
            acceleration: 2,
            weight: 4.75,
            handling: 2.75,
            traction: 3.25
        },

        'heavy.C': {
            speed: 4.75,
            acceleration: 2,
            weight: 4.75,
            handling: 2.25,
            traction: 3.25
        }

    },

    CharacterGroup: {
        BabyRosalina:  'light.A',
        Lemmy:         'light.A',
        BabyMario:     'light.A',
        BabyLuigi:     'light.A',
        BabyPeach:     'light.A',
        BabyDaisy:     'light.A',
        MiiLight:      'light.A',

        Toad:          'light.B',
        KoopaTroopa:   'light.B',
        ShyGuy:        'light.B',
        Lakitu:        'light.B',
        Toadette:      'light.B',
        Larry:         'light.B',
        Wendy:         'light.B',

        PrincessPeach: 'medium.A',
        PrincessDaisy: 'medium.A',
        Yoshi:         'medium.A',

        Mario:         'medium.B',
        Luigi:         'medium.B',
        Iggy:          'medium.B',
        Ludwig:        'medium.B',
        MiiMedium:     'medium.B',

        DonkeyKong:    'heavy.A',
        Waluigi:       'heavy.A',
        Rosalina:      'heavy.A',
        Roy:           'heavy.A',

        MetalMario:    'heavy.B',
        PinkGoldPeach: 'heavy.B',

        Wario:         'heavy.C',
        Bowser:        'heavy.C',
        Morton:        'heavy.C',
        MiiHeavy:      'heavy.C'

    },

    CharactersImage: {
        BabyDaisy: "img/24px-MK8_BabyDaisy_Icon.png",
        BabyLuigi: "img/31px-MK8_BabyLuigi_Icon.png",
        BabyMario: "img/32px-MK8_BabyMario_Icon.png",
        BabyPeach: "img/24px-MK8_BabyPeach_Icon.png",
        BabyRosalina: "img/25px-MK8_BabyRosalina_Icon.png",
        Bowser: "img/32px-MK8_Bowser_Icon.png",
        DonkeyKong: "img/25px-MK8_DKong_Icon.png",
        Iggy: "img/29px-MK8_Iggy_Icon.png",
        KoopaTroopa: "img/32px-MK8_Koopa_Icon.png",
        Lakitu: "img/26px-MK8_Lakitu_Icon.png",
        Larry: "img/30px-MK8_Larry_Icon.png",
        Lemmy: "img/32px-MK8_Lemmy_Icon.png",
        Ludwig: "img/32px-MK8_Ludwig_Icon.png",
        Luigi: "img/32px-MK8_Luigi_Icon.png",
        Mario: "img/32px-MK8_Mario_Icon.png",
        MetalMario: "img/32px-MK8_MMario_Icon.png",
        MiiLight: "img/32px-Mii_MK8.png",
        MiiMedium: "img/32px-Mii_MK8.png",
        MiiHeavy: "img/32px-Mii_MK8.png",
        Morton: "img/30px-MK8_Morton_Icon.png",
        PinkGoldPeach: "img/32px-MK8_PGPeach_Icon.png",
        PrincessDaisy: "img/32px-MK8_Daisy_Icon.png",
        PrincessPeach: "img/32px-MK8_Peach_Icon.png",
        Rosalina: "img/30px-MK8_Rosalina_Icon.png",
        Roy: "img/32px-MK8_Roy_Icon.png",
        ShyGuy: "img/32px-MK8_ShyGuy_Icon.png",
        Toad: "img/32px-MK8_Toad_Icon.png",
        Toadette: "img/32px-MK8_Toadette_Icon.png",
        Waluigi: "img/27px-MK8_Waluigi_Icon.png",
        Wario: "img/32px-MK8_Wario_Icon.png",
        Wendy: "img/32px-MK8_Wendy_Icon.png",
        Yoshi: "img/32px-MK8_Yoshi_Icon.png"
    },

    Bodies: [{
        "name": "Standard Kart",
        "img": "img/100px-StandardKartBodyMK8.png",
        "type": "Kart",
        "speed": 0,
        "acceleration": 0,
        "weight": 0,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Pipe Frame",
        "img": "img/100px-PipeFrameBodyMK8.png",
        "type": "Kart",
        "speed": 0,
        "acceleration": 0.25,
        "weight": -0.25,
        "handling": 0.5,
        "traction": -0.5
    }, {
        "name": "Mach 8",
        "img": "img/100px-Mach8BodyMK8.png",
        "type": "Kart",
        "speed": 0.5,
        "acceleration": -0.25,
        "weight": 0.25,
        "handling": 0,
        "traction": -1
    }, {
        "name": "Steel Driver",
        "img": "img/100px-Steel_Driver.png",
        "type": "Kart",
        "speed": 0,
        "acceleration": -0.5,
        "weight": 0.5,
        "handling": -0.5,
        "traction": 0.5
    }, {
        "name": "Cat Cruiser",
        "img": "img/100px-CatCruiserBodyMK8.png",
        "type": "Kart",
        "speed": 0,
        "acceleration": 0,
        "weight": 0,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Circuit Special",
        "img": "img/100px-CircuitSpecialBodyMK8.png",
        "type": "Kart",
        "speed": 0.5,
        "acceleration": -0.25,
        "weight": 0.25,
        "handling": 0,
        "traction": -1
    }, {
        "name": "Tri-Speeder",
        "img": "img/100px-TrispeederBodyMK8.png",
        "type": "Kart",
        "speed": 0,
        "acceleration": -0.5,
        "weight": 0.5,
        "handling": -0.5,
        "traction": 0.5
    }, {
        "name": "Badwagon",
        "img": "img/100px-BadwagonBodyMK8.png",
        "type": "Kart",
        "speed": 0,
        "acceleration": -0.5,
        "weight": 0.5,
        "handling": -0.5,
        "traction": 0.5
    }, {
        "name": "Prancer",
        "img": "img/100px-PrancerBodyMK8.png",
        "type": "Kart",
        "speed": 0,
        "acceleration": 0,
        "weight": 0,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Biddybuggy",
        "img": "img/100px-BiddybuggyBodyMK8.png",
        "type": "Kart",
        "speed": -0.75,
        "acceleration": 1.25,
        "weight": -0.5,
        "handling": 0.5,
        "traction": -0.25
    }, {
        "name": "Landship",
        "img": "img/100px-LandshipBodyMK8.png",
        "type": "Kart",
        "speed": -0.75,
        "acceleration": 1.25,
        "weight": -0.5,
        "handling": 0.5,
        "traction": -0.25
    }, {
        "name": "Sneeker",
        "img": "img/100px-SneakerBodyMK8.png",
        "type": "Kart",
        "speed": 0,
        "acceleration": 0,
        "weight": 0,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Sports Coupe",
        "img": "img/100px-SportsCoupeMK8.png",
        "type": "Kart",
        "speed": 0.5,
        "acceleration": -0.25,
        "weight": 0.25,
        "handling": 0,
        "traction": -1
    }, {
        "name": "Gold Standard",
        "img": "img/100px-Gold_Standard.png",
        "type": "Kart",
        "speed": 0.5,
        "acceleration": -0.25,
        "weight": 0.25,
        "handling": 0,
        "traction": -1
    }, {
        "name": "Standard Bike",
        "img": "img/100px-StandardBikeBodyMK8.png",
        "type": "Bike",
        "speed": 0,
        "acceleration": 0.25,
        "weight": -0.25,
        "handling": 0.5,
        "traction": -0.5
    }, {
        "name": "Comet",
        "img": "img/100px-CometBodyMK8.png",
        "type": "Bike",
        "speed": 0,
        "acceleration": 0.75,
        "weight": -0.25,
        "handling": 0.75,
        "traction": -1.25
    }, {
        "name": "Sport Bike",
        "img": "img/100px-SportBikeBodyMK8.png",
        "type": "Bike",
        "speed": 0,
        "acceleration": 0.75,
        "weight": -0.25,
        "handling": 0.75,
        "traction": -1.25
    }, {
        "name": "The Duke",
        "img": "img/100px-TheDukeBodyMK8.png",
        "type": "Bike",
        "speed": 0,
        "acceleration": 0,
        "weight": 0,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Flame Rider",
        "img": "img/100px-FlameRiderBodyMK8.png",
        "type": "Bike",
        "speed": 0,
        "acceleration": 0.25,
        "weight": -0.25,
        "handling": 0.5,
        "traction": -0.5
    }, {
        "name": "Varmint",
        "img": "img/100px-VarmintBodyMK8.png",
        "type": "Bike",
        "speed": 0,
        "acceleration": 0.25,
        "weight": -0.25,
        "handling": 0.5,
        "traction": -0.5
    }, {
        "name": "Mr. Scooty",
        "img": "img/100px-MrScootyBodyMK8.png",
        "type": "Bike",
        "speed": -0.75,
        "acceleration": 1.25,
        "weight": -0.5,
        "handling": 0.5,
        "traction": -0.25
    }, {
        "name": "Jet Bike",
        "img": "img/100px-JetBikeBodyMK8.png",
        "type": "Bike",
        "speed": 0,
        "acceleration": 0.75,
        "weight": -0.25,
        "handling": 0.75,
        "traction": -1.25
    }, {
        "name": "Yoshi Bike",
        "img": "img/100px-YoshiBikeBodyMK8.png",
        "type": "Bike",
        "speed": 0,
        "acceleration": 0.75,
        "weight": -0.25,
        "handling": 0.75,
        "traction": -1.25

    }, {
        "name": "Standard ATV",
        "img": "img/100px-StandardATVBodyMK8.png",
        "type": "ATV",
        "speed": 0,
        "acceleration": -0.5,
        "weight": 0.5,
        "handling": -0.5,
        "traction": 0.5
    }, {
        "name": "Wild Wiggler",
        "img": "img/100px-WildWigglerBodyMK8.png",
        "type": "ATV",
        "speed": 0,
        "acceleration": 0.25,
        "weight": -0.25,
        "handling": 0.5,
        "traction": -0.5
    }, {
        "name": "Teddy Buggy",
        "img": "img/100px-TeddyBuggyBodyMK8.png",
        "type": "ATV",
        "speed": 0,
        "acceleration": 0,
        "weight": 0,
        "handling": 0,
        "traction": 0
    }],

    Tires: [{
        "name": "Standard",
        "img": "img/100px-StandardTiresMK8.png",
        "type": "Tires",
        "speed": 0,
        "acceleration": 0,
        "weight": 0,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Monster",
        "img": "img/100px-MonsterTiresMK8.png",
        "type": "Tires",
        "speed": 0,
        "acceleration": -0.5,
        "weight": 0.5,
        "handling": -0.75,
        "traction": 0.75
    }, {
        "name": "Roller",
        "img": "img/100px-RollerTiresMK8.png",
        "type": "Tires",
        "speed": -0.5,
        "acceleration": 1,
        "weight": -0.5,
        "handling": 0.25,
        "traction": -0.25
    }, {
        "name": "Slim",
        "img": "img/100px-SlimTiresMK8.png",
        "type": "Tires",
        "speed": 0.25,
        "acceleration": -0.25,
        "weight": 0,
        "handling": 0.25,
        "traction": -0.5
    }, {
        "name": "Slick",
        "img": "img/100px-SlickTiresMK8.png",
        "type": "Tires",
        "speed": 0.5,
        "acceleration": -0.25,
        "weight": 0.25,
        "handling": 0,
        "traction": -1
    }, {
        "name": "Metal",
        "img": "img/100px-MetalTiresMK8.png",
        "type": "Tires",
        "speed": 0.25,
        "acceleration": -0.5,
        "weight": 0.5,
        "handling": 0,
        "traction": -0.5
    }, {
        "name": "Button",
        "img": "img/100px-ButtonTiresMK8.png",
        "type": "Tires",
        "speed": -0.5,
        "acceleration": 1,
        "weight": -0.5,
        "handling": 0.25,
        "traction": -0.25
    }, {
        "name": "Off-Road",
        "img": "img/100px-Off-Road.png",
        "type": "Tires",
        "speed": 0,
        "acceleration": 0,
        "weight": 0,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Sponge",
        "img": "img/100px-SpongeTiresMK8.png",
        "type": "Tires",
        "speed": -0.25,
        "acceleration": 0.25,
        "weight": -0.25,
        "handling": -0.25,
        "traction": 0.5
    }, {
        "name": "Wood",
        "img": "img/100px-WoodTiresMK8.png",
        "type": "Tires",
        "speed": -0.25,
        "acceleration": 0.25,
        "weight": -0.25,
        "handling": -0.25,
        "traction": 0.5
    }, {
        "name": "Cushion",
        "img": "img/100px-CushionTiresMK8.png",
        "type": "Tires",
        "speed": -0.25,
        "acceleration": 0.25,
        "weight": -0.25,
        "handling": -0.25,
        "traction": 0.5
    }, {
        "name": "Blue Standard",
        "img": "img/100px-Blue_Standard.png",
        "type": "Tires",
        "speed": 0,
        "acceleration": 0,
        "weight": 0,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Hot Monster",
        "img": "img/100px-HotMonsterTiresMK8.png",
        "type": "Tires",
        "speed": 0,
        "acceleration": -0.5,
        "weight": 0.5,
        "handling": -0.75,
        "traction": 0.75
    }, {
        "name": "Azure Roller",
        "img": "img/100px-AzureRollerTiresMK8.png",
        "type": "Tires",
        "speed": -0.5,
        "acceleration": 1,
        "weight": -0.5,
        "handling": 0.25,
        "traction": -0.25
    }, {
        "name": "Crimson Slim",
        "img": "img/100px-CrimsonSlimTiresMK8.png",
        "type": "Tires",
        "speed": 0.25,
        "acceleration": -0.25,
        "weight": 0,
        "handling": 0.25,
        "traction": -0.5
    }, {
        "name": "Cyber Slick",
        "img": "img/100px-CyberSlickTiresMK8.png",
        "type": "Tires",
        "speed": 0.5,
        "acceleration": -0.25,
        "weight": 0.25,
        "handling": 0,
        "traction": -1
    }, {
        "name": "Retro Off-Road",
        "img": "img/100px-Retro_Off-Road.png",
        "type": "Tires",
        "speed": 0,
        "acceleration": 0,
        "weight": 0,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Gold Tires",
        "img": "img/100px-Gold_Tires_MK8.png",
        "type": "Tires",
        "speed": 0.25,
        "acceleration": -0.5,
        "weight": 0.5,
        "handling": 0,
        "traction": -0.5
    }],


    Gliders: [{
        "name": "Super Glider",
        "img": "img/100px-SuperGliderMK8.png",
        "type": "Gliders",
        "speed": 0,
        "acceleration": 0,
        "weight": 0,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Cloud Glider",
        "img": "img/100px-Cloud_Glider.png",
        "type": "Gliders",
        "speed": 0,
        "acceleration": 0.25,
        "weight": -0.25,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Wario Wing",
        "img": "img/100px-WarioWingMK8.png",
        "type": "Gliders",
        "speed": 0,
        "acceleration": 0,
        "weight": 0,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Waddle Wing",
        "img": "img/100px-WaddleWingMK8.png",
        "type": "Gliders",
        "speed": 0,
        "acceleration": 0,
        "weight": 0,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Peach Parasol",
        "img": "img/100px-PeachParasolGliderMK8.png",
        "type": "Gliders",
        "speed": 0,
        "acceleration": 0.25,
        "weight": -0.25,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Parachute",
        "img": "img/100px-ParachuteGliderMK8.png",
        "type": "Gliders",
        "speed": 0,
        "acceleration": 0.25,
        "weight": -0.25,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Parafoil",
        "img": "img/100px-ParafoilGliderMK8.png",
        "type": "Gliders",
        "speed": 0,
        "acceleration": 0.25,
        "weight": -0.25,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Flower Glider",
        "img": "img/100px-FlowerGliderMK8.png",
        "type": "Gliders",
        "speed": 0,
        "acceleration": 0.25,
        "weight": -0.25,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Bowser Kite",
        "img": "img/100px-BowserKiteMK8.png",
        "type": "Gliders",
        "speed": 0,
        "acceleration": 0.25,
        "weight": -0.25,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Plane Glider",
        "img": "img/100px-PlaneGliderMK8.png",
        "type": "Gliders",
        "speed": 0,
        "acceleration": 0,
        "weight": 0,
        "handling": 0,
        "traction": 0
    }, {
        "name": "MKTV Parafoil",
        "img": "img/100px-MKTVParafoilGliderMK8.png",
        "type": "Gliders",
        "speed": 0,
        "acceleration": 0.25,
        "weight": -0.25,
        "handling": 0,
        "traction": 0
    }, {
        "name": "Gold Glider",
        "img": "img/100px-GoldGliderMK8.png",
        "type": "Gliders",
        "speed": 0,
        "acceleration": 0,
        "weight": 0,
        "handling": 0,
        "traction": 0
    }],

    BodyTypes: ['Kart', 'Bike', 'ATV']

};


// Combine character data
for(var i in app.core.data.CharacterGroup) {
    if (app.core.data.CharacterGroup.hasOwnProperty(i)) {

        var group = app.core.data.CharacterGroup[i],
            attributes = app.core.data.Groups[group];

        var c = {
            name: i,
            img: app.core.data.CharactersImage[i],
        };

        $.extend(c, attributes);
        app.core.data.Characters.push(c);

    }
}

app.core.data.Characters.sort(function(a, b) {
    if (a.weight === b.weight) {
        return a.name.localeCompare(b.name);

    } else {
        return a.weight - b.weight;
    }
});

app.core.data.Bodies.sort(function(a, b) {
    if (a.type === b.type) {
        return a.name.localeCompare(b.name);

    } else {
        return app.core.data.BodyTypes.indexOf(a.type) - app.core.data.BodyTypes.indexOf(b.type);
    }

});

app.core.data.Tires.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});

app.core.data.Gliders.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});

