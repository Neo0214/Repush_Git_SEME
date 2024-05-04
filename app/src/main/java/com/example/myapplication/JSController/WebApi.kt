package com.example.myapplication.JSController

import android.content.Context
import android.util.Log
import android.webkit.JavascriptInterface
import android.webkit.WebView
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.Observer
import androidx.room.InvalidationTracker
import com.example.myapplication.Entity.Item
import com.example.myapplication.GameViewModel.GameViewModel
import com.example.myapplication.MainActivity
import com.example.myapplication.StateCode
import com.google.gson.Gson
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext



class WebApi(private val webView: WebView,private val myviewModel: GameViewModel) {
    private fun outputMyData(stateCode: StateCode){
        val gson= Gson()
        val jsonData = gson.toJson(stateCode).replace("\"", "\\\"")
        Log.d("MyJsonData", jsonData)
        val jsCode = "javascript:handleItemData(\"$jsonData\")"
        webView.post {
            webView.evaluateJavascript(jsCode, null)
        }

    }
    @JavascriptInterface
    fun getOneGameInfo(id:Int){
        // 监听 LiveData 的数据变化
       CoroutineScope(Dispatchers.IO).launch{
           val item= myviewModel.getItemById(id)
           withContext(Dispatchers.Main){
//               val gson = Gson()
//               val data = StateCode(200,"success",item)
//               val jsonData = gson.toJson(data).replace("\"", "\\\"")
//               Log.d("MyJsonData", jsonData)
//               val jsCode = "javascript:handleItemData(\"$jsonData\")"
//               webView.post {
//                   webView.evaluateJavascript(jsCode, null)
//               }
               val data = StateCode(200,"success select",item)
               outputMyData(data)
           }
       }
    }

    @JavascriptInterface
    fun UpdateGameTime(id: Int,time:Double){
        CoroutineScope(Dispatchers.IO).launch {
            val item = myviewModel.UpdateGameTime(id,time)
            withContext(Dispatchers.Main){
                val data = StateCode(200,"success")
                outputMyData(data)
            }
        }
    }
}