package com.example.myapplication

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.core.content.pm.ShortcutInfoCompat
import android.annotation.SuppressLint
import android.content.Intent
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Switch
import androidx.compose.ui.viewinterop.AndroidView
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.myapplication.Data.GameInfo
import com.example.myapplication.Data.GameOrder
import com.example.myapplication.Data.GameReturnData


class WebViewActivity : ComponentActivity() {
    private var startTime:Long = 0
    private var totalTime :Long = 0
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val gameInfo: GameInfo? = intent.getParcelableExtra("GameInfo")
        var url = ""
        if (gameInfo != null) {
            url = when(gameInfo.gameOrder){
                GameOrder.GAME_2048 -> "file:///android_asset/2048/index.html"
                GameOrder.GAME_HitThePlane -> "file:///android_asset/plane/index1.html"
            }
        }
        startTime = System.currentTimeMillis()

        setContent {
            Column {
                WebViewScreen(modifier = Modifier
                    .weight(1f)
                    .fillMaxSize(), url =url )
                if (gameInfo != null) {
                    BackButtom(gameInfo.gameOrder, totalTime,startTime)
                }
            }

        }

    }
    override fun onResume(){
        super.onResume()
        startTime = System.currentTimeMillis()
    }

    override fun onPause() {
        super.onPause()
        totalTime += System.currentTimeMillis()-startTime
    }


}
//@Preview(showBackground = true)
@Composable
fun BackButtom(gameOrder: GameOrder, totalTime:Long,startTime:Long){
    val context = LocalContext.current
    Button(onClick = {
        val score = 0
        val retIntent = Intent()
        val SumTime = totalTime +System.currentTimeMillis()-startTime
        val retData = GameReturnData(gameOrder, score,SumTime)
        retIntent.putExtra("RetData", retData)

        // 检查 context 是否是 ComponentActivity 实例
        if (context is ComponentActivity) {
            context.setResult(ComponentActivity.RESULT_OK, retIntent)
            context.finish() // 结束 Activity
        }},modifier = Modifier.fillMaxWidth()) {
        Text("保存并退出")
    }
}

@Composable
fun WebViewScreen(modifier: Modifier,url: String) {
    AndroidView(
        factory = { context ->
            WebView(context).apply {
                webViewClient = WebViewClient()
                loadUrl(url)
                settings.javaScriptEnabled = true
            }
        },
        modifier = modifier
    )
}


