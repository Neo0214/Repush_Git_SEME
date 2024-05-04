//package com.example.myapplication
//
//import android.os.Bundle
//import androidx.activity.ComponentActivity
//import androidx.activity.compose.setContent
//import androidx.compose.material3.Text
//import androidx.compose.runtime.Composable
//import android.content.Intent
//import android.webkit.WebView
//import android.webkit.WebViewClient
//import androidx.compose.foundation.layout.Column
//import androidx.compose.foundation.layout.fillMaxSize
//import androidx.compose.foundation.layout.fillMaxWidth
//import androidx.compose.material3.Button
//import androidx.compose.ui.viewinterop.AndroidView
//import androidx.compose.ui.Modifier
//import androidx.compose.ui.platform.LocalContext
//import com.example.myapplication.Data_Deprecated.GameInfo
//import com.example.myapplication.Data_Deprecated.GameOrder
//import com.example.myapplication.Data_Deprecated.GameReturnData
//
//
//class WebViewActivity : ComponentActivity() {
//    private var startTime:Long = 0
//    private var totalTime :Long = 0
//    override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        val gameInfo: GameInfo? = intent.getParcelableExtra("GameInfo")
//        var url = ""
//        if (gameInfo != null) {
//            url = when(gameInfo.gameOrder){
//                GameOrder.GAME_2048 -> "file:///android_asset/2048/index.html"
//                GameOrder.GAME_HitThePlane -> "file:///android_asset/plane/index1.html"
//            }
//        }
//        startTime = System.currentTimeMillis()
//
//        setContent {
//            Column {
//                WebViewScreen(modifier = Modifier
//                    .weight(1f)
//                    .fillMaxSize(), url =url )
//                if (gameInfo != null) {
//                    BackButtom(gameInfo.gameOrder, totalTime,startTime)
//                }
//            }
//
//        }
//
//    }
//    override fun onResume(){
//        super.onResume()
//        startTime = System.currentTimeMillis()
//    }
//
//    override fun onPause() {
//        super.onPause()
//        totalTime += System.currentTimeMillis()-startTime
//    }
//
//
//}
////@Preview(showBackground = true)
//@Composable
//fun BackButtom(gameOrder: GameOrder, totalTime:Long,startTime:Long){
//    val context = LocalContext.current
//    Button(onClick = {
//        val score = 0
//        val retIntent = Intent()
//        val SumTime = totalTime +System.currentTimeMillis()-startTime
//        val retData = GameReturnData(gameOrder, score,SumTime)
//        retIntent.putExtra("RetData", retData)
//
//        // 检查 context 是否是 ComponentActivity 实例
//        if (context is ComponentActivity) {
//            context.setResult(ComponentActivity.RESULT_OK, retIntent)
//            context.finish() // 结束 Activity
//        }},modifier = Modifier.fillMaxWidth()) {
//        Text("保存并退出")
//    }
//}
//
//@Composable
//fun WebViewScreen(modifier: Modifier,url: String) {
//    AndroidView(
//        factory = { context ->
//            WebView(context).apply {
//                webViewClient = WebViewClient()
//                loadUrl(url)
//                settings.javaScriptEnabled = true
//            }
//        },
//        modifier = modifier
//    )
//}
//
//
