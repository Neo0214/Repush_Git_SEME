package com.example.myapplication

import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.myapplication.ui.theme.MyApplicationTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyAppFrontEnd();
        }
    }
}
@Composable
fun MyAppFrontEnd(){
    Column {
        MyText("My First App");
        MyButton();
    }

}
@Composable
fun MyText(name:String){
    Text(text = name, fontSize = 24.sp)
}

@Composable
fun MyButton() {
    val context = LocalContext.current
    Button(onClick = {
    /* 在这里定义点击事件 */
    openH5Game(context,WebViewActivity::class.java)
    }) {
        Text("Click me!")
    }
}
@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    MyAppFrontEnd()
}

fun openH5Game(context:Context, activityClass: Class<*>){
    val intent = Intent(context, activityClass)
    context.startActivity(intent)
}
