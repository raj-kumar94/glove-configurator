// import { filederPartsActiveInactive } from "./config/fielderConfig"

export const PART_NAME_MAPPING = {
    FINGER_PAD: 'fp',
    FINGER_HOOD: 'hood',
    FINGER_PAD_STITCH: 'fpstitch',
    FINGER_HOOD_STITCH: 'hoodstitch',
}

export const DEFAULT_SELECTION = {
    'selected_finger_hood_or_pad': "None",
    'selected_thumb_logo': 'E Logo'
}

export const tabConstants = {
    GLOVE_FOUNDATION: 'Glove Foundation',
    LEATHER_DESIGN: 'Leather & Design',
    PERSONAL_EMBROIDERY: 'Embroidery & Personalization',
    // COMMON_COLORS: [
    //     {name: "Dark Camel", code: "darkcamel", rgb: "center center rgb(194, 160, 81)"},
    //     {name: "Camel", code: "camel", rgb: "center center rgb(216, 205, 159)"},
    //     {name: "Light Blue", code: "lightblue", rgb: "center center rgb(110, 152, 192)"},
    //     {name: "Pink", code: "pink", rgb: "center center rgb(204, 56, 109)"},
    //     {name: "Lemon Yellow", code: "lemonyellow", rgb: "center center rgb(255, 244, 79)"},
    //     {name: "Orange", code: "orange", rgb: "center center rgb(211, 121, 0)"},
    //     {name: "Natural", code: "natural", rgb: "center center rgb(185, 140, 32)"},
    //     {name: "Toffee", code: "toffee", rgb: "center center rgb(114, 62, 1)"},
    //     {name: "Dark Purple", code: "darkpurple", rgb: "center center rgb(37, 7, 31)"},
    //     {name: "Royal Blue", code: "royalblue", rgb: "center center rgb(0, 12, 107)"},
    //     {name: "Red", code: "red", rgb: "center center rgb(156, 0, 2)"},
    //     {name: "Dark Green", code: "darkgreen", rgb: "center center rgb(34 ,70, 33)"},
    //     {name: "Navy", code: "navy", rgb: "center center rgb(20, 35, 48)"},
    //     {name: "Black", code: "black", rgb: "center center rgb(23, 23, 18)"},
    //     {name: "Brown", code: "brown", rgb: "center center rgb(95 67 37)"},
    //     {name: "Wine", code: "wine", rgb: "center center rgb(104 36 26)"},
    //     {name: "White", code: "white", rgb: "center center rgb(240 239 228)"},
    //     {name: "Gray", code: "gray", rgb: "center center rgb(154 160 126)"},
    //     {name: "Dark Gray", code: "darkgray", rgb: "center center rgb(107 102 95)"},
    // ]
    // GLOVE_FOUNDATION: 'Base',
    // LEATHER_DESIGN: 'Colors',
    // PERSONAL_EMBROIDERY: 'Personalize'
}

export const KIP_COMMOM_COLOR = [
    {name: "Dark Camel", code: "darkcamel", rgb: "center center rgb(194, 160, 81)"},
    {name: "Camel", code: "camel", rgb: "center center rgb(216, 205, 159)"},
    {name: "Light Blue", code: "lightblue", rgb: "center center rgb(110, 152, 192)"},
    {name: "Pink", code: "pink", rgb: "center center rgb(204, 56, 109)"},
    {name: "Lemon Yellow", code: "lemonyellow", rgb: "center center rgb(247 233 2)"},
    {name: "Orange", code: "orange", rgb: "center center rgb(211, 121, 0)"},
    {name: "Natural", code: "natural", rgb: "center center rgb(185, 140, 32)"},
    {name: "Toffee", code: "toffee", rgb: "center center rgb(114, 62, 1)"},
    {name: "Tiffany", code: "tiffany", rgb: "center center rgb(147 207 179)"},
    {name: "Dark Purple", code: "darkpurple", rgb: "center center rgb(50 11 45)"},
    {name: "Royal Blue", code: "royalblue", rgb: "center center rgb(0 15 154)"},
    {name: "Red", code: "red", rgb: "center center rgb(156, 0, 2)"},
    {name: "Dark Green", code: "darkgreen", rgb: "center center rgb(34 ,70, 33)"},
    {name: "Navy", code: "navy", rgb: "center center rgb(29 51 70)"},
    {name: "Black", code: "black", rgb: "center center rgb(23, 23, 18)"},
    {name: "Brown", code: "brown", rgb: "center center rgb(95 67 37)"},
    {name: "Wine", code: "wine", rgb: "center center rgb(104 36 26)"},
    {name: "White", code: "white", rgb: "center center rgb(240 239 228)"},
    {name: "Gray", code: "gray", rgb: "center center rgb(154 160 126)"},
    {name: "Dark Gray", code: "darkgray", rgb: "center center rgb(107 102 95)"},
]

export const US_STEERHIDE_COMMOM_COLOR = [
    {name: "Camel", code: "camel", rgb: "center center rgb(160 129 57)"},
    {name: "Pink", code: "pink", rgb: "center center rgb(208 57 117)"},
    {name: "Lemon Yellow", code: "lemonyellow", rgb: "center center rgb(231 217 1)"},
    {name: "Orange", code: "orange", rgb: "center center rgb(159 74 0)"},
    {name: "Natural", code: "natural", rgb: "center center rgb(203 134 2)"},
    {name: "Coffee", code: "coffee", rgb: "center center rgb(94 50 24)"},
    {name: "Tan", code: "tan", rgb: "center center rgb(124 66 0)"},
    {name: "Purple", code: "purple", rgb: "center center rgb(79 39 45)"},
    {name: "Water Blue", code: "waterblue", rgb: "center center rgb(0 86 190)"},
    {name: "Royal Blue", code: "royalblue", rgb: "center center rgb(24 58 179)"},
    {name: "Red", code: "red", rgb: "center center rgb(194 51 35)"},
    {name: "Navy", code: "navy", rgb: "center center rgb(67 67 73)"},
    {name: "Black", code: "black", rgb: "center center rgb(44 44 41)"},
    {name: "White", code: "white", rgb: "center center rgb(228 228 216)"},
    {name: "Tiffany", code: "tiffany", rgb: "center center rgb(147 207 179)"},
    {name: "Gray", code: "gray", rgb: "center center rgb(133 133 119)"},
    {name: "Apple Green", code: "applegreen", rgb: "center center rgb(148 169 1)"},
    {name: "Dark Green", code: "darkgreen", rgb: "center center rgb(32 55 41)"},
]

export const COWHIDE_COMMOM_COLOR = [
    {name: "Camel", code: "camel", rgb: "center center rgb(181 164 92)"},
    {name: "Natural", code: "natural", rgb: "center center rgb(196 126 5)"},
    {name: "Royal Blue", code: "royalblue", rgb: "center center rgb(39 47 115)"},
    {name: "Red", code: "red", rgb: "center center rgb(172 29 25)"},
    {name: "Navy Blue", code: "navyblue", rgb: "center center rgb(33 37 45)"},
    {name: "Black", code: "black", rgb: "center center rgb(37 36 29)"},
    {name: "Dark Brown", code: "darkbrown", rgb: "center center rgb(102 73 61)"},
    {name: "White", code: "white", rgb: "center center rgb(195 189 178)"},
    {name: "Gray", code: "gray", rgb: "center center rgb(176 171 146)"},
    {name: "Dark Gray", code: "darkgray", rgb: "center center rgb(101 107 95)"},
]

const COLOR_NAME_AND_CODE_MAPPING = {};
for(let c of KIP_COMMOM_COLOR) {
    COLOR_NAME_AND_CODE_MAPPING[c.code] = c.name;
}
for(let c of US_STEERHIDE_COMMOM_COLOR) {
    COLOR_NAME_AND_CODE_MAPPING[c.code] = c.name;
}
for(let c of COWHIDE_COMMOM_COLOR) {
    COLOR_NAME_AND_CODE_MAPPING[c.code] = c.name;
}
export { COLOR_NAME_AND_CODE_MAPPING };

export const DEFAULT_FIELDER_PART_COLORS = {
    'jk': {
        'wrist_color': 'white',
        'wrist_logo_color': 'white',
        'patch_leather_color': 'white',
        'index_inner_color': 'white',
        'index_outer_color': 'white',
        'middle_inner_color': 'white',
        'middle_outer_color': 'white',
        'ring_inner_color': 'white',
        'ring_outer_color': 'white',
        'pinky_inner_color': 'white',
        'pinky_outer_color': 'white',
        'thumb_outer_color': 'white',
        'thumb_inner_color': 'white',
        'binding_color': 'white',
        'welting_color': 'white',
        'palm_color': 'white',
        'web_color': 'white',
        'lace_color': 'white',
        'finger_hood_color': 'white',
        'hood_stitch_color': 'white',
        'finger_pad_color': 'white',
        'finger_pad_stitch_color': 'white',
        'stitching_color': 'white',
        'thumb_logo_color': 'white',
    },
    'ussh': {
        'wrist_color': 'white',
        'wrist_logo_color': 'white',
        'patch_leather_color': 'white',
        'index_inner_color': 'white',
        'index_outer_color': 'white',
        'middle_inner_color': 'white',
        'middle_outer_color': 'white',
        'ring_inner_color': 'white',
        'ring_outer_color': 'white',
        'pinky_inner_color': 'white',
        'pinky_outer_color': 'white',
        'thumb_outer_color': 'white',
        'thumb_inner_color': 'white',
        'binding_color': 'white',
        'welting_color': 'white',
        'palm_color': 'white',
        'web_color': 'white',
        'lace_color': 'white',
        'finger_hood_color': 'white',
        'hood_stitch_color': 'white',
        'finger_pad_color': 'white',
        'finger_pad_stitch_color': 'white',
        'stitching_color': 'white',
        'thumb_logo_color': 'white',
    },
    'ch': {
        'wrist_color': 'white',
        'wrist_logo_color': 'white',
        'patch_leather_color': 'white',
        'index_inner_color': 'white',
        'index_outer_color': 'white',
        'middle_inner_color': 'white',
        'middle_outer_color': 'white',
        'ring_inner_color': 'white',
        'ring_outer_color': 'white',
        'pinky_inner_color': 'white',
        'pinky_outer_color': 'white',
        'thumb_outer_color': 'white',
        'thumb_inner_color': 'white',
        'binding_color': 'white',
        'welting_color': 'white',
        'palm_color': 'white',
        'web_color': 'white',
        'lace_color': 'white',
        'finger_hood_color': 'white',
        'hood_stitch_color': 'white',
        'finger_pad_color': 'white',
        'finger_pad_stitch_color': 'white',
        'stitching_color': 'white',
        'thumb_logo_color': 'white',
    }
}

// used in the Carousel.jsx to render final images
export const FIELDER_PART_NAMES = [
    {name: 'base', defaultColor: '', selectedColor: '', design_name: '', active: true},
    {name: 'wrist', defaultColor: 'gray', design_name: 'wrist_color', active: true},
    {name: 'patch', defaultColor: 'wine', design_name: 'patch_leather_color', active: false},
    
    
    {name: 'f1', defaultColor: 'gray', design_name: 'index_inner_color', active: true},
    {name: 'f2', defaultColor: 'wine', design_name: 'index_outer_color', active: true},
    {name: 'f3', defaultColor: 'gray', design_name: 'middle_inner_color', active: true},
    {name: 'f4', defaultColor: 'wine', design_name: 'middle_outer_color', active: true},
    {name: 'f5', defaultColor: 'gray', design_name: 'ring_inner_color', active: true},
    {name: 'f6', defaultColor: 'wine', design_name: 'ring_outer_color', active: true},
    {name: 'f7', defaultColor: 'gray', design_name: 'pinky_inner_color', active: true},
    {name: 'f8', defaultColor: 'wine', design_name: 'pinky_outer_color', active: true},
    {name: 't1', defaultColor: 'gray', design_name: 'thumb_outer_color', active: true},
    {name: 't2', defaultColor: 'wine', design_name: 'thumb_inner_color', active: true},
    {name: 't2full', defaultColor: 'wine', design_name: 'thumb_inner_color', active: true}, // for view04 only
    {name: 'logo', defaultColor: 'wine', design_name: 'wrist_logo_color', active: true},
    {name: 'binding', defaultColor: 'gray', design_name: 'binding_color', active: true},
    {name: 'welting', defaultColor: 'gray', design_name: 'welting_color', active: true},
    {name: 'palm', defaultColor: 'wine', design_name: 'palm_color', active: true},
    {name: 'web', defaultColor: 'gray', design_name: 'web_color', active: true},
    {name: 'lace', defaultColor: 'gray', design_name: 'lace_color', active: true},
    // {name: 'laces', defaultColor: 'gray', design_name: 'lace_color', active: true}, // TODO: rename laces to lace (new Update)
    // {name: 'hood', defaultColor: 'wine', design_name: 'finger_hood_color', active: false},
    // {name: 'hoodstitch', defaultColor: 'gray', design_name: 'hood_stitch_color', active: false},
    // {name: 'fingerpad', defaultColor: 'gray', design_name: 'finger_pad_color', active: false},
    // {name: 'fingerpadstitch', defaultColor: 'gray', design_name: 'finger_pad_stitch_color', active: false},
    {name: PART_NAME_MAPPING.FINGER_HOOD, defaultColor: 'wine', design_name: 'finger_hood_color', active: false},
    {name: PART_NAME_MAPPING.FINGER_HOOD_STITCH, defaultColor: 'gray', design_name: 'hood_stitch_color', active: false},
    {name: PART_NAME_MAPPING.FINGER_PAD, defaultColor: 'gray', design_name: 'finger_pad_color', active: false},
    {name: PART_NAME_MAPPING.FINGER_PAD_STITCH, defaultColor: 'gray', design_name: 'finger_pad_stitch_color', active: false},
    {name: 'stitch', defaultColor: 'red', design_name: 'stitching_color', active: true},
    {name: 'e', defaultColor: 'red', design_name: 'thumb_logo_color', active: DEFAULT_SELECTION.selected_thumb_logo === 'E Logo'},
]

export const WEB_TYPE_OPTION_MAPPING = {
    "T": "t",
    "I": "i",
    "H": "h",
    "Y": "y",
    "V": "v",
    "Basket": "basket",
    "Basket T": "basketlace",
    "Lace Cross": "lacecross",
    "One Piece (Catcher)": "1piece",
    "Two Piece (Catcher)": "2piece",
    "H (First Base)": "h",
    "Post (First Base)": "post",
    "One Piece": "1piece",
    "Two Piece": "2piece",
    "Shield": "shield",
    "Sealing": "sealing",
    "Lace Sealing": "lacesealing",
    "Cross": "cross",
    "Trapeze": "trapeze",
}