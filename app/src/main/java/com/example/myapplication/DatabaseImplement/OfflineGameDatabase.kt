package com.example.myapplication.DatabaseImplement

import com.example.myapplication.Dao.ItemDao
import com.example.myapplication.Entity.Item
import kotlinx.coroutines.flow.Flow

//实例化应用层接口
class OfflineGameDatabase(private val itemDao: ItemDao):ItemsRepository {
    override fun getOneGame(id: Int): Item? =itemDao.getItem(id)

    override suspend fun insertGame(item: Item) =itemDao.insert(item)
    override suspend fun deleteGame(item: Item)=itemDao.delete(item)
}