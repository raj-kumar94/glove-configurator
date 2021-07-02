import { tabConstants } from '../constants';
const { GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY } = tabConstants;

export const gloveData = {
    [GLOVE_FOUNDATION]: [
        {
            // position controls size and catcher_mitt_size
            "name": "position",
            "options": ["Infield", "Outfield", "Pitcher", "First Base", "Catcher"],
            "selected": "Infield",
            "required": true,
            "active": true,
            "controls": {
                "Infield": {activate: "size", deactivate: "catcher_mitt_size"},
                "Outfield": {activate: "size", deactivate: "catcher_mitt_size"},
                "Pitcher": {activate: "size", deactivate: "catcher_mitt_size"},
                "First Base": {activate: "size", deactivate: "catcher_mitt_size"},
                "Catcher": {activate: "catcher_mitt_size", deactivate: "size"},
            }
        },
        {
            // depending on position, size will be active or inactive
            "name": "size",
            "options": ["9.25", "9.5", "9.75", "10", "10.25", "10.5"],
            "selected": "10",
            "required": true,
            "active": true
        },
        {
            // depending on position, catcher_mitt_size will be active or inactive
            "name": "catcher_mitt_size",
            "options": ["32", "32.5", "33", "33.5", "34"],
            "selected": "11",
            "required": true,
            "active": false
        },
        {
            "name": "hand_throw",
            "options": ["Right", "Left"],
            "selected": "Right",
            "required": true,
            "active": true
        },
        {
            "name": "web_type",
            "options": ["T", "I", "H", "Y", "V", "Basket", "Basket Lace", "Lace Cross"],
            "selected": "I-Web",
            "required": true,
            "active": true
        },
        {
            // if Two Piece is selected, ask user to input "Wrist Color"
            "name": "wrist_options",
            "options": ["One Piece", "Two Piece", "Closed Back"],
            "selected": "One Piece",
            "required": true,
            "active": true
        },
        {
            "name": "wrist_strap",
            "options": ["Normal", "Youth"],
            "selected": "Normal",
            "required": true,
            "active": true
        },
        {
            // if Yes selected, ask user to input "Finger Pad Location" and "Finger Pad Color"
            "name": "finger_pad",
            "options": ["Yes", "No"],
            "selected": "No",
            "required": true,
            "active": true,
            "controls": {
                "Yes": {activate: "finger_pad_location", deactivate: ""},
                "No": {activate: "", deactivate: "finger_pad_location"},
            }
        },
        {
            // depending on finger_pad, finger_pad_location will be active or inactive
            "name": "finger_pad_location",
            "options": ["Pointer", "Middle"],
            "selected": "Middle",
            "required": true,
            "active": false
        },
        {
            // if Yes selected, ask user to input "Finger Hood Location" and "Finger Hood Color"
            "name": "finger_hood",
            "options": ["Yes", "No"],
            "selected": "No",
            "required": true,
            "active": true,
            "controls": {
                "Yes": {activate: "finger_hood_location", deactivate: ""},
                "No": {activate: "", deactivate: "finger_hood_location"},
            }
        },
        {
            // depending on finger_hood, finger_hood_location will be active or inactive
            "name": "finger_hood_location",
            "options": ["Pointer", "Middle"],
            "selected": "Middle",
            "required": true,
            "active": false
        },
        {
            "name": "stiffness",
            "options": ["Stiff", "Soft", "Youth"],
            "selected": "Stiff",
            "active": true
        },
        {
            "name": "wrist logo options",
            "options": ["None", "Embroidery", "Patch Embroidery", "Patch Stamped"],
            "selected": "None",
            "active": true
        },
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
        // {
        //     "name": "wrist logo options",
        //     "type": "list_options",
        //     "enabled": true,
        //     "options": ["None", "Embroidery", "Patch Embroidery", "Patch Stamped"],
        //     "selected": "None",
        //     "active": true
        // },
        {
            "name": "thumb logo",
            "type": "list_options",
            "enabled": true,
            "options": ["None", "E Logo", "Custom"],
            "selected": "None",
            "active": true
        },
        // {
        //     "name": "palm stamp",
        //     "type": "text_and_color",
        //     "enabled": false,
        //     "text": "",
        //     "colors": [
        //         {name: 'Black', code: 'BLACK', rgb: 'center center rgb(26, 26, 26)'},
        //         {name: 'Grey', code: 'GREY', rgb: 'center center rgb(144, 143, 136)'},
        //         {name: 'Orange Tan', code: 'ORANGE_TAN', rgb: 'center center rgb(255, 99, 0)'},
        //     ],
        //     "selected_color": "GREY",
        //     "active": true
        // },
        {
            "name": "name on thumb",
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
            "name": "name font",
            "type": "list_options",
            "enabled": true,
            "options": ["Script", "Block"],
            "selected": "Script",
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