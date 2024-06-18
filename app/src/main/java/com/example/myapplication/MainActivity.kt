package com.example.myapplication

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.webkit.ConsoleMessage
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.viewModels
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Card
import androidx.compose.material3.Text
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Button
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.runtime.getValue
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.viewinterop.AndroidView
import com.example.myapplication.Entity.Item
import com.example.myapplication.GameViewModel.GameViewModel
import com.example.myapplication.GameViewModel.GameViewModelFactory

import androidx.compose.runtime.livedata.observeAsState
import com.example.myapplication.JSController.WebApi
import android.annotation.SuppressLint
import android.app.Activity
import android.app.AlertDialog
import android.app.DownloadManager
import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.content.ContextWrapper
import android.content.pm.ActivityInfo
import android.graphics.Bitmap
import android.net.Uri
import android.net.http.SslError
import android.os.Environment
import android.util.Base64
import android.view.View
import android.webkit.JavascriptInterface
import android.webkit.JsPromptResult
import android.webkit.JsResult
import android.webkit.SslErrorHandler
import android.webkit.URLUtil
import android.webkit.ValueCallback
import android.widget.EditText
import android.widget.Toast
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.absoluteOffset
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Refresh
import androidx.compose.material3.Icon
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.google.accompanist.web.AccompanistWebChromeClient
import com.google.accompanist.web.AccompanistWebViewClient
//import com.google.accompanist.web.AccompanistWebChromeClient
//import com.google.accompanist.web.AccompanistWebViewClient
import com.google.accompanist.web.WebView
import com.google.accompanist.web.rememberSaveableWebViewState
import com.google.accompanist.web.rememberWebViewNavigator
//import com.google.accompanist.web.rememberSaveableWebViewState
//import com.google.accompanist.web.rememberWebViewNavigator
import com.google.accompanist.web.WebView
import com.google.accompanist.web.rememberSaveableWebViewState
import com.google.accompanist.web.rememberWebViewNavigator
import java.io.BufferedReader
import java.io.File
import java.io.FileInputStream
import java.io.FileWriter
import java.io.IOException
import java.io.InputStreamReader
import java.io.PrintWriter
import java.util.Date
import java.util.function.Consumer

class MainActivity : ComponentActivity() {
    // 设置游戏简介
//    private val gameInfoArray = mutableListOf<GameInfo>()
//    private lateinit var appDataBase: AppDataBase
//    fun SetGameInfo(){
//        gameInfoArray.add(GameInfo("2048","一款简单的2048小游戏",GameOrder.GAME_2048));
//        gameInfoArray.add(GameInfo("飞机大战","一款轻松快速的打飞机游戏",GameOrder.GAME_HitThePlane));
//    }


    //注册返回的内容
//    private val startForResult = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
//        if (result.resultCode == Activity.RESULT_OK) {
//            val intent = result.data
//            // Handle the data from intent
//            val value = result.data?.getParcelableExtra<GameReturnData>("RetData")
//            if (value != null) {
//                //appDataBase.updateGameTime(value.gameOrder,value.UseTime)
//
//            }
//        }
//    }
//    private val url ="file:///android_asset/test.html"
    private val myurl = getString(R.string.theURL)

    private val appDataContainer:AppDataContainer = AppDataContainer(this)
    private val viewModel: GameViewModel by viewModels<GameViewModel> {
        GameViewModelFactory(appDataContainer.itemsRepository)
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
//        SetGameInfo()

        setContent {
            Column(modifier = Modifier.fillMaxSize()) {
//                WebViewScr(modifier = Modifier
//                    .weight(1f)
//                    .fillMaxSize(), url =url, viewModel = viewModel )
                WebView(state = rememberSaveableWebViewState(),
                    modifier = Modifier.fillMaxSize(),
                    onCreated = {
                        webView -> webView.apply {
                            settings.apply {
                                javaScriptEnabled = true
                                javaScriptCanOpenWindowsAutomatically = true
                                useWideViewPort = true
                                loadWithOverviewMode = true
                                layoutAlgorithm = WebSettings.LayoutAlgorithm.SINGLE_COLUMN
                                allowContentAccess = true
                                defaultTextEncodingName = "utf-8"
                                domStorageEnabled = true
                                mediaPlaybackRequiresUserGesture = false
                                databaseEnabled = true
                                loadsImagesAutomatically = true
                                setNeedInitialFocus(true)
                                // 下面这行确保内容适应视图端口
                                setSupportZoom(true)
                                builtInZoomControls = true
                                displayZoomControls = false
                            }
                        scrollBarStyle = View.SCROLLBARS_OUTSIDE_INSET
                        setLayerType(View.LAYER_TYPE_HARDWARE, null)
                        loadUrl(myurl)
                    }
                    })
            }
        }
    }
@Composable
fun WebViewScr(modifier: Modifier,url: String,viewModel: GameViewModel) {
    AndroidView(
        factory = { context ->
            WebView(context).apply {
                webViewClient = WebViewClient()
                webChromeClient = object : WebChromeClient() {
                    override fun onConsoleMessage(message: ConsoleMessage?): Boolean {
                        Log.d("WebView", message?.message() ?: "")
                        return true
                    }
                }
                settings.apply {
                    javaScriptEnabled = true
                    javaScriptCanOpenWindowsAutomatically = true
                    useWideViewPort = true
                    loadWithOverviewMode = true
                    layoutAlgorithm = WebSettings.LayoutAlgorithm.SINGLE_COLUMN
                    allowContentAccess = true
                    defaultTextEncodingName = "utf-8"
                    domStorageEnabled = true
                    mediaPlaybackRequiresUserGesture = false
                    databaseEnabled = true
                    loadsImagesAutomatically = true
                    setNeedInitialFocus(true)

                }
                addJavascriptInterface(WebApi(this, viewModel), "Android") // 注入接口

                loadUrl(url)
            }
        },
        modifier =Modifier.fillMaxSize(),
    )

}
@Composable
fun InsertButton(viewModel: GameViewModel) {
    // 添加按钮
    Button(
        onClick = {
            // 按钮点击事件，调用 ViewModel 的 insertGame 方法
            viewModel.insertGameItem(Item(id = 1, gameName = "2048", gameIntroduce = "Test", gamePlayTime = 100.0, bestScoreInGame = 0, gameRecommendationScore = 9.8))
            viewModel.insertGameItem(Item(id = 2, gameName = "tset", gameIntroduce = "Test", gamePlayTime = 100.0, bestScoreInGame = 0, gameRecommendationScore = 9.5))
            viewModel.insertGameItem(Item(id = 1000, gameName = "2048", gameIntroduce = "一款轻松愉快的2048合成游戏，滑动屏幕合成2048", gamePlayTime = 0.0, bestScoreInGame = 0, gameRecommendationScore = 9.8))
        },
        modifier = Modifier.padding(16.dp)
    ) {
        Text(text = "Insert Game")
    }
}

@Composable
fun GetButton(viewModel: GameViewModel) {
    val tmp = viewModel.getItemById(2)
    // 添加按钮
    Button(
        onClick = {
            // 按钮点击事件，调用 ViewModel 的 insertGame 方法

            Log.d("button","get reslt, its name is ${tmp?.gameName}")
        },
        modifier = Modifier.padding(16.dp)
    ) {
        Text(text = "Get Game Name")
    }
}



}

 //游戏大厅介绍游戏的控件
//@Composable
//fun MyCardFront(gameInfo: Item,startForResult: ActivityResultLauncher<Intent>){
//    val context = LocalContext.current
//
//    Card(
//        modifier = Modifier
//            .fillMaxWidth()
//            .padding(32.dp)
//            .clickable(onClick = {
//                val intent = Intent(context, WebViewActivity::class.java)
//                intent.putExtra("GameInfo", gameInfo);
//                startForResult.launch(intent)
//
//            }),
////        elevation = 4.dp
//
//    ){
//        CardUIDesign(gameInfo = gameInfo)
//    }
//}
//@Composable
//fun CardUIDesign(gameInfo: GameInfo){
//    Column {
//        Box(
//            modifier = Modifier.padding(4.dp)
//        ){
//            Text(text = gameInfo.gameName);
//        }
//        GameImage(gameInfo.gameOrder)
//        Box(
//            modifier = Modifier.padding(4.dp)
//        ){
//            Text(text = gameInfo.gameIntroduce)
//        }
//        Row{
//            Text(text = "当前游玩时间：${gameInfo.gamePlayTime}")
//            Text(text = "当前最高分数:${gameInfo.gamePlayTime}",modifier = Modifier)
//        }
//    }
//}


//@Composable
//fun MyText(name:String){
//    Text(text = name, fontSize = 24.sp)
//}
//
// 图片
//@Composable
//fun GameImage(gameOrder: GameOrder){
//    var Id =0
//    Id = when(gameOrder){
//        GameOrder.GAME_2048 -> R.drawable.plane_game_img
//        GameOrder.GAME_HitThePlane -> R.drawable.plane_game_img
//    }
//    Image(
//        painter = painterResource(id = Id),
//        contentDescription = "Plane Game Image",
//        modifier = Modifier
//            .fillMaxWidth()
//            .height(100.dp),
//        contentScale = ContentScale.FillBounds
//    )
//}
//
// TopBar
//@Composable
//fun SearchTopBar(){
//    TopAppBar(
//        title = {
//            Text(text = "小游戏平台")
//        },
//        actions = {
//            IconButton(onClick = onSearchClicked) {
//                Icon(
//                    imageVector = Icons.Filled.Search,
//                    contentDescription = "Search"
//                )
//            }
//        }
//    )
//}
//@Preview(showBackground = true)
//@Composable
//fun tmp(){
//    WebViewScr()
//}


