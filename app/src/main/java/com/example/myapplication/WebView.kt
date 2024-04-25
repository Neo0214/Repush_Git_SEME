package com.example.myapplication

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.core.content.pm.ShortcutInfoCompat
import android.annotation.SuppressLint
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.ui.viewinterop.AndroidView
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.compose.ui.Modifier

class WebViewActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            WebViewScreen(modifier = Modifier.fillMaxSize(), url ="file:///android_asset/plane/index1.html" )
        }
    }
}

@Composable
fun MyComposeWebView() {
    Surface {
        Text("Hello from WebView!")
        // 你可以在这里添加 WebView 或其他 Compose UI 组件
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