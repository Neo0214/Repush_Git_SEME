package com.example.myapplication.Data
import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query
import androidx.room.Update
@Dao
interface GameInfoDao {

    @Query("UPDATE GameInfo SET gamePlayTime = :GameTime WHERE gameOrder= :gameOrder")
    fun updateGameTime(gameOrder:GameOrder,GameTime:Long)

    @Query("SELECT gamePlayTime FROM gameinfo WHERE gameOrder= :gameOrder")
    fun getGameTime(gameOrder: GameOrder):Long
}