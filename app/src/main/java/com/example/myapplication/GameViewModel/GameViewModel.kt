package com.example.myapplication.GameViewModel

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.asLiveData
import androidx.lifecycle.viewModelScope
import com.example.myapplication.DatabaseImplement.ItemsRepository
import com.example.myapplication.Entity.Item
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.launch
import java.lang.IllegalArgumentException

//应用层与UI层的交互体
class GameViewModel(private val repository: ItemsRepository) :ViewModel() {
//    private val _uiState = MutableStateFlow(GameUiState())
    fun getItemById(id:Int):Item?{
        Log.d("getItemById","getItemNow")
        val tmp = repository.getOneGame(id)
        Log.d("getItemById","finish return")
        return tmp
    }
    fun insertGameItem(item: Item){
        viewModelScope.launch {
            Log.d("insertGameItem","insert Data Now")
            repository.insertGame(item)
            Log.d("insertGameItem","finish insert")
        }
    }

    fun updateGameInfo(item: Item){
        viewModelScope.launch {
            Log.d("updateGameItem","update data now")
            repository
        }
    }
}
class GameViewModelFactory(private val repository: ItemsRepository) :ViewModelProvider.Factory{
    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        if(modelClass.isAssignableFrom(GameViewModel::class.java)){
            @Suppress("UNCHECKED_CAST")
            return GameViewModel(repository) as T
        }
        throw IllegalArgumentException("Unknown ViewModel Class")
    }
}

