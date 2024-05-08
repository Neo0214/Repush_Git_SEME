package com.example.myapplication.DatabaseImplement

import com.example.myapplication.Entity.Item
import kotlinx.coroutines.flow.Flow

//提供应用层接口
interface ItemsRepository {
    fun getOneGame(id:Int):Item?
    suspend fun insertGame(item: Item)
    suspend fun deleteGame(item: Item)
    suspend fun updateGameTime(id: Int,GameTime:Double)

    fun getAllGame():List<Item>?
}