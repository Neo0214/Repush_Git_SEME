package com.example.myapplication

import android.os.Parcelable
import com.google.gson.annotations.SerializedName
import kotlinx.parcelize.Parcelize


data class StateCode(
    val StateCode:Int,
    val Message:String,
    val item: Any?= null
)
