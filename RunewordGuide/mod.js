// Work in progress. Need to finish building menuOptions.

const pauseMenuPanelHDFilename = 'global\\ui\\layouts\\pauselayouthd.json'
const pauseMenuPanelHD = D2RMM.readJson(pauseMenuPanelHDFilename)
const uiFilename = 'local\\lng\\strings\\ui.json'
const ui = D2RMM.readJson(uiFilename)
const menuOption = {
    "type": "TableRowWidget",
    "name": "Runewords",
    "children": [
        {
        "type":"ButtonWidget",
        "name":"Runewords",
            "fields": {
                "filename": "PauseMenu\\PauseButton",
                "hoveredFrame": 3,
                "textString": "@Runewords",
                "pressLabelOffset": [ 0, 0 ],
                "onClickMessage": "PanelManager:OpenPanel:Runewords",
                "textColor": "$LightButtonTextColor",
                "text/style": "$StyleFEButtonText",
                "acceptsReturnKey": true,
                "focusOnMouseOver": true,
                "sound": "cursor_select"
                }
        }
    ]
}
newMenuOption(menuOption)
D2RMM.writeJson(pauseMenuPanelHDFilename, pauseMenuPanelHD)
D2RMM.writeJson(uiFilename, ui)

// Create runewordshd.json to store runewords
const runewordsPanelHDFilename = 'global\\ui\\layouts\\runewordshd.json'
const runewordsOption = {
    "type": "SettingsPanel", "name": "Runewords",
    "fields": {
        "priority": 9002,
        "fitToParent": true
    },
    "children": [
        {
            "type": "RectangleWidget", "name": "Background",
            "fields": {
                "fitToScreen": true,
                "color": [ 0.0, 0.0, 0.0, 0.7 ]
            },
            "children": [
                {
                    "type": "ClickCatcherWidget", "name": "catcher",
                    "fields": {
                        "fitToParent": true
                    }
                },
                {
                    "type": "Widget", "name": "Anchor",
                    "fields": {
                        "anchor": { "x": 0.5, "y": 0.5 },
                        "rect": "$SettingsPanelAnchorRect"
                    },
                    "children": [
                        {
                            "type": "ImageWidget", "name": "Background",
                            "fields": {
                                "filename": "\\PANEL\\Panel\\FrontEndOptionsBG"
                            }
                        },
                        {
                            "type": "TextBoxWidget", "name": "Title",
                            "fields": {
                                "rect": { "x": 0, "y": 45, "width": 1950, "height": 103 },
                                "text": "@Runewords",
                                "style": "$StyleTitleBlock"
                            }
                        },
                        {
                            "type": "ButtonWidget", "name": "CloseButton",
                            "fields": {
                                "rect": { "x": 1868, "y": 8 },
                                "filename": "PANEL\\closebtn_4x",
                                "hoveredFrame": 3,
                                "onClickMessage": "PanelManager:ClosePanel:Runewords",
                                "tooltipString": "@strClose",
                                "sound": "cursor_close_window_hd",
                                "acceptsEscKeyEverywhere": true,
                                "action": "back"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "ImageWidget", "name": "SettingsBackground",
            "fields": {
                "rect": "$SettingsPanelBackgroundRect",
                "anchor": { "x": 0.5 },
                "filename": "Controller/Panel/Options/custom_panel_bg"
            }
        },
        {
            "type": "TabBarWidget", "name": "OptionsTabs",
            "fields": {
                "rect": "$SettingsPanelTabsRect",
                "anchor": { "x": 0.5 },
                "tabCount": 2,
                "tabSize": { "x": 276, "y": 121 },
                "tabPadding": { "x": 2, "y": 0 },
                "unavailableTabsLeaveGaps": false,
                "tabSizingMethod": "fixedCenter",
                "filename": "Controller/Panel/Stash/V2/StashTabs",
                "inactiveFrames": [ 1, 1, 1, 1, 1, 1],
                "activeFrames": [ 0, 0, 0, 0, 0, 0],
                "activeTextColor": "$TabsActiveTextColor",
                "inactiveTextColor": "$TabsInactiveTextColor",
                "tabTextOffset": { "x": 0, "y": -4 },
                "textStyle": {
                    "options": { "lineWrap": true },
                    "pointSize": "$MediumFontSize",
                    "alignment": { "h": "center", "v": "center" },
                    "fontColor": "$FontColorWhite",
                    "spacing": {"leading":0.9, "kerning":0.95}
                },
                "textStrings": "All Runewords",
                "tabMessages": "SettingsPanelMessage:ToggleChildPanel:AllRunewords"
            }
        },
        {
            "type": "TableWidget", "name": "ActionButtonsTable",
            "fields": {
                "anchor": {"x":0.5, "y": 0},
                "rect": { "x": -750, "y": 1800 },
                "columns": [
                    { "width": 1500, "alignment": { "h": "center", "v": "center" } }
                ],
                "rowHeight": 120,
                "cellPadding": { "left": 0, "right": 0 }
            },
            "children": [
                {
                    "type": "TableRowWidget", "name": "Row",
                    "children": [
                        {
                            "type": "ButtonWidget", "name": "Close",
                            "fields": {
                                "filename": "FrontEnd\\HD\\Final\\FrontEnd_ButtonMed",
                                "onClickMessage": "PanelManager:ClosePanel:Runewords",
                                "textString": "Close",
                                "hoveredFrame": 3,
                                "text/style" : "$StyleFEButtonText",
                                "pointSize": "$MediumLargeFontSize",
                                "textColor": "$FontColorLightRed",
                                "disabledFrame": 2,
                                "tooltipString": "@strClose",
                                "sound": "cursor_close_window_hd",
                                "acceptsEscKeyEverywhere": true,
                                "action": "back"

                            }
                        }
                    ]
                }
            ]
        }
    ]
}
D2RMM.writeJson(runewordsPanelHDFilename, runewordsOption)

// Add Strings to ui.json
function newUIString(stringName, enUS) {
    ui.push({
        "id": D2RMM.getNextStringID(),
        "Key": stringName,
        "enUS": enUS,
        "zhTW": "",
        "deDE": "",
        "esES": "",
        "frFR": "",
        "itIT": "",
        "koKR": "",
        "plPL": "",
        "esMX": "",
        "jaJP": "",
        "ptBR": "",
        "ruRU": "",
        "zhCN": ""
    })
}

// Works, but if you run D2RMM it just adds another menu option. Need to validate it is not duplicating errors.
function newMenuOption(menuOption) {
    for (child in pauseMenuPanelHD.children) {
        if (pauseMenuPanelHD.children[child]['name'] == 'PauseTable') {
            pauseMenuPanelHD.children[child].children.push(menuOption)
            newUIString("Runewords", "Runewords")
        }
    }
}
