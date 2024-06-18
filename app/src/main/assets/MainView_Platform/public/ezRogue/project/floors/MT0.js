main.floors.MT0=
{
    "floorId": "MT0",
    "title": "开始战斗！！",
    "name": "0",
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "defaultGround": "ground",
    "images": [],
    "ratio": 1,
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  3,  3,  3,  0,  0,  0,  0,  0,  3,  3,  3,  3],
    [  3,  3,  3,  0,  0,  0,  0,  0,  0,  0,  3,  3,  3],
    [  3,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,201,  0,  0,  0,  0,  0,  3],
    [  3,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3],
    [  3,  3,  3,  0,  0,  0,  0,  0,  0,  0,  3,  3,  3],
    [  3,  3,  3,  3,  0,  0,  0,  0,  0,  3,  3,  3,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "firstArrive": [
        {
            "type": "insert",
            "name": "战斗"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,8": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        }
    },
    "changeFloor": {
        "6,4": {
            "floorId": "MTx"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "bgmap": [

],
    "fgmap": [

],
    "width": 13,
    "height": 13,
    "autoEvent": {
        "6,8": {
            "0": null,
            "1": null,
            "2": null,
            "3": null
        },
        "5,2": {
            "2": null
        }
    },
    "beforeBattle": {
        "6,4": []
    },
    "cannotMoveIn": {},
    "bgm": "bgm.mp3"
}