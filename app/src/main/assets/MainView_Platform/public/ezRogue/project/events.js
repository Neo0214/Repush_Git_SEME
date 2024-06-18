var events_c12a15a8_c380_4b28_8144_256cba95f760 = 
{
	"commonEvent": {
		"加点事件": [
			{
				"type": "comment",
				"text": "通过传参，flag:arg1 表示当前应该的加点数值"
			},
			{
				"type": "setValue",
				"name": "flag:temprand",
				"value": "core.rand(10)"
			},
			{
				"type": "setValue",
				"name": "flag:tem1",
				"value": "core.rand(2)"
			},
			{
				"type": "setValue",
				"name": "flag:tem2",
				"value": "core.rand(2)"
			},
			{
				"type": "setValue",
				"name": "flag:tem3",
				"value": "core.rand(2)"
			},
			{
				"type": "setValue",
				"name": "flag:tem4",
				"value": "core.rand(2)"
			},
			{
				"type": "setValue",
				"name": "flag:tem5",
				"value": "core.rand(2)"
			},
			{
				"type": "choices",
				"text": "\t[选择你的属性增益！]",
				"choices": [
					{
						"text": "生命回满",
						"color": [
							196,
							222,
							74,
							1
						],
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"value": "status:hpmax"
							},
							{
								"type": "insert",
								"name": "hp更新"
							}
						]
					},
					{
						"text": "心之钢：随机提高生命上限（100-300）",
						"color": [
							150,
							35,
							35,
							1
						],
						"action": [
							{
								"type": "setValue",
								"name": "flag:temphealth",
								"value": "100+10*Math.floor(core.rand(30))"
							},
							{
								"type": "setValue",
								"name": "status:hpmax",
								"operator": "+=",
								"value": "flag:temphealth"
							},
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "flag:temphealth"
							},
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "min=",
								"value": "status:hpmax"
							},
							{
								"type": "insert",
								"name": "hp更新"
							}
						]
					},
					{
						"text": "狂怒小刀：随机获得一些攻击(10-80) ",
						"color": [
							220,
							74,
							74,
							1
						],
						"action": [
							{
								"type": "setValue",
								"name": "flag:tempattack",
								"value": "10+Math.floor(core.rand(70))"
							},
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "flag:tempattack"
							},
							{
								"type": "insert",
								"name": "hp更新"
							}
						]
					},
					{
						"text": "兰顿之兆：随机获得一些防御(10-80) ",
						"color": [
							77,
							74,
							220,
							1
						],
						"action": [
							{
								"type": "setValue",
								"name": "flag:tempattack",
								"value": "10+Math.floor(core.rand(70))"
							},
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "flag:tempattack"
							},
							{
								"type": "insert",
								"name": "hp更新"
							}
						]
					},
					{
						"text": "基克的救赎：随机获得一些护盾（10-100）",
						"color": [
							194,
							74,
							220,
							1
						],
						"action": [
							{
								"type": "setValue",
								"name": "flag:tempshelf",
								"value": "10+Math.floor(core.rand(70))"
							},
							{
								"type": "setValue",
								"name": "status:mdef",
								"operator": "+=",
								"value": "flag:tempshelf"
							},
							{
								"type": "insert",
								"name": "hp更新"
							}
						]
					},
					{
						"text": "三相之力：属性提高33，血量提高333",
						"color": [
							239,
							119,
							25,
							1
						],
						"condition": "core.rand(2)>1",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "33"
							},
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "33"
							},
							{
								"type": "setValue",
								"name": "status:hpmax",
								"operator": "+=",
								"value": "flag:temphealth"
							},
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "333"
							},
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "min=",
								"value": "status:hpmax"
							},
							{
								"type": "insert",
								"name": "hp更新"
							}
						]
					}
				]
			}
		],
		"回收钥匙商店": [
			{
				"type": "comment",
				"text": "此事件在全局商店中被引用了(全局商店keyShop)"
			},
			{
				"type": "comment",
				"text": "解除引用前勿删除此事件"
			},
			{
				"type": "comment",
				"text": "玩家在快捷列表（V键）中可以使用本公共事件"
			},
			{
				"type": "while",
				"condition": "1",
				"data": [
					{
						"type": "choices",
						"text": "\t[商人,trader]你有多余的钥匙想要出售吗？",
						"choices": [
							{
								"text": "黄钥匙（10金币）",
								"color": [
									255,
									255,
									0,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "item:yellowKey >= 1",
										"true": [
											{
												"type": "setValue",
												"name": "item:yellowKey",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "10"
											}
										],
										"false": [
											"\t[商人,trader]你没有黄钥匙！"
										]
									}
								]
							},
							{
								"text": "蓝钥匙（50金币）",
								"color": [
									0,
									0,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "item:blueKey >= 1",
										"true": [
											{
												"type": "setValue",
												"name": "item:blueKey",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "50"
											}
										],
										"false": [
											"\t[商人,trader]你没有蓝钥匙！"
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "exit"
									}
								]
							}
						]
					}
				]
			}
		],
		"战斗": [
			{
				"type": "setValue",
				"name": "flag:val0",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:morihp",
				"value": "50"
			},
			{
				"type": "setValue",
				"name": "flag:mhp",
				"value": "50"
			},
			{
				"type": "setValue",
				"name": "flag:matk",
				"value": "15"
			},
			{
				"type": "setValue",
				"name": "flag:mdef",
				"value": "5"
			},
			{
				"type": "while",
				"condition": "((flag:val0<=70)||(flag:mode===2))",
				"data": [
					{
						"type": "setValue",
						"name": "flag:hatk",
						"value": "(Math.floor((status:atk*(1+flag:atkboost*0.01))))"
					},
					{
						"type": "setValue",
						"name": "flag:hdef",
						"value": "(Math.floor((status:def*(1+flag:defboost*0.01))))"
					},
					{
						"type": "setValue",
						"name": "flag:nowmdef",
						"value": "(Math.floor((status:mdef)))"
					},
					{
						"type": "while",
						"condition": "1",
						"data": [
							{
								"type": "moveHero",
								"time": 2,
								"steps": [
									"forward:3"
								]
							},
							{
								"type": "animate",
								"name": "silversword",
								"loc": [
									6,
									8
								],
								"async": true
							},
							{
								"type": "function",
								"function": "function(){\ncore.addPop(6 * 32 + 16, 8 * 32 + 16, Math.max((core.getFlag('hatk') - core.getFlag('mdef')), Math.floor(core.getFlag('hatk') * 0.05)))\n}"
							},
							{
								"type": "setValue",
								"name": "flag:curattack",
								"value": "(Math.max(Math.floor(flag:hatk-flag:mdef),Math.floor(flag:hatk*0.05)))"
							},
							{
								"type": "setValue",
								"name": "flag:mhp",
								"operator": "-=",
								"value": "flag:curattack"
							},
							{
								"type": "setValue",
								"name": "flag:mhp",
								"operator": "max=",
								"value": "0"
							},
							{
								"type": "insert",
								"name": "hp更新"
							},
							{
								"type": "if",
								"condition": "(flag:mhp<=0)",
								"true": [
									{
										"type": "hide",
										"loc": [
											[
												6,
												8
											]
										],
										"floorId": "MT0"
									},
									{
										"type": "insert",
										"name": "加点事件"
									},
									{
										"type": "setValue",
										"name": "flag:val0",
										"operator": "+=",
										"value": "1"
									},
									{
										"type": "break",
										"n": 1
									}
								]
							},
							{
								"type": "moveHero",
								"time": 2,
								"steps": [
									"backward:3"
								]
							},
							{
								"type": "waitAsync"
							},
							{
								"type": "sleep",
								"time": 10
							},
							{
								"type": "move",
								"loc": [
									6,
									8
								],
								"time": 2,
								"keep": true,
								"steps": [
									"up:3"
								]
							},
							{
								"type": "if",
								"condition": "(flag:nowmdef>=(Math.max((flag:matk-flag:hdef),0)))",
								"true": [
									{
										"type": "function",
										"function": "function(){\ncore.addPop(6 * 32 + 16, 4 * 32 + 16, Math.max((core.getFlag('matk') - core.getFlag('hdef')), Math.floor(core.getFlag('matk') * 0.05)), \"white\", \"white\")\n}"
									},
									{
										"type": "animate",
										"name": "hand",
										"loc": [
											6,
											4
										],
										"async": true
									},
									{
										"type": "setValue",
										"name": "flag:nowmdef",
										"operator": "-=",
										"value": "(Math.max((flag:matk-flag:hdef),0))"
									}
								],
								"false": [
									{
										"type": "function",
										"function": "function(){\ncore.addPop(6 * 32 + 16, 4 * 32 + 16, Math.max((core.getFlag('matk') - core.getFlag('hdef')), 0))\n}"
									},
									{
										"type": "animate",
										"name": "hand",
										"loc": [
											6,
											4
										],
										"async": true
									},
									{
										"type": "setValue",
										"name": "status:hp",
										"operator": "-=",
										"value": "(flag:matk-flag:hdef)-flag:nowmdef"
									},
									{
										"type": "setValue",
										"name": "flag:nowmdef",
										"value": "0"
									}
								]
							},
							{
								"type": "insert",
								"name": "hp更新"
							},
							{
								"type": "if",
								"condition": "(status:hp<=0)",
								"true": [
									{
										"type": "insert",
										"name": "死亡"
									}
								]
							},
							{
								"type": "move",
								"loc": [
									6,
									5
								],
								"time": 2,
								"keep": true,
								"steps": [
									"down:3"
								]
							},
							{
								"type": "waitAsync"
							},
							{
								"type": "sleep",
								"time": 10
							}
						]
					},
					{
						"type": "setValue",
						"name": "status:money",
						"operator": "+=",
						"value": "1"
					},
					{
						"type": "insert",
						"name": "hp更新"
					},
					{
						"type": "moveHero",
						"time": 2,
						"steps": [
							"backward:3"
						]
					},
					{
						"type": "sleep",
						"time": 10
					},
					{
						"type": "function",
						"function": "function(){\ncore.setBlock('E' + ((core.getFlag(\"val0\") - 1) % 70 + 1), 6, 8)\n}"
					},
					{
						"type": "show",
						"loc": [
							[
								6,
								8
							]
						],
						"floorId": "MT0",
						"time": 2
					},
					{
						"type": "if",
						"condition": "(flag:val0>=60)",
						"true": [
							{
								"type": "setValue",
								"name": "flag:morihp",
								"operator": "+=",
								"value": "(core.rand(21)+30)"
							},
							{
								"type": "setValue",
								"name": "flag:matk",
								"operator": "+=",
								"value": "(core.rand(5)+4)"
							},
							{
								"type": "setValue",
								"name": "flag:mdef",
								"operator": "+=",
								"value": "(core.rand(3)+2)"
							},
							{
								"type": "setValue",
								"name": "flag:mhp",
								"value": "flag:morihp"
							}
						],
						"false": [
							{
								"type": "if",
								"condition": "(flag:val0>=40)",
								"true": [
									{
										"type": "setValue",
										"name": "flag:morihp",
										"operator": "+=",
										"value": "(core.rand(21)+25)"
									},
									{
										"type": "setValue",
										"name": "flag:matk",
										"operator": "+=",
										"value": "(core.rand(5)+3)"
									},
									{
										"type": "setValue",
										"name": "flag:mdef",
										"operator": "+=",
										"value": "(core.rand(3)+1)"
									},
									{
										"type": "setValue",
										"name": "flag:mhp",
										"value": "flag:morihp"
									}
								],
								"false": [
									{
										"type": "if",
										"condition": "(flag:val0>=20)",
										"true": [
											{
												"type": "setValue",
												"name": "flag:morihp",
												"operator": "+=",
												"value": "(core.rand(16)+20)"
											},
											{
												"type": "setValue",
												"name": "flag:matk",
												"operator": "+=",
												"value": "(core.rand(5)+2)"
											},
											{
												"type": "setValue",
												"name": "flag:mdef",
												"operator": "+=",
												"value": "(core.rand(3)+1)"
											},
											{
												"type": "setValue",
												"name": "flag:mhp",
												"value": "flag:morihp"
											}
										],
										"false": [
											{
												"type": "setValue",
												"name": "flag:morihp",
												"operator": "+=",
												"value": "(core.rand(11)+20)"
											},
											{
												"type": "setValue",
												"name": "flag:morihp",
												"operator": "*=",
												"value": "1.5"
											},
											{
												"type": "setValue",
												"name": "flag:matk",
												"operator": "+=",
												"value": "(core.rand(6)+1)"
											},
											{
												"type": "setValue",
												"name": "flag:matk",
												"operator": "*=",
												"value": "1.5"
											},
											{
												"type": "setValue",
												"name": "flag:mdef",
												"operator": "+=",
												"value": "(core.rand(3)+1)"
											},
											{
												"type": "setValue",
												"name": "flag:mdef",
												"operator": "*=",
												"value": "1.5"
											},
											{
												"type": "setValue",
												"name": "flag:mhp",
												"value": "flag:morihp"
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
				"name": "flag:score",
				"operator": "+=",
				"value": "status:hpmax"
			},
			{
				"type": "setValue",
				"name": "flag:score",
				"operator": "+=",
				"value": "((status:atk+status:def)*20)"
			},
			{
				"type": "setValue",
				"name": "flag:score",
				"operator": "+=",
				"value": "(status:mdef*5)"
			},
			{
				"type": "win",
				"reason": "成功过关！"
			}
		],
		"神器": [],
		"hp更新": [
			{
				"type": "showImage",
				"code": 1,
				"image": "life0.png",
				"loc": [
					135,
					35
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "showImage",
				"code": 2,
				"image": "life0.png",
				"loc": [
					135,
					350
				],
				"opacity": 1,
				"time": 0
			},
			{
				"type": "function",
				"function": "function(){\ncore.clearMap(\"data\")\nvar ctx = 'data';\nvar f = 0;\nvar _fillBoldTextWithFontCheck = function (text, x, y, style) {\n\t// \t\t斜体判定：如果不是纯数字和字母，斜体会非常难看，需要取消\n\n\tif (!f) {\n\t\tif (!/^[-a-zA-Z0-9`~!@#$%^&*()_=+\\[{\\]}\\\\|;:'\",<.>\\/?]*$/.test(text))\n\t\t\tcore.setFont(ctx, ' bold 20px Verdana');\n\t\telse core.setFont(ctx, 'italic bold 20px Verdana');\n\t} else core.setFont(ctx, ' bold 20px Verdana');\n\tcore.fillBoldText(ctx, text, x, y, style);\n}\nvar pct = core.getStatus('hp') / (core.getStatus('hpmax'));\nvar tp, aaa;\nif (pct == 1) tp = 'lifeA.png';\nelse if (pct >= 0.75) tp = 'lifeB.png';\nelse if (pct >= 0.5) tp = 'lifeC.png';\nelse if (pct >= 0.25) tp = 'lifeD.png';\nelse {\n\ttp = 'lifeE.png';\n\tif (pct <= 0.01) core.setAlpha(ctx, pct * 70 + 0.3);\n}\nif (pct <= 0.01 && pct > 0) pct = 0.01;\nfor (var i = 1; i <= pct * 100; i++)\n\tcore.drawImage(ctx, tp, 138 + i * 1.1, 35, 32, 32);\ncore.setAlpha(ctx, 1);\n//core.drawImage(ctx, core.statusBar.icons.hp, 6, 83, 25, 25);\nf = 1;\n_fillBoldTextWithFontCheck(core.formatBigNumber(core.getRealStatus('hp')) + ' / ' + core.formatBigNumber(core.getStatus('hpmax')), 150, 65, \"#FF99FF\");\nf = 0;\n\npct = core.getFlag('mhp') / (core.getFlag('morihp'));\nvar tp, aaa;\nif (pct == 1) tp = 'lifeA.png';\nelse if (pct >= 0.75) tp = 'lifeB.png';\nelse if (pct >= 0.5) tp = 'lifeC.png';\nelse if (pct >= 0.25) tp = 'lifeD.png';\nelse {\n\ttp = 'lifeE.png';\n\tif (pct <= 0.01) core.setAlpha(ctx, pct * 70 + 0.3);\n}\nif (pct <= 0.01 && pct > 0) pct = 0.01;\nfor (var i = 1; i <= pct * 100; i++)\n\tcore.drawImage(ctx, tp, 138 + i * 1.1, 350, 32, 32);\ncore.setAlpha(ctx, 1);\n//core.drawImage(ctx, core.statusBar.icons.hp, 6, 83, 25, 25);\nf = 1;\n_fillBoldTextWithFontCheck(core.formatBigNumber(core.getFlag('mhp')) + ' / ' + core.formatBigNumber(core.getFlag('morihp')), 150, 380, \"#FF99FF\");\nf = 0;\nvar ctx = 'data';\npct = core.getFlag('nowmdef') / (core.getStatus('mdef'));\nif (pct <= 0.01 && pct > 0) pct = 0.01;\nfor (var i = 1; i <= pct * 100; i++)\n\tcore.drawImage(ctx, 'lifeF.png', 143 + i, 35, 32, 32);\ncore.setAlpha(ctx, 1);\nf = 1;\n_fillBoldTextWithFontCheck(core.formatBigNumber(core.getRealStatus('hp')) + ' / ' + core.formatBigNumber(core.getStatus('hpmax')), 150, 65, \"#FF99FF\");\n_fillBoldTextWithFontCheck(core.getFlag('nowmdef') + ' / ' + (core.getStatus('mdef')), 150, 95, \"lightblue\");\nf = 0;\n//core.drawImage(ctx, core.statusBar.icons.hp, 6, 83, 25, 25);\n}"
			}
		],
		"死亡": [
			{
				"type": "setValue",
				"name": "flag:score",
				"operator": "+=",
				"value": "(status:money*1000000)"
			},
			{
				"type": "setValue",
				"name": "flag:score",
				"operator": "+=",
				"value": "status:hpmax"
			},
			{
				"type": "setValue",
				"name": "flag:score",
				"operator": "+=",
				"value": "((status:atk+status:def)*20)"
			},
			{
				"type": "setValue",
				"name": "flag:score",
				"operator": "+=",
				"value": "(status:mdef*5)"
			},
			{
				"type": "win",
				"reason": "游戏结束！"
			}
		],
		"商店选择": null
	}
}