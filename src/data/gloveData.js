import { tabConstants } from '../constants';
const { GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY } = tabConstants;

export const gloveData = {
    [GLOVE_FOUNDATION]: [
        {
            "name": "position",
            "options": ["Infield", "Outfield", "Pitcher", "First Base", "Catcher"],
            "selected": "Infield",
            "required": true,
            "active": true
        },
        {
            "name": "hand_throw",
            "options": ["Right", "Left"],
            "selected": "Right",
            "required": true,
            "active": true
        },
        {
            "name": "size",
            "options": ["9.25", "9.5", "9.75", "10", "10.25", "10.5"],
            "selected": "10",
            "required": true,
            "active": true
        },
        {
            "name": "cather_mitt_size",
            "options": ["32", "32.5", "33", "33.5", "34"],
            "selected": "11",
            "required": true,
            "active": false
        },
        {
            "name": "web_type",
            "options": ["T", "I", "H", "Y", "V", "Basket", "Basket Lace", "Lace Cross"],
            "selected": "I-Web",
            "required": true,
            "active": true
        },
        {
            "name": "glove_stiffness",
            "options": ["Pro Stiff", "Standard"],
            "selected": "Pro Stiff",
            "active": true
        }
    ],
    [LEATHER_DESIGN]: [
        {
            "name": "web_color",
            "selected_color": "BLACK",
            "colors": [
                {name: 'Black', code: 'BLACK', rgb: 'center center rgb(26, 26, 26)'},
                {name: 'Grey', code: 'GREY', rgb: 'center center rgb(144, 143, 136)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            ],
            "required": true,
            "active": true
        },
        {
            "name": "liner_color",
            "colors": [
                {name: 'Black', code: 'BLACK', rgb: 'center center rgb(26, 26, 26)'},
                {name: 'Grey', code: 'GREY', rgb: 'center center rgb(144, 143, 136)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            ],
            "selected_color": "GREY",
            "required": true,
            "active": true
        },
        {
            "name": "palm_color",
            "colors": [
                {name: 'Black', code: 'BLACK', rgb: 'center center rgb(26, 26, 26)'},
                {name: 'Grey', code: 'GREY', rgb: 'center center rgb(144, 143, 136)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            ],
            "selected_color": "GREY",
            "required": true,
            "active": true
        },
        {
            "name": "thumb_inner_color",
            "colors": [
                {name: 'Black', code: 'BLACK', rgb: 'center center rgb(26, 26, 26)'},
                {name: 'Grey', code: 'GREY', rgb: 'center center rgb(144, 143, 136)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                // {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                // {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                // {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                // {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                // {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                // {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                // {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                // {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                // {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                // {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
                // {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            ],
            "selected_color": "BLACK",
            "active": true
        }
    ],
    [PERSONAL_EMBROIDERY]: [
        {
            "name": "thumb logo/graphic",
            "type": "list_options",
            "enabled": true,
            "options": ["None", "Home Plate Logo", "Custom Number(+$5)"],
            "selected": "None",
            "active": true
        },
        {
            "name": "palm stamp",
            "type": "text_and_color",
            "enabled": false,
            "text": "",
            "colors": [
                {name: 'Black', code: 'BLACK', rgb: 'center center rgb(26, 26, 26)'},
                {name: 'Grey', code: 'GREY', rgb: 'center center rgb(144, 143, 136)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            ],
            "selected_color": "GREY",
            "active": true
        },
        {
            "name": "thumb text",
            "type": "text_and_color",
            "enabled": false,
            "text": "",
            "colors": [
                {name: 'Black', code: 'BLACK', rgb: 'center center rgb(26, 26, 26)'},
                {name: 'Grey', code: 'GREY', rgb: 'center center rgb(144, 143, 136)'},
                {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
            ],
            "selected_color": "",
            "active": true
        },
        {
            "name": "special instructions",
            "type": "text_area",
            "enabled": true,
            "text": "",
            "active": true
        }
    ]
}