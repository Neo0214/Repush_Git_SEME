package com.example.myapplication.Data
import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
@Database(entities = [GameInfo::class], version = 1,exportSchema = false)
abstract class AbsAppDataBase:RoomDatabase() {
    abstract fun GameInfoDao() :GameInfoDao
//    companion object {
//        @Volatile
//        private var Instance: InventoryDatabase? = null
//
//        fun getDatabase(context: Context): InventoryDatabase {
//            // if the Instance is not null, return it, otherwise create a new database instance.
//            return Instance ?: synchronized(this) {
//                Room.databaseBuilder(context, InventoryDatabase::class.java, "item_database")
//                    .build()
//                    .also { Instance = it }
//            }
//        }
//    }
}