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
import com.google.gson.Gson
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext



class WebApi(private val webView: WebView,private val myviewModel: GameViewModel) {

    @JavascriptInterface
    fun getOneGameInfo(id:Int){
        // 监听 LiveData 的数据变化
       CoroutineScope(Dispatchers.IO).launch{
           val item= myviewModel.getItemById(id)
           withContext(Dispatchers.Main){
               val gson = Gson()
               val jsonData = gson.toJson(item).replace("\"", "\\\"")
               Log.d("MyJsonData", jsonData)
               val jsCode = "javascript:handleItemData(\"$jsonData\")"
               webView.post {
                   webView.evaluateJavascript(jsCode, null)
               }
           }
       }
    }
}