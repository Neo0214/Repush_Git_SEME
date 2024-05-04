package com.example.myapplication

import android.content.Context
import com.example.myapplication.DatabaseImplement.ItemsRepository
import com.example.myapplication.DatabaseImplement.OfflineGameDatabase

//用于管理多个应用层接口
interface AppContainer{
    val itemsRepository:ItemsRepository
}
class AppDataContainer(private val context: Context):AppContainer {

    override val itemsRepository: ItemsRepository by lazy {
        // getDatabase是创建数据库实例，gameInfoDao是创建Entity相关实例
        OfflineGameDatabase(GameInfoDatabase.getDatabase(context).gameInfoDao())
    }

}