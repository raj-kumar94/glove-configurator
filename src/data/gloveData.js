import { tabConstants } from '../constants';
import { PART_NAME_MAPPING, KIP_COMMOM_COLOR, DEFAULT_SELECTION } from '../constants';
// import { filederPartsActiveInactive } from '../config/fielderConfig';
const { GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY } = tabConstants;
// const FIELDER_COLOR_OPTIONS = ["thumb_inner_color", "thumb_outer_color", "index_inner_color", "index_outer_color", "middle_inner_color", "middle_outer_color", "ring_inner_color", "ring_outer_color", "pinky_inner_color", "pinky_outer_color"];
const selected_finger_hood_or_pad = DEFAULT_SELECTION.selected_finger_hood_or_pad; // Choices -> ["None", "Pad", "Hood"]
const selected_thumb_logo = DEFAULT_SELECTION.selected_thumb_logo;

export const gloveData = {
    [GLOVE_FOUNDATION]: [
        {
            // depending on position, size will be active or inactive
            "name": "leather",
            "options": ["Emerald Series - Japanese Kip Leather", "Peridot Series - US Steerhide Leather", "Topaz Series - Smooth Cowhide Leather"],
            "selected": "Emerald Series - Japanese Kip Leather",
            "required": true,
            "active": true
        },
        {
            // position controls size and catcher_mitt_size
            "name": "position",
            "options": ["Pitcher", "Infield", "Outfield"],
            "selected": "",
            "required": true,
            "active": true,
            // "controls": {
            //     "Infield": {
            //         activate: "size", 
            //         deactivate: "catcher_mitt_size", 
            //         activate_colors: FIELDER_COLOR_OPTIONS, 
            //         deactivate_colors: ["shell_back_color", "u_piece_color", "rails_color"]
            //     },
            //     "Outfield": {
            //         activate: "size", 
            //         deactivate: "catcher_mitt_size",
            //         activate_colors: FIELDER_COLOR_OPTIONS, 
            //         deactivate_colors: ["shell_back_color", "u_piece_color", "rails_color"]
            //     },
            //     "Pitcher": {
            //         activate: "size", 
            //         deactivate: "catcher_mitt_size",
            //         activate_colors: FIELDER_COLOR_OPTIONS, 
            //         deactivate_colors: ["shell_back_color", "u_piece_color", "rails_color"]
            //     },
            //     "First Base": {activate: "size", deactivate: "catcher_mitt_size", activate_colors: ["shell_back_color", "u_piece_color"], deactivate_colors: FIELDER_COLOR_OPTIONS},
            //     "Catcher": {activate: "catcher_mitt_size", deactivate: "size", activate_colors: ["shell_back_color", "rails_color"], deactivate_colors: FIELDER_COLOR_OPTIONS},
            // }
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
            "selected": "",
            "required": true,
            "active": true
        },
        {
            "name": "web_type",
            // "options": ["T", "I", "H", "Y", "V", "Basket", "Basket T", "Lace Cross", "One Piece (Catcher)", "Two Piece (Catcher)", "H (First Base)", "Post (First Base)", "One Piece", "Two Piece", "Shield", "Sealing", "Lace Sealing", "Cross", "Trapeze"],
            "options": ["T", "I", "H", "Y", "V", "Basket", "Basket T", "Lace Cross", "One Piece", "Two Piece", "Shield", "Sealing", "Lace Sealing", "Cross", "Trapeze"],
            "selected": "I",
            "required": true,
            "active": true
        },
        {
            // if Two Piece is selected, ask user to input "Wrist Color"
            // if One Piece is selected, the wrist color will be the same as of thumb inner color
            "name": "wrist_options",
            "options": ["One Piece", "Two Piece", "Closed Back"],
            "selected": "One Piece",
            "controls": {
                "One Piece": {
                    activate: "", 
                    deactivate: "", 
                    activate_colors: [], 
                    deactivate_colors: ["wrist_color"],
                    reset_color_on_deactivate: true,
                    reset_color_ref: 'thumb_inner_color', // it will find the color from this part and reset the deactivate_colors options
                    activate_part_names: ['t2full'],
                    deactivate_part_names: [],
                    info: ''
                },
                "Two Piece": {
                    activate: "", 
                    deactivate: "",
                    activate_colors: ["wrist_color"], 
                    deactivate_colors: [],
                    reset_color_on_deactivate: false,
                    reset_color_ref: '',
                    activate_part_names: [],
                    deactivate_part_names: ['t2full'],
                    info: ''
                },
                "Closed Back": {
                    activate: "", 
                    deactivate: "",
                    activate_colors: [], 
                    deactivate_colors: ["wrist_color"], 
                    reset_color_on_deactivate: true,
                    reset_color_ref: 'thumb_inner_color',
                    activate_part_names: [],
                    deactivate_part_names: ['t2full'],
                    info: 'Not shown in builder'
                }
            },
            "required": true,
            "active": true
        },
        {
            "name": "wrist_size",
            "options": ["Normal", "Youth"],
            "selected": "Normal",
            "required": true,
            "active": true
        },
        {
            "name": "wrist_logo_options",
            "options": ["Embroidery", "Patch Embroidery", "Patch Stamped"],
            "selected": "Embroidery",
            "controls": {
                "None": {
                    activate: "", 
                    deactivate: "",
                    activate_colors: ["embroidery_color"], 
                    deactivate_colors: ["patch_leather_color"],
                    activate_part_names: [],
                    deactivate_part_names: ["logo", "patch"]
                },
                "Embroidery": {
                    activate: "", 
                    deactivate: "",
                    activate_colors: ["embroidery_color", "wrist_logo_color"], 
                    deactivate_colors: ["patch_leather_color"],
                    activate_part_names: ["logo"],
                    deactivate_part_names: ["patch"]
                },
                "Patch Embroidery": {
                    activate: "", 
                    deactivate: "",
                    activate_colors: ["patch_leather_color", "embroidery_color", "wrist_logo_color"], 
                    deactivate_colors: [],
                    activate_part_names: ["logo", "patch"],
                    deactivate_part_names: []
                },
                "Patch Stamped": {
                    activate: "", 
                    deactivate: "",
                    activate_colors: ["patch_leather_color"], 
                    deactivate_colors: ["embroidery_color", "wrist_logo_color"],
                    activate_part_names: ["patch"],
                    deactivate_part_names: ["logo"]
                },
            },
            "active": true,
            "required": true,
        },
        {
            // if Yes selected, ask user to input "Finger Pad Location" and "Finger Pad Color"
            "name": "finger_hood_or_pad",
            "options": ["None", "Hood", "Pad"],
            "selected": selected_finger_hood_or_pad,
            "required": true,
            "active": true,
            "controls": {
                "None": {
                    activate: "", 
                    deactivate: ["finger_pad", "finger_pad_location", "finger_hood", "finger_hood_location"],
                    activate_colors: [], 
                    deactivate_colors: ["finger_pad_color", "finger_hood_color"],
                    activate_part_names: [], 
                    deactivate_part_names: [PART_NAME_MAPPING.FINGER_HOOD, PART_NAME_MAPPING.FINGER_HOOD_STITCH, PART_NAME_MAPPING.FINGER_PAD, PART_NAME_MAPPING.FINGER_PAD_STITCH]
                },
                "Hood": {
                    activate: ["finger_hood", "finger_hood_location"], 
                    deactivate: ["finger_pad", "finger_pad_location"],
                    activate_colors: ["finger_hood_color"], 
                    deactivate_colors: ["finger_pad_color"],
                    activate_part_names: [PART_NAME_MAPPING.FINGER_HOOD, PART_NAME_MAPPING.FINGER_HOOD_STITCH],
                    deactivate_part_names: [PART_NAME_MAPPING.FINGER_PAD, PART_NAME_MAPPING.FINGER_PAD_STITCH]
                },
                "Pad": {
                    activate: ["finger_pad", "finger_pad_location"], 
                    deactivate: ["finger_hood", "finger_hood_location"],
                    activate_colors: ["finger_pad_color"], 
                    deactivate_colors: ["finger_hood_color"],
                    activate_part_names: [PART_NAME_MAPPING.FINGER_PAD, PART_NAME_MAPPING.FINGER_PAD_STITCH],
                    deactivate_part_names: [PART_NAME_MAPPING.FINGER_HOOD, PART_NAME_MAPPING.FINGER_HOOD_STITCH]
                },
            }
        },
        // {
        //     // if Yes selected, ask user to input "Finger Pad Location" and "Finger Pad Color"
        //     "name": "finger_pad",
        //     "options": ["Yes", "No"],
        //     "selected": "Yes",
        //     "required": true,
        //     "active": false,
        //     "controls": {
        //         "Yes": {
        //             activate: "finger_pad_location", 
        //             deactivate: "",
        //             activate_colors: ["finger_pad_color"], 
        //             deactivate_colors: [],
        //             activate_part_names: ["fingerpad", "fingerpadstitch"], 
        //             deactivate_part_names: []
        //         },
        //         "No": {
        //             activate: "", 
        //             deactivate: "finger_pad_location",
        //             activate_colors: [], 
        //             deactivate_colors: ["fingerpad", "fingerpadstitch"],
        //             activate_part_names: [], 
        //             deactivate_part_names: ["fingerpad", "fingerpadstitch"]
        //         },
        //     }
        // },
        {
            // depending on finger_pad, finger_pad_location will be active or inactive
            "name": "finger_pad_location",
            "options": ["Index", "Middle"],
            "selected": "Index",
            "required": true,
            "active": selected_finger_hood_or_pad === "Pad"
        },
        // {
        //     // if Yes selected, ask user to input "Finger Hood Location" and "Finger Hood Color"
        //     "name": "finger_hood",
        //     "options": ["Yes", "No"],
        //     "selected": "Yes",
        //     "required": true,
        //     "active": false,
        //     "controls": {
        //         "Yes": {
        //             activate: "finger_hood_location", 
        //             deactivate: "",
        //             activate_colors: ["finger_hood_color", "hood_stitch_color"], 
        //             deactivate_colors: [],
        //             activate_part_names: ["hood", "hoodstitch"], 
        //             deactivate_part_names: []
        //         },
        //         "No": {
        //             activate: "", 
        //             deactivate: "finger_hood_location",
        //             activate_colors: [],
        //             deactivate_colors: ["finger_hood_color", "hood_stitch_color"],
        //             activate_part_names: [], 
        //             deactivate_part_names: ["hood", "hoodstitch"]
        //         },
        //     }
        // },
        {
            // depending on finger_hood, finger_hood_location will be active or inactive
            "name": "finger_hood_location",
            "options": ["Index", "Middle"],
            "selected": "Index",
            "required": true,
            "active": selected_finger_hood_or_pad === "Hood"
        },
        {
            "name": "stiffness",
            "options": ["Stiff", "Soft", "Youth"],
            "selected": "",
            "required": true,
            "active": true,
        },
        {
            "name": "wrist_fur_color/Pad",
            // "type": "list_options",
            "options": [ "Black", "White", "Moisture Wicking Pad" ],
            "selected": "",
            // "default": "white",
            "required": true,
            "active": true,
        },
    ],
    [LEATHER_DESIGN]: [
        {
            "name": "web_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        {
            "name": "liner_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true,
            "info": "Not shown in builder"
        },
        {
            "name": "palm_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        {
            "name": "wrist_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": false
        },
        {
            "name": "wrist_logo_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        // {
        //     "name": "wrist_fur",
        //     "selected_color": "",
        //     "colors": [
        //         {name: "Black", code: "black", rgb: "center center rgb(0, 0, 0)"},
        //         {name: "White", code: "white", rgb: "center center rgb(255, 255, 255)"},
        //         {name: "Moisture Wicking Pad", code: "moisture-wicking-pad", rgb: "center center rgb(255, 255, 255)"},
        //     ],
        //     "default": "white",
        //     "required": true,
        //     "active": true,
        //     // "as_list": true,
        //     // "retain_color_options": true
        // },
        // {
        //     "name": "wrist_fur_kip",
        //     "selected_color": "",
        //     "colors": KIP_COMMOM_COLOR || [
        //         {name: "Black", code: "black", rgb: "center center rgb(0, 0, 0)"},
        //         {name: "White", code: "white", rgb: "center center rgb(255, 255, 255)"},
        //         {name: "Moisture Wicking Pad", code: "moisture-wicking-pad", rgb: "center center rgb(255, 255, 255)"},
        //     ],
        //     "default": "white",
        //     "required": true,
        //     "active": true,
        //     // "as_list": true,
        //     // "retain_color_options": true
        // },
        // {
        //     "name": "wrist_fur_color2",
        //     "selected_color": "",
        //     "colors": [
        //         {name: "Black", code: "black", rgb: "center center rgb(0, 0, 0)"},
        //         {name: "White", code: "white", rgb: "center center rgb(255, 255, 255)"},
        //         {name: "Moisture Wicking Pad", code: "moisture-wicking-pad", rgb: "center center rgb(255, 255, 255)"},
        //     ],
        //     "default": "white",
        //     "required": true,
        //     "active": true,
        //     "as_list": true,
        //     "retain_color_options": true
        // },
        {
            "name": "patch_leather_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": false
        },
        // {
        //     "name": "thumb_logo_color",
        //     "selected_color": "",
        //     "default": "white",
        //     "colors": KIP_COMMOM_COLOR,
        //     "required": true,
        //     "active": false
        // },
        {
            "name": "thumb_inner_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        {
            "name": "thumb_outer_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        {
            "name": "index_inner_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        {
            "name": "index_outer_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        {
            "name": "middle_inner_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        {
            "name": "middle_outer_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        {
            "name": "ring_inner_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        {
            "name": "ring_outer_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        {
            "name": "pinky_inner_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        {
            "name": "pinky_outer_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        {
            "name": "finger_pad_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": selected_finger_hood_or_pad === "Pad"
        },
        {
            "name": "finger_hood_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": selected_finger_hood_or_pad === "Hood"
        },
        {
            "name": "lace_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        {
            "name": "stitching_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        {
            "name": "hood_stitch_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": false
        },
        {
            "name": "finger_pad_stitch_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": false
        },
        {
            "name": "welting_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        {
            "name": "binding_color",
            "selected_color": "",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true,
            "active": true
        },
        // {
        //     "name": "embroidery_color",
        //     "selected_color": "",
        //     "colors": KIP_COMMOM_COLOR,
        //     "required": true,
        //     "active": true
        // },
        // {
        //     "name": "name_color",
        //     "selected_color": "",
        //     "colors": KIP_COMMOM_COLOR,
        //     "required": true,
        //     "active": true
        // },
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
            "name_code": "thumb_logo",
            "type": "list_options",
            "enabled": true,
            "options": ["E Logo", "Custom"],
            "selected": selected_thumb_logo,
            "controls": {
                // "None": {
                //     activate: "", 
                //     deactivate: "",
                //     activate_colors: [], 
                //     deactivate_colors: ["thumb_logo_color"]
                // },
                "E Logo": {
                    activate: "", 
                    deactivate: "",
                    activate_colors: ["thumb_logo_color"],
                    deactivate_colors: []
                },
                "Custom": {
                    activate: "", 
                    deactivate: "",
                    activate_colors: [],
                    deactivate_colors: ["thumb_logo_color"]
                },
            },
            "active": true,
            "required": true
        },
        {
            "name": "thumb_logo_color",
            "name_code": "thumb_logo_color",
            "selected_color": "",
            "type": "color",
            "default": "white",
            "colors": KIP_COMMOM_COLOR,
            "required": true, // required only when it is active
            "active": selected_thumb_logo === "E Logo",
            "enabled": true,
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
            "name_code": "name_on_thumb",
            "type": "text_and_color",
            "enabled": false,
            "text": "",
            "colors": KIP_COMMOM_COLOR,
            "selected_color": "",
            "active": true,
            "required": true // required only when it is active
        },
        {
            "name": "name on pinky",
            "name_code": "name_on_pinky",
            "type": "text_and_color",
            "enabled": false,
            "text": "",
            "colors": KIP_COMMOM_COLOR,
            "selected_color": "",
            "active": true,
            "required": true // required only when it is active
        },
        {
            "name": "name font",
            "name_code": "name_font",
            "type": "list_options",
            "enabled": true,
            "options": ["Script", "Block"],
            "selected": "Script",
            "active": true,
            "required": true // required only when it is active
        },
        {
            "name": "special instructions",
            "name_code": "special_instructions",
            "type": "text_area",
            "enabled": true,
            "text": "",
            "active": true,
            "required": false // required only when it is active
        }
    ]
}

// const gloveDataMaping = gloveData[GLOVE_FOUNDATION].map(option => {
//     return {
//         name: option.name_code || option.name,
//         // options: option.options,
//         // required: option.required
//     }
// })

// console.log(gloveDataMaping)