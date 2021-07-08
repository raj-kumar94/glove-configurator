export const tabConstants = {
    GLOVE_FOUNDATION: 'Glove Foundation',
    LEATHER_DESIGN: 'Leather & Design',
    PERSONAL_EMBROIDERY: 'Embroidery & Personalization',
    COMMON_COLORS: [
        {name: "Dark Camel", code: "darkcamel", rgb: "center center rgb(194, 160, 81)"},
        {name: "Camel", code: "camel", rgb: "center center rgb(216, 205, 159)"},
        {name: "Light Blue", code: "lightblue", rgb: "center center rgb(110, 152, 192)"},
        {name: "Pink", code: "pink", rgb: "center center rgb(204, 56, 109)"},
        {name: "Lemon Yellow", code: "lemonyellow", rgb: "center center rgb(255, 244, 79)"},
        {name: "Orange", code: "orange", rgb: "center center rgb(211, 121, 0)"},
        {name: "Natural", code: "natural", rgb: "center center rgb(185, 140, 32)"},
        {name: "Toffee", code: "toffee", rgb: "center center rgb(114, 62, 1)"},
        {name: "Dark Purple", code: "darkpurple", rgb: "center center rgb(37, 7, 31)"},
        {name: "Royal Blue", code: "royalblue", rgb: "center center rgb(0, 12, 107)"},
        {name: "Red", code: "red", rgb: "center center rgb(156, 0, 2)"},
        {name: "Dark Green", code: "darkgreen", rgb: "center center rgb(34 ,70, 33)"},
        {name: "Navy", code: "navy", rgb: "center center rgb(20, 35, 48)"},
        {name: "Black", code: "black", rgb: "center center rgb(23, 23, 18)"},
        {name: "Brown", code: "brown", rgb: "center center rgb(95 67 37)"},
        {name: "Wine", code: "wine", rgb: "center center rgb(104 36 26)"},
        {name: "White", code: "white", rgb: "center center rgb(255, 255, 255)"},
        {name: "Gray", code: "gray", rgb: "center center rgb(154 160 126)"},
        {name: "Dark Gray", code: "darkgray", rgb: "center center rgb(107 102 95)"},
    ]
    // GLOVE_FOUNDATION: 'Base',
    // LEATHER_DESIGN: 'Colors',
    // PERSONAL_EMBROIDERY: 'Personalize'
}

export const FIELDER_PART_NAMES = [
    {name: 'base', defaultColor: '', selectedColor: '', design_name: '', active: true},
    {name: 'wrist', defaultColor: 'gray', design_name: 'wrist_color', active: true},
    {name: 'logo', defaultColor: 'wine', design_name: 'wrist_logo_color', active: true}, // TODO: add correct design_name
    {name: 'f1', defaultColor: 'gray', design_name: 'index_inner_color', active: true},
    {name: 'f2', defaultColor: 'wine', design_name: 'index_outer_color', active: true},
    {name: 'f3', defaultColor: 'gray', design_name: 'middle_inner_color', active: true},
    {name: 'f4', defaultColor: 'gray', design_name: 'middle_outer_color', active: true},
    {name: 'f5', defaultColor: 'gray', design_name: 'ring_inner_color', active: true},
    {name: 'f6', defaultColor: 'gray', design_name: 'ring_outer_color', active: true},
    {name: 'f7', defaultColor: 'gray', design_name: 'pinky_inner_color', active: true},
    {name: 'f8', defaultColor: 'gray', design_name: 'pinky_outer_color', active: true},
    {name: 't1', defaultColor: 'gray', design_name: 'thumb_inner_color', active: true},
    {name: 't2', defaultColor: 'gray', design_name: 'thumb_outer_color', active: true},
    {name: 'piping', defaultColor: 'gray', design_name: 'binding_color', active: true},
    {name: 'welting', defaultColor: 'gray', design_name: 'welting_color', active: true},
    {name: 'palm', defaultColor: 'wine', design_name: 'palm_color', active: true},
    {name: 'web', defaultColor: 'gray', design_name: 'web_color', active: true},
    {name: 'lace', defaultColor: 'gray', design_name: 'lace_color', active: true},
    {name: 'hood', defaultColor: 'wine', design_name: 'finger_hood_color', active: true},
    {name: 'stitch', defaultColor: 'red', design_name: 'stitching_color', active: true},
]

export const WEB_TYPE_OPTION_MAPPING = {
    "T": "t",
    "I": "i",
    "H": "h",
    "Y": "y",
    "V": "v",
    "Basket": "basket",
    "Basket Lace": "basketlace",
    "Lace Cross": "lacecross",
    "One Piece (Catcher)": "onepiece",
    "Two Piece (Catcher)": "twopiece",
    "H (First Base)": "h",
    "Post (First Base)": "post",
    "One Piece": "onepiece",
    "Two Piece": "twopiece",
    "Shield": "shield",
    "Sealing": "sealing",
    "Lace Sealing": "lacesealing",
    "Cross": "cross",
    "Trapeze": "trapeze",
}