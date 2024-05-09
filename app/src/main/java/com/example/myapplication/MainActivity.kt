package com.example.myapplication

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.webkit.ConsoleMessage
import android.webkit.WebChromeClient
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
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.material3.Button
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
    private val url ="file:///android_asset/test.html"
//    private val url = "http://192.168.56.1:3000/"
    private val appDataContainer:AppDataContainer = AppDataContainer(this)
    private val viewModel: GameViewModel by viewModels<GameViewModel> {
        GameViewModelFactory(appDataContainer.itemsRepository)
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
//        SetGameInfo()

        setContent {

            Column {
//                MyText("游戏主界面");

//                MyCardFront(gameInfoArray[0],startForResult);
//                MyCardFront(gameInfo = gameInfoArray[1], startForResult =startForResult )
                WebViewScr(modifier = Modifier
                    .weight(1f)
                    .fillMaxSize(), url =url, viewModel = viewModel )
//                InsertButton(viewModel = viewModel)
//                GetButton(viewModel = viewModel)
            }
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
                settings.javaScriptEnabled = true // 启用 JavaScript
                addJavascriptInterface(WebApi(this,viewModel), "Android") // 注入接口

//                // 允许同源政策
//                settings.allowFileAccess = true
//                settings.allowContentAccess = true
//                settings.allowFileAccessFromFileURLs = true
//                settings.allowUniversalAccessFromFileURLs = true

                loadUrl(url)
            }
        },
        modifier = modifier
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

// 游戏大厅介绍游戏的控件
//@Composable
//fun MyCardFront(gameInfo: GameInfo,startForResult: ActivityResultLauncher<Intent>){
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


@Composable
fun MyText(name:String){
    Text(text = name, fontSize = 24.sp)
}

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
//    CardUIDesign(gameInfo = GameInfo("2048","一款简单的2048小游戏",GameOrder.GAME_2048))
//}


