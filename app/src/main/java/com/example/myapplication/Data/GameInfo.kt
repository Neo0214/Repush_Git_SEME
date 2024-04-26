package com.example.myapplication.Data

import android.os.Parcelable
import androidx.room.Entity
import androidx.room.PrimaryKey

import kotlinx.parcelize.Parcelize
//  用于在主界面显示game信息的一些内容
// 包括游戏名字，游戏介绍，当前游戏时长，以及可能的游戏图片。在card部分有什么要加的内容直接在这里塞就行
@Entity
@Parcelize
data class GameInfo(
    val gameName:String,
    val gameIntroduce:String,
    @PrimaryKey val gameOrder: GameOrder,
    val gamePlayTime: Int = 0
): Parcelable
