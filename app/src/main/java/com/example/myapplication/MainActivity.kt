package com.example.myapplication

import android.app.Activity
import android.content.Intent
import android.icu.text.CaseMap.Title
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
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
import com.example.myapplication.Data.AbsAppDataBase
import com.example.myapplication.Data.AppDataBase
import com.example.myapplication.Data.GameInfo
import com.example.myapplication.Data.GameOrder
import com.example.myapplication.Data.GameReturnData
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.height
import androidx.compose.material3.IconButton
import androidx.compose.material3.TopAppBar
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import kotlin.properties.Delegates

class MainActivity : ComponentActivity() {
    // 设置游戏简介
    private val gameInfoArray = mutableListOf<GameInfo>()
    private lateinit var appDataBase: AppDataBase
    fun SetGameInfo(){
        gameInfoArray.add(GameInfo("2048","一款简单的2048小游戏",GameOrder.GAME_2048));
        gameInfoArray.add(GameInfo("飞机大战","一款轻松快速的打飞机游戏",GameOrder.GAME_HitThePlane));
    }


    //注册返回的内容
    private val startForResult = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
        if (result.resultCode == Activity.RESULT_OK) {
            val intent = result.data
            // Handle the data from intent
            val value = result.data?.getParcelableExtra<GameReturnData>("RetData")
            if (value != null) {
                appDataBase.updateGameTime(value.gameOrder,value.UseTime)
            }
        }
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        SetGameInfo()
        appDataBase= AppDataBase(this)

        setContent {

            Column {
                MyText("游戏主界面");

                MyCardFront(gameInfoArray[0],startForResult);
                MyCardFront(gameInfo = gameInfoArray[1], startForResult =startForResult )
            }
        }
    }
}

// 游戏大厅介绍游戏的控件
@Composable
fun MyCardFront(gameInfo: GameInfo,startForResult: ActivityResultLauncher<Intent>){
    val context = LocalContext.current

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(32.dp)
            .clickable(onClick = {
                val intent = Intent(context, WebViewActivity::class.java)
                intent.putExtra("GameInfo", gameInfo);
                startForResult.launch(intent)

            }),
//        elevation = 4.dp

    ){
        CardUIDesign(gameInfo = gameInfo)
    }
}
@Composable
fun CardUIDesign(gameInfo: GameInfo){
    Column {
        Box(
            modifier = Modifier.padding(4.dp)
        ){
            Text(text = gameInfo.gameName);
        }
        GameImage(gameInfo.gameOrder)
        Box(
            modifier = Modifier.padding(4.dp)
        ){
            Text(text = gameInfo.gameIntroduce)
        }
        Row{
            Text(text = "当前游玩时间：${gameInfo.gamePlayTime}")
            Text(text = "当前最高分数:${gameInfo.gamePlayTime}",modifier = Modifier)
        }
    }
}


@Composable
fun MyText(name:String){
    Text(text = name, fontSize = 24.sp)
}

// 图片
@Composable
fun GameImage(gameOrder: GameOrder){
    var Id =0
    Id = when(gameOrder){
        GameOrder.GAME_2048 -> R.drawable.plane_game_img
        GameOrder.GAME_HitThePlane -> R.drawable.plane_game_img
    }
    Image(
        painter = painterResource(id = Id),
        contentDescription = "Plane Game Image",
        modifier = Modifier
            .fillMaxWidth()
            .height(100.dp),
        contentScale = ContentScale.FillBounds
    )
}

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
@Preview(showBackground = true)
@Composable
fun tmp(){
    CardUIDesign(gameInfo = GameInfo("2048","一款简单的2048小游戏",GameOrder.GAME_2048))
}


