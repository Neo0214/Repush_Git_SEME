package com.example.myapplication.Data
import android.content.Context
import androidx.room.Room
class AppDataBase (context: Context){
    private val db = Room.databaseBuilder(
        context.applicationContext,
        AbsAppDataBase::class.java,
        "AppDataBase.db"
    ).build()
    private val gameInfoDao=db.GameInfoDao()
     fun updateGameTime(gameOrder: GameOrder, Time:Long) {
        gameInfoDao.updateGameTime(gameOrder,Time)
    }
     fun getGameTime(gameOrder: GameOrder):Long{
        return gameInfoDao.getGameTime(gameOrder)
    }
}