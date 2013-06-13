Google Calendar from Rikunavi
============
リクナビインターン2015の募集ページに、Googleカレンダーのボタンを追加するChrome拡張です。

###注意点
 - 締め切り日がカレンダーに追加される  
 締め切り日の何時が締め切りかはわからないので、各自確かめる必要があることに注意してください。

 - リクナビインターン2015だけに適用される  
 2014年本採用、マイナビなどでは適用されません。  
 適応されるURLの設定は以下の通りになっています。  
`matches":["http://job.rikunabi.com/2015/company/internship/*"]`


ScreenShots
----
- (例)サイバーエージェントの場合  
1.インターン募集ページに飛びます  
<http://job.rikunabi.com/2015/company/internship/r925010098/>  
![ScreenShot](https://raw.github.com/naoyashiga/Chrome_Extensions/master/Google_Calendar_From_Rikunavi/screenshots/cyber.png)

2.ページ下部の「インターンシップ一覧」のところに、Googleカレンダーのボタンが追加されます

![ScreenShot](https://raw.github.com/naoyashiga/Chrome_Extensions/master/Google_Calendar_From_Rikunavi/screenshots/sample.png)

3.赤丸で囲まれたGoogleカレンダーのボタンを押します  

4.Googleカレンダーに飛び、予定を登録できます。  
![ScreenShot](https://raw.github.com/naoyashiga/Chrome_Extensions/master/Google_Calendar_From_Rikunavi/screenshots/calendar.png)

ダウンロードの仕方(初心者向け)
----
- ZIPボタンを押してダウンロードしてください。
![ScreenShot](https://raw.github.com/naoyashiga/Google_Calendar_From_Rikunavi/master/screenshots/download.png)  

ダウンロードの仕方(gitユーザ向け)
----
    $ git clone https://github.com/naoyashiga/Google_Calendar_From_Rikunavi.git

インストールの仕方
----
1.アドレスバーに以下のURLを入れてください  
`chrome://chrome/extensions/`  
2.右上のディベロッパーモードというチェックボックスにチェックを入れてください  

3.「パッケージ化されていない拡張機能を読み込む」というボタンを押して、解凍したファイルを選択してください  

![ScreenShot](https://raw.github.com/naoyashiga/Google_Calendar_From_Rikunavi/master/screenshots/install.png)


License
----
MIT License - [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)