/*-----------------------------------
    グローバル変数
-----------------------------------*/
var action = "TEMPLATE";
//タイトル
var text;
//概要
var desc;
//場所
var loc = "";
//開始時間
var statT;
//終了時間
var endT;
//カレンダー登録へのURL
var url;
//締切日付
var deadline;
//Googleカレンダーに設定する日付
var dates;
//開始日、終了日を入れる配列
var d = [];
//説明タグ
var tag;
//カウンター
var cnt;
//インターンシップの実施件数
var len = $(".cpy_intbox_main02").length;

for(var i = 0;i < len;i++){
	text = $("title").text().split("リクナビ2015")[0].replace("株式会社","㈱")+"【エントリー締切】";
	desc = $(".cpy_intbox_main02 .rnhn_h3").eq(i).text();
	deadline = $(".cpy_intbox_main02 .rnhn_td").eq(i).text().replace("エントリー締切：","");
	d = formatToUTCDate(deadline);
	statT = "2013"+ d[0];
	endT = "2013"+ d[1];
	dates = statT + "/" + endT;

	//タグを説明文に追加
	$(".cpy_intbox_main02 tbody").eq(i).find("img").each(function(){
		desc += "【" + $(this).attr("alt") + "】";
	});

	desc += "\n";

	//カウンターを初期化
	cnt = 0;
	$(".cpy_intbox_main02 tbody").eq(i).find("td").each(function(){
		cnt++;
		//開始日、実施日数だけ追加
		if(cnt > 3){
			desc += $(this).text() + "\n";
		}
	});

	url = 'http://www.google.com/calendar/event?' +
    'action='   + action +
    '&text='    + encodeURIComponent(text)   +
    '&details=' + encodeURIComponent(desc) + ' ' + window.location +
    '&location='+ encodeURIComponent(loc)    +
    '&dates='   + dates +
    '&trp=true' +
    '&sprop=website:' + window.location +
    '&sprop=name:rikunavi';

    //Googleカレンダー追加ボタンを設置
	$(".cpy_intbox_main02 .rnhn_td").eq(i).append(
		$("<a>").attr({href:url,target:"_blank"}).append(
			$("<img>").attr("src","http://www.google.com/calendar/images/ext/gc_button2_ja.gif")
		)
	);
}

/*-----------------------------------
    締め切り日時をGoogleカレンダー用のフォーマットに変換
-----------------------------------*/
function formatToUTCDate(t){
	//日付
	var date = [];
	//開始日
	var start_month = Number(t.split("/")[0]);
	var start_day = Number(t.split("/")[1]);

	//終了日(開始日の翌日)
	var end_month = start_month;
	var end_day = start_day + 1;

	//月をまたぐ場合の処理
	if(start_month == 2){//2月の処理
		if(end_day > 28){
			end_day = end_day % 28;
			end_month++;
		}
	}else if(start_month == 4 || start_month == 6 || start_month == 9){//4,6,9月の処理
		if(end_day > 30){
			end_day = end_day % 30;
			end_month++;
		}
	}else{
		if(end_day > 31){
			end_day = end_day % 31;
			end_month++;
			//年をまたぐ場合の処理
			if(end_month > 12){
				end_month = end_month % 12;
			}
		}
	}

	//1ケタ月の時は先頭にゼロを追加
	if(start_month < 10){
		start_month = "0" + String(start_month);
	}

	if(start_day < 10){
		start_day = "0" + String(start_day);
	}

	if(end_month < 10){
		end_month = "0" + String(end_month);
	}

	if(end_day < 10){
		end_day = "0" + String(end_day);
	}

	date[0] = start_month + start_day;
	date[1] = end_month + end_day;

	return date;
}
