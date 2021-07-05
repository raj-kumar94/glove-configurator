import { tabConstants } from '../constants';
const { GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY, COMMON_COLORS } = tabConstants;
const FIELDER_COLOR_OPTIONS = ["thumb_inner_color", "thumb_outer_color", "index_inner_color", "index_outer_color", "middle_inner_color", "middle_outer_color", "ring_inner_color", "ring_outer_color", "pinky_inner_color", "pinky_outer_color"];

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
                "Infield": {
                    activate: "size", 
                    deactivate: "catcher_mitt_size", 
                    activate_colors: FIELDER_COLOR_OPTIONS, 
                    deactivate_colors: ["shell_back_color", "u_piece_color", "rails_color"]
                },
                "Outfield": {
                    activate: "size", 
                    deactivate: "catcher_mitt_size",
                    activate_colors: FIELDER_COLOR_OPTIONS, 
                    deactivate_colors: ["shell_back_color", "u_piece_color", "rails_color"]
                },
                "Pitcher": {
                    activate: "size", 
                    deactivate: "catcher_mitt_size",
                    activate_colors: FIELDER_COLOR_OPTIONS, 
                    deactivate_colors: ["shell_back_color", "u_piece_color", "rails_color"]
                },
                "First Base": {activate: "size", deactivate: "catcher_mitt_size", activate_colors: ["shell_back_color", "u_piece_color"], deactivate_colors: FIELDER_COLOR_OPTIONS},
                "Catcher": {activate: "catcher_mitt_size", deactivate: "size", activate_colors: ["shell_back_color", "rails_color"], deactivate_colors: FIELDER_COLOR_OPTIONS},
            }
        },
        {
            // depending on position, size will be active or inactive
            "name": "size",
            "options": ["9.25", "9.5", "9.75", "10", "10.25", "10.5", "10.75", "11", "11.25", "11.5", "11.75", "12", "12.25", "12.5", "12.75", "13", "13.25", "13.5", "13.75", "14"],
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
            "options": ["T", "I", "H", "Y", "V", "Basket", "Basket Lace", "Lace Cross", "One Piece (Catcher)", "Two Piece (Catcher)", "H (First Base)", "Post (First Base)", "One Piece", "Two Piece", "Shield", "Sealing", "Lace Sealing", "Cross", "Trapeze"],
            "selected": "I",
            "required": true,
            "active": true
        },
        {
            // if Two Piece is selected, ask user to input "Wrist Color"
            "name": "wrist_options",
            "options": ["One Piece", "Two Piece", "Closed Back"],
            "selected": "One Piece",
            "controls": {
                "One Piece": {
                    activate: "", 
                    deactivate: "", 
                    activate_colors: [], 
                    deactivate_colors: ["wrist_color"],
                },
                "Two Piece": {
                    activate: "", 
                    deactivate: "",
                    activate_colors: ["wrist_color"], 
                    deactivate_colors: []
                },
                "Closed Back": {
                    activate: "", 
                    deactivate: "",
                    activate_colors: [], 
                    deactivate_colors: ["wrist_color"], 
                }
            },
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
            "name": "wrist_logo_options",
            "options": ["None", "Embroidery", "Patch Embroidery", "Patch Stamped"],
            "selected": "None",
            "controls": {
                "Embroidery": {
                    activate: "", 
                    deactivate: "",
                    activate_colors: ["embroidery_color"], 
                    deactivate_colors: ["patch_leather_color"]
                },
                "Patch Embroidery": {
                    activate: "", 
                    deactivate: "",
                    activate_colors: ["patch_leather_color", "embroidery_color"], 
                    deactivate_colors: []
                },
                "Patch Stamped": {
                    activate: "", 
                    deactivate: "",
                    activate_colors: ["patch_leather_color"], 
                    deactivate_colors: ["embroidery_color"]
                },
            },
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
                "Yes": {
                    activate: "finger_pad_location", 
                    deactivate: "",
                    activate_colors: ["finger_pad_color"], 
                    deactivate_colors: []
                },
                "No": {
                    activate: "", 
                    deactivate: "finger_pad_location",
                    activate_colors: [], 
                    deactivate_colors: ["finger_pad_color"]
                },
            }
        },
        {
            // depending on finger_pad, finger_pad_location will be active or inactive
            "name": "finger_pad_location",
            "options": ["Index", "Middle"],
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
                "Yes": {
                    activate: "finger_hood_location", 
                    deactivate: "",
                    activate_colors: ["finger_hood_color"], 
                    deactivate_colors: []
                },
                "No": {
                    activate: "", 
                    deactivate: "finger_hood_location",
                    activate_colors: [],
                    deactivate_colors: ["finger_hood_color"]
                },
            }
        },
        {
            // depending on finger_hood, finger_hood_location will be active or inactive
            "name": "finger_hood_location",
            "options": ["Index", "Middle"],
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
    ],
    [LEATHER_DESIGN]: [
        {
            "name": "web_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "liner_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "palm_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "thumb_inner_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "thumb_outer_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "index_inner_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "index_outer_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "middle_inner_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "middle_outer_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "ring_inner_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "ring_outer_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "pinky_inner_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "pinky_outer_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "wrist_color",
            "selected_color": "",
            "colors": COMMON_COLORS,
            "required": true,
            "active": false
        },
        {
            "name": "finger_pad_color",
            "selected_color": "",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "finger_hood_color",
            "selected_color": "",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "lace_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "stitching_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "welting_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "binding_color",
            "selected_color": "darkcamel",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "wrist_fur_color/Pad",
            "selected_color": "",
            "colors": [
                {name: "Black", code: "black", rgb: "center center rgb(0, 0, 0)"},
                {name: "White", code: "white", rgb: "center center rgb(255, 255, 255)"},
            ],
            "required": true,
            "active": true
        },
        {
            "name": "patch_leather_color",
            "selected_color": "",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "embroidery_color",
            "selected_color": "",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
        {
            "name": "name_color",
            "selected_color": "",
            "colors": COMMON_COLORS,
            "required": true,
            "active": true
        },
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