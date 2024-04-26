package com.example.myapplication.Data

import android.os.Parcelable
import kotlinx.parcelize.Parcelize
import java.io.Serializable


// 游戏返回的数据结构

@Parcelize
data class GameReturnData(
    val gameOrder: GameOrder,
    val score: Int,
    val UseTime :Long
): Parcelable
