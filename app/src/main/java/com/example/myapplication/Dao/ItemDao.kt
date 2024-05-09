package com.example.myapplication.Dao
import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query
import androidx.room.OnConflictStrategy
import androidx.room.Update
import com.example.myapplication.Entity.Item
import kotlinx.coroutines.flow.Flow

//提供数据层接口
@Dao
interface ItemDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(vararg item: Item)

    @Update
    suspend fun update(vararg item: Item)

    @Delete
    suspend fun delete(vararg item: Item)

    @Query("SELECT * from items WHERE id = :id")
    fun getItem(id: Int): Item?

    @Query("SELECT * from items WHERE id >999")
    fun getAllItem():List<Item>?

    @Query("UPDATE items SET gamePlayTime =:time+gamePlayTime WHERE id= :id")
    suspend fun updateItemGameTime(id: Int,time:Double)



}