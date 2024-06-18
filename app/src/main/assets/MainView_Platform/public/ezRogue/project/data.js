var data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d = 
{
	"main": {
		"floorIds": [
			"MT0"
		],
		"floorPartitions": [],
		"images": [
			"bear.png",
			"bg.jpg",
			"brave.png",
			"dragon.png",
			"life0.png",
			"lifeA.png",
			"lifeB.png",
			"lifeC.png",
			"lifeD.png",
			"lifeE.png",
			"lifeF.png",
			"winskin.png"
		],
		"tilesets": [
			"magictower.png"
		],
		"animates": [
			"hand",
			"hit",
			"silversword",
			"sword",
			"zone"
		],
		"bgms": [],
		"sounds": [],
		"fonts": [],
		"nameMap": {
			"确定": "confirm.mp3",
			"取消": "cancel.mp3",
			"操作失败": "error.mp3",
			"光标移动": "cursor.mp3",
			"打开界面": "open_ui.mp3",
			"读档": "load.mp3",
			"存档": "save.mp3",
			"获得道具": "item.mp3",
			"回血": "recovery.mp3",
			"炸弹": "bomb.mp3",
			"飞行器": "centerFly.mp3",
			"开关门": "door.mp3",
			"上下楼": "floor.mp3",
			"跳跃": "jump.mp3",
			"破墙镐": "pickaxe.mp3",
			"破冰镐": "icePickaxe.mp3",
			"宝石": "gem.mp3",
			"阻激夹域": "zone.mp3",
			"穿脱装备": "equip.mp3",
			"背景音乐": "bgm.mp3",
			"攻击": "attack.mp3",
			"背景图": "bg.jpg",
			"商店": "shop.mp3",
			"领域": "zone"
		},
		"levelChoose": null,
		"equipName": [
			"武器",
			"盾牌"
		],
		"startBgm": null,
		"styles": {
			"startBackground": "project/images/bg.jpg",
			"startVerticalBackground": "project/images/bg.jpg",
			"startLogoStyle": "color: blue",
			"startButtonsStyle": "background-color: #32369F; opacity: 0.85; color: #FFFFFF; border: #FFFFFF 2px solid; caret-color: #FFD700;",
			"statusLeftBackground": "url(project/materials/ground.png) repeat",
			"statusTopBackground": "url(project/materials/ground.png) repeat",
			"toolsBackground": "black",
			"floorChangingStyle": "background-color: black; color: white",
			"statusBarColor": [
				255,
				255,
				255,
				1
			],
			"borderColor": [
				0,
				0,
				0,
				1
			],
			"selectColor": [
				255,
				215,
				0,
				1
			],
			"font": "Verdana"
		},
		"splitImages": [
			{
				"name": "dragon.png",
				"width": 384,
				"height": 96,
				"prefix": "dragon_"
			}
		]
	},
	"firstData": {
		"title": "魔塔肉鸽简易版",
		"name": "MotaRouge1",
		"version": "Ver 3.0.0",
		"floorId": "MT0",
		"hero": {
			"image": "brave.png",
			"animate": false,
			"name": "勇士",
			"lv": 1,
			"hpmax": 500,
			"hp": 500,
			"manamax": -1,
			"mana": 0,
			"atk": 30,
			"def": 10,
			"mdef": 0,
			"money": 1,
			"exp": 0,
			"equipment": [],
			"items": {
				"constants": {},
				"tools": {},
				"equips": {}
			},
			"loc": {
				"direction": "down",
				"x": 6,
				"y": 4
			},
			"flags": {},
			"followers": [],
			"steps": 0
		},
		"startCanvas": [
			{
				"type": "comment",
				"text": "在这里可以用事件来自定义绘制标题界面的背景图等"
			},
			{
				"type": "comment",
				"text": "也可以直接切换到其他楼层（比如某个开始剧情楼层）进行操作。"
			},
			{
				"type": "previewUI",
				"action": [
					{
						"type": "fillRect",
						"x": 0,
						"y": 0,
						"width": "core._PX_ || core.__PIXELS__",
						"height": "core._PY_ || core.__PIXELS__",
						"style": [
							82,
							82,
							82,
							1
						]
					},
					{
						"type": "setAttribute",
						"align": "center"
					},
					{
						"type": "fillBoldText",
						"x": "(core._PX_ || core.__PIXELS__) / 2",
						"y": 80,
						"style": [
							255,
							255,
							255,
							1
						],
						"strokeStyle": [
							0,
							0,
							0,
							1
						],
						"font": "bold 40px Verdana",
						"text": "${core.firstData.title}"
					}
				]
			},
			{
				"type": "setValue",
				"name": "flag:selection",
				"value": "0"
			},
			{
				"type": "comment",
				"text": "在右下方自绘一个对话框进行显示选择项"
			},
			{
				"type": "previewUI",
				"action": [
					{
						"type": "fillRect",
						"x": 230,
						"y": 250,
						"width": 150,
						"height": 142,
						"radius": 10,
						"style": [
							50,
							54,
							159,
							0.85
						]
					},
					{
						"type": "strokeRect",
						"x": 230,
						"y": 250,
						"width": 150,
						"height": 142,
						"radius": 10,
						"style": [
							255,
							255,
							255,
							1
						],
						"lineWidth": 2
					},
					{
						"type": "fillBoldText",
						"x": 305,
						"y": 290,
						"style": [
							255,
							255,
							255,
							1
						],
						"font": "bold 25px Verdana",
						"text": "开始游戏"
					},
					{
						"type": "fillBoldText",
						"x": 305,
						"y": 330,
						"font": "bold 25px Verdana",
						"text": "读取存档"
					},
					{
						"type": "fillBoldText",
						"x": 305,
						"y": 370,
						"font": "bold 25px Verdana",
						"text": "回放录像"
					}
				]
			},
			{
				"type": "while",
				"condition": "1",
				"data": [
					{
						"type": "drawSelector",
						"image": "winskin.png",
						"code": 1,
						"x": 245,
						"y": "261 + 40*flag:selection",
						"width": 120,
						"height": 40
					},
					{
						"type": "wait",
						"data": [
							{
								"case": "keyboard",
								"keycode": "13,32",
								"break": true,
								"action": [
									{
										"type": "switch",
										"condition": "flag:selection",
										"caseList": [
											{
												"case": "0",
												"action": [
													{
														"type": "comment",
														"text": "在“开始游戏”确定"
													},
													{
														"type": "break",
														"n": 1
													}
												]
											},
											{
												"case": "1",
												"action": [
													{
														"type": "comment",
														"text": "在“读取存档”确定"
													},
													{
														"type": "callLoad"
													}
												]
											},
											{
												"case": "2",
												"action": [
													{
														"type": "comment",
														"text": "在“回放录像”确定"
													},
													{
														"type": "if",
														"condition": "(!core.isReplaying())",
														"true": [
															{
																"type": "function",
																"function": "function(){\ncore.chooseReplayFile()\n}"
															}
														]
													}
												]
											}
										]
									}
								]
							},
							{
								"case": "keyboard",
								"keycode": "38",
								"break": true,
								"action": [
									{
										"type": "comment",
										"text": "光标上键"
									},
									{
										"type": "setValue",
										"name": "flag:selection",
										"value": "(flag:selection + 2) % 3"
									}
								]
							},
							{
								"case": "keyboard",
								"keycode": "40",
								"break": true,
								"action": [
									{
										"type": "comment",
										"text": "光标下键"
									},
									{
										"type": "setValue",
										"name": "flag:selection",
										"value": "(flag:selection + 1) % 3"
									}
								]
							},
							{
								"case": "mouse",
								"px": [
									245,
									365
								],
								"py": [
									261,
									300
								],
								"break": true,
								"action": [
									{
										"type": "comment",
										"text": "点击“开始游戏”"
									},
									{
										"type": "break",
										"n": 1
									}
								]
							},
							{
								"case": "mouse",
								"px": [
									245,
									365
								],
								"py": [
									301,
									340
								],
								"break": true,
								"action": [
									{
										"type": "comment",
										"text": "点击“读取存档”"
									},
									{
										"type": "callLoad"
									}
								]
							},
							{
								"case": "mouse",
								"px": [
									245,
									365
								],
								"py": [
									341,
									380
								],
								"break": true,
								"action": [
									{
										"type": "comment",
										"text": "点击“播放录像”"
									},
									{
										"type": "if",
										"condition": "(!core.isReplaying())",
										"true": [
											{
												"type": "function",
												"function": "function(){\ncore.chooseReplayFile()\n}"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				"type": "setValue",
				"name": "flag:selection",
				"value": "null"
			},
			{
				"type": "drawSelector",
				"code": 1
			},
			{
				"type": "clearMap"
			},
			{
				"type": "function",
				"function": "function(){\ncore.control.checkBgm()\n}"
			},
			{
				"type": "if",
				"condition": "(main.levelChoose.length == 0)",
				"true": [
					{
						"type": "comment",
						"text": "没有难度选择：直接开始游戏"
					}
				],
				"false": [
					{
						"type": "comment",
						"text": "难度选择：作为样例，这里只提供了一个显示选择项。"
					},
					{
						"type": "function",
						"function": "function(){\nvar choices = [];\nmain.levelChoose.forEach(function (one) {\n\tchoices.push({\n\t\t\"text\": one.title || '',\n\t\t\"action\": [\n\t\t\t{ \"type\": \"function\", \"function\": \"function() { core.status.hard = '\" + (one.name || '') + \"'; }\" }\n\t\t]\n\t});\n})\ncore.insertAction({ \"type\": \"choices\", \"choices\": choices });\n}"
					},
					{
						"type": "comment",
						"text": "你也可以仿照上面的样例进行自己创建等待用户操作来处理不同的难度分歧。\n如需自己处理，请设置 core.status.hard \n（例如，自定义js脚本：core.status.hard = 'Easy' ）"
					}
				]
			},
			{
				"type": "clearMap"
			},
			{
				"type": "comment",
				"text": "接下来会执行startText中的事件"
			},
			{
				"type": "comment",
				"text": "状态栏默认处于隐藏状态；可以使用“显示状态栏”事件进行显示。"
			}
		],
		"startText": [
			{
				"type": "comment",
				"text": "初始剧情"
			},
			{
				"type": "choices",
				"text": "\t[ ]游戏模式",
				"choices": [
					{
						"text": "70层",
						"color": [
							96,
							238,
							103,
							1
						],
						"action": [
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "setValue",
										"name": "flag:mode",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "flag:val1",
										"value": "(Math.floor((30-(Math.sqrt(core.rand(900))))))"
									},
									{
										"type": "setValue",
										"name": "flag:val2",
										"value": "(Math.floor((30-(Math.sqrt(core.rand(900))))))"
									},
									{
										"type": "setValue",
										"name": "flag:val3",
										"value": "(Math.floor((40-(Math.sqrt(core.rand(1600))))))"
									},
									{
										"type": "choices",
										"text": "\t[ ]选择天赋",
										"choices": [
											{
												"text": "攻击效力提升${flag:val1}%",
												"color": [
													238,
													96,
													96,
													1
												],
												"action": [
													{
														"type": "setValue",
														"name": "flag:atkboost",
														"operator": "+=",
														"value": "flag:val1"
													},
													{
														"type": "break",
														"n": 1
													}
												]
											},
											{
												"text": "防御效力提升${flag:val2}%",
												"color": [
													96,
													189,
													238,
													1
												],
												"action": [
													{
														"type": "setValue",
														"name": "flag:defboost",
														"operator": "+=",
														"value": "flag:val2"
													},
													{
														"type": "break",
														"n": 1
													}
												]
											},
											{
												"text": "刷新！",
												"color": [
													255,
													255,
													255,
													1
												],
												"action": []
											}
										]
									}
								]
							}
						]
					},
					{
						"text": "无尽",
						"color": [
							223,
							238,
							96,
							1
						],
						"action": [
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "setValue",
										"name": "flag:mode",
										"value": "2"
									},
									{
										"type": "setValue",
										"name": "flag:val1",
										"value": "(Math.floor((30-(Math.sqrt(core.rand(900))))))"
									},
									{
										"type": "setValue",
										"name": "flag:val2",
										"value": "(Math.floor((30-(Math.sqrt(core.rand(900))))))"
									},
									{
										"type": "choices",
										"text": "\t[ ]选择天赋",
										"choices": [
											{
												"text": "攻击效力提升${flag:val1}%",
												"color": [
													238,
													96,
													96,
													1
												],
												"action": [
													{
														"type": "setValue",
														"name": "flag:atkboost",
														"operator": "+=",
														"value": "flag:val1"
													},
													{
														"type": "break",
														"n": 1
													}
												]
											},
											{
												"text": "防御效力提升${flag:val2}%",
												"color": [
													96,
													189,
													238,
													1
												],
												"action": [
													{
														"type": "setValue",
														"name": "flag:defboost",
														"operator": "+=",
														"value": "flag:val2"
													},
													{
														"type": "break",
														"n": 1
													}
												]
											},
											{
												"text": "刷新！",
												"color": [
													255,
													255,
													255,
													1
												],
												"action": []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			"计分方式：\n到达层数x100w\n血限x1\n攻防和x20\n护盾x5"
		],
		"shops": [
			{
				"id": "shop1",
				"text": "\t[贪婪之神,moneyShop]勇敢的武士啊, 给我${20+2*flag:shop1}金币就可以：",
				"textInList": "1F金币商店",
				"mustEnable": false,
				"disablePreview": false,
				"choices": [
					{
						"text": "生命+800",
						"need": "status:money>=20+2*flag:shop1",
						"action": [
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "20+2*flag:shop1"
							},
							{
								"type": "setValue",
								"name": "flag:shop1",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "800"
							}
						]
					},
					{
						"text": "攻击+4",
						"need": "status:money>=20+2*flag:shop1",
						"action": [
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "20+2*flag:shop1"
							},
							{
								"type": "setValue",
								"name": "flag:shop1",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "4"
							}
						]
					}
				]
			},
			{
				"id": "shop2",
				"text": "\t[贪婪之神,expShop]勇敢的武士啊, 给我一定经验就可以：",
				"textInList": "1F经验商店",
				"mustEnable": false,
				"disablePreview": true,
				"choices": [
					{
						"text": "等级+1（100经验）",
						"need": "status:exp>=100",
						"action": [
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "100"
							},
							{
								"type": "setValue",
								"name": "status:lv",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "1000"
							}
						]
					}
				]
			},
			{
				"id": "itemShop",
				"item": true,
				"textInList": "道具商店",
				"use": "money",
				"mustEnable": false,
				"choices": [
					{
						"id": "yellowKey",
						"number": 10,
						"money": "10",
						"sell": "5"
					}
				]
			},
			{
				"id": "keyShop",
				"textInList": "回收钥匙商店",
				"mustEnable": false,
				"commonEvent": "回收钥匙商店"
			}
		],
		"levelUp": [
			{
				"need": "0",
				"title": "",
				"action": [
					{
						"type": "comment",
						"text": "此处是初始等级，只需填写称号"
					}
				]
			},
			{
				"need": "20",
				"title": "",
				"action": [
					{
						"type": "setValue",
						"name": "status:atk",
						"operator": "+=",
						"value": "10"
					},
					{
						"type": "setValue",
						"name": "status:def",
						"operator": "+=",
						"value": "10"
					}
				]
			},
			{
				"need": "40",
				"title": "",
				"action": [
					{
						"type": "tip",
						"text": "恭喜升级"
					}
				]
			}
		]
	},
	"values": {
		"lavaDamage": 100,
		"poisonDamage": 10,
		"weakValue": 20,
		"redGem": 3,
		"blueGem": 3,
		"greenGem": 5,
		"redPotion": 100,
		"bluePotion": 250,
		"yellowPotion": 500,
		"greenPotion": 800,
		"breakArmor": 0.9,
		"counterAttack": 0.1,
		"purify": 3,
		"hatred": 2,
		"animateSpeed": 30000,
		"moveSpeed": 1000000,
		"statusCanvasRowsOnMobile": 3,
		"floorChangeTime": 100
	},
	"flags": {
		"statusBarItems": [
			"enableHPMax",
			"enableHP",
			"enableAtk",
			"enableDef",
			"enableMDef",
			"enableMoney"
		],
		"autoScale": true,
		"extendToolbar": false,
		"flyNearStair": true,
		"flyRecordPosition": false,
		"itemFirstText": false,
		"equipboxButton": false,
		"enableAddPoint": true,
		"enableNegativeDamage": false,
		"betweenAttackMax": false,
		"useLoop": false,
		"startUsingCanvas": false,
		"statusCanvas": false,
		"enableEnemyPoint": true,
		"enableGentleClick": true,
		"ignoreChangeFloor": true,
		"canGoDeadZone": false,
		"enableMoveDirectly": true,
		"enableRouteFolding": true,
		"disableShopOnDamage": false,
		"blurFg": false,
		"hideLeftStatusBar": false
	}
}