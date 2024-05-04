package com.example.myapplication

import android.content.Context
import androidx.room.Database
import androidx.room.RoomDatabase
import com.example.myapplication.Dao.ItemDao
import com.example.myapplication.Entity.Item
import androidx.room.Room
import androidx.sqlite.db.SupportSQLiteDatabase
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch


@Database(entities = [Item::class], version = 1, exportSchema = false)
abstract class GameInfoDatabase:RoomDatabase(){
    abstract fun gameInfoDao():ItemDao

    companion object{
        // 用于记录当前数据库的引用
        @Volatile
        private var Instance:GameInfoDatabase?=null
        // 用于同步获得指定的一个数据库
        fun getDatabase(context: Context):GameInfoDatabase{
            return Instance ?: synchronized(this){
                // 获取数据库
                Room.databaseBuilder(context,GameInfoDatabase::class.java,"gameInfo_database").fallbackToDestructiveMigration().build().also { Instance=it }
            }
        }
    }
}