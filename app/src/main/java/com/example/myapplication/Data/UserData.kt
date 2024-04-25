package com.example.myapplication.Data

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity
data class UserActivity(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    val startTime: Long,
    val endTime: Long,
    val duration: Long
)
